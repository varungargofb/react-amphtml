import React from 'react';
import { Script } from '../amphtml';
import { AMP } from '../constants';

const AmpScripts = class {
  constructor(htmlFormat = AMP) {
    this.scripts = new Map([
      [
        htmlFormat,
        <Script key={htmlFormat} specName={htmlFormat} />,
      ],
    ]);
  }

  addComponent(extension) {
    this.scripts.set(extension, <Script key={extension} specName={extension} />);
  }

  getScriptElements() {
    return [...this.scripts.values()];
  }
};

export default AmpScripts;