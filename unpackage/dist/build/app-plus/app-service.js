var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'6ddea895-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lineA'])
Z([3,'#2b61ea'])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'current']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickItem']],[[4],[[5],[[4],[[5],[1,'onClickItem']]]]]]]]])
Z([3,'width:80%;margin-bottom:30rpx;'])
Z([3,'button'])
Z([[7],[3,'items']])
Z([3,'fc6f6d80-1'])
Z([[2,'==='],[[7],[3,'current']],[1,0]])
Z(z[2])
Z([3,'fc6f6d80-2'])
Z(z[2])
Z([3,'fc6f6d80-3'])
Z([[2,'==='],[[7],[3,'current']],[1,1]])
Z(z[2])
Z([3,'fc6f6d80-4'])
Z(z[2])
Z([3,'fc6f6d80-5'])
Z([[2,'==='],[[7],[3,'current']],[1,2]])
Z(z[2])
Z([3,'fc6f6d80-6'])
Z(z[2])
Z([3,'fc6f6d80-7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/chart/bar/bar.wxml','./components/chart/line.wxml','./components/easy-scroll/easy-scroll.wxml','./components/uni-segmented-control/uni-segmented-control.wxml','./pages/AddDevice/index.wxml','./pages/find/find.wxml','./pages/index/index.wxml','./pages/order/order.wxml','./pages/sensor/sensor.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cF=_mz(z,'easy-scroll',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,cF)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lK=_n('view')
_rz(z,lK,'class',0,e,s,gg)
var aL=_mz(z,'uni-segmented-control',['activeColor',1,'bind:__l',1,'bind:clickItem',2,'current',3,'data-event-opts',4,'style',5,'styleType',6,'values',7,'vueId',8],[],e,s,gg)
_(lK,aL)
var tM=_n('view')
var eN=_v()
_(tM,eN)
if(_oz(z,10,e,s,gg)){eN.wxVkey=1
var xQ=_n('view')
var oR=_mz(z,'line-chart',['bind:__l',11,'vueId',1],[],e,s,gg)
_(xQ,oR)
var fS=_mz(z,'bar-chart',['bind:__l',13,'vueId',1],[],e,s,gg)
_(xQ,fS)
_(eN,xQ)
}
var bO=_v()
_(tM,bO)
if(_oz(z,15,e,s,gg)){bO.wxVkey=1
var cT=_n('view')
var hU=_mz(z,'line-chart',['bind:__l',16,'vueId',1],[],e,s,gg)
_(cT,hU)
var oV=_mz(z,'bar-chart',['bind:__l',18,'vueId',1],[],e,s,gg)
_(cT,oV)
_(bO,cT)
}
var oP=_v()
_(tM,oP)
if(_oz(z,20,e,s,gg)){oP.wxVkey=1
var cW=_n('view')
var oX=_mz(z,'line-chart',['bind:__l',21,'vueId',1],[],e,s,gg)
_(cW,oX)
var lY=_mz(z,'bar-chart',['bind:__l',23,'vueId',1],[],e,s,gg)
_(cW,lY)
_(oP,cW)
}
eN.wxXCkey=1
eN.wxXCkey=3
bO.wxXCkey=1
bO.wxXCkey=3
oP.wxXCkey=1
oP.wxXCkey=3
_(lK,tM)
_(r,lK)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/sensor/sensor","pages/AddDevice/index","pages/find/find","pages/order/order","pages/user/user","components/chart/bar/bar"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#1de1d3","backgroundColor":"#1de1d3"},"tabBar":{"color":"#818181","selectedColor":"#00c171","height":"50px","fontSize":"12px","iconWidth":"15px","spacing":"4px","backgroundColor":"#fff","borderStyle":"black","list":[{"pagePath":"pages/index/index","iconPath":"static/icon1.png","selectedIconPath":"static/icon1b.png","text":"首页"},{"pagePath":"pages/AddDevice/index","iconPath":"static/icon2.png","selectedIconPath":"static/icon2b.png","text":"设备"},{"pagePath":"pages/user/user","iconPath":"static/icon4.png","selectedIconPath":"static/icon4b.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"美食促销首页单页","compilerVersion":"2.6.5","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/chart/bar/bar.json']={"usingComponents":{}};
__wxAppCode__['components/chart/bar/bar.wxml']=$gwx('./components/chart/bar/bar.wxml');

__wxAppCode__['components/chart/line.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/chart/line.wxml']=$gwx('./components/chart/line.wxml');

__wxAppCode__['components/easy-scroll/easy-scroll.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/easy-scroll/easy-scroll.wxml']=$gwx('./components/easy-scroll/easy-scroll.wxml');

__wxAppCode__['components/uni-segmented-control/uni-segmented-control.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-segmented-control/uni-segmented-control.wxml']=$gwx('./components/uni-segmented-control/uni-segmented-control.wxml');

__wxAppCode__['pages/AddDevice/index.json']={"navigationBarBackgroundColor":"#1de1d3","navigationBarTextStyle":"white","navigationBarTitleText":"添加设备","usingComponents":{"easy-scroll":"/components/easy-scroll/easy-scroll"}};
__wxAppCode__['pages/AddDevice/index.wxml']=$gwx('./pages/AddDevice/index.wxml');

__wxAppCode__['pages/find/find.json']={"navigationBarBackgroundColor":"#1de1d3","navigationBarTextStyle":"white","navigationBarTitleText":"发现","usingComponents":{}};
__wxAppCode__['pages/find/find.wxml']=$gwx('./pages/find/find.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarBackgroundColor":"#1de1d3","navigationBarTextStyle":"white","navigationBarTitleText":"首页","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/order/order.json']={"navigationBarBackgroundColor":"#1de1d3","navigationBarTextStyle":"white","navigationBarTitleText":"订单","usingComponents":{}};
__wxAppCode__['pages/order/order.wxml']=$gwx('./pages/order/order.wxml');

__wxAppCode__['pages/sensor/sensor.json']={"navigationBarBackgroundColor":"#557cc3","navigationBarTextStyle":"white","navigationBarTitleText":"传感器","usingComponents":{"uni-segmented-control":"/components/uni-segmented-control/uni-segmented-control","line-chart":"/components/chart/line","bar-chart":"/components/chart/bar/bar"}};
__wxAppCode__['pages/sensor/sensor.wxml']=$gwx('./pages/sensor/sensor.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarBackgroundColor":"#1de1d3","navigationBarTextStyle":"white","navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"152e":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("d372");var u={onLaunch:function(){n("log","App La1unch"," at App.vue:5")},onShow:function(){n("log","App Show"," at App.vue:8")},onHide:function(){n("log","App Hide"," at App.vue:11")}};e.default=u}).call(this,t("0de9")["default"])},1813:function(n,e,t){"use strict";(function(n){t("31e0"),t("921b");var e=o(t("66fd")),u=o(t("dca3"));function o(n){return n&&n.__esModule?n:{default:n}}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},u=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),u.forEach(function(e){c(n,e,t[e])})}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,u.default.mpType="app";var a=new e.default(r({},u.default));n(a).$mount()}).call(this,t("6e42")["createApp"])},"2dc8":function(n,e,t){"use strict";var u=t("e183"),o=t.n(u);o.a},d40f:function(n,e,t){"use strict";t.r(e);var u=t("152e"),o=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=o.a},dca3:function(n,e,t){"use strict";t.r(e);var u=t("d40f");for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);t("2dc8");var r,c,a,f,i=t("f0c5"),l=Object(i["a"])(u["default"],r,c,!1,null,null,null,!1,a,f);e["default"]=l.exports},e183:function(n,e,t){}},[["1813","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, u = t[0], c = t[1], i = t[2], s = 0, f = []; s < u.length; s++) {
      o = u[s], l[o] && f.push(l[o][0]), l[o] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    p && p(t);

    while (f.length) {
      f.shift()();
    }

    return a.push.apply(a, i || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== l[u] && (r = !1);
      }

      r && (a.splice(t--, 1), e = c(c.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      l = {
    "common/runtime": 0
  },
      a = [];

  function u(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
  }

  c.e = function (e) {
    var t = [],
        n = {
      "components/chart/line": 1,
      "components/uni-segmented-control/uni-segmented-control": 1,
      "components/easy-scroll/easy-scroll": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/chart/line": "components/chart/line",
        "components/uni-segmented-control/uni-segmented-control": "components/uni-segmented-control/uni-segmented-control",
        "components/easy-scroll/easy-scroll": "components/easy-scroll/easy-scroll"
      }[e] || e) + ".wxss", l = c.p + r, a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
        var i = a[u],
            s = i.getAttribute("data-href") || i.getAttribute("href");
        if ("stylesheet" === i.rel && (s === r || s === l)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (u = 0; u < f.length; u++) {
        i = f[u], s = i.getAttribute("data-href");
        if (s === r || s === l) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || l,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        a.request = r, delete o[e], p.parentNode.removeChild(p), n(a);
      }, p.href = l;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = l[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var a = new Promise(function (t, n) {
        r = l[e] = [t, n];
      });
      t.push(r[2] = a);
      var i,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = u(e), i = function i(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = l[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            a.type = r, a.request = o, n[1](a);
          }

          l[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        i({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = i, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, c.m = e, c.c = r, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      c.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = i.push.bind(i);
  i.push = t, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    t(i[f]);
  }

  var p = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[a]["apply"](console,e);var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),s="";if(o.length>1){var l=o.pop();s=o.join("---COMMA---"),0===l.indexOf(" at ")?s+=l:s+="---COMMA---"+l}else s=o[0];console[a](s)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"31e0":function(t,e,n){},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function m(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,A=b(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),w=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,P=b(function(t){return t.replace(T,"-$1").toLowerCase()});function k(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function D(t,e){return t.bind(e)}var O=Function.prototype.bind?D:k;function M(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function $(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&$(e,t[n]);return e}function R(t,e,n){}var L=function(t,e,n){return!1},F=function(t){return t};function I(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),a=Array.isArray(e);if(r&&a)return t.length===e.length&&t.every(function(t,n){return I(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(n){return I(t[n],e[n])})}catch(c){return!1}}function E(t,e){for(var n=0;n<t.length;n++)if(I(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var z=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:R,parsePlatformTagName:F,mustUseProp:L,async:!0,_lifecycleHooks:N},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+W.source+".$_\\d]");function q(t){if(!V.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X,G="__proto__"in{},J="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=K&&WXEnvironment.platform.toLowerCase(),Q=J&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Y),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(J)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(nr){}var rt=function(){return void 0===X&&(X=!J&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),X},at=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=R,ut=0,ht=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ut++,this.subs=[]};function pt(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function ft(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){x(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var dt=function(t,e,n,i,r,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function xt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,mt=Object.create(_t),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=_t[t];U(mt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),a})});var St=Object.getOwnPropertyNames(mt),At=!0;function wt(t){At=t}var Tt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?kt(t,mt,St):Pt(t,mt):kt(t,mt,St),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function kt(t,e,n){for(var i=0,r=n.length;i<r;i++){var a=n[i];U(t,a,e[a])}}function Dt(t,e){var n;if(l(t)&&!(t instanceof dt))return m(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:At&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Ot(t,e,n,i,r){var a=new ht,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&Dt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(a.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,c=!r&&Dt(e),a.notify())}})}}function Mt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Ot(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function $t(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||m(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ot(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e])};var Rt=B.optionMergeStrategies;function Lt(t,e){if(!e)return t;for(var n,i,r,a=lt?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(i=t[n],r=e[n],m(t,n)?i!==r&&u(i)&&u(r)&&Lt(i,r):Mt(t,n,r));return t}function Ft(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Lt(i,r):r}:e?t?function(){return Lt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function It(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Et(n):n}function Et(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function jt(t,e,n,i){var r=Object.create(t||null);return e?$(r,e):r}Rt.data=function(t,e,n){return n?Ft(t,e,n):e&&"function"!==typeof e?t:Ft(t,e)},N.forEach(function(t){Rt[t]=It}),z.forEach(function(t){Rt[t+"s"]=jt}),Rt.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var a in $(r,t),e){var o=r[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),r[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},Rt.props=Rt.methods=Rt.inject=Rt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return $(r,t),e&&$(r,e),r},Rt.provide=Ft;var zt=function(t,e){return void 0===e?t:e};function Nt(t,e){var n=t.props;if(n){var i,r,a,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(a=A(r),o[a]={type:null})}else if(u(n))for(var s in n)r=n[s],a=A(s),o[a]=u(r)?r:{type:r};else 0;t.props=o}}function Bt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var a in n){var o=n[a];i[a]=u(o)?$({from:a},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Nt(e,n),Bt(e,n),Wt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Ht(t,e.mixins[i],n);var a,o={};for(a in t)s(a);for(a in e)m(t,a)||s(a);function s(i){var r=Rt[i]||zt;o[i]=r(t[i],e[i],n,i)}return o}function Ut(t,e,n,i){if("string"===typeof n){var r=t[e];if(m(r,n))return r[n];var a=A(n);if(m(r,a))return r[a];var o=w(a);if(m(r,o))return r[o];var s=r[n]||r[a]||r[o];return s}}function Vt(t,e,n,i){var r=e[t],a=!m(n,t),o=n[t],s=Jt(Boolean,r.type);if(s>-1)if(a&&!m(r,"default"))o=!1;else if(""===o||o===P(t)){var l=Jt(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=qt(i,r,t);var c=At;wt(!0),Dt(o),wt(c)}return o}function qt(t,e,n){if(m(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Xt(e.type)?i.call(t):i}}function Xt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gt(t,e){return Xt(t)===Xt(e)}function Jt(t,e){if(!Array.isArray(e))return Gt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Gt(e[n],t))return n;return-1}function Kt(t,e,n){pt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var a=0;a<r.length;a++)try{var o=!1===r[a].call(i,t,e,n);if(o)return}catch(nr){Qt(nr,i,"errorCaptured hook")}}}Qt(t,e,n)}finally{ft()}}function Yt(t,e,n,i,r){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&f(a)&&!a._handled&&(a.catch(function(t){return Kt(t,i,r+" (Promise/async)")}),a._handled=!0)}catch(nr){Kt(nr,i,r)}return a}function Qt(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&Zt(nr,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!J&&!K||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(R)}}else if(Z||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var ae=1,oe=new MutationObserver(ie),se=document.createTextNode(String(ae));oe.observe(se,{characterData:!0}),te=function(){ae=(ae+1)%2,se.data=String(ae)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(nr){Kt(nr,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function fe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Yt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),a=0;a<r.length;a++)Yt(r[a],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,r,o,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=pe(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=fe(c,s)),a(h.once)&&(c=t[l]=o(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(h=pe(l),r(h.name,e[l],h.capture))}function ve(t,e,n,a){var o=e.options.mpOptions&&e.options.mpOptions.properties;if(i(o))return n;var s=e.options.mpOptions.externalClasses||[],l=t.attrs,c=t.props;if(r(l)||r(c))for(var u in o){var h=P(u),p=ye(n,c,u,h,!0)||ye(n,l,u,h,!1);p&&n[u]&&-1!==s.indexOf(h)&&a[A(n[u])]&&(n[u]=a[A(n[u])])}return n}function ge(t,e,n,a){var o=e.options.props;if(i(o))return ve(t,e,{},a);var s={},l=t.attrs,c=t.props;if(r(l)||r(c))for(var u in o){var h=P(u);ye(s,c,u,h,!0)||ye(s,l,u,h,!1)}return ve(t,e,s,a)}function ye(t,e,n,i,a){if(r(e)){if(m(e,n))return t[n]=e[n],a||delete e[n],!0;if(m(e,i))return t[n]=e[i],a||delete e[i],!0}return!1}function xe(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return r(t)&&r(t.text)&&o(t.isComment)}function be(t,e){var n,o,l,c,u=[];for(n=0;n<t.length;n++)o=t[n],i(o)||"boolean"===typeof o||(l=u.length-1,c=u[l],Array.isArray(o)?o.length>0&&(o=be(o,(e||"")+"_"+n),me(o[0])&&me(c)&&(u[l]=yt(c.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?me(c)?u[l]=yt(c.text+o):""!==o&&u.push(yt(o)):me(o)&&me(c)?u[l]=yt(c.text+o.text):(a(t._isVList)&&r(o.tag)&&i(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function Se(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ae(t){var e=we(t.$options.inject,t);e&&(wt(!1),Object.keys(e).forEach(function(n){Ot(t,n,e[n])}),wt(!0))}function we(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var a=i[r];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&m(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var l=t[a].default;n[a]="function"===typeof l?l.call(e):l}else 0}}return n}}function Te(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var a=t[i],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)a.asyncMeta&&a.asyncMeta.data&&"page"===a.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(a):(n.default||(n.default=[])).push(a);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children||[]):l.push(a)}}for(var c in n)n[c].every(Pe)&&delete n[c];return n}function Pe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,i){var r,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&i&&i!==n&&s===i.$key&&!a&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=De(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=Oe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),U(r,"$stable",o),U(r,"$key",s),U(r,"$hasNormal",a),r}function De(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Oe(t,e){return function(){return t[e]}}function Me(t,e){var n,i,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,a=t.length;i<a;i++)n[i]=e(t[i],i,i,i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i,i,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length,i++,i)),u=c.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,a=o.length;i<a;i++)s=o[i],n[i]=e(t[s],s,i,i);return r(n)||(n=[]),n._isVList=!0,n}function $e(t,e,n,i){var r,a=this.$scopedSlots[t];a?(n=n||{},i&&(n=$($({},i),n)),r=a(n,this,n._i)||e):r=this.$slots[t]||e;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Ce(t){return Ut(this.$options,"filters",t,!0)||F}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Le(t,e,n,i,r){var a=B.keyCodes[e]||n;return r&&i&&!B.keyCodes[e]?Re(r,i):a?Re(a,t):i?P(i)!==e:void 0}function Fe(t,e,n,i,r){if(n)if(l(n)){var a;Array.isArray(n)&&(n=C(n));var o=function(o){if("class"===o||"style"===o||y(o))a=t;else{var s=t.attrs&&t.attrs.type;a=i||B.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=A(o),c=P(o);if(!(l in a)&&!(c in a)&&(a[o]=n[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Ie(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),je(i,"__static__"+t,!1),i)}function Ee(t,e,n){return je(t,"__once__"+e+(n?"_"+n:""),!0),t}function je(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&ze(t[i],e+"_"+i,n);else ze(t,e,n)}function ze(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ne(t,e){if(e)if(u(e)){var n=t.on=t.on?$({},t.on):{};for(var i in e){var r=n[i],a=e[i];n[i]=r?[].concat(r,a):a}}else;return t}function Be(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var a=t[r];Array.isArray(a)?Be(a,e,n):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return i&&(e.$key=i),e}function We(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function He(t,e){return"string"===typeof t?e+t:t}function Ue(t){t._o=Ee,t._n=v,t._s=d,t._l=Me,t._t=$e,t._q=I,t._i=E,t._m=Ie,t._f=Ce,t._k=Le,t._b=Fe,t._v=yt,t._e=gt,t._u=Be,t._g=Ne,t._d=We,t._p=He}function Ve(t,e,i,r,o){var s,l=this,c=o.options;m(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=a(c._compiled),h=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=we(c.inject,r),this.slots=function(){return l.$slots||ke(t.scopedSlots,l.$slots=Te(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var a=an(s,t,e,n,i,h);return a&&!Array.isArray(a)&&(a.fnScopeId=c._scopeId,a.fnContext=r),a}:this._c=function(t,e,n,i){return an(s,t,e,n,i,h)}}function qe(t,e,i,a,o){var s=t.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=Vt(u,c,e||n);else r(i.attrs)&&Ge(l,i.attrs),r(i.props)&&Ge(l,i.props);var h=new Ve(i,l,o,a,t),p=s.render.call(null,h._c,h);if(p instanceof dt)return Xe(p,i,h.parent,s,h);if(Array.isArray(p)){for(var f=_e(p)||[],d=new Array(f.length),v=0;v<f.length;v++)d[v]=Xe(f[v],i,h.parent,s,h);return d}}function Xe(t,e,n,i,r){var a=xt(t);return a.fnContext=n,a.fnOptions=i,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Ge(t,e){for(var n in e)t[A(n)]=e[n]}Ue(Ve.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var i=t.componentInstance=Qe(t,wn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Dn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(Cn(n,"onServiceCreated"),Cn(n,"onServiceAttached"),n._isMounted=!0,Cn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Un(n):Mn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$n(e,!0):e.$destroy())}},Ke=Object.keys(Je);function Ye(t,e,n,o,s){if(!i(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=vn(u,c),void 0===t))return dn(u,e,n,o,s);e=e||{},fi(t),r(e.model)&&en(t.options,e);var h=ge(e,t,s,n);if(a(t.options.functional))return qe(t,h,e,n,o);var p=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:p,tag:s,children:o},u);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var i=Ke[n],r=e[i],a=Je[i];r===a||r&&r._merged||(e[i]=r?tn(a,r):a)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),o=a[i],s=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[i]=[s].concat(o)):a[i]=s}var nn=1,rn=2;function an(t,e,n,i,r,o){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),a(o)&&(r=rn),on(t,e,n,i,r)}function on(t,e,n,i,a){if(r(n)&&r(n.__ob__))return gt();if(r(n)&&r(n.is)&&(e=n.is),!e)return gt();var o,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),a===rn?i=_e(i):a===nn&&(i=xe(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),o=B.isReservedTag(e)?new dt(B.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Ut(t.$options,"components",e))?new dt(e,n,i,void 0,void 0,t):Ye(l,n,t,i,e)):o=Ye(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(s)&&sn(o,s),r(n)&&ln(n),o):gt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var o=0,s=t.children.length;o<s;o++){var l=t.children[o];r(l.tag)&&(i(l.ns)||a(n)&&"svg"!==l.tag)&&sn(l,e,n)}}function ln(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Te(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return an(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return an(t,e,n,i,r,!0)};var a=i&&i.data;Ot(t,"$attrs",a&&a.attrs||n,null,!0),Ot(t,"$listeners",e._parentListeners||n,null,!0)}var un,hn=null;function pn(t){Ue(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=ke(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{hn=e,t=i.call(e._renderProxy,e.$createElement)}catch(nr){Kt(nr,e,"render"),t=e._vnode}finally{hn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=r,t}}function fn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function dn(t,e,n,i,r){var a=gt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:i,tag:r},a}function vn(t,e){if(a(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=hn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var o=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return x(o,n)});var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},p=j(function(n){t.resolved=fn(n,e),s?o.length=0:h(!0)}),d=j(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),v=t(p,d);return l(v)&&(f(v)?i(t.resolved)&&v.then(p,d):f(v.component)&&(v.component.then(p,d),r(v.error)&&(t.errorComp=fn(v.error,e)),r(v.loading)&&(t.loadingComp=fn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},v.delay||200)),r(v.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||gn(n)))return n}}function xn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Sn(t,e)}function _n(t,e){un.$on(t,e)}function mn(t,e){un.$off(t,e)}function bn(t,e){var n=un;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function Sn(t,e,n){un=t,de(e,n||{},_n,mn,bn,t),un=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,a=t.length;r<a;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var a,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?M(n):n;for(var i=M(arguments,1),r='event handler for "'+t+'"',a=0,o=n.length;a<o;a++)Yt(n[a],e,i,e,r)}return e}}var wn=null;function Tn(t){var e=wn;return wn=t,function(){wn=e}}function Pn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,a=Tn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),a(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Cn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Cn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Dn(t,e,i,r,a){var o=r.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),c=!!(a||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=a,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){wt(!1);for(var u=t._props,h=t.$options._propKeys||[],p=0;p<h.length;p++){var f=h[p],d=t.$options.props;u[f]=Vt(f,d,e,t)}wt(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),i=i||n;var v=t.$options._parentListeners;t.$options._parentListeners=i,Sn(t,i,v),c&&(t.$slots=Te(a,r.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Mn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Cn(t,"activated")}}function $n(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Cn(t,"deactivated")}}function Cn(t,e){pt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,a=n.length;r<a;r++)Yt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var Rn=[],Ln=[],Fn={},In=!1,En=!1,jn=0;function zn(){jn=Rn.length=Ln.length=0,Fn={},In=En=!1}var Nn=Date.now;if(J&&!Z){var Bn=window.performance;Bn&&"function"===typeof Bn.now&&Nn()>document.createEvent("Event").timeStamp&&(Nn=function(){return Bn.now()})}function Wn(){var t,e;for(Nn(),En=!0,Rn.sort(function(t,e){return t.id-e.id}),jn=0;jn<Rn.length;jn++)t=Rn[jn],t.before&&t.before(),e=t.id,Fn[e]=null,t.run();var n=Ln.slice(),i=Rn.slice();zn(),Vn(n),Hn(i),at&&B.devtools&&at.emit("flush")}function Hn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Cn(i,"updated")}}function Un(t){t._inactive=!1,Ln.push(t)}function Vn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Mn(t[e],!0)}function qn(t){var e=t.id;if(null==Fn[e]){if(Fn[e]=!0,En){var n=Rn.length-1;while(n>jn&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);In||(In=!0,le(Wn))}}var Xn=0,Gn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Xn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;Kt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),ft(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():qn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){Kt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:R,set:R};function Kn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&oi(t,e.methods),e.data?Zn(t):Dt(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],a=!t.$parent;a||wt(!1);var o=function(a){r.push(a);var o=Vt(a,e,n,t);Ot(i,a,o),a in t||Kn(t,"_props",a)};for(var s in e)o(s);wt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var a=n[r];0,i&&m(i,a)||H(a)||Kn(t,"_data",a)}Dt(e,!0)}function ti(t,e){pt();try{return t.call(e,e)}catch(nr){return Kt(nr,e,"data()"),{}}finally{ft()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var a=e[r],o="function"===typeof a?a:a.get;0,i||(n[r]=new Gn(t,o||R,R,ei)),r in t||ii(t,r,a)}}function ii(t,e,n){var i=!rt();"function"===typeof n?(Jn.get=i?ri(e):ai(n),Jn.set=R):(Jn.get=n.get?i&&!1!==n.cache?ri(e):ai(n.get):R,Jn.set=n.set||R),Object.defineProperty(t,e,Jn)}function ri(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ai(t){return function(){return t.call(this,this)}}function oi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:O(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)li(t,n,i[r]);else li(t,n,i)}}function li(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ci(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return li(i,t,e,n);n=n||{},n.user=!0;var r=new Gn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(a){Kt(a,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ui=0;function hi(t){t.prototype._init=function(t){var e=this;e._uid=ui++,e._isVue=!0,t&&t._isComponent?pi(e,t):e.$options=Ht(fi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Pn(e),xn(e),cn(e),Cn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Ae(e),Yn(e),"mp-toutiao"!==e.mpHost&&Se(e),"mp-toutiao"!==e.mpHost&&Cn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fi(t){var e=t.options;if(t.super){var n=fi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=di(t);r&&$(t.extendOptions,r),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function di(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function vi(t){this._init(t)}function gi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=M(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yi(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function xi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var a=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ht(n.options,t),o["super"]=n,o.options.props&&_i(o),o.options.computed&&mi(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,z.forEach(function(t){o[t]=n[t]}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=$({},o.options),r[i]=o,o}}function _i(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mi(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function bi(t){z.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Si(t){return t&&(t.Ctor.options.name||t.tag)}function Ai(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function wi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var a in n){var o=n[a];if(o){var s=Si(o.componentOptions);s&&!e(s)&&Ti(n,a,i,r)}}}function Ti(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,x(n,e)}hi(vi),ci(vi),An(vi),kn(vi),pn(vi);var Pi=[String,RegExp,Array],ki={name:"keep-alive",abstract:!0,props:{include:Pi,exclude:Pi,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ti(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){wi(t,function(t){return Ai(e,t)})}),this.$watch("exclude",function(e){wi(t,function(t){return!Ai(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var i=Si(n),r=this,a=r.include,o=r.exclude;if(a&&(!i||!Ai(a,i))||o&&i&&Ai(o,i))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,x(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&Ti(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Di={KeepAlive:ki};function Oi(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:$,mergeOptions:Ht,defineReactive:Ot},t.set=Mt,t.delete=$t,t.nextTick=le,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,$(t.options.components,Di),gi(t),yi(t),xi(t),bi(t)}Oi(vi),Object.defineProperty(vi.prototype,"$isServer",{get:rt}),Object.defineProperty(vi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vi,"FunctionalRenderContext",{value:Ve}),vi.version="2.6.11";var Mi="[object Array]",$i="[object Object]";function Ci(t,e){var n={};return Ri(t,e),Li(t,e,"",n),n}function Ri(t,e){if(t!==e){var n=Ii(t),i=Ii(e);if(n==$i&&i==$i){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var a=t[r];void 0===a?t[r]=null:Ri(a,e[r])}}else n==Mi&&i==Mi&&t.length>=e.length&&e.forEach(function(e,n){Ri(t[n],e)})}}function Li(t,e,n,i){if(t!==e){var r=Ii(t),a=Ii(e);if(r==$i)if(a!=$i||Object.keys(t).length<Object.keys(e).length)Fi(i,n,t);else{var o=function(r){var a=t[r],o=e[r],s=Ii(a),l=Ii(o);if(s!=Mi&&s!=$i)a!=e[r]&&Fi(i,(""==n?"":n+".")+r,a);else if(s==Mi)l!=Mi?Fi(i,(""==n?"":n+".")+r,a):a.length<o.length?Fi(i,(""==n?"":n+".")+r,a):a.forEach(function(t,e){Li(t,o[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==$i)if(l!=$i||Object.keys(a).length<Object.keys(o).length)Fi(i,(""==n?"":n+".")+r,a);else for(var c in a)Li(a[c],o[c],(""==n?"":n+".")+r+"."+c,i)};for(var s in t)o(s)}else r==Mi?a!=Mi?Fi(i,n,t):t.length<e.length?Fi(i,n,t):t.forEach(function(t,r){Li(t,e[r],n+"["+r+"]",i)}):Fi(i,n,t)}}function Fi(t,e,n){t[e]=n}function Ii(t){return Object.prototype.toString.call(t)}function Ei(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function ji(t){return Rn.find(function(e){return t._watcher===e})}function zi(t,e){if(!t.__next_tick_pending&&!ji(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){Kt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Ni(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Bi=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=Ni(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var a=Object.create(null);Object.keys(r).forEach(function(t){a[t]=i.data[t]});var o=!1===this.$shouldDiffData?r:Ci(r,a);Object.keys(o).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,i.setData(o,function(){n.__next_tick_pending=!1,Ei(n)})):Ei(this)}};function Wi(){}function Hi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Wi),t.$options.render||(t.$options.render=Wi),"mp-toutiao"!==t.mpHost&&Cn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Gn(t,i,R,{before:function(){t._isMounted&&!t._isDestroyed&&Cn(t,"beforeUpdate")}},!0),n=!1,t}function Ui(t,e){return r(t)||r(e)?Vi(t,qi(e)):""}function Vi(t,e){return t?e?t+" "+e:t:e||""}function qi(t){return Array.isArray(t)?Xi(t):l(t)?Gi(t):"string"===typeof t?t:""}function Xi(t){for(var e,n="",i=0,a=t.length;i<a;i++)r(e=qi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ji=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ki(t){return Array.isArray(t)?C(t):"string"===typeof t?Ji(t):t}var Yi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qi(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Qi(t[i],n.slice(1).join("."))}function Zi(t){t.config.errorHandler=function(t){console.error(t);var e=getApp();e&&e.onError&&e.onError(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:M(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return zi(this,t)},Yi.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=Se,t.prototype.__init_injections=Ae,t.prototype.__call_hook=function(t,e){var n=this;pt();var i,r=n.$options[t],a=t+" hook";if(r)for(var o=0,s=r.length;o<s;o++)i=Yt(r[o],n,e?[e]:null,n,a);return n._hasHookEvent&&n.$emit("hook:"+t,e),ft(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qi(e||this,t)},t.prototype.__get_class=function(t,e){return Ui(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ki(t),i=e?$(e,n):n;return Object.keys(i).map(function(t){return P(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,a,o;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(a=Object.keys(t),n=Object.create(null),i=0,r=a.length;i<r;i++)o=a[i],n[o]=e(t[o],o,i);return n}return[]}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;tr.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=tr}vi.prototype.__patch__=Bi,vi.prototype.$mount=function(t,e){return Hi(this,t,e)},er(vi),Zi(vi),e["default"]=vi}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=ve,e.createComponent=Te,e.createPage=we,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){u(t,e,n[e])})}return t}function o(t,e){return c(t)||l(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(l){r=!0,a=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){return d(t)||f(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var v=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function x(t){return"string"===typeof t}function _(t){return"[object Object]"===v.call(t)}function m(t,e){return g.call(t,e)}function b(){}function S(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var A=/-(\w)/g,w=S(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),T=["invoke","success","fail","complete","returnValue"],P={},k={};function D(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?O(n):n}function O(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function M(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function $(t,e){Object.keys(e).forEach(function(n){-1!==T.indexOf(n)&&y(e[n])&&(t[n]=D(t[n],e[n]))})}function C(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==T.indexOf(n)&&y(e[n])&&M(t[n],e[n])})}function R(t,e){"string"===typeof t&&_(e)?$(k[t]||(k[t]={}),e):_(t)&&$(P,t)}function L(t,e){"string"===typeof t?_(e)?C(k[t],e):delete k[t]:_(t)&&C(P,t)}function F(t){return function(e){return t(e)||e}}function I(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function E(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(F(r));else{var a=r(e);if(I(a)&&(n=Promise.resolve(a)),!1===a)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){E(t[n],e).then(function(t){return y(i)&&i(t)||t})}}}),e}function z(t,e){var n=[];Array.isArray(P.returnValue)&&n.push.apply(n,h(P.returnValue));var i=k[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,h(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(P).forEach(function(t){"returnValue"!==t&&(e[t]=P[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function B(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),a=3;a<i;a++)r[a-3]=arguments[a];var o=N(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=E(o.invoke,n);return s.then(function(t){return e.apply(void 0,[j(o,t)].concat(r))})}return e.apply(void 0,[j(o,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var W={returnValue:function(t){return I(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},H=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,U=/^create|Manager$/,V=/^on/;function q(t){return U.test(t)}function X(t){return H.test(t)}function G(t){return V.test(t)&&"onPush"!==t}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(q(t)||X(t)||G(t))}function Y(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return y(n.success)||y(n.fail)||y(n.complete)?z(t,B.apply(void 0,[t,e,n].concat(r))):z(t,J(new Promise(function(i,a){B.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:a})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Q=1e-4,Z=750,tt=!1,et=0,nt=0;function it(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;et=i,nt=n,tt="ios"===e}function rt(t,e){if(0===et&&it(),t=Number(t),0===t)return 0;var n=t/Z*(e||et);return n<0&&(n=-n),n=Math.floor(n+Q),0===n?1!==nt&&tt?.5:1:t<0?-n:n}var at={promiseInterceptor:W},ot=Object.freeze({__proto__:null,upx2px:rt,interceptors:at,addInterceptor:R,removeInterceptor:L}),st={},lt=[],ct=[],ut=["success","fail","cancel","complete"];function ht(t,e,n){return function(i){return e(ft(t,i,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var a=!0===r?e:{};for(var o in y(n)&&(n=n(e,a)||{}),e)if(m(n,o)){var s=n[o];y(s)&&(s=s(e[o],e,a)),s?x(s)?a[s]=e[o]:_(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==ut.indexOf(o)?a[o]=ht(t,e[o],i):r||(a[o]=e[o]);return a}return y(e)&&(e=ht(t,e,i)),e}function ft(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(st.returnValue)&&(e=st.returnValue(t,e)),pt(t,e,n,{},i)}function dt(t,e){if(m(st,t)){var n=st[t];return n?function(e,i){var r=n;y(n)&&(r=n(e)),e=pt(t,e,r.args,r.returnValue);var a=[e];"undefined"!==typeof i&&a.push(i);var o=wx[r.name||t].apply(wx,a);return X(t)?ft(t,o,r.returnValue,q(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var vt=Object.create(null),gt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(r),y(i)&&i(r)}}gt.forEach(function(t){vt[t]=yt(t)});var xt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function mt(){return _t(xt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return _t(xt(),"$off",Array.prototype.slice.call(arguments))}function St(){return _t(xt(),"$once",Array.prototype.slice.call(arguments))}function At(){return _t(xt(),"$emit",Array.prototype.slice.call(arguments))}var wt=Object.freeze({__proto__:null,$on:mt,$off:bt,$once:St,$emit:At});function Tt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Pt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;Tt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,a=t.hide,o=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return a.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return o.apply(t,i)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Pt(e),e}var Dt=Object.freeze({__proto__:null,getSubNVueById:kt,requireNativePlugin:Tt}),Ot=Page,Mt=Component,$t=/:/g,Ct=S(function(t){return w(t.replace($t,"-"))});function Rt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return e.apply(t,[Ct(n)].concat(r))}}}function Lt(t,e){var n=e[t];e[t]=n?function(){Rt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Rt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("onLoad",t),Ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("created",t),Mt(t)};var Ft=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function It(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Et(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Et(t,e)}):void 0}function jt(t,e,n){e.forEach(function(e){Et(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function zt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Bt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Wt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return _(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=i[t])}),n}var Ht=[String,Number,Boolean,Object,Array,null];function Ut(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Vt(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(n)&&n.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(i)&&i.props&&o.push(e({properties:Xt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){_(t)&&t.props&&o.push(e({properties:Xt(t.props,!0)}))}),o}function qt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function Xt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ut(t)}}):_(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(_(i)){var r=i["default"];y(r)&&(r=r()),i.type=qt(e,i.type),n[e]={type:-1!==Ht.indexOf(i.type)?i.type:null,value:r,observer:Ut(e)}}else{var a=qt(e,i);n[e]={type:-1!==Ht.indexOf(a)?a:null,observer:Ut(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var a=e[1],o=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:a?Array.isArray(s)?n=s.find(function(e){return t.__get_value(a,e)===r}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],o&&(n=t.__get_value(o,n))}}),n}function Kt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Jt(t,e)}),i}function Yt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(r&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return o?[e]:e.detail.__args__||e.detail;var s=Kt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==a||r?r&&!o?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Yt(t)):"string"===typeof t&&m(s,t)?l.push(s[t]):l.push(t)}),l}var Zt="~",te="^";function ee(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ne(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,a=[];return i.forEach(function(n){var i=n[0],o=n[1],s=i.charAt(0)===te;i=s?i.slice(1):i;var l=i.charAt(0)===Zt;i=l?i.slice(1):i,o&&ee(r,i)&&o.forEach(function(n){var i=n[0];if(i){var r=e.$vm;if(r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent),"$emit"===i)return void r.$emit.apply(r,Qt(e.$vm,t,n[1],n[2],s,i));var o=r[i];if(!y(o))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(o.once)return;o.once=!0}a.push(o.apply(r,Qt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ie=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),It(this,n)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};a.globalData=t.$options.globalData||{};var o=t.$options.methods;return o&&Object.keys(o).forEach(function(t){a[t]=o[t]}),jt(a,ie),a}var ae=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){for(var n,i=t.$children,r=i.length-1;r>=0;r--){var a=i[r];if(a.$scope._$vueId===e)return a}for(var o=i.length-1;o>=0;o--)if(n=oe(i[o],e),n)return n}function se(t){return Behavior(t)}function le(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function he(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function pe(t){return re(t,{mocks:ae,initRefs:ue})}var fe=["onUniNViewMessage"];function de(t){var e=pe(t);return jt(e,fe),e}function ve(t){return App(de(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,s=zt(i.default,t),l=o(s,2),c=l[0],u=l[1],h=a({multipleSlots:!0,addGlobalClass:!0},u.options||{}),p={options:h,data:Wt(u,i.default.prototype),behaviors:Vt(u,se),properties:Xt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Bt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:he,__e:ne}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){p.methods[t]=function(e){return this.$vm[t](e)}}),n?p:[p,c]}function ye(t){return ge(t,{isPage:le,initRelation:ce})}function xe(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=xe(t);return jt(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:le,initRelation:ce})}_e.push.apply(_e,Ft);var Se=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ae(t){var e=be(t);return jt(e.methods,Se),e}function we(t){return Component(Ae(t))}function Te(t){return Component(xe(t))}lt.forEach(function(t){st[t]=!1}),ct.forEach(function(t){var e=st[t]&&st[t].name?st[t].name:t;wx.canIUse(e)||(st[t]=!1)});var Pe={};Object.keys(ot).forEach(function(t){Pe[t]=ot[t]}),Object.keys(wt).forEach(function(t){Pe[t]=wt[t]}),Object.keys(Dt).forEach(function(t){Pe[t]=Y(t,Dt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(st,t))&&(Pe[t]=Y(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Pe,t.UniEmitter=wt),wx.createApp=ve,wx.createPage=we,wx.createComponent=Te;var ke=Pe,De=ke;e.default=De}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-26420200313001",_inBundle:!1,_integrity:"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz",_shasum:"a006e329e033cd412accfa635f8933dbb822a9c3",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"b1fdbafab5dd4673cff64188a5203d0c947e4f50",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-26420200313001"}},"8a64":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__63B8FE5"};e.default=i},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var h=e.version,p="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",x="__DC_UUID_VALUE";function _(){var e="";if("n"===A()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=x}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,x)}}return e}var m=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var a in n)i[n[a]]=t[n[a]],r+=n[a]+"="+t[n[a]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},S=function(){return parseInt((new Date).getTime()/1e3)},A=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},w=function(){var e="";return"wx"!==A()&&"qq"!==A()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===A()?plus.runtime.version:""},P=function(){var t=A(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=A(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},D="First__Visit__Time",O="Last__Visit__Time",M=function(){var e=t.getStorageSync(D),n=0;return e?n=e:(n=S(),t.setStorageSync(D,n),t.removeStorageSync(O)),n},$=function(){var e=t.getStorageSync(O),n=0;return n=e||"",t.setStorageSync(O,S()),n},C="__page__residence__time",R=0,L=0,F=function(){return R=S(),"n"===A()&&t.setStorageSync(C,S()),R},I=function(){return L=S(),"n"===A()&&(R=t.getStorageSync(C)),L-R},E="Total__Visit__Count",j=function(){var e=t.getStorageSync(E),n=1;return e&&(n=e,n++),t.setStorageSync(E,n),n},z=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},N=0,B=0,W=function(){var t=(new Date).getTime();return N=t,B=0,t},H=function(){var t=(new Date).getTime();return B=t,t},U=function(t){var e=0;if(0!==N&&(e=B-N),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>d;return{residenceTime:e,overtime:i}}return{residenceTime:e}},V=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===A()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},q=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,a=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===A()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},X=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("bb74").default,K=n("8a64").default||n("8a64"),Y=t.getSystemInfoSync(),Q=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:A(),mpn:w(),ak:K.appid,usv:h,v:T(),ch:P(),cn:"",pn:"",ct:"",t:S(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=U("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var n=U();W();var i=q(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=q(this),e=V();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var n=U("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=S(),this.statData.sc=k(t.scene),this.statData.fvts=M(),this.statData.lvts=$(),this.statData.tvc=j(),"n"===A()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,a=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:S(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;K.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=S(),a=this._navigationBarTitle;e.ttn=a.page,e.ttpj=a.config,e.ttc=a.report;var o=this._reportingRequestData;if("n"===A()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===A()&&t.setStorageSync("__UNI__STAT__DATA",o),!(I()<g)||n){var s=this._reportingRequestData;"n"===A()&&(s=t.getStorageSync("__UNI__STAT__DATA")),F();var l=[],c=[],u=[],p=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var f in s)p(f);l.push.apply(l,c.concat(u));var d={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===A()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==A()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){i._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=m(z(t)).options;e.src=f+"?"+n}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return l(this,n),e=i(this,a(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,F(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,X(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,X(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},bb74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/index/index":{navigationBarBackgroundColor:"#1de1d3",navigationBarTextStyle:"white",navigationBarTitleText:"首页"},"pages/sensor/sensor":{navigationBarBackgroundColor:"#557cc3",navigationBarTextStyle:"white",navigationBarTitleText:"传感器"},"pages/AddDevice/index":{navigationBarBackgroundColor:"#1de1d3",navigationBarTextStyle:"white",navigationBarTitleText:"添加设备"},"pages/find/find":{navigationBarBackgroundColor:"#1de1d3",navigationBarTextStyle:"white",navigationBarTitleText:"发现"},"pages/order/order":{navigationBarBackgroundColor:"#1de1d3",navigationBarTextStyle:"white",navigationBarTitleText:"订单"},"pages/user/user":{navigationBarBackgroundColor:"#1de1d3",navigationBarTextStyle:"white",navigationBarTitleText:"我的"},"components/chart/bar/bar":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"",navigationBarBackgroundColor:"#1de1d3",backgroundColor:"#1de1d3"}};e.default=i},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},d372:function(t,e,n){},de76:function(t,e,n){"use strict";(function(e,n){var i={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},r=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(null==t)throw new TypeError("Cannot convert undefined or null to object");if(!n||n.length<=0)return t;function r(t,e){for(var n in e)t[n]=t[n]&&"[object Object]"===t[n].toString()?r(t[n],e[n]):t[n]=e[n];return t}return n.forEach(function(e){t=r(t,e)}),t},a={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function o(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),a=parseInt(r[1],16),o=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+a+","+o+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function l(t,e,n,i){for(var r=[],a=0;a<t.length;a++){for(var o={data:[],name:e[a],color:n[a]},s=0,l=i.length;s<l;s++)if(s<t[a])o.data.push(null);else{for(var c=0,u=0;u<t[a];u++)c+=i[s-u][1];o.data.push(+(c/t[a]).toFixed(3))}r.push(o)}return r}function c(t,e,n,i,r){var a=r.width-r.area[1]-r.area[3],o=n.eachSpacing*(r.chartData.xAxisData.xAxisPoints.length-1),s=e;return e>=0?(s=0,t.event.trigger("scrollLeft")):Math.abs(e)>=o-a&&(s=a-o,t.event.trigger("scrollRight")),s}function u(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function h(t,e,n){var i=t,r=n-e,a=i+(n-r-i)/Math.sqrt(2);a*=-1;var o=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:a,transY:o}}function p(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,a=null,o=null,s=null,l=null;if(e<1?(a=t[0].x+(t[1].x-t[0].x)*i,o=t[0].y+(t[1].y-t[0].y)*i):(a=t[e].x+(t[e+1].x-t[e-1].x)*i,o=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*r,l=t[c].y-(t[c].y-t[c-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,l=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(o=t[e].y),(o>=Math.max(t[e].y,t[e+1].y)||o<=Math.min(t[e].y,t[e+1].y))&&(o=t[e].y),(l>=Math.max(t[e].y,t[e+1].y)||l<=Math.min(t[e].y,t[e+1].y))&&(l=t[e+1].y),{ctrA:{x:a,y:o},ctrB:{x:s,y:l}}}function f(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(a.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function v(t,e,n){var i=0;return t.map(function(t){if(t.color||(t.color=n.colors[i],i=(i+1)%n.colors.length),t.index||(t.index=0),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function g(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:i>=.01?.01:i>=.001?.001:i>=1e-4?1e-4:i>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.fontSize;t=String(t);t=t.split("");for(var n=0,r=0;r<t.length;r++){var a=t[r];/[a-zA-Z]/.test(a)?n+=7:/[0-9]/.test(a)?n+=5.5:/\./.test(a)?n+=2.7:/-/.test(a)?n+=3.25:/[\u4e00-\u9fa5]/.test(a)?n+=10:/\(|\)/.test(a)?n+=3.73:/\s/.test(a)?n+=2.5:/%/.test(a)?n+=8:n+=10}return n*e/10}function x(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function _(t,e){for(var n=new Array(e),i=0;i<n.length;i++)n[i]=0;for(var r=0;r<t.length;r++)for(i=0;i<n.length;i++)n[i]+=t[r].data[i];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function m(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function b(t,e){for(var n=[],i=0;i<t.length;i++){var r=t[i];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]&&r.show){var a={};a.color=r.color,a.type=r.type,a.style=r.style,a.pointShape=r.pointShape,a.disableLegend=r.disableLegend,a.name=r.name,a.show=r.show,a.data=r.format?r.format(r.data[e]):r.data[e],n.push(a)}}return n}function S(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function A(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function w(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){var e=[];return e=i||t.data,{text:r.format?r.format(t,e[n]):t.name+": "+t.data,color:t.color}}),o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&o.push(c[n])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function T(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});a=a.filter(function(t){if(!0!==t.disableLegend)return t});for(var o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&o.push(c[n])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function P(t,e,n,i,r,a){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var o=a.color.upFill,s=a.color.downFill,l=[o,o,s,o],c=[],u={text:r[i],color:null};c.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[i-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[i-1][1]&&(l[2]=o),e.data[3]<t[i-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},r={text:"收盘："+e.data[1],color:l[1]},a={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,r,a,u)});for(var h=[],p={x:0,y:0},f=0;f<n.length;f++){var d=n[f];"undefined"!==typeof d[i]&&null!==d[i]&&h.push(d[i])}return p.x=Math.round(h[0][0].x),{textList:c,offset:p}}function k(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function D(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=-1,o=0,s=[],l=0;l<e[0].length;l++)s.push(e[0][l].x);return"line"!=n.type&&"area"!=n.type||"justify"!=n.xAxis.boundaryGap||(o=n.chartData.eachSpacing/2),n.categories||(o=0),$(t,n,i)&&s.forEach(function(e,n){t.x+r+o>e&&(a=n)}),a}function O(t,e,n){var i=-1;if(M(t,e.area)){for(var r=e.points,a=-1,o=0,s=r.length;o<s;o++)for(var l=r[o],c=0;c<l.length;c++){a+=1;var u=l[c]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){i=a;break}}return i}return i}function M(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function $(t,e,n){return t.x<=e.width-e.area[1]+10&&t.x>=e.area[3]-10&&t.y>=e.area[0]&&t.y<=e.height-e.area[2]}function C(t,e,n){var i=2*Math.PI/n,r=-1;if(E(t,e.center,e.radius)){var a=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o*=-1,o<0&&(o+=2*Math.PI);var s=e.angleList.map(function(t){return t=a(-1*t),t});s.forEach(function(t,e){var n=a(t-i/2),s=a(t+i/2);s<n&&(s+=2*Math.PI),(o>=n&&o<=s||o+2*Math.PI>=n&&o+2*Math.PI<=s)&&(r=e)})}return r}function R(t,e){for(var n=-1,i=0,r=e.series.length;i<r;i++){var a=e.series[i];if(t.x>a.funnelArea[0]&&t.x<a.funnelArea[2]&&t.y>a.funnelArea[1]&&t.y<a.funnelArea[3]){n=i;break}}return n}function L(t,e){for(var n=-1,i=0,r=e.length;i<r;i++){var a=e[i];if(t.x>a.area[0]&&t.x<a.area[2]&&t.y>a.area[1]&&t.y<a.area[3]){n=i;break}}return n}function F(t,e){for(var n=-1,i=e.chartData.mapData,r=e.series,a=zt(t.y,t.x,i.bounds,i.scale,i.xoffset,i.yoffset),o=[a.x,a.y],s=0,l=r.length;s<l;s++){var c=r[s].geometry.coordinates;if(Bt(o,c)){n=s;break}}return n}function I(t,e){var n=-1;if(E(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,a=e.series.length;r<a;r++){var o=e.series[r];if(u(i,o._start_,o._start_+2*o._proportion_*Math.PI)){n=r;break}}}return n}function E(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function j(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function z(t,e,n,i){var r={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return i.legendData=r,r;var a=e.legend.padding,o=e.legend.margin,s=e.legend.fontSize,l=15*e.pixelRatio,c=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var h=[],p=0,f=[],d=[],v=0;v<t.length;v++){var g=t[v],x=l+c+y(g.name||"undefined",s)+e.legend.itemGap;p+x>e.width-e.padding[1]-e.padding[3]?(h.push(d),f.push(p-e.legend.itemGap),p=x,d=[g]):(p+=x,d.push(g))}if(d.length){h.push(d),f.push(p-e.legend.itemGap),r.widthArr=f;var _=Math.max.apply(null,f);switch(e.legend.float){case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+2*a;break;case"right":r.area.start.x=e.width-e.padding[1]-_-2*a,r.area.end.x=e.width-e.padding[1];break;default:r.area.start.x=(e.width-_)/2-a,r.area.end.x=(e.width+_)/2+a}r.area.width=_+2*a,r.area.wholeWidth=_+2*a,r.area.height=h.length*u+2*a,r.area.wholeHeight=h.length*u+2*a+2*o,r.points=h}}else{var m=t.length,b=e.height-e.padding[0]-e.padding[2]-2*o-2*a,S=Math.min(Math.floor(b/u),m);switch(r.area.height=S*u+2*a,r.area.wholeHeight=S*u+2*a,e.legend.float){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-o-r.area.height,r.area.end.y=e.height-e.padding[2]-o;break;default:r.area.start.y=(e.height-r.area.height)/2,r.area.end.y=(e.height+r.area.height)/2}for(var A=m%S===0?m/S:Math.floor(m/S+1),w=[],T=0;T<A;T++){var P=t.slice(T*S,T*S+S);w.push(P)}if(r.points=w,w.length){for(var k=0;k<w.length;k++){for(var D=w[k],O=0,M=0;M<D.length;M++){var $=l+c+y(D[M].name||"undefined",s)+e.legend.itemGap;$>O&&(O=$)}r.widthArr.push(O),r.heightArr.push(D.length*u+2*a)}for(var C=0,R=0;R<r.widthArr.length;R++)C+=r.widthArr[R];r.area.width=C-e.legend.itemGap+2*a,r.area.wholeWidth=r.area.width+a}}switch(e.legend.position){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-r.area.height-o,r.area.end.y=e.height-e.padding[2]-o;break;case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+r.area.width;break;case"right":r.area.start.x=e.width-e.padding[1]-r.area.width,r.area.end.x=e.width-e.padding[1];break}return i.legendData=r,r}function N(t,e,n,i){var r={angle:0,xAxisHeight:n.xAxisHeight},a=t.map(function(t){return y(t,e.xAxis.fontSize||n.fontSize)}),o=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&o+2*n.xAxisTextPadding>i&&(r.angle=45*Math.PI/180,r.xAxisHeight=2*n.xAxisTextPadding+o*Math.sin(r.angle)),r}function B(t,e,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,r=x(t),a=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){a.push(t)}):a.push(t[0]):a.push(t.value):a.push(t)});var o=0,s=0;if(a.length>0&&(o=Math.min.apply(this,a),s=Math.max.apply(this,a)),i>-1?("number"===typeof e.xAxis.data[i].min&&(o=Math.min(e.xAxis.data[i].min,o)),"number"===typeof e.xAxis.data[i].max&&(s=Math.max(e.xAxis.data[i].max,s))):("number"===typeof e.xAxis.min&&(o=Math.min(e.xAxis.min,o)),"number"===typeof e.xAxis.max&&(s=Math.max(e.xAxis.max,s))),o===s){var l=s||10;s+=l}for(var c=g(o,s),u=c.minRange,h=c.maxRange,p=[],f=(h-u)/e.xAxis.splitNumber,d=0;d<=e.xAxis.splitNumber;d++)p.push(u+f*d);return p}function W(t,e,n){var i={angle:0,xAxisHeight:n.xAxisHeight};i.ranges=B(t,e,n),i.rangesFormat=i.ranges.map(function(t){return t=e.xAxis.format?e.xAxis.format(t):a.toFixed(t,2),t});var r=i.ranges.map(function(t){return t=a.toFixed(t,2),t=e.xAxis.format?e.xAxis.format(Number(t)):t,t});i=Object.assign(i,tt(r,e,n));var o=i.eachSpacing,s=r.map(function(t){return y(t)}),l=Math.max.apply(this,s);return l+2*n.xAxisTextPadding>o&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+l*Math.sin(i.angle)),!0===e.xAxis.disabled&&(i.xAxisHeight=0),i}function H(t,e,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=r.extra.radar||{};o.max=o.max||0;for(var s=Math.max(o.max,Math.max.apply(null,x(i))),l=[],c=function(r){var o=i[r],c={};c.color=o.color,c.legendShape=o.legendShape,c.pointShape=o.pointShape,c.data=[],o.data.forEach(function(i,r){var o={};o.angle=t[r],o.proportion=i/s,o.position=f(n*o.proportion*a*Math.cos(o.angle),n*o.proportion*a*Math.sin(o.angle),e),c.data.push(o)}),l.push(c)},u=0;u<i.length;u++)c(u);return l}function U(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,a=0;a<t.length;a++){var o=t[a];o.data=null===o.data?0:o.data,i+=o.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===i?1/t.length*n:l.data/i*n,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var i=0;i<t.length;i++)t[i].radius=t[i].data/t[0].data*e*n,t[i]._proportion_=t[i].data/t[0].data;return t.reverse()}function q(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=0,o=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,a+=c.data,s.push(c.data)}for(var u=Math.min.apply(null,s),h=Math.max.apply(null,s),p=i-n,f=0;f<t.length;f++){var d=t[f];d.data=null===d.data?0:d.data,0===a||"area"==e?(d._proportion_=d.data/a*r,d._rose_proportion_=1/t.length*r):(d._proportion_=d.data/a*r,d._rose_proportion_=d.data/a*r),d._radius_=n+p*((d.data-u)/(h-u))}for(var v=0;v<t.length;v++){var g=t[v];g._start_=o,o+=2*g._rose_proportion_*Math.PI}return t}function X(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var i=0;i<t.length;i++){var r=t[i];r.data=null===r.data?0:r.data;var a=void 0;a="circle"==e.type?2:e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle,r._proportion_=a*r.data*n+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function G(t,e,n){for(var i=e-n+1,r=e,a=0;a<t.length;a++)t[a].value=null===t[a].value?0:t[a].value,t[a]._startAngle_=r,t[a]._endAngle_=i*t[a].value+e,t[a]._endAngle_>=2&&(t[a]._endAngle_=t[a]._endAngle_%2),r=t[a]._endAngle_;return t}function J(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var a=t[r];if(a.data=null===a.data?0:a.data,"auto"==n.pointer.color){for(var o=0;o<e.length;o++)if(a.data<=e[o].value){a.color=e[o].color;break}}else a.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;a._endAngle_=s*a.data+n.startAngle,a._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(a._oldAngle_+=2),a.data>=n.oldData?a._proportion_=(a._endAngle_-a._oldAngle_)*i+n.oldAngle:a._proportion_=a._oldAngle_-(a._oldAngle_-a._endAngle_)*i,a._proportion_>=2&&(a._proportion_=a._proportion_%2)}return t}function K(t){t=U(t);for(var e=0,n=0;n<t.length;n++){var i=t[n],r=i.format?i.format(+i._proportion_.toFixed(2)):a.toFixed(100*i._proportion_)+"%";e=Math.max(e,y(r))}return e}function Y(t,e,n,i,r,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/n),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(i+.5-n/2)*t.width,t)})}function Q(t,e,n,i,r,a,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),i>0&&(t.width-=2*o),t)})}function Z(t,e,n,i,r,a,o){return t.map(function(t,n){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t)})}function tt(t,e,n){var i=e.width-e.area[1]-e.area[3],r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&r>1&&"justify"==e.xAxis.boundaryGap&&(r-=1);var a=i/r,o=[],s=e.area[3],l=e.width-e.area[1];return t.forEach(function(t,e){o.push(s+e*a)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?o.push(s+t.length*a):o.push(l)),{xAxisPoints:o,startX:s,endX:l,eachSpacing:a}}function et(t,e,n,i,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)l.push(null);else{var u=[];t.forEach(function(t,l){var h={};h.x=i[o]+Math.round(r/2);var p=t.value||t,f=c*(p-e)/(n-e);f*=s,h.y=a.height-Math.round(f)-a.area[2],u.push(h)}),l.push(u)}}),l}function nt(t,e,n,i,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l="center";"line"!=a.type&&"area"!=a.type||(l=a.xAxis.boundaryGap);var c=[],u=a.height-a.area[0]-a.area[2],h=a.width-a.area[1]-a.area[3];return t.forEach(function(t,o){if(null===t)c.push(null);else{var p={};p.color=t.color,p.x=i[o];var f,d,v,g=t;if("object"===typeof t&&null!==t)if(t.constructor==Array)f=[].concat(a.chartData.xAxisData.ranges),d=f.shift(),v=f.pop(),g=t[1],p.x=a.area[3]+h*(t[0]-d)/(v-d);else g=t.value;"center"==l&&(p.x+=Math.round(r/2));var y=u*(g-e)/(n-e);y*=s,p.y=a.height-Math.round(y)-a.area[2],c.push(p)}}),c}function it(t,e,n,i,r,a,o,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)u.push(null);else{var p={};if(p.color=t.color,p.x=i[o]+Math.round(r/2),s>0){for(var f=0,d=0;d<=s;d++)f+=l[d].data[o];var v=f-t,g=h*(f-e)/(n-e),y=h*(v-e)/(n-e)}else f=t,g=h*(f-e)/(n-e),y=0;var x=y;g*=c,x*=c,p.y=a.height-Math.round(g)-a.area[2],p.y0=a.height-Math.round(x)-a.area[2],u.push(p)}}),u}function rt(t,e,n,i){var r,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;r="stack"==i?_(t,e.categories.length):x(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){o.push(t)}):o.push(t[1]):o.push(t.value):o.push(t)});var s=0,l=0;if(o.length>0&&(s=Math.min.apply(this,o),l=Math.max.apply(this,o)),a>-1?("number"===typeof e.yAxis.data[a].min&&(s=Math.min(e.yAxis.data[a].min,s)),"number"===typeof e.yAxis.data[a].max&&(l=Math.max(e.yAxis.data[a].max,l))):("number"===typeof e.yAxis.min&&(s=Math.min(e.yAxis.min,s)),"number"===typeof e.yAxis.max&&(l=Math.max(e.yAxis.max,l))),s===l){var c=l||10;l+=c}for(var u=g(s,l),h=u.minRange,p=u.maxRange,f=[],d=(p-h)/e.yAxis.splitNumber,v=0;v<=e.yAxis.splitNumber;v++)f.push(h+d*v);return f.reverse()}function at(t,e,n){var i=r({},{type:""},e.extra.column),o=e.yAxis.data.length,s=new Array(o);if(o>0){for(var l=0;l<o;l++){s[l]=[];for(var c=0;c<t.length;c++)t[c].index==l&&s[l].push(t[c])}for(var u=new Array(o),h=new Array(o),p=new Array(o),f=function(t){var r=e.yAxis.data[t];1==e.yAxis.disabled&&(r.disabled=!0),u[t]=rt(s[t],e,n,i.type,t);var o=r.fontSize||n.fontSize;p[t]={position:r.position?r.position:"left",width:0},h[t]=u[t].map(function(e){return e=a.toFixed(e,6),e=r.format?r.format(Number(e)):e,p[t].width=Math.max(p[t].width,y(e,o)+5),e});var l=r.calibration?4*e.pixelRatio:0;p[t].width+=l+3*e.pixelRatio,!0===r.disabled&&(p[t].width=0)},d=0;d<o;d++)f(d)}else{u=new Array(1),h=new Array(1),p=new Array(1);u[0]=rt(t,e,n,i.type),p[0]={position:"left",width:0};var v=e.yAxis.fontSize||n.fontSize;h[0]=u[0].map(function(t){return t=a.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,p[0].width=Math.max(p[0].width,y(t,v)+5),t}),p[0].width+=3*e.pixelRatio,!0===e.yAxis.disabled?(p[0]={position:"left",width:0},e.yAxis.data[0]={disabled:!0}):e.yAxis.data[0]={disabled:!1,position:"left",max:e.yAxis.max,min:e.yAxis.min,format:e.yAxis.format}}return{rangesFormat:h,ranges:u,yAxisWidth:p}}function ot(t,e,n,i,r){for(var a=[].concat(n.chartData.yAxisData.ranges),o=n.height-n.area[0]-n.area[2],s=n.area[0],l=[],c=0;c<a.length;c++){var u=a[c].shift(),h=a[c].pop(),p=u-(u-h)*(t-s)/o;p=n.yAxis.data[c].format?n.yAxis.data[c].format(Number(p)):p.toFixed(0),l.push(String(p))}return l}function st(t,e){for(var n,i,r=e.height-e.area[0]-e.area[2],a=0;a<t.length;a++){t[a].yAxisIndex=t[a].yAxisIndex?t[a].yAxisIndex:0;var o=[].concat(e.chartData.yAxisData.ranges[t[a].yAxisIndex]);n=o.pop(),i=o.shift();var s=r*(t[a].value-n)/(i-n);t[a].y=e.height-Math.round(s)-e.area[2]}return t}function lt(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function ct(t,e,n,i,r){i.beginPath(),"hollow"==r.dataPointShapeType?(i.setStrokeStyle(e),i.setFillStyle(r.background),i.setLineWidth(2*r.pixelRatio)):(i.setStrokeStyle("#ffffff"),i.setFillStyle(e),i.setLineWidth(1*r.pixelRatio)),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+2.5*r.pixelRatio,t.y),i.arc(t.x,t.y,3*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function ut(t,e,n,i){var r=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,u=o?r:0,h=s?a:0,p=5;if(s){var f=y(s,a),d=i.x-f/2+(t.subtitle.offsetX||0),v=i.y+a/2+(t.subtitle.offsetY||0);o&&(v+=(u+p)/2),n.beginPath(),n.setFontSize(a),n.setFillStyle(c),n.fillText(s,d,v),n.closePath(),n.stroke()}if(o){var g=y(o,r),x=i.x-g/2+(t.title.offsetX||0),_=i.y+r/2+(t.title.offsetY||0);s&&(_-=(h+p)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(l),n.fillText(o,x,_),n.closePath(),n.stroke()}}function ht(t,e,n,i){var r=e.data;t.forEach(function(t,a){if(null!==t){i.beginPath(),i.setFontSize(e.textSize||n.fontSize),i.setFillStyle(e.textColor||"#666666");var o=r[a];"object"===typeof r[a]&&null!==r[a]&&(o=r[a].constructor==Array?r[a][1]:r[a].value);var s=e.format?e.format(o):o;i.fillText(String(s),t.x-y(s,e.textSize||n.fontSize)/2,t.y-4),i.closePath(),i.stroke()}})}function pt(t,e,n,i,r,a){e-=t.width/2+r.gaugeLabelTextMargin;for(var o=t.startAngle-t.endAngle+1,s=o/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,p=0;p<t.splitLine.splitNumber+1;p++){var f={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},d=t.labelFormat?t.labelFormat(h):h;f.x+=n.x-y(d)/2,f.y+=n.y;var v=f.x,g=f.y;a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(t.labelColor||"#666666"),a.fillText(d,v,g+r.fontSize/2),a.closePath(),a.stroke(),u+=s,u>=2&&(u%=2),h+=c}}function ft(t,e,n,i,r,o){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=f(c.x,c.y,n),h=u.x,p=u.y;a.approximatelyEqual(c.x,0)?h-=y(i.categories[l]||"")/2:c.x<0&&(h-=y(i.categories[l]||"")),o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(s.labelColor||"#666666"),o.fillText(i.categories[l]||"",h,p+r.fontSize/2),o.closePath(),o.stroke()})}function dt(t,e,n,i,r,o){for(var s=n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):a.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var n=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),i=t.color,r=t._radius_;return{arc:n,text:e,color:i,radius:r,textColor:t.textColor,textSize:t.textSize}}),h=0;h<u.length;h++){var p=u[h],v=Math.cos(p.arc)*(p.radius+s),g=Math.sin(p.arc)*(p.radius+s),x=Math.cos(p.arc)*p.radius,_=Math.sin(p.arc)*p.radius,m=v>=0?v+n.pieChartTextPadding:v-n.pieChartTextPadding,b=g,S=y(p.text,p.textSize||n.fontSize),A=b;c&&a.isSameXCoordinateArea(c.start,{x:m})&&(A=m>0?Math.min(b,c.start.y):v<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),m<0&&(m-=S);var w={lineStart:{x:x,y:_},lineEnd:{x:v,y:g},start:{x:m,y:A},width:S,height:n.fontSize,text:p.text,color:p.color,textColor:p.textColor,textSize:p.textSize};c=d(w,c),l.push(c)}for(var T=0;T<l.length;T++){var P=l[T],k=f(P.lineStart.x,P.lineStart.y,o),D=f(P.lineEnd.x,P.lineEnd.y,o),O=f(P.start.x,P.start.y,o);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(P.color),i.setFillStyle(P.color),i.moveTo(k.x,k.y);var M=P.start.x<0?O.x+P.width:O.x,$=P.start.x<0?O.x-5:O.x+5;i.quadraticCurveTo(D.x,D.y,M,O.y),i.moveTo(k.x,k.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(O.x+P.width,O.y),i.arc(M,O.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(P.textSize||n.fontSize),i.setFillStyle(P.textColor||"#666666"),i.fillText(P.text,$,O.y+3),i.closePath(),i.stroke(),i.closePath()}}function vt(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var a=e.area[0],s=e.height-e.area[2];if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.beginPath(),i.moveTo(t,a),i.lineTo(t,s),i.stroke(),i.setLineDash([]),r.xAxisLabel){var l=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var c=y(l,n.fontSize),u=t-.5*c,h=s;i.beginPath(),i.setFillStyle(o(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u-n.toolTipPadding,h,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(String(l),u,h+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function gt(t,e,n){for(var i=r({},{type:"solid",dashLength:4,data:[]},t.extra.markLine),a=t.area[3],s=t.width-t.area[1],l=st(i.data,t),c=0;c<l.length;c++){var u=r({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},l[c]);if("dash"==i.type&&n.setLineDash([i.dashLength,i.dashLength]),n.setStrokeStyle(u.lineColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(a,u.y),n.lineTo(s,u.y),n.stroke(),n.setLineDash([]),u.showLabel){var h=t.yAxis.format?t.yAxis.format(Number(u.value)):u.value;n.setFontSize(e.fontSize);var p=y(h,e.fontSize),f=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,d=Math.max(t.area[3],p+2*e.toolTipPadding),v=d-f,g=f+(v-p)/2,x=u.y;n.setFillStyle(o(u.labelBgColor,u.labelBgOpacity)),n.setStrokeStyle(u.labelBgColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.rect(f,x-.5*e.fontSize-e.toolTipPadding,v,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(u.labelFontColor),n.fillText(String(h),g,x+.5*e.fontSize),n.stroke()}}}function yt(t,e,n,i,a){var s=r({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.area[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(l,t.tooltip.offset.y),n.lineTo(c,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel)for(var u=ot(t.tooltip.offset.y,t.series,t,e,i),h=t.chartData.yAxisData.yAxisWidth,p=t.area[3],f=t.width-t.area[1],d=0;d<u.length;d++){n.setFontSize(e.fontSize);var v=y(u[d],e.fontSize),g=void 0,x=void 0,_=void 0;"left"==h[d].position?(g=p-h[d].width,x=Math.max(g,g+v+2*e.toolTipPadding)):(g=f,x=Math.max(g+h[d].width,g+v+2*e.toolTipPadding)),_=x-g;var m=g+(_-v)/2,b=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(o(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(g,b-.5*e.fontSize-e.toolTipPadding,_,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u[d],m,b+.5*e.fontSize),n.closePath(),n.stroke(),"left"==h[d].position?p-=h[d].width+t.yAxis.padding:f+=h[d].width+t.yAxis.padding}}function xt(t,e,n,i,a){var s=r({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];i.beginPath(),i.setFillStyle(o(s.activeBgColor,s.activeBgOpacity)),i.rect(t-a/2,l,a,c-l),i.closePath(),i.fill()}function _t(t,e,n,i,a,s,l){var c=r({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),u=4*n.pixelRatio,h=5*n.pixelRatio,p=8*n.pixelRatio,f=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||vt(n.tooltip.offset.x,n,i,a),e=r({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return y(t.text,i.fontSize)}),v=u+h+4*i.toolTipPadding+Math.max.apply(null,d),g=2*i.toolTipPadding+t.length*i.toolTipLineHeight;0!=c.showBox&&(e.x-Math.abs(n._scrollDistance_)+p+v>n.width&&(f=!0),g+e.y>n.height&&(e.y=n.height-g),a.beginPath(),a.setFillStyle(o(c.bgColor||i.toolTipBackground,c.bgOpacity||i.toolTipOpacity)),f?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-p,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-p,e.y),a.lineTo(e.x-p-Math.round(v),e.y),a.lineTo(e.x-p-Math.round(v),e.y+g),a.lineTo(e.x-p,e.y+g),a.lineTo(e.x-p,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+p,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+p,e.y),a.lineTo(e.x+p+Math.round(v),e.y),a.lineTo(e.x+p+Math.round(v),e.y+g),a.lineTo(e.x+p,e.y+g),a.lineTo(e.x+p,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var r=e.x+p+2*i.toolTipPadding,o=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding+1;f&&(r=e.x-v-p+2*i.toolTipPadding),a.fillRect(r,o,u,i.fontSize),a.closePath()}}),t.forEach(function(t,n){var r=e.x+p+2*i.toolTipPadding+u+h;f&&(r=e.x-v-p+2*i.toolTipPadding+ +u+h);var o=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding;a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(c.fontColor),a.fillText(t.text,r,o+i.fontSize),a.closePath(),a.stroke()}))}function mt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.chartData.xAxisData,s=o.xAxisPoints,l=o.eachSpacing,c=r({},{type:"group",width:l/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),u=[];i.save();var h=-2,p=s.length+2;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),h=Math.floor(-e._scrollDistance_/l)-2,p=h+e.xAxis.itemCount+4),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&xt(e.tooltip.offset.x,e,n,i,l),t.forEach(function(r,o){var f,d,v;f=[].concat(e.chartData.yAxisData.ranges[r.index]),d=f.pop(),v=f.shift();var g=r.data;switch(c.type){case"group":var y=nt(g,d,v,s,l,e,n,a),x=it(g,d,v,s,l,e,n,o,t,a);u.push(x),y=Y(y,l,t.length,o,n,e);for(var _=0;_<y.length;_++){var m=y[_];if(null!==m&&_>h&&_<p){i.beginPath(),i.setStrokeStyle(m.color||r.color),i.setLineWidth(1),i.setFillStyle(m.color||r.color);var b=m.x-m.width/2,S=e.height-m.y-e.area[2];i.moveTo(b-1,m.y),i.lineTo(b+m.width-2,m.y),i.lineTo(b+m.width-2,e.height-e.area[2]),i.lineTo(b,e.height-e.area[2]),i.lineTo(b,m.y),i.closePath(),i.stroke(),i.fill()}}break;case"stack":y=it(g,d,v,s,l,e,n,o,t,a);u.push(y),y=Z(y,l,t.length,o,n,e,t);for(var A=0;A<y.length;A++){var w=y[A];if(null!==w&&A>h&&A<p){i.beginPath(),i.setFillStyle(w.color||r.color);b=w.x-w.width/2+1,S=e.height-w.y-e.area[2];var T=e.height-w.y0-e.area[2];o>0&&(S-=T),i.moveTo(b,w.y),i.fillRect(b,w.y,w.width-2,S),i.closePath(),i.fill()}}break;case"meter":y=nt(g,d,v,s,l,e,n,a);if(u.push(y),y=Q(y,l,t.length,o,n,e,c.meter.border),0==o)for(var P=0;P<y.length;P++){var k=y[P];if(null!==k&&P>h&&P<p){i.beginPath(),i.setFillStyle(c.meter.fillColor);b=k.x-k.width/2,S=e.height-k.y-e.area[2];i.moveTo(b,k.y),i.fillRect(b,k.y,k.width,S),i.closePath(),i.fill(),c.meter.border>0&&(i.beginPath(),i.setStrokeStyle(r.color),i.setLineWidth(c.meter.border*e.pixelRatio),i.moveTo(b+.5*c.meter.border,k.y+S),i.lineTo(b+.5*c.meter.border,k.y+.5*c.meter.border),i.lineTo(b+k.width-.5*c.meter.border,k.y+.5*c.meter.border),i.lineTo(b+k.width-.5*c.meter.border,k.y+S),i.stroke())}}else for(var D=0;D<y.length;D++){var O=y[D];if(null!==O&&D>h&&D<p){i.beginPath(),i.setFillStyle(O.color||r.color);b=O.x-O.width/2,S=e.height-O.y-e.area[2];i.moveTo(b,O.y),i.fillRect(b,O.y,O.width,S),i.closePath(),i.fill()}}break}}),!1!==e.dataLabel&&1===a&&t.forEach(function(r,o){var u,h,p;u=[].concat(e.chartData.yAxisData.ranges[r.index]),h=u.pop(),p=u.shift();var f=r.data;switch(c.type){case"group":var d=nt(f,h,p,s,l,e,n,a);d=Y(d,l,t.length,o,n,e),ht(d,r,n,i);break;case"stack":d=it(f,h,p,s,l,e,n,o,t,a);ht(d,r,n,i);break;case"meter":d=nt(f,h,p,s,l,e,n,a);ht(d,r,n,i);break}}),i.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function bt(t,e,n,i,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=r({},{color:{},average:{}},n.extra.candle);s.color=r({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=r({},{show:!1,name:[],day:[],color:i.colors},s.average),n.extra.candle=s;var l=n.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=[];a.save();var f=-2,d=c.length+2,v=0,g=n.width+u;return n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&(a.translate(n._scrollDistance_,0),f=Math.floor(-n._scrollDistance_/u)-2,d=f+n.xAxis.itemCount+4,v=-n._scrollDistance_-u+n.area[3],g=v+(n.xAxis.itemCount+4)*u),s.average.show&&e.forEach(function(t,e){var r,s,l;r=[].concat(n.chartData.yAxisData.ranges[t.index]),s=r.pop(),l=r.shift();for(var h=t.data,f=nt(h,s,l,c,u,n,i,o),d=j(f),y=0;y<d.length;y++){var x=d[y];if(a.beginPath(),a.setStrokeStyle(t.color),a.setLineWidth(1),1===x.length)a.moveTo(x[0].x,x[0].y),a.arc(x[0].x,x[0].y,1,0,2*Math.PI);else{a.moveTo(x[0].x,x[0].y);for(var _=0,m=0;m<x.length;m++){var b=x[m];if(0==_&&b.x>v&&(a.moveTo(b.x,b.y),_=1),m>0&&b.x>v&&b.x<g){var S=p(x,m-1);a.bezierCurveTo(S.ctrA.x,S.ctrA.y,S.ctrB.x,S.ctrB.y,b.x,b.y)}}a.moveTo(x[0].x,x[0].y)}a.closePath(),a.stroke()}}),t.forEach(function(t,e){var r,l,p;r=[].concat(n.chartData.yAxisData.ranges[t.index]),l=r.pop(),p=r.shift();var v=t.data,g=et(v,l,p,c,u,n,i,o);h.push(g);for(var y=j(g),x=0;x<y[0].length;x++)if(x>f&&x<d){var _=y[0][x];a.beginPath(),v[x][1]-v[x][0]>0?(a.setStrokeStyle(s.color.upLine),a.setFillStyle(s.color.upFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(_[3].x,_[3].y),a.lineTo(_[1].x,_[1].y),a.lineTo(_[1].x-u/4,_[1].y),a.lineTo(_[0].x-u/4,_[0].y),a.lineTo(_[0].x,_[0].y),a.lineTo(_[2].x,_[2].y),a.lineTo(_[0].x,_[0].y),a.lineTo(_[0].x+u/4,_[0].y),a.lineTo(_[1].x+u/4,_[1].y),a.lineTo(_[1].x,_[1].y),a.moveTo(_[3].x,_[3].y)):(a.setStrokeStyle(s.color.downLine),a.setFillStyle(s.color.downFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(_[3].x,_[3].y),a.lineTo(_[0].x,_[0].y),a.lineTo(_[0].x-u/4,_[0].y),a.lineTo(_[1].x-u/4,_[1].y),a.lineTo(_[1].x,_[1].y),a.lineTo(_[2].x,_[2].y),a.lineTo(_[1].x,_[1].y),a.lineTo(_[1].x+u/4,_[1].y),a.lineTo(_[0].x+u/4,_[0].y),a.lineTo(_[0].x,_[0].y),a.moveTo(_[3].x,_[3].y)),a.closePath(),a.fill(),a.stroke()}}),a.restore(),{xAxisPoints:c,calPoints:h,eachSpacing:u}}function St(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},e.extra.area),l=e.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=e.height-e.area[2],f=[];i.save();var d=0,v=e.width+u;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),d=-e._scrollDistance_-u+e.area[3],v=d+(e.xAxis.itemCount+4)*u),t.forEach(function(t,r){var l,g,y;l=[].concat(e.chartData.yAxisData.ranges[t.index]),g=l.pop(),y=l.shift();var x=t.data,_=nt(x,g,y,c,u,e,n,a);f.push(_);for(var m=j(_),b=0;b<m.length;b++){var S=m[b];if(i.beginPath(),i.setStrokeStyle(o(t.color,s.opacity)),s.gradient){var A=i.createLinearGradient(0,e.area[0],0,e.height-e.area[2]);A.addColorStop("0",o(t.color,s.opacity)),A.addColorStop("1.0",o("#FFFFFF",.1)),i.setFillStyle(A)}else i.setFillStyle(o(t.color,s.opacity));if(i.setLineWidth(s.width*e.pixelRatio),S.length>1){var w=S[0],T=S[S.length-1];i.moveTo(w.x,w.y);var P=0;if("curve"===s.type)for(var k=0;k<S.length;k++){var D=S[k];if(0==P&&D.x>d&&(i.moveTo(D.x,D.y),P=1),k>0&&D.x>d&&D.x<v){var O=p(S,k-1);i.bezierCurveTo(O.ctrA.x,O.ctrA.y,O.ctrB.x,O.ctrB.y,D.x,D.y)}}else for(var M=0;M<S.length;M++){var $=S[M];0==P&&$.x>d&&(i.moveTo($.x,$.y),P=1),M>0&&$.x>d&&$.x<v&&i.lineTo($.x,$.y)}i.lineTo(T.x,h),i.lineTo(w.x,h),i.lineTo(w.x,w.y)}else{var C=S[0];i.moveTo(C.x-u/2,C.y),i.lineTo(C.x+u/2,C.y),i.lineTo(C.x+u/2,h),i.lineTo(C.x-u/2,h),i.moveTo(C.x-u/2,C.y)}if(i.closePath(),i.fill(),s.addLine){if("dash"==t.lineType){var R=t.dashLength?t.dashLength:8;R*=e.pixelRatio,i.setLineDash([R,R])}if(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(s.width*e.pixelRatio),1===S.length)i.moveTo(S[0].x,S[0].y),i.arc(S[0].x,S[0].y,1,0,2*Math.PI);else{i.moveTo(S[0].x,S[0].y);var L=0;if("curve"===s.type)for(var F=0;F<S.length;F++){var I=S[F];if(0==L&&I.x>d&&(i.moveTo(I.x,I.y),L=1),F>0&&I.x>d&&I.x<v){var E=p(S,F-1);i.bezierCurveTo(E.ctrA.x,E.ctrA.y,E.ctrB.x,E.ctrB.y,I.x,I.y)}}else for(var z=0;z<S.length;z++){var N=S[z];0==L&&N.x>d&&(i.moveTo(N.x,N.y),L=1),z>0&&N.x>d&&N.x<v&&i.lineTo(N.x,N.y)}i.moveTo(S[0].x,S[0].y)}i.stroke(),i.setLineDash([])}}!1!==e.dataPointShape&&ct(_,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o,s,l;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),l=o.shift();var h=t.data,p=nt(h,s,l,c,u,e,n,a);ht(p,t,n,i)}),i.restore(),{xAxisPoints:c,calPoints:f,eachSpacing:u}}function At(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=r({},{type:"straight",width:2},e.extra.line);o.width*=e.pixelRatio;var s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=[];i.save();var h=0,f=e.width+c;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),h=-e._scrollDistance_-c+e.area[3],f=h+(e.xAxis.itemCount+4)*c),t.forEach(function(t,r){var s,d,v;s=[].concat(e.chartData.yAxisData.ranges[t.index]),d=s.pop(),v=s.shift();var g=t.data,y=nt(g,d,v,l,c,e,n,a);u.push(y);var x=j(y);if("dash"==t.lineType){var _=t.dashLength?t.dashLength:8;_*=e.pixelRatio,i.setLineDash([_,_])}i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width),x.forEach(function(t,e){if(1===t.length)i.moveTo(t[0].x,t[0].y),i.arc(t[0].x,t[0].y,1,0,2*Math.PI);else{i.moveTo(t[0].x,t[0].y);var n=0;if("curve"===o.type)for(var r=0;r<t.length;r++){var a=t[r];if(0==n&&a.x>h&&(i.moveTo(a.x,a.y),n=1),r>0&&a.x>h&&a.x<f){var s=p(t,r-1);i.bezierCurveTo(s.ctrA.x,s.ctrA.y,s.ctrB.x,s.ctrB.y,a.x,a.y)}}else for(var l=0;l<t.length;l++){var c=t[l];0==n&&c.x>h&&(i.moveTo(c.x,c.y),n=1),l>0&&c.x>h&&c.x<f&&i.lineTo(c.x,c.y)}i.moveTo(t[0].x,t[0].y)}}),i.stroke(),i.setLineDash([]),!1!==e.dataPointShape&&ct(y,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o,s,u;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),u=o.shift();var h=t.data,p=nt(h,s,u,l,c,e,n,a);ht(p,t,n,i)}),i.restore(),{xAxisPoints:l,calPoints:u,eachSpacing:c}}function wt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.chartData.xAxisData,s=a.xAxisPoints,l=a.eachSpacing,c=e.height-e.area[2],u=[],h=0,f=0;t.forEach(function(t,e){"column"==t.type&&(f+=1)}),i.save();var d=-2,v=s.length+2,g=0,y=e.width+l;if(e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),d=Math.floor(-e._scrollDistance_/l)-2,v=d+e.xAxis.itemCount+4,g=-e._scrollDistance_-l+e.area[3],y=g+(e.xAxis.itemCount+4)*l),t.forEach(function(t,a){var x,_,m;x=[].concat(e.chartData.yAxisData.ranges[t.index]),_=x.pop(),m=x.shift();var b=t.data,S=nt(b,_,m,s,l,e,n,r);if(u.push(S),"column"==t.type){S=Y(S,l,f,h,n,e);for(var A=0;A<S.length;A++){var w=S[A];if(null!==w&&A>d&&A<v){i.beginPath(),i.setStrokeStyle(w.color||t.color),i.setLineWidth(1),i.setFillStyle(w.color||t.color);var T=w.x-w.width/2;e.height,w.y,e.area[2];i.moveTo(T,w.y),i.moveTo(T-1,w.y),i.lineTo(T+w.width-2,w.y),i.lineTo(T+w.width-2,e.height-e.area[2]),i.lineTo(T,e.height-e.area[2]),i.lineTo(T,w.y),i.closePath(),i.stroke(),i.fill(),i.closePath(),i.fill()}}h+=1}if("area"==t.type)for(var P=j(S),k=0;k<P.length;k++){var D=P[k];if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(o(t.color,.2)),i.setLineWidth(2*e.pixelRatio),D.length>1){var O=D[0],M=D[D.length-1];i.moveTo(O.x,O.y);var $=0;if("curve"===t.style)for(var C=0;C<D.length;C++){var R=D[C];if(0==$&&R.x>g&&(i.moveTo(R.x,R.y),$=1),C>0&&R.x>g&&R.x<y){var L=p(D,C-1);i.bezierCurveTo(L.ctrA.x,L.ctrA.y,L.ctrB.x,L.ctrB.y,R.x,R.y)}}else for(var F=0;F<D.length;F++){var I=D[F];0==$&&I.x>g&&(i.moveTo(I.x,I.y),$=1),F>0&&I.x>g&&I.x<y&&i.lineTo(I.x,I.y)}i.lineTo(M.x,c),i.lineTo(O.x,c),i.lineTo(O.x,O.y)}else{var E=D[0];i.moveTo(E.x-l/2,E.y),i.lineTo(E.x+l/2,E.y),i.lineTo(E.x+l/2,c),i.lineTo(E.x-l/2,c),i.moveTo(E.x-l/2,E.y)}i.closePath(),i.fill()}if("line"==t.type){var z=j(S);z.forEach(function(n,r){if("dash"==t.lineType){var a=t.dashLength?t.dashLength:8;a*=e.pixelRatio,i.setLineDash([a,a])}if(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length)i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI);else{i.moveTo(n[0].x,n[0].y);var o=0;if("curve"==t.style)for(var s=0;s<n.length;s++){var l=n[s];if(0==o&&l.x>g&&(i.moveTo(l.x,l.y),o=1),s>0&&l.x>g&&l.x<y){var c=p(n,s-1);i.bezierCurveTo(c.ctrA.x,c.ctrA.y,c.ctrB.x,c.ctrB.y,l.x,l.y)}}else for(var u=0;u<n.length;u++){var h=n[u];0==o&&h.x>g&&(i.moveTo(h.x,h.y),o=1),u>0&&h.x>g&&h.x<y&&i.lineTo(h.x,h.y)}i.moveTo(n[0].x,n[0].y)}i.stroke(),i.setLineDash([])})}"point"==t.type&&(t.addPoint=!0),1==t.addPoint&&"column"!==t.type&&ct(S,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===r){h=0;t.forEach(function(t,a){var o,c,u;o=[].concat(e.chartData.yAxisData.ranges[t.index]),c=o.pop(),u=o.shift();var p=t.data,d=nt(p,c,u,s,l,e,n,r);"column"!==t.type?ht(d,t,n,i):(d=Y(d,l,f,h,n,e),ht(d,t,n,i),h+=1)})}return i.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function Tt(t,e,n,i,r,a){var o=t.extra.tooltip||{};o.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&yt(t,e,n,r,a),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&_t(t.tooltip.textList,t.tooltip.offset,t,e,n,r,a),n.restore()}function Pt(t,e,n,i){var r=e.chartData.xAxisData,a=r.xAxisPoints,o=r.startX,s=r.endX,l=r.eachSpacing,c="center";"line"!=e.type&&"area"!=e.type||(c=e.xAxis.boundaryGap);var u=e.height-e.area[2],p=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var f=e.height-e.area[2]+n.xAxisHeight,d=s-o,v=l*(a.length-1),g=d*d/v,x=0;e._scrollDistance_&&(x=-e._scrollDistance_*d/v),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(o,f),i.lineTo(s,f),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(o+x,f),i.lineTo(o+x+g,f),i.stroke(),i.closePath(),i.setLineCap("butt")}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),!0===e.xAxis.calibration&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),a.forEach(function(t,n){n>0&&(i.beginPath(),i.moveTo(t-l/2,u),i.lineTo(t-l/2,u+3*e.pixelRatio),i.closePath(),i.stroke())})),!0!==e.xAxis.disableGrid&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),e.xAxis.gridEval=e.xAxis.gridEval||1,a.forEach(function(t,n){n%e.xAxis.gridEval==0&&(i.beginPath(),i.moveTo(t,u),i.lineTo(t,p),i.stroke())}),i.setLineDash([])),!0!==e.xAxis.disabled){var _=t.length;e.xAxis.labelCount&&(_=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,_-=1);for(var m=Math.ceil(t.length/_),b=[],S=t.length,A=0;A<S;A++)A%m!==0?b.push(""):b.push(t[A]);b[S-1]=t[S-1];var w=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,r){var o=-y(String(t),w)/2;"center"==c&&(o+=l/2);var s=0;e.xAxis.scrollShow&&(s=6*e.pixelRatio),i.beginPath(),i.setFontSize(w),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(String(t),a[r]+o,u+w+(n.xAxisHeight-s-w)/2),i.closePath(),i.stroke()}):b.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(w),i.setFillStyle(e.xAxis.fontColor||"#666666");var o=y(String(t),w),s=-o;"center"==c&&(s+=l/2);var p=h(a[r]+l/2,u+w/2+5,e.height),f=p.transX,d=p.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(f,d),i.fillText(String(t),a[r]+s,u+w+5),i.closePath(),i.stroke(),i.restore()})}i.restore(),e.xAxis.axisLine&&(i.beginPath(),i.setStrokeStyle(e.xAxis.axisLineColor),i.setLineWidth(1*e.pixelRatio),i.moveTo(o,e.height-e.area[2]),i.lineTo(s,e.height-e.area[2]),i.stroke())}function kt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-e.area[0]-e.area[2],a=r/e.yAxis.splitNumber,o=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),u=o+c,h=[],p=0;p<e.yAxis.splitNumber+1;p++)h.push(e.height-e.area[2]-a*p);i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.setStrokeStyle(e.yAxis.gridColor),i.setLineWidth(1*e.pixelRatio),h.forEach(function(t,e){i.beginPath(),i.moveTo(o,t),i.lineTo(u,t),i.stroke()}),i.setLineDash([]),i.restore()}}function Dt(t,e,n,i){if(!0!==e.yAxis.disabled){var r=e.height-e.area[0]-e.area[2],a=r/e.yAxis.splitNumber,o=e.area[3],s=e.width-e.area[1],l=e.height-e.area[2],c=l+n.xAxisHeight;e.xAxis.scrollShow&&(c-=3*e.pixelRatio),e.xAxis.rotateLabel&&(c=e.height-e.area[2]+3),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,o,c),1==e.enableScroll&&i.fillRect(s,0,e.width,c),i.closePath(),i.stroke();for(var u=[],h=0;h<=e.yAxis.splitNumber;h++)u.push(e.area[0]+a*h);for(var p=e.area[3],f=e.width-e.area[1],d=function(t){var r=e.yAxis.data[t];if(!0!==r.disabled){var a=e.chartData.yAxisData.rangesFormat[t],o=r.fontSize||n.fontSize,s=e.chartData.yAxisData.yAxisWidth[t];if(a.forEach(function(t,n){var a=u[n]?u[n]:l;i.beginPath(),i.setFontSize(o),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(r.axisLineColor||"#cccccc"),i.setFillStyle(r.fontColor||"#666666"),"left"==s.position?(i.fillText(String(t),p-s.width,a+o/2),1==r.calibration&&(i.moveTo(p,a),i.lineTo(p-3*e.pixelRatio,a))):(i.fillText(String(t),f+4*e.pixelRatio,a+o/2),1==r.calibration&&(i.moveTo(f,a),i.lineTo(f+3*e.pixelRatio,a))),i.closePath(),i.stroke()}),!1!==r.axisLine&&(i.beginPath(),i.setStrokeStyle(r.axisLineColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),"left"==s.position?(i.moveTo(p,e.height-e.area[2]),i.lineTo(p,e.area[0])):(i.moveTo(f,e.height-e.area[2]),i.lineTo(f,e.area[0])),i.stroke()),e.yAxis.showTitle){var c=r.titleFontSize||n.fontSize,h=r.title;i.beginPath(),i.setFontSize(c),i.setFillStyle(r.titleFontColor||"#666666"),"left"==s.position?i.fillText(h,p-y(h,c)/2,e.area[0]-10*e.pixelRatio):i.fillText(h,f-y(h,c)/2,e.area[0]-10*e.pixelRatio),i.closePath(),i.stroke()}"left"==s.position?p-=s.width+e.yAxis.padding:f+=s.width+e.yAxis.padding}},v=0;v<e.yAxis.data.length;v++)d(v)}}function Ot(t,e,n,i,r){if(!1!==e.legend.show){var a=r.legendData,o=a.points,s=a.area,l=e.legend.padding,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,p=e.legend.itemGap,f=Math.max(e.legend.lineHeight*e.pixelRatio,c);i.beginPath(),i.setLineWidth(e.legend.borderWidth),i.setStrokeStyle(e.legend.borderColor),i.setFillStyle(e.legend.backgroundColor),i.moveTo(s.start.x,s.start.y),i.rect(s.start.x,s.start.y,s.width,s.height),i.closePath(),i.fill(),i.stroke(),o.forEach(function(t,r){var o=0,d=0;o=a.widthArr[r],d=a.heightArr[r];var v=0,g=0;"top"==e.legend.position||"bottom"==e.legend.position?(v=s.start.x+(s.width-o)/2,g=s.start.y+l+r*f):(o=0==r?0:a.widthArr[r-1],v=s.start.x+l+o,g=s.start.y+l+(s.height-d)/2),i.setFontSize(n.fontSize);for(var x=0;x<t.length;x++){var _=t[x];switch(_.area=[0,0,0,0],_.area[0]=v,_.area[1]=g,_.area[3]=g+f,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(_.show?_.color:e.legend.hiddenColor),i.setFillStyle(_.show?_.color:e.legend.hiddenColor),_.legendShape){case"line":i.moveTo(v,g+.5*f-2*e.pixelRatio),i.fillRect(v,g+.5*f-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":i.moveTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio);break;case"diamond":i.moveTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*f),i.lineTo(v+7.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*f),i.lineTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio);break;case"circle":i.moveTo(v+7.5*e.pixelRatio,g+.5*f),i.arc(v+7.5*e.pixelRatio,g+.5*f,5*e.pixelRatio,0,2*Math.PI);break;case"rect":i.moveTo(v,g+.5*f-5*e.pixelRatio),i.fillRect(v,g+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:i.moveTo(v,g+.5*f-5*e.pixelRatio),i.fillRect(v,g+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}i.closePath(),i.fill(),i.stroke(),v+=u+h;var m=.5*f+.5*c-2;i.beginPath(),i.setFontSize(c),i.setFillStyle(_.show?e.legend.fontColor:e.legend.hiddenColor),i.fillText(_.name,v,g+m),i.closePath(),i.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(v+=y(_.name,c)+p,_.area[2]=v):(_.area[2]=v+y(_.name,c)+p,v-=u+h,g+=f)}})}}function Mt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=U(t,c,a);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(s.borderColor),i.setFillStyle(t.color),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),1==s.border&&i.stroke()}),"ring"===e.type){var h=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(h=Math.max(0,c-e.extra.pie.ringWidth)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(l.x,l.y),i.arc(l.x,l.y,h,0,2*Math.PI),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===a){for(var p=!1,f=0,d=t.length;f<d;f++)if(t[f].data>0){p=!0;break}p&&dt(t,e,n,i,c,l)}return 1===a&&"ring"===e.type&&ut(e,n,i,l),{center:l,radius:c,series:t}}function $t(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),u=s.minRadius||.5*c;t=q(t,s.type,u,c,a);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,s.activeOpacity||.5)),i.moveTo(l.x,l.y),i.arc(l.x,l.y,h+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(s.borderColor),i.setFillStyle(t.color),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),i.closePath(),i.fill(),1==s.border&&i.stroke()}),!1!==e.dataLabel&&1===a){for(var p=!1,f=0,d=t.length;f<d;f++)if(t[f].data>0){p=!0;break}p&&dt(t,e,n,i,c,l)}return{center:l,radius:c,series:t}}function Ct(t,e,n,i){var a,o,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=r({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio,gap:2*e.pixelRatio},e.extra.arcbar);t=X(t,l,s),a=l.center?l.center:{x:e.width/2,y:e.height/2},l.radius?o=l.radius:(o=Math.min(a.x,a.y),o-=5*e.pixelRatio,o-=l.width/2);for(var c=0;c<t.length;c++){var u=t[c];i.setLineWidth(l.width),i.setStrokeStyle(l.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==l.type?i.arc(a.x,a.y,o-(l.width+l.gap)*c,l.startAngle*Math.PI,l.endAngle*Math.PI,!1):i.arc(a.x,a.y,o-(l.width+l.gap)*c,0,2*Math.PI,!1),i.stroke(),i.setLineWidth(l.width),i.setStrokeStyle(u.color),i.setLineCap("round"),i.beginPath(),i.arc(a.x,a.y,o-(l.width+l.gap)*c,l.startAngle*Math.PI,u._proportion_*Math.PI,!1),i.stroke()}return ut(e,n,i,a),{center:a,radius:o,series:t}}function Rt(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,l=r({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);void 0==l.oldAngle&&(l.oldAngle=l.startAngle),void 0==l.oldData&&(l.oldData=0),t=G(t,l.startAngle,l.endAngle);var c={x:n.width/2,y:n.height/2},u=Math.min(c.x,c.y);u-=5*n.pixelRatio,u-=l.width/2;var h=u-l.width,p=0;if("progress"==l.type){var f=u-3*l.width;a.beginPath();var d=a.createLinearGradient(c.x,c.y-f,c.x,c.y+f);d.addColorStop("0",o(e[0].color,.3)),d.addColorStop("1.0",o("#FFFFFF",.1)),a.setFillStyle(d),a.arc(c.x,c.y,f,0,2*Math.PI,!1),a.fill(),a.setLineWidth(l.width),a.setStrokeStyle(o(e[0].color,.3)),a.setLineCap("round"),a.beginPath(),a.arc(c.x,c.y,h,l.startAngle*Math.PI,l.endAngle*Math.PI,!1),a.stroke(),p=l.startAngle-l.endAngle+1;l.splitLine.splitNumber;var v=p/l.splitLine.splitNumber/l.splitLine.childNumber,g=-u-.5*l.width-l.splitLine.fixRadius,y=-u-l.width-l.splitLine.fixRadius+l.splitLine.width;a.save(),a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var x=l.splitLine.splitNumber*l.splitLine.childNumber+1,_=e[0].data*s,m=0;m<x;m++)a.beginPath(),_>m/x?a.setStrokeStyle(o(e[0].color,1)):a.setStrokeStyle(o(e[0].color,.3)),a.setLineWidth(3*n.pixelRatio),a.moveTo(g,0),a.lineTo(y,0),a.stroke(),a.rotate(v*Math.PI);a.restore(),e=X(e,l,s),a.setLineWidth(l.width),a.setStrokeStyle(e[0].color),a.setLineCap("round"),a.beginPath(),a.arc(c.x,c.y,h,l.startAngle*Math.PI,e[0]._proportion_*Math.PI,!1),a.stroke();var b=u-2.5*l.width;a.save(),a.translate(c.x,c.y),a.rotate((e[0]._proportion_-1)*Math.PI),a.beginPath(),a.setLineWidth(l.width/3);var S=a.createLinearGradient(0,.6*-b,0,.6*b);S.addColorStop("0",o("#FFFFFF",0)),S.addColorStop("0.5",o(e[0].color,1)),S.addColorStop("1.0",o("#FFFFFF",0)),a.setStrokeStyle(S),a.arc(0,0,b,.85*Math.PI,1.15*Math.PI,!1),a.stroke(),a.beginPath(),a.setLineWidth(1),a.setStrokeStyle(e[0].color),a.setFillStyle(e[0].color),a.moveTo(-b-l.width/3/2,-4),a.lineTo(-b-l.width/3/2-4,0),a.lineTo(-b-l.width/3/2,4),a.lineTo(-b-l.width/3/2,-4),a.stroke(),a.fill(),a.restore()}else{a.setLineWidth(l.width),a.setLineCap("butt");for(var A=0;A<t.length;A++){var w=t[A];a.beginPath(),a.setStrokeStyle(w.color),a.arc(c.x,c.y,u,w._startAngle_*Math.PI,w._endAngle_*Math.PI,!1),a.stroke()}a.save(),p=l.startAngle-l.endAngle+1;var T=p/l.splitLine.splitNumber,P=p/l.splitLine.splitNumber/l.splitLine.childNumber,k=-u-.5*l.width-l.splitLine.fixRadius,D=-u-.5*l.width-l.splitLine.fixRadius+l.splitLine.width,O=-u-.5*l.width-l.splitLine.fixRadius+l.splitLine.childWidth;a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var M=0;M<l.splitLine.splitNumber+1;M++)a.beginPath(),a.setStrokeStyle(l.splitLine.color),a.setLineWidth(2*n.pixelRatio),a.moveTo(k,0),a.lineTo(D,0),a.stroke(),a.rotate(T*Math.PI);a.restore(),a.save(),a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var $=0;$<l.splitLine.splitNumber*l.splitLine.childNumber+1;$++)a.beginPath(),a.setStrokeStyle(l.splitLine.color),a.setLineWidth(1*n.pixelRatio),a.moveTo(k,0),a.lineTo(O,0),a.stroke(),a.rotate(P*Math.PI);a.restore(),e=J(e,t,l,s);for(var C=0;C<e.length;C++){var R=e[C];a.save(),a.translate(c.x,c.y),a.rotate((R._proportion_-1)*Math.PI),a.beginPath(),a.setFillStyle(R.color),a.moveTo(l.pointer.width,0),a.lineTo(0,-l.pointer.width/2),a.lineTo(-h,0),a.lineTo(0,l.pointer.width/2),a.lineTo(l.pointer.width,0),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#FFFFFF"),a.arc(0,0,l.pointer.width/6,0,2*Math.PI,!1),a.fill(),a.restore()}!1!==n.dataLabel&&pt(l,u,c,n,i,a)}return ut(n,i,a,c),1===s&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:c,radius:u,innerRadius:h,categories:t,totalAngle:p}}function Lt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},e.extra.radar),l=A(e.categories.length),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(c.x-(S(e.categories)+n.radarLabelTextMargin),c.y-n.radarLabelTextMargin);u-=e.padding[1],i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(s.gridColor),l.forEach(function(t){var e=f(u*Math.cos(t),u*Math.sin(t),c);i.moveTo(c.x,c.y),i.lineTo(e.x,e.y)}),i.stroke(),i.closePath();for(var h=function(t){var n={};i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(s.gridColor),l.forEach(function(e,r){var a=f(u/s.gridCount*t*Math.cos(e),u/s.gridCount*t*Math.sin(e),c);0===r?(n=a,i.moveTo(a.x,a.y)):i.lineTo(a.x,a.y)}),i.lineTo(n.x,n.y),i.stroke(),i.closePath()},p=1;p<=s.gridCount;p++)h(p);var d=H(l,c,u,t,e,a);return d.forEach(function(t,n){if(i.beginPath(),i.setFillStyle(o(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?i.moveTo(t.position.x,t.position.y):i.lineTo(t.position.x,t.position.y)}),i.closePath(),i.fill(),!1!==e.dataPointShape){var r=t.data.map(function(t){return t.position});ct(r,t.color,t.pointShape,i,e)}}),ft(l,u,c,e,n,i),{center:c,radius:u,angleList:l}}function Ft(t,e,n){n=0==n?1:n;for(var i=[],r=0;r<n;r++)i[r]=Math.random();return Math.floor(i.reduce(function(t,e){return t+e})/n*(e-t))+t}function It(t,e,n,i){for(var r=!1,a=0;a<e.length;a++)if(e[a].area){if(!(t[3]<e[a].area[1]||t[0]>e[a].area[2]||t[1]>e[a].area[3]||t[2]<e[a].area[0])){r=!0;break}if(t[0]<0||t[1]<0||t[2]>n||t[3]>i){r=!0;break}r=!1}return r}function Et(t){var e,n={};n.xMin=180,n.xMax=0,n.yMin=90,n.yMax=0;for(var i=0;i<t.length;i++)for(var r=t[i].geometry.coordinates,a=0;a<r.length;a++){e=r[a],1==e.length&&(e=e[0]);for(var o=0;o<e.length;o++){var s=e[o][0],l=e[o][1],c={x:s,y:l};n.xMin=n.xMin<c.x?n.xMin:c.x,n.xMax=n.xMax>c.x?n.xMax:c.x,n.yMin=n.yMin<c.y?n.yMin:c.y,n.yMax=n.yMax>c.y?n.yMax:c.y}}return n}function jt(t,e,n,i,r,a){return{x:(e-n.xMin)*i+r,y:(n.yMax-t)*i+a}}function zt(t,e,n,i,r,a){return{x:(e-r)/i+n.xMin,y:n.yMax-(t-a)/i}}function Nt(t,e,n){if(e[1]==n[1])return!1;if(e[1]>t[1]&&n[1]>t[1])return!1;if(e[1]<t[1]&&n[1]<t[1])return!1;if(e[1]==t[1]&&n[1]>t[1])return!1;if(n[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&n[1]<t[1])return!1;var i=n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1]);return!(i<t[0])}function Bt(t,e){for(var n=0,i=0;i<e.length;i++){var r=e[i][0];1==e.length&&(r=e[i][0]);for(var a=0;a<r.length-1;a++){var o=r[a],s=r[a+1];Nt(t,o,s)&&(n+=1)}}return n%2==1}function Wt(t,e,n,i){var a,s,l=r({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,u=Et(c),h=e.width/Math.abs(u.xMax-u.xMin),p=e.height/Math.abs(u.yMax-u.yMin),f=h<p?h:p,d=e.width/2-Math.abs(u.xMax-u.xMin)/2*f,v=e.height/2-Math.abs(u.yMax-u.yMin)/2*f;i.beginPath(),i.clearRect(0,0,e.width,e.height),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill();for(var g=0;g<c.length;g++){i.beginPath(),i.setLineWidth(l.borderWidth*e.pixelRatio),i.setStrokeStyle(l.borderColor),i.setFillStyle(o(t[g].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==g&&(i.setStrokeStyle(l.activeBorderColor),i.setFillStyle(o(l.activeFillColor,l.activeFillOpacity)));for(var x=c[g].geometry.coordinates,_=0;_<x.length;_++){a=x[_],1==a.length&&(a=a[0]);for(var m=0;m<a.length;m++)s=jt(a[m][1],a[m][0],u,f,d,v),0===m?(i.beginPath(),i.moveTo(s.x,s.y)):i.lineTo(s.x,s.y);i.fill(),1==l.border&&i.stroke()}if(1==e.dataLabel){var b=c[g].properties.centroid;if(b){s=jt(b[1],b[0],u,f,d,v);var S=c[g].textSize||n.fontSize,A=c[g].properties.name;i.beginPath(),i.setFontSize(S),i.setFillStyle(c[g].textColor||"#666666"),i.fillText(A,s.x-y(A,S)/2,s.y+S/2),i.closePath(),i.stroke()}}}e.chartData.mapData={bounds:u,scale:f,xoffset:d,yoffset:v},Tt(e,n,i,1),i.draw()}function Ht(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var i=0;i<n.length;i++){var r=n[i].name,a=n[i].textSize,o=y(r,a),s=void 0,l=void 0,c=void 0,u=0;while(1){u++,s=Ft(-t.width/2,t.width/2,5)-o/2,l=Ft(-t.height/2,t.height/2,5)+a/2,c=[s-5+t.width/2,l-5-a+t.height/2,s+o+5+t.width/2,l+5+t.height/2];var h=It(c,n,t.width,t.height);if(!h)break;if(1e3==u){c=[-100,-100,-100,-100];break}}n[i].area=c}break;case"vertical":for(var p=function(){return Math.random()>.7},f=0;f<n.length;f++){var d=n[f].name,v=n[f].textSize,g=y(d,v),x=p(),_=void 0,m=void 0,b=void 0,S=void 0,A=0;while(1){A++;var w=void 0;if(x?(_=Ft(-t.width/2,t.width/2,5)-g/2,m=Ft(-t.height/2,t.height/2,5)+v/2,b=[m-5-g+t.width/2,-_-5+t.height/2,m+5+t.width/2,-_+v+5+t.height/2],S=[t.width-(t.width/2-t.height/2)-(-_+v+5+t.height/2)-5,t.height/2-t.width/2+(m-5-g+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-_+v+5+t.height/2)+v,t.height/2-t.width/2+(m-5-g+t.width/2)+g+5],w=It(S,n,t.height,t.width)):(_=Ft(-t.width/2,t.width/2,5)-g/2,m=Ft(-t.height/2,t.height/2,5)+v/2,b=[_-5+t.width/2,m-5-v+t.height/2,_+g+5+t.width/2,m+5+t.height/2],w=It(b,n,t.width,t.height)),!w)break;if(1e3==A){b=[-1e3,-1e3,-1e3,-1e3];break}}x?(n[f].area=S,n[f].areav=b):n[f].area=b,n[f].rotate=x}break}return n}function Ut(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;r({},{type:"normal",autoColors:!0},e.extra.word);i.beginPath(),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill(),i.save();var o=e.chartData.wordCloudData;i.translate(e.width/2,e.height/2);for(var s=0;s<o.length;s++){i.save(),o[s].rotate&&i.rotate(90*Math.PI/180);var l=o[s].name,c=o[s].textSize,u=y(l,c);i.beginPath(),i.setStrokeStyle(o[s].color),i.setFillStyle(o[s].color),i.setFontSize(c),o[s].rotate?o[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?i.strokeText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a):i.fillText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a)):o[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?i.strokeText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a):i.fillText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a)),i.stroke(),i.restore()}i.restore()}function Vt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=V(t,h,a),i.save(),i.translate(c.x,c.y);for(var p=0;p<t.length;p++)0==p?(e.tooltip&&e.tooltip.index==p&&(i.beginPath(),i.setFillStyle(o(t[p].color,s.activeOpacity)),i.moveTo(-u,0),i.lineTo(-t[p].radius-u,-l),i.lineTo(t[p].radius+u,-l),i.lineTo(u,0),i.lineTo(-u,0),i.closePath(),i.fill()),t[p].funnelArea=[c.x-t[p].radius,c.y-l,c.x+t[p].radius,c.y],i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.setStrokeStyle(s.borderColor),i.setFillStyle(o(t[p].color,s.fillOpacity)),i.moveTo(0,0),i.lineTo(-t[p].radius,-l),i.lineTo(t[p].radius,-l),i.lineTo(0,0),i.closePath(),i.fill(),1==s.border&&i.stroke()):(e.tooltip&&e.tooltip.index==p&&(i.beginPath(),i.setFillStyle(o(t[p].color,s.activeOpacity)),i.moveTo(0,0),i.lineTo(-t[p-1].radius-u,0),i.lineTo(-t[p].radius-u,-l),i.lineTo(t[p].radius+u,-l),i.lineTo(t[p-1].radius+u,0),i.lineTo(0,0),i.closePath(),i.fill()),t[p].funnelArea=[c.x-t[p].radius,c.y-l*(p+1),c.x+t[p].radius,c.y-l*p],i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.setStrokeStyle(s.borderColor),i.setFillStyle(o(t[p].color,s.fillOpacity)),i.moveTo(0,0),i.lineTo(-t[p-1].radius,0),i.lineTo(-t[p].radius,-l),i.lineTo(t[p].radius,-l),i.lineTo(t[p-1].radius,0),i.lineTo(0,0),i.closePath(),i.fill(),1==s.border&&i.stroke()),i.translate(0,-l);return i.restore(),!1!==e.dataLabel&&1===a&&qt(t,e,i,l,s.labelAlign,u,c),{center:c,radius:h,series:t}}function qt(t,e,n,i,r,o,s){for(var l=0;l<t.length;l++){var c=t[l],u=void 0,h=void 0,p=void 0,f=void 0,d=c.format?c.format(+c._proportion_.toFixed(2)):a.toFixed(100*c._proportion_)+"%";"right"==r?(u=0==l?(c.funnelArea[2]+s.x)/2:(c.funnelArea[2]+t[l-1].funnelArea[2])/2,h=u+2*o,p=c.funnelArea[1]+i/2,f=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,p),n.lineTo(h,p),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,p),n.arc(h,p,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h+5,p+f/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==l?(c.funnelArea[0]+s.x)/2:(c.funnelArea[0]+t[l-1].funnelArea[0])/2,h=u-2*o,p=c.funnelArea[1]+i/2,f=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,p),n.lineTo(h,p),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,p),n.arc(h,p,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h-5-y(d),p+f/2-2),n.closePath(),n.stroke(),n.closePath())}}function Xt(t,e){e.draw()}var Gt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Jt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function n(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var i=n(),r=null,a=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var o=(n-r)/t.duration,s=Gt[t.timing];o=s(o),t.onProcess&&t.onProcess(o),i(a,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};a=a.bind(this),i(a,e)}function Kt(t,e,n,i){var a=this,o=e.series,s=e.categories;o=v(o,e,n);var c=e.animation?e.duration:0;a.animationInstance&&a.animationInstance.stop();var u=null;if("candle"==t){var h=r({},e.extra.candle.average);h.show?(u=l(h.day,h.name,h.color,o[0].data),u=v(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=v(e.seriesMA,e,n):o}else u=o;e._series_=o=k(o),e.area=new Array(4);for(var p=0;p<4;p++)e.area[p]=e.padding[p];var f=z(u,e,n,e.chartData),d=f.area.wholeHeight,g=f.area.wholeWidth;switch(e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=g;break;case"right":e.area[1]+=g;break}var y={},x=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type){if(y=at(o,e,n),x=y.yAxisWidth,e.yAxis.showTitle){for(var _=0,m=0;m<e.yAxis.data.length;m++)_=Math.max(_,e.yAxis.data[m].titleFontSize?e.yAxis.data[m].titleFontSize:n.fontSize);e.area[0]+=(_+6)*e.pixelRatio}for(var b=0,S=0,A=0;A<x.length;A++)"left"==x[A].position?(e.area[3]+=S>0?x[A].width+e.yAxis.padding:x[A].width,S+=1):(e.area[1]+=b>0?x[A].width+e.yAxis.padding:x[A].width,b+=1)}else n.yAxisWidth=x;if(e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=tt(e.categories,e,n);var w=N(e.categories,e,n,e.chartData.xAxisData.eachSpacing),T=w.xAxisHeight,P=w.angle;n.xAxisHeight=T,n._xAxisTextAngle_=P,e.area[2]+=T,e.chartData.categoriesData=w}else if("line"===e.type||"area"===e.type||"points"===e.type){e.chartData.xAxisData=W(o,e,n),s=e.chartData.xAxisData.rangesFormat;var D=N(s,e,n,e.chartData.xAxisData.eachSpacing),O=D.xAxisHeight,M=D.angle;n.xAxisHeight=O,n._xAxisTextAngle_=M,e.area[2]+=O,e.chartData.categoriesData=D}else e.chartData.xAxisData={xAxisPoints:[]};if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var $=0,C=e.chartData.xAxisData.xAxisPoints,R=e.chartData.xAxisData.startX,L=e.chartData.xAxisData.endX,F=e.chartData.xAxisData.eachSpacing,I=F*(C.length-1),E=L-R;$=E-I,a.scrollOption={currentOffset:$,startTouchX:$,distance:0,lastMoveTime:0},e._scrollDistance_=$}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:K(u)),t){case"word":var j=r({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=Ht(e,j.type)),this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),Ut(o,e,n,i,t),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"map":i.clearRect(0,0,e.width,e.height),Wt(o,e,n,i);break;case"funnel":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.funnelData=Vt(o,e,n,i,t),Ot(e.series,e,n,i,e.chartData),Tt(e,n,i,t),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=At(o,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&gt(e,n,i),Ot(e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=wt(o,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&gt(e,n,i),Ot(e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=mt(o,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&gt(e,n,i),Ot(e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=St(o,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&gt(e,n,i),Ot(e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.pieData=Mt(o,e,n,i,t),Ot(e.series,e,n,i,e.chartData),Tt(e,n,i,t),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.pieData=$t(o,e,n,i,t),Ot(e.series,e,n,i,e.chartData),Tt(e,n,i,t),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.radarData=Lt(o,e,n,i,t),Ot(e.series,e,n,i,e.chartData),Tt(e,n,i,t),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.arcbarData=Ct(o,e,n,i,t),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.gaugeData=Rt(s,o,e,n,i,t),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=bt(o,u,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&gt(e,n,i),Ot(u||e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Xt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break}}function Yt(){this.events={}}Jt.prototype.stop=function(){this.isStop=!0},Yt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Yt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],a=n.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,a)}catch(n){e("error",n," at components/u-charts/u-charts.js:5091")}})};var Qt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=r({},t.title),t.subtitle=r({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=r({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*t.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},t.yAxis),t.yAxis.dashLength*=t.pixelRatio,t.yAxis.padding*=t.pixelRatio,t.xAxis=r({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},t.xAxis),t.xAxis.dashLength*=t.pixelRatio,t.legend=r({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=r({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation,t.rotate=!!t.rotate;var e=JSON.parse(JSON.stringify(i));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:i.yAxisSplit,e.rotate=t.rotate,t.rotate){var a=t.width,o=t.height;t.width=o,t.height=a}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=i.yAxisWidth*t.pixelRatio,e.xAxisHeight=i.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=i.xAxisLineHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=i.titleFontSize*t.pixelRatio,e.subtitleFontSize=i.subtitleFontSize*t.pixelRatio,e.toolTipPadding=i.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=i.toolTipLineHeight*t.pixelRatio,e.columePadding=i.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Yt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Kt.call(this,t.type,t,e,this.context)};Qt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=r({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=at(this.opts.series,this.opts,this.config),i=n.yAxisWidth;this.config.yAxisWidth=i;var a=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*(s.length-1),p=c-l;a=p-h,this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a;break}Kt.call(this,this.opts.type,this.opts,this.config,this.context)},Qt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var i=at(this.opts.series,this.opts,this.config),r=i.yAxisWidth;this.config.yAxisWidth=r;var a=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*n,p=c-l,f=p-u*(s.length-1);a=p/2-h,a>0&&(a=0),a<f&&(a=f),this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a,Kt.call(this,this.opts.type,this.opts,this.config,this.context)}else e("log","请启用滚动条后使用！"," at components/u-charts/u-charts.js:5265")},Qt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Qt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Qt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=m(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?I({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?C({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?R({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?F({x:n.x,y:n.y},this.opts):"word"===this.opts.type?L({x:n.x,y:n.y},this.opts.chartData.wordCloudData):D({x:n.x,y:n.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Qt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=m(e,this.opts,t);return O({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Qt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){m(n,this.opts,t);var i=this.getLegendDataIndex(t);i>=0&&(this.opts.series[i].show=!this.opts.series[i].show,this.opts.animation=!!e.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Kt.call(this,this.opts.type,this.opts,this.config,this.context))}},Qt.prototype.showToolTip=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;i=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],i||e("log","touchError"," at components/u-charts/u-charts.js:5402");var a=m(i,this.opts,t),o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(l>-1){var c=b(this.opts.series,l);if(0!==c.length){var u=w(c,this.opts.chartData.calPoints,l,this.opts.categories,n),h=u.textList,p=u.offset;p.y=a.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var f=T(c,this.opts.chartData.calPoints,l,this.opts.categories,n);h=f.textList,p=f.offset;p.y=a.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=P(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,n),h=u.textList,p=u.offset;p.y=a.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.name+": "+c.data,color:c.color}],p={x:a.x,y:a.y};s.tooltip={textList:h,offset:p,option:n,index:l}}Kt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.properties.name,color:c.color}],p={x:a.x,y:a.y};s.tooltip={textList:h,offset:p,option:n,index:l}}s.updateData=!1,Kt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=c.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),p={x:a.x,y:a.y};s.tooltip={textList:h,offset:p,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}},Qt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=r({},this.opts,{_scrollDistance_:t,animation:!1});Kt.call(this,this.opts.type,e,this.config,this.context)},Qt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=m(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Qt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),i=n-this.scrollOption.lastMoveTime;if(!(i<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var a=null;if(a=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],a&&!0===this.opts.enableScroll){var o,s=m(a,this.opts,t);o=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(this,l+o,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=o=u-l;var h=r({},this.opts,{_scrollDistance_:l+o,animation:!1});return Kt.call(this,h.type,h,this.config,this.context),l+o}}},Qt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Qt)}).call(this,n("0de9")["default"],n("6e42")["default"])},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,s,l,c){var u,h="function"===typeof t?t.options:t;if(l&&(h.components=Object.assign(l,h.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(h.mixins||(h.mixins=[])).push(c)),e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),i&&(h.functional=!0),a&&(h._scopeId="data-v-"+a),o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(h.functional){h._injectStyles=u;var p=h.render;h.render=function(t,e){return u.call(e),p(t,e)}}else{var f=h.beforeCreate;h.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:h}}n.d(e,"a",function(){return i})},f6cf:function(t,e,n){"use strict";(function(e){t.exports={error:"",isJSON:function(t){if("string"==typeof t)try{var n=JSON.parse(t);return!("object"!=typeof n||!n)}catch(i){return e("log","error："+t+"!!!"+i," at common/checker.js:13"),!1}},isNumber:function(t){var e=/^-?[1-9][0-9]?.?[0-9]*$/;return e.test(t)}}}).call(this,n("0de9")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/chart/line';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chart/line.js';

define('components/chart/line.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chart/line"], {
  "1a95": function a95(e, t, a) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i,
          n = s(a("de76")),
          r = a("f6cf");

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var o = null,
          c = {
        data: function data() {
          return {
            cWidth: "",
            cHeight: "",
            pixelRatio: 1,
            textarea: "",
            LineA: {
              categories: ["2012", "2013", "2014", "2015", "2016", "2017"],
              series: [{
                name: "成交量A",
                data: [35, 8, 25, 37, 4, 20]
              }, {
                name: "成交量B",
                data: [70, 40, 65, 100, 44, 68]
              }, {
                name: "成交量C",
                data: [100, 80, 95, 150, 112, 132]
              }]
            }
          };
        },
        mounted: function mounted() {
          i = this, this.cWidth = e.upx2px(750), this.cHeight = e.upx2px(500), this.getServerData();
        },
        methods: {
          getServerData: function getServerData() {
            var t = {
              categories: [],
              series: []
            };
            t.categories = this.LineA.categories, t.series = this.LineA.series, i.textarea = JSON.stringify(this.LineA), i.showLineA("canvasLineA", t), e.request({
              url: "https://www.ucharts.cn/data.json",
              data: {},
              success: function success(e) {},
              fail: function fail() {
                i.tips = "网络错误，小程序端请检查合法域名";
              }
            });
          },
          showLineA: function showLineA(e, t) {
            o = new n.default({
              $this: i,
              canvasId: e,
              type: "line",
              fontSize: 11,
              padding: [15, 20, 0, 15],
              legend: {
                show: !0,
                padding: 5,
                lineHeight: 11,
                margin: 0
              },
              dataLabel: !0,
              dataPointShape: !0,
              background: "#FFFFFF",
              pixelRatio: i.pixelRatio,
              categories: t.categories,
              series: t.series,
              animation: !0,
              xAxis: {
                type: "grid",
                gridColor: "#CCCCCC",
                gridType: "dash",
                dashLength: 8,
                boundaryGap: "justify"
              },
              yAxis: {
                gridType: "dash",
                gridColor: "#CCCCCC",
                dashLength: 8,
                splitNumber: 5,
                format: function format(e) {
                  return e.toFixed(0) + "元";
                }
              },
              width: i.cWidth * i.pixelRatio,
              height: i.cHeight * i.pixelRatio,
              extra: {
                line: {
                  type: "curve"
                }
              }
            });
          },
          touchLineA: function touchLineA(e) {
            o.touchLegend(e), o.showToolTip(e, {
              format: function format(e, t) {
                return t + " " + e.name + ":" + e.data;
              }
            });
          },
          changeData: function changeData() {
            if ((0, r.isJSON)(i.textarea)) {
              var t = JSON.parse(i.textarea);
              o.updateData({
                series: t.series,
                categories: t.categories
              });
            } else e.showToast({
              title: "数据格式错误",
              image: "../../../static/images/alert-warning.png"
            });
          }
        }
      };
      t.default = c;
    }).call(this, a("6e42")["default"]);
  },
  "1cb7": function cb7(e, t, a) {},
  "4f55": function f55(e, t, a) {
    "use strict";

    a.r(t);
    var i = a("1a95"),
        n = a.n(i);

    for (var r in i) {
      "default" !== r && function (e) {
        a.d(t, e, function () {
          return i[e];
        });
      }(r);
    }

    t["default"] = n.a;
  },
  "5fc7": function fc7(e, t, a) {
    "use strict";

    a.r(t);
    var i = a("9bd8"),
        n = a("4f55");

    for (var r in n) {
      "default" !== r && function (e) {
        a.d(t, e, function () {
          return n[e];
        });
      }(r);
    }

    a("a824");
    var s,
        o = a("f0c5"),
        c = Object(o["a"])(n["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], s);
    t["default"] = c.exports;
  },
  "9bd8": function bd8(e, t, a) {
    "use strict";

    var i,
        n = function n() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    a.d(t, "b", function () {
      return n;
    }), a.d(t, "c", function () {
      return r;
    }), a.d(t, "a", function () {
      return i;
    });
  },
  a824: function a824(e, t, a) {
    "use strict";

    var i = a("1cb7"),
        n = a.n(i);
    n.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chart/line-create-component', {
  'components/chart/line-create-component': function componentsChartLineCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5fc7"));
  }
}, [['components/chart/line-create-component']]]);
});
require('components/chart/line.js');
__wxRoute = 'components/easy-scroll/easy-scroll';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/easy-scroll/easy-scroll.js';

define('components/easy-scroll/easy-scroll.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/easy-scroll/easy-scroll"], {
  "11fe": function fe(n, t, e) {
    "use strict";

    var i,
        c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        o = [];

    e.d(t, "b", function () {
      return c;
    }), e.d(t, "c", function () {
      return o;
    }), e.d(t, "a", function () {
      return i;
    });
  },
  "2e86": function e86(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("cfad"),
        c = e.n(i);

    for (var o in i) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(o);
    }

    t["default"] = c.a;
  },
  "493a": function a(n, t, e) {},
  c2b3: function c2b3(n, t, e) {
    "use strict";

    var i = e("493a"),
        c = e.n(i);
    c.a;
  },
  cfad: function cfad(n, t, e) {
    "use strict";

    (function (n, e) {
      function i(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          }))), i.forEach(function (t) {
            c(n, t, e[t]);
          });
        }

        return n;
      }

      function c(n, t, e) {
        return t in n ? Object.defineProperty(n, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[t] = e, n;
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = {
        name: "EasyScroll",
        components: {},
        data: function data() {
          return {
            list: [{
              a: 1,
              b: [2, 3, 4, 5]
            }, {
              a: 1,
              b: [2, 3, 4, 5]
            }, {
              a: 1,
              b: [2, 3, 4, 5]
            }, {
              a: 1,
              b: [2, 3, 4, 5]
            }],
            isTouchScrollView: !1,
            clickedNavIndex: 0,
            viewNavIndex: 0,
            nodeInfoList: []
          };
        },
        mounted: function mounted() {
          n("log", this.list, " at components/easy-scroll/easy-scroll.vue:72");
        },
        methods: {
          init: function init() {
            var n = this,
                t = e.createSelectorQuery().in(this);
            t.selectAll("#list-container .list").boundingClientRect(function (t) {
              n.nodeInfoList = t;
            }).exec();
          },
          handleClickNav: function handleClickNav(n) {
            (this.isTouchScrollView || this.clickedNavIndex != n) && (this.isTouchScrollView = !1, this.clickedNavIndex == n && (this.clickedNavIndex = -1), this.$nextTick(function () {
              this.clickedNavIndex = n, this.viewNavIndex = n;
            }));
          },
          device: function device() {
            e.navigateTo({
              url: "../../pages/sensor/sensor"
            });
          },
          handleListScroll: function handleListScroll(n) {
            if (this.isTouchScrollView) {
              var t = this.scrollTop = n.detail.scrollTop,
                  e = this.nodeInfoList.map(function (n, t) {
                return i({
                  index: t
                }, n);
              }).filter(function (n) {
                return n.top <= t;
              }).sort(function (n, t) {
                return t.top - n.top;
              })[0].index;
              this.viewNavIndex = e;
            }
          },
          handleTouchScrollView: function handleTouchScrollView() {
            this.isTouchScrollView = !0;
          }
        },
        onLoad: function onLoad() {
          this.$nextTick(function () {
            this.init();
          });
        }
      };
      t.default = o;
    }).call(this, e("0de9")["default"], e("6e42")["default"]);
  },
  f38d: function f38d(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("11fe"),
        c = e("2e86");

    for (var o in c) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(o);
    }

    e("c2b3");
    var r,
        l = e("f0c5"),
        u = Object(l["a"])(c["default"], i["b"], i["c"], !1, null, "bb83a7be", null, !1, i["a"], r);
    t["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/easy-scroll/easy-scroll-create-component', {
  'components/easy-scroll/easy-scroll-create-component': function componentsEasyScrollEasyScrollCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f38d"));
  }
}, [['components/easy-scroll/easy-scroll-create-component']]]);
});
require('components/easy-scroll/easy-scroll.js');
__wxRoute = 'components/uni-segmented-control/uni-segmented-control';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-segmented-control/uni-segmented-control.js';

define('components/uni-segmented-control/uni-segmented-control.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-segmented-control/uni-segmented-control"], {
  "43fe": function fe(t, n, e) {
    "use strict";

    var r,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return r;
    });
  },
  6752: function _(t, n, e) {
    "use strict";

    var r = e("f29b"),
        u = e.n(r);
    u.a;
  },
  ed45: function ed45(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = {
      name: "UniSegmentedControl",
      props: {
        current: {
          type: Number,
          default: 0
        },
        values: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        activeColor: {
          type: String,
          default: "#007aff"
        },
        styleType: {
          type: String,
          default: "button"
        }
      },
      data: function data() {
        return {
          currentIndex: 0
        };
      },
      watch: {
        current: function current(t) {
          t !== this.currentIndex && (this.currentIndex = t);
        }
      },
      created: function created() {
        this.currentIndex = this.current;
      },
      methods: {
        _onClick: function _onClick(t) {
          this.currentIndex !== t && (this.currentIndex = t, this.$emit("clickItem", {
            currentIndex: t
          }));
        }
      }
    };
    n.default = r;
  },
  f29b: function f29b(t, n, e) {},
  f2d7: function f2d7(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("43fe"),
        u = e("fb4c");

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    e("6752");
    var f,
        i = e("f0c5"),
        o = Object(i["a"])(u["default"], r["b"], r["c"], !1, null, "7bf69b80", null, !1, r["a"], f);
    n["default"] = o.exports;
  },
  fb4c: function fb4c(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("ed45"),
        u = e.n(r);

    for (var c in r) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(c);
    }

    n["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-segmented-control/uni-segmented-control-create-component', {
  'components/uni-segmented-control/uni-segmented-control-create-component': function componentsUniSegmentedControlUniSegmentedControlCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f2d7"));
  }
}, [['components/uni-segmented-control/uni-segmented-control-create-component']]]);
});
require('components/uni-segmented-control/uni-segmented-control.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"64a1":function(t,e,n){},"78ba":function(t,e,n){"use strict";(function(t){n("31e0"),n("921b");a(n("66fd"));var e=a(n("bbb9"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8502:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{list:[{name:"厂区1",state1:"在线",temperature:"40",humidity:"50",state2:"正常"},{name:"厂区2",state1:"在线",temperature:"40",humidity:"50",state2:"正常"},{name:"厂区3",state1:"在线",temperature:"40",humidity:"50",state2:"正常"}]}},onLoad:function(){},methods:{addDevice:function(){t.navigateTo({url:"/pages/sensor/sensor"})}}};e.default=n}).call(this,n("6e42")["default"])},"929c":function(t,e,n){"use strict";n.r(e);var a=n("8502"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},"94f0":function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},bbb9:function(t,e,n){"use strict";n.r(e);var a=n("94f0"),u=n("929c");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("f9bf");var i,c=n("f0c5"),o=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"264bf558",null,!1,a["a"],i);e["default"]=o.exports},f9bf:function(t,e,n){"use strict";var a=n("64a1"),u=n.n(a);u.a}},[["78ba","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/sensor/sensor';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sensor/sensor.js';

define('pages/sensor/sensor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sensor/sensor"],{"0cee":function(t,e,n){"use strict";n.r(e);var a=n("66cc"),i=n("30f5");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("0d3e");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},"0d3e":function(t,e,n){"use strict";var a=n("5279"),i=n.n(a);i.a},"267b":function(t,e,n){"use strict";n.r(e);var a=n("ce38"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"2a51":function(t,e,n){"use strict";n.r(e);var a=n("ecdb"),i=n("267b");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("aa8d");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},"30f5":function(t,e,n){"use strict";n.r(e);var a=n("fe19"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},5279:function(t,e,n){},"66cc":function(t,e,n){"use strict";var a={"uni-segmented-control":()=>n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"f2d7"))},i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},"7b5f":function(t,e,n){"use strict";(function(t){n("31e0"),n("921b");a(n("66fd"));var e=a(n("0cee"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},aa8d:function(t,e,n){"use strict";var a=n("fffa"),i=n.n(a);i.a},ce38:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i=u(n("de76")),r=n("f6cf");function u(t){return t&&t.__esModule?t:{default:t}}var o=null,c={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:"",ColumnB:{categories:["2013","2014","2015","2016","2017","2018"],series:[{name:"新成交量3",data:[35,36,31,33,13,34]},{name:"新成交量4",data:[18,27,21,24,6,28]}]}}},mounted:function(){a=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getServerData()},methods:{getServerData:function(){var e={categories:[],series:[]};e.categories=this.ColumnB.categories,e.series=this.ColumnB.series,a.textarea=JSON.stringify(this.ColumnB),a.showColumn("canvasColumn",e),t.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(t){},fail:function(){a.tips="网络错误，小程序端请检查合法域名"}})},showColumn:function(t,e){o=new i.default({$this:a,canvasId:t,type:"column",padding:[15,5,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:a.pixelRatio,animation:!0,categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{data:[{position:"right",axisLine:!1,format:function(t){return t.toFixed(0)+"元"}}]},dataLabel:!0,width:a.cWidth*a.pixelRatio,height:a.cHeight*a.pixelRatio,extra:{column:{type:"group",width:a.cWidth*a.pixelRatio*.45/e.categories.length}}})},touchColumn:function(t){o.showToolTip(t,{format:function(t,e){return"object"===typeof t.data?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}}),o.touchLegend(t,{animation:!0})},changeData:function(){if((0,r.isJSON)(a.textarea)){var e=JSON.parse(a.textarea);o.updateData({series:e.series,categories:e.categories,animation:!0})}else t.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};e.default=c}).call(this,n("6e42")["default"])},ecdb:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},fe19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2a51"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return n.e("components/chart/line").then(n.bind(null,"5fc7"))},u=function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"f2d7"))},o={data:function(){return{items:["分钟","小时","天"],current:0}},methods:{onClickItem:function(t,e){this.current!==t.currentIndex&&(this.current=t.currentIndex)}},components:{lineChart:r,uniSegmentedControl:u,barChart:a.default}};e.default=o},fffa:function(t,e,n){}},[["7b5f","common/runtime","common/vendor"]]]);
});
require('pages/sensor/sensor.js');
__wxRoute = 'pages/AddDevice/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/AddDevice/index.js';

