CREATE TABLE IF NOT EXISTS fuel_routes (
  id INTEGER PRIMARY KEY,
  vessel TEXT,
  distance REAL,
  fuel_type TEXT,
  fuel_consumption REAL,
  emission_factor REAL
);

INSERT INTO fuel_routes VALUES
(1, "Ship A", 1200, "HFO", 50, 3.11),
(2, "Ship B", 1500, "LNG", 40, 2.75),
(3, "Ship C", 900, "Methanol", 35, 1.25);
