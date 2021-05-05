$(document).ready(() => {

  $("#go").click(() => {

    $.get(`/${$("#pokemon").val()}`, data => {
      $("#doubleTo").text("");
      $("#halfTo").text("");
      $("#noneTo").text("");
      $("#doubleFrom").text("");
      $("#halfFrom").text("");
      $("#noneFrom").text("");

      data.forEach((type, i) => {
        console.log(JSON.stringify(type.damage_relations));

        type.damage_relations.double_damage_to.forEach((item, i) => {
          var tr = item.name + "<br>";
          $("#doubleTo").append(tr);
        });
        type.damage_relations.half_damage_to.forEach((item, i) => {
          var tr = item.name + "<br>";
          $("#doubleTo").append(tr);
        });
        type.damage_relations.no_damage_to.forEach((item, i) => {
          var tr = item.name + "<br>";
          $("#doubleTo").append(tr);
        });

        type.damage_relations.double_damage_from.forEach((item, i) => {
          var tr = item.name + "<br>";
          $("#doubleTo").append(tr);
        });
        type.damage_relations.half_damage_from.forEach((item, i) => {
          var tr = item.name + "<br>";
          $("#doubleTo").append(tr);
        });
        type.damage_relations.no_damage_from.forEach((item, i) => {
          var tr = item.name + "<br>";
          $("#doubleTo").append(tr);
        });
      });

    });
  });
});
