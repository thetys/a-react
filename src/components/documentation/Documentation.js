import React, { Component } from 'react';
import { DocumentationContent } from './DocumentationContent';
import { DocumentationSidebar } from './DocumentationSidebar';

export class Documentation extends Component {
   render () {
    return <div className="w100">
      <DocumentationSidebar />
      <DocumentationContent />
    </div>;
  }
}