define('pages/AddDevice/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/AddDevice/index"],{"2c9b":function(e,n,t){"use strict";(function(e){t("31e0"),t("921b");o(t("66fd"));var n=o(t("ff18"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},a29b:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return Promise.all([t.e("common/vendor"),t.e("components/easy-scroll/easy-scroll")]).then(t.bind(null,"f38d"))},r={data:function(){return{}},components:{easyScroll:o}};n.default=r},b6bd:function(e,n,t){"use strict";var o={"easy-scroll":()=>Promise.all([t.e("common/vendor"),t.e("components/easy-scroll/easy-scroll")]).then(t.bind(null,"f38d"))},r=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",function(){return r}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return o})},e6ae:function(e,n,t){"use strict";t.r(n);var o=t("a29b"),r=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);n["default"]=r.a},ff18:function(e,n,t){"use strict";t.r(n);var o=t("b6bd"),r=t("e6ae");for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);var u,a=t("f0c5"),l=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=l.exports}},[["2c9b","common/runtime","common/vendor"]]]);
});
require('pages/AddDevice/index.js');
__wxRoute = 'pages/find/find';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/find/find.js';

define('pages/find/find.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/find"],{"3c06":function(n,t,e){"use strict";e.r(t);var u=e("e8d0"),c=e("b7cc");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);e("4677");var o,a=e("f0c5"),f=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=f.exports},4677:function(n,t,e){"use strict";var u=e("9eb3"),c=e.n(u);c.a},7309:function(n,t,e){"use strict";(function(n){e("31e0"),e("921b");u(e("66fd"));var t=u(e("3c06"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"9eb3":function(n,t,e){},b7cc:function(n,t,e){"use strict";e.r(t);var u=e("e8b7"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},e8b7:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},onLoad:function(){},methods:{}};t.default=u},e8d0:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})}},[["7309","common/runtime","common/vendor"]]]);
});
require('pages/find/find.js');
__wxRoute = 'pages/order/order';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/order.js';

