$(document).ready(function(){

    var $list = $(".first_table_centre");
    var SEGMENT = $(".line_of_table1").html();
    var $not_bought = $(".list_to_buy_second_table");
    var $bought = $(".list_of_bought");
    var label = $(".one_bought_good").html();
    var $new_input = $("#big_text_area");
    var $buttom_buy = $(".buy");


    function addItem(title){
        if($("#big_text_area").value != "") {
            var $node = $(SEGMENT);
            var $lab_node = $(label);
            var count = 1;

            $node.find(".list_to_buy").text(title);
            $lab_node.find(".name_of_bought_good").text(title);


            $seg_count = $node.find(".count_of_good");
            $lab_count = $lab_node.find(".count_of_bought_good");


            $seg_count.text(count);
            $lab_count.text(count);

            $node.find(".plus").click(function(){
                count += 1;
                alert(count);
                $seg_count.text(count);
                $lab_count.text(count);
            });

            $node.find(".minus").click(function(){
                if(count>1){ count -= 1;
                    $seg_count.text(count);
                    $lab_count.text(count);
                }
            });

            $node.find(".cross").click(function(){
                $node.hide();
                $lab_node.hide();
            });

            $node.find(".buy").click(function(){
                $bought.append($lab_node);
                $buttom_buy.hide();


            });

            $not_bought.append($lab_node);
            $list.append($node);

            document.getElementById("big_text_area").value = null;
        }
    }

    $(".add").click(function(){
        var new_name = $new_input.val();
        addItem(new_name);
    });

    addItem("Помідори");
    addItem("Cup");
    addItem("Масло");
});
