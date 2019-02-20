import React, { Component } from 'react';
import { DocumentationContent } from './DocumentationContent';
import { DocumentationSidebar } from './DocumentationSidebar';

export class Documentation extends Component {
  constructor (props) {
    super(props);
    this.state = {
      categories: {
        characters: [
          {
            'id': 'cjrtbf4cy000z0634a22opm4n',
            'name': 'A',
            'description': 'Personnage principal',
          },
          {
            'id': 'cjrtbf4dn00180634n4w17u8x',
            'name': 'Cathy Penneflamme',
            'description': 'Journaliste au monde depuis 1875',
          },
        ],
        places: [
          {
            'id': 'cjrtbf4d000110634eovibtwm',
            'name': 'Centrale Moutte',
            'description': 'Sordide prison de Loire-atlantique',
          },
          {
            'id': 'cjrtbf4e4001c0634wdyvdzn1',
            'name': 'JJ Facility',
            'description': 'Centre de détention longue durée personnalisé',
          },
          {
            'id': 'cjsbk9yby00060634wct80er5',
            'name': 'Ici',
            'description': 'Descriptino',
          },
          {
            'id': 'cjsbkyodu000e06347n4t3ujg',
            'name': 'Nouveau lieu',
            'description': 'héhéhé',
          },
          {
            'id': 'cjsbl10r6000m0634j1slt8te',
            'name': 'Encore',
            'description': 'encore',
          },
          {
            'id': 'cjsbm5nuv000v0634gant8xig',
            'name': 'aaa',
            'description': 'aaa',
          },
          {
            'id': 'cjsbm7gba00110634699g1r68',
            'name': 'aaa',
            'description': 'aa',
          },
          {
            'id': 'cjsbm7ycv00170634c2d33rre',
            'name': 'bbb',
            'description': 'bbb',
          },
        ],
        occurrences: [
          {
            'id': 'cjrtbf4ct000y0634ju8foe0a',
            'name': 'Evasion de Centrale Moutte',
            'description': 'A déclenche une émeute au sein de Centrale Moutte et s\'évade dans la confusion.',
            'startDate': '2017-11-21T00:00:00.000Z',
            'endDate': null,
            'places': [
              {
                'id': 'cjrtbf4d000110634eovibtwm',
                'name': 'Centrale Moutte',
              },
            ],
            'characters': [
              {
                'id': 'cjrtbf4cy000z0634a22opm4n',
                'name': 'A',
              },
            ],
          },
        ],
      },
    };
  }

  render () {
    return <div className="w100">
      <DocumentationSidebar categories={this.state.categories}/>
      <DocumentationContent/>
    </div>;
  }
}
