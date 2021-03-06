/**
 * Created by wangwenkai on 2016/10/17.
 */
$(function () {
    // 切换年月日的select的效果
    $(".year_mouth_day").on('change',function () {
        var time_classify = $(".year_mouth_day option:selected").attr('value');
        console.log(time_classify);
        if(time_classify==='year'){
            $(".time_line_year").show();
            $(".time_line_mouth").hide();
            $(".time_line_day").hide();
        }
        if(time_classify==='mouth'){
            $(".time_line_year").hide();
            $(".time_line_mouth").show();
            $(".time_line_day").hide();
        }
        if(time_classify==='day'){
            $(".time_line_year").hide();
            $(".time_line_mouth").hide();
            $(".time_line_day").show();
        }
    });
    // 日期控件
    // 选择年为单位时的控件
    $(".time_line_year .begging_time").datetimepicker({
        format: 'yyyy',
        weekStart: 1,
        autoclose: true,
        startView: 4,
        minView: 4,
        forceParse: false,
        language: 'zh-CN'
    });
    $(".time_line_year .ending_time").datetimepicker({
        format: 'yyyy',
        weekStart: 1,
        autoclose: true,
        startView: 4,
        minView: 4,
        forceParse: false,
        language: 'zh-CN'
    });
    // 选择月为单位时的控件
    $(".time_line_mouth .begging_time").datetimepicker({
        format: 'yyyy-mm',
        weekStart: 1,
        autoclose: true,
        startView: 4,
        minView: 3,
        forceParse: false,
        language: 'zh-CN'
    });
    $(".time_line_mouth .ending_time").datetimepicker({
        format: 'yyyy-mm',
        weekStart: 1,
        autoclose: true,
        startView: 4,
        minView: 3,
        forceParse: false,
        language: 'zh-CN'
    });
    // 选择日为单位时的控件
    $(".time_line_day .begging_time").datetimepicker({
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: true,
        startView: 4,
        minView: 2,
        forceParse: false,
        language: 'zh-CN'
    });
    $(".time_line_day .ending_time").datetimepicker({
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: true,
        startView: 4,
        minView: 2,
        forceParse: false,
        language: 'zh-CN'
    });
});