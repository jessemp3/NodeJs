const connectToDatabase = async (banco) => {
  console.log(`${banco} conectado`);
};

const connectApi = async (url) => {
  console.log(url);
};

export { connectToDatabase, connectApi };
