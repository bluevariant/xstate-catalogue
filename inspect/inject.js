$(document).ready(inject);

function inject() {
  const $container = $('[data-xviz="machine-container"]');

  if ($container.length === 0) {
    return setTimeout(inject, 33);
  }

  $container.css("opacity", 0);

  const zoomControl = svgPanZoom('[data-xviz="machine-container"] svg', {
    viewportSelector: '[data-xviz="machine-container"]',
    dblClickZoomEnabled: false,
    zoomScaleSensitivity: 0.3,
    minZoom: 0.5,
    maxZoom: 10,
    controlIconsEnabled: false,
    panEnabled: false,
    contain: false,
  });

  const $body = $("body");
  const $svg = $(".svg-pan-zoom_viewport");
  // https://stackoverflow.com/a/60235061/6435579
  const panControl = {
    m: [1, 0, 0, 1, 0, 0],
    translate: {
      x: 0,
      y: 0,
      distance: 6,
      temp: {
        ready: false,
        moved: 0,
        x: 0,
        y: 0,
      },
      start: {
        x: 0,
        y: 0,
      },
    },
    dirty: true,
    getTransforms() {
      return $svg
        .css("transform")
        .split("matrix(")[1]
        .split(")")[0]
        .split(",")
        .map((v) => parseFloat(v));
    },
    update() {
      this.dirty = false;
      this.m = this.getTransforms();
      this.m[4] = this.translate.x;
      this.m[5] = this.translate.y;
    },
    applyTo() {
      if (this.dirty) {
        this.update();
      }

      const transforms = this.getTransforms();

      $svg.css(
        "transform",
        `matrix(${transforms[0]},${transforms[1]},${transforms[2]},${transforms[3]},${this.m[4]},${this.m[5]})`,
      );
      zoomControl.pan({
        x: this.m[4],
        y: this.m[5],
      });
    },
    pan(amount) {
      if (this.dirty) {
        this.update();
      }

      const transforms = this.getTransforms();

      this.translate.x = transforms[4] + amount.x;
      this.translate.y = transforms[5] + amount.y;
      this.dirty = true;
    },
  };
  const _autoLayout = () => {
    // const $machine = $('[data-xviz="machine"]');
    //
    // if ($machine.length > 0) {
    //   if ($machine.height() < $container.height()) {
    //     control.translate.y = Math.max(
    //       0,
    //       parseInt(($container.height() - $machine.height()) / 4 + ""),
    //     );
    //   }
    //
    //   if ($machine.width() < $container.width()) {
    //     // control.translate.x = parseInt(($container.width() - $machine.width()) / 2 + "");
    //     control.translate.x = 0;
    //   }
    //
    //   control.applyTo();
    // }

    zoomControl.contain();

    if (zoomControl.getZoom() > 1) {
      zoomControl.zoom(1);
    }

    zoomControl.center();

    const transforms = panControl.getTransforms();

    panControl.translate.x = transforms[4];
    panControl.translate.y = 120;
    panControl.applyTo();

    $('[data-xviz="machine-container"]').css("opacity", 1);
  };

  _autoLayout();
  $body.on("wheel", function (e) {
    e.stopPropagation();
  });
  $container.on("click", function (e) {
    if (panControl.translate.temp.moved > panControl.translate.distance) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
  $container.on("mousedown", function (e) {
    if (e.which === 1) {
      panControl.translate.temp.ready = true;
      panControl.translate.temp.moved = 0;
      panControl.translate.temp.x = e.pageX;
      panControl.translate.temp.y = e.pageY;
    }
  });
  $container.on("mousemove", function (e) {
    if (panControl.translate.temp.ready) {
      const a = e.pageX - panControl.translate.temp.x;
      const b = e.pageY - panControl.translate.temp.y;
      const c = Math.sqrt(a * a + b * b);

      panControl.pan({
        x: e.pageX - panControl.translate.temp.x,
        y: e.pageY - panControl.translate.temp.y,
      });

      if (panControl.translate.temp.moved > panControl.translate.distance) {
        panControl.applyTo();
      }

      panControl.translate.temp.x = e.pageX;
      panControl.translate.temp.y = e.pageY;
      panControl.translate.temp.moved += c;
    }
  });
  $container.on("mouseup", function (e) {
    panControl.translate.temp.ready = false;
  });
  $container.on("mouseleave", function (e) {
    panControl.translate.temp.ready = false;
  });
}
