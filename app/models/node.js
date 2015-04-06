import DS from 'ember-data';

var Node = DS.Model.extend({
  label: DS.attr('string')
});

// Node.reopenClass({
//   FIXTURES: [
//     {id: 1, label: 'OLT_CHASSIS: 1', level: 0, },
//     {id: 2, label: 'PON_CARD: 5', level: 1, },
//     {id: 3, label: 'PON_CARD: 6', level: 1, },
//     {id: 4, label: 'BUILDING: Harborview', level: 2, },
//     {id: 5, label: 'BUILDING: Harborview', level: 2, }
//   ]
// });

Node.reopenClass({
  FIXTURES: [
    {
      "id": 96418,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96417,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96416,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 8.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96411,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96410,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96409,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 7.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96404,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96403,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96402,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 6.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96393,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96392,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96391,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 5.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96382,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96381,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96380,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 4.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96371,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96370,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96369,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 3.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96320,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96319,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96318,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 24.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96269,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96268,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96267,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 23.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96218,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96217,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96216,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 22.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96167,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96166,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96165,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 21.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96116,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96115,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96114,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 20.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95861,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95860,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95859,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 15.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95810,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95809,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95808,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 14.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95759,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95758,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95757,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 13.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95708,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95707,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95706,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 12.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95701,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95700,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95699,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 11.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95690,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95689,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95688,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 10.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95675,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B63709C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95671,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95670,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95669,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 1.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95668,
      "type": "splitter",
      "level": 4,
      "label": "\nSPLITTER:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/splitter.png",
      // "shape": "image"
    },
    {
      "id": 95667,
      "type": "fdh",
      "level": 3,
      "label": "\nFDH:\n HV1",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/fdh.png",
      // "shape": "image"
    },
    {
      "id": 95666,
      "type": "building",
      "level": 2,
      "label": "\nBUILDING:\n Harborview",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      }
    },
    {
      "id": 95665,
      "type": "pon_card",
      "level": 1,
      "label": "\nPON_CARD:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/pon_card.png",
      // "shape": "image"
    },
    {
      "id": 95664,
      "type": "olt_chassis",
      "level": 0,
      "label": "\nOLT_CHASSIS:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/olt_chassis.png",
      // "shape": "image"
    },
    {
      "id": 95659,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9111B",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95658,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 612.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95657,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B6366A4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95653,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9115A",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95652,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 611.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95647,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 913D7",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95646,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 610.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95641,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91487.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95640,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 609.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95639,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B6C35D8",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95635,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910D8",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95634,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 607.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95629,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91353.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95628,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 606.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95627,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C5630",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95623,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 911C9",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95622,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 605.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95617,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9128C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95616,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 604.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95611,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 911CC",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95610,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 603.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95609,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B762650",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95605,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910C7",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95604,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 602.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95599,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90F97",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95598,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 601.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95597,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 11.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95596,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B591028",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95592,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91095.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95591,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 623.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95586,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914B6",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95585,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 622.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95580,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 913BA",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95579,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 620.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95574,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 913A6",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95573,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 619.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95572,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B5C242C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95568,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9139D",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95567,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 618.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95566,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B6C3594",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95562,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 913B1",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95561,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 617.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95556,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91105.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95555,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 616.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95550,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9111F",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95549,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 615.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95548,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B7626D0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95544,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9106D",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95543,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 614.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95542,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 10.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95541,
      "type": "splitter",
      "level": 4,
      "label": "\nSPLITTER:\n 4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/splitter.png",
      // "shape": "image"
    },
    {
      "id": 95540,
      "type": "fdh",
      "level": 3,
      "label": "\nFDH:\n HV1",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/fdh.png",
      // "shape": "image"
    },
    {
      "id": 95539,
      "type": "building",
      "level": 2,
      "label": "\nBUILDING:\n Harborview",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      }
    },
    {
      "id": 95538,
      "type": "pon_card",
      "level": 1,
      "label": "\nPON_CARD:\n 6",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/pon_card.png",
      // "shape": "image"
    },
    {
      "id": 95533,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910AA",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95532,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 512.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95531,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B763230",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95527,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910E2",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95526,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 511.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95521,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910E9",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95520,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 510.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95519,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B72D36C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95515,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914D8",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95514,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 509.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95509,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914E2",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95508,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 508.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95503,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 913D4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95502,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 507.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95501,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B762F18",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95497,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 915A4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95496,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 506.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95491,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 51429.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95490,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 505.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95489,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B73A9DC",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95485,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9132A",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95484,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 504.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95479,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910CD",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95478,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 503.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95473,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91271.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95472,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 502.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95467,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9108D",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95466,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 501.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95465,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 9.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95464,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B94DC38",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95460,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910E1",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95459,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 523.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95454,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9109B",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95453,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 522.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95363,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90EEE",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95362,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 407.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95361,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B763314",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95357,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90F2C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95356,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 406.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95351,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90E5B",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95350,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 405.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95349,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 7.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95344,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91103.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95343,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 613.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95342,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 10.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95341,
      "type": "splitter",
      "level": 4,
      "label": "\nSPLITTER:\n 3",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/splitter.png",
      // "shape": "image"
    },
    {
      "id": 95340,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C5CB0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95336,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9109F",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95335,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 321.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95330,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91230",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95329,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 319.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95324,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9128F",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95323,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 318.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95322,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B73AEC8",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95318,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91299",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95317,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 317.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95312,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91307",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95311,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 316.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95306,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91132",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95305,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 315.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95304,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 4.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95303,
      "type": "splitter",
      "level": 4,
      "label": "\nSPLITTER:\n 2.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/splitter.png",
      // "shape": "image"
    },
    {
      "id": 95298,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90EB2",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95297,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 403.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95292,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90ECC",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95291,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 402.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95290,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B7631F4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95286,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91503",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95285,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 401.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95284,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 7.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95283,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B703EBB",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95279,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9122F",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95278,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 423.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95273,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914C8",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95272,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 422.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95267,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91489",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95266,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 421.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95261,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9143A",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95260,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 420.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95255,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91515",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95254,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 419.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95253,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C5890",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95249,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9143B",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95248,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 418.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95247,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C5A1C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95243,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90DDC",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95242,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 417.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95237,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90E3A",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95236,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 416.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95231,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90D78",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95230,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 415.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95229,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B63778C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95225,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90E0D",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95224,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 414.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95219,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90D60",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95218,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 413.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95217,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 6.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95212,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9126D",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95211,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 312.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95210,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B94DB74",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95206,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914D7",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95205,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 311.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95204,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C5C6C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95200,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914BA",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95199,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 309.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96065,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96064,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96063,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 19.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 96014,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 96013,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 96012,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 18.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95963,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95962,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95961,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 17.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95912,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95911,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n N/A",
      "color": {
        "background": "orange",
        "border": "orange",
        "highlight": {
          "background": "pink",
          "border": "red"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95910,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 16.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95194,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91513",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95193,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 308.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95188,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9147E",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95187,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 307.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95182,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914E7",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95181,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 305.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95180,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B704360",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95176,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9145E",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95175,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 304.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95174,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C5CDC",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95170,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914C7",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95169,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 303.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95168,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B7F2F68",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95164,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914CA",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95163,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 302.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95158,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91463",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95157,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 301.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95156,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 5.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95155,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B70441C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95151,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914D4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95150,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 323.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95145,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90F9F",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95144,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 322.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95143,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 4.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95142,
      "type": "splitter",
      "level": 4,
      "label": "\nSPLITTER:\n 2",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/splitter.png",
      // "shape": "image"
    },
    {
      "id": 95141,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B7F3028",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95137,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90FBA",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95136,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 314.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95131,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91098",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95130,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 313.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95129,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 4.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95128,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C57EC",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95124,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914A4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95123,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 223.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95118,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91124",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95117,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 222.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95112,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914A2",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95111,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 221.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95106,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914DA",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95105,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 220.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95104,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C5324",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95100,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 911A3",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95099,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 219.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95094,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91318",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95093,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 218.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95088,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9117D",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95087,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 216.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95086,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0136C52E4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95082,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91113",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95081,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 215.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95080,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B762784",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95076,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9114F",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95075,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 214.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95070,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914BE",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95069,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 213.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95068,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 3.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95063,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91508",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95062,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 212.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95061,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B7E0C74",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95057,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914D3",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95056,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 211.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95055,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B7F2618",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95051,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910B6",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95050,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 210.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95045,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91493",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95044,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 209.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95039,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9116D",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95038,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 208.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95033,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91001",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95032,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 207.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95031,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B7F2FF8",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95027,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9101E",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95026,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 206.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95021,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90FF9",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95020,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 205.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95015,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91046",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95014,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 204.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95009,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90CF7",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95008,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 203.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95007,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B7F2590",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95003,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90D20",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95002,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 202.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94997,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90F61",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94996,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 201.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94995,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 2.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 94994,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B63783C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 94990,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 916A6",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94989,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 114.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94984,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914AF",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94983,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 113.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95448,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 912F9",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95447,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 521.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95442,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90FC2",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95441,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 520.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95440,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B94DB24",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95436,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90F21",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95435,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 519.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95430,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90E81",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95429,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 518.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95428,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B73AEE8",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95424,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90ED4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95423,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 517.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95418,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90C25",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95417,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 516.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95412,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90EFD",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95411,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 515.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95410,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n 88F0316C5980",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95406,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 910F3",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95405,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 514.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95400,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90F6E",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95399,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 513.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95398,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 8.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 95393,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90EA9",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95392,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 412.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95391,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B703F7C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95387,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90EAA",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95386,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 411.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95381,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90EF9",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95380,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 410.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95379,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B73AAB0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 95375,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90E99",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95374,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 409.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 95369,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90EB5",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 95368,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 408.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94982,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B63709C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 94978,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91517",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94977,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 111.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94976,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B63783C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 94972,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 914CD",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94971,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 109.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94966,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 9151C",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94965,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 107.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94964,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B703FD4",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 94960,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 91421",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94959,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 105.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94958,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B72D5C0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 94954,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90EF1",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94953,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 103.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94952,
      "type": "ont_ge_4_mac",
      "level": 8,
      "label": "\nONT_GE_4_MAC:\n F40F1B72D488",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/wap.png",
      // "shape": "image"
    },
    {
      "id": 94948,
      "type": "ont_sn",
      "level": 7,
      "label": "\nONT_SN:\n 90DE2",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/ont_sn.png",
      // "shape": "image"
    },
    {
      "id": 94947,
      "type": "room",
      "level": 6,
      "label": "\nROOM:\n 101.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/door.png",
      // "shape": "image"
    },
    {
      "id": 94946,
      "type": "rdt",
      "level": 5,
      "label": "\nRDT:\n 1.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/rdt.png",
      // "shape": "image"
    },
    {
      "id": 94945,
      "type": "splitter",
      "level": 4,
      "label": "\nSPLITTER:\n 1.0",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/splitter.png",
      // "shape": "image"
    },
    {
      "id": 94944,
      "type": "fdh",
      "level": 3,
      "label": "\nFDH:\n HV1",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/fdh.png",
      // "shape": "image"
    },
    {
      "id": 94943,
      "type": "building",
      "level": 2,
      "label": "\nBUILDING:\n Harborview",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      }
    },
    {
      "id": 94942,
      "type": "pon_card",
      "level": 1,
      "label": "\nPON_CARD:\n 5",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/pon_card.png",
      // "shape": "image"
    },
    {
      "id": 94941,
      "type": "olt_chassis",
      "level": 0,
      "label": "\nOLT_CHASSIS:\n ELCTWN001",
      "color": {
        "background": "green",
        "border": "green",
        "highlight": {
          "background": "yellow",
          "border": "green"
        }
      },
      // "image": "/assets/node_pics/olt_chassis.png",
      // "shape": "image"
    }
  ]
});


export default Node