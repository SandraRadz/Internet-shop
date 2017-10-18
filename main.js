$(document).ready(function(){

    var $list = $(".first_table_centre");
    var SEGMENT = $(".line_of_table1").html();
    var $not_bought = $(".list_to_buy_second_table");
    var $bought = $(".list_of_bought");
    var label = $(".one_bought_good").html();
    var $new_input = $(".big_text_area");


    function addItem(title){
        var  bought = false;
        $(".big_text_area").val( title );
            if ($(".big_text_area").val().replace(/\s/g, '').length > 0){
            var $node = $(SEGMENT);
            var $lab_node = $(label);
            var count = 1;
            var $button_buy = $node.find(".buy");
            var $button_bought = $node.find(".unbuy");

            $node.find(".list_to_buy").text(title);
            $lab_node.find(".name_of_bought_good").text(title);


           $seg_count = $node.find(".count_of_good");
            $lab_count = $lab_node.find(".count_of_bought_good");


            $seg_count.text(count);
            $lab_count.text(count);
            $("#big_text_area").value =null;

                $node.find(".plus").click(function(){
                    count += 1;
                    $node.find(".count_of_good").text(count);
                    $lab_node.find(".count_of_bought_good").text(count);
                });

                $node.find(".minus").click(function(){
                    if(count>1){
                        count -= 1;
                        $node.find(".count_of_good").text(count);
                        $lab_node.find(".count_of_bought_good").text(count);
                    }
                });

                $node.find(".cross").click(function(){
                    $node.hide();
                    $lab_node.hide();
                });

                $node.find(".buy").click(function(){
                    if (!bought) {
                        $node.find('.minus').hide();
                        $node.find('.plus').hide();
                        $node.find('.buy').text('Не куплено');
                        $node.find('.cross').hide();
                        $node.find('.list_to_buy').css('text-decoration', 'line-through');

                        $bought.append($lab_node);
                        bought = true;
                    } else {
                        $node.find('.minus').show();
                        $node.find('.plus').show();
                        $node.find('.buy').text('Купити');
                        $node.find('.cross').show();
                        $node.find('.list_to_buy').css('text-decoration', 'none');
                        $not_bought.append($lab_node);
                        bought = false;
                    }
                    });

              $node.find(".list_to_buy").click(function () {
                  alert("sdf");


                  $(this).setAttribute('type', 'input');

               });



                $(".big_text_area").val(null);
            $not_bought.append($lab_node);
            $list.append($node);

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
