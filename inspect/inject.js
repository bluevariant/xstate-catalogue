$(document).ready(inject);

function inject() {
  const $container = $('[data-xviz="machine-container"]');

  if ($container.length === 0) {
    return setTimeout(inject, 33);
  }

  const $group = $('[data-xviz="machine-group"]');
  const $body = $("body");
  const control = {
    zoomMutation: 0.1,
    minZoom: 0.5,
    maxZoom: 2.0,
    zoomValue: 1.0,
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
  };
  const _update = () => {
    $group.attr(
      "style",
      `transform: translate(${control.translate.x}px, ${control.translate.y}px) scale(${control.zoomValue})`,
    );
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

      _update();
    }
  };

  _autoLayout();
  $body.on("wheel", function (e) {
    e.stopPropagation();

    if (e.originalEvent["wheelDelta"] / 120 > 0) {
      control.zoomValue += control.zoomMutation;
    } else {
      control.zoomValue -= control.zoomMutation;
    }

    control.zoomValue = Math.min(Math.max(control.minZoom, control.zoomValue), control.maxZoom);

    _update();
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
        _update();
      }

      control.translate.temp.x = e.pageX;
      control.translate.temp.y = e.pageY;
    }
  });
  $container.on("mouseup", function (e) {
    control.translate.temp.ready = false;
  });
}
