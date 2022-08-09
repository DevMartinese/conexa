const app = require('./src/index');
const PORT = 4000

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});