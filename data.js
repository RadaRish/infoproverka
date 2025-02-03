var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Вход",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.06221103975208209,
        "pitch": 0.02601931689469872,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": 0.1260927298426182,
          "pitch": 0.250256736766314,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "Фойе",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.2519665670011868,
        "pitch": 0.03758478062388271,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": 2.9154004609013677,
          "pitch": 0.17452472013651388,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": 0.8783661356222936,
          "pitch": 0.21880263950598788,
          "rotation": 0,
          "target": "2--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--",
      "name": "Пост охраны",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.8914299365651637,
        "pitch": 0,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": 2.715189964778446,
          "pitch": 0.2844484355908943,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": -1.632771481487504,
          "pitch": 0.14410673999643464,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "Коридор",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.254715028782904,
        "pitch": -0.006505276210273081,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": 3.138490355617612,
          "pitch": 0.12934538714132415,
          "rotation": 0,
          "target": "2--"
        },
        {
          "yaw": -1.504673968411975,
          "pitch": 0.2006352787161525,
          "rotation": 0,
          "target": "4--2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4--2",
      "name": "Коридор 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.7458867778067653,
        "pitch": 0.14370605638859502,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": 1.5972073358486067,
          "pitch": 0.10275455835403413,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": 0.026918888935231422,
          "pitch": 0.013719409857394282,
          "rotation": 0,
          "target": "5-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-",
      "name": "Лестница",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.06843073313596548,
        "pitch": 0.0975791431541353,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": -0.17562045722287145,
          "pitch": 0.4128832449838029,
          "rotation": 0,
          "target": "4--2"
        },
        {
          "yaw": 0.3387449498664701,
          "pitch": -0.09912249629940106,
          "rotation": 0,
          "target": "6--2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6--2-",
      "name": "Коридор 2 этаж",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.8087653422903607,
        "pitch": -0.008673701613702178,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": -0.12028731877535392,
          "pitch": 0.3921816914447618,
          "rotation": 0,
          "target": "5-"
        },
        {
          "yaw": -1.608359067053172,
          "pitch": 0.1505690477603796,
          "rotation": 0,
          "target": "7-----"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-----",
      "name": "Вход в Тет-А-Тет",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.17418713911866313,
        "pitch": -0.0021684254034255446,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": 1.800427982704516,
          "pitch": 0.09494948865335573,
          "rotation": 0,
          "target": "6--2-"
        },
        {
          "yaw": 0.15969582884797262,
          "pitch": 0.299313982648183,
          "rotation": 0,
          "target": "8--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8--",
      "name": "Общий кабинет",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.7276734218582419,
        "pitch": -0.026184399487839016,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": -1.6225792195661946,
          "pitch": 0.22497409369383803,
          "rotation": 0,
          "target": "7-----"
        },
        {
          "yaw": 1.6584655679154903,
          "pitch": 0.09182062541645841,
          "rotation": 0,
          "target": "9---2"
        },
        {
          "yaw": -0.039008477810078546,
          "pitch": 0.2619278092420956,
          "rotation": 0,
          "target": "10--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9---2",
      "name": "Общий кабинет 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.6170076847217274,
        "pitch": 0.12004608865422917,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": -1.5653396121924246,
          "pitch": 0.13932366234548432,
          "rotation": 0,
          "target": "8--"
        },
        {
          "yaw": 0.1253534252882922,
          "pitch": 0.2474262533692695,
          "rotation": 0,
          "target": "11----"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10--",
      "name": "Кабинет Инфопроверка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.9723650498841323,
        "pitch": 0.16936594293595775,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": 2.0019183615205316,
          "pitch": 0.18454834859096003,
          "rotation": 0,
          "target": "8--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11----",
      "name": "Кабинет Тет-А-Тет",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.423748361341005,
        "pitch": 0.2691627177937228,
        "fov": 1.349242487947885
      },
      "linkHotspots": [
        {
          "yaw": -3.1204919207596973,
          "pitch": 0.12900614316601633,
          "rotation": 0,
          "target": "9---2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
