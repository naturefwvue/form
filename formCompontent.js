  // 定义一个名为 my-input 的新组件
  Vue.component('my-input', {
    props:["value","meta"],
    data:function(){
        return {
            type:{
            100:'textarea',         //多行文本框
            101:'text',             //单行文本框
            102:'password',         //密码
            103:'date',             //日期
            104:'datetime-local',   //日期时间
            105:'time',             //时间
            106:'month',            //年月
            107:'week',             //年周
            108:'file',             //上传文件
            109:'file',             //上传图片
            110:'color',            //颜色
            111:'number',           //数字
            112:'tel',              //电话
            113:'email',            //电子邮件
            114:'url',              //url
            115:'range',            //滑块
            116:'search',           //搜索
            117:'text',             //当前登录人
            118:'text',             //弹窗选择记录
          
            130:'fulltext',         //富文本编辑器
            150:'select',           //下拉列表框 单选
            151:'selects',          //列表框 多选
            152:'selectMore',       //联动下拉列表框
            153:'radios',           //单选组
            154:'checkboxs',        //多选组
            155:'checkbox',         //多选
            156:''
            }
        }
 
    },
    methods:{
        //text
        textInput:function(event, meta){
            var returnValue = '';
            returnValue = event.target.value;
            //添加自己的监听事件
            //this.$emit('myInput', returnValue,event.target, meta);  
        
            //vue的回调
            this.$emit('input',returnValue);
            
        },
        textChange:function(event, meta){
            var returnValue = '';
            returnValue = event.target.value;
            //添加自己的监听事件
            this.$emit('change', returnValue,event.target, meta);  
        
            //vue的回调
            //this.$emit('input',returnValue);
            
        },
        //select
        selectChange:function(event, meta){
        //单选
            //alert(this.meta.type);
            var returnValue = '';

            var items = event.target.selectedOptions; //选中项的集合
            var arr = [];
            for (var i=0;i<items.length;i++) {
                var item = items[i];
                arr.push(item.value);
            }
            returnValue = arr.join(',');

            //this.value = returnValue;  //不能直接赋值，会出警告

            //添加联动事件
            this.$emit('select', returnValue, meta.nextSelect);  
            
            //vue的回调
            this.$emit('input',returnValue);

            return returnValue;
        },

        //CheckBox
        checkChange: function (event) {
            //单选
            //alert(this.meta.type);
            var returnValue = event.target.value;

            if (this.meta.controlType === 155) {
                //复选框
                returnValue = event.target.checked;
            }
            else{
                //alert(event.target.value);
                //修改绑定情况
                var selectValue = returnValue;
                var arr = [];
                for (var key in this.meta.list) {
                    var item = this.meta.list[key];
                    if (item.id === selectValue) {
                        this.meta.list[key].check = event.target.checked;
                    }
                    if (item.check) {
                        arr.push(item.id);
                    }
                }
                returnValue = arr.join(',');
            }
            
            //调用上级的input事件
            this.$emit('input',returnValue);

            return  returnValue;
        },

        //radio
        radioChange: function (event, meta) {
            //单选
            //alert(this.meta.type);
            var returnValue = '';

            var items = event.target.selectedOptions; //选中项的集合
            var arr = [];
            for (var i=0;i<items.length;i++) {
                var item = items[i];
                arr.push(item.id);
            }
            returnValue = arr.join(',');
 
            //this.value = returnValue;  //不能直接赋值，会出警告

            this.$emit('select', returnValue, meta.nextSelect);  //添加联动事件

            return returnValue;
        }
    },
    template: `<span>
        <span v-if="meta.controlType===100">
            <!--多行文本框-->
            <textarea :id="'c'+meta.controlId" 
            :name="'c'+meta.controlId"  
            :class="meta.class" 
            :rows="meta.rows" 
            :cols="meta.cols" 
            @input="$emit('input',$event.target.value)"  
            @onkeyup="textChange($event,meta)"
            :placeholder="meta.placeholder"
            >
            </textarea>
        </span>
        <span v-else-if="meta.controlType>100 && meta.controlType<130 ">
            <!--文本框类-->
            <input  :id="'c'+meta.controlId" 
            :name="'c'+meta.controlId"  
            :disabled="meta.disabled"
            :class="meta.class" 
            :type="type[meta.controlType]" 
            :value="value" 
            :placeholder="meta.placeholder"
            :readonly="meta.readonly"
            :size="meta.size"
            :maxlength="meta.maxlength"
            :autocomplete="meta.autocomplete"
            :min="meta.min"
            :max="meta.max"
            :step="meta.step"
            :multiple="meta.multiple"
            :list="meta.listKey"
            :title="meta.title"
            
            @input="textInput($event,meta)"
            @change="textChange($event,meta)"
             
            :key="'ckey_'+meta.controlId">

            <!--文本框的备选项-->
            <datalist v-if="typeof(meta.listKey)!=='undefined'" :id="meta.listKey">
                <option v-for="item in meta.list" :label="item.id" :value="item.name" />
            </datalist>

        </span>

        <span v-else-if="meta.controlType >= 150 && meta.controlType <= 152  ">
        <!--下拉列表框-->
            <select  :id="'c'+meta.controlId" 
            :name="'c'+meta.controlId"  
            :class="meta.class" 
            :multiple="meta.controlType === 151"
            @change="selectChange($event,meta)" 
            
            >
                <option :key="-2" value="-2" >请选择</option>
                <option  
                v-for="(item,index) in meta.list" 
                :key="index"  
                :value="item.id" 
                :selected="value==item.id">
                    {{item.name}}
                </option> 

            </select>
        </span> 

        <span v-else-if="meta.controlType === 153 ">
            <!--单选组 radio_g_s  label radio_g_t-->
            <label role="radio" v-for="item in meta.list" >
                <input 
                    type="radio" 
                    :class="meta.class"  
                    :checked="item.check" 
                    :name="'c'+meta.controlId" 
                    :value="item.id"
                    @input="$emit('input',$event.target.value)"  
                >
                <span>{{item.name}}</span>
            </label> 

        </span>

        <span v-else-if="meta.controlType === 154 ">
            <!--多选组-->
            <label role="checkbox" 
            v-for="item in meta.list" 
            class="checkbox_g_t" 
            :key="'lblchks'+item.id"  > 
                <input  :id="'c'+meta.controlId" 
                type="checkbox"
                :name="'c'+meta.controlId"  
                :class="meta.class" 
                :value="item.id"
                :readonly="meta.readonly"
                :key="'chks'+item.id"
                @input="checkChange($event)"
                >
                <span>{{item.name}}</span>
            </label> 

        </span> 

        <span v-else-if="meta.controlType === 155 ">
            <!--复选框-->
            <label role="checkbox" 
            v-for="item in meta.list" 
            class="checkbox_g_t" 
            :key="'lblchk'+item.id"  > 
                <input  :id="'c'+meta.controlId" 
                type="checkbox"
                :name="'c'+meta.controlId"  
                :class="meta.class" 
                :value="item.id"
                :readonly="meta.readonly"
                :key="'chk'+item.id"
                @input="checkChange($event)"
                >
                <span>{{item.name}}</span>
            </label> 

        </span>
       

    </span>`
});