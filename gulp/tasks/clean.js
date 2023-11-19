import del from 'del';

const clean = () => (
  del(app.path.clean)
);

export default clean;
