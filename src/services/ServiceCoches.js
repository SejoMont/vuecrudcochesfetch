import Global from "@/Global";

export default class ServiceCoches {
  // Método para obtener la lista de coches
  getCoches() {
    return new Promise(function (resolve, reject) {
      var request = "api/coches";
      var url = Global.urlApiCoches + request;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            // Manejo de errores si la solicitud no es exitosa
            throw new Error("Error de red");
          }
          return response.json(); // Parsear la respuesta a JSON
        })
        .then((data) => {
          resolve(data); // Resolver la promesa con los datos obtenidos
        })
        .catch((error) => {
          reject(error); // Rechazar la promesa en caso de error
        });
    });
  }

  // Método para encontrar un coche por ID
  findCoche(id) {
    return new Promise(function (resolve, reject) {
      var request = "api/coches/findcoche/" + id;
      var url = Global.urlApiCoches + request;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error de red");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // Método para insertar un coche
  insertCoche(coche) {
    return new Promise(function (resolve, reject) {
      var request = "api/coches/insertcoche";
      var url = Global.urlApiCoches + request;

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coche), // Convertir el objeto coche a JSON
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error de red");
          }
          resolve(response); // Resolver la promesa con la respuesta
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // Método para actualizar un coche
  updateCoche(coche) {
    return new Promise(function (resolve, reject) {
      var request = "api/coches/updatecoche";
      var url = Global.urlApiCoches + request;

      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coche),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error de red");
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // Método para eliminar un coche por ID
  deleteCoche(id) {
    return new Promise(function (resolve, reject) {
      var request = "api/coches/deletecoche/" + id;
      var url = Global.urlApiCoches + request;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error de red");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
