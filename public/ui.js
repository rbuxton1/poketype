$(document).ready(() => {

  $("#go").click(() => {

    $.get(`/${$("#pokemon").val()}`, data => {
      data.forEach((type, i) => {
        console.log(JSON.stringify(type.damage_relations));

        type.damage_relations.double_damage_to.forEach((item, i) => {
          var tr = `<tr>${item.name}</tr>`;
          console.log(tr)
          $("#doubleTo").append(tr);
        });
        type.damage_relations.half_damage_to.forEach((item, i) => {
          var tr = `<tr>${item.name}</tr>`;
          console.log(tr)
          $("#doubleTo").append(tr);
        });
        type.damage_relations.no_damage_to.forEach((item, i) => {
          var tr = `<tr>${item.name}</tr>`;
          console.log(tr)
          $("#doubleTo").append(tr);
        });

        type.damage_relations.double_damage_from.forEach((item, i) => {
          var tr = `<tr>${item.name}</tr>`;
          console.log(tr)
          $("#doubleTo").append(tr);
        });
        type.damage_relations.half_damage_from.forEach((item, i) => {
          var tr = `<tr>${item.name}</tr>`;
          console.log(tr)
          $("#doubleTo").append(tr);
        });
        type.damage_relations.no_damage_from.forEach((item, i) => {
          var tr = `<tr>${item.name}</tr>`;
          console.log(tr)
          $("#doubleTo").append(tr);
        });
      });

    });
  });
});
