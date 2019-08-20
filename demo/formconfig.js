 

var formModel1 ={
    //辅助
    controlId: '101', //ColumnID
    controlType: 101, //text ControlTypeID
    colName: '姓名', //ColName
    isClear: false, //isClear  连续添加时是否清空

    //通用
    type:'text',   //input的类型
    disabled: false,  //不可用
    required: true, //必填 CheckTypeID
    pattern: '', //用正则做验证。CheckTypeID CheckUserDefined
    tabIndex:0, // tab 键顺序
    class:'cssTxt input_t1',

    //多行文本
    rows:5,  //行数
    cols:100, //列数

    //文本框类
    name:'',
    value: '', //DefaultValue
    title: '', //ColTitle ColHelp
    placeholder: '请输入姓名2222', //CheckTip
    readonly: false, //只读 ControlState
    size: 20, //controlExtend.size
    maxlength: 20, //controlExtend.maxlen
    autocomplete: 'on', //off
    min: null, //滑块的最小值
    max: null, //滑块的最大值
    step: null, //滑块的步长
    multiple: false, //是否可以有多个值，用于上传文件
    
    listKey:'browsers', //备选文字
    //list: ['Internet Explorer', 'Firefox'],

    //选择类
    list: [
        {
            value: '1',
            name: '北京',
            check: false
        }, {
            value: '2',
            name: '上海',
            check: false
        }, {
            value: '3',
            name: '广州',
            check: false
        }
    ]


}

var formControl = {
    c1:{
        //辅助
        controlId: '101', //ColumnID
        controlType: 101, //text ControlTypeID
        colName: '姓名', //ColName
        isClear: false, //isClear  连续添加时是否清空
     
        //通用
        type:'text',   //input的类型
        disabled: false,  //不可用
        required: true, //必填 CheckTypeID
        pattern: '', //用正则做验证。CheckTypeID CheckUserDefined
        tabIndex:0, // tab 键顺序
        class:'cssTxt input_t1',

        //多行文本
        rows:5,  //行数
        cols:100, //列数

        //文本框类
        name:'',
        value: '', //DefaultValue
        title: '', //ColTitle ColHelp
        placeholder: '请输入姓名2222', //CheckTip
        readonly: false, //只读 ControlState
        size: 20, //controlExtend.size
        maxlength: 20, //controlExtend.maxlen
        autocomplete: 'on', //off
        min: null, //滑块的最小值
        max: null, //滑块的最大值
        step: null, //滑块的步长
        multiple: false, //是否可以有多个值，用于上传文件
        
        listKey:'browsers', //备选文字
        //list: ['Internet Explorer', 'Firefox'],
      
        //选择类
        list: [
            {
                value: '1',
                name: '北京',
                check: false
            }, {
                value: '2',
                name: '上海',
                check: false
            }, {
                value: '3',
                name: '广州',
                check: false
            }
        ]
    

    }
}