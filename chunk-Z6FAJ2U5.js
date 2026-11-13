import{a as V}from"./chunk-5CCQWDBY.js";import{c as k,g,o as w}from"./chunk-5I46D5DJ.js";import{a as S}from"./chunk-SWWQUV6S.js";import{$a as r,Ab as m,Bb as _,Cb as I,Cc as f,Dc as b,Eb as u,Fb as c,Gb as d,Ka as C,Qb as p,Rb as o,ab as t,bb as a,cb as P,jb as y,xa as n,zb as l}from"./chunk-MQHTAFUU.js";var F=(()=>{class h{constructor(){this.price=99.99,this.discount=15,this.isPercent=!0,this.priceControl=new g(42.5),this.percentControl=new g(12),this.percentIsPercent=!0,this.requiredVal=0,this.requiredError=!1,this.positiveCtrl=new g(0,k.min(.01)),this.minVal=25,this.positiveVal=10,this.minZeroVal=5,this.fixedPrice=499,this.usageBasic=[{file:"app.component.ts",code:`price = 99.99;
        isPercent = true;
        discount = 15;`},{file:"app.component.html",code:`<shk-price-input label="Precio" [(value)]="price" [decimals]="2" inputId="price" />
        <shk-price-input label="Descuento" [(value)]="discount" [(isPercentage)]="isPercent" [decimals]="0" inputId="discount" />`}],this.usageReactive=[{file:"app.component.ts",code:`priceControl = new FormControl<number | null>(42.5);
        percentControl = new FormControl<number | null>(12);
        percentIsPercent = true;`},{file:"app.component.html",code:`<shk-price-input [control]="priceControl" label="Precio (control reactivo)" currency="\u20AC" [decimals]="3" inputId="reactivePrice" />
      <shk-price-input [control]="percentControl" label="Porcentaje" [(isPercentage)]="percentIsPercent" [decimals]="2" inputId="reactivePercent" />`}],this.usageValidation=[{file:"app.component.html",code:`<!-- Sin control: el error lo decide el padre con [showError] -->
<shk-price-input
  label="Requerido"
  [(value)]="requiredVal"
  [required]="true"
  [showError]="requiredError"
  errorMessage="Este campo es requerido"
  inputId="required"
/>
<!-- Con control: el borde rojo sigue la validez del FormControl al tocarlo -->
<shk-price-input
  label="Mayor que 0"
  [control]="positiveCtrl"
  errorMessage="El monto debe ser mayor que 0"
  inputId="positivectrl"
/>
<shk-price-input label="Con m\xEDnimo" [(value)]="minVal" [min]="10" inputId="minprice" />`},{file:"app.component.ts",code:`requiredVal = 0;
requiredError = false;
positiveCtrl = new FormControl<number | null>(0, Validators.min(0.01));

validate() {
  this.requiredError = !this.requiredVal;
  this.positiveCtrl.markAsTouched();
  this.positiveCtrl.updateValueAndValidity();
}`}],this.usagePreventNegative=[{file:"app.component.html",code:`<shk-price-input
        label="Sin negativos"
        [(value)]="positiveVal"
        [preventNegative]="true"
        currency="\xA3"
        [decimals]="2"
        inputId="positive"
      />
      <shk-price-input
        label="Con m\xEDnimo 0"
        [(value)]="minZeroVal"
        [min]="0"
        currency="\u20AC"
        inputId="minzero"
      />`}],this.usageDisabled=[{file:"app.component.html",code:'<shk-price-input label="Precio fijo" [(value)]="fixedPrice" [disabled]="true" inputId="fixed" />'}]}validate(){this.requiredError=!this.requiredVal,this.positiveCtrl.markAsTouched(),this.positiveCtrl.updateValueAndValidity()}static{this.\u0275fac=function(v){return new(v||h)}}static{this.\u0275cmp=C({type:h,selectors:[["showcase-price-input"]],decls:64,vars:84,consts:[[1,"w-full","space-y-6"],[1,"text-xl","font-bold","_shk-text-surface-800","dark:[color:var(--shk-surface-800)]"],[1,"text-sm","_shk-text-surface-400","mt-1"],[3,"title","snippets"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],["inputId","price",3,"valueChange","label","value","decimals"],["inputId","discount",3,"valueChange","isPercentageChange","label","value","isPercentage","decimals"],[1,"flex","gap-4","text-sm","_shk-text-surface-400","mt-2"],[1,"_shk-text-primary"],["inputId","reactivePrice",3,"control","label","currency","decimals"],["inputId","reactivePercent",3,"isPercentageChange","control","label","isPercentage","decimals"],[1,"px-2","py-1","text-xs","bg-primary-600","text-white","rounded",3,"click"],[1,"text-xs","_shk-text-surface-400","mb-3"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-4"],["inputId","required",3,"valueChange","label","value","required","showError","errorMessage"],["inputId","positivectrl",3,"label","control","errorMessage"],["inputId","minprice",3,"valueChange","label","value","min"],[1,"flex","gap-2","mt-4"],["type","button",1,"px-4","py-2","text-sm","font-semibold","_shk-text-white","_shk-bg-primary","rounded-lg","hover:[background-color:var(--shk-primary-700)]","transition-colors",3,"click"],["inputId","positive",3,"valueChange","label","value","preventNegative","currency","decimals"],["inputId","minzero",3,"valueChange","label","value","min","currency"],["inputId","fixed",3,"valueChange","label","value","disabled"]],template:function(v,e){v&1&&(t(0,"div",0)(1,"div")(2,"h2",1),l(3," Price Input "),a(),t(4,"p",2),l(5),p(6,"transloco"),a()(),t(7,"showcase-example",3),p(8,"transloco"),t(9,"div",4)(10,"shk-price-input",5),p(11,"transloco"),d("valueChange",function(i){return c(e.price,i)||(e.price=i),i}),a(),t(12,"shk-price-input",6),p(13,"transloco"),d("valueChange",function(i){return c(e.discount,i)||(e.discount=i),i})("isPercentageChange",function(i){return c(e.isPercent,i)||(e.isPercent=i),i}),a()(),t(14,"div",7)(15,"div"),l(16," Precio: "),t(17,"strong",8),l(18),a()(),t(19,"div"),l(20," Descuento: "),t(21,"strong",8),l(22),a()()()(),t(23,"showcase-example",3)(24,"div",4),P(25,"shk-price-input",9),t(26,"shk-price-input",10),d("isPercentageChange",function(i){return c(e.percentIsPercent,i)||(e.percentIsPercent=i),i}),a()(),t(27,"div",7)(28,"div"),l(29," Valor control precio: "),t(30,"strong"),l(31),a()(),t(32,"div"),l(33," Valor control porcentaje: "),t(34,"strong"),l(35),a()(),t(36,"button",11),y("click",function(){return e.priceControl.setValue(123.45)}),l(37," Set 123.45 "),a()()(),t(38,"showcase-example",3),p(39,"transloco"),t(40,"p",12),l(41),p(42,"transloco"),a(),t(43,"div",13)(44,"shk-price-input",14),p(45,"transloco"),p(46,"transloco"),d("valueChange",function(i){return c(e.requiredVal,i)||(e.requiredVal=i),i}),a(),P(47,"shk-price-input",15),p(48,"transloco"),p(49,"transloco"),t(50,"shk-price-input",16),p(51,"transloco"),d("valueChange",function(i){return c(e.minVal,i)||(e.minVal=i),i}),a()(),t(52,"div",17)(53,"button",18),y("click",function(){return e.validate()}),l(54),p(55,"transloco"),a()()(),t(56,"showcase-example",3)(57,"div",4)(58,"shk-price-input",19),d("valueChange",function(i){return c(e.positiveVal,i)||(e.positiveVal=i),i}),a(),t(59,"shk-price-input",20),d("valueChange",function(i){return c(e.minZeroVal,i)||(e.minZeroVal=i),i}),a()()(),t(60,"showcase-example",3),p(61,"transloco"),t(62,"shk-price-input",21),p(63,"transloco"),d("valueChange",function(i){return c(e.fixedPrice,i)||(e.fixedPrice=i),i}),a()()()),v&2&&(n(5),m(o(6,56,"priceInput.desc")),n(2),r("title",o(8,58,"priceInput.basic"))("snippets",e.usageBasic),n(3),r("label",o(11,60,"priceInput.price")),u("value",e.price),r("decimals",2),n(2),r("label",o(13,62,"priceInput.discount")),u("value",e.discount)("isPercentage",e.isPercent),r("decimals",0),n(6),_("$",e.price),n(4),I("",e.discount,"",e.isPercent?"%":"$"),n(),r("title","Con FormControl (reactive)")("snippets",e.usageReactive),n(2),r("control",e.priceControl)("label","Precio (control reactivo)")("currency","\u20AC")("decimals",3),n(),r("control",e.percentControl)("label","Porcentaje"),u("isPercentage",e.percentIsPercent),r("decimals",2),n(5),m(e.priceControl.value),n(4),_("",e.percentControl.value,"%"),n(3),r("title",o(39,64,"priceInput.validation"))("snippets",e.usageValidation),n(3),m(o(42,66,"priceInput.validationDesc")),n(3),r("label",o(45,68,"priceInput.required")),u("value",e.requiredVal),r("required",!0)("showError",e.requiredError)("errorMessage",o(46,70,"priceInput.thisFieldRequired")),n(3),r("label",o(48,72,"priceInput.greaterThanZero"))("control",e.positiveCtrl)("errorMessage",o(49,74,"priceInput.greaterThanZeroMsg")),n(3),r("label",o(51,76,"priceInput.withMinimum")),u("value",e.minVal),r("min",10),n(4),m(o(55,78,"priceInput.validate")),n(2),r("title","Prevenir negativos y moneda personalizada")("snippets",e.usagePreventNegative),n(2),r("label","Sin negativos"),u("value",e.positiveVal),r("preventNegative",!0)("currency","\xA3")("decimals",2),n(),r("label","Con m\xEDnimo 0 (equivale a prevenir negativos)"),u("value",e.minZeroVal),r("min",0)("currency","\u20AC"),n(),r("title",o(61,80,"priceInput.disabled"))("snippets",e.usageDisabled),n(2),r("label",o(63,82,"priceInput.fixedPrice")),u("value",e.fixedPrice),r("disabled",!0))},dependencies:[V,S,b,w,f],encapsulation:2})}}return h})();export{F as PriceInputPage};
