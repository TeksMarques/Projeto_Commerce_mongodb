db.produtos.updateMany({ nome: /big mac/i }, { $unset: { curtidas: 1 } });
db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });