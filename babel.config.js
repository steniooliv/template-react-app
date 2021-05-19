module.exports = {
  presets: [
    '@babel/preset-env',          //verifica o ambiente de desenvolvimento
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]                            //faz com que o babel entenda a estrutura react para transpilar
  ]
}