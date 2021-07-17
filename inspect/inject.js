$(document).ready(inject);

function inject() {
  const $container = $('[data-xviz="machine-container"]');

  if ($container.length === 0) {
    return setTimeout(inject, 33);
  }

  svgPanZoom('[data-xviz="machine-container"] svg', {
    viewportSelector: '[data-xviz="machine-container"]',
    dblClickZoomEnabled: false,
    zoomScaleSensitivity: 0.3,
    minZoom: 0,
    maxZoom: 999,
    controlIconsEnabled: false,
    panEnabled: false,
  });

  const $body = $("body");
  const $svg = $('[data-xviz="machine-container"] svg');
  // https://stackoverflow.com/a/60235061/6435579
  const control = {
    m: [1, 0, 0, 1, 0, 0],
    translate: {
      x: 0,
      y: 0,
      distance: 6,
      temp: {
        ready: false,
        x: 0,
        y: 0,
      },
      start: {
        x: 0,
        y: 0,
      },
    },
    dirty: true,
    update() {
      this.dirty = false;
      this.m[3] = this.m[0] = 1;
      this.m[2] = this.m[1] = 0;
      this.m[4] = this.translate.x;
      this.m[5] = this.translate.y;
    },
    applyTo() {
      if (this.dirty) {
        this.update();
      }

      $svg.css(
        "transform",
        `matrix(${this.m[0]},${this.m[1]},${this.m[2]},${this.m[3]},${this.m[4]},${this.m[5]})`,
      );
    },
    pan(amount) {
      if (this.dirty) {
        this.update();
      }

      this.translate.x += amount.x;
      this.translate.y += amount.y;
      this.dirty = true;
    },
  };
  const _autoLayout = () => {
    const $machine = $('[data-xviz="machine"]');

    if ($machine.length > 0) {
      if ($machine.height() < $container.height()) {
        control.translate.y = Math.max(
          0,
          parseInt(($container.height() - $machine.height()) / 4 + ""),
        );
      }

      if ($machine.width() < $container.width()) {
        control.translate.x = parseInt(($container.width() - $machine.width()) / 2 + "");
      }

      control.applyTo();
    }
  };

  _autoLayout();
  $body.on("wheel", function (e) {
    e.stopPropagation();
  });
  $container.on("click", function (e) {
    const a = control.translate.start.x - e.pageX;
    const b = control.translate.start.y - e.pageY;
    const c = Math.sqrt(a * a + b * b);

    if (c > control.translate.distance) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
  $container.on("mousedown", function (e) {
    if (e.which === 1) {
      control.translate.temp.ready = true;
      control.translate.temp.x = e.pageX;
      control.translate.temp.y = e.pageY;
      control.translate.start.x = e.pageX;
      control.translate.start.y = e.pageY;
    }
  });
  $container.on("mousemove", function (e) {
    if (control.translate.temp.ready) {
      const a = control.translate.start.x - e.pageX;
      const b = control.translate.start.y - e.pageY;
      const c = Math.sqrt(a * a + b * b);

      control.pan({
        x: e.pageX - control.translate.temp.x,
        y: e.pageY - control.translate.temp.y,
      });

      if (c > control.translate.distance) {
        control.applyTo();
      }

      control.translate.temp.x = e.pageX;
      control.translate.temp.y = e.pageY;
    }
  });
  $container.on("mouseup", function (e) {
    control.translate.temp.ready = false;
  });
  $container.on("mouseleave", function (e) {
    control.translate.temp.ready = false;
  });
}
