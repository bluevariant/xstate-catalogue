$(document).ready(inject);

function inject() {
  const $container = $('[data-xviz="machine-container"]');

  if ($container.length === 0) {
    return setTimeout(inject, 33);
  }

  const $group = $('[data-xviz="machine-group"]');
  const $body = $("body");
  const control = {
    scaleAmount: 1.1,
    minScale: 0.5,
    maxScale: 2.0,
    scale: 1.0,
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
    applyTo() {
      const m = [this.scale, 0, 0, this.scale, this.translate.x, this.translate.y];

      $group.css("transform", `matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`);
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
  $group.on("wheel", function (e) {
    e.stopPropagation();

    const rect = $(this)[0].getBoundingClientRect();
    const lastZoomValue = control.scale;
    let amount;

    if (e.originalEvent["wheelDelta"] / 120 > 0) {
      amount = control.scaleAmount;
    } else {
      amount = 1 / control.scaleAmount;
    }

    control.scale *= amount;
    // control.zoomValue = Math.min(Math.max(control.minZoom, control.zoomValue), control.maxZoom);
    // amount = control.zoomValue / lastZoomValue;

    const x = e.pageX - rect.width / 2;
    const y = e.pageY - rect.height / 2;

    control.translate.x = x - (x - control.translate.x) * amount;
    control.translate.y = y - (y - control.translate.y) * amount;

    control.applyTo();
  });
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

      control.translate.x += e.pageX - control.translate.temp.x;
      control.translate.y += e.pageY - control.translate.temp.y;

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
