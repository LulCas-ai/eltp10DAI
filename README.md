1. authController: linea 10,47,53: falta un return --> en los otros res.status usan return --> poner el return
2. "": linea 50: el compare tiene los datos al revez --> consoles.log y descrubirnedo que esta ahi el problema --> cambiar de lado los datos
3. "": 45: falta autenticacion de email y password --> dejaba no poner caracteres --> agregar la verificacion
4. token.js: 11: le faltaba una s --> no estaba de colorcito --> agregar la s
5. "": 6: tenia doble t --> plena vista angy --> sacar la t😂
6. "": 7: poquito tiempo --> nos dijo la ia --> cambiar el tiempo
8. usercontroller: linea 14: agarra el id del body --> podes hackearle la cuenta a cualquiera ñamñam😺😺🤫♥😡🤫🥀 --> usar solo el del token (req.user.id)
9. admincontroller: 4: no usaba el req --> no llegaban los datos --> guardar los datos que se obtuvieron en esa pagina
10. db.js : 3: no usa id autoincrementado --> mas tedieoso la creaciond e objetos --> cambiar la db
11. app.js: 14: loginn con 2 n --> no llega a la ruta --> chatgpt
12. auth middleware : 8 : mal la logica --> si no hay token pasa --> cambiar el if