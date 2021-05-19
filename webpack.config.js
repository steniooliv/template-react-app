const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',          //executa o webpack em modo de desenvolvimento ou produção de acordo com o ambiente
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',   //source map para melhorar a debugação do código
  entry: path.resolve(__dirname, 'src', 'index.jsx' ),         //arquivo principal da aplicação
  output: {                                                    //arquivo de saida
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {                                                   //extensões que o webpack irá verificar
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },                                                          //servidor para monitor as alterações e gerar o bundle novamente
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })                                                         //plugin para injetar o arquivo bundle dentro do index.html
  ],
  module: {                                                    //opções de configuraçãdo das extensões de importaçao
    rules: [
      {
        test: /\.jsx$/,                                         //regra para verificar a extensão jsx
        exclude: /node_modules/,                                //ignorar a pasta node_modules
        use: 'babel-loader',                                    //utilizar o babel para transpilar
      },
      {
        test: /\.scss$/,                                         //regra para verificar a extensão css
        exclude: /node_modules/,                                //ignorar a pasta node_modules
        use: ['style-loader', 'css-loader', 'sass-loader'],                    //loaders para transpilar os estilos
      }
    ],
  }
}