define('pages/order/order.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"0aee":function(n,t,e){"use strict";e.r(t);var u=e("d61b"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},2141:function(n,t,e){},"2c36":function(n,t,e){"use strict";var u=e("2141"),r=e.n(u);r.a},4845:function(n,t,e){"use strict";var u,r=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return r}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return u})},d5ab:function(n,t,e){"use strict";e.r(t);var u=e("4845"),r=e("0aee");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("2c36");var c,o=e("f0c5"),f=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=f.exports},d61b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},onLoad:function(){},methods:{}};t.default=u},e463:function(n,t,e){"use strict";(function(n){e("31e0"),e("921b");u(e("66fd"));var t=u(e("d5ab"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["e463","common/runtime","common/vendor"]]]);
});
require('pages/order/order.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"146f":function(n,t,e){"use strict";(function(n){e("31e0"),e("921b");u(e("66fd"));var t=u(e("c40b"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},2865:function(n,t,e){"use strict";e.r(t);var u=e("d4e6"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},"8cc3":function(n,t,e){"use strict";var u=e("be02"),c=e.n(u);c.a},be02:function(n,t,e){},c40b:function(n,t,e){"use strict";e.r(t);var u=e("e715"),c=e("2865");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);e("8cc3");var o,a=e("f0c5"),f=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=f.exports},d4e6:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},onLoad:function(){},methods:{}};t.default=u},e715:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})}},[["146f","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'components/chart/bar/bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chart/bar/bar.js';

define('components/chart/bar/bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/chart/bar/bar"],{"267b":function(t,e,a){"use strict";a.r(e);var n=a("ce38"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"2a51":function(t,e,a){"use strict";a.r(e);var n=a("ecdb"),i=a("267b");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("aa8d");var r,u=a("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=c.exports},aa8d:function(t,e,a){"use strict";var n=a("fffa"),i=a.n(n);i.a},ce38:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=r(a("de76")),o=a("f6cf");function r(t){return t&&t.__esModule?t:{default:t}}var u=null,c={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:"",ColumnB:{categories:["2013","2014","2015","2016","2017","2018"],series:[{name:"新成交量3",data:[35,36,31,33,13,34]},{name:"新成交量4",data:[18,27,21,24,6,28]}]}}},mounted:function(){n=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getServerData()},methods:{getServerData:function(){var e={categories:[],series:[]};e.categories=this.ColumnB.categories,e.series=this.ColumnB.series,n.textarea=JSON.stringify(this.ColumnB),n.showColumn("canvasColumn",e),t.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(t){},fail:function(){n.tips="网络错误，小程序端请检查合法域名"}})},showColumn:function(t,e){u=new i.default({$this:n,canvasId:t,type:"column",padding:[15,5,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:n.pixelRatio,animation:!0,categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{data:[{position:"right",axisLine:!1,format:function(t){return t.toFixed(0)+"元"}}]},dataLabel:!0,width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{column:{type:"group",width:n.cWidth*n.pixelRatio*.45/e.categories.length}}})},touchColumn:function(t){u.showToolTip(t,{format:function(t,e){return"object"===typeof t.data?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}}),u.touchLegend(t,{animation:!0})},changeData:function(){if((0,o.isJSON)(n.textarea)){var e=JSON.parse(n.textarea);u.updateData({series:e.series,categories:e.categories,animation:!0})}else t.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};e.default=c}).call(this,a("6e42")["default"])},ecdb:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},fa28:function(t,e,a){"use strict";(function(t){a("31e0"),a("921b");n(a("66fd"));var e=n(a("2a51"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},fffa:function(t,e,a){}},[["fa28","common/runtime","common/vendor"]]]);
});
require('components/chart/bar/bar.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

