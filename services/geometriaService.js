module.exports = {
  AreaRectangulo(args) {
    const base = parseFloat(args.base);
    const altura = parseFloat(args.altura);
    return { resultado: base * altura };
  },
  PerimetroRectangulo(args) {
    const base = parseFloat(args.base);
    const altura = parseFloat(args.altura);
    return { resultado: 2 * (base + altura) };
  }
};