import React from 'react';
import PropTypes from 'prop-types';
import { CanvasSpace } from 'pts';

import { CanvasStyles } from './style';

class Canvas extends React.Component {
  static propTypes = {
    onAction: PropTypes.func.isRequired,
    onAnimate: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
    onResize: PropTypes.func.isRequired,
    bgcolor: PropTypes.string.isRequired,
    resize: PropTypes.bool.isRequired,
    retina: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.canvRef = React.createRef();
    this.space = null;
    this.form = null;
  }

  componentDidMount() {
    this.init();
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update = () => {
    this.space.bindMouse().bindTouch().play();
  }

  animate = (time, ftime) => {
    const { onAnimate } = this.props;
    if (onAnimate) {
      onAnimate(this.space, this.form, time, ftime);
    } else {
      this.form.point(this.space.pointer, 20, 'circle');
    }
  };

  start = (bound, space) => {
    const { onStart } = this.props;
    if (onStart) {
      onStart(bound, space);
    }
  };

  resize = (size, evt) => {
    const { onResize } = this.props;
    if (onResize) {
      onResize(this.space, this.form, size, evt);
    }
  };

  action = (type, px, py, evt) => {
    const { onAction } = this.props;
    if (onAction) {
      onAction(this.space, this.form, type, px, py, evt);
    }
  }

  init = () => {
    const { bgcolor, resize, retina } = this.props;
    this.space = new CanvasSpace(this.canvRef).setup({ bgcolor, resize, retina });
    this.form = this.space.getForm();
    this.space.add(this);
  };

  render() {
    return (
      <CanvasStyles ref={this.canvRef} />
    );
  }
}

export default Canvas;
