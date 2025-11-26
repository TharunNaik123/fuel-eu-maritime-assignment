function calculateEmission(route) {
  const totalEmission = route.fuel_consumption * route.emission_factor;
  const emissionPerNM = totalEmission / route.distance;

  return {
    id: route.id,
    totalEmission,
    emissionPerNM
  };
}

function compareRoutes(routes) {
  const results = routes.map((r) => calculateEmission(r));

  let best = results[0];
  results.forEach((r) => {
    if (r.emissionPerNM < best.emissionPerNM) best = r;
  });

  return {
    routes: results,
    bestRoute: best.id
  };
}

module.exports = { compareRoutes };
