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

      zoomControl.pan({
        x: this.m[4],
        y: this.m[5],
      });

      const transforms = this.getTransforms();

      $svg.css(
        "transform",
        `matrix(${transforms[0]},${transforms[1]},${transforms[2]},${transforms[3]},${this.m[4]},${this.m[5]})`,
      );
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
    $(".svg-pan-zoom_viewport").css("opacity", 0);

    zoomControl.reset();
    zoomControl.contain();

    if (zoomControl.getZoom() > 1) {
      zoomControl.zoom(1);
    }

    zoomControl.center();

    setTimeout(() => {
      const transforms = panControl.getTransforms();

      panControl.translate.x = transforms[4];
      panControl.translate.y = 120;
      panControl.update();
      panControl.applyTo();
      $('[data-xviz="machine-container"]').css("opacity", 1);
      $(".svg-pan-zoom_viewport").css("opacity", 1);
    }, 100);
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

  ///
  $(".panZoomControlTools").remove();
  $container.append(`<div class="panZoomControlTools" title="Reset view">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  </div>`);
  $(".panZoomControlTools").off("click");
  $(".panZoomControlTools").on("click", () => {
    _autoLayout();
  });
  $(".panZoomControlTools-reload").remove();
  $container.append(`<div class="panZoomControlTools-reload" title="Reload">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  </div>`);
  $(".panZoomControlTools-reload").off("click");
  $(".panZoomControlTools-reload").on("click", () => {
    location.reload();
  });
}
