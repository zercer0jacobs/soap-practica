module.exports = {
  CelsiusAFahrenheit(args) {
    const c = parseFloat(args.celsius);
    return { resultado: (c * 9 / 5) + 32 };
  },
  KilometrosAMillas(args) {
    const k = parseFloat(args.kilometros);
    return { resultado: k * 0.621371 };
  }
};