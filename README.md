# Proyecto Hoteles

## Este proyecto consta de dos carpetas: API y APP

## API está construido con Node.js y Express
* Se ejecuta con npm run dev
* En el navegador entrar a la url: http://localhost:3000/hotels
* Traerá la lista de hoteles:
```
[
  {
    "id": "1",
    "name": "Hotel Dann",
    "stars": 5,
    "images": [],
    "price": 200
  },
  {
    "id": "2",
    "name": "Hotel Monasterio",
    "stars": 5,
    "images": [],
    "price": 150
  },
  {
    "id": "3",
    "name": "Hotel Camino Real",
    "stars": 4,
    "images": [],
    "price": 100
  },
  {
    "id": "4",
    "name": "Hotel Camino Viejo",
    "stars": 4,
    "images": [],
    "price": 126
  }
]
```
* Hotel con id: http://localhost:3000/hotels/3
```
[
  {
    "id": "3",
    "name": "Hotel Camino Real",
    "stars": 4,
    "images": [],
    "price": 100
  }
]
```

## APP está construido con Expo Cli
* Se ejecuta con yarn dev