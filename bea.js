var _yt_player={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var ba,ea,fa,la,ma,na,sa,ta,ua,x,va,wa,xa,ya,Ba,za,Aa,Ca,A,Da,Ea,Fa,Ga,Ha,La,Ja,Qa,Wa,Xa,cb,eb,fb,gb,ub,yb,Eb,Bb,Gb,Ib,Cb,Hb,Jb,Mb,Qb,Rb,Sb,Xb,jc,qc,sc,tc,Ic,Mc,Pc,Vc,$c,cd,hd,kd,od,pd,sd,td,vd,yd,Ad,ud,Bd,Fd,Gd,Kd,Ld,Pd,Rd,Ud,Wd,Xd,Yd,Zd,$d,ce,ee,ge,he,ie,D,le,ne,ke,pe,qe,re,ue,ve,we,xe,ye,Ae,Ce,De,Me,oe,Le,He,Ye,Ze,af,$e,gf,hf,jf,Ff,Gf,aaa,caa,Mf,Pf,Qf,Zf,cg,bg,daa,ig,eaa,jg,faa,kg,lg,mg,ng,og,pg,qg,haa,iaa,wg,yg,zg,Ag,kaa,Bg,Cg,Dg,Eg,Jg,laa,Fg,Og,Mg,naa,Kg,Hg,Tg,Ug,Vg,oaa,Yg,Zg,fh,
paa,kh,mh,ph,sh,qaa,yh,wh,nh,uh,saa,Bh,zh,Ah,Eh,raa,Jh,Kh,Lh,Oh,taa,Sh,Uh,uaa,vaa,Vh,Xh,Wh,waa,$h,ai,bi,yaa,di,ei,fi,gi,hi,zaa,ii,ji,ki,li,oi,pi,ui,vi,xi,yi,zi,Bi,Ci,Di,Ei,Fi,Hi,Daa,Gi,Ii,Ki,Ji,Baa,Li,Eaa,Mi,Faa,Oi,Ri,Iaa,Jaa,Ti,Kaa,Vi,Xi,Yi,Zi,aj,$i,bj,Laa,ej,hj,kj,mj,gj,Qaa,xj,wj,zj,Aj,Raa,Dj,Cj,Taa,Uaa,Vaa,Hj,Waa,Xaa,Ej,Lj,Pj,Rj,Sj,Tj,Zaa,$aa,ek,fk,hk,ik,aba,jk,kk,gk,lk,mk,xk,wk,nk,Ak,Bk,Dk,Ek,Gk,Hk,Ik,Jk,Kk,Lk,Nk,Pk,Qk,Ck,Uk,Sk,bba,$k,al,dl,Wk,cl,dba,eba,il,kl,ll,hba,gba,fl,wl,xl,yl,Dl,El,Bl,
Fl,Hl,Jl,Kl,iba,Ll,Ml,Nl,Pl,jba,Tl,Ol,Vl,kba,lba,bm,cm,fm,gm,em,im,jm,lm,mm,pba,qba,rba,om,qm,rm,pm,sm,tm,um,vm,wm,xm,sba,ym,Am,Em,Bm,Gm,Hm,zm,uba,vba,Cm,Im,wba,Fm,tba,Dm,Km,xba,Lm,Mm,Jm,yba,Nm,dn,en,gn,hn,zba,Aba,Bba,Cba,ln,nn,on,pn,Dba,Eba,Fba,Gba,Hba,Iba,qn,rn,sn,tn,vn,xn,wn,Kba,Jba,zn,yn,Bn,Dn,An,Gn,Nba,Lba,Jn,Kn,In,Mn,Pn,Sn,Un,Vn,Wn,Pba,Yn,ao,Rba,co,eo,fo,go,ho,Sba,jo,lo,Tba,no,Uba,oo,ro,po,qo,Yl,Zba,yo,Ao,Bo,Co,Do,$ba,zo,aca,Ho,bca,cca,Io,Lo,Mo,No,fca,gca,Oo,So,Ro,Uo,Qo,To,Yo,Xo,$o,ap,Zo,hca,
dp,ep,fp,gp,kca,jca,lca,jp,kp,lp,mp,np,op,pp,qp,up,vp,wp,xp,nca,zp,Ap,Bp,Dp,Ep,yp,Fp,Cp,Hp,Ip,Kp,Jp,Mp,Np,Pp,Qp,Rp,Up,cq,dq,eq,Xp,sca,fq,uca,tca,Xl,vca,hq,iq,kq,wca,jq,xca,yca,zca,Aca,Cca,nq,Bca,oq,qq,rq,sq,tq,vq,wq,xq,yq,Aq,zq,Eca,Cq,Eq,Fca,Fq,Gq,Hq,Iq,Jq,Kq,wr,Er,Fr,Gr,Hr,Nca,Ir,Jr,Kr,Mr,Nr,Or,Pr,Qr,Rr,Sr,Tr,Oca,Ur,Pca,Yr,$r,bs,Rca,Sca,ds,Tca,Uca,Vca,Wca,es,gs,hs,fs,ks,Xca,Wr,as,is,js,cs,Zr,Qca,ls,ms,ns,rs,ts,qs,$ca,bda,As,zs,Zca,Yca,ys,Cs,Ds,Es,Gs,Is,Js,Ls,ida,Ms,Ns,Os,Ps,Qs,Ss,Ts,Us,Vs,Rs,lda,
Ws,Xs,Ys,Zs,at,bt,ct,dt,et,ft,gt,ht,it,jt,kt,mda,lt,ot,qt,rt,nt,oda,tt,vt,xt,Bt,Dt,At,wt,Et,zt,Ct,Ft,Gt,Ht,pda,Jt,Pt,Lt,Rt,Tt,Qt,Nt,Ut,Vt,qda,Wt,Yt,Zt,rda,$t,au,Kt,Mt,Ot,St,bu,cu,sda,eu,tda,uda,fu,gu,vda,iu,wda,hu,ju,lu,mu,nu,ou,pu,tu,qu,xda,uu,vu,wu,xu,yda,ru,zu,Au,Bu,Cu,Du,Fu,Gu,Hu,zda,Iu,Ju,Ku,Lu,Mu,Ada,Bda,Fda,Gda,Cda,Dda,Eda,Nu,Pu,Ou,Qu,Ru,Su,Hda,Tu,Uu,Vu,Wu,Xu,Yu,Zu,$u,av,bv,cv,dv,ev,fv,gv,hv,jv,lv,kv,mv,nv,ov,qv,rv,tv,uv,Ida,wv,vv,Av,Bv,Cv,Dv,Ev,Fv,yv,Gv,Hv,Iv,Jv,Jda,Kv,Mv,Nv,Ov,Pv,Qv,Rv,Sv,
Kda,Tv,Uv,Vv,Wv,Xv,Zv,$v,aw,bw,Lda,dw,ew,cw,gw,fw,hw,iw,Mda,jw,lw,ada,ws,Oda,mw,nw,ow,Pda,Qda,os,pw,tw,Tda,Sda,qw,Rda,rw,yw,Uda,Vda,Aw,Wda,Bw,zw,Xda,Dw,Cw,Ew,Yda,Zda,$da,Fw,ww,aea,bea,Bs,xs,ax,cx,ex,fx,gx,hx,ix,dx,lx,cea,nx,eea,ox,px,fea,dea,gea,hea,iea,qx,ps,rx,sx,us,jea,ux,kea,vx,lea,wx,yx,xx,zx,nea,Bx,Cx,Dx,Ex,Fx,Gx,Ix,Jx,oea,Lx,Nx,Mx,Kx,R,Px,Rx,Sx,Tx,qy,jy,sy,ty,vy,wy,Ux,ly,yy,xea,$x,ey,Zx,Yx,Ey,Fy,Gy,Hy,Iy,yea,zea,Jy,Ky,Aea,Eea,Ly,Bea,Dea,Cea,My,Fea,Ny,Gea,Hea,Oy,Py,Iea,Jea,Vy,Xy,Yy,az,$y,bz,
cz,dz,ez,Lea,Mea,Nea,gz,iz,jz,kz,lz,mz,nz,Tea,Uea,oz,xz,wz,qz,vz,Hz,Lz,Zea,Oz,Ez,Cz,Qz,Yea,$ea,Rz,Tz,Uz,Sz,Bz,afa,tz,Pz,Kz,ffa,bfa,gfa,cfa,dfa,efa,Wz,Xz,hfa,Zz,$z,aA,cA,dA,sz,Nz,uz,Gz,Fz,gA,ifa,xr,hA,iA,zr,kA,Iz,lA,Ar,Vz,Dz,mA,eA,Jz,jfa,zz,Az,yz,fz,pA,qA,lfa,mfa,kfa,ofa,pfa,rA,tA,qfa,rfa,sA,nfa,xA,AA,yA,BA,zA,DA,EA,FA,IA,KA,JA,MA,UA,ufa,YA,cB,wfa,dB,eB,fB,hB,gB,jB,kB,yfa,pB,Afa,rB,sB,zfa,tB,uB,Cfa,qB,Bfa,xB,yB,zB,GA,AB,BB,Dfa,wB,CB,DB,EB,FB,GB,Efa,HB,IB,JB,KB,NB,PB,QB,OB,SB,UB,Ffa,VB,YB,ZB,bC,Jfa,
Hfa,cC,Ifa,Gfa,fC,eC,gC,hC,iC,kC,jC,nC,oC,qC,pC,uC,wC,xC,rC,zC,yC,AC,sC,Lfa,Nfa,Ofa,EC,FC,GC,HC,IC,JC,KC,LC,MC,NC,OC,PC,RC,SC,UC,WC,Qfa,Rfa,XC,YC,$C,aD,bD,ZC,cD,eD,fD,gD,hD,iD,jD,dD,mD,Vfa,Ufa,nD,oD,pD,qD,Wfa,rD,sD,tD,Xfa,Yfa,uD,vD,wD,xD,$fa,aga,yD,zD,cga,dga,fga,AD,gga,BD,CD,ega,DD,ED,iga,GD,HD,ID,JD,KD,LD,MD,ND,OD,kga,PD,lga,QD,jga,RD,nga,mga,SD,pga,oga,qga,TD,rga,UD,sga,VD,WD,uga,tga,yga,zga,Aga,Bga,YD,Cga,XD,vga,wga,xga,$D,Dga,Ega,Fga,aE,bE,iE,jE,kE,lE,mE,oE,nE,Hga,rE,pE,sE,Iga,Jga,Kga,Lga,yE,
zE,Mga,LE,JE,CE,HE,BE,KE,NE,Oga,Nga,OE,RE,TE,UE,SE,WE,VE,Qga,$E,bF,cF,dF,XE,eF,iF,jF,lF,kF,Sga,Tga,Uga,pF,qF,rF,sF,tF,FE,uF,Vga,wF,yF,Wga,AF,CF,EF,FF,xF,JF,KF,GF,BF,LF,NF,Yga,QF,OF,RF,PF,SF,TF,pG,zG,AG,CG,DG,EG,Zga,HG,$ga,LG,MG,KG,JG,IG,QG,RG,aha,bha,UG,WG,XG,YG,ZG,$G,eha,aH,fha,gha,bH,cH,hha,fH,jH,iH,lH,gH,mH,dH,nH,hH,eH,kH,oH,qH,pH,rH,sH,tH,uH,zH,kha,jha,BH,CH,AH,DH,FH,GH,nF,IH,JH,mF,KH,lha,LH,MH,oha,pha,qha,SH,TH,UH,VH,OH,WH,XH,NH,mha,YH,PH,QH,nha,rha,ZH,RH,sha,tha,uha,vha,cI,eI,dI,$H,aI,bI,wha,
xha,yha,zha,fI,gI,hI,iI,jI,kI,lI,mI,tI,pI,Aha,vI,qI,rI,oI,sI,nI,uI,zI,yI,xI,AI,BI,CI,DI,Bha,EI,FI,GI,Cha,HI,Dha,Eha,Fha,Gha,II,Hha,JI,KI,LI,MI,NI,PI,OI,QI,wH,yH,VI,WI,XI,xH,HH,$I,UI,SI,RI,TI,aJ,bJ,cJ,dJ,ZI,vH,YI,eJ,fJ,EH,gJ,hJ,iJ,Iha,jJ,Kha,kJ,lJ,mJ,pJ,Nha,nJ,Qha,oJ,wJ,vJ,sJ,Oha,tJ,Lha,xJ,Rha,yJ,Sha,BJ,zJ,AJ,FJ,Uha,IJ,Vha,KJ,LJ,MJ,OJ,QJ,SJ,VJ,Xha,Yha,UJ,WJ,HJ,ZJ,Zha,YJ,aK,bK,XJ,$J,DJ,Tha,RJ,Wha,$ha,aia,bia,EJ,JJ,GJ,PJ,NJ,cia,CJ,dK,eK,fK,gK,hK,iK,jK,kK,dia,lK,eia,fia,mK,hia,oK,lia,iia,mia,nia,jia,
oia,kia,uK,rK,pia,qia,wK,tK,xK,yK,zK,nK,sK,vK,qK,AK,BK,sia,pK,CK,DK,EK,tia,uia,via,GK,FK,HK,IK,JK,KK,NK,wia,QK,RK,zia,yia,OK,xia,TK,PK,SK,MK,UK,VK,aL,WK,$K,YK,ZK,Aia,bL,Bia,cL,dL,eL,XK,fL,gL,iL,kL,lL,hL,Cia,Dia,nL,Eia,Fia,mL,pL,Hia,oL,rL,sL,tL,uL,Iia,vL,wL,yL,xL,zL,DL,CL,EL,Jia,HL,IL,FL,AL,JL,LL,ML,NL,Kia,OL,PL,QL,SL,ZL,WL,$L,aM,YL,cM,dM,eM,fM,bM,XL,gM,hM,PE,BL,KL,lM,mM,Mia,Nia,Oia,Pia,Qia,Ria,oM,Sia,nM,pM,Tia,qM,cK,Uia,Via,Wia,rM,sM,Xia,Yia,Zia,uM,wM,yM,xM,zM,AM,vM,tM,$ia,DM,CM,EM,BM,aja,IM,cja,
LM,NM,eja,FM,JM,MM,PM,HM,fja,QM,SM,GM,TM,UM,RM,VM,KM,dja,gja,bja,WM,XM,YM,bN,hja,ija,jja,lja,mja,nja,oja,cN,dN,pja,fN,gN,qja,hN,iN,rja,jN,sja,kN,tja,lN,mN,nN,oN,wja,yja,pN,zja,Cja,qN,rN,Aja,Bja,Jja,Eja,Hja,tN,Ija,Fja,Kja,Gja,Mja,sN,Oja,uA,xN,yN,BN,KN,wA,Rja,Rga,Tja,LN,HN,Uja,SN,MN,QE,DN,VN,UN,TN,DE,WN,YN,vA,RN,$N,vN,QN,Pja,CN,eO,fO,Xja,IE,Yja,GN,Pga,dO,fF,HF,EN,XN,hO,gO,jO,iO,GE,Zja,aO,uN,$ja,lO,NN,wN,AN,ME,mO,IN,nO,aF,oO,pO,qO,PN,rO,EE,cO,bO,Sja,hka,cka,bka,jka,BO,CO,HO,GO,kka,FO,EO,xO,KO,LO,MO,
NO,fka,gka,VO,UO,SO,AO,YO,zO,ZO,$O,bP,PO,QO,OO,eP,fP,IO,qka,rka,gP,XO,hP,iP,jP,RO,lka,dP,cP,kP,CA,mP,WO,nP,pP,qP,rP,sP,eka,aP,tP,dka,uP,vP,GG,aa,ka,ia,Ma,Ka,Ta,Ua;ba=function(a){return function(){return aa[a].apply(this,arguments)}};
g.da=function(a,b){return aa[a]=b};
ea=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
fa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
la=function(a,b){if(b)a:{var c=ia;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ka(c,a,{configurable:!0,writable:!0,value:b})}};
ma=function(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a};
g.u=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}};
na=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.oa=function(a){return a instanceof Array?a:na(g.u(a))};
g.w=function(a,b){a.prototype=pa(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.bf=b.prototype};
sa=function(){this.G=!1;this.B=null;this.l=void 0;this.i=1;this.C=this.D=0;this.N=this.u=null};
ta=function(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0};
ua=function(a,b){a.u={by:b,fz:!0};a.i=a.D||a.C};
x=function(a,b,c){a.i=c;return{value:b}};
va=function(a,b,c){a.D=b;void 0!=c&&(a.C=c)};
wa=function(a,b){a.i=b;a.D=0};
xa=function(a){a.D=0;var b=a.u.by;a.u=null;return b};
ya=function(a){this.i=new sa;this.l=a};
Ba=function(a,b){ta(a.i);var c=a.i.B;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Aa(a)};
za=function(a,b,c,d){try{var e=b.call(a.i.B,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.G=!1,e;var f=e.value}catch(h){return a.i.B=null,ua(a.i,h),Aa(a)}a.i.B=null;d.call(a.i,f);return Aa(a)};
Aa=function(a){for(;a.i.i;)try{var b=a.l(a.i);if(b)return a.i.G=!1,{value:b.value,done:!1}}catch(c){a.i.l=void 0,ua(a.i,c)}a.i.G=!1;if(a.i.u){b=a.i.u;a.i.u=null;if(b.fz)throw b.by;return{value:b.return,done:!0}}return{value:void 0,done:!0}};
Ca=function(a){this.next=function(b){ta(a.i);a.i.B?b=za(a,a.i.B.next,b,a.i.I):(a.i.I(b),b=Aa(a));return b};
this.throw=function(b){ta(a.i);a.i.B?b=za(a,a.i.B["throw"],b,a.i.I):(ua(a.i,b),b=Aa(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}};
A=function(a,b){b=new Ca(new ya(b));ra&&a.prototype&&ra(b,a.prototype);return b};
Da=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
Ea=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{Py:e,oB:f}}return{Py:-1,oB:void 0}};
Fa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
Ga=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e};
Ha=function(a){return a?a:Array.prototype.fill};
g.Ia=function(a,b,c){a=a.split(".");c=c||g.B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
La=function(a){if(a&&a!=g.B)return Ja(a.document);null===Ka&&(Ka=Ja(g.B.document));return Ka};
Ja=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ma.test(a)?a:""};
g.Na=function(a,b){a=a.split(".");b=b||g.B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b};
g.Oa=function(){};
g.Pa=function(a){a.Qt=void 0;a.getInstance=function(){return a.Qt?a.Qt:a.Qt=new a}};
Qa=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};
g.Ra=function(a){var b=Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Sa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Va=function(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)};
Wa=function(a,b,c){return a.call.apply(a.bind,arguments)};
Xa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.Ya=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.Ya=Wa:g.Ya=Xa;return g.Ya.apply(null,arguments)};
g.Za=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.$a=function(a,b){for(var c in b)a[c]=b[c]};
g.ab=function(){return Date.now()};
g.bb=function(a,b){function c(){}
c.prototype=b.prototype;a.bf=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.kf=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)}};
cb=function(a){return a};
g.db=function(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,g.db);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.lD=b)};
eb=function(a,b){var c=g.db.call;a=a.split("%s");for(var d="",e=a.length-1,f=0;f<e;f++)d+=a[f]+(f<b.length?b[f]:"%s");c.call(g.db,this,d+a[e])};
fb=function(){};
gb=function(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.u=!b&&/[?&]ae=1(&|$)/.test(a);this.B=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.l=c}};
g.ib=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.jb=function(a){return a[a.length-1]};
g.lb=function(a,b){b=g.kb(a,b,void 0);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.kb=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.nb=function(a,b,c){var d=a.length,e="string"===typeof a?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};
g.pb=function(a,b){return 0<=ob(a,b)};
g.qb=function(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.tb=function(a,b){b=ob(a,b);var c;(c=0<=b)&&g.sb(a,b);return c};
g.sb=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
ub=function(a,b){b=g.kb(a,b,void 0);0<=b&&g.sb(a,b)};
g.vb=function(a){return Array.prototype.concat.apply([],arguments)};
g.wb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.xb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}};
g.zb=function(a,b,c,d){Array.prototype.splice.apply(a,yb(arguments,1))};
yb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
g.Db=function(a,b,c){return Bb(a,c||Cb,!1,b)};
Eb=function(a,b){return Bb(a,b,!0,void 0,void 0)};
Bb=function(a,b,c,d,e){for(var f=0,h=a.length,l;f<h;){var m=f+(h-f>>>1),n=void 0;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(h=m,l=!n)}return l?f:-f-1};
g.Fb=function(a,b){a.sort(b||Cb)};
Gb=function(a,b){var c=Cb;g.Fb(a,function(d,e){return c(b(d),b(e))})};
Ib=function(a,b){if(!g.Ra(a)||!g.Ra(b)||a.length!=b.length)return!1;for(var c=a.length,d=Hb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
Cb=function(a,b){return a>b?1:a<b?-1:0};
Hb=function(a,b){return a===b};
Jb=function(a,b,c){c=g.Db(a,b,c);0>c&&g.zb(a,-(c+1),0,b)};
g.Kb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Lb=function(a,b){var c={},d;for(d in a)b.call(void 0,a[d],d,a)&&(c[d]=a[d]);return c};
Mb=function(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c};
g.Nb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
g.Ob=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
Qb=function(a){for(var b in a)return b};
Rb=function(a){for(var b in a)return a[b]};
Sb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.Tb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Ub=function(a,b){return null!==a&&b in a};
g.Vb=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
g.Wb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
Xb=function(a,b){return(b=g.Wb(a,b,void 0))&&a[b]};
g.$b=function(a){for(var b in a)return!1;return!0};
g.ac=function(a){for(var b in a)delete a[b]};
g.bc=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.cc=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.dc=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ec=function(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=g.ec(a[c]);return b};
g.gc=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fc.length;f++)c=fc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.hc=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};
jc=function(){if(void 0===ic){var a=null,b=g.B.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:cb,createScript:cb,createScriptURL:cb})}catch(c){g.B.console&&g.B.console.error(c.message)}ic=a}else ic=a}return ic};
g.mc=function(a,b){this.i=a===kc&&b||"";this.l=lc};
g.nc=function(a){return a instanceof g.mc&&a.constructor===g.mc&&a.l===lc?a.i:"type_error:Const"};
g.oc=function(a){return new g.mc(kc,a)};
qc=function(a){this.i=pc===pc?a:"";this.Ig=!0};
sc=function(a,b){this.i=b===rc?a:""};
tc=function(a){return a instanceof sc&&a.constructor===sc?a.i:"type_error:TrustedResourceUrl"};
g.uc=function(a){var b=jc();a=b?b.createScriptURL(a):a;return new sc(a,rc)};
g.vc=function(a,b){return 0==a.lastIndexOf(b,0)};
g.zc=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ac=function(a){return/^[\s\xa0]*$/.test(a)};
Ic=function(a,b){if(b)a=a.replace(Bc,"&amp;").replace(Cc,"&lt;").replace(Dc,"&gt;").replace(Ec,"&quot;").replace(Fc,"&#39;").replace(Gc,"&#0;");else{if(!Hc.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Bc,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Cc,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Dc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ec,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Fc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Gc,"&#0;"))}return a};
g.Jc=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.Nc=function(a,b){var c=0;a=(0,g.Lc)(String(a)).split(".");b=(0,g.Lc)(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=Mc(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||Mc(0==f[2].length,0==h[2].length)||Mc(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c};
Mc=function(a,b){return a<b?-1:a>b?1:0};
Pc=function(a,b){this.i=b===Oc?a:""};
g.Qc=function(a){return a instanceof Pc&&a.constructor===Pc?a.i:"type_error:SafeUrl"};
g.Uc=function(a){if(a instanceof Pc)return a;a="object"==typeof a&&a.Ig?a.Bf():String(a);if(Rc.test(a))a=new Pc(a,Oc);else{a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Sc);a=b&&Tc.test(b[1])?new Pc(a,Oc):null}return a};
Vc=function(a){if(a instanceof Pc)return a;a="object"==typeof a&&a.Ig?a.Bf():String(a);Rc.test(a)||(a="about:invalid#zClosurez");return new Pc(a,Oc)};
g.Xc=function(a,b){this.i=b===g.Wc?a:""};
g.Yc=function(a){return a instanceof g.Xc&&a.constructor===g.Xc?a.i:"type_error:SafeStyle"};
g.bd=function(a){var b="",c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d=Array.isArray(d)?g.Zc(d,$c).join(" "):$c(d),b+=c+":"+d+";")}return b?new g.Xc(b,g.Wc):g.ad};
$c=function(a){if(a instanceof Pc)return'url("'+g.Qc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof g.mc?g.nc(a):cd(String(a));if(/[{;}]/.test(a))throw new eb("Value does not allow [{;}], got: %s.",[a]);return a};
cd=function(a){var b=a.replace(dd,"$1").replace(dd,"$1").replace(ed,"url");if(fd.test(b)){if(gd.test(a))return"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c||!hd(a))return"zClosurez"}else return"zClosurez";return kd(a)};
hd=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};
kd=function(a){return a.replace(ed,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,l,m){f=l;return m});
b=(g.Uc(d)||g.ld).Bf();return c+f+b+f+e})};
g.nd=function(a){return-1!=g.md.indexOf(a)};
od=function(){return g.nd("Firefox")||g.nd("FxiOS")};
g.qd=function(){return g.nd("Safari")&&!(pd()||g.nd("Coast")||g.nd("Opera")||g.nd("Edge")||g.nd("Edg/")||g.nd("OPR")||od()||g.nd("Silk")||g.nd("Android"))};
pd=function(){return(g.nd("Chrome")||g.nd("CriOS"))&&!g.nd("Edge")};
sd=function(a,b,c){this.i=c===rd?a:"";this.l=b};
td=function(a){return a instanceof sd&&a.constructor===sd?a.i:"type_error:SafeHtml"};
vd=function(a){if(a instanceof sd)return a;var b="object"==typeof a,c=null;b&&a.Ot&&(c=a.Dl());return ud(Ic(b&&a.Ig?a.Bf():String(a)),c)};
yd=function(a){function b(f){Array.isArray(f)?g.wd(f,b):(f=vd(f),e.push(td(f).toString()),f=f.Dl(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=vd(xd),d=c.Dl(),e=[];g.wd(a,b);return ud(e.join(td(c).toString()),d)};
Ad=function(a){return yd(Array.prototype.slice.call(arguments))};
ud=function(a,b){var c=jc();a=c?c.createHTML(a):a;return new sd(a,b,rd)};
Bd=function(a,b){g.nc(a);g.nc(a);return ud(b,null)};
g.Cd=function(a,b){b=b instanceof Pc?b:Vc(b);a.href=g.Qc(b)};
g.Dd=function(a,b){a.src=tc(b);(b=La(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)};
g.Ed=function(a,b,c){return a.parseFromString(td(b),c)};
Fd=function(a){return encodeURIComponent(String(a))};
Gd=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.Hd=function(a){return a=Ic(a,void 0)};
g.Id=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Jd=function(a){var b=Number(a);return 0==b&&g.Ac(a)?NaN:b};
Kd=function(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};
Ld=function(a){return a.replace(/(^|[\s]+)([a-z])/g,function(b,c,d){return c+d.toUpperCase()})};
g.Md=function(a,b,c,d,e,f,h){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);h&&(l+="#"+h);return l};
Pd=function(a){return a?decodeURI(a):a};
Rd=function(a,b){return b.match(g.Qd)[a]||null};
g.Sd=function(a){return Pd(Rd(3,a))};
g.Td=function(a){a=a.match(g.Qd);return g.Md(a[1],null,a[3],a[4])};
Ud=function(a){a=a.match(g.Qd);return g.Md(null,null,null,null,a[5],a[6],a[7])};
g.Vd=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?Gd(e):"")}}};
Wd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
Xd=function(a,b){return b?a?a+"&"+b:b:a};
Yd=function(a,b){if(!b)return a;a=Wd(a);a[1]=Xd(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]};
Zd=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+Fd(b)))};
$d=function(a){var b=[],c;for(c in a)Zd(c,a[c],b);return b.join("&")};
g.ae=function(a,b){b=$d(b);return Yd(a,b)};
g.be=function(a,b,c){c=null!=c?"="+Fd(c):"";return Yd(a,b+c)};
ce=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
ee=function(a,b){var c=a.search(de),d=ce(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return Gd(a.substr(d,e-d))};
ge=function(a,b){for(var c=a.search(de),d=0,e,f=[];0<=(e=ce(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(fe,"$1")};
he=function(a,b,c){return g.be(ge(a,b),b,c)};
ie=function(a,b){a=Wd(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});
a[1]=Xd(d.join("&"),$d(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};
D=function(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(m){try{l(b.next(m))}catch(n){e(n)}}
function h(m){try{l(b["throw"](m))}catch(n){e(n)}}
function l(m){m.done?d(m.value):(new c(function(n){n(m.value)})).then(f,h)}
l((b=b.apply(a,void 0)).next())})};
g.je=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var h=a[c++],l=a[c++];e=((e&7)<<18|(f&63)<<12|(h&63)<<6|l&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],h=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|h&63)}return b.join("")};
le=function(a,b,c){this.l=null;this.i=this.u=this.B=0;this.C=!1;a&&ke(this,a,b,c)};
ne=function(a,b,c){if(me.length){var d=me.pop();a&&ke(d,a,b,c);return d}return new le(a,b,c)};
ke=function(a,b,c,d){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?oe(b):b instanceof Uint8Array?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(0);a.l=b;a.B=void 0!==c?c:0;a.u=void 0!==d?a.B+d:a.l.length;a.i=a.B};
pe=function(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=a.l[a.i++],c|=(b&127)<<7*e;128<=b&&(b=a.l[a.i++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=a.l[a.i++],d|=(b&127)<<7*e+3;if(128>b){a=c>>>0;b=d>>>0;if(d=b&2147483648)a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0);a=4294967296*b+(a>>>0);return d?-a:a}a.C=!0};
qe=function(a){var b=a.l;var c=b[a.i+0];var d=c&127;if(128>c)return a.i+=1,d;c=b[a.i+1];d|=(c&127)<<7;if(128>c)return a.i+=2,d;c=b[a.i+2];d|=(c&127)<<14;if(128>c)return a.i+=3,d;c=b[a.i+3];d|=(c&127)<<21;if(128>c)return a.i+=4,d;c=b[a.i+4];d|=(c&15)<<28;if(128>c)return a.i+=5,d>>>0;a.i+=5;128<=b[a.i++]&&128<=b[a.i++]&&128<=b[a.i++]&&128<=b[a.i++]&&a.i++;return d};
re=function(a){this.i=ne(a,void 0,void 0);this.C=this.i.i;this.l=this.u=-1;this.B=!1};
ue=function(a){var b=a.i;(b=b.i==b.u)||(b=a.B)||(b=a.i,b=b.C||0>b.i||b.i>b.u);if(b)return!1;a.C=a.i.i;b=qe(a.i);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.B=!0,!1;a.u=b>>>3;a.l=c;return!0};
ve=function(a){switch(a.l){case 0:if(0!=a.l)ve(a);else{for(a=a.i;a.l[a.i]&128;)a.i++;a.i++}break;case 1:1!=a.l?ve(a):a.i.advance(8);break;case 2:if(2!=a.l)ve(a);else{var b=qe(a.i);a.i.advance(b)}break;case 5:5!=a.l?ve(a):a.i.advance(4);break;case 3:b=a.u;do{if(!ue(a)){a.B=!0;break}if(4==a.l){a.u!=b&&(a.B=!0);break}ve(a)}while(1);break;default:a.B=!0}};
we=function(a){var b=qe(a.i);a=a.i;var c=a.l,d=a.i,e=d+b;b=[];for(var f="";d<e;){var h=c[d++];if(128>h)b.push(h);else if(192>h)continue;else if(224>h){var l=c[d++];b.push((h&31)<<6|l&63)}else if(240>h){l=c[d++];var m=c[d++];b.push((h&15)<<12|(l&63)<<6|m&63)}else if(248>h){l=c[d++];m=c[d++];var n=c[d++];h=(h&7)<<18|(l&63)<<12|(m&63)<<6|n&63;h-=65536;b.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=b.length&&(f+=String.fromCharCode.apply(null,b),b.length=0)}c=f;if(8192>=b.length)b=String.fromCharCode.apply(null,
b);else{e="";for(f=0;f<b.length;f+=8192)h=yb(b,f,f+8192),e+=String.fromCharCode.apply(null,h);b=e}a.i=d;return c+b};
xe=function(a){var b=qe(a.i);a=a.i;if(0>b||a.i+b>a.l.length)a.C=!0,b=new Uint8Array(0);else{var c=a.l.subarray(a.i,a.i+b);a.i+=b;b=c}return b};
ye=function(){return g.nd("iPhone")&&!g.nd("iPod")&&!g.nd("iPad")};
g.ze=function(){return ye()||g.nd("iPad")||g.nd("iPod")};
Ae=function(a){Ae[" "](a);return a};
g.Be=function(a,b){try{return Ae(a[b]),!0}catch(c){}return!1};
Ce=function(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)};
De=function(){var a=g.B.document;return a?a.documentMode:void 0};
g.Ge=function(a){return Ce(Ee,a,function(){return 0<=g.Nc(Fe,a)})};
g.Je=function(a,b){void 0===b&&(b=0);He();b=Ie[b];for(var c=[],d=0;d<a.length;d+=3){var e=a[d],f=d+1<a.length,h=f?a[d+1]:0,l=d+2<a.length,m=l?a[d+2]:0,n=e>>2;e=(e&3)<<4|h>>4;h=(h&15)<<2|m>>6;m&=63;l||(m=64,f||(h=64));c.push(b[n],b[e],b[h]||"",b[m]||"")}return c.join("")};
g.Ke=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return g.Je(b,3)};
Me=function(a){var b=[];Le(a,function(c){b.push(c)});
return b};
oe=function(a){!g.Ne||g.Ge("10");var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Le(a,function(f){d[e++]=f});
return d.subarray(0,e)};
Le=function(a,b){function c(m){for(;d<a.length;){var n=a.charAt(d++),p=Oe[n];if(null!=p)return p;if(!g.Ac(n))throw Error("Unknown base64 encoding at char: "+n);}return m}
He();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=l&&b(h<<6&192|l))}};
He=function(){if(!Oe){Oe={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ie[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Oe[f]&&(Oe[f]=e)}}}};
g.Pe=function(){};
g.Xe=function(a,b,c,d,e,f){a.u=null;b||(b=c?[c]:[]);a.G=c?String(c):void 0;a.B=0===c?-1:0;a.i=b;a:{c=a.i.length;b=-1;if(c&&(b=c-1,c=a.i[b],!(null===c||"object"!=typeof c||Array.isArray(c)||Se&&c instanceof Uint8Array))){a.C=b-a.B;a.l=c;break a}-1<d?(a.C=Math.max(d,b+1-a.B),a.l=null):a.C=Number.MAX_VALUE}a.D={};if(a.I=e)for(d=0;d<e.length;d++)b=e[d],b<a.C?(b+=a.B,a.i[b]=a.i[b]||Te):(g.Ue(a),a.l[b]=a.l[b]||Te);if(f&&f.length)for(d=0;d<f.length;d++){b=e=void 0;c=a;for(var h=f[d],l=0;l<h.length;l++){var m=
h[l],n=g.Ve(c,m);null!=n&&(b=m,e=n,g.We(c,m,void 0))}b&&g.We(c,b,e)}};
g.Ue=function(a){var b=a.C+a.B;a.i[b]||(a.l=a.i[b]={})};
g.Ve=function(a,b){if(b<a.C){b+=a.B;var c=a.i[b];return c!==Te?c:a.i[b]=[]}if(a.l)return c=a.l[b],c===Te?a.l[b]=[]:c};
Ye=function(a){return null==a||a instanceof Uint8Array?a:"string"===typeof a?oe(a):null};
g.We=function(a,b,c){b<a.C?a.i[b+a.B]=c:(g.Ue(a),a.l[b]=c)};
Ze=function(a){if(a.u)for(var b in a.u){var c=a.u[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&Ze(c[d]);else c&&Ze(c)}return a.i};
af=function(a){var b=$e(Ze(a)),c=g.Xe;g.Xe=function(d,e,f,h,l,m){c(d,b,f,h,l,m);g.Xe=c};
a=new a.constructor(b);g.Xe!==c&&(g.Xe=c);return a};
$e=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?$e(d):d)}return b}if(Se&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?$e(d):d);return b};
g.bf=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.cf=function(a,b){return 1E-6>=Math.abs(a-b)};
g.df=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.ef=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.ff=function(a,b){this.width=a;this.height=b};
gf=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
hf=function(a){return a.width*a.height};
jf=function(a){var b=document;return"string"===typeof a?b.getElementById(a):a};
g.lf=function(a,b){var c=b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;a=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):g.kf(c,"*",a,b)[0]||null}return a||null};
g.kf=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&g.pb(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a};
g.nf=function(a,b){g.Kb(b,function(c,d){c&&"object"==typeof c&&c.Ig&&(c=c.Bf());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mf.hasOwnProperty(d)?a.setAttribute(mf[d],c):g.vc(d,"aria-")||g.vc(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.rf=function(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!of&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',g.Hd(h.name),'"');if(h.type){f.push(' type="',g.Hd(h.type),'"');var l={};g.gc(l,h);delete l.type;h=l}f.push(">");f=f.join("")}f=g.pf(e,f);h&&("string"===typeof h?f.className=h:Array.isArray(h)?f.className=h.join(" "):g.nf(f,h));2<d.length&&g.qf(e,f,d,2);return f};
g.qf=function(a,b,c,d){function e(l){l&&b.appendChild("string"===typeof l?a.createTextNode(l):l)}
for(;d<c.length;d++){var f=c[d];if(!g.Ra(f)||g.Sa(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(g.Sa(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){h="function"==typeof f.item;break a}}h=!1}g.wd(h?g.wb(f):f,e)}}};
g.sf=function(a){return g.pf(document,a)};
g.pf=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.tf=function(a){return document.createTextNode(String(a))};
g.uf=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.vf=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.wf=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.Bf=function(a){var b;if(Af&&!(g.Ne&&g.Ge("9")&&!g.Ge("10")&&g.B.SVGElement&&a instanceof g.B.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.Sa(b)&&1==b.nodeType?b:null};
g.Cf=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
g.Df=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.Ef=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{g.uf(a);var c=g.Df(a);a.appendChild(c.createTextNode(String(b)))}};
g.Hf=function(a){var b;"A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?b=!a.disabled&&(!Ff(a)||Gf(a)):b=Ff(a)&&Gf(a);if(b&&g.Ne){var c;"function"!==typeof a.getBoundingClientRect||g.Ne&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
Ff=function(a){return g.Ne&&!g.Ge("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
Gf=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};
g.If=function(a,b,c){a&&!c&&(a=a.parentNode);for(c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null};
g.Jf=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
aaa=function(){var a=[];g.Jf(Kf,function(b){a.push(b)});
return a};
caa=function(){var a=g.sf("IFRAME"),b={};g.wd(baa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.Lf=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
Mf=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.Of=function(a){Nf();return ud(a,null)};
Pf=function(a){Nf();return g.uc(a)};
g.Rf=function(a,b,c){if("string"===typeof b)(b=Qf(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Qf(c,d);f&&(c.style[f]=e)}};
Qf=function(a,b){var c=Sf[b];if(!c){var d=Kd(b);c=d;void 0===a.style[d]&&(d=(g.Tf?"Webkit":g.Uf?"Moz":g.Ne?"ms":Vf?"O":null)+Ld(d),void 0!==a.style[d]&&(c=d));Sf[b]=c}return c};
g.Wf=function(a,b){var c=a.style[Kd(b)];return"undefined"!==typeof c?c:a.style[Qf(a,b)]||""};
g.Xf=function(a,b){var c=g.Df(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""};
g.Yf=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}};
g.$f=function(a,b){a=Zf(a);b=Zf(b);return new g.df(a.x-b.x,a.y-b.y)};
g.ag=function(a){a=g.Yf(a);return new g.df(a.left,a.top)};
Zf=function(a){if(1==a.nodeType)return g.ag(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.df(a.clientX,a.clientY)};
cg=function(a,b,c){if(b instanceof g.ff)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=bg(b,!0);a.style.height=bg(c,!0)};
bg=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.dg=function(a){var b=daa,c;(c=g.Xf(a,"display"))||(c=a.currentStyle?a.currentStyle.display:null);if("none"!=(c||a.style&&a.style.display))return b(a);c=a.style;var d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
daa=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.Tf&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=g.Yf(a),new g.ff(a.right-a.left,a.bottom-a.top)):new g.ff(b,c)};
g.hg=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{if(void 0===c?0:c)var d=(new g.ff(b.innerWidth,b.innerHeight)).round();else{var e=(b||window).document,f="CSS1Compat"==e.compatMode?e.documentElement:e.body;d=(new g.ff(f.clientWidth,f.clientHeight)).round()}return d}catch(h){return new g.ff(-12245933,-12245933)}};
ig=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a};
eaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=n=0}
function b(q){for(var r=h,t=0;64>t;t+=4)r[t/4]=q[t]<<24|q[t+1]<<16|q[t+2]<<8|q[t+3];for(t=16;80>t;t++)q=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(q<<1|q>>>31)&4294967295;q=e[0];var v=e[1],y=e[2],C=e[3],z=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var E=C^v&(y^C);var O=1518500249}else E=v^y^C,O=1859775393;else 60>t?(E=v&y|C&(v|y),O=2400959708):(E=v^y^C,O=3395469782);E=((q<<5|q>>>27)&4294967295)+E+z+O+r[t]&4294967295;z=C;C=y;y=(v<<30|v>>>2)&4294967295;v=q;q=E}e[0]=e[0]+q&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+C&4294967295;e[4]=e[4]+z&4294967295}
function c(q,r){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var t=[],v=0,y=q.length;v<y;++v)t.push(q.charCodeAt(v));q=t}r||(r=q.length);t=0;if(0==n)for(;t+64<r;)b(q.slice(t,t+64)),t+=64,p+=64;for(;t<r;)if(f[n++]=q[t++],p++,64==n)for(n=0,b(f);t+64<r;)b(q.slice(t,t+64)),t+=64,p+=64}
function d(){var q=[],r=8*p;56>n?c(l,56-n):c(l,64-(n-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var v=24;0<=v;v-=8)q[r++]=e[t]>>v&255;return q}
for(var e=[],f=[],h=[],l=[128],m=1;64>m;++m)l[m]=0;var n,p;a();return{reset:a,update:c,digest:d,xD:function(){for(var q=d(),r="",t=0;t<q.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(q[t]/16))+"0123456789ABCDEF".charAt(q[t]%16);return r}}};
jg=function(a,b,c){var d=String(g.B.location.href);return d&&a&&b?[b,faa(ig(d),a,c||null)].join(" "):null};
faa=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],g.wd(d,function(l){e.push(l)}),kg(e.join(" "));
var f=[],h=[];g.wd(c,function(l){h.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];g.wd(d,function(l){e.push(l)});
a=kg(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")};
kg=function(a){var b=eaa();b.update(a);return b.xD().toLowerCase()};
lg=function(a){this.i=a||{cookie:""}};
mg=function(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Lc)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
ng=function(a){return!!gaa.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)};
og=function(a,b,c,d){(a=g.B[a])||(a=(new lg(document)).get(b));return a?jg(a,c,d):null};
pg=function(){var a=[];var b=void 0===b?!1:b;var c=ig(String(g.B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=g.B.__SAPISID||g.B.__APISID||g.B.__3PSAPISID||g.B.__OVERRIDE_SID;ng(e)&&(f=f||g.B.__1PSAPISID);if(f)e=!0;else{var h=new lg(document);f=h.get("SAPISID")||h.get("APISID")||h.get("__Secure-3PAPISID")||h.get("SID");ng(e)&&(f=f||h.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?g.B.__SAPISID:g.B.__APISID,
e||(e=new lg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?jg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ng(b)&&((b=og("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=og("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")};
qg=function(){this.i=[];this.l=-1};
haa=function(a){-1==a.l&&(a.l=g.rg(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.l};
g.sg=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
g.tg=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.ug=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.Ra(d)?g.ug.apply(null,d):g.tg(d)}};
g.F=function(){this.vf=this.vf;this.hf=this.hf};
g.G=function(a,b){g.vg(a,g.Za(g.tg,b))};
g.vg=function(a,b){a.vf?b():(a.hf||(a.hf=[]),a.hf.push(b))};
iaa=function(a){var b=g.Na("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.B.$googDebugFname||b}catch(h){e="Not available",c=!0}b=wg(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;
if(null==c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,xg[c])c=xg[c];else{c=String(c);if(!xg[c]){var f=/function\s+([^\(]+)/m.exec(c);xg[c]=f?f[1]:"[Anonymous]"}c=xg[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}};
wg=function(a,b){b||(b={});b[yg(a)]=!0;var c=a.stack||"";(a=a.lD)&&!b[yg(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=wg(a,b));return c};
yg=function(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack};
zg=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.l=!1};
Ag=function(a,b){zg.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)};
kaa=function(a,b,c,d,e){this.listener=a;this.i=null;this.src=b;this.type=c;this.capture=!!d;this.Rc=e;this.key=++jaa;this.Go=this.rp=!1};
Bg=function(a){a.Go=!0;a.listener=null;a.i=null;a.src=null;a.Rc=null};
Cg=function(a){this.src=a;this.listeners={};this.i=0};
Dg=function(a,b){var c=b.type;c in a.listeners&&g.tb(a.listeners[c],b)&&(Bg(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))};
Eg=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Go&&f.listener==b&&f.capture==!!c&&f.Rc==d)return e}return-1};
g.Gg=function(a,b,c,d,e){if(d&&d.once)return Fg(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.Gg(a,b[f],c,d,e);return null}c=Hg(c);return a&&a[Ig]?a.Cd(b,c,g.Sa(d)?!!d.capture:!!d,e):Jg(a,b,c,!1,d,e)};
Jg=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=g.Sa(e)?!!e.capture:!!e,l=Kg(a);l||(a[Lg]=l=new Cg(a));c=l.add(b,c,d,h,f);if(c.i)return c;d=laa();c.i=d;d.src=a;d.listener=c;if(a.addEventListener)maa||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Mg(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ng++;return c};
laa=function(){function a(c){return b.call(a.src,a.listener,c)}
var b=naa;return a};
Fg=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Fg(a,b[f],c,d,e);return null}c=Hg(c);return a&&a[Ig]?a.Ci.add(String(b),c,!0,g.Sa(d)?!!d.capture:!!d,e):Jg(a,b,c,!0,d,e)};
Og=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Og(a,b[f],c,d,e);else(d=g.Sa(d)?!!d.capture:!!d,c=Hg(c),a&&a[Ig])?a.Fc(b,c,d,e):a&&(a=Kg(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Eg(b,c,d,e)),(c=-1<a?b[a]:null)&&g.Pg(c))};
g.Pg=function(a){if("number"!==typeof a&&a&&!a.Go){var b=a.src;if(b&&b[Ig])Dg(b.Ci,a);else{var c=a.type,d=a.i;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Mg(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ng--;(c=Kg(b))?(Dg(c,a),0==c.i&&(c.src=null,b[Lg]=null)):Bg(a)}}};
Mg=function(a){return a in Qg?Qg[a]:Qg[a]="on"+a};
naa=function(a,b){if(a.Go)a=!0;else{b=new Ag(b,this);var c=a.listener,d=a.Rc||a.src;a.rp&&g.Pg(a);a=c.call(d,b)}return a};
Kg=function(a){a=a[Lg];return a instanceof Cg?a:null};
Hg=function(a){if("function"===typeof a)return a;a[Rg]||(a[Rg]=function(b){return a.handleEvent(b)});
return a[Rg]};
g.Sg=function(){g.F.call(this);this.Ci=new Cg(this);this.G=this;this.B=null};
Tg=function(a,b,c,d){b=a.Ci.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Go&&h.capture==c){var l=h.listener,m=h.Rc||h.src;h.rp&&Dg(a.Ci,h);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
Ug=function(a,b){this.u=a;this.B=b;this.l=0;this.i=null};
Vg=function(a,b){a.B(b);100>a.l&&(a.l++,b.next=a.i,a.i=b)};
g.Xg=function(a){"function"!==typeof g.B.setImmediate||g.B.Window&&g.B.Window.prototype&&!g.nd("Edge")&&g.B.Window.prototype.setImmediate==g.B.setImmediate?(Wg||(Wg=oaa()),Wg(a)):g.B.setImmediate(a)};
oaa=function(){var a=g.B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.nd("Presto")&&(a=function(){var e=g.sf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var h="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.Ya)(function(m){if(("*"==l||m.origin==l)&&m.data==h)this.port1.onmessage()},
this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,l)}}});
if("undefined"!==typeof a&&!g.nd("Trident")&&!g.nd("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Fx;c.Fx=null;e()}};
return function(e){d.next={Fx:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.B.setTimeout(e,0)}};
Yg=function(a){g.B.setTimeout(function(){throw a;},0)};
Zg=function(){this.l=this.i=null};
fh=function(){this.next=this.scope=this.i=null};
g.jh=function(a,b){gh||paa();hh||(gh(),hh=!0);ih.add(a,b)};
paa=function(){if(g.B.Promise&&g.B.Promise.resolve){var a=g.B.Promise.resolve(void 0);gh=function(){a.then(kh)}}else gh=function(){g.Xg(kh)}};
kh=function(){for(var a;a=ih.remove();){try{a.i.call(a.scope)}catch(b){Yg(b)}Vg(lh,a)}hh=!1};
mh=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.oh=function(a){this.dc=0;this.ej=void 0;this.ql=this.wi=this.zk=null;this.Tp=this.ct=!1;if(a!=g.Oa)try{var b=this;a.call(void 0,function(c){nh(b,2,c)},function(c){nh(b,3,c)})}catch(c){nh(this,3,c)}};
ph=function(){this.next=this.context=this.onRejected=this.l=this.i=null;this.u=!1};
g.rh=function(a,b,c){var d=qh.get();d.l=a;d.onRejected=b;d.context=c;return d};
sh=function(a){if(a instanceof g.oh)return a;var b=new g.oh(g.Oa);nh(b,2,a);return b};
g.th=function(a){return new g.oh(function(b,c){c(a)})};
g.vh=function(a,b,c){uh(a,b,c,null)||g.jh(g.Za(b,a))};
qaa=function(a){return new g.oh(function(b,c){var d=a.length,e=[];if(d)for(var f=function(n,p){d--;e[n]=p;0==d&&b(e)},h=function(n){c(n)},l=0,m;l<a.length;l++)m=a[l],g.vh(m,g.Za(f,l),h);
else b(e)})};
g.xh=function(a,b){return wh(a,null,b,void 0)};
yh=function(a,b){if(0==a.dc)if(a.zk){var c=a.zk;if(c.wi){for(var d=0,e=null,f=null,h=c.wi;h&&(h.u||(d++,h.i==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.dc&&1==d?yh(c,b):(f?(d=f,d.next==c.ql&&(c.ql=d),d.next=d.next.next):zh(c),Ah(c,e,3,b)))}a.zk=null}else nh(a,3,b)};
g.Ch=function(a,b){a.wi||2!=a.dc&&3!=a.dc||Bh(a);a.ql?a.ql.next=b:a.wi=b;a.ql=b};
wh=function(a,b,c,d){var e=g.rh(null,null,null);e.i=new g.oh(function(f,h){e.l=b?function(l){try{var m=b.call(d,l);f(m)}catch(n){h(n)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.Dh?h(l):f(m)}catch(n){h(n)}}:h});
e.i.zk=a;g.Ch(a,e);return e.i};
nh=function(a,b,c){0==a.dc&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.dc=1,uh(c,a.dH,a.eH,a)||(a.ej=c,a.dc=b,a.zk=null,Bh(a),3!=b||c instanceof g.Dh||raa(a,c)))};
uh=function(a,b,c,d){if(a instanceof g.oh)return g.Ch(a,g.rh(b||g.Oa,c||null,d)),!0;if(mh(a))return a.then(b,c,d),!0;if(g.Sa(a))try{var e=a.then;if("function"===typeof e)return saa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
saa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function h(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,h,f)}catch(m){f(m)}};
Bh=function(a){a.ct||(a.ct=!0,g.jh(a.DD,a))};
zh=function(a){var b=null;a.wi&&(b=a.wi,a.wi=b.next,b.next=null);a.wi||(a.ql=null);return b};
Ah=function(a,b,c,d){if(3==c&&b.onRejected&&!b.u)for(;a&&a.Tp;a=a.zk)a.Tp=!1;if(b.i)b.i.zk=null,Eh(b,c,d);else try{b.u?b.l.call(b.context):Eh(b,c,d)}catch(e){Fh.call(null,e)}Vg(qh,b)};
Eh=function(a,b,c){2==b?a.l.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
raa=function(a,b){a.Tp=!0;g.jh(function(){a.Tp&&Fh.call(null,b)})};
g.Dh=function(a){g.db.call(this,a)};
g.Gh=function(a,b,c){if("function"===typeof a)c&&(a=(0,g.Ya)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.Ya)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.B.setTimeout(a,b||0)};
g.Hh=function(a,b){var c=null;return g.xh(new g.oh(function(d,e){c=g.Gh(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(d){g.B.clearTimeout(c);
throw d;})};
g.H=function(a,b,c){g.F.call(this);this.i=a;this.Pl=b||0;this.l=c;this.u=(0,g.Ya)(this.jw,this)};
g.Ih=function(a,b){a.isActive()||a.start(b)};
Jh=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
Kh=function(a){return a.classList?a.classList:Jh(a).match(/\S+/g)||[]};
Lh=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};
g.Mh=function(a,b){return a.classList?a.classList.contains(b):g.pb(Kh(a),b)};
g.Nh=function(a,b){if(a.classList)a.classList.add(b);else if(!g.Mh(a,b)){var c=Jh(a);Lh(a,c+(0<c.length?" "+b:b))}};
Oh=function(a,b){if(a.classList)g.wd(b,function(e){g.Nh(a,e)});
else{var c={};g.wd(Kh(a),function(e){c[e]=!0});
g.wd(b,function(e){c[e]=!0});
b="";for(var d in c)b+=0<b.length?" "+d:d;Lh(a,b)}};
g.Qh=function(a,b){a.classList?a.classList.remove(b):g.Mh(a,b)&&Lh(a,g.Ph(Kh(a),function(c){return c!=b}).join(" "))};
taa=function(a,b){a.classList?g.wd(b,function(c){g.Qh(a,c)}):Lh(a,g.Ph(Kh(a),function(c){return!g.pb(b,c)}).join(" "))};
g.Rh=function(a,b,c){c?g.Nh(a,b):g.Qh(a,b)};
Sh=function(){};
Uh=function(a){if(a instanceof Sh)return a;if("function"==typeof a.di)return a.di(!1);if(g.Ra(a)){var b=0,c=new Sh;c.next=function(){for(;;){if(b>=a.length)throw Th;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
uaa=function(a,b){if(g.Ra(a))try{g.wd(a,b,void 0)}catch(c){if(c!==Th)throw c;}else{a=Uh(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Th)throw c;}}};
vaa=function(a){if(g.Ra(a))return g.wb(a);a=Uh(a);var b=[];uaa(a,function(c){b.push(c)});
return b};
Vh=function(a,b){this.l={};this.i=[];this.lj=this.u=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Vh)for(c=a.Ei(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};
Xh=function(a){if(a.u!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Wh(a.l,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.u!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Wh(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}};
Wh=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Yh=function(a,b,c){this.B=a;this.C=b;this.i=this.u=a;this.D=c||0};
g.Zh=function(a){a.i=Math.min(a.C,2*a.i);a.u=Math.min(a.C,a.i+(a.D?Math.round(a.D*(Math.random()-.5)*2*a.i):0));a.l++};
waa=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};
$h=function(a){return(a=a.exec(g.md))?a[1]:""};
ai=function(a){return 0<=g.Nc(xaa,a)};
bi=function(a){g.F.call(this);this.C=1;this.u=[];this.B=0;this.i=[];this.l={};this.D=!!a};
yaa=function(a,b,c){g.jh(function(){a.apply(b,c)})};
g.ci=function(a){this.i=a};
di=function(a){this.i=a};
ei=function(a){this.data=a};
fi=function(a){return void 0===a||a instanceof ei?a:new ei(a)};
gi=function(a){this.i=a};
hi=function(a){this.i=a};
zaa=function(){};
ii=function(){};
ji=function(a){this.i=a};
ki=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a};
li=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.i=a};
oi=function(a,b){this.l=a;this.i=null;if(g.Ne&&!(9<=Number(g.mi))){ni||(ni=new Vh);this.i=ni.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),ni.set(a,this.i));try{this.i.load(this.l)}catch(c){this.i=null}}};
pi=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Aaa[b]})};
ui=function(a){try{a.i.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}};
vi=function(a,b){this.l=a;this.i=b+"::"};
g.wi=function(a){var b=new ki;return b.isAvailable()?a?new vi(b,a):b:null};
xi=function(a,b){this.i=a;this.l=b};
yi=function(a){this.i=[];if(a)a:{if(a instanceof yi){var b=a.Ei();a=a.Ki();if(0>=this.i.length){for(var c=this.i,d=0;d<b.length;d++)c.push(new xi(b[d],a[d]));break a}}else b=g.Tb(a),a=Sb(a);for(d=0;d<b.length;d++){c=this.i;c.push(new xi(b[d],a[d]));c=c.length-1;for(var e=this.i,f=e[c];0<c;){var h=c-1>>1;if(e[h].getKey()>f.getKey())e[c]=e[h],c=h;else break}e[c]=f}}};
zi=function(){yi.call(this)};
g.Ai=function(a,b){this.i=this.G=this.l="";this.B=null;this.u=this.I="";this.D=!1;var c;a instanceof g.Ai?(this.D=void 0!==b?b:a.D,Bi(this,a.l),this.G=a.G,Ci(this,a.i),Di(this,a.B),this.I=a.getPath(),Ei(this,a.C.clone()),this.u=a.u):a&&(c=String(a).match(g.Qd))?(this.D=!!b,Bi(this,c[1]||"",!0),this.G=Fi(c[2]||""),Ci(this,c[3]||"",!0),Di(this,c[4]),this.I=Fi(c[5]||"",!0),Ei(this,c[6]||"",!0),this.u=Fi(c[7]||"")):(this.D=!!b,this.C=new Gi(null,this.D))};
Bi=function(a,b,c){a.l=c?Fi(b,!0):b;a.l&&(a.l=a.l.replace(/:$/,""))};
Ci=function(a,b,c){a.i=c?Fi(b,!0):b};
Di=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null};
Ei=function(a,b,c){b instanceof Gi?(a.C=b,Baa(a.C,a.D)):(c||(b=Hi(b,Caa)),a.C=new Gi(b,a.D))};
Fi=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""};
Hi=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Daa),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
Daa=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
Gi=function(a,b){this.l=this.i=null;this.u=a||null;this.B=!!b};
Ii=function(a){a.i||(a.i=new Vh,a.l=0,a.u&&g.Vd(a.u,function(b,c){a.add(Gd(b),c)}))};
Ki=function(a,b){Ii(a);b=Ji(a,b);return Wh(a.i.l,b)};
Ji=function(a,b){b=String(b);a.B&&(b=b.toLowerCase());return b};
Baa=function(a,b){b&&!a.B&&(Ii(a),a.u=null,a.i.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),0<c.length&&(this.u=null,this.i.set(Ji(this,e),g.wb(c)),this.l=this.l+c.length))},a));
a.B=b};
Li=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return 0===b.length?function(d){return d}:1===b.length?b[0]:b.reduce(function(d,e){return function(f){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];
return d(e.apply(null,g.oa(h)))}})};
Eaa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return function(d){return function(e,f){function h(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");}
e=d(e,f);var l={getState:e.getState,dispatch:function(m,n){for(var p=[],q=1;q<arguments.length;++q)p[q-1]=arguments[q];return h.apply(null,[m].concat(g.oa(p)))}};
f=b.map(function(m){return m(l)});
h=Li.apply(null,g.oa(f))(e.dispatch);return Object.assign(Object.assign({},e),{dispatch:h})}}};
Mi=function(){return Math.random().toString(36).substring(7).split("").join(".")};
Faa=function(a){Object.keys(a).forEach(function(b){var c=a[b];if("undefined"===typeof c(void 0,{type:Ni}))throw Error('Reducer "'+b+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof c(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION"+Mi()}))throw Error('Reducer "'+
b+"\" returned undefined when probed with a random type. Don't try to handle "+(Ni+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'));})};
Oi=function(a,b,c,d){function e(){if(q)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return m}
function f(t){if("function"!==typeof t)throw Error("Expected the listener to be a function.");if(q)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");var v=!0;p===n&&(p=n.slice());p.push(t);return function(){if(v){if(q)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
v=!1;p===n&&(p=n.slice());p.splice(p.indexOf(t),1);n=null}}}
function h(t){if("object"!==typeof t||null===t)var v=!1;else{for(v=t;null!==Object.getPrototypeOf(v);)v=Object.getPrototypeOf(v);v=Object.getPrototypeOf(t)===v}if(!v)throw Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(q)throw Error("Reducers may not dispatch actions.");try{q=!0,m=l(m,t)}finally{q=!1}v=n=p;for(var y=0;y<v.length;y++)(0,v[y])();
return t}
if("function"===typeof b&&"function"===typeof c||"function"===typeof c&&"function"===typeof d)throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");"function"===typeof b&&"undefined"===typeof c&&(c=b,b=void 0);if("undefined"!==typeof c){if("function"!==typeof c)throw Error("Expected the enhancer to be a function.");return c(Oi)(a,b)}if("function"!==typeof a)throw Error("Expected the reducer to be a function.");
var l=a,m=b,n=[],p=n,q=!1;h({type:Ni});a={};var r=(a.dispatch=h,a.subscribe=f,a.getState=e,a.replaceReducer=function(t){if("function"!==typeof t)throw Error("Expected the nextReducer to be a function.");l=t;h({type:Gaa});return r},a[Pi]=function(){var t={};
return t.subscribe=function(v){function y(){v.next&&v.next(e())}
if("object"!==typeof v||null===v)throw new TypeError("Expected the observer to be an object.");y();return{unsubscribe:f(y)}},t[Pi]=function(){return this},t},a);
return r};
g.Qi=function(a){(0,g.Xe)(this,a,0,-1,Haa,null)};
Ri=function(a){(0,g.Xe)(this,a,0,-1,null,null)};
Iaa=function(a,b){for(;ue(b)&&4!=b.l;)switch(b.u){case 1:var c=xe(b);g.We(a,1,c);break;case 2:c=xe(b);g.We(a,2,c);break;case 3:c=xe(b);g.We(a,3,c);break;case 4:c=xe(b);g.We(a,4,c);break;case 5:c=qe(b.i);g.We(a,5,c);break;default:ve(b)}return a};
Jaa=function(a){var b=a.split(""),c=[598177743,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(-e).reverse().forEach(function(f){d.unshift(f)})},
776269217,-286060862,-516363791,-1643036304,318626958,2102664352,null,-761575182,function(d,e){for(e=(e%d.length+d.length)%d.length;e--;)d.unshift(d.pop())},
-1355355138,function(d){d.reverse()},
null,1510625329,-1410017584,b,-984976360,function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
function(d,e){for(var f=64,h=[];++f-h.length-32;)switch(f){case 94:case 95:case 96:break;case 123:f-=76;case 92:case 93:continue;case 58:f=44;case 91:break;case 46:f=95;default:h.push(String.fromCharCode(f))}d.forEach(function(l,m,n){this.push(n[m]=h[(h.indexOf(l)-h.indexOf(this[m])+m-32+f--)%h.length])},e.split(""))},
-1547572176,-161395301,-931516615,861623914,-1059736624,function(d,e){e=(e%d.length+d.length)%d.length;d.splice(e,1)},
1803410648,function(d,e){for(var f=64,h=[];++f-h.length-32;)switch(f){case 58:f=96;continue;case 91:f=44;break;case 65:f=47;continue;case 46:f=153;case 123:f-=58;default:h.push(String.fromCharCode(f))}d.forEach(function(l,m,n){this.push(n[m]=h[(h.indexOf(l)-h.indexOf(this[m])+m-32+f--)%h.length])},e.split(""))},
1692390723,"catch",-1805413948,231801626,2016324995,864430150,1727376901,"sja1mM",b,861623914,-1949889439,function(d,e){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f},
1634669368,963078014,null,function(d,e){for(var f=64,h=[];++f-h.length-32;){switch(f){case 58:f-=14;case 91:case 92:case 93:continue;case 123:f=47;case 94:case 95:case 96:continue;case 46:f=95}h.push(String.fromCharCode(f))}d.forEach(function(l,m,n){this.push(n[m]=h[(h.indexOf(l)-h.indexOf(this[m])+m-32+f--)%h.length])},e.split(""))},
function(d,e){e=(e%d.length+d.length)%d.length;d.splice(0,1,d.splice(e,1,d[0])[0])},
-1611884715,"continue",436794563,b,1191827767,"join",616952453];c[8]=c;c[13]=c;c[42]=c;try{c[10](c[42],c[41]),c[41](c[44],c[34]),c[3](c[44],c[8]),c[46](c[24]),c[46](c[44]),c[38](c[36],c[49]),c[26](c[35],c[38]),c[49](c[23],c[34]),c[12](c[23],c[41]),c[51](c[23]),c[49](c[29],c[48]),c[1](c[45],c[12]),c[48](c[51],c[43]),c[27](c[22]),c[3](c[0],c[35]),c[3](c[34],c[45]),c[50](c[48],c[11]),c[3](c[6],c[2]),c[50](c[48],c[12]),c[41](c[46],c[16]),c[41](c[6],c[18]),c[24](c[29]),c[10](c[3],c[13]),c[41](c[10],c[49]),
c[39](c[30],c[0]),c[15](c[27],c[19]),c[24](c[8],c[12]),c[20](c[48],c[33]),c[10](c[46],c[17]),c[49](c[32],c[24]),c[15](c[12],c[25]),c[35](c[12],c[11]),c[49](c[44],c[39]),c[38](c[9]),c[11](c[47],c[44]),c[2](c[19],c[32]),c[2](c[19],c[33]),c[37](c[42]),c[35](c[32],c[10]),c[35](c[42],c[41]),c[15](c[12],c[45]),c[35](c[42],c[48])}catch(d){return"enhanced_except_AAAAAAAAAAE_"+a}return b.join("")};
Ti=function(a,b,c,d,e){g.Si.set(""+a,b,{nq:c,path:"/",domain:void 0===d?"youtube.com":d,LG:void 0===e?!1:e})};
Kaa=function(){if(!g.Si.isEnabled())return!1;if(!g.Si.isEmpty())return!0;g.Si.set("TESTCOOKIESENABLED","1",{nq:60});if("1"!==g.Si.get("TESTCOOKIESENABLED"))return!1;g.Si.remove("TESTCOOKIESENABLED");return!0};
g.Ui=function(){return g.Si.get("CONSENT","").startsWith("YES+")};
Vi=function(){return g.Na("yt.ads.biscotti.lastId_")||""};
Xi=function(a){var b=arguments;1<b.length?Wi[b[0]]=b[1]:1===b.length&&Object.assign(Wi,b[0])};
g.I=function(a,b){return a in Wi?Wi[a]:b};
Yi=function(a){return g.I(a,void 0)};
Zi=function(a){var b=Wi.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.J=function(a){a=$i(a);return"string"===typeof a&&"false"===a?!1:!!a};
aj=function(a,b){a=$i(a);return void 0===a&&void 0!==b?b:Number(a||0)};
$i=function(a){var b=g.I("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.I("EXPERIMENT_FLAGS",{})[a]};
bj=function(){var a=[],b=g.I("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=g.I("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
Laa=function(a){cj.forEach(function(b){return b(a)})};
ej=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.dj(b)}}:a};
g.dj=function(a,b,c,d){var e=g.Na("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=g.I("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Xi("ERRORS",e));Laa(a)};
g.fj=function(a){var b=g.Na("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=g.I("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Xi("ERRORS",b))};
hj=function(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var h=gj(f[0]||""),l=gj(f[1]||"");h in c?Array.isArray(c[h])?g.xb(c[h],l):c[h]=[c[h],l]:c[h]=l}catch(q){var m=q,n=f[0],p=String(hj);m.args=[{key:n,value:f[1],query:a,method:Maa==p?"unchanged":p}];Naa.hasOwnProperty(n)||g.fj(m)}}return c};
g.ij=function(a){var b=[];g.Kb(a,function(c,d){var e=Fd(d),f;Array.isArray(c)?f=c:f=[c];g.wd(f,function(h){""==h?b.push(e):b.push(e+"="+Fd(h))})});
return b.join("&")};
g.jj=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return hj(a,"&")};
kj=function(a){a=a.split(",");return a=a.map(function(b){return g.jj(b)})};
g.lj=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),g.jj(1<a.length?a[1]:a[0])):{}};
g.nj=function(a,b){return mj(a,b||{},!0)};
g.oj=function(a,b){return mj(a,b||{},!1)};
mj=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.jj(e[1]||"");for(var f in b)if(c||!g.Ub(e,f))e[f]=b[f];return g.ae(a,e)+d};
g.pj=function(a){if(!b)var b=window.location.href;var c=Rd(1,a),d=g.Sd(a);c&&d?(a=a.match(g.Qd),b=b.match(g.Qd),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.Sd(b)==d&&(Number(Rd(4,b))||null)==(Number(Rd(4,a))||null):!0;return a};
g.qj=function(a){a||(a=document.location.href);a=Rd(1,a);return null!==a&&"https"==a};
g.rj=function(a){a=g.Sd(a);a=null!==a?a.split(".").reverse():null;return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:kids|-nocookie)?$/)?!0:!1};
gj=function(a){return a&&a.match(Oaa)?a:Gd(a)};
g.uj=function(a){var b=g.sj;a=void 0===a?Vi():a;var c=Object,d=c.assign,e=g.tj(b);var f=b.i;try{var h=f.screenX;var l=f.screenY}catch(C){}try{var m=f.outerWidth;var n=f.outerHeight}catch(C){}try{var p=f.innerWidth;var q=f.innerHeight}catch(C){}try{var r=f.screenLeft;var t=f.screenTop}catch(C){}try{p=f.innerWidth,q=f.innerHeight}catch(C){}try{var v=f.screen.availWidth;var y=f.screen.availTop}catch(C){}f=[r,t,h,l,v,y,m,n,p,q];h=g.hg(!1,b.i.top);l={};m=new qg;g.B.SVGElement&&g.B.document.createElementNS&&
m.set(0);n=caa();n["allow-top-navigation-by-user-activation"]&&m.set(1);n["allow-popups-to-escape-sandbox"]&&m.set(2);g.B.crypto&&g.B.crypto.subtle&&m.set(3);g.B.TextDecoder&&g.B.TextEncoder&&m.set(4);m=haa(m);b=(l.bc=m,l.bih=h.height,l.biw=h.width,l.brdim=f.join(),l.vis=g.sg(b.l),l.wgl=!!g.K.WebGLRenderingContext,l);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c};
g.tj=function(a){var b={};b.dt=Paa;b.flash="0";a:{try{var c=a.i.top.location.href}catch(f){a=2;break a}a=c?c===a.l.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?g.K:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!g.K.navigator&&"unknown"!==typeof g.K.navigator.javaEnabled&&!!g.K.navigator.javaEnabled&&g.K.navigator.javaEnabled();g.K.screen&&(b.u_h=g.K.screen.height,b.u_w=g.K.screen.width,b.u_ah=g.K.screen.availHeight,b.u_aw=g.K.screen.availWidth,
b.u_cd=g.K.screen.colorDepth);g.K.navigator&&g.K.navigator.plugins&&(b.u_nplug=g.K.navigator.plugins.length);g.K.navigator&&g.K.navigator.mimeTypes&&(b.u_nmime=g.K.navigator.mimeTypes.length);return b};
Qaa=function(){if(!vj)return null;var a=vj();return"open"in a?a:null};
xj=function(a){switch(wj(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
wj=function(a){return a&&"status"in a?a.status:-1};
g.yj=function(a,b){"function"===typeof a&&(a=ej(a));return window.setTimeout(a,b)};
zj=function(a,b){"function"===typeof a&&(a=ej(a));return window.setInterval(a,b)};
Aj=function(a){window.clearTimeout(a)};
Raa=function(a,b){b=void 0===b?{}:b;var c=g.pj(a),d=g.J("web_ajax_ignore_global_headers_if_set"),e;for(e in Bj){var f=g.I(Bj[e]);!f||!c&&!Cj(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||Cj(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||Cj(a,"X-YouTube-Time-Zone")){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(l){}h&&(b["X-YouTube-Time-Zone"]=h)}if(c||Cj(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.ij(g.uj(void 0));return b};
Dj=function(a,b){var c=g.Sd(a);g.J("debug_handle_relative_url_for_query_forward_killswitch")||c||!g.pj(a)||(c=document.location.hostname);var d=Pd(Rd(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.jj(b),f={};g.wd(Saa,function(h){e[h]&&(f[h]=e[h])});
return g.oj(a,f)};
Cj=function(a){return g.Sd(a)?!1:!0};
g.Fj=function(a,b){var c=b.format||"JSON";a=Taa(a,b);var d=Uaa(a,b),e=!1,f=Ej(a,function(m){if(!e){e=!0;l&&Aj(l);var n=xj(m),p=null,q=400<=m.status&&500>m.status,r=500<=m.status&&600>m.status;if(n||q||r)p=Vaa(a,c,m,b.convertToSafeHtml);if(n)a:if(m&&204==m.status)n=!0;else{switch(c){case "XML":n=0==parseInt(p&&p.return_code,10);break a;case "RAW":n=!0;break a}n=!!p}p=p||{};q=b.context||g.B;n?b.onSuccess&&b.onSuccess.call(q,m,p):b.onError&&b.onError.call(q,m,p);b.onFinish&&b.onFinish.call(q,m,p)}},
b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var h=b.onTimeout;var l=g.yj(function(){e||(e=!0,f.abort(),Aj(l),h.call(b.context||g.B,f))},b.timeout)}return f};
Taa=function(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.I("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=g.nj(a,b);return a};
Uaa=function(a,b){var c=g.I("XSRF_FIELD_NAME",void 0),d=g.I("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,h=Yi("XSRF_FIELD_NAME"),l;b.headers&&(l=b.headers["Content-Type"]);b.excludeXsrf||g.Sd(a)&&!b.withCredentials&&g.Sd(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.postParams&&b.postParams[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.jj(e),g.gc(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):$d(e));f=e||f&&!g.$b(f);
!Gj&&f&&"POST"!=b.method&&(Gj=!0,g.dj(Error("AJAX request with postData should use POST")));return e};
Vaa=function(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(h){throw d=Error("Error reading responseText"),d.params=a,g.fj(d),h;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Waa(a):null)e={},g.wd(a.getElementsByTagName("*"),function(h){e[h.tagName]=Xaa(h)})}d&&Hj(e);
return e};
Hj=function(a){if(g.Sa(a))for(var b in a)"html_content"==b||g.zc(b,"_html")?a[b]=Bd(g.oc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Hj(a[b])};
Waa=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
Xaa=function(a){var b="";g.wd(a.childNodes,function(c){b+=c.nodeValue});
return b};
Ej=function(a,b,c,d,e,f,h){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&ej(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Qaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.J("debug_forward_web_query_parameters")&&(a=Dj(a,window.location.search));m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Raa(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
m.send(d);return m};
g.Jj=function(a,b){var c=g.dc(b),d;return g.xh(new g.oh(function(e,f){c.onSuccess=function(h){xj(h)?e(h):f(new g.Ij("Request failed, status="+wj(h),"net.badstatus",h))};
c.onError=function(h){f(new g.Ij("Unknown request error","net.unknown",h))};
c.onTimeout=function(h){f(new g.Ij("Request timed out","net.timeout",h))};
d=g.Fj(a,c)}),function(e){e instanceof g.Dh&&d.abort();
return g.th(e)})};
g.Kj=function(a,b,c,d){function e(h,l,m){return g.xh(h,function(n){return 0>=l||403===wj(n.xhr)?g.th(new g.Ij("Request retried too many times","net.retryexhausted",n.xhr,n)):f(m).then(function(){return e(g.Jj(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(h){return new g.oh(function(l){setTimeout(l,h)})}
return e(g.Jj(a,b),c-1,d)};
g.Ij=function(a,b,c){g.db.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"};
Lj=function(){this.dc=0;this.i=null};
g.Mj=function(a){var b=new Lj;a=void 0===a?null:a;b.dc=2;b.i=void 0===a?null:a;return b};
g.Nj=function(a){var b=new Lj;a=void 0===a?null:a;b.dc=1;b.i=void 0===a?null:a;return b};
Pj=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Oj+"VisibilityState";if(b in a)return a[b]};
Rj=function(a,b){var c;g.Qj(a,function(d){c=b[d];return!!c});
return c};
Sj=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Yaa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.l=a.pageY}}catch(e){}};
Tj=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.l=a.clientY+b}};
Zaa=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Wb(g.Uj,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=g.Sa(e[4])&&g.Sa(d)&&g.cc(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})};
g.Xj=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Zaa(a,b,c,d);if(e)return e;e=++Vj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(l){l=new Sj(l);if(!g.If(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new Sj(l);
l.currentTarget=a;return c.call(a,l)};
h=ej(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wj()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);g.Uj[e]=[a,b,c,h,d];return e};
g.Yj=function(a){a&&("string"==typeof a&&(a=[a]),g.wd(a,function(b){if(b in g.Uj){var c=g.Uj[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete g.Uj[b]}}))};
g.Zj=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
g.ak=function(a){a=a||window.event;var b;a.composedPath&&"function"===typeof a.composedPath?b=a.composedPath():b=a.path;return b&&b.length?b[0]:g.Zj(a)};
g.bk=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
g.ck=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;document.body&&document.documentElement&&("number"!==typeof b&&(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft),"number"!==typeof c&&(c=a.clientY+document.body.scrollTop+document.documentElement.scrollTop));return new g.df(b,c)};
g.dk=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
$aa=function(a,b){var c=void 0===c?{}:c;var d=g.Xj(a,"playing",function(){g.Yj(d);b.apply(a,arguments)},c)};
ek=function(a){this.G=a;this.i=null;this.B=0;this.D=null;this.C=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.u=0;this.X=g.Xj(window,"mousemove",(0,g.Ya)(this.N,this));this.I=zj((0,g.Ya)(this.T,this),25)};
fk=function(){};
hk=function(a,b){return gk(a,0,b)};
ik=function(a,b){return gk(a,1,b)};
aba=function(a,b){gk(a,2,b)};
jk=function(){fk.apply(this,arguments)};
kk=function(){return!!g.Na("yt.scheduler.instance")};
gk=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=g.Na("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.yj(a,c||0)};
lk=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=g.Na("yt.scheduler.instance.cancelJob");b?b(a):Aj(a)}};
mk=function(a){var b=g.Na("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
xk=function(){var a={},b=void 0===a.bE?!0:a.bE;a=void 0===a.AG?!1:a.AG;if(null==g.Na("_lact",window)){var c=parseInt(g.I("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;g.Ia("_lact",c,window);g.Ia("_fact",c,window);-1==c&&nk();g.Xj(document,"keydown",nk);g.Xj(document,"keyup",nk);g.Xj(document,"mousedown",nk);g.Xj(document,"mouseup",nk);b&&(a?g.Xj(window,"touchmove",function(){wk("touchmove",200)},{passive:!0}):(g.Xj(window,"resize",function(){wk("resize",200)}),g.Xj(window,"scroll",function(){wk("scroll",
200)})));
new ek(function(){wk("mouse",100)});
g.Xj(document,"touchstart",nk,{passive:!0});g.Xj(document,"touchend",nk,{passive:!0})}};
wk=function(a,b){yk[a]||(yk[a]=!0,ik(function(){nk();yk[a]=!1},b))};
nk=function(){null==g.Na("_lact",window)&&(xk(),g.Na("_lact",window));var a=Date.now();g.Ia("_lact",a,window);-1==g.Na("_fact",window)&&g.Ia("_fact",a,window);(a=g.Na("ytglobal.ytUtilActivityCallback_"))&&a()};
g.zk=function(){var a=g.Na("_lact",window),b;null==a?b=-1:b=Math.max(Date.now()-a,0);return b};
Ak=function(){var a=/Chrome\/(\d+)/.exec(g.md);return a?parseFloat(a[1]):NaN};
Bk=function(){var a=/\sCobalt\/(\S+)\s/.exec(g.md);if(!a)return NaN;var b=[];a=g.u(a[1].split("."));for(var c=a.next();!c.done;c=a.next())c=parseInt(c.value,10),0<=c&&b.push(c);return parseFloat(b.join("."))};
Dk=function(){return Ck("android")&&Ck("chrome")&&!(Ck("trident/")||Ck("edge/"))&&!Ck("cobalt")};
Ek=function(){return Ck("armv7")||Ck("aarch64")||Ck("android")};
g.Fk=function(){return Ck("cobalt")};
Gk=function(){return Ck("cobalt")&&Ck("appletv")};
Hk=function(){return Ck("(ps3; leanback shell)")||Ck("ps3")&&g.Fk()};
Ik=function(){return Ck("(ps4; leanback shell)")||Ck("ps4")&&g.Fk()};
Jk=function(){var a=/WebKit\/([0-9]+)/.exec(g.md);return!!(a&&600<=parseInt(a[1],10))};
Kk=function(){var a=/WebKit\/([0-9]+)/.exec(g.md);return!!(a&&602<=parseInt(a[1],10))};
Lk=function(){return Ck("iemobile")||Ck("windows phone")&&Ck("edge")};
Nk=function(){return Mk&&Ck("applewebkit")&&!Ck("version")&&(!Ck("safari")||Ck("gsa/"))};
Pk=function(){return Ok&&Ck("version/")};
Qk=function(){return Ck("smart-tv")&&Ck("samsung")};
Ck=function(a){var b=g.md;return b?0<=b.toLowerCase().indexOf(a):!1};
g.Tk=function(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!g.Fk())a&&(a=g.Qc(g.Uc(a)||g.ld),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a=td(vd(a)).toString(),a=Fd((0,g.Rk)(a))),g.Ac(a)||(a=g.rf("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.Df(a).body.appendChild(a)));else if(e)Ej(a,b,"POST",e,d);else if(g.I("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Ej(a,b,"GET","",d);else{b:{try{var f=new gb({url:a});if(f.u&&f.l||f.B){var h=Pd(Rd(5,a));var l=
!(!h||!h.endsWith("/aclk")||"1"!==ee(a,"ri"));break b}}catch(m){}l=!1}l?Sk(a)?(b&&b(),c=!0):c=!1:c=!1;c||bba(a,b)}};
Uk=function(a,b,c){c=void 0===c?"":c;Sk(a,c)?b&&b():g.Tk(a,b,void 0,void 0,c)};
Sk=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
bba=function(a,b){var c=new Image,d=""+cba++;Vk[d]=c;c.onload=c.onerror=function(){b&&Vk[d]&&b();delete Vk[d]};
c.src=a};
$k=function(a,b,c){var d=Wk();if(d&&b){var e=d.subscribe(a,function(){var f=arguments;var h=function(){Xk[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{Yk[a]?h():g.yj(h,0)}catch(l){g.dj(l)}},c);
Xk[e]=!0;Zk[a]||(Zk[a]=[]);Zk[a].push(e);return e}return 0};
al=function(a){var b=Wk();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),g.wd(a,function(c){b.unsubscribeByKey(c);delete Xk[c]}))};
g.bl=function(a,b){var c=Wk();return c?c.publish.apply(c,arguments):!1};
dl=function(a){var b=Wk();if(b)if(b.clear(a),a)cl(a);else for(var c in Zk)cl(c)};
Wk=function(){return g.B.ytPubsubPubsubInstance};
cl=function(a){Zk[a]&&(a=Zk[a],g.wd(a,function(b){Xk[b]&&delete Xk[b]}),a.length=0)};
dba=function(a,b){if("log_event"===a.endpoint){var c="";a.md&&(el[a.md.token]=fl(a.md),c=a.md.token);var d=gl.get(c)||[];gl.set(c,d);d.push(a.payload);b&&(hl=new b);a=aj("web_logging_max_batch")||100;b=(0,g.M)();d.length>=a?il({writeThenSend:!0}):10<=b-jl&&(kl(),jl=b)}};
eba=function(a,b){if("log_event"===a.endpoint){var c="";a.md&&(el[a.md.token]=fl(a.md),c=a.md.token);var d=new Map;d.set(c,[a.payload]);b&&(hl=new b);return new g.oh(function(e){hl&&hl.isReady()?ll(d,e,{bypassNetworkless:!0}):e()})}};
il=function(a){a=void 0===a?{}:a;new g.oh(function(b){Aj(ml);Aj(nl);nl=0;hl&&hl.isReady()?(ll(gl,b,a),gl.clear()):(kl(),b())})};
kl=function(){g.J("web_gel_timeout_cap")&&!nl&&(nl=g.yj(function(){il({writeThenSend:!0})},6E4));
Aj(ml);var a=g.I("LOGGING_BATCH_TIMEOUT",aj("web_gel_debounce_ms",1E4));g.J("shorten_initial_gel_batch_timeout")&&ol&&(a=fba);ml=g.yj(function(){il({writeThenSend:!0})},a)};
ll=function(a,b,c){var d=hl;c=void 0===c?{}:c;var e=Math.round((0,g.M)()),f=a.size;a=g.u(a);for(var h=a.next();!h.done;h=a.next()){var l=g.u(h.value);h=l.next().value;var m=l.next().value;l=g.ec({context:g.pl(d.i||g.ql())});l.events=m;(m=el[h])&&gba(l,h,m);delete el[h];hba(l,e);g.J("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Uk("/generate_204");g.rl(d,"log_event",l,{retry:!0,onSuccess:function(){f--;f||b();sl=Math.round((0,g.M)()-e)},
onError:function(){f--;f||b()},
QT:c});ol=!1}};
hba=function(a,b){a.requestTimeMs=String(b);g.J("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);if(b=g.I("EVENT_ID",void 0)){var c=g.I("BATCH_CLIENT_COUNTER",void 0)||0;c||(c=Math.floor(Math.random()*tl/2));c++;c>tl&&(c=1);Xi("BATCH_CLIENT_COUNTER",c);b={serializedEventId:b,clientCounter:String(c)};a.serializedClientEventId=b;ul&&sl&&g.J("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:ul,roundtripMs:String(sl)});ul=b;sl=0}};
gba=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
fl=function(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b};
wl=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.M)());e[a]=b;a=g.zk();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};g.J("log_sequence_info_on_gel_web")&&d.Ph&&(a=e.context,b=d.Ph,vl[b]=b in vl?vl[b]+1:0,a.sequence={index:vl[b],groupKey:b},d.AD&&delete vl[d.Ph]);(d.kU?eba:dba)({endpoint:"log_event",payload:e,md:d.md},c)};
xl=function(a){var b=this;this.i=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c})};
yl=function(){if(!g.B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return g.B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":g.B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":g.B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":g.B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}};
g.Al=function(){this.i=g.I("ALT_PREF_COOKIE_NAME","PREF");this.l=g.I("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=g.Si.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(zl[d]=c.toString())}}};
g.Cl=function(a,b){return!!((Bl("f"+(Math.floor(b/31)+1))||0)&1<<b%31)};
Dl=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
El=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
Bl=function(a){a=void 0!==zl[a]?zl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null};
Fl=function(){var a=g.B.navigator;return a?a.connection:void 0};
Hl=function(){var a=Fl();if(a){var b=Gl[a.type||"unknown"]||"CONN_UNKNOWN";a=Gl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}};
Jl=function(){var a=Fl();if(null!==a&&void 0!==a&&a.effectiveType)return Il.hasOwnProperty(a.effectiveType)?Il[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"};
Kl=function(){return"INNERTUBE_API_KEY"in Wi&&"INNERTUBE_API_VERSION"in Wi};
g.ql=function(){return{innertubeApiKey:g.I("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.I("INNERTUBE_API_VERSION",void 0),Sy:g.I("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ty:g.I("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.I("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Vy:g.I("INNERTUBE_CONTEXT_HL",void 0),Uy:g.I("INNERTUBE_CONTEXT_GL",void 0),Wy:g.I("INNERTUBE_HOST_OVERRIDE",void 0)||"",Yy:!!g.I("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xy:!!g.I("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:g.I("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}};
g.pl=function(a){var b={client:{hl:a.Vy,gl:a.Uy,clientName:a.Ty,clientVersion:a.innertubeContextClientVersion,configInfo:a.Sy}},c=g.B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=g.I("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=bj();0<c.length&&(b.request={internalExperimentFlags:c});c=b.client.clientName;if("WEB"===c||"MWEB"===c||1===c||2===c){if(!g.J("web_include_display_mode_killswitch")){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=yl()}}else if(d=b.client.clientName,("WEB_REMIX"===d||76===d)&&!g.J("music_web_display_mode_killswitch")){var e;b.client.Ez=null!=(e=b.client.Ez)?e:{};b.client.Ez.webDisplayMode=yl()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);g.I("DELEGATED_SESSION_ID")&&!g.J("pageid_as_header_web")&&(b.user={onBehalfOfUser:g.I("DELEGATED_SESSION_ID")});if(a=Hl())b.client.connectionType=a;g.J("web_log_effective_connection_type")&&
(a=Jl())&&(b.client.effectiveConnectionType=a);a=Object;e=a.assign;d=b.client;c={};for(var f=g.u(Object.entries(g.jj(g.I("DEVICE","")))),h=f.next();!h.done;h=f.next()){var l=g.u(h.value);h=l.next().value;l=l.next().value;"cbrand"===h?c.deviceMake=l:"cmodel"===h?c.deviceModel=l:"cbr"===h?c.browserName=l:"cbrver"===h?c.browserVersion=l:"cos"===h?c.osName=l:"cosver"===h?c.osVersion=l:"cplatform"===h&&(c.platform=l)}b.client=e.call(a,d,c);return b};
iba=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.I("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.rx||g.I("AUTHORIZATION"))||(a?b="Bearer "+g.Na("gapi.auth.getToken")().sT:b=pg());b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.I("SESSION_INDEX",0),g.J("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.I("DELEGATED_SESSION_ID")));return d};
Ll=function(a){var b;(b=g.wi(a))||(a=new oi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new gi(a):null;this.l=document.domain||window.location.hostname};
Ml=function(a,b){this.version=a;this.args=b};
Nl=function(a,b){this.topic=a;this.i=b};
Pl=function(a,b){var c=Ol();c&&c.publish.call(c,a.toString(),a,b)};
jba=function(a,b,c){var d=Ol();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,h){var l=g.Na("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(Ql[e])try{if(h&&a instanceof Nl&&a!=f)try{var m=a.i,n=h;if(!n.args||!n.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.lj){var p=new m;m.lj=p.version}var q=m.lj}catch(r){}if(!q||n.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{h=Reflect.construct(m,
g.wb(n.args))}catch(r){throw r.message="yt.pubsub2.Data.deserialize(): "+r.message,r;}}catch(r){throw r.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+r.message,r;}b.call(c||window,h)}catch(r){g.dj(r)}},Rl[a.toString()]?kk()?ik(l):g.yj(l,0):l())});
Ql[e]=!0;Sl[a.toString()]||(Sl[a.toString()]=[]);Sl[a.toString()].push(e);return e};
g.Ul=function(a,b,c){var d=jba(a,function(e){b.apply(c,arguments);Tl(d)},c);
return d};
Tl=function(a){var b=Ol();b&&("number"===typeof a&&(a=[a]),g.wd(a,function(c){b.unsubscribeByKey(c);delete Ql[c]}))};
Ol=function(){return g.Na("ytPubsub2Pubsub2Instance")};
Vl=function(){this.VG=!0};
kba=function(a,b,c){return sh(a.Ip(b,c))};
lba=function(){var a={};for(Wl=new Xl(void 0===a.handleError?Yl:a.handleError,void 0===a.logEvent?g.Zl:a.logEvent);0<$l.length;)switch(a=$l.shift(),a.type){case "ERROR":Wl.kc(a.payload);break;case "EVENT":Wl.logEvent(a.eventType,a.payload)}};
bm=function(a){am||(Wl?Wl.kc(a):($l.push({type:"ERROR",payload:a}),10<$l.length&&$l.shift()))};
cm=function(a,b){am||(Wl?Wl.logEvent(a,b):($l.push({type:"EVENT",eventType:a,payload:b}),10<$l.length&&$l.shift()))};
fm=function(a,b,c){var d;this.l=void 0===a?!1:a;this.failureMessage=b;this.u=c;this.i=null===(d=dm())||void 0===d?void 0:d.get("LAST_RESULT_ENTRY_KEY",!0);this.i||(this.i={createdTimestampMs:(0,g.M)(),isSupported:this.l,resultCount:0});var e;if(em()){var f;this.i.isSupported===this.l?f=Object.assign(Object.assign({},this.i),{resultCount:this.i.resultCount+1}):f={isSupported:this.l,resultCount:1,createdTimestampMs:(0,g.M)()};null===(e=dm())||void 0===e?void 0:e.set("LAST_RESULT_ENTRY_KEY",f,2592E3,
!0)}};
gm=function(a,b){return new fm(!1,a instanceof Error?a.message:"",void 0===b?!1:b)};
em=function(){var a;return!!(g.J("ytidb_analyze_is_supported")&&(null===(a=dm())||void 0===a?0:a.i))};
g.hm=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.oa(c))};
im=function(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");};
jm=function(a){return a.substr(0,a.indexOf(":"))||a};
lm=function(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?km[a]:c;d=void 0===d?mba[a]:d;e=void 0===e?nba[a]:e;g.hm.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,lm.prototype)};
mm=function(a){lm.call(this,"MISSING_OBJECT_STORE",{PT:a},km.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,mm.prototype)};
pba=function(a,b,c){b=jm(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof lm)return d;if("QuotaExceededError"===d.name)return new lm("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(g.nm&&"UnknownError"===d.name)return new lm("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&oba.some(function(e){return d.message.includes(e)}))return new lm("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new lm("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",ZT:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d};
qba=function(a){if(!a)throw Error();throw a;};
rba=function(a){return a};
om=function(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=g.u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=g.u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.l=a;this.state={status:"PENDING"};this.i=[];this.onRejected=[];try{this.l(c,b)}catch(e){b(e)}};
qm=function(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof om?pm(a,b,f,d,e):d(f)}catch(h){e(h)}};
rm=function(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof om?pm(a,b,f,d,e):d(f)}catch(h){e(h)}};
pm=function(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof om?pm(a,b,f,d,e):d(f)},function(f){e(f)})};
sm=function(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(h){}}
a.addEventListener("success",e);a.addEventListener("error",d)};
tm=function(a){return new Promise(function(b,c){sm(a,b,c)})};
um=function(a){return new om(function(b,c){sm(a,b,c)})};
vm=function(a,b){return new om(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(h){a=h;e()},d):c()}
e()})};
wm=function(a,b){this.request=a;this.cursor=b};
xm=function(a){return um(a).then(function(b){return null===b?null:new wm(a,b)})};
sba=function(a){return new Promise(function(b){aba(function(){b()},a)})};
ym=function(a,b){this.i=a;this.options=b;this.transactionCount=0;this.u=Math.round((0,g.M)());this.l=!1};
Am=function(a,b,c){a=a.i.createObjectStore(b,c);return new zm(a)};
Em=function(a,b,c,d){return Bm(a,[b],{mode:"readwrite",Cg:g.J("ytidb_transaction_enable_retries_core_and_nwl")},function(e){return Cm(Dm(e,b),c,d)})};
Bm=function(a,b,c,d){return D(a,function f(){var h=this,l,m,n,p,q,r,t,v,y,C,z,E,O,L;return A(f,function(ca){switch(ca.i){case 1:var ha={mode:"readonly",Cg:!1};"string"===typeof c?ha.mode=c:ha=c;l=ha;h.transactionCount++;m=g.J("ytidb_transaction_exponential_backoff_retries");n=l.Cg?aj("ytidb_transaction_try_count",1):1;p=500;q=0;case 2:if(r){ca.fb(3);break}q++;t=Math.round((0,g.M)());va(ca,4);v=h.i.transaction(b,l.mode);ha=new Fm(v);ha=tba(ha,d);return x(ca,ha,6);case 6:return y=ca.l,C=Math.round((0,g.M)()),
Gm(h,t,C,q,void 0,b.join(),l),ca.return(y);case 4:z=xa(ca);E=Math.round((0,g.M)());O=pba(z,h.i.name,b.join());if((L=O instanceof lm&&!O.i)||q>=n){Gm(h,t,E,q,O,b.join(),l);r=O;ca.fb(2);break}if(!m){ca.fb(2);break}return x(ca,sba(p),9);case 9:p*=2;ca.fb(2);break;case 3:return ca.return(Promise.reject(r))}})})};
Gm=function(a,b,c,d,e,f,h){b=c-b;e?(e instanceof lm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&cm("QUOTA_EXCEEDED",{dbName:jm(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:h.mode}),e instanceof lm&&"UNKNOWN_ABORT"===e.type&&(cm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.u}),a.l=!0),Hm(a,!1,d,f,b),bm(e)):Hm(a,!0,d,f,b)};
Hm=function(a,b,c,d,e){cm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c})};
zm=function(a){this.i=a};
uba=function(a,b){return Im(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})};
vba=function(a,b,c){var d=[];return Im(a,{query:b},function(e){if(!(void 0!==c&&d.length>=c))return d.push(e.getValue()),e.continue()}).then(function(){return d})};
Cm=function(a,b,c){return um(a.i.put(b,c))};
Im=function(a,b,c){a=a.i.openCursor(b.query,b.direction);return Jm(a).then(function(d){return vm(d,c)})};
wba=function(a,b){var c={},d=c.query;c=c.direction;a="openKeyCursor"in IDBObjectStore.prototype?a.i.openKeyCursor(d,c):a.i.openCursor(d,c);return xm(a).then(function(e){return vm(e,b)})};
Fm=function(a){var b=this;this.i=a;this.l=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.aborted){e=lm;for(var f=b.i.objectStoreNames,h=[],l=0;l<f.length;l++){var m=f.item(l);if(null===m)throw Error("Invariant: item in DOMStringList is null");h.push(m)}e=new e("UNKNOWN_ABORT",{objectStoreNames:h.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})};
tba=function(a,b){var c=new Promise(function(d,e){b(a).then(function(f){a.commit();d(f)}).catch(e)});
return Promise.all([c,a.done]).then(function(d){return g.u(d).next().value})};
Dm=function(a,b){b=a.i.objectStore(b);var c=a.l.get(b);c||(c=new zm(b),a.l.set(b,c));return c};
Km=function(a){this.i=a};
xba=function(a,b,c){var d=[];return Lm(a,{query:b},function(e){if(!(void 0!==c&&d.length>=c))return d.push(e.getValue()),e.continue()}).then(function(){return d})};
Lm=function(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Jm(a).then(function(d){return vm(d,c)})};
Mm=function(a,b){this.request=a;this.cursor=b};
Jm=function(a){return um(a).then(function(b){return null===b?null:new Mm(a,b)})};
yba=function(a,b,c){return D(this,function e(){var f,h,l,m,n,p,q,r,t,v;return A(e,function(y){if(1==y.i)return f=self.indexedDB.open(a,b),h=c,l=h.blocked,m=h.blocking,n=h.WG,p=h.upgrade,q=h.closed,t=function(){r||(r=new ym(f.result,{closed:q}));return r},f.addEventListener("upgradeneeded",function(C){if(null===C.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");C.dataLoss&&"none"!==C.dataLoss&&cm("IDB_DATA_CORRUPTED",{reason:C.dataLossMessage||"unknown reason",dbName:jm(a)});var z=t(),E=new Fm(f.transaction);p&&p(z,C.oldVersion,C.newVersion,E)}),l&&f.addEventListener("blocked",function(){l()}),x(y,tm(f),2);
v=y.l;m&&v.addEventListener("versionchange",function(){m(t())});
v.addEventListener("close",function(){cm("IDB_UNEXPECTEDLY_CLOSED",{dbName:jm(a),dbVersion:v.version});n&&n()});
return y.return(t())})})};
Nm=function(a,b,c){c=void 0===c?{}:c;return yba(a,b,c)};
dn=function(a,b){b=void 0===b?{}:b;return D(this,function d(){var e,f,h;return A(d,function(l){e=self.indexedDB.deleteDatabase(a);f=b;(h=f.blocked)&&e.addEventListener("blocked",function(){h()});
return x(l,tm(e),0)})})};
en=function(a,b){this.name=a;this.options=b;this.u=!1};
gn=function(a){return D(this,function c(){var d;return A(c,function(e){if(1==e.i)return x(e,fn.open(),2);d=e.l;return e.return(Bm(d,["databases"],{Cg:!0,mode:"readwrite"},function(f){var h=Dm(f,"databases");return h.get(a.actualName).then(function(l){if(l?a.actualName!==l.actualName||a.publicName!==l.publicName||a.userIdentifier!==l.userIdentifier||a.clearDataOnAuthChange!==l.clearDataOnAuthChange:1)return Cm(h,a).then(function(){})})}))})})};
hn=function(a){return D(this,function c(){var d;return A(c,function(e){if(1==e.i)return x(e,fn.open(),2);d=e.l;return e.return(d.delete("databases",a))})})};
zba=function(){return D(this,function b(){var c,d;return A(b,function(e){if(1==e.i)return x(e,fn.open(),2);if(3!=e.i)return c=e.l,x(e,c.count("databases"),3);d=e.l;return e.return(0<d)})})};
Aba=function(a){return D(this,function c(){var d,e;return A(c,function(f){return 1==f.i?(d=[],x(f,fn.open(),2)):3!=f.i?(e=f.l,x(f,Bm(e,["databases"],{Cg:!0,mode:"readonly"},function(h){d.length=0;return Im(Dm(h,"databases"),{},function(l){a(l.getValue())&&d.push(l.getValue());return l.continue()})}),3)):f.return(d)})})};
Bba=function(){return Aba(function(a){return"yt-player-local-media"===a.publicName&&void 0!==a.userIdentifier})};
Cba=function(){return D(this,function b(){var c,d,e,f;return A(b,function(h){switch(h.i){case 1:if(Mk&&Jk()&&!Kk())return h.return(gm(Error("YtIdb is not supported on iOS 8 or 9")));if(jn)return h.return(gm(Error("YtIdb is not supported on Edge")));try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return h.return(gm(Error("Non-prefixed indexedDB APIs are missing")))}catch(l){return h.return(gm(l))}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return h.return(gm(Error("IDBTransaction.prototype.objectStoreNames is missing")));
va(h,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(h,gn(d),4);case 4:return x(h,hn("yt-idb-test-do-not-use"),5);case 5:return h.return(new fm(!0));case 2:e=xa(h);if(!em()){h.fb(6);break}va(h,7);return x(h,zba(),9);case 9:return f=h.l,h.return(gm(e,f));case 7:return xa(h),h.return(gm(e));case 6:return h.return(gm(e))}})})};
ln=function(){if(void 0!==kn)return kn;am=!0;return kn=Cba().then(function(a){am=!1;a.log();return a.isSupported()})};
nn=function(){if(void 0===mn)throw Error("Datasync ID not set");return mn};
on=function(a){if(void 0===mn)throw a=new lm("AUTH_INVALID"),bm(a),a;var b=nn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}};
pn=function(a,b,c,d){var e;return D(this,function h(){var l,m;return A(h,function(n){switch(n.i){case 1:return x(n,Dba({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return im(a),c?l={actualName:a,publicName:a,userIdentifier:void 0}:l=on(a),l.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1,va(n,3),x(n,gn(l),5);case 5:return x(n,Nm(l.actualName,b,d),6);case 6:return n.return(n.l);case 3:return m=xa(n),va(n,7),x(n,hn(l.actualName),9);case 9:wa(n,8);break;case 7:xa(n);
case 8:throw m;}})})};
Dba=function(a){return D(this,function c(){var d;return A(c,function(e){if(1==e.i)return x(e,ln(),2);if(!e.l)throw d=new lm("IDB_NOT_SUPPORTED",{context:a}),bm(d),d;e.i=0})})};
Eba=function(a,b,c){c=void 0===c?{}:c;return pn(a,b,!1,c)};
Fba=function(a,b,c){c=void 0===c?{}:c;return pn(a,b,!0,c)};
Gba=function(a,b){b=void 0===b?{}:b;return D(this,function d(){var e;return A(d,function(f){if(1==f.i)return x(f,ln(),2);if(3!=f.i){if(!f.l)return f.return();im(a);e=on(a);return x(f,dn(e.actualName,b),3)}return x(f,hn(e.actualName),0)})})};
Hba=function(a,b){var c=this;a=a.map(function(d){return D(c,function f(){return A(f,function(h){return 1==h.i?x(h,dn(d.actualName,b),2):x(h,hn(d.actualName),0)})})});
return Promise.all(a).then(function(){})};
Iba=function(){var a=void 0===a?{}:a;return D(this,function c(){var d;return A(c,function(e){if(1==e.i)return x(e,ln(),2);if(3!=e.i){if(!e.l)return e.return();im("yt-player-local-media");return x(e,Bba(),3)}d=e.l;return x(e,Hba(d,a),0)})})};
qn=function(a,b){b=void 0===b?{}:b;return D(this,function d(){return A(d,function(e){if(1==e.i)return x(e,ln(),2);if(3!=e.i){if(!e.l)return e.return();im(a);return x(e,dn(a,b),3)}return x(e,hn(a),0)})})};
rn=function(a,b){en.call(this,a,b);this.options=b;im(a)};
sn=function(a,b){var c;return function(){c||(c=new rn(a,b));return c}};
tn=function(){om.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");};
vn=function(){un||(un=new Ll("yt.offline"));return un};
xn=function(){g.Sg.call(this);this.l=this.C=this.D=this.u=!1;this.i=wn();this.l=g.J("validate_network_status");Jba(this);Kba(this)};
wn=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
Kba=function(a){window.addEventListener("online",function(){return D(a,function c(){var d=this;return A(c,function(e){if(1==e.i)return d.l?x(e,yn(d),3):(d.i=!0,e.fb(2));2!=e.i&&(d.i=e.l);d.u&&d.i&&d.dispatchEvent("ytnetworkstatus-online");zn(d);if(d.C&&g.J("offline_error_handling")){var f=vn().get("errors",!0);if(f){for(var h in f)if(f[h]){var l=new g.hm(h,"sent via offline_errors");l.name=f[h].name;l.stack=f[h].stack;l.level=f[h].level;g.dj(l)}vn().set("errors",{},2592E3,!0)}}e.i=0})})})};
Jba=function(a){window.addEventListener("offline",function(){return D(a,function c(){var d=this;return A(c,function(e){if(1==e.i)return d.l?x(e,yn(d),3):(d.i=!1,e.fb(2));2!=e.i&&(d.i=e.l);d.u&&!d.i&&d.dispatchEvent("ytnetworkstatus-offline");zn(d);e.i=0})})})};
zn=function(a){a.D&&(g.fj(new g.hm("NetworkStatusManager state did not match poll",(0,g.M)()-0)),a.D=!1)};
yn=function(a){return D(a,function c(){var d;return A(c,function(e){switch(e.i){case 1:return va(e,2),x(e,fetch("/generate_204",{method:"HEAD"}),4);case 4:d=!0;wa(e,3);break;case 2:xa(e),d=!1;case 3:return e.return(d)}})})};
Bn=function(a){a=void 0===a?{}:a;g.Sg.call(this);var b=this;this.l=this.C=0;xn.i||(xn.i=new xn);this.i=xn.i;this.i.u=!0;a.hE&&(this.i.C=!0);a.Kq?(this.Kq=a.Kq,this.i.Cd("ytnetworkstatus-online",function(){An(b,"publicytnetworkstatus-online")}),this.i.Cd("ytnetworkstatus-offline",function(){An(b,"publicytnetworkstatus-offline")})):(this.i.Cd("ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),this.i.Cd("ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))};
Dn=function(){Cn||(Cn=new Bn({hE:!0}));var a=Cn.i;a.l||a.i===wn()||g.fj(new g.hm("NetworkStatusManager isOnline does not match window status"))};
An=function(a,b){a.Kq?a.l?(lk(a.C),a.C=ik(function(){a.u!==b&&(a.dispatchEvent(b),a.u=b,a.l=(0,g.M)())},a.Kq-((0,g.M)()-a.l))):(a.dispatchEvent(b),a.u=b,a.l=(0,g.M)()):a.dispatchEvent(b)};
g.En=function(a,b){b=void 0===b?{}:b;g.J("skip_is_supported_killswitch")?ln().then(function(){Dn();g.Fj(a,b)}):(Dn(),g.Fj(a,b))};
g.Fn=function(a,b){b=void 0===b?{}:b;g.J("skip_is_supported_killswitch")?ln().then(function(){g.Fj(a,b)}):g.Fj(a,b)};
Gn=function(a,b){b=void 0===b?{}:b;g.J("skip_is_supported_killswitch")?ln().then(function(){g.Fj(a,b)}):g.Fj(a,b)};
g.Hn=function(a){this.i=null;a?this.i=a:Kl()&&(this.i=g.ql())};
g.rl=function(a,b,c,d){!g.I("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.fj(new g.hm("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new g.hm("innertube xhrclient not ready",b,c,d),g.dj(a),a;c={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(h,l){if(d.onSuccess)d.onSuccess(l)},
onFetchSuccess:function(h){if(d.onSuccess)d.onSuccess(h)},
onError:function(h,l){if(d.onError)d.onError(l)},
onFetchError:function(h){if(d.onError)d.onError(h)},
timeout:d.timeout,withCredentials:!0};var e="",f=a.i.Wy;f&&(e=f);f=iba(a.i.Yy||!1,e,d);Object.assign(c.headers,f);c.headers.Authorization&&!e&&(c.headers["x-origin"]=window.location.origin);b="/youtubei/"+a.i.innertubeApiVersion+"/"+b;f={alt:"json"};a.i.Xy&&c.headers.Authorization||(f.key=a.i.innertubeApiKey);a=g.nj(""+e+b,f);try{c.method="POST",c.postParams||(c.postParams={}),g.Fj(a,c)}catch(h){if("InvalidAccessError"==h.name)g.fj(Error("An extension is blocking network request."));else throw h;
}};
g.Zl=function(a,b,c){c=void 0===c?{}:c;var d=g.Hn;g.I("ytLoggingEventsDefaultDisabled",!1)&&g.Hn==g.Hn&&(d=null);wl(a,b,d,c)};
Nba=function(){var a=void 0===a?window.location.href:a;if(g.J("kevlar_disable_theme_param"))return null;var b=Pd(Rd(5,a));if(Lba(b))return"USER_INTERFACE_THEME_DARK";try{var c=g.lj(a).theme;return Mba.get(c)||null}catch(d){}return null};
Lba=function(a){var b=Oba.map(function(c){return c.toLowerCase()});
return!g.J("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1};
Jn=function(a,b,c){a&&(a.dataset?a.dataset[In(b)]=String(c):a.setAttribute("data-"+b,c))};
Kn=function(a){return a?a.dataset?a.dataset[In("loaded")]:a.getAttribute("data-loaded"):null};
In=function(a){return Ln[a]||(Ln[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
Mn=function(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()};
Pn=function(a){var b;g.Nn()?g.On()==a&&(b=document):b=a;return b&&(a=Rj(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))?(b=a.call(b),b instanceof Promise?b:Promise.resolve()):Promise.resolve()};
g.Qn=function(a){return g.lb(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
g.Nn=function(){return!!Rj(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)};
g.On=function(a){a=void 0===a?!1:a;var b=Rj(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null};
g.Rn=function(a){g.F.call(this);this.u=[];this.D=a||this};
Sn=function(a,b,c,d){for(var e=0;e<c.length;e++)a.Y(b,c[e],d)};
g.Tn=function(a){for(;a.u.length;){var b=a.u.pop();b.target.removeEventListener(b.name,b.callback)}};
g.N=function(a){a=void 0===a?!1:a;g.F.call(this);this.jf=new bi(a);g.G(this,this.jf)};
Un=function(a,b,c){for(var d in b)a.subscribe(d,b[d],c)};
Vn=function(a,b,c){for(var d in b)a.unsubscribe(d,b[d],c)};
Wn=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.dc(b);this.assets=a.assets||{};this.attrs=a.attrs||g.dc(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
Pba=function(a){a instanceof Wn||(a=new Wn(a));return a};
Yn=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){c=Date.now();for(var d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Xn)for(b=1,c=0;c<Xn.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Xn.charCodeAt(c),b++;return a};
g.Zn=function(){for(var a=Yn(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")};
g.$n=function(){return g.Zc(Yn(),function(a){return(a&15).toString(16)}).join("")};
ao=function(a){this.i=a};
g.bo=function(a){return new ao({trackingParams:a})};
Rba=function(a){var b=Qba++;return new ao({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0})};
co=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
eo=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
fo=function(a){return g.I(eo(void 0===a?0:a),void 0)};
go=function(a){return(a=fo(void 0===a?0:a))?new ao({veType:a,youtubeData:void 0}):null};
ho=function(){var a=g.I("csn-to-ctt-auth-info");a||(a={},Xi("csn-to-ctt-auth-info",a));return a};
g.io=function(a){a=void 0===a?0:a;var b=g.I(co(a));if(!b&&!g.I("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null};
Sba=function(a,b,c){var d=ho();(c=g.io(c))&&delete d[c];b&&(d[a]=b)};
jo=function(a){return ho()[a]};
lo=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.I(co(c))||b!==g.I(eo(c)))Sba(a,d,c),Xi(co(c),a),Xi(eo(c),b),b=function(){setTimeout(function(){a&&wl("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ko,clientScreenNonce:a},g.Hn)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()};
Tba=function(){this.rl=[];this.gk=[]};
no=function(){mo||(mo=new Tba);return mo};
Uba=function(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=oo(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=oo(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=oo(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)};
oo=function(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity};
ro=function(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=po(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var h=a[e],l=b,m=c;f="string"!==typeof h||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(h=Uba(atob(h.replace(/-/g,"+").replace(/_/g,"/"))))?po(f+".ve",h,l,m):0;d+=f;d+=po(e,a[e],b,c);if(500<d)break}}else c[b]=qo(a),d+=c[b].length;else c[b]=qo(a),d+=c[b].length;return d};
po=function(a,b,c,d){c+="."+a;a=qo(b);d[c]=a;return c.length+a.length};
qo=function(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)};
Yl=function(a){g.so(a)};
g.to=function(a){g.so(a,"WARNING")};
g.so=function(a,b){var c=void 0===c?{}:c;c.name=g.I("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=g.I("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=c||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a){a.hasOwnProperty("level")&&a.level&&(b=a.level);if(g.J("console_log_js_exceptions")){var d=[];d.push("Name: "+a.name);d.push("Message: "+a.message);a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args));
d.push("File name: "+a.fileName);d.push("Stacktrace: "+a.stack);window.console.log(d.join("\n"),a)}if(!(5<=uo)){d=Vba;var e=iaa(a),f=e.message||"Unknown Error",h=e.name||"UnknownError",l=e.stack||a.l||"Not available";if(l.startsWith(h+": "+f)){var m=l.split("\n");m.shift();l=m.join("\n")}m=e.lineNumber||"Not available";e=e.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=ro(a.args[p],"params."+p,c,n),500<=n);p++);else if(a.hasOwnProperty("params")&&
a.params){var q=a.params;if("object"===typeof a.params)for(p in q){if(q[p]){var r="params."+p,t=qo(q[p]);c[r]=t;n+=r.length+t.length;if(500<n)break}}else c.params=qo(q)}if(d.length)for(p=0;p<d.length&&!(n=ro(d[p],"params.context."+p,c,n),500<=n);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);c={message:f,name:h,lineNumber:m,fileName:e,stack:l,params:c,sampleWeight:1};p=Number(a.columnNumber);isNaN(p)||(c.lineNumber=c.lineNumber+":"+p);if("IGNORED"===a.level)a=
0;else a:{a=no();p=g.u(a.gk);for(d=p.next();!d.done;d=p.next())if(d=d.value,c.message&&c.message.match(d.yz)){a=d.weight;break a}a=g.u(a.rl);for(p=a.next();!p.done;p=a.next())if(p=p.value,p.callback(c)){a=p.weight;break a}a=1}c.sampleWeight=a;a=g.u(Wba);for(p=a.next();!p.done;p=a.next())if(p=p.value,p.Ju[c.name])for(f=g.u(p.Ju[c.name]),d=f.next();!d.done;d=f.next())if(h=d.value,d=c.message.match(h.Ef)){c.params["params.error.original"]=d[0];f=h.groups;h={};for(m=0;m<f.length;m++)h[f[m]]=d[m+1],c.params["params.error."+
f[m]]=d[m+1];c.message=p.xz(h);break}c.params||(c.params={});a=no();c.params["params.errorServiceSignature"]="msg="+a.gk.length+"&cb="+a.rl.length;c.params["params.serviceWorker"]="false";g.B.document&&g.B.document.querySelectorAll&&(c.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(0!==c.sampleWeight&&!vo.has(c.message)){"ERROR"===b?(wo.U("handleError",c),g.J("record_app_crashed_web")&&0===
xo&&1===c.sampleWeight&&(xo++,g.Zl("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Xba++):"WARNING"===b&&wo.U("handleWarning",c);if(g.J("kevlar_gel_error_routing")){a=b;b:{p=g.u(Yba);for(d=p.next();!d.done;d=p.next())if(Ck(d.value.toLowerCase())){p=!0;break b}p=!1}if(p)p=void 0;else{d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);p=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==p.length&&(1!==p.length||isNaN(Number(p[0]))?2!==p.length||isNaN(Number(p[0]))||isNaN(Number(p[1]))||
(d.lineNumber=Number(p[0]),d.columnNumber=Number(p[1])):d.lineNumber=Number(p[0]));p={level:"ERROR_LEVEL_UNKNOWN",message:c.message,errorClassName:c.name,sampleWeight:c.sampleWeight};"ERROR"===a?p.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(p.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};f={pageUrl:window.location.href,kvPairs:[]};g.I("FEXP_EXPERIMENTS")&&(f.experimentIds=g.I("FEXP_EXPERIMENTS"));if(h=c.params)for(m=g.u(Object.keys(h)),e=m.next();!e.done;e=m.next())e=e.value,
f.kvPairs.push({key:"client."+e,value:String(h[e])});h=Yi("SERVER_NAME");m=Yi("SERVER_VERSION");h&&m&&(f.kvPairs.push({key:"server.name",value:h}),f.kvPairs.push({key:"server.version",value:m}));p={errorMetadata:f,stackTrace:d,logMessage:p}}p&&(g.Zl("clientError",p),("ERROR"===a||g.J("errors_flush_gel_always_killswitch"))&&il())}if(!g.J("suppress_error_204_logging")){a=c.params||{};b={urlParams:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},
postParams:{url:g.I("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){c.stack&&(b.postParams.stack=c.stack);p=g.u(Object.keys(a));for(d=p.next();!d.done;d=p.next())d=d.value,b.postParams["client."+d]=a[d];if(a=g.I("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(p=g.u(Object.keys(a)),d=p.next();!d.done;d=p.next())d=d.value,b.postParams[d]=a[d];a=g.I("SERVER_NAME",void 0);p=g.I("SERVER_VERSION",void 0);a&&p&&(b.postParams["server.name"]=
a,b.postParams["server.version"]=p)}g.Fj(g.I("ECATCHER_REPORT_HOST","")+"/error_204",b)}vo.add(c.message);uo++}}}};
Zba=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,g.oa(c))};
yo=function(a){Ml.call(this,1,arguments);this.csn=a};
Ao=function(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:g.Zc(d,function(f){return f.getAsJson()})};
d=g.u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(g.$b(e)||!e.trackingParams&&!e.veType)&&g.to(Error("Child VE logged with no data"));d={md:jo(b),Ph:b};"UNDEFINED_CSN"==b?zo("visualElementAttached",c,d):a?wl("visualElementAttached",c,a,d):g.Zl("visualElementAttached",c,d)};
Bo=function(a,b,c){var d=g.J("use_default_events_client")?void 0:g.Hn;b={csn:a,ve:b.getAsJson(),eventType:1};c&&(b.clientData=c);c={md:jo(a),Ph:a};"UNDEFINED_CSN"==a?zo("visualElementShown",b,c):d?wl("visualElementShown",b,d,c):g.Zl("visualElementShown",b,c)};
Co=function(a,b,c,d,e){var f=(d=void 0===d?!1:d)?16:8;c={csn:b,ve:c.getAsJson(),eventType:f};e&&(c.clientData=e);d={md:jo(b),Ph:b,AD:d};"UNDEFINED_CSN"==b?zo("visualElementHidden",c,d):a?wl("visualElementHidden",c,a,d):g.Zl("visualElementHidden",c,d)};
Do=function(a,b,c,d){var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:e};d&&(c.clientData=d);d={md:jo(b),Ph:b};"UNDEFINED_CSN"==b?zo("visualElementGestured",c,d):a?wl("visualElementGestured",c,a,d):g.Zl("visualElementGestured",c,d)};
$ba=function(){return g.Ke(Math.random()+"")};
zo=function(a,b,c){Eo.push({payloadName:a,payload:b,options:c});Fo||(Fo=g.Ul(Go,aca))};
aca=function(a){if(Eo){for(var b=g.u(Eo),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,wl(c.payloadName,c.payload,null,c.options));Eo.length=0}Fo=0};
Ho=function(a,b,c){Ao(g.J("use_default_events_client")?void 0:g.Hn,a,b,[c])};
bca=function(a,b){var c=g.J("use_default_events_client")?void 0:g.Hn;g.wd(b,function(d){d={csn:a,ve:d.getAsJson(),eventType:4};var e={md:jo(a),Ph:a};"UNDEFINED_CSN"==a?zo("visualElementShown",d,e):c?wl("visualElementShown",d,c,e):g.Zl("visualElementShown",d,e)})};
cca=function(a,b){var c=g.J("use_default_events_client")?void 0:g.Hn;g.wd(b,function(d){Co(c,a,d,void 0,void 0)})};
Io=function(){this.l=new Set;this.i=new Set;this.u=new Map};
Lo=function(a,b,c){var d=c&&0<c?c:0;c=d?g.ab()+1E3*d:0;if((d=d?Jo():Ko())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
Mo=function(a){var b=Ko(),c=Jo();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d};
No=function(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(dca,""),c=c.replace(eca,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else fca(a,b,c)};
fca=function(a,b,c){c=void 0===c?null:c;var d=Oo(a),e=document.getElementById(d),f=e&&Kn(e),h=e&&!f;f?b&&b():(b&&(f=$k(d,b),b=""+g.Va(b),Po[b]=f),h||(e=gca(a,d,function(){Kn(e)||(Jn(e,"loaded","true"),g.bl(d),g.yj(g.Za(dl,d),0))},c)))};
gca=function(a,b,c,d){d=void 0===d?null:d;var e=g.sf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);g.Dd(e,Pf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e};
Oo=function(a){var b=document.createElement("a");g.Cd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Id(a)};
So=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Qo(a)||c.some(function(e){return!Qo(e)}))throw Error("Only objects may be merged.");
c=g.u(c);for(d=c.next();!d.done;d=c.next())Ro(a,d.value);return a};
Ro=function(a,b){for(var c in b)if(Qo(b[c])){if(c in a&&!Qo(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ro(a[c],b[c])}else if(To(b[c])){if(c in a&&!To(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Uo(a[c],b[c])}else a[c]=b[c];return a};
Uo=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Qo(c)?a.push(Ro({},c)):To(c)?a.push(Uo([],c)):a.push(c);return a};
Qo=function(a){return"object"===typeof a&&!Array.isArray(a)};
To=function(a){return"object"===typeof a&&Array.isArray(a)};
g.Vo=function(a,b){var c=void 0===c?!0:c;var d=g.I("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Sd(window.location.href);e&&d.push(e);e=g.Sd(a);if(g.pb(d,e)||!e&&g.vc(a,"/"))if(g.J("autoescape_tempdata_url")&&(d=document.createElement("a"),g.Cd(d,a),a=d.href),a&&(a=Ud(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d)))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.io()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&(c="ST-"+g.Id(a).toString(36),b=b?$d(b):"",Ti(c,b,f||5))}else f=b,b="ST-"+g.Id(a).toString(36),
f=f?$d(f):"",Ti(b,f,5)};
g.Wo=function(a){if(a.simpleText)return a.simpleText;if(a.runs){var b=[];a=g.u(a.runs);for(var c=a.next();!c.done;c=a.next())c=c.value,c.text&&b.push(c.text);return b.join("")}return""};
Yo=function(){this.i={};if(this.l=Kaa()){var a=g.Si.get("CONSISTENCY",void 0);a&&Xo(this,{encryptedTokenJarContents:a})}};
Xo=function(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.l&&Ti("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}};
$o=function(){var a=g.I("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===g.I("INNERTUBE_CLIENT_NAME")&&(this.localStorage=Zo(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)};
ap=function(){$o.i||($o.i=new $o);return $o.i};
Zo=function(a){return void 0===a.localStorage?new Ll("yt-client-location"):a.localStorage};
g.bp=function(a,b){b=void 0===b?!1:b;var c=g.I("INNERTUBE_CONTEXT");if(!c)return g.so(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};c=g.ec(c);g.J("web_no_tracking_params_in_shell_killswitch")||delete c.clickTracking;c.client||(c.client={});var d=c.client;"MWEB"===d.clientName&&(d.clientFormFactor=g.I("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");d.screenWidthPoints=window.innerWidth;d.screenHeightPoints=window.innerHeight;d.screenPixelDensity=Math.round(window.devicePixelRatio||
1);d.screenDensityFloat=window.devicePixelRatio||1;d.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var e=void 0===e?!1:e;g.Al.getInstance();var f="USER_INTERFACE_THEME_LIGHT";g.Cl(0,165)?f="USER_INTERFACE_THEME_DARK":g.Cl(0,174)?f="USER_INTERFACE_THEME_LIGHT":!g.J("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(f="USER_INTERFACE_THEME_DARK");e=e?f:Nba()||f;d.userInterfaceTheme=
e;if(g.J("web_log_connection")&&!b){if(e=Hl())d.connectionType=e;g.J("web_log_effective_connection_type")&&(e=Jl())&&(c.client.effectiveConnectionType=e)}if("MWEB"===d.clientName||"WEB"===d.clientName)d.mainAppWebInfo={graftUrl:g.B.location.href},g.J("kevlar_woffle")&&xl.i&&(d.mainAppWebInfo.pwaInstallabilityStatus=xl.i.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),g.J("web_include_display_mode_killswitch")||(d.mainAppWebInfo.webDisplayMode=yl()),g.J("kevlar_share_panel_more_button")&&
(d.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share);if(!g.J("web_populate_time_zone_itc_killswitch")){a:{if("undefined"!==typeof Intl)try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(z){}h=void 0}h&&(d.timeZone=h)}(h="MWEB"===d.clientName?g.Si.get("EXPERIMENTS_DEBUG",void 0):g.Si.get("EXPERIMENTS_DEBUG"))?d.experimentsToken="ZERO"===h?"GgIQAQ%3D%3D":h:delete d.experimentsToken;d=bj();Yo.i||(Yo.i=new Yo);h=Sb(Yo.i.i);c.request=Object.assign(Object.assign({},
c.request),{internalExperimentFlags:d,consistencyTokenJars:h});h=g.Al.getInstance();d=g.Cl(0,58);h=h.get("gsml","");c.user=Object.assign({},c.user);d&&(c.user.enableSafetyMode=d);h&&(c.user.lockedSafetyMode=!0);(d=g.I("DELEGATED_SESSION_ID"))&&!g.J("pageid_as_header_web")&&(c.user.onBehalfOfUser=d);!b&&(b=g.io())&&(c.clientScreenNonce=b);a&&(c.clickTracking={clickTrackingParams:a});g.J("web_enable_client_location_service")&&(a=ap(),c.client||(c.client={}),a.i?(c.client.locationInfo||(c.client.locationInfo=
{}),c.client.locationInfo.latitudeE7=1E7*a.i.coords.latitude,c.client.locationInfo.longitudeE7=1E7*a.i.coords.longitude,c.client.locationInfo.horizontalAccuracyMeters=a.i.coords.accuracy,c.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):a.locationPlayabilityToken&&(c.client.locationPlayabilityToken=a.locationPlayabilityToken));var l,m;try{var n=null===(l=c.adSignalsInfo)||void 0===l?void 0:l.consentBumpParams,p=g.uj(void 0),q=p.bid;delete p.bid;c.adSignalsInfo={params:[],bid:q};for(var r=
g.u(Object.entries(p)),t=r.next();!t.done;t=r.next()){var v=g.u(t.value),y=v.next().value,C=v.next().value;null===(m=c.adSignalsInfo.params)||void 0===m?void 0:m.push({key:y,value:""+C})}!g.Ui()&&n&&(c.adSignalsInfo.consentBumpParams=n)}catch(z){g.so(z)}return c};
hca=function(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=cp[b];if(c){var d=new RegExp(c),e=g.u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(cp).forEach(function(h){var l=g.u(h);h=l.next().value;l=l.next().value;b!==h&&f.push(l)});
d=new RegExp(f.join("|"));a.sort(function(h,l){return h.length-l.length});
e=g.u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]};
dp=function(a){return"/youtubei/v1/"+hca(a)};
ep=function(){};
fp=function(){};
gp=function(a,b,c,d){var e=Yl;this.u=b;this.i=c;this.handleError=e;this.l=d;a.zv||(a.zv={});a.zv=Object.assign(Object.assign({},ica),a.zv)};
g.ip=function(a,b,c){var d=void 0===d?{np:{identity:hp}}:d;var e=void 0===e?!0:e;b.context||(b.context=g.bp(void 0,e));return new g.oh(function(f){return D(a,function l(){var m=this,n,p,q;return A(l,function(r){if(1==r.i)return x(r,jca(m,d),2);n=r.l;var t=g.I("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null===n||void 0===n?0:n.Authorization)?c:g.oj(c,{key:g.I("INNERTUBE_API_KEY")});var v=g.I("INNERTUBE_HOST_OVERRIDE");v&&(t=String(v)+String(Ud(t)));p=t;t={method:"POST",mode:g.pj(p)?"same-origin":
"cors",credentials:g.pj(p)?"same-origin":"include"};q={input:p,Oq:t,Ry:b,config:d};f(kca(m,q,n));r.i=0})})})};
kca=function(a,b,c){return D(a,function e(){var f=this,h,l,m,n,p;return A(e,function(q){if(1==q.i)return h=f,q.fb(2);if(2!=q.i&&(l=q.l)&&!l.isExpired())return q.return(Promise.resolve(l.i()));m=JSON.stringify(b.Ry);b.Oq=Object.assign(Object.assign({},b.Oq),{headers:c});n=Object.assign({},b.Oq);"POST"===b.Oq.method&&(n=Object.assign(Object.assign({},n),{body:m}));p=f.u.fetch(b.input,n);return q.return(p.then(function(r){if(r&&h.l)for(var t=g.u(h.l),v=t.next();!v.done;v=t.next())v.value.Yj(r,b);return Promise.resolve(r)}))})})};
jca=function(a,b){return D(a,function d(){var e=this;return A(d,function(f){if(e.i.VG){var h=f.return,l,m,n=(null===(m=null===b||void 0===b?void 0:b.np)||void 0===m?void 0:m.identity)||hp;m=null===(l=null===b||void 0===b?void 0:b.np)||void 0===l?void 0:l.sessionIndex;l=e.i.Ip(n,{sessionIndex:m});l=Object.assign(Object.assign({},jp()),l);f=h.call(f,l)}else f=f.return(lca(e,b));return f})})};
lca=function(a,b){var c,d,e=(null===(c=null===b||void 0===b?void 0:b.np)||void 0===c?void 0:c.identity)||hp;b=null===(d=null===b||void 0===b?void 0:b.np)||void 0===d?void 0:d.sessionIndex;return kba(a.i,e,{sessionIndex:b}).then(function(f){return Promise.resolve(Object.assign(Object.assign({},jp()),f))})};
jp=function(){var a={"Content-Type":"application/json"},b=g.I("VISITOR_DATA");b&&(a["X-Goog-Visitor-Id"]=b);(b=g.I("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(a["X-Youtube-Client-Name"]=b);(b=g.I("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(a["X-Youtube-Client-Version"]=b);g.J("webfe_track_one_platform_auth_mismatch")&&(a["X-Youtube-Bootstrap-Logged-In"]=g.I("LOGGED_IN",!1));(b=g.I("CHROME_CONNECTED_HEADER"))&&(a["X-Youtube-Chrome-Connected"]=b);return a};
kp=function(){};
lp=function(){};
mp=function(){};
np=function(){};
op=function(){};
pp=function(){};
qp=function(){this.i=this.l=void 0};
g.sp=function(a,b){if(!rp){var c={vT:{feedbackEndpoint:mp,modifyChannelNotificationPreferenceEndpoint:np,playlistEditEndpoint:op,subscribeEndpoint:kp,unsubscribeEndpoint:lp,webPlayerShareEntityServiceEndpoint:pp}},d=g.J("web_enable_client_location_service")?ap():void 0,e=[];d&&e.push(d);void 0===a&&(Vl.i||(Vl.i=new Vl),a=Vl.i);void 0===b&&(qp.i||(qp.i=new qp),b=qp.i);gp.i=new gp(c,b,a,e);rp=gp.i}return rp};
up=function(){if(!g.J("disable_ad_status_on_html5_clients")&&(!g.J("condition_ad_status_fetch_on_consent_cookie_html5_clients")||g.Ui())&&"1"!=g.bc(g.I("PLAYER_VARS",{}),"privembed",!1)){var a=function(){tp=!0;"google_ad_status"in window?Xi("DCLKSTAT",1):Xi("DCLKSTAT",2)};
try{No("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}mca.push(ik(function(){if(!(tp||"google_ad_status"in window)){try{if(a){var b=""+g.Va(a),c=Po[b];c&&al(c)}}catch(d){}tp=!0;Xi("DCLKSTAT",3)}},5E3))}};
vp=function(){var a=Number(g.I("DCLKSTAT",0));return isNaN(a)?0:a};
wp=function(a,b){Ml.call(this,1,arguments)};
xp=function(a,b){Ml.call(this,1,arguments);this.i=a};
nca=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
zp=function(a){var b=yp(a);if(b.aft)return b.aft;a=g.I((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Ap=function(a){return!!g.Na("yt.timing."+(a||"")+"pingSent_")};
Bp=function(a,b){g.Ia("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Dp=function(a){return g.Na("ytcsi."+(a||"")+"data_")||Cp(a)};
Ep=function(a){a=Dp(a);a.info||(a.info={});return a.info};
yp=function(a){a=Dp(a);a.tick||(a.tick={});return a.tick};
Fp=function(a){var b=Dp(a).nonce;b||(b=g.Zn(),Dp(a).nonce=b);return b};
Cp=function(a){var b={tick:{},info:{}};g.Ia("ytcsi."+(a||"")+"data_",b,void 0);return b};
Hp=function(a){var b=yp(a||""),c=zp(a);c&&!Gp&&(Pl(oca,new wp(Math.round(c-b._start),a)),Gp=!0)};
Ip=function(){var a=g.Na("ytcsi.debug");a||(a=[],g.Ia("ytcsi.debug",a,void 0),g.Ia("ytcsi.reference",{},void 0));return a};
Kp=function(a){a=a||"";var b=Jp();if(b[a])return b[a];var c=Ip(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d};
g.Lp=function(a){a=a||"";var b=Jp();b[a]&&delete b[a];var c=Ip(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);b[a]=d};
Jp=function(){var a=g.Na("ytcsi.reference");if(a)return a;Ip();return g.Na("ytcsi.reference")};
Mp=function(){this.i=0};
Np=function(){Mp.i||(Mp.i=new Mp);return Mp.i};
Pp=function(a,b){Op[b]=Op[b]||{count:0};var c=Op[b];c.count++;c.time=(0,g.M)();a.i||(a.i=hk(function(){var d=(0,g.M)(),e;for(e in Op)Op[e]&&6E4<d-Op[e].time&&delete Op[e];a&&(a.i=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.hm("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||g.to(c)),!0):!1};
Qp=function(a){return!!g.I("FORCE_CSI_ON_GEL",!1)||g.J("csi_on_gel")||!!Dp(a).useGel};
Rp=function(a){a=Dp(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel};
g.Sp=function(a){Cp(a);pca();Bp(!1,a);a||(g.I("TIMING_ACTION")&&Xi("PREVIOUS_ACTION",g.I("TIMING_ACTION")),Xi("TIMING_ACTION",""))};
g.Yp=function(a,b,c,d){d=d?d:a;g.Tp(d);g.Lp(d);g.Sp(d);Dp(d).useGel=!0;Kp(d||"").info.actionType=a;Xi(d+"TIMING_AFT_KEYS",b);Xi(d+"TIMING_ACTION",a);Up("yt_sts","c",d);g.Vp("_start",c,d);if(Qp(d)){a={actionType:Wp[Yi((d||"")+"TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN",previousAction:Wp[Yi("PREVIOUS_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(b=g.io())a.clientScreenNonce=b;b=Fp(d);Np().info(a,b)}g.Ia("ytglobal.timing"+(d||"")+"ready_",!0,void 0);Xp(d)};
Up=function(a,b,c){if(null!==b)if(Ep(c)[a]=b,Qp(c)){var d=b;b=Rp(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Zp){b=Zp[a];g.pb(qca,b)&&(d=!!d);a in $p&&"string"===typeof d&&(d=$p[a]+d.toUpperCase());a=d;d=b.split(".");for(var h=e={},l=0;l<d.length-1;l++){var m=d[l];h[m]={};h=h[m]}h[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;b=So({},e)}else g.pb(rca,a)||g.to(new g.hm("Unknown label logged with GEL CSI",
a)),b=void 0;b&&g.aq(b,c)}else Kp(c||"").info[a]=b};
g.aq=function(a,b){if(Qp(b)){var c=Kp(b||"");So(c.info,a);c=Rp(b);c.gelInfos||(c.gelInfos={});So(c.gelInfos,a);b=Fp(b);Np().info(a,b)}};
g.Vp=function(a,b,c){var d=yp(c);if(!b&&"_"!==a[0]){var e=a;bq.mark&&(g.vc(e,"mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),bq.mark(e))}e=b||(0,g.M)();d[a]=e;e=Rp(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||(0,g.M)();if(Qp(c)){Kp(c||"").tick[a]=b||(0,g.M)();e=Fp(c);if("_start"===a){var f=Np();Pp(f,"baseline_"+e)||g.Zl("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Np().tick(a,e,b);Hp(c);e=!0}else e=!1;e||(Xp(c),Kp(c||"").tick[a]=b||(0,g.M)());return d[a]};
cq=function(a){var b="above_the_fold";bq&&bq.measure&&(g.vc(b,"measure_")||(b="measure_"+b),a?bq.measure(b,a):bq.measure(b))};
dq=function(a,b){b=yp(b);return a in b};
eq=function(a,b){dq("_start",b)&&!dq(a,b)&&g.Vp(a,void 0,b)};
Xp=function(a){if(!Ap(a)){var b=g.I((a||"")+"TIMING_ACTION",void 0),c=yp(a);if(g.Na("ytglobal.timing"+(a||"")+"ready_")&&b&&dq("_start")&&zp(a))if(Hp(a),a)fq(a);else{b=!0;var d=g.I("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&fq(a)}}};
sca=function(){switch(Pj()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}};
fq=function(a){if(!Qp(a)){var b=yp(a),c=Ep(a),d=b._start,e=g.I("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.I((a||"")+"TIMING_ACTION",void 0)},h=c.srt;void 0!==b.srt&&delete c.srt;b.aft=zp(a);var l=yp(a),m=l.pbr,n=l.vc;l=l.pbs;m&&n&&l&&m<n&&n<l&&Ep(a).yt_pvis&&"youtube"===e&&(Up("yt_lt","hot_bg",a),e=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-e));for(var p in c)"_"!==p.charAt(0)&&(f[p]=c[p]);b.ps=(0,g.M)();p={};e=[];for(var q in b)"_"!==q.charAt(0)&&(m=Math.round(b[q]-d),p[q]=m,e.push(q+"."+
m));f.rt=e.join(",");b=!!c.ap;c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||g.J("always_send_csi_204_with_beacon"))?Uk(f):g.Tk(f);Bp(!0,a);Pl(g.gq,new xp(p.aft+(Number(h)||0),a))}};
g.Tp=function(a){if(Qp(a))dq("_start",a)&&g.Vp("aa",void 0,a);else if(!Ap(a)){var b=g.I("CSI_SERVICE_NAME","youtube");g.I((a||"")+"TIMING_ACTION",void 0)&&b&&(g.Vp("aa",void 0,a),Up("ap",1,a),Up("yt_fss","c",a),fq(a))}};
uca=function(){var a,b;return D(this,function d(){var e;return A(d,function(f){e=navigator;return(null===(a=e.storage)||void 0===a?0:a.estimate)?f.return(e.storage.estimate()):(null===(b=e.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)?f.return(tca()):f.return()})})};
tca=function(){var a=navigator;return new Promise(function(b,c){var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})};
Xl=function(a,b){var c=this;this.handleError=a;this.i=b;this.l=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.l=!0})};
vca=function(a,b){uca().then(function(c){c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:hq(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:hq(null===c||void 0===c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})};
hq=function(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))};
iq=function(){this.l=!1;this.i=null};
kq=function(a,b,c,d,e){var f,h;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(h=window.botguard)||void 0===h?void 0:h.bg)if(c)try{jq(a,new d(b,e?function(){return e(b)}:g.Oa))}catch(l){l instanceof Error&&g.to(l)}else{try{jq(a,new d(b))}catch(l){l instanceof Error&&g.to(l)}e&&e(b)}else g.to(Error("Failed to finish initializing VM"))};
wca=function(a,b){var c=lq;a=void 0===a?{}:a;b=void 0===b?3E3:b;return c.i?Promise.race([new Promise(function(d,e){setTimeout(function(){setTimeout(function(){setTimeout(function(){e(Error("Timed out waiting for snapshot"))},0)},0)},b)}),
new Promise(function(d){c.i?c.i.hasOwnProperty("hot")?c.i.hot(d,!0,a):c.i.invoke(d,!0,a):d(null)})]):Promise.resolve(null)};
jq=function(a,b){a.i=b};
xca=function(){eq("bg_l","player_att");mq=(0,g.M)()};
yca=function(a,b){a=void 0===a?{}:a;return wca(a,b)};
zca=function(a,b){var c=this;this.videoData=a;this.u=b;a={};this.l=(a.c1a=function(){if(nq(c)){var d="";c.videoData&&c.videoData.ea&&(d=c.videoData.ea+("&r1b="+c.videoData.clientPlaybackNonce));var e={};d=(e.atr_challenge=d,e);eq("bg_v","player_att");c.u?(d=void 0===d?{}:d,d=lq.invoke(d)):d=g.Na("yt.abuse.player.invokeBotguard")(d);eq("bg_s","player_att");d=d?"r1a="+d:"r1c=2"}else eq("bg_e","player_att"),d="r1c=1";return d},a.c3a=function(d){return"r3a="+Math.floor(c.videoData.lengthSeconds%Number(d.c3a)).toString()},
a.c6a=function(d){d=Number(d.c);
var e=c.u?vp():(e=g.Na("yt.abuse.dclkstatus.checkDclkStatus"))?e():NaN;return"r6a="+(d^e)},a);
this.videoData&&this.videoData.ea?this.i=g.jj(this.videoData.ea):this.i={}};
Aca=function(a){if(a.videoData&&a.videoData.ea){for(var b=[a.videoData.ea],c=g.u(Object.keys(a.l)),d=c.next();!d.done;d=c.next())d=d.value,a.i[d]&&a.l[d]&&(d=a.l[d](a.i))&&b.push(d);return b.join("&")}return null};
Cca=function(a){var b={};Object.assign(b,a.l);"c1b"in a.i&&(b.c1a=function(){return Bca(a)});
if(a.videoData&&a.videoData.ea){for(var c=[a.videoData.ea],d=g.u(Object.keys(b)),e=d.next();!e.done;e=d.next())e=e.value,a.i[e]&&b[e]&&(e=b[e](a.i))&&c.push(e);return new Promise(function(f,h){Promise.all(c).then(function(l){f(l.filter(function(m){return!!m}).join("&"))},h)})}return Promise.resolve(null)};
nq=function(a){return a.u?!!lq.i:(a=g.Na("yt.abuse.player.botguardInitialized"))&&a()};
Bca=function(a){if(!nq(a))return eq("bg_e","player_att"),Promise.resolve("r1c=1");var b="";a.videoData&&a.videoData.ea&&(b=a.videoData.ea+("&r1b="+a.videoData.clientPlaybackNonce));var c={},d=(c.atr_challenge=b,c),e=a.u?yca:g.Na("yt.abuse.player.invokeBotguardAsync");return new Promise(function(f){eq("bg_v","player_att");e(d,aj("botguard_async_snapshot_timeout_ms",3E3)).then(function(h){h?(eq("bg_s","player_att"),f("r1a="+h)):(eq("bg_e","player_att"),f("r1c=2"))},function(){eq("bg_e","player_att");
f("r1c=3")})})};
oq=function(a,b,c){this.errorCode=a;this.i=b;this.details=c||{}};
g.pq=function(a){var b;for(b in a)if(a.hasOwnProperty(b)){var c=(""+a[b]).replace(/[:,=]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
qq=function(a){var b=void 0===b?!1:b;if(a instanceof oq)return a;a=a&&a instanceof Error?a:Error(""+a);b?g.so(a):g.to(a);return new oq(b?"player.fatalexception":"player.exception",b,{name:""+a.name,message:""+a.message})};
rq=function(a,b){this.id=a;this.i=b;this.captionTracks=[];this.l=this.B=this.C=null;this.u="UNKNOWN";this.captionsInitialState="CAPTIONS_INITIAL_STATE_UNKNOWN"};
sq=function(a,b,c,d){this.u=c;this.reason=d;this.l=a||0;this.i=b||0};
tq=function(a,b){return a.l===b.l&&a.i===b.i&&a.u===b.u&&a.reason===b.reason};
vq=function(a,b,c,d){return new sq(uq[a]||0,uq[b]||0,c,d)};
wq=function(a){var b=uq.auto;return a.l===b&&a.i===b};
xq=function(a){var b=a.i||a.l;return Xb(Dca,function(c){return uq[c]===b})||"auto"};
yq=function(a,b){b=uq[b];return a.l<=b&&(!a.i||a.i>=b)};
Aq=function(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return zq(a)};
zq=function(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c};
Eca=function(a,b,c,d){if(g.Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b};
Cq=function(a){a=a.split("");Bq.ka(a,25);Bq.wS(a,35);Bq.bl(a,1);Bq.wS(a,10);Bq.bl(a,3);Bq.ka(a,65);Bq.ka(a,32);Bq.bl(a,1);Bq.wS(a,47);return a.join("")};
Eq=function(){this.u=this.i=0;this.l=Array.from({length:Dq.length}).fill(0)};
Fca=function(a,b,c){c=void 0===c?1:c;a.i+=c;a.u+=b;var d=b/c;Dq.forEach(function(e,f){d<e||(a.l[f]+=c)})};
Fq=function(){};
Gq=function(a){this.name=a;this.startTimeMs=(0,g.M)();this.i=!1};
Hq=function(){this.profiles=new Fq};
Iq=function(a,b,c,d){d=void 0===d?1:d;0<=c&&(b in a.profiles||(a.profiles[b]=new Eq),Fca(a.profiles[b],c,d))};
Jq=function(){};
Kq=function(a,b){var c="";49<b?c="p60":32<b&&(c="p48");return a+c};
g.yr=function(a){var b=a.V(),c=wr(b),d=a.Ka;d&&(c.clickTracking={clickTrackingParams:d});d=c.client||{};var e="EMBED",f=xr(a);"leanback"===f?e="WATCH":b.S("gvi_channel_client_screen")&&"profilepage"===f?e="CHANNEL":a.Tb?e="LIVE_MONITOR":"detailpage"===f?e="WATCH_FULL_SCREEN":"adunit"===f?e="ADUNIT":"sponsorshipsoffer"===f&&(e="UNKNOWN");d.clientScreen=e;if(b=a.kidsAppInfo)d.kidsAppInfo=JSON.parse(b);(e=a.dg)&&!b&&(d.kidsAppInfo={contentSettings:{ageUpMode:Gca[e]}});a.yj&&(d.unpluggedAppInfo={enableFilterMode:!0});
if(b=a.Ma)d.unpluggedLocationInfo=b;c.client=d;d=c.request||{};a.Gb&&(d.isPrefetch=!0);if(b=a.mdxEnvironment)d.mdxEnvironment=b;if(b=a.mdxControlMode)d.mdxControlMode=Hca[b];c.request=d;d=c.user||{};if(b=a.W)d.credentialTransferTokens=[{token:b,scope:"VIDEO"}];if(b=a.Ua)d.delegatePurchases={oauthToken:b},d.kidsParent={oauthToken:b};c.user=d;if(d=a.contextParams)c.activePlayers=[{playerContextParams:d}];if(a=a.clientScreenNonce)c.clientScreenNonce=a;return c};
wr=function(a){var b=g.bp(),c=b.client||{};if(a.ea){var d=a.ea.split(","),e=[];d=g.u(d);for(var f=d.next();!f.done;f=d.next())e.push(Number(f.value));c.experimentIds=e}if(e=a.homeGroupInfo)c.homeGroupInfo=JSON.parse(e);if(e=a.getPlayerType())c.playerType=e;if(e=a.deviceParams.ctheme)c.theme=e;if(e=a.livingRoomAppMode)c.tvAppInfo={livingRoomAppMode:e};b.client=c;c=b.user||{};a.enableSafetyMode&&(c.enableSafetyMode=!0);b.user=c;if(a=a.Xa)b.thirdParty={embedUrl:a};return b};
Er=function(a,b,c){var d=a.videoId,e=g.yr(a),f=a.V(),h={html5Preference:"HTML5_PREF_WANTS",lactMilliseconds:String(g.zk()),referer:document.location.toString(),signatureTimestamp:18722};g.Al.getInstance();a.Rf&&(h.autonav=!0);g.Cl(0,141)&&(h.autonavState=g.Cl(0,140)?"STATE_OFF":"STATE_ON");h.autoCaptionsDefaultOn=g.Cl(0,66);zr(a)&&(h.autoplay=!0);f.l&&a.cycToken&&(h.cycToken=a.cycToken);f.enablePrivacyFilter&&(h.enablePrivacyFilter=!0);a.Zk&&(h.fling=!0);var l=a.Nc;if(l){var m={},n=l.split("|");3===
n.length?(m.breakType=Ica[n[0]],m.offset={kind:"OFFSET_MILLISECONDS",value:String(Number(n[1])||0)},m.url=n[2]):m.url=l;h.forceAdParameters={videoAds:[m]}}a.isLivingRoomDeeplink&&(h.isLivingRoomDeeplink=!0);l=a.eh;if(null!=l){l={startWalltime:String(l)};if(m=a.Oc)l.manifestDuration=String(m||14400);h.liveContext=l}a.mutedAutoplay&&(h.mutedAutoplay=!0);a.Mc&&(h.splay=!0);l=a.vnd;5===l&&(h.vnd=l);if((l=a.isMdxPlayback)||g.P(f.experiments,"send_mdx_remote_data_if_present")){l={triggeredByMdx:l};var p=
a.Td;if(p)if(m=a.kt,n=p.startsWith("!"),p=p.split("-"),3===p.length){n&&(p[0]=p[0].substr(1));n={applicationState:n?"INACTIVE":"ACTIVE",clientFormFactor:Jca[p[1]]||"UNKNOWN_FORM_FACTOR",clientName:Kca[p[0]]||"UNKNOWN_INTERFACE",clientVersion:p[2]||"",platform:Lca[p[1]]||"UNKNOWN_PLATFORM"};if(m){try{var q=JSON.parse(m)}catch(t){g.to(t)}if(q){var r={params:[{key:"ms",value:q.ms}]};n.osName=q.os_name;n.userAgent=q.user_agent;n.windowHeightPoints=q.window_height_points;n.windowWidthPoints=q.window_width_points}}l.remoteContexts=
[{adSignalsInfo:r,remoteClient:n}]}else l.remoteContexts=[{remoteClient:{clientName:"UNKNOWN_INTERFACE"}}];if(r=a.lh)l.skippableAdsSupported=r.split(",").includes("ska");h.mdxContext=l}r=b.width;0<r&&(h.playerWidthPixels=r);if(b=b.height)h.playerHeightPixels=b;0!==c&&(h.vis=c);if(c=f.widgetReferrer)h.widgetReferrer=c.substring(0,128);d={videoId:d,context:e,playbackContext:{contentPlaybackContext:h}};a.contentCheckOk&&(d.contentCheckOk=!0);if(e=a.clientPlaybackNonce)d.cpn=e;if(e=a.playerParams)d.params=
e;if(e=a.playlistId)d.playlistId=e;a.racyCheckOk&&(d.racyCheckOk=!0);a.S("hoffle_save")&&Ar(a)&&(d.forOffline=!0);a=a.V();if(e=a.embedConfig)d.serializedThirdPartyEmbedConfig=e;d.captionParams={};e=g.Cl(g.Al.getInstance(),65);g.Br(a)&&(d.captionParams.deviceCaptionsOn=null!=e?!e:!1);g.Cr(a)&&a.S("web_player_i_see_captions_2")&&(a=(0,g.Dr)(),null===a||void 0===a?0:a.length)&&(d.captionParams.viewerSelectedCaptionLangs=a);return d};
Fr=function(a){var b=a.V();g.Al.getInstance();var c={context:g.yr(a),videoId:a.videoId,racyCheckOk:a.racyCheckOk,contentCheckOk:a.contentCheckOk,autonavState:"STATE_NONE"};"adunit"===xr(a)&&(c.isAdPlayback=!0);b.embedConfig&&(c.serializedThirdPartyEmbedConfig=b.embedConfig);b.Vd&&(c.showContentOwnerOnly=!0);g.Cl(0,141)&&(c.autonavState=g.Cl(0,140)?"STATE_OFF":"STATE_ON");return c};
Gr=function(a){var b,c;return D(this,function e(){var f,h,l,m,n;return A(e,function(p){if(1==p.i)return f=g.sp(),h={context:g.bp(),videoIds:[a]},l=dp(Mca),x(p,g.ip(f,h,l),2);m=p.l;if(!m)throw Error("Network request failed");if(!m.videos||1!==m.videos.length)throw Error("Failed request: "+(null!==(c=null===(b=m.error)||void 0===b?void 0:b.code)&&void 0!==c?c:"?"));n=m.videos[0].offlineVideoData;if(!n)throw Error("No data");return p.return(n)})})};
Hr=function(a){if(void 0===a?0:a){if(void 0===mn)throw Error("Datasync ID is not set.");return"yt-player-local-img:"+nn()}return"yt-player-local-img"};
Nca=function(a){return"yt-player-local-img"===a.split(":")[0]};
Ir=function(){return"caches"in window?g.B.caches.keys().then(function(a){return Promise.all(a.filter(Nca).map(function(b){return g.B.caches.delete(b)})).then(function(b){return b.every(function(c){return c})})}):Promise.resolve(!0)};
Jr=function(a,b){return"caches"in window&&a.length?g.B.caches.open(Hr(void 0===b?!1:b)).then(function(c){return Promise.all(a.map(function(d){return c.delete(d)}))}).then(function(){return Promise.resolve()}):Promise.resolve()};
Kr=function(a,b){return"caches"in window&&fetch&&a.length?g.B.caches.open(Hr(void 0===b?!1:b)).then(function(c){return c.addAll(a)}):Promise.resolve()};
Mr=function(){void 0===Lr&&(Lr=g.wi());return Lr};
Nr=function(){var a=Mr();if(!a)return{};try{var b=a.get("yt-player-lv");return JSON.parse(b||"{}")}catch(c){return{}}};
Or=function(a){var b=Mr();b&&(a=JSON.stringify(a),b.set("yt-player-lv",a))};
Pr=function(){var a=Mr();a&&a.remove("yt-player-lv")};
Qr=function(a){return Nr()[a]||0};
Rr=function(){var a=Nr();return Object.keys(a)};
Sr=function(a){var b=Nr();return Object.keys(b).filter(function(c){return b[c]===a})};
Tr=function(a,b){var c=Nr();b!==c[a]&&(0!==b?c[a]=b:delete c[a],Or(c))};
Oca=function(a){var b=Nr();b=Object.assign({},b);a=Object.assign({},a);for(var c in b)a[c]?(4!==b[c]&&(b[c]=a[c]),delete a[c]):3!==b[c]&&2!==b[c]&&(b[c]=4);Object.assign(b,a);Or(b);JSON.stringify(b);return b};
Ur=function(a){return!!a&&1===Qr(a)};
Pca=function(){var a=Mr();if(!a)return!1;try{return null!==a.get("yt-player-lv-id")}catch(b){return!1}};
Yr=function(){return D(this,function b(){var c,d,e;return A(b,function(f){switch(f.i){case 1:c=Mr();if(!c)return f.return(Promise.reject("No LocalStorage"));if(Vr){f.fb(2);break}d=nn();e=c.get("yt-player-lv-id");if(!e){c.set("yt-player-lv-id",d);f.fb(3);break}if(e===d){f.fb(3);break}return x(f,Wr(),5);case 5:return x(f,Ir(),6);case 6:c.set("yt-player-lv-id",d);case 3:Vr=!0;case 2:return f.return(Xr().open())}})})};
$r=function(a,b){return D(this,function d(){var e;return A(d,function(f){if(1==f.i)return x(f,Yr(),2);e=f.l;return f.return(Bm(e,["index","media","metadata","playerdata","captions"],"readwrite",function(h){var l=Zr(a);l=[Dm(h,"index").delete(l),Dm(h,"media").delete(l),Dm(h,"playerdata").delete(l),Dm(h,"captions").delete(l)];b&&l.push(Dm(h,"metadata").delete(a));return tn.all(l).then(function(){})}))})})};
bs=function(){return D(this,function b(){var c;return A(b,function(d){if(1==d.i)return x(d,Yr(),2);c=d.l;return d.return(Bm(c,["index","media"],"readwrite",function(e){var f={};return Im(Dm(e,"index"),{},function(h){var l,m=h.getKey().match(/^([\w\-_]+)\|(a|v)$/),n=tn.resolve(void 0);if(m){var p=m[1];m=m[2];f[p]=f[p]||{};f[p][m]=as(null===(l=h.getValue())||void 0===l?void 0:l.fmts)}else n=h.delete().then(function(){}),Qca("Deleting unexpected index key "+h.getKey());
return tn.all([h.continue(),n]).then(function(q){return g.u(q).next().value})}).then(function(){for(var h={},l=g.u(Object.keys(f)),m=l.next();!m.done;m=l.next()){m=m.value;
var n=f[m].v;h[m]=f[m].a&&n?1:2}var p=Oca(h);return wba(Dm(e,"media"),function(q){var r=q.getKey().match(/^([\w\-_]+)\|(\d+)\|(\d+)$/);r&&h[r[1]]||(Dm(e,"media").delete(q.getKey()),q.getKey());return q.continue()}).then(function(){return p})})}))})})};
Rca=function(a,b){return D(this,function d(){var e,f;return A(d,function(h){if(1==h.i)return x(h,Yr(),2);e=h.l;f={offlineVideoData:b};return x(h,Em(e,"metadata",f,a),0)})})};
Sca=function(a,b){var c=Math.floor(Date.now()/1E3);D(this,function e(){var f,h;return A(e,function(l){if(1==l.i)return JSON.stringify(b.offlineState),f={timestampSecs:c,player:b},x(l,Yr(),2);h=l.l;return x(l,Em(h,"playerdata",f,a),0)})})};
ds=function(a,b,c,d,e,f){return D(this,function l(){var m,n,p,q;return A(l,function(r){switch(r.i){case 1:return m=Qr(a),4===m?r.return(Promise.resolve(4)):x(r,Yr(),2);case 2:return n=r.l,va(r,3),x(r,Bm(n,["index","media"],"readwrite",function(t){if(void 0!==e&&void 0!==f){var v=""+a+"|"+b.id+"|"+e;v=Cm(Dm(t,"media"),f,v)}else v=tn.resolve(void 0);var y=cs(a,b.isVideo()),C=cs(a,!b.isVideo()),z={fmts:d,format:c||{}};y=Cm(Dm(t,"index"),z,y);var E=as(d);t=E?Dm(t,"index").get(C):tn.resolve(void 0);return tn.all([t,
v,y]).then(function(O){O=g.u(O).next().value;var L=Qr(a);4!==L&&E&&void 0!==O&&as(O.fmts)&&(L=1,Tr(a,L));return L})}),5);
case 5:return r.return(r.l);case 3:p=xa(r);q=Qr(a);if(4===q)return r.return(q);Tr(a,4);throw p;}})})};
Tca=function(a){return D(this,function c(){var d;return A(c,function(e){if(1==e.i)return x(e,Yr(),2);d=e.l;return e.return(Bm(d,["index"],"readonly",function(f){var h=Zr(a);return Dm(f,"index").getAll(h).then(function(l){return l.map(function(m){return m?m.format:{}})})}))})})};
Uca=function(a,b,c){return D(this,function e(){var f;return A(e,function(h){if(1==h.i)return x(h,Yr(),2);f=h.l;return h.return(Bm(f,["media"],"readonly",function(l){var m=""+a+"|"+b+"|"+c;return Dm(l,"media").get(m)}))})})};
Vca=function(a){return D(this,function c(){var d;return A(c,function(e){if(1==e.i)return x(e,Yr(),2);d=e.l;return e.return(Bm(d,["playerdata","index"],"readonly",function(f){var h=Dm(f,"playerdata").get(a),l=Zr(a);return Dm(f,"index").getAll(l).then(function(m){return h.then(function(n){if(!n||!n.player)return n;delete n.player.streamingData;if(0===m.length)return n;for(var p=[],q=g.u(m),r=q.next();!r.done;r=q.next())r=r.value,r.format&&p.push(r.format);n.player.streamingData={adaptiveFormats:p};
return n})})}))})})};
Wca=function(a){return D(this,function c(){var d,e,f,h;return A(c,function(l){return 1==l.i?x(l,Yr(),2):3!=l.i?(d=l.l,e=[],f=[],h=[],x(l,Bm(d,["metadata"],"readonly",function(m){return Im(Dm(m,"metadata"),{},function(n){var p,q,r=n.getKey(),t=null===(p=n.getValue())||void 0===p?void 0:p.offlineVideoData;if(!t)return n.continue();if(r===a){if(r=null===(q=t.thumbnail)||void 0===q?void 0:q.thumbnails){r=g.u(r);for(var v=r.next();!v.done;v=r.next())v=v.value,v.url&&e.push(v.url)}f.push.apply(f,g.oa(es(t)))}else h.push.apply(h,
g.oa(es(t)));return n.continue()})}),3)):l.return(e.concat(f.filter(function(m){return!h.includes(m)})))})})};
es=function(a){var b,c,d,e=null===(d=null===(c=null===(b=a.channel)||void 0===b?void 0:b.offlineChannelData)||void 0===c?void 0:c.thumbnail)||void 0===d?void 0:d.thumbnails;if(!e)return[];a=[];e=g.u(e);for(var f=e.next();!f.done;f=e.next())f=f.value,f.url&&a.push(f.url);return a};
gs=function(a){return D(this,function c(){var d;return A(c,function(e){if(1==e.i)return x(e,Yr(),2);d=e.l;return e.return(Bm(d,["index","metadata"],"readonly",function(f){return fs(f,a)}))})})};
hs=function(){return D(this,function b(){var c;return A(b,function(d){if(1==d.i)return x(d,Yr(),2);c=d.l;return d.return(Bm(c,["index","metadata"],"readonly",function(e){return tn.all(Rr().map(function(f){return fs(e,f)}))}))})})};
fs=function(a,b){var c=Dm(a,"metadata").get(b),d=Zr(b);return Dm(a,"index").getAll(d).then(function(e){e=e.map(function(l){return l?l.fmts:""}).join(",");
var f={videoId:b,totalSize:0,downloadedSize:0,status:Qr(b),videoData:null};if(e.length){e=kj(e);e=g.u(e);for(var h=e.next();!h.done;h=e.next())h=h.value,f.totalSize+=is(h),f.downloadedSize+=js(h)}return c.then(function(l){f.videoData=(null===l||void 0===l?void 0:l.offlineVideoData)||null;return f})})};
ks=function(a){return D(this,function c(){return A(c,function(d){Tr(a,0);return d.return($r(a,!0))})})};
Xca=function(){return D(this,function b(){var c;return A(b,function(d){c=Mr();if(!c)return d.return(Promise.reject("No LocalStorage"));c.remove("yt-player-lv-id");Pr();return x(d,Xr().delete(),0)})})};
Wr=function(){return D(this,function b(){var c;return A(b,function(d){if(1==d.i){c=Mr();if(!c)return d.return(Promise.reject("No LocalStorage"));c.remove("yt-player-lv-id");Pr();return x(d,Xr().delete(),2)}return 3!=d.i?x(d,Iba(),3):x(d,qn("yt-player-local-media"),0)})})};
as=function(a){return!!a&&-1===a.indexOf("dlt")};
is=function(a){return+a.mket*+a.avbr};
js=function(a){return a.hasOwnProperty("dlt")?(+a.dlt||0)*+a.avbr:is(a)};
cs=function(a,b){return""+a+"|"+(b?"v":"a")};
Zr=function(a){return IDBKeyRange.bound(a+"|",a+"~")};
Qca=function(){};
ls=function(){return!("function"!==typeof window.fetch||!window.ReadableStream)};
ms=function(a){if(a.In())return!1;a=a.getResponseHeader("content-type");return"audio/mp4"===a||"video/mp4"===a||"video/webm"===a};
ns=function(a,b,c){this.videoInfos=a;this.audioTracks=[];this.i=b||null;this.l=c||null;if(this.i)for(a=new Set,b=g.u(this.i),c=b.next();!c.done;c=b.next())if(c=c.value,c.u&&!a.has(c.u.id)){var d=new rq(c.id,c.u);a.add(c.u.id);this.audioTracks.push(d)}};
rs=function(a,b,c,d){var e=[],f=new Set,h=a.X||a.Ua,l={};if(os(c)){for(var m in c.i)c.i.hasOwnProperty(m)&&(d=c.i[m],l[d.info.i]=[d.info]);return l}for(var n in c.i)if(c.i.hasOwnProperty(n)){m=c.i[n];var p=m.info.wb();if(""===m.info.i)e.push(p),e.push("unkn");else if("304"!==p&&"266"!==p||!a.Ka)if(a.C&&m.info.video&&m.info.video.i>a.C)e.push(p),e.push("max"+a.C);else if(a.D&&m.info.video&&m.info.video.i<a.D)e.push(p),e.push("min"+a.D);else if(a.Ma&&"h"===m.info.i&&m.info.video&&1080<m.info.video.i)e.push(p),
e.push("blkhigh264");else if(a.Pa&&m.info.video&&4320<=m.info.video.i&&32<m.info.video.fps)e.push(p),e.push("blk8khfr");else{var q=b.i.get(m.info.i);q=q&&0<q.Zu;h&&q?(f.add(m.info.i),e.push(p),e.push("byerr")):(q=ps(b,m.info),!0!==q?(e.push(p),e.push(q)):"(h"!==m.info.i||b.B?(q="MAC3"===m.info.i||"MEAC3"===m.info.i||"M"===m.info.i,c.isLive&&q&&!a.Da?(e.push(p),e.push("blk51live")):(l[m.info.i]=l[m.info.i]||[],l[m.info.i].push(m.info))):(e.push(p),e.push("enchdr")))}else e.push(p),e.push("blk2khfr")}a.i&&
(d(e.join(".")),c="bfflt."+qs(l),d(c));for(var r in l)l.hasOwnProperty(r)&&(c=r,l[c]&&l[c][0].isVideo()&&(l[c]=Yca(a,l[c]),l[c]=Zca(b,l[c])));if(h)for(f=g.u(f.values()),h=f.next();!h.done;h=f.next())(h=b.i.get(h.value))&&--h.Zu;b=g.Lb(l,function(t){return!!t.length});
a.i&&(l="aftflt."+qs(l),d(l));return b};
ts=function(a){switch(a){case "*":return"v8e";case "(":return"v9e";case "(h":return"v9he";default:return a}};
qs=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=c;b.push(ts(d));d=g.u(a[d]);for(var e=d.next();!e.done;e=d.next())b.push(e.value.wb())}return b.join(".")};
$ca=function(a,b,c){var d={};g.Kb(b,function(e,f){e=e.filter(function(h){if(!h.Qc)return!1;if("("===h.i||"(h"===h.i){if(a.l&&c&&"widevine"===c.flavor){var l=h.mimeType+"; experimental=allowed";return!!h.Qc[c.flavor]&&!!c.i[l]}if(!us(a,vs.CRYPTOBLOCKFORMAT)&&!a.X||a.N)return!1}return c&&h.Qc[c.flavor]&&c.i[h.mimeType]?!0:!1});
e.length&&(d[f]=e)});
return d};
bda=function(a,b,c,d,e,f){function h(z){return!!l[z]}
f=void 0===f?!1:f;var l=rs(a,b,c,e);ws(c)&&(l=$ca(b,l,d),a.i&&(b="enflt."+qs(l),e(b)));if(os(c))return e=g.lb(Object.values(l),function(z){return!!z.length&&!!z[0].audio}),a=g.lb(Object.values(l),function(z){return!!z.length&&!!z[0].video}),e&&a||g.Mj(),g.Nj(new ns(a,e));
b=xs(a);b=g.lb(b,h);if(!b)return a.i&&e("noaudio"),g.Mj();d=l[b];l["9"]&&l.h&&c.Lg&&!a.Aa&&(a.i&&e("dltvp9"),delete l["9"]);var m=l["1h"]?"1h":"1",n=l["9h"]?"9h":"9",p=l[m],q=l[n];p&&p.length&&(a.l.highestAv1Resolution=p[p.length-1].Qa().i);q&&q.length&&(a.l.highestVp9Resolution=q[q.length-1].Qa().i);var r=[],t=[];if(a.W&&!a.u)for(t=ada(c)?l["1h"]||l["9h"]?["1h","9h"]:["9","h"]:["1","9","h"],a.i&&e("newhybpref."+t.join(".")),c=g.u(t),f=c.next();!f.done;f=c.next())r=r.concat(l[f.value]).filter(function(z){return z});
else if(0<a.G&&q&&p){if(!f){var v=Math.min(a.G,ys(p)),y=ys(q),C=function(z){return z<=v||z>y};
a.i&&e("lth."+v+".uth."+y);p=p.filter(function(z){return C(z.Qa().i)});
q=q.filter(function(z){return!C(z.Qa().i)})}t=[m,
n];r=p.concat(q).filter(function(z){return z})}if(r.length&&!a.u){zs(r,d,t);
if(a.i){a=[];m=g.u(r);for(n=m.next();!n.done;n=m.next())a.push(n.value.wb());e("hbdfmt."+a.join("."))}return g.Nj(new ns(r,d,As(l,"",b)))}r=Bs(a);r=g.lb(r,h);if(!r){if(l[m]&&a.Ya)return e=l[m],zs(e,d),g.Nj(new ns(e,d,As(l,m,b)));a.i&&e("novideo");return g.Mj()}a.ub&&("1"===r||"1h"===r)&&l[n]&&(m=ys(l[r]),ys(l[n])>m&&(r=n));"9"===r&&l.h&&(m=ys(l["9"]),ys(l.h)>1.5*m&&(r="h"));a.i&&e("vfmly."+ts(r));m=l[r];if(!m.length)return a.i&&e("novfmly."+ts(r)),g.Mj();zs(m,d);return g.Nj(new ns(m,d,As(l,r,b)))};
As=function(a,b,c){var d=a.h;"f"===b&&(d=a[b]);var e=a.a;b=a[b]!==d;a=a[c]!==e;return d&&e&&(b||a)?(zs(d,e),new ns(d,e)):null};
zs=function(a,b,c){c=void 0===c?[]:c;g.Fb(a,function(d,e){var f=e.Qa().height*e.Qa().width-d.Qa().height*d.Qa().width;if(!f&&c&&0<c.length){f=c.indexOf(d.i)+1;var h=c.indexOf(e.i)+1;f=0===f||0===h?h||-1:f-h}f||(f=e.l-d.l);return f});
g.Fb(b,function(d,e){return e.l-d.l})};
Zca=function(a,b){var c=g.rg(b,function(d,e){return 32<e.Qa().fps?Math.min(d,e.Qa().width):d},Infinity);
Infinity>c&&(b=a.G&&(a.T||us(a,vs.FRAMERATE))?g.Ph(b,function(d){return 32<d.Qa().fps||d.Qa().width<c}):g.Ph(b,function(d){return!(32<d.Qa().fps)}));
Hk()&&(b=g.Ph(b,function(d){return"299"!==d.wb()}));
return b};
Yca=function(a,b){return b=g.Ph(b,function(c){return c.Qa().i<=a.Xa})};
ys=function(a){return g.rg(a,function(b,c){return Math.max(b,c.Qa().i)},0)};
Cs=function(a){a=void 0===a?{}:a;var b=void 0===a.Hg?!1:a.Hg,c=void 0===a.defraggedFromSubfragments?!1:a.defraggedFromSubfragments,d=void 0===a.isManifestless?!1:a.isManifestless,e=void 0===a.Ev?!1:a.Ev;return((void 0===a.hasSubfragmentedFmp4?0:a.hasSubfragmentedFmp4)||b)&&d?e&&ls()?3:2:c&&d?-1:1};
Ds=function(a){return Cs({hasSubfragmentedFmp4:a.B.Ud,Hg:a.B.Ud,defraggedFromSubfragments:a.qh,isManifestless:!0,Ev:a.Ba})};
Es=function(a,b,c,d){!a&&(void 0===c?0:c)&&g.to(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
Gs=function(a,b,c){return b&&b.test(a)||Fs&&c&&c.test(a)?!0:!1};
Is=function(a){return(a=Hs&&Hs.exec(a))?a[0]:""};
Js=function(a){var b=void 0===b?!1:b;return Es(Gs(a,cda,dda),a,b,"Trusted Stream URL")};
g.Ks=function(a){var b=void 0===b?!1:b;return Es(Gs(a,eda,fda),a,b,"Trusted Image URL")};
Ls=function(a){var b=void 0===b?!1:b;return Es(Gs(a,gda,null),a,b,"Trusted Promoted Video Domain URL")};
ida=function(a){var b=void 0===b?!1:b;return Es(Gs(a,hda,null),a,b,"Drm Licensor URL")};
Ms=function(a,b){b=void 0===b?!1:b;return Es(Gs(a,jda,kda),a,b,"Captions URL")};
Ns=function(a){a=new g.Ai(a);Bi(a,document.location.protocol);Ci(a,document.location.hostname);document.location.port&&Di(a,document.location.port);return a.toString()};
Os=function(a){a=new g.Ai(a);Bi(a,document.location.protocol);return a.toString()};
Ps=function(a,b){this.l=a;this.C=void 0===b?!1:b;this.B=this.path=this.u="";this.i={};this.url=""};
Qs=function(a){a.url||(a.url=lda(a));return a.url};
Ss=function(a){Rs(a);return a.B};
Ts=function(a){return a.l?g.vc(a.l,"local"):"local"===a.u};
Us=function(a){Rs(a);return g.Nb(a.i,function(b){return null!==b})};
Vs=function(a){Rs(a);if("/videoplayback"!==a.path){var b=a.clone();b.set("playerfallback","1");return b}var c=Qs(a);b=new g.Ai(c);var d=a.get("fvip");a=decodeURIComponent(a.get("mn")||"").split(",");if(d&&a&&1<a.length&&a[1])return c=b.i.replace(/^[^.]*/,""),Ci(b,"r"+d+"---"+a[1]+c),b=new Ps(b.toString()),b.set("fallback_count","1"),b;d=b.i.match("\\.a1\\.googlevideo\\.com$");b.i.match("\\.googlevideo\\.com$")?(Ci(b,"redirector.googlevideo.com"),c=b.toString()):b.i.match("r[1-9].*\\.c\\.youtube\\.com$")?
(Ci(b,"www.youtube.com"),c=b.toString()):c=Ns(c);b=new Ps(c);b.set("cmo=pf","1");d&&b.set("cmo=td","a1.googlevideo.com");return b};
Rs=function(a){if(a.l){if(!Js(a.l)&&!a.l.startsWith("local"))throw Error("Untrusted URL: "+a.l);var b=a.l;b=b instanceof g.Ai?b.clone():new g.Ai(b,void 0);a.u=b.l;a.B=b.i+(null!=b.B?":"+b.B:"");var c=b.getPath();if(c.startsWith("/videoplayback"))a.path="/videoplayback",c=c.substr(14);else if(c.startsWith("/initplayback"))a.path="/initplayback",c=c.substr(13);else if(c.startsWith("/api/manifest")){var d=c.indexOf("/",12),e=c.indexOf("/",d+1);0<d&&0<e?(a.path=c.substr(0,e),c=c.substr(e+1)):(a.path=
c,c="")}else a.path=c,c="";d=a.i;a.i=Ws(c);g.$a(a.i,Xs(b.C.toString()));g.$a(a.i,d);"index.m3u8"===a.i.file&&(delete a.i.file,a.path+="/file/index.m3u8");a.l="";a.url="";a.C&&(b=a.get("n"))&&(b=Jaa(b),a.set("n",b))}};
lda=function(a){Rs(a);var b=a.u+(a.u?"://":"//")+a.B+a.path;if(Us(a)){var c=[];g.Kb(a.i,function(d,e){null!==d&&c.push(e+"="+d)});
b+="?"+c.join("&")}return b};
Ws=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&Ys(c,a[b],a[b+1]);return c};
Xs=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?Ys(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
Ys=function(a,b,c){if("cmo"===b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
Zs=function(a,b,c,d,e,f,h,l,m,n){this.oa=a;this.startTime=b;this.duration=c;this.ingestionTime=d;this.sourceURL=e;this.i=void 0===m?null:m;this.tc=n;this.endTime=b+c;this.l=h||0;this.range=f||null;this.pending=l||!1;this.tc=n||null};
g.$s=function(){this.segments=[]};
at=function(a,b){if(b>a.vb())a.segments=[];else{var c=g.kb(a.segments,function(d){return d.oa>=b},a);
0<c&&a.segments.splice(0,c)}};
bt=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b};
ct=function(a){return String.fromCharCode.apply(null,a)};
dt=function(a){return window.TextDecoder?(new TextDecoder).decode(a):ct(a)};
et=function(a,b,c,d,e){e=void 0===e?!1:e;this.data=a;this.offset=b;this.size=c;this.type=d;this.i=(this.l=e)?0:8;this.dataOffset=this.offset+this.i};
ft=function(a){var b=a.data.getUint8(a.offset+a.i);a.i+=1;return b};
gt=function(a){var b=a.data.getUint16(a.offset+a.i);a.i+=2;return b};
ht=function(a){var b=a.data.getInt32(a.offset+a.i);a.i+=4;return b};
it=function(a){var b=a.data.getUint32(a.offset+a.i);a.i+=4;return b};
jt=function(a){var b=a.data;var c=a.offset+a.i;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.i+=8;return b};
kt=function(a,b){b=void 0===b?NaN:b;if(isNaN(b))var c=a.size;else for(c=a.i;c<a.size&&a.data.getUint8(a.offset+c)!==b;)++c;b=new Uint8Array(a.data.buffer,a.offset+a.i+a.data.byteOffset,c-a.i);a.i=Math.min(c+1,a.size);return dt(b)};
mda=function(a){this.offset=0;this.data=new DataView(new ArrayBuffer(a))};
lt=function(a,b,c,d){(new Uint8Array(a.data.buffer,a.offset,d)).set(new Uint8Array(b.buffer,c+b.byteOffset,d));a.offset+=d};
g.mt=function(a,b,c,d,e,f){this.startSecs=a;this.durationSecs=b;this.context=c;this.identifier=d;this.event=e;this.i=f};
ot=function(a,b){this.data=a;this.uri=b||"http://youtube.com/streaming/metadata/segment/102015";this.i=nt(this,"Sequence-Number");this.D=nt(this,"Segment-Count");this.G=this.data["Segment-Durations-Ms"]||"";this.ingestionTime=nt(this,"Ingestion-Walltime-Us")/1E6;this.l=(nt(this,"First-Frame-Time-Us")+nt(this,"First-Frame-Uncertainty-Us"))/1E6;this.Gf=nt(this,"Target-Duration-Us")/1E6;this.B="T"===this.data["Stream-Finished"];this.C="T"===this.data.Streamable;this.cryptoPeriodIndex=nt(this,"Crypto-Period-Index");
this.u=nt(this,"Crypto-Period-Seconds")};
qt=function(a){var b;a.data["Cuepoint-Type"]?b=new g.mt(pt?Number(a.data["Cuepoint-Playhead-Time-Sec"])||0:-(Number(a.data["Cuepoint-Playhead-Time-Sec"])||0),Number(a.data["Cuepoint-Total-Duration-Sec"])||0,a.data["Cuepoint-Context"],a.data["Cuepoint-Identifier"]||"",nda[a.data["Cuepoint-Event"]||""]||"unknown",1E3*(Number(a.data["Cuepoint-Playhead-Time-Sec"])||0)):b=null;return b};
rt=function(a){return Number(a.data["Start-Media-Time-Us"])/1E6||0};
nt=function(a,b){return Number(a.data[b])||0};
oda=function(a,b){this.i=a;this.duration=b};
tt=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0===a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
vt=function(a,b){var c=g.ut(a,0,1952868452);a=g.ut(a,0,1953658222);if(c&&a){c.skip(1);var d=ft(c)<<16|gt(c);c.skip(4);d&1&&c.skip(8);d&2&&c.skip(4);if(d&8){d=c.i;var e=it(c);c.data.setUint32(c.offset+d,1<b?Math.ceil(e*b):Math.floor(e*b))}a.skip(1);c=ft(a)<<16|gt(a);if(c&256){d=c&1;e=c&4;var f=c&512,h=c&1024,l=c&2048;c=it(a);d&&a.skip(4);e&&a.skip(4);d=(f?4:0)+(h?4:0)+(l?4:0);for(e=0;e<c;e++)f=a.i,h=it(a),a.data.setUint32(a.offset+f,1<b?Math.ceil(h*b):Math.floor(h*b)),a.skip(d)}}};
xt=function(a){a=new DataView(a.buffer,a.byteOffset,a.byteLength);return(a=g.ut(a,0,1836476516))?wt(a):NaN};
Bt=function(a,b,c){for(;zt(a,b);){var d=At(a,b);if(d.type===c)return d;b+=d.size}return null};
g.ut=function(a,b,c){for(;zt(a,b);){var d=At(a,b);if(d.type===c)return d;b=Ct(d.type)?b+8:b+d.size}return null};
Dt=function(a){if(a.data.getUint8(a.dataOffset)){var b=a.data;a=a.dataOffset+4;return 4294967296*b.getUint32(a)+b.getUint32(a+4)}return a.data.getUint32(a.dataOffset+4)};
At=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new et(a,b,c,d)};
wt=function(a){var b=a.data.getUint8(a.dataOffset)?20:12;return a.data.getUint32(a.dataOffset+b)};
Et=function(a){a=new et(a.data,a.offset,a.size,a.type,a.l);var b=ft(a);a.skip(7);var c=it(a);if(0===b){b=it(a);var d=it(a)}else b=jt(a),d=jt(a);a.skip(2);for(var e=gt(a),f=[],h=[],l=0;l<e;l++){var m=it(a);f.push(m);h.push(it(a));a.skip(4)}return{dr:c,zD:b,iy:d,Uu:f,Zq:h}};
zt=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593===c||1635148611===c||1937126244===c||1936995172===c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
Ct=function(a){return 1701082227===a||1836019558===a||1836019574===a||1835297121===a||1835626086===a||1937007212===a||1953653094===a||1953653099===a||1836475768===a};
Ft=function(a){a.skip(4);return{KG:kt(a,0),value:kt(a,0),dr:it(a),fU:it(a),CT:it(a),id:it(a),zz:kt(a),offset:a.offset}};
Gt=function(a,b){for(var c=Bt(a,0,b);c;)c.markAsSkip(),c=Bt(a,c.offset+c.size,b)};
Ht=function(a,b){for(var c=0,d=[];zt(a,c);){var e=At(a,c);e.type===b&&d.push(e);c=Ct(e.type)?c+8:c+e.size}return d};
pda=function(a,b){var c=g.ut(a,0,1937011556),d=g.ut(a,0,1953654136);if(!c||!d||2<=a.getUint32(c.offset+12))return null;var e=new DataView(b.buffer,b.byteOffset,b.length),f=g.ut(e,0,1937011556);if(!f)return null;b=e.getUint32(f.dataOffset+8);d=e.getUint32(f.dataOffset+12);if(1701733217!==d&&1701733238!==d)return null;d=new mda(a.byteLength+b);lt(d,a,0,c.offset+12);d.data.setInt32(d.offset,2);d.offset+=4;lt(d,a,c.offset+16,c.size-16);lt(d,e,e.byteOffset+f.dataOffset+8,b);lt(d,a,c.offset+c.size,a.byteLength-
(c.offset+c.size));c=g.u([1836019574,1953653099,1835297121,1835626086,1937007212,1937011556]);for(e=c.next();!e.done;e=c.next())e=g.ut(a,0,e.value),d.data.setUint32(e.offset,e.size+b);if(It)return d.data;a=g.ut(d.data,0,1953654136);d.data.setUint32(a.offset+16,2);return d.data};
Jt=function(a,b){this.l=a;this.i=0;this.start=b||0};
Pt=function(a,b,c){var d=new Jt(c);if(!Kt(d,a))return!1;d=Lt(d);if(!Mt(d,b))return!1;for(a=0;b;)b>>>=8,a++;b=d.start+d.i;var e=Nt(d,!0);d=a+(d.start+d.i-b)+e;d=9<d?Ot(d-9,8):Ot(d-2,1);a=b-a;c.setUint8(a++,236);for(b=0;b<d.length;b++)c.setUint8(a++,d[b]);return!0};
Lt=function(a){var b=Nt(a,!0),c=a.l.byteOffset+a.i;c=new DataView(a.l.buffer,c,Math.min(b,a.l.buffer.byteLength-c));c=new Jt(c,a.start+a.i);a.i+=b;return c};
Rt=function(a){for(var b=Nt(a,!0),c=Qt(a),d=1;d<b;d++)c=256*c+Qt(a);return c};
Tt=function(a){var b=Nt(a,!0);return dt(St(a,b))};
Qt=function(a){return a.l.getUint8(a.i++)};
Nt=function(a,b){var c=Qt(a);if(1===c){for(b=c=0;7>b;b++)c=256*c+Qt(a);return c}for(var d=128,e=0;6>e&&d>c;e++)c=256*c+Qt(a),d*=128;return b?c-d:c};
Ut=function(a){var b=Nt(a,!0);a.i+=b};
Vt=function(a){var b=a.i;a.i=0;var c=!1;try{Mt(a,440786851)&&(a.i=0,Mt(a,408125543)&&(c=!0))}catch(d){if(d instanceof RangeError)a.i=0,c=!1,g.fj(d);else throw d;}a.i=b;return c};
qda=function(a){if(!Mt(a,440786851,!0))return null;var b=a.i;Nt(a,!1);var c=Nt(a,!0)+a.i-b;a.i=b+c;if(!Mt(a,408125543,!1))return null;Nt(a,!0);if(!Mt(a,357149030,!0))return null;var d=a.i;Nt(a,!1);var e=Nt(a,!0)+a.i-d;a.i=d+e;if(!Mt(a,374648427,!0))return null;var f=a.i;Nt(a,!1);var h=Nt(a,!0)+a.i-f,l=new Uint8Array(c+12+e+h),m=new DataView(l.buffer);l.set(new Uint8Array(a.l.buffer,a.l.byteOffset+b,c));m.setUint32(c,408125543);m.setUint32(c+4,33554431);m.setUint32(c+8,4294967295);l.set(new Uint8Array(a.l.buffer,
a.l.byteOffset+d,e),c+12);l.set(new Uint8Array(a.l.buffer,a.l.byteOffset+f,h),c+12+e);return l};
Wt=function(a){var b=a.i,c={Hv:1E6,Iv:1E9,duration:0,bv:0,Ko:0};if(!Mt(a,408125543))return a.i=b,null;c.bv=Nt(a,!0);c.Ko=a.start+a.i;if(Mt(a,357149030))for(var d=Lt(a);!(d.i>=d.l.byteLength);){var e=Nt(d,!1);if(2807729===e)c.Hv=Rt(d);else if(2807730===e)c.Iv=Rt(d);else if(17545===e){e=Nt(d,!0);var f=0;4===e?f=d.l.getFloat32(d.i):8===e&&(f=d.l.getFloat64(d.i));d.i+=e;c.duration=f}else Ut(d)}else return a.i=b,null;a.i=b;return c};
Yt=function(a,b,c){var d=a.i,e=[];if(!Mt(a,475249515))return a.i=d,null;for(var f=Lt(a);Mt(f,187);){var h=Lt(f);if(Mt(h,179)){var l=Rt(h);if(Mt(h,183)){h=Lt(h);for(var m=b;Mt(h,241);)m=Rt(h)+b;e.push({Rj:m,Bp:l})}}}if(0<e.length&&c===e[0].Rj)for(Xt&&g.fj(Error("opus_oboe")),b=0;b<e.length;b++)e[b].Rj+=1;a.i=d;return e};
Zt=function(a){var b=a.i;a.i=0;var c=1E6;Kt(a,[408125543,357149030,2807729])&&(c=Rt(a));a.i=b;return c};
rda=function(a,b){var c=a.i;a.i=0;if(160!==a.l.getUint8(a.i)&&!$t(a)||!Mt(a,160))return a.i=c,NaN;Nt(a,!0);var d=a.i;if(!Mt(a,161))return a.i=c,NaN;Nt(a,!0);Qt(a);var e=Qt(a)<<8|Qt(a);a.i=d;if(!Mt(a,155))return a.i=c,NaN;d=Rt(a);a.i=c;return(e+d)*b/1E9};
$t=function(a){if(!au(a)||!Mt(a,524531317))return!1;Nt(a,!0);return!0};
au=function(a){if(Vt(a)){if(!Mt(a,408125543))return!1;Nt(a,!0)}return!0};
Kt=function(a,b){for(var c=0;c<b.length;c++){if(!Mt(a,b[c]))return!1;c!==b.length-1&&Nt(a,!0)}return!0};
Mt=function(a,b,c){c=void 0===c?!1:c;if(a.i>=a.l.byteLength)return!1;for(var d=a.i;Nt(a,!1)!==b;)if(Ut(a),d=a.i,a.i>=a.l.byteLength)return!1;c&&(a.i=d);return!0};
Ot=function(a,b){b||(b=Math.ceil(Math.log(a+2)/Math.log(2)/7));for(var c=1<<8-b,d=[];d.length<b-1;)d.unshift(a%256),a=Math.floor(a/256);d.unshift(a|c);return d};
St=function(a,b){var c=new Uint8Array(a.l.buffer,a.l.byteOffset+a.i,b);a.i+=b;return c};
bu=function(a){this.kf=a;this.i={};this.url=""};
cu=function(a,b){var c=b.indexOf("?");if(0<c){var d=Xs(b.substr(c+1));g.Kb(d,function(e,f){this.set(f,e)},a);
b=b.substr(0,c)}b=Ws(b);g.Kb(b,function(e,f){this.set(f,e)},a)};
g.du=function(a){a.url||(a.url=sda(a));return a.url};
sda=function(a){var b=Qs(a.kf),c=[];g.Kb(a.i,function(e,f){c.push(f+"="+e)});
if(!c.length)return b;var d=c.join("&");a=Us(a.kf)?"&":"?";return b+a+d};
eu=function(a,b){var c=new Ps(b);(b=c.get("req_id"))&&a.set("req_id",b);g.Kb(a.i,function(d,e){c.set(e,null)});
return c};
tda=function(){this.u=this.i=this.l=this.started=this.B=0};
uda=function(a){a.B=(0,g.M)();a.started+=1};
fu=function(a,b,c){var d=a.started+4*a.i;c&&(d+=a.u);return Math.pow(b.nf,d)};
gu=function(a,b){a[b]||(a[b]=new tda);return a[b]};
vda=function(a){this.u=null;this.C=this.l=0;this.i=a;this.B=a.clone()};
iu=function(a,b,c){var d=gu(c,Ss(a.i));if(d.l>=b.Xk||1<=d.i)if(a=hu(a),c=gu(c,Ss(a)),c.l+c.i<=d.l+d.i)return!0;return!1};
wda=function(a,b){a=b?hu(a):a.i;return new bu(a)};
hu=function(a){a.u||(a.u=Vs(a.B));return a.u};
ju=function(a,b){return a.l>b.jf?a.C+1E3*Math.pow(b.nf,a.l-b.jf)<(0,g.M)():!0};
g.ku=function(a,b,c){b.kf===a.i&&(a.i=eu(b,c));b.kf===a.u&&(a.u=eu(b,c))};
lu=function(a,b,c,d){this.initRange=c;this.indexRange=d;this.i=null;this.u=!1;this.B=null;this.G=0;this.I=NaN;this.C=null;this.info=b;this.l=new vda(a)};
mu=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
nu=function(a){a=a.split("-");var b=Number(a[0]),c=Number(a[1]);if(!isNaN(b)&&!isNaN(c)&&2===a.length&&(a=new mu(b,c),!isNaN(a.start)&&!isNaN(a.end)&&!isNaN(a.length)&&0<a.length))return a};
ou=function(a,b){return new mu(a,a+b-1)};
pu=function(a){return null==a.end?{start:String(a.start)}:{start:String(a.start),end:String(a.end)}};
tu=function(a,b,c,d,e,f,h,l,m,n,p){this.type=a;this.i=b;this.range=c;this.I=[];this.D="";this.oa=-1;this.D=void 0===d?"":d;this.oa=0<=e?e:-1;this.startTime=f||0;this.duration=h||0;this.Va=l||0;this.l=0<=m?m:this.range?this.range.length:NaN;this.u=!!n;a=this.range?this.Va+this.l===this.range.length:void 0===p?!!this.l:p;this.Dc=a;this.range?(this.C=this.startTime+this.duration*this.Va/this.range.length,this.G=this.duration*this.l/this.range.length,this.B=this.C+this.G):qu(this);3!==this.type||0<=this.oa||
!this.i.re()||g.to(new g.hm("b168859904",ru(this)))};
qu=function(a){a.C=a.startTime;a.G=a.duration;a.B=a.C+a.G};
xda=function(a,b,c){var d=!(!b||b.i!==a.i||b.type!==a.type||b.oa!==a.oa);return c?d&&!!b&&(a.range&&b.range?b.range.end===a.range.end:b.range===a.range)&&b.Va+b.l===a.Va+a.l:d};
uu=function(a){return 1===a.type||2===a.type};
vu=function(a){return 3===a.type||6===a.type};
wu=function(a,b){return a.i===b.i?a.range&&b.range?a.range.start+a.Va+a.l===b.range.start+b.Va:a.oa===b.oa?a.Va+a.l===b.Va:a.oa+1===b.oa&&0===b.Va&&a.Dc:!1};
xu=function(a,b){return wu(a,b)||g.cf(a.B,b.C)||a.oa+1===b.oa&&0===b.Va&&a.Dc?!0:!1};
yda=function(a){1===a.length||g.yu(a,function(c){return!!c.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new mu(a[0].range.start+a[0].Va,b.range.start+b.Va+b.l-1)};
ru=function(a){a=zu(a);var b="";g.Kb(a,function(c,d){b+=d+"_"+c+"_"});
return b.slice(0,-1)};
zu=function(a){var b={};b.itag=a.i.info.wb();b.type=""+a.type;b.seg=String(a.oa);a.range&&(b.range=""+(a.range.start+a.Va)+"-"+(a.range.start+a.Va+a.l-1));b.time=""+a.C.toFixed(1)+"-"+(a.C+a.G).toFixed(1);b.off=String(a.Va);b.len=String(a.l);a.Dc&&(b.end="1");a.u&&(b.eos="1");return b};
Au=function(a,b){var c=b.i;a.D="updateWithEmsg";a.oa=c;b.B&&(a.u=b.B)};
Bu=function(a,b){var c=b.oa;a.D="updateWithSegmentInfo";a.oa=c;if(a.startTime!==b.startTime||a.duration!==b.duration)a.startTime=b.startTime,a.duration=b.duration,qu(a)};
Cu=function(a,b){this.i=a;this.D="";this.B=this.bd=NaN;this.C=this.requestId=null;this.l=a[0].i.l;this.u=b||"";this.range=this.i[0].range&&0<this.i[0].l?yda(this.i):null};
Du=function(a){return 4===a.i[a.i.length-1].type};
g.Eu=function(a,b,c){if(a.D){var d=new bu(new Ps(a.D));a.u&&cu(d,a.u)}else/http[s]?:\/\//.test(a.u)?d=new bu(new Ps(a.u)):(b=null===a.C?iu(a.l,b,c):a.C,d=wda(a.l,b),a.u&&cu(d,a.u));(b=a.range)&&d.set("range",b.toString());a.requestId&&d.set("req_id",a.requestId);isNaN(a.bd)||d.set("headm",a.bd.toString());isNaN(a.B)||d.set("mffa",a.B+"ms");a.urlParams&&g.Kb(a.urlParams,function(e,f){d.set(f,e)});
return d};
Fu=function(a){if(a.range)return a.range.length;a=a.i[0];return Math.round(a.G*a.i.info.l)};
Gu=function(a,b){var c=a.i[0];if(a.range)var d=ou(a.range.start,Math.min(4096,a.range.length));else{if(a.u&&0<=a.u.indexOf("/range/")||"1"===a.l.B.get("defrag")||"1"===a.l.B.get("otf"))return null;d=ou(0,4096)}d=new tu(5,c.i,d,"createProbeRequestInfo"+c.D,c.oa);a=new Cu([d],a.u);a.C=b;return a};
Hu=function(a,b,c,d,e,f){f=void 0===f?0:f;lu.call(this,a,b,d,void 0);this.N=c;this.Gf=f;this.D=!0;this.index=e||new g.$s;this.Sk()&&(this.u=!0)};
zda=function(a,b,c,d,e){this.oa=a;this.startSecs=b;this.durationSecs=c;this.i=d||NaN;this.l=e||NaN};
Iu=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName===c)){var d=a.getAttribute(b);if(d)return d}return""};
Ju=function(a,b){for(;a;a=a.parentNode){var c=a.getElementsByTagName(b);if(0<c.length)return c[0]}return null};
Ku=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(Number(b[2])|0)+60*(Number(b[4])|0)+(Number(b[6])|0):Number(a)|0};
Lu=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a};
Mu=function(){this.i=[];this.l=null;this.D=0;this.u=[];this.C=!1;this.G="";this.B=-1};
Ada=function(a){var b=a.u;a.u=[];return b};
Bda=function(){this.B=[];this.i=null;this.l={};this.u={}};
Fda=function(a,b,c){var d=[];b=Array.from(b.getElementsByTagName("SegmentTimeline"));b=g.u(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,h=null;"Period"===f.nodeName?h=Cda(a):"AdaptationSet"===f.nodeName?(f=f.getAttribute("id")||f.getAttribute("mimetype")||"",h=Dda(a,f)):"Representation"===f.nodeName&&(f=f.getAttribute("id")||"",h=Eda(a,f));if(null==h)return;h.update(e,c);g.xb(d,Ada(h))}g.xb(a.B,d);Gb(a.B,function(l){return 1E3*l.startSecs+l.i})};
Gda=function(a){a.i&&(a.i.i=[]);g.Kb(a.l,function(b){b.i=[]});
g.Kb(a.u,function(b){b.i=[]})};
Cda=function(a){a.i||(a.i=new Mu);return a.i};
Dda=function(a,b){a.l[b]||(a.l[b]=new Mu);return a.l[b]};
Eda=function(a,b){a.u[b]||(a.u[b]=new Mu);return a.u[b]};
Nu=function(a){var b=void 0===a?{}:a;a=void 0===b.Gf?0:b.Gf;var c=void 0===b.yg?!1:b.yg,d=void 0===b.rh?0:b.rh,e=void 0===b.Lc?0:b.Lc,f=void 0===b.Ce?Infinity:b.Ce,h=void 0===b.oo?0:b.oo;b=void 0===b.qd?!1:b.qd;this.segments=[];this.i=this.Mm=-1;this.l=null;this.Ee=a;this.rh=d;this.yg=c;this.Lc=e;this.Ce=f;this.oo=h;this.qd=b};
Pu=function(a,b,c){b=Ou(a,b);return 0<=b&&(c||!a.segments[b].pending)};
Ou=function(a,b){return Eb(a.segments,function(c){return b-c.oa})};
Qu=function(a,b,c){c=void 0===c?{}:c;Hu.call(this,a,b,"",void 0,void 0,c.Gf||0);this.index=new Nu(c)};
Ru=function(a,b,c,d,e){lu.call(this,a,b,d,e);this.D=c;this.index=new g.$s};
Su=function(a,b,c){var d=a.index.Bt(b),e=a.index.Pd(b),f=a.index.getDuration(b),h=0;c?f=h=0:0<a.info.l&&(h=a.info.l*f);c=b===a.index.vb()&&0<h;a=new tu(3,a,void 0,"otfCreateRequestInfoForSegment",b,e,f,0,h,c);return new Cu([a],d)};
Hda=function(a,b){if(!a.index.Vc()){var c=[],d=b.D;b=b.G.split(",").filter(function(p){return 0<p.length});
for(var e=0,f=0,h=0,l=/^(\d+)/,m=/r=(\d+)/,n=0;n<d;n++){if(0>=h)if(h=b.shift(),f=(f=l.exec(h))?+f[1]/1E3:0)h=(h=m.exec(h))?+h[1]:0,h+=1;else return;c.push(new Zs(n,e,f,NaN,"sq/"+(n+1)));e+=f;h--}a.index.append(c)}};
Tu=function(a){var b=this;a=void 0===a?[]:a;this.i=[];this.u=this.l=0;this.B=void 0;this.totalLength=0;a.forEach(function(c){b.append(c)})};
Uu=function(a,b){return 0===a.i.length?!1:(a=a.i[a.i.length-1])&&a.buffer===b.buffer&&a.byteOffset+a.length===b.byteOffset};
Vu=function(a,b){b=g.u(b.i);for(var c=b.next();!c.done;c=b.next())a.append(c.value)};
Wu=function(a){a.B=void 0;a.l=0;a.u=0};
Xu=function(a,b,c){a.isFocused(b);return b-a.u+c<=a.i[a.l].length};
Yu=function(a){if(!a.B){var b=a.i[a.l];a.B=new DataView(b.buffer,b.byteOffset,b.length)}return a.B};
Zu=function(a,b,c){b=void 0===b?0:b;c=void 0===c?-1:c;if(!a.totalLength)return new DataView(new ArrayBuffer(0));0>c&&(c=a.totalLength-b);a.focus(b);if(!Xu(a,b,c)){var d=a.l,e=a.u;a.focus(b+c-1);e=new Uint8Array(a.u+a.i[a.l].length-e);for(var f=0,h=d;h<=a.l;h++)e.set(a.i[h],f),f+=a.i[h].length;a.i.splice(d,a.l-d+1,e);Wu(a);a.focus(b)}d=a.i[a.l];return new DataView(d.buffer,d.byteOffset+b-a.u,c)};
$u=function(a,b,c){a=Zu(a,void 0===b?0:b,void 0===c?-1:c);return new Uint8Array(a.buffer,a.byteOffset,a.byteLength)};
av=function(a){a=$u(a,0,-1);var b=new Uint8Array(a.length);try{b.set(a)}catch(d){for(var c=0;c<a.length;c++)b[c]=a[c]}return b};
bv=function(a,b){a.focus(b);return a.i[a.l][b-a.u]};
cv=function(a,b){a.focus(b);return Xu(a,b,4)?Yu(a).getUint32(b-a.u):256*(256*(256*bv(a,b)+bv(a,b+1))+bv(a,b+2))+bv(a,b+3)};
dv=function(a,b,c){this.info=a;this.u=c;this.l=null;this.B=-1;this.timestampOffset=0;this.i=b instanceof Tu?b:new Tu([b])};
ev=function(a){return Zu(a.i)};
fv=function(a,b){if(1!==a.info.i.info.containerType||a.info.Va||!a.info.Dc)return!0;a=ev(a);for(var c=0,d=0;c+4<a.byteLength;){d=a.getUint32(c);if(!d)return!1;c+=d}return c!==a.byteLength?(b&&(b.lastboxlen=d.toString(),4<=a.byteLength&&(b.lastbytes=a.getUint32(a.byteLength-4).toString()),b.boxlen=c.toString(),b.bytelen=a.byteLength.toString()),!1):!0};
gv=function(a,b){b=Math.min(b,a.info.l);var c=a.i.split(b),d=c.Vp;c=c.Bk;var e=new tu(a.info.type,a.info.i,a.info.range,a.info.D,a.info.oa,a.info.startTime,a.info.duration,a.info.Va,b,!1,!1);d=new dv(e,d,a.u);a=new tu(a.info.type,a.info.i,a.info.range,a.info.D,a.info.oa,a.info.startTime,a.info.duration,a.info.Va+b,a.info.l-b,a.info.u,a.info.Dc);a=new dv(a,c,!1);return[d,a]};
hv=function(a,b,c){var d;if(!(d=!wu(a.info,b.info)||a.info.Dc)){if(c=void 0===c?!1:c)c=b.i,c=!(c.i.length?Uu(a.i,c.i[0]):1);d=c}if(d)return null;c=new tu(a.info.type,a.info.i,a.info.range,a.info.D,a.info.oa,a.info.startTime,a.info.duration,a.info.Va,a.info.l,a.info.u,a.info.Dc);d=b.info;c.l+=d.l;c.range&&(c.G+=d.G);c.B=d.B;c.Dc=d.Dc;c.u=c.u||d.u;d=new Tu;Vu(d,a.i);Vu(d,b.i);c=new dv(c,d,a.u);c.l=b.l||a.l;if(a=c.info.range)a=c.i,a=!(1===a.i.length&&0<a.i[0].byteOffset);a&&(c.u=!1);return c};
jv=function(a){g.iv(a.info.i.info)||a.info.i.info.cd();if(-1!==a.B)return a.B;if(a.l&&rt(a.l))return a.B=rt(a.l),a.B;if(g.iv(a.info.i.info)){var b=ev(a);for(var c=a.info.i.i,d=NaN,e=NaN,f=0;zt(b,f);){var h=At(b,f);1936286840===h.type?e=h.data.getUint32(h.dataOffset+8):1836476516===h.type?e=wt(h):1952867444===h.type&&isNaN(d)&&(d=Dt(h));f=Ct(h.type)?f+8:f+h.size}!e&&c&&(e=xt(c));b=d/e}else b=new Jt(ev(a)),c=a.u?b:new Jt(new DataView(a.info.i.i.buffer)),d=Zt(c),c=b.i,b.i=0,$t(b)?Mt(b,231)?(d=Rt(b)*
d/1E9,b.i=c,b=d):(b.i=c,b=NaN):(b.i=c,b=NaN);a.B=b||a.info.C;return a.B};
lv=function(a,b){0<a.timestampOffset&&(b-=a.timestampOffset);var c=jv(a)+b;kv(a,c);a.timestampOffset=b};
kv=function(a,b){g.iv(a.info.i.info)||a.info.i.info.cd();a.B=b;if(g.iv(a.info.i.info)){var c=ev(a);a=a.info.i.i;for(var d=NaN,e=NaN,f=0;zt(c,f);){var h=At(c,f);isNaN(d)&&(1936286840===h.type?d=h.data.getUint32(h.dataOffset+8):1836476516===h.type&&(d=wt(h)));if(1952867444===h.type){!d&&a&&(d=xt(a));var l=Dt(h);isNaN(e)&&(e=Math.round(b*d)-l);l+=e;if(h.data.getUint8(h.dataOffset)){var m=h.data,n=h.dataOffset+4;m.setUint32(n,Math.floor(l/4294967296));m.setUint32(n+4,l&4294967295)}else h.data.setUint32(h.dataOffset+
4,l)}f=Ct(h.type)?f+8:f+h.size}return!0}c=new Jt(ev(a));a=a.u?c:new Jt(new DataView(a.info.i.i.buffer));d=Zt(a);a=c.i;c.i=0;if($t(c)&&Mt(c,231))if(e=Nt(c,!0),b=Math.floor(1E9*b/d),Math.ceil(Math.log(b)/Math.log(2)/8)>e)b=!1;else{for(d=e-1;0<=d;d--)c.l.setUint8(c.i+d,b&255),b>>>=8;c.i=a;b=!0}else b=!1;return b};
mv=function(a){g.iv(a.info.i.info)||a.info.i.info.cd();if(a.l&&6===a.info.type)return a.l.Gf;if(g.iv(a.info.i.info)){var b=ev(a);var c=0;b=Ht(b,1936286840);b=g.u(b);for(var d=b.next();!d.done;d=b.next())d=Et(d.value),c+=d.Zq[0]/d.dr;c=c||NaN;if(!(0<=c))a:{c=ev(a);b=a.info.i.i;for(var e=d=0,f=0;zt(c,d);){var h=At(c,d);if(1836476516===h.type)e=wt(h);else if(1836019558===h.type){!e&&b&&(e=xt(b));if(!e){c=NaN;break a}var l=Bt(h.data,h.dataOffset,1953653094),m=e,n=Bt(l.data,l.dataOffset,1952868452);l=
Bt(l.data,l.dataOffset,1953658222);var p=ht(n);ht(n);p&2&&ht(n);n=p&8?ht(n):0;var q=ht(l),r=q&1;p=q&4;var t=q&256,v=q&512,y=q&1024;q&=2048;var C=it(l);r&&ht(l);p&&ht(l);for(var z=r=0;z<C;z++){var E=t?ht(l):n;v&&ht(l);p&&0===z||!y||ht(l);q&&ht(l);r+=E}f+=r/m}d=Ct(h.type)?d+8:d+h.size}c=f||NaN}}else c=new Jt(ev(a)),b=a.u?c:new Jt(new DataView(a.info.i.i.buffer)),c=rda(c,Zt(b));return c||a.info.G};
nv=function(a){var b=ev(a);var c=(c=g.ut(b,0,1936286840))?c.data.getUint32(c.dataOffset+8):NaN;isNaN(c)&&(a=a.info.i.i,c=(b=g.ut(b,0,1836476516))?wt(b):a?xt(a):NaN);return c};
ov=function(a){if(!a.l){g.iv(a.info.i.info)||a.info.i.info.cd();if(g.iv(a.info.i.info)){var b=ev(a),c=Bt(b,0,1701671783);if(c){var d=Ft(c);var e=d.KG;d=tt(d.zz);if(b=Bt(b,c.offset+c.size,1701671783))if(b=Ft(b),b=tt(b.zz),d&&b){c=g.u(Object.keys(b));for(var f=c.next();!f.done;f=c.next())f=f.value,d[f]=b[f]}e=d?new ot(d,e):null}else e=null}else{e=new Jt(ev(a));d=e.i;e.i=0;c=b=null;if(Kt(e,[408125543,307544935,29555,26568]))for(f=Lt(e);!(f.i>=f.l.byteLength);){var h=Nt(f,!1);17543===h?c=tt(Tt(f)):17827===
h?b=Tt(f):Ut(f)}e.i=d;e=c?new ot(c,b):null}a.l=e}};
g.pv=function(){this.count=0;this.u=1;this.l=!1;this.offsets=new Float64Array(128);this.i=new Float64Array(128)};
qv=function(a){a.offsets.length<a.count+1&&a.resize(2*a.offsets.length)};
rv=function(a,b,c,d,e,f){lu.call(this,a,b,c,d);this.contentLength=e;this.lastModified=f;this.D=null;this.index=new g.pv};
tv=function(a,b,c,d){for(var e=[];b<=a.index.vb();b++){var f=a.index,h=b;f=ou(f.Bh(h),h+1<f.count||f.l?f.offsets[h+1]-f.offsets[h]:-1);h=a.index.Pd(b);var l=a.index.getDuration(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m),p=b===a.index.vb()&&m+n===f.length;e.push(new tu(3,a,f,"getRequestInfoForRange",b,h,l,m,n,p));if(f.start+m+n>=c+d)break}return new Cu(e)};
uv=function(a,b,c,d){this.sampleRate=a||0;this.i=b||0;this.spatialAudioType=c||0;this.itag=d||""};
Ida=function(a,b,c,d){this.displayName=a;this.vssId=b;this.languageCode=c;this.kind=void 0===d?"":d};
wv=function(a,b,c,d,e,f,h,l,m,n){this.width=a;this.height=b;this.quality=f||vv(a,b);this.i=uq[this.quality];this.fps=c||0;this.stereoLayout=!e||null!=d&&0!==d&&1!==d?0:e;this.projectionType=d?2===d&&2===e?3:d:0;(a=h)||(a=uq[this.quality],0===a?a="Auto":(b=this.fps,c=this.projectionType,a=a.toString()+(2===c||3===c||4===c?"s":"p")+(55<b?"60":49<b?"50":39<b?"48":"")));this.qualityLabel=a;this.l=l||"";this.primaries=m||"";this.streamType=n||0};
vv=function(a,b){var c=Math.max(a,b);a=Math.min(a,b);b=xv[0];for(var d=0;d<xv.length;d++){var e=xv[d],f=uq[e];if(c>=1.3*Math.floor(16*f/9)||a>=1.3*f)return b;b=e}return"tiny"};
Av=function(a,b,c,d,e,f,h,l,m){this.id=a;this.mimeType=b;this.audio=void 0===c?null:c;this.video=void 0===d?null:d;this.u=void 0===e?null:e;this.Qc=void 0===f?null:f;this.captionTrack=void 0===m?null:m;this.D=!0;this.isSupported=this.B=null;this.containerType=yv(b);this.l=h||0;this.C=l||0;this.i=zv[this.wb()]||""};
Bv=function(a){return"9"===a.i||"("===a.i||"9h"===a.i||"(h"===a.i};
Cv=function(a){return"9h"===a.i||"(h"===a.i};
Dv=function(a){return"1"===a.i||"1h"===a.i};
g.iv=function(a){return 1===a.containerType};
Ev=function(a){return"application/x-mpegURL"===a.mimeType};
Fv=function(a){return a.includes("vtt")||a.includes("text/mp4")};
yv=function(a){return 0<=a.indexOf("/mp4")?1:0<=a.indexOf("/webm")?2:0<=a.indexOf("/x-flv")?3:0<=a.indexOf("/vtt")?4:0};
Gv=function(a,b,c,d,e){var f=new uv;b in uq||(b="small");d&&e?(e=Number(e),d=Number(d)):(e=uq[b],d=Math.round(16*e/9));d=new wv(d,e,0,null,void 0,b,void 0,void 0,void 0);a=unescape(a.replace(/&quot;/g,'"'));return new Av(c,a,f,d)};
Hv=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
Iv=function(){var a=g.Na("yt.player.utils.videoElement_");a||(a=g.sf("VIDEO"),g.Ia("yt.player.utils.videoElement_",a,void 0));return a};
Jv=function(a){var b=Iv();return!!(b&&b.canPlayType&&b.canPlayType(a))};
Jda=function(a){try{var b=Kv('video/mp4; codecs="avc1.42001E"')||Kv('video/webm; codecs="vp9"');return(Kv('audio/mp4; codecs="mp4a.40.2"')||Kv('audio/webm; codecs="opus"'))&&(b||!a)||Jv('video/mp4; codecs="avc1.42001E, mp4a.40.2"')?null:"fmt.noneavailable"}catch(c){return"html5.missingapi"}};
Kv=function(a){if(/opus/.test(a)&&(Lv&&!ai("38")||Lv&&Ck("crkey")))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!Ik())return!1;'audio/mp4; codecs="mp4a.40.2"'===a&&(a='video/mp4; codecs="avc1.4d401f"');return!!Jv(a)};
Mv=function(){return"pictureInPictureEnabled"in window.document&&!!window.document.pictureInPictureEnabled};
Nv=function(){var a=Iv();return!!a.webkitSupportsPresentationMode&&"function"===typeof a.webkitSetPresentationMode};
Ov=function(){var a=Iv();try{var b=a.muted;a.muted=!b;return a.muted!==b}catch(c){}return!1};
Pv=function(a,b){return{start:function(c){return a[c]},
end:function(c){return b[c]},
length:a.length}};
Qv=function(a,b,c){b=void 0===b?",":b;c=void 0===c?a?a.length:0:c;var d=[];if(a)for(c=Math.max(a.length-c,0);c<a.length;c++)d.push(a.start(c).toFixed(3)+"-"+a.end(c).toFixed(3));return d.join(b)};
Rv=function(a,b){if(!a)return-1;try{for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c}catch(d){}return-1};
Sv=function(a,b){return 0<=Rv(a,b)};
Kda=function(a,b){if(!a)return NaN;b=Rv(a,b);return 0<=b?a.start(b):NaN};
Tv=function(a,b){if(!a)return NaN;b=Rv(a,b);return 0<=b?a.end(b):NaN};
Uv=function(a){return a&&a.length?a.end(a.length-1):NaN};
Vv=function(a,b){a=Tv(a,b);return 0<=a?a-b:0};
Wv=function(a,b,c){for(var d=[],e=[],f=0;f<a.length;f++)a.end(f)<b||a.start(f)>c||(d.push(Math.max(b,a.start(f))-b),e.push(Math.min(c,a.end(f))-b));return Pv(d,e)};
Xv=function(a,b,c,d){g.N.call(this);var e=this;this.Qb=a;this.start=b;this.end=c;this.isActive=d;this.appendWindowStart=0;this.appendWindowEnd=Infinity;this.timestampOffset=0;this.Ny={error:function(){!e.ya()&&e.isActive&&e.U("error",e)},
updateend:function(){!e.ya()&&e.isActive&&e.U("updateend",e)}};
Un(this.Qb,this.Ny);this.bp=this.isActive};
Zv=function(a,b,c,d,e){var f;g.N.call(this);var h=this;this.eb=a;this.Wc=b;this.id=c;this.containerType=d;this.isVideo=e;this.pz=this.eq=this.dd=null;this.appendWindowStart=this.timestampOffset=0;this.Ax=Pv([],[]);this.qp=!1;this.Io=Yv?[]:void 0;this.Rc=function(l){return h.U(l.type,h)};
if(null===(f=this.eb)||void 0===f?0:f.addEventListener)this.eb.addEventListener("updateend",this.Rc),this.eb.addEventListener("error",this.Rc)};
$v=function(){return window.SourceBuffer?!!SourceBuffer.prototype.changeType:!1};
aw=function(a,b){this.i=a;this.l=void 0===b?!1:b;this.u=!1};
bw=function(a,b,c){c=void 0===c?!1:c;g.F.call(this);this.mediaSource=a;this.Wc=b;this.isView=c;this.u=0;this.callback=null;this.events=new g.Rn(this);g.G(this,this.events);this.po=new aw(this.mediaSource?window.URL.createObjectURL(this.mediaSource):this.Wc.webkitMediaSourceURL,!0);a=this.mediaSource||this.Wc;Sn(this.events,a,["sourceopen","webkitsourceopen"],this.C);Sn(this.events,a,["sourceclose","webkitsourceclose"],this.B)};
Lda=function(a,b){cw(a)?g.jh(function(){b(a)}):a.callback=b};
dw=function(a,b){try{a.mediaSource?a.mediaSource.duration=b:(a.u=b,a.Wc.webkitSourceSetDuration(b))}catch(c){}};
ew=function(a){return!!a.i||!!a.l};
cw=function(a){try{return"open"===fw(a)}catch(b){return!1}};
gw=function(a){try{return"closed"===fw(a)}catch(b){return!0}};
fw=function(a){if(a.mediaSource)return a.mediaSource.readyState;switch(a.Wc.webkitSourceState){case a.Wc.SOURCE_OPEN:return"open";case a.Wc.SOURCE_ENDED:return"ended";default:return"closed"}};
hw=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
iw=function(a,b,c,d){if(!a.i||!a.l)return null;var e=a.i.isView()?a.i.Qb:a.i,f=a.l.isView()?a.l.Qb:a.l,h=new bw(a.mediaSource,a.Wc,!0);h.po=a.po;e=new Xv(e,b,c,d);b=new Xv(f,b,c,d);h.i=e;h.l=b;g.G(h,e);g.G(h,b);cw(a)||a.i.wm(a.i.Kb());return h};
Mda=function(a,b){return jw(function(c,d){return g.Kj(c,d,4,1E3)},a,b)};
g.kw=function(a){var b;a.responseType&&"text"!==a.responseType?"arraybuffer"===a.responseType&&(b=dt(new Uint8Array(a.response))):b=a.responseText;return!b||2048<b.length?"":0===b.indexOf("https://")?b:""};
jw=function(a,b,c){b.match(Nda);return a(b,c).then(function(d){var e=g.kw(d);return e?jw(a,e,c):d})};
lw=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.N.call(this);this.sourceUrl=a;this.isLivePlayback=c;this.ma=this.duration=0;this.qd=this.D=this.isLive=this.u=!1;this.Ce=this.Lc=0;this.isOtf=this.Lg=!1;this.ea=(0,g.M)();this.I=Infinity;this.i={};this.state=this.T=0;this.timeline=null;this.isManifestless=!1;this.N=[];this.B=null;this.X=0;this.Da="";this.W=NaN;this.C=this.G=this.l=0;this.Ba=!!b&&g.P(b,"html5_live_nonzero_first_segment_start_time");this.Ka=!!b&&g.P(b,"html5_live_self_init_segments");
this.withCredentials=!b||!g.P(b,"html5_manifest_without_credentials");this.xa=!!b&&g.P(b,"disable_html5_manifest_namespace_redux");this.Aa=b&&g.P(b,"disable_html5_duration_caching")?Infinity:10;this.Ha=!!b&&g.P(b,"html5_reset_index_on_mismatch")};
ada=function(a){return g.Nb(a.i,function(b){return!!b.info.video&&b.info.video.isHdr()})};
ws=function(a){return g.Nb(a.i,function(b){return!!b.info.Qc})};
Oda=function(a){return g.Nb(a.i,function(b){return Fv(b.info.mimeType)})};
mw=function(a){return g.Nb(a.i,function(b){return b.info.video?2===b.info.video.projectionType:!1})};
nw=function(a){return g.Nb(a.i,function(b){return b.info.video?3===b.info.video.projectionType:!1})};
ow=function(a){return g.Nb(a.i,function(b){return b.info.video?4===b.info.video.projectionType:!1})};
Pda=function(a){return g.Nb(a.i,function(b){return b.info.video?1===b.info.video.stereoLayout:!1})};
Qda=function(a){return g.Ob(a.i,function(b){return b.info.video?b.Nu():!0})};
os=function(a){return g.Nb(a.i,function(b){return Ts(b.l.i)})};
pw=function(a,b){a.i[b.info.id]=b};
tw=function(a,b,c,d,e,f){var h=Rda(a);if(d||e){c=new lw("",f,!0);a=g.u(a);for(d=a.next();!d.done;d=a.next()){var l=d.value;d=qw(l,b);f=rw(l.url,l.sp,l.s);h=Number(l.target_duration_sec)||5;l=Number(l.max_dvr_duration_sec)||14400;var m=Number(f.get("mindsq")||f.get("min_sq")||"0"),n=Number(f.get("maxdsq")||f.get("max_sq")||"0")||Infinity;c.Lc=c.Lc||m;c.Ce=c.Ce||n;var p=!Fv(d.mimeType);f&&pw(c,new Qu(f,d,{Gf:h,yg:p,rh:l,Lc:m,Ce:n,oo:300,qd:e}))}c.u=!e;c.Lg=!0;c.isManifestless=!0;c.isLive=!e;c.qd=e;
c.D=!!c.Lc&&!!c.Ce&&isFinite(c.Ce);b=c}else b=3===h?Sda(a,b,c,f):Tda(a,b,c,f);return b};
Tda=function(a,b,c,d){c=void 0===c?0:c;var e=new lw("",d,!1);e.duration=c||0;g.wd(a,function(f){var h=qw(f,b,e.duration),l=nu(f.init),m=nu(f.index),n=Number(f.clen),p=rw(f.url,f.sp,f.s);f=Number(f.lmt);p&&pw(e,new rv(p,h,l,m,n,f))});
return e};
Sda=function(a,b,c,d){c=void 0===c?0:c;var e=new lw("",d,!1);e.duration=c||0;g.wd(a,function(f){var h=qw(f,b,e.duration),l=rw(f.url,f.sp,f.s);if(!g.iv(h)){var m=d&&g.P(d,"html5_manifestless_vp9_otf"),n=d&&g.P(d,"html5_otf_webm_audio_killswitch");if(!m||!h.isVideo()&&n)return}l&&(h.video&&3===h.video.streamType?pw(e,new Ru(l,h,"sq/0")):(m=nu(f.init),f=nu(f.index),pw(e,new Ru(l,h,"",m,f))))});
e.isOtf=!0;return e};
qw=function(a,b,c){c=void 0===c?0:c;var d=a.type;var e=a.itag;var f=a.xtags;f&&(e=a.itag+";"+f);var h=null;f=null;if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){h=(a.size||"640x360").split("x");h=new wv(+h[0],+h[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,a.quality_label,a.eotf,a.primaries,+a.stream_type);var l=h;null===uw&&(uw=window.MediaSource&&MediaSource.isTypeSupported&&MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16.09.00"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99.99.00"'));
if((uw||vw)&&('video/webm; codecs="vp9"'===d||'video/webm; codecs="vp9.2"'===d)){var m="00",n="08",p="01",q="01",r="01";'video/webm; codecs="vp9.2"'===d&&(m="02",n="10","bt2020"===l.primaries&&(r=p="09"),"smpte2084"===l.l&&(q="16"),"arib-std-b67"===l.l&&(q="18"));d='video/webm; codecs="'+["vp09",m,"51",n,"01",p,q,r,"00"].join(".")+'"'}}m=l=null;/(opus|mp4a|dtse|ac-3|ec-3)/.test(d)&&(l=new uv(+a.audio_sample_rate||void 0,+a.audio_channels||0,+a.spatial_audio_type),a.name&&(m=new Hv(a.name,a.audio_track_id,
"1"===a.isDefault)));a.caption_display_name&&a.caption_vss_id&&a.caption_language_code&&(f=new Ida(a.caption_display_name,a.caption_vss_id,a.caption_language_code,a.caption_kind));n=Number(a.bitrate)/8;p=Number(a.clen);c=c&&p?p/c:0;p=null;if(b&&a.drm_families)for(p={},a=g.u(a.drm_families.split(",")),q=a.next();!q.done;q=a.next())q=q.value,p[q]=b[q];return new Av(e,d,l,h,m,p,n,c,f)};
Rda=function(a){return g.Qj(a,function(b){return 3===+b.stream_type})?3:0};
rw=function(a,b,c){b=void 0===b?"":b;c=void 0===c?"":c;a=new Ps(a,!0);a.set("alr","yes");c&&(c=Cq(decodeURIComponent(c)),a.set(b,encodeURIComponent(c)));return a};
yw=function(a,b){var c=Iu(b,"id");c=c.replace(":",";");var d=Iu(b,"mimeType"),e=Iu(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=Number(Iu(b,"bandwidth"))/8;var f=Number(Ju(b,"BaseURL").getAttribute(ww(a,"contentLength")));f=a.duration&&f?f/a.duration:0;var h=null;if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){h=Number(Iu(b,"width"));var l=Number(Iu(b,"height")),m=Number(Iu(b,"frameRate")),n=Uda(Iu(b,ww(a,"projectionType")));a:switch(Iu(b,ww(a,"stereoLayout"))){case "layout_left_right":var p=1;break a;case "layout_top_bottom":p=
2;break a;default:p=0}Iu(b,"video_level");h=new wv(h,l,m,n,p,void 0,void 0,void 0,void 0)}m=l=null;if(/(opus|mp4a|dtse|ac-3|ec-3)/.test(d))if(l=Number(Iu(b,"audioSamplingRate")),m=Number(Iu(b.getElementsByTagName("AudioChannelConfiguration")[0],"value")),n=Vda(Iu(b,ww(a,"spatialAudioType"))),l=new uv(l,m,n),m=Iu(b,"lang")||"und",n=Ju(b,"Role")){var q=Iu(n,"value")||"";g.Ub(xw,q)?(n=m+"."+xw[q],p="main"===q,a=Iu(b,ww(a,"langName"))||m+" - "+q,m=new Hv(a,n,p)):m=null}else m=null;a=null;if(n=Ju(b,"ContentProtection"))if("http://youtube.com/drm/2012/10/10"!==
n.getAttribute("schemeIdUri"))a=null;else{b={};for(a=n.firstChild;null!=a;a=a.nextSibling)a instanceof Element&&/SystemURL/.test(a.nodeName)&&(n=a.getAttribute("type"),p=a.textContent,n&&p&&(b[n]=p.trim()));a=b}return new Av(c,d,l,h,m,a,e,f)};
Uda=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
Vda=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}};
Aw=function(a,b){b=void 0===b?"":b;a.state=1;a.ea=(0,g.M)();return g.xh(Mda(b||a.sourceUrl,{format:"RAW",method:"GET",withCredentials:a.withCredentials}).then(function(c){if(!a.ya()){a.T=c.status;c=c.responseText;var d=new DOMParser;c=g.Ed(d,g.Of(c),"text/xml").getElementsByTagName("MPD")[0];a.I=1E3*Ku(Iu(c,"minimumUpdatePeriod"))||Infinity;if(!a.xa){b:{if(c.attributes){d=g.u(c.attributes);for(var e=d.next();!e.done;e=d.next())if(e=e.value,"http://youtube.com/yt/2012/10/10"===e.value){d=e.name.split(":")[1];
break b}}d=""}a.Da=d}a.isLive=Infinity>a.I&&a.isLivePlayback;a.ma=Number(Iu(c,ww(a,"earliestMediaSequence")))||0;if(d=Date.parse(Lu(Iu(c,ww(a,"mpdResponseTime")))))a.X=(g.ab()-d)/1E3;a.isLive&&0>=c.getElementsByTagName("SegmentTimeline").length||g.yu(c.getElementsByTagName("Period"),a.vG,a);a.state=2;a.U("loaded");zw(a)}return a}),function(c){if(c instanceof g.Ij){var d=c.xhr;
a.T=d.status}a.state=3;a.U("loaderror");return g.th(d)})};
Wda=function(a,b,c){return Aw(new lw(a,b,c),a)};
Bw=function(a){return a.isLive&&(0,g.M)()-a.ea>=a.I};
zw=function(a){var b=a.I;isFinite(b)&&(Bw(a)?a.refresh():(b=Math.max(0,a.ea+b-(0,g.M)()),a.B||(a.B=new g.H(a.refresh,b,a),g.G(a,a.B)),a.B.start(b)))};
Xda=function(a){a=a.i;for(var b in a){var c=a[b].index;if(c.Vc())return c.vb()+1}return 0};
Dw=function(a){if(a.isManifestless&&a.D&&Cw(a))return Cw(a);a=a.i;var b=!1,c=NaN,d=NaN,e;for(e in a){var f=a[e],h=f.index;h.Vc()&&(f.C&&(b=!0),h=h.Gi(),f.info.isAudio()&&(isNaN(c)||h<c)?c=h:f.info.isVideo()&&(isNaN(d)||h<d)&&(d=h))}return b||isNaN(d)?c:Math.min(c,d)};
Cw=function(a){return a.G&&a.l?a.G-a.l:0};
Ew=function(a){if(!isNaN(a.W))return a.W;var b=a.i,c;for(c in b){var d=b[c].index;if(d.Vc()){b=0;for(c=d.Qf();c<=d.vb();c++)b+=d.getDuration(c);b/=d.Jl();b=.5*Math.round(b/.5);d.Jl()>a.Aa&&(a.W=b);return b}if(a.isLive&&(d=b[c],d.Gf))return d.Gf}return NaN};
Yda=function(a,b){a=Xb(a.i,function(d){return d.index.Vc()});
if(!a)return NaN;a=a.index;var c=a.zf(b);return a.Pd(c)===b?b:c<a.vb()?a.Pd(c+1):NaN};
Zda=function(a,b){g.Kb(a.i,function(c){g.Kb(b,function(d,e){var f=c.l;f.i.set(e,d);f.B.set(e,d);f.u&&f.u.set(e,d)})})};
$da=function(a,b){if(!a.i["0"]){var c=new Av("0","fakesb",void 0,new wv(0,0,0,void 0,void 0,"auto"),null,null,1);a.i["0"]=b?new Hu(new Ps("http://www.youtube.com/videoplayback"),c,"fake"):new rv(new Ps("http://www.youtube.com/videoplayback"),c,new mu(0,0),new mu(0,0),0,NaN)}};
Fw=function(a,b,c){for(var d in a.i){var e=Fv(a.i[d].info.mimeType)||a.i[d].info.isVideo();if(c===e){e=a.i[d].index;var f=Ou(e,b);0<=f&&e.segments.splice(f,1)}}};
ww=function(a,b){return a.xa?"yt:"+b:a.Da+":"+b};
aea=function(a){return g.lb(Object.values(a.i),function(b){return b.info.Qc&&b.info.video?480<b.info.video.i&&"H"===b.info.i:!1})};
bea=function(){this.qb=this.u=this.ma=this.T=this.N=this.ea=this.xa=this.Ha=this.Ba=!1;this.D=this.C=0;this.Ma=!1;this.Ka=!0;this.Pa=!1;this.G=0;this.bb=!1;this.Xa=Infinity;this.Bb=!1;this.ub=!0;this.Aa=this.Da=!1;this.l={};this.Ya=this.i=this.W=!1;this.B=this.I=null;this.Ua=this.X=!1};
Bs=function(a){if(a.Ha)return["f"];var b="9h 9 h 8 (h ( H *".split(" ");a.bb&&(b.unshift("1"),b.unshift("1h"));a.u&&b.unshift("h");a.I&&b.unshift(a.I);return b};
xs=function(a){var b=["o","a","A"];a.ea&&(b=["m","M"].concat(b));a.N&&(b=["mac3","MAC3"].concat(b));a.T&&(b=["meac3","MEAC3"].concat(b));a.Ba&&(b=["so","sa"].concat(b));!a.qb||a.ma||a.B||b.unshift("a");a.xa&&b.unshift("ah");a.B&&b.unshift(a.B);return b};
ax=function(a,b,c){b=void 0===b?{}:b;if(us(a.i,vs.AV1_CODECS)&&us(a.i,vs.HEIGHT)&&us(a.i,vs.BITRATE))return b.isCapabilityUsable=1,8192;try{var d=Gw();if(d)return b.localPref=d}catch(f){}d=g.Q(a.experiments,"html5_av1_thresh");var e=g.Q(a.experiments,"html5_av1_thresh_lcc");e&&2>=navigator.hardwareConcurrency&&(d=e);(e=g.Q(a.experiments,"html5_av1_thresh_hcc"))&&4<navigator.hardwareConcurrency&&(d=e);b.coreCount=navigator.hardwareConcurrency;(a=g.Q(a.experiments,"html5_av1_thresh_arm"))&&Ek()&&(b.isArm=
1,d=a);if(c){if((a=c.videoInfos.find(function(f){return Dv(f)}))&&a.B)return d=8192,b.av1Threshold=d;
c=c.videoInfos[0].video;a=Math.min(Hw("1",c.fps),Hw("1",30));b.perfCap=a;d=Math.min(d,a);c.isHdr()&&(b.hdr=1,d*=.75)}else c=Hw("1",30),b.perfCap30=c,d=Math.min(d,c),c=Hw("1",60),b.perfCap60=c,d=Math.min(d,c);return b.av1Threshold=d};
cx=function(a,b,c,d){this.flavor=a;this.keySystem=b;this.u=c;this.experiments=d;this.i={};this.l=this.keySystemAccess=null;this.D=this.G=-1;this.B=null;this.C="";this.I=!!d&&g.P(d,"edge_nonprefixed_eme");this.C=d?g.bx(d,"html5_hdcp_probing_stream_url"):""};
ex=function(a){return a.I?!1:!a.keySystemAccess&&!!dx()&&"com.microsoft.playready"===a.keySystem};
fx=function(a){return"com.microsoft.playready"===a.keySystem};
gx=function(a){return jn&&"com.microsoft.playready"===a.keySystem&&!!navigator.requestMediaKeySystemAccess};
hx=function(a){return!a.keySystemAccess&&!!dx()&&"com.apple.fps.1_0"===a.keySystem};
ix=function(a){return"com.youtube.fairplay"===a.keySystem};
g.jx=function(a){return"fairplay"===a.flavor};
dx=function(){var a=window,b=a.MSMediaKeys;Jk()&&!b&&(b=a.WebKitMediaKeys);return b&&b.isTypeSupported?b:null};
lx=function(a){if(!navigator.requestMediaKeySystemAccess)return!1;if(Lv&&!g.Fk())return ai("45");if(jn||g.Ne)return g.P(a,"edge_nonprefixed_eme");if(kx)return ai("47");if(g.nm){if(g.P(a,"html5_enable_safari_fairplay"))return!1;if(a=g.Q(a,"html5_safari_desktop_eme_min_version"))return ai(a)}return!0};
cea=function(a,b,c,d){var e=Gk(),f=(c=e||c&&Jk())?["com.youtube.fairplay"]:["com.widevine.alpha"];b&&(f.unshift("com.youtube.widevine.l3"),e&&d&&f.unshift("com.youtube.widevine.forcehdcp"));return c?f:a?[].concat(g.oa(f),g.oa(mx.playready)):[].concat(g.oa(mx.playready),g.oa(f))};
nx=function(a,b,c,d,e){d=void 0===d?!1:d;g.F.call(this);this.experiments=b;this.useCobaltWidevine=d;this.Ja=e;this.i=[];this.l={};this.B={};this.callback=null;this.C=!1;this.u=[];this.initialize(a,!c);this.K()};
eea=function(a,b){a.callback=b;a.u=[];lx(a.experiments)?ox(a):dea(a)};
ox=function(a){if(!a.ya())if(0===a.i.length)a.callback(a.u);else{var b=a.i[0],c=a.l[b],d=fea(a,c);a.K();navigator.requestMediaKeySystemAccess(b,d).then(ej(function(e){if(!a.ya()){a.K();c.keySystemAccess=e;if(fx(c)){e=Iv();for(var f=g.u(Object.keys(a.B[c.flavor])),h=f.next();!h.done;h=f.next())h=h.value,c.i[h]=!!e.canPlayType(h)}else{e=c.keySystemAccess.getConfiguration();if(e.audioCapabilities)for(f=g.u(e.audioCapabilities),h=f.next();!h.done;h=f.next())px(a,c,h.value);if(e.videoCapabilities)for(e=
g.u(e.videoCapabilities),f=e.next();!f.done;f=e.next())px(a,c,f.value)}a.u.push(c);a.S("html5_drm_fallback_to_playready_on_retry")||a.useCobaltWidevine?(a.i.shift(),ox(a)):a.callback(a.u)}}),ej(function(){a.K();
a.C=!a.C&&"widevine"===a.l[a.i[0]].flavor;a.C||a.i.shift();ox(a)}))}};
px=function(a,b,c){a.S("log_robustness_for_drm")?b.i[c.contentType]=c.robustness||!0:b.i[c.contentType]=!0};
fea=function(a,b){var c={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};fx(b)&&(c.initDataTypes=["keyids","cenc"]);for(var d=g.u(Object.keys(a.B[b.flavor])),e=d.next();!e.done;e=d.next()){e=e.value;var f=0===e.indexOf("audio/"),h=f?c.audioCapabilities:c.videoCapabilities;"widevine"!==b.flavor||a.C?h.push({contentType:e}):f?h.push({contentType:e,robustness:"SW_SECURE_CRYPTO"}):(h.push({contentType:e,robustness:"HW_SECURE_ALL"}),f=e,a.S("html5_enable_cobalt_experimental_vp9_decoder")&&
e.includes("vp09")&&(f=e+"; experimental=allowed"),h.push({contentType:f,robustness:"SW_SECURE_DECODE"}),a.S("html5_query_sw_secure_crypto_for_android")&&(Pk()||Dk())&&(a.Ja("swcrypto","1"),h.push({contentType:e,robustness:"SW_SECURE_CRYPTO"})))}return[c]};
dea=function(a){if(dx()&&g.nm)a.K(),a.u.push(new cx("fairplay","com.apple.fps.1_0","",a.experiments));else{var b=gea(),c=g.lb(a.i,function(d){var e=a.l[d],f=!1,h=!1,l;for(l in a.B[e.flavor])b(l,d)&&(e.i[l]=!0,f=f||0===l.indexOf("audio/"),h=h||0===l.indexOf("video/"));return f&&h});
c?(a.K(),a.u.push(a.l[c])):a.K();a.i=[]}a.callback(a.u)};
gea=function(){var a=dx();if(a){var b=a.isTypeSupported;return function(d,e){return b(e,d)}}var c=Iv();
return c&&(c.addKey||c.webkitAddKey)?function(d,e){return!!c.canPlayType(d,e)}:function(){return!1}};
hea=function(){this.i=0};
iea=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=hj(b||"","&");var c={};g.wd(this.experimentIds,function(d){c[d]=!0});
this.experiments=c};
g.P=function(a,b){return"true"===a.flags[b]};
g.Q=function(a,b){return Number(a.flags[b])||0};
g.bx=function(a,b){return(a=a.flags[b])?a.toString():""};
qx=function(a,b,c){this.experiments=a;this.T=b;this.X=void 0===c?!1:c;this.D=!!g.Na("cast.receiver.platform.canDisplayType");this.C={};this.I=!1;this.i=new Map;this.G=!0;this.B=!g.P(this.experiments,"html5_disable_protected_hdr");this.l=!1;this.N=g.P(this.experiments,"html5_disable_vp9_encrypted");a=g.Na("cast.receiver.platform.getValue");this.u=!this.D&&a&&a("max-video-resolution-vpx")||null};
ps=function(a,b,c){c=void 0===c?1:c;var d=b.wb();if("0"===d||g.P(a.experiments,"html5_use_media_capability")&&b.isSupported)return!0;var e=b.mimeType;if(Dv(b)&&a.I)return"dav1";if(b.video&&(b.video.isHdr()||"bt2020"===b.video.primaries)&&!(us(a,vs.EOTF)||window.matchMedia&&(window.matchMedia("(dynamic-range: high)").matches||24<window.screen.pixelDepth&&window.matchMedia("(color-gamut: p3)").matches)))return"dhdr";if("338"===d&&!(Lv?ai(53):kx&&ai(64)))return"dopus";var f=c;f=void 0===f?1:f;c={};b.video&&
(b.video.width&&(c[vs.WIDTH.name]=b.video.width),b.video.height&&(c[vs.HEIGHT.name]=b.video.height),b.video.fps&&(c[vs.FRAMERATE.name]=b.video.fps*f),b.video.l&&(c[vs.EOTF.name]=b.video.l),b.l&&(c[vs.BITRATE.name]=8*b.l*f),"("===b.i&&(c[vs.CRYPTOBLOCKFORMAT.name]="subsample"),2===b.video.projectionType||3===b.video.projectionType||4===b.video.projectionType)&&(c[vs.DECODETOTEXTURE.name]="true");b.audio&&b.audio.i&&(c[vs.CHANNELS.name]=b.audio.i);a.l&&Bv(b)&&(c[vs.EXPERIMENTAL.name]="allowed");f=g.u(Object.keys(vs));
for(var h=f.next();!h.done;h=f.next()){h=vs[h.value];var l;if(l=c[h.name])(l=h===vs.EOTF&&0<b.mimeType.indexOf("vp09.02"))||(l=b,l=g.P(a.experiments,"html5_ignore_h264_framerate_cap")&&h===vs.FRAMERATE&&("H"===l.i||"h"===l.i)),l=!(l||h===vs.DECODETOTEXTURE&&!g.P(a.experiments,"html5_decode_to_texture_cap"));if(l)if(us(a,h))if(a.u){if(a.u[h.name]<c[h.name])return h.name}else e=e+"; "+h.name+"="+c[h.name];else if(Cv(b)&&h===vs.EOTF)return"dvp92"}!g.P(a.experiments,"disable_html5_cast_hdcp_filter2")&&
a.D&&b.video&&1080<b.video.i&&b.Qc&&(e+="; hdcp=2.2");return"227"!==d||g.P(a.experiments,"html5_enable_1080p_hq_cenc")?"585"!==d&&"588"!==d&&"583"!==d&&"586"!==d&&"584"!==d&&"587"!==d&&"591"!==d&&"592"!==d||g.P(a.experiments,"html5_enable_new_hvc_enc")?a.isTypeSupported(e)?!0:"tpus":"newhvc":"hqcenc"};
rx=function(){var a=Dk()&&!ai(29),b=Ck("google tv")&&Ck("chrome")&&!ai(30),c=Gk();return a||b||c?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&HTMLMediaElement.prototype.webkitSourceAddId)};
sx=function(a,b,c){var d=480;b=g.u(b);for(var e=b.next();!e.done;e=b.next())if(e=e.value,!(1080<e.video.i)&&ps(a,e,c)){d=e.video.i;break}return d};
g.tx=function(a,b){b=void 0===b?!1:b;return rx()&&a.isTypeSupported('audio/mp4; codecs="mp4a.40.2"')||!b&&a.canPlayType(Iv(),"application/x-mpegURL")?!0:!1};
us=function(a,b){b.name in a.C||(a.C[b.name]=jea(a,b));return a.C[b.name]};
jea=function(a,b){if(a.u)return!!a.u[b.name];if(b===vs.BITRATE&&g.P(a.experiments,"html5_ignore_bad_bitrates")&&a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000')&&!a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000'))return!1;if(b===vs.AV1_CODECS)return a.isTypeSupported("video/mp4; codecs="+b.valid)&&!a.isTypeSupported("video/mp4; codecs="+b.invalid);if(b.video){var c='video/webm; codecs="vp9"';a.isTypeSupported(c)||(c='video/mp4; codecs="avc1.4d401e"')}else c=
'audio/webm; codecs="opus"',a.isTypeSupported(c)||(c='audio/mp4; codecs="mp4a.40.2"');return a.isTypeSupported(c+"; "+b.name+"="+b.valid)&&!a.isTypeSupported(c+"; "+b.name+"="+b.invalid)};
ux=function(){g.N.call(this);this.items={}};
kea=function(a,b){this.encryptedClientKey=b;this.i=new Uint8Array(a.buffer,0,16);this.l=new Uint8Array(a.buffer,16)};
vx=function(a){try{return oe(a)}catch(b){return null}};
lea=function(a,b){this.onesieUstreamerConfig=null;if(!b&&a)try{b=JSON.parse(a)}catch(e){}if(b){a=b.clientKey?vx(b.clientKey):null;var c=b.encryptedClientKey?vx(b.encryptedClientKey):null,d=b.keyExpiresInSeconds?1E3*Number(b.keyExpiresInSeconds)+(0,g.M)():null;a&&c&&d&&(this.i=new kea(a,c));b.onesieUstreamerConfig&&(this.onesieUstreamerConfig=vx(b.onesieUstreamerConfig));this.baseUrl=b.baseUrl}};
wx=function(a){this.i=this.l=0;this.alpha=Math.exp(Math.log(.5)/a)};
yx=function(a,b,c,d){c=void 0===c?.5:c;d=void 0===d?0:d;this.resolution=b;this.valueIndex=0;this.l=!1;this.B=!0;this.i=Math.round(a*this.resolution);this.values=Array(this.i);for(a=0;a<this.i;a++)this.values[a]=Infinity;this.D=xx(this);this.u=c;this.C=d};
xx=function(a){for(var b=Array(a.i),c=0;c<a.i;c++)b[c]=c;return b};
zx=function(a,b){if(!a.l&&0===a.valueIndex)return 0;a.B&&(g.Fb(a.D,function(c,d){return a.values[c]-a.values[d]}),a.B=!1);
return a.values[a.D[Math.round(b*((a.l?a.i:a.valueIndex)-1))]]||0};
nea=function(a){var b=new hea;this.policy=a;this.T=b;this.I=this.X=0;this.B=-1;this.D=this.G=Ax();this.C=new yx(4,1,.6,.4);this.i=new yx(10,1,.5,.4);this.l=a.i?new wx(a.l):new yx(a.l,20,.5,.4);this.N=new yx(5,1,.25);this.u=new yx(30,1,.5);a=mea();this.l.wf(this.policy.B,0<a.byterate?a.byterate:this.policy.u);0<a.delay&&this.C.wf(1,Math.min(+a.delay,2));0<a.stall&&this.i.wf(1,+a.stall);0<a.init&&(this.D=Math.min(a.init,this.D));this.B=Ax()};
Bx=function(a,b,c,d,e,f){f=void 0===f?!1:f;a.N.wf(b,c/b);f||(a.G=Ax());e||a.u.wf(1,b-d)};
Cx=function(a){a=a.C.ze();a=isNaN(a)?.5:a;return a=Math.min(a,5)};
Dx=function(a,b,c){isNaN(c)||(a.I+=c);isNaN(b)||(a.X+=b)};
Ex=function(a){a=a.l.ze();return 0<a?a:1};
Fx=function(a){var b=Ex(a);b=1/((a.i.ze()||0)+1/b);a=a.N.ze();return Math.max(b,0<a?a:1)};
Gx=function(a){return{delay:Cx(a),stall:a.i.ze()||0,byterate:Ex(a),init:a.D}};
Ix=function(a){-1<a.B&&3E4<Ax()-a.B&&(Hx(Gx(a)),a.B=Ax())};
Jx=function(a){return 4E3<=Ax()-a.G};
oea=function(){this.l=17;this.u=13E4;this.B=.5;this.i=!1};
Lx=function(a,b){a=void 0===a?{}:a;b=void 0===b?{}:b;g.F.call(this);var c=this;this.values=a;this.Dh=b;this.l={};this.u=this.i=0;this.B=new g.H(function(){Kx(c)},1E4);
g.G(this,this.B)};
Nx=function(a,b){Mx(a,b);return a.values[b]&&a.Dh[b]?a.values[b]/Math.pow(2,a.i/a.Dh[b]):0};
Mx=function(a,b){a.values[b]||(b=Ox(),a.values=b.values||{},a.Dh=b.halfLives||{},a.l=b.values?Object.assign({},b.values):{})};
Kx=function(a){var b=Ox();if(b.values){b=b.values;for(var c={},d=g.u(Object.keys(a.values)),e=d.next();!e.done;e=d.next())e=e.value,b[e]&&a.l[e]&&(a.values[e]+=b[e]-a.l[e]),c[e]=Nx(a,e);a.l=c}pea(a.l,a.Dh)};
R=function(a,b){return void 0===b||null===b?a:"1"===b||!0===b||1===b||"True"===b?!0:!1};
Px=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
g.Qx=function(a,b){return void 0===b||null===b?a:Number(b)};
Rx=function(a,b){return void 0===b||null===b?a:b.toString()};
Sx=function(a,b){if(b){if("fullwidth"===a)return Infinity;if("fullheight"===a)return 0}return a&&(b=a.match(qea))&&(a=Number(b[2]),b=Number(b[1]),!isNaN(a)&&!isNaN(b)&&0<a)?b/a:NaN};
Tx=function(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||g.J("parse_video_id_from_serialized_player_response_killswitch")||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null};
qy=function(a,b,c){var d,e;g.F.call(this);this.csiServiceName=this.csiPageType="";this.userAge=NaN;this.Sb=this.Ba=this.Aa=this.Gb=this.userDisplayName=this.userDisplayImage="";this.deviceParams={};this.controlsType="0";this.ub=NaN;this.Da=!1;this.W=0;this.Oc=this.Ma=this.Jd=this.Ie=!1;a=a?g.dc(a):{};b&&b.csiPageType&&(this.csiPageType=b.csiPageType);b&&b.csiServiceName&&(this.csiServiceName=b.csiServiceName);this.experiments=new iea(b?b.serializedExperimentIds:a.fexp,b?b.serializedExperimentFlags:
a.fflags);this.ea=b?b.serializedForcedExperimentIds:Rx("",a.forced_experiments)||void 0;this.cspNonce=(null===b||void 0===b?0:b.cspNonce)&&!this.S("fill_csp_nonce_from_wpcc_killswitch")?b.cspNonce:Rx("",a.csp_nonce);Fs=this.S("web_player_deprecated_uvr_killswitch");try{var f=document.location.toString()}catch(v){f=""}this.Ha=f;this.qb=(f=window.location.ancestorOrigins)?Array.from(f):[];f=!this.S("web_player_context_config_embeds_fields_killswitch");this.B=!1;if(b&&b.device){var h=b.device;h.brand&&
(this.deviceParams.cbrand=h.brand);h.browser&&(this.deviceParams.cbr=h.browser);h.browserVersion&&(this.deviceParams.cbrver=h.browserVersion);this.deviceParams.c=h.interfaceName||"WEB";this.deviceParams.cver=h.interfaceVersion||"html5";h.interfaceTheme&&(this.deviceParams.ctheme=h.interfaceTheme);this.deviceParams.cplayer=h.interfacePlayerType||"UNIPLAYER";h.model&&(this.deviceParams.cmodel=h.model);h.network&&(this.deviceParams.cnetwork=h.network);h.os&&(this.deviceParams.cos=h.os);h.osVersion&&
(this.deviceParams.cosver=h.osVersion);h.platform&&(this.deviceParams.cplatform=h.platform)}else this.deviceParams.c=a.c||"web",this.deviceParams.cver=a.cver||"html5",this.deviceParams.cplayer="UNIPLAYER";b&&!this.S("wpcc_loader_url_killswitch")?this.loaderUrl=this.B||Ux(this)&&b.loaderUrl?b.loaderUrl||"":this.Ha:this.loaderUrl=this.B||Ux(this)&&a.loaderUrl?Rx("",a.loaderUrl):this.Ha;this.l=Gs(this.loaderUrl,rea,sea);h=this.loaderUrl;var l=void 0===l?!1:l;this.hg=Es(Gs(h,tea,null),h,l,"Trusted Ad Domain URL");
this.Ua=R(!1,a.privembed);this.protocol=0===this.Ha.indexOf("http:")?"http":"https";this.X=Is((b?b.customBaseYoutubeUrl:a.BASE_YT_URL)||"")||Is(this.Ha)||this.protocol+"://www.youtube.com/";l=b?b.eventLabel:a.el;h="detailpage";"adunit"===l?h=this.B?"embedded":"detailpage":"embedded"===l||this.l?h=Px(h,l,uea):l&&(h="embedded");this.D=h;xk();l=null;h=b?b.playerStyle:a.ps;var m=g.pb(vea,h);!h||m&&!this.l||(l=h);this.playerStyle=l;this.Tb=R(!1,a.disableplaybackui);this.Vf=this.S("variable_playback_rate")&&
this.S("enable_vsp")?!0:Iv().defaultPlaybackRate?Vx||Ok||g.Wx?kx&&ai("20")||Lv&&ai("4")||Vf&&ai("11")||Kk():!(Vf&&!Ck("chrome")||Vx||Ck("android")||Ck("silk")):!1;this.nf=R(!1,a.enable_faster_speeds);this.u=!0;this.u?l=!0:(l=Number(Date.now()/1E3),h=g.Al.getInstance(),l=this.S("block_desktop_background_playback_with_mobile_cookie")&&h&&l>Number(h.get("dhmu",l.toString())));this.fg=l;this.Ya="3"===this.controlsType||this.u||R(!1,a.use_media_volume);this.Ka=Ov();this.Vg=Xx;this.jf=R(!1,b&&f?b.embedOptOutDeprecation:
a.opt_out_deprecation);this.pfpChazalUi=R(!1,(b&&f?b.pfpChazalUi:a.pfp_chazal_ui)&&!this.S("embeds_pfp_chazal_ui_killswitch"));var n;b?void 0!==b.hideInfo&&(n=!b.hideInfo):n=a.showinfo;this.Xg=Yx(this)&&!this.jf||R(!Zx(this)&&!$x(this)&&!0,n);this.Kd=b?!!b.mobileIphoneSupportsInlinePlayback:R(!1,a.playsinline);n=this.u&&ay&&null!=by&&0<by&&2.3>=by;l=b?b.controlsType:a.controls;this.controlsType=!this.S("mweb_enable_custom_control_shared")||"0"!==l&&0!==l?"3":"0";this.eh=this.u;this.color=Px("red",
b&&f?b.progressBarColor:a.color,wea);this.dh=this.Tg=n;this.Wd=!(cy&&!g.Ge(537));this.cg=this.B||!1;this.Xa=$x(this)?"":(this.loaderUrl||a.post_message_origin||"").substring(0,128);this.widgetReferrer=Rx("",b&&f?b.widgetReferrer:a.widget_referrer);var p;b&&f?b.disableCastApi&&(p=!1):p=a.enablecastapi;p=!this.l||R(!0,p);n=!0;b&&b.disableMdxCast&&(n=!1);this.Nc=this.S("enable_mdx_module_for_music_web")&&g.dy(this)&&n||p&&n&&"1"===this.controlsType&&!this.u&&($x(this)||ey(this)||"profilepage"===this.D)&&
!g.fy(this)&&"area120-boutique"!==this.playerStyle;this.bh=Mv()||Nv();p=b?!!b.supportsAutoplayOverride:R(!1,a.autoplayoverride);this.qc=!this.u&&!Ck("nintendo wiiu")&&!Ck("nintendo 3ds")||p;p=b?!!b.enableMutedAutoplay:R(!1,a.mutedautoplay);this.S("embeds_enable_muted_autoplay");this.bb=p&&this.Ka&&!g.gy(this);p=($x(this)||Zx(this))&&"blazer"===this.playerStyle;this.ld=b?!!b.disableFullscreen:!R(!0,a.fs);this.Hc=!this.ld&&(p||g.Nn());this.Mc=this.S("uniplayer_block_pip")&&(Dk()&&ai(58)&&!Pk()||Mk);
p=Yx(this)&&!this.jf;var q;b?void 0!==b.disableRelatedVideos&&(q=!b.disableRelatedVideos):q=a.rel;this.Yg=p||R(!0,q);this.Vd=R(!1,b&&f?b.enableContentOwnerRelatedVideos:a.co_rel);Pk();this.Zg="profilepage"===this.D;this.Xb=R("blazer"===this.playerStyle,b?b.enableCsiLogging:a.enablecsi);switch(this.playerStyle){case "blogger":q="bl";break;case "gmail":q="gm";break;case "books":q="gb";break;case "docs":q="gd";break;case "duo":q="gu";break;case "google-live":q="gl";break;case "google-one":q="go";break;
case "play":q="gp";break;case "chat":q="hc";break;case "hangouts-meet":q="hm";break;case "photos-edu":case "picasaweb":q="pw";break;default:q="yt"}this.C=q;this.N=Rx("",b&&f?b.authorizedUserIndex:a.authuser);this.loop=R(!1,a.loop);this.pageId=Rx("",!this.S("wpcc_pageid_killswitch")&&b?b.initialDelegatedSessionId:a.pageid);this.Wg=R(!0,a.canplaylive);this.Je=R(!1,a.livemonitor);this.disableSharing=R(!1,b?b.disableSharing:a.ss);(q=b&&this.S("fill_video_container_size_override_from_wpcc")?b.videoContainerOverride:
a.video_container_override)?(p=q.split("x"),2!==p.length?q=null:(q=Number(p[0]),p=Number(p[1]),q=isNaN(q)||isNaN(p)||0>=q*p?null:new g.ff(q,p))):q=null;this.Xd=q;this.mute=b?!!b.startMuted:R(!1,a.mute);this.pc=!this.mute&&R("0"!==this.controlsType,a.store_user_volume);q=b?b.annotationsLoadPolicy:a.iv_load_policy;this.annotationsLoadPolicy="3"===this.controlsType?3:Px(void 0,q,hy);this.captionsLanguagePreference=b?b.captionsLanguagePreference||"":Rx("",a.cc_lang_pref);q=Px(2,b&&f?b.captionsLanguageLoadPolicy:
a.cc_load_policy,hy);"3"===this.controlsType&&2===q&&(q=3);this.T=q;this.Bb=b?b.hl||"en_US":Rx("en_US",a.hl);this.region=b?b.contentRegion||"US":Rx("US",a.cr);this.hostLanguage=b?b.hostLanguage||"en":Rx("en",a.host_language);this.Oe=!this.Ua&&Math.random()<g.Q(this.experiments,"web_player_api_logging_fraction");this.G=!this.Ua;this.enabledEngageTypes=new Set;this.deviceHasDisplay=b?!b.deviceIsAudioOnly:R(!0,a.deviceHasDisplay);this.ub=g.Qx(this.ub,a.ismb);q=a;g.bx(this.experiments,"html5_qoe_intercept")?
q=g.bx(this.experiments,"html5_qoe_intercept"):(q=q.vss_host||"s.youtube.com",this.S("www_for_videostats")&&"s.youtube.com"===q&&(q=g.iy(this.X)||"www.youtube.com"));this.qe=q;jy(this,a,!0);this.I=new ux;g.G(this,this.I);q=b?b.innertubeApiKey:Rx("",a.innertube_api_key);p=b?b.innertubeApiVersion:Rx("",a.innertube_api_version);n=b?b.innertubeContextClientVersion:Rx("",a.innertube_context_client_version);this.Vb={innertubeApiKey:Yi("INNERTUBE_API_KEY")||q,innertubeApiVersion:Yi("INNERTUBE_API_VERSION")||
p,Sy:g.I("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ty:this.deviceParams.c,innertubeContextClientVersion:Yi("INNERTUBE_CONTEXT_CLIENT_VERSION")||n,Vy:this.hostLanguage,Uy:this.region,Wy:Yi("INNERTUBE_HOST_OVERRIDE")||"",Yy:!!g.I("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xy:!!g.I("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1)};this.Xh=null!=window.WebKitPlaybackTargetAvailabilityEvent;this.i=new qx(this.experiments,this.S("html5_force_hfr_support")?!0:g.ky(this)||Hk()||Ik()||ly(this),Lv&&g.Ge(56)||
kx&&g.Ge(54)||ly(this));q=this.ub;p=this.experiments;n=new oea;g.my(this)&&(n.i=!0,n.B=.1);g.P(p,"html5_pctile_bandwidth_estimator")&&(n.i=!1);q&&(n.u=q/8);this.schedule=new nea(n);this.enableSafetyMode=null!==(d=null===b||void 0===b?void 0:b.initialEnableSafetyMode)&&void 0!==d?d:R(!1,a.enable_safety_mode);q=this.Tb?!1:!0;var r;b&&f?null!=b.disableAutonav&&(r=!b.disableAutonav):r=a.allow_autonav;this.Gc=R(q,r);this.sendVisitorIdHeader=b?!!b.sendVisitorIdHeader:R(!1,a.send_visitor_id_header);this.xa=
(0,g.M)();var t;"docs"===this.playerStyle&&(b&&f?t=b.disableNativeContextMenu:t=a.disable_native_context_menu);this.disableNativeContextMenu=R(!1,t);g.ky(this)&&this.S("enable_skip_intro_button");this.embedConfig=Rx("",b&&f?b.serializedEmbedConfig:a.embed_config);this.dg=R(!1,a.full_window);this.ma=!g.ny(this)&&!g.oy(this)&&!g.fy(this)&&"area120-boutique"!==this.playerStyle&&!this.S("mweb_disable_uniplayer_ux");this.livingRoomAppMode=Px("LIVING_ROOM_APP_MODE_UNSPECIFIED",b?null===(e=b.device)||void 0===
e?void 0:e.livingRoomAppMode:a.living_room_app_mode,py);this.transparentBackground=b?!!b.transparentBackground:R(!1,a.transparent_background);this.useFastSizingOnWatchDefault=R(!0,b?b.useFastSizingOnWatchDefault:a.use_fast_sizing_on_watch_default);this.showMiniplayerButton=b?!!b.showMiniplayerButton:R(!1,a.show_miniplayer_button);this.externalFullscreen=b?!!b.externalFullscreen:R(!1,a.external_fullscreen);this.showMiniplayerUiWhenMinimized=b?!!b.showMiniplayerUiWhenMinimized:R(!1,a.use_miniplayer_ui);
this.showInlinePreviewUi=b?!!b.showInlinePreviewUi:!1;this.showBackButton=R(!1,a.showbackbutton);this.Sg=1E-4>Math.random();this.Wb=a.onesie_hot_config||(null===b||void 0===b?0:b.onesieHotConfig)?new lea(a.onesie_hot_config,null===b||void 0===b?void 0:b.onesieHotConfig):void 0;this.isTectonic=b&&!this.S("fill_is_tectonic_from_wpcc_killswitch")?!!b.isTectonic:!!a.isTectonic;this.Ug=c;this.Pa=new Lx;g.G(this,this.Pa);this.Oc=R(!1,a.force_gvi);mn=this.datasyncId=(null===b||void 0===b?void 0:b.datasyncId)||
g.I("DATASYNC_ID",void 0);this.Ke=(null===b||void 0===b?void 0:b.allowWoffleManagement)||!1;this.zc=0};
jy=function(a,b,c){c=void 0===c?!1:c;a.Ba=Rx(a.Ba,b.video_id);a.Aa=Rx(a.Aa,b.eventid);for(var d=[],e=g.u(Object.keys(ry)),f=e.next();!f.done;f=e.next()){f=ry[f.value];var h=b[f];null!=h&&(h!==a.deviceParams[f]&&d.push(f),a.deviceParams[f]=h)}!c&&0<d.length&&a.Sg&&(d.sort(),g.to(new g.hm("Player client parameters changed after startup",d)));a.userAge=g.Qx(a.userAge,b.user_age);a.userDisplayImage=Rx(a.userDisplayImage,b.user_display_image);g.Ks(a.userDisplayImage)||(a.userDisplayImage="");a.userDisplayName=
Rx(a.userDisplayName,b.user_display_name);a.Gb=Rx(a.Gb,b.user_gender);a.csiPageType=Rx(a.csiPageType,b.csi_page_type);a.csiServiceName=Rx(a.csiServiceName,b.csi_service_name);a.Xb=R(a.Xb,b.enablecsi);a.pageId=Rx(a.pageId,b.pageid);if(b=b.enabled_engage_types)a.enabledEngageTypes=new Set(b.split(","))};
sy=function(a,b){return Dk()&&ai(55)&&"3"===a.controlsType&&!b};
ty=function(a){return g.fy(a)?"music.youtube.com":"www.youtube.com"};
g.uy=function(a,b,c){return a.protocol+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
vy=function(a){return $x(a)&&!g.ny(a)};
g.gy=function(a){return cy&&!a.Kd||Ck("nintendo wiiu")||Ck("nintendo 3ds")?!0:!1};
g.fy=function(a){return"music-embed"===a.playerStyle};
g.my=function(a){return/^TVHTML5/.test(a.deviceParams.c)?!0:"TV"===a.deviceParams.cplatform};
wy=function(a){return"TVHTML5"===a.deviceParams.c&&a.deviceParams.cver.startsWith("7")};
Ux=function(a){return"TVHTML5_SIMPLY_EMBEDDED_PLAYER"===a.deviceParams.c};
ly=function(a){return"CHROMECAST ULTRA/STEAK"===a.deviceParams.cmodel||"CHROMECAST/STEAK"===a.deviceParams.cmodel};
yy=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
g.ky=function(a){return"web"===a.deviceParams.c.toLowerCase().substr(0,3)};
g.Cr=function(a){return"WEB"===a.deviceParams.c.toUpperCase()};
g.oy=function(a){return"WEB_KIDS"===a.deviceParams.c};
g.ny=function(a){return"WEB_UNPLUGGED"===a.deviceParams.c};
g.zy=function(a){return"TV_UNPLUGGED_CAST"===a.deviceParams.c};
g.Ay=function(a){return"TVHTML5_UNPLUGGED"===a.deviceParams.c};
g.By=function(a){return g.ny(a)||g.zy(a)||g.Ay(a)};
g.dy=function(a){return"WEB_REMIX"===a.deviceParams.c};
g.Cy=function(a){return"WEB_EMBEDDED_PLAYER"===a.deviceParams.c};
g.Br=function(a){return g.Cr(a)&&a.S("web_player_i_see_captions")};
xea=function(a){if(ey(a)&&ay)return!1;if(kx){if(!g.Ge(47)||!g.Ge(52)&&g.Ge(51))return!1}else if(g.nm)return!1;return window.AudioContext||window.webkitAudioContext?!0:!1};
$x=function(a){return"detailpage"===a.D};
ey=function(a){return"embedded"===a.D};
g.Dy=function(a){return"leanback"===a.D};
Zx=function(a){return"adunit"===a.D||"gvn"===a.playerStyle};
Yx=function(a){return a.B&&ey(a)&&!Zx(a)&&!0};
g.iy=function(a){var b=g.Sd(a);return(a=Number(Rd(4,a))||null)?b+":"+a:b};
Ey=function(a){this.i=a};
Fy=function(a,b,c){if(c)return g.Mj();var d={};c=Iv();b=g.u(b);for(var e=b.next();!e.done;e=b.next())if(e=e.value,a.canPlayType(c,e.Md().mimeType)){var f=e.i.Qa().quality;if(!d[f]||d[f].Md().cd())d[f]=e}var h=[];d.auto&&h.push(d.auto);g.wd(xv,function(l){(l=d[l])&&h.push(l)});
return h.length?g.Nj(h):g.Mj()};
Gy=function(a,b,c){this.u=a;this.l=b;this.cpn=c;this.B=0;this.i=""};
Hy=function(a,b,c){a.cpn&&(b=g.ae(b,{cpn:a.cpn}));c&&(b=g.ae(b,{aU:c}));return b};
Iy=function(a,b){a=a.itag.toString();null!==b&&(a+=b.itag.toString());return a};
yea=function(a){for(var b=[],c=[],d=g.u(a.l),e=d.next();!e.done;e=d.next())e=e.value,e.bitrate<=a.B?b.push(e):c.push(e);b.sort(function(f,h){return h.bitrate-f.bitrate});
c.sort(function(f,h){return f.bitrate-h.bitrate});
a.l=b.concat(c)};
zea=function(a,b,c,d,e,f,h,l,m,n,p,q){this.itag=a;this.url=b;this.codecs=c;this.width=d;this.height=e;this.fps=f;this.bitrate=h;this.i=void 0===p?null:p;this.audioChannels=q;this.B=(null===l||void 0===l?void 0:l.split(","))||[];this.u=m||null;this.Qc=n||"";this.l=""};
Jy=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!0:c;var d={};a=g.u(a);for(var e=a.next();!e.done;e=a.next()){e=e.value;if(b&&MediaSource&&MediaSource.isTypeSupported){var f=e.type;e.audio_channels&&(f=f+"; channels="+e.audio_channels);if(!MediaSource.isTypeSupported(f))continue}if(c||!e.drm_families||"smpte2084"!==e.eotf&&"arib-std-b67"!==e.eotf){f={bt709:"SDR",bt2020:"SDR",smpte2084:"PQ","arib-std-b67":"HLG"};var h=e.type.match(/codecs="([^"]*)"/);h=h?h[1]:"";var l=null;e.audio_track_id&&(l=new Hv(e.name,
e.audio_track_id,!!e.is_default));var m=e.eotf;e=new zea(e.itag,e.url,h,+e.width,+e.height,+e.fps,+e.bitrate,e.audio_itag,m?f[m]:void 0,e.drm_families,l,+e.audio_channels);d[e.itag]=d[e.itag]||[];d[e.itag].push(e)}}return d};
Ky=function(a,b,c){this.i=a;this.u=b;this.expiration=c;this.l=null};
Aea=function(a,b){if(!(Mk||Jk()||Gk()))return null;a=Jy(b,g.P(a.experiments,"html5_filter_fmp4_in_hls"));if(!a)return null;b=[];for(var c={},d=g.u(Object.keys(a)),e=d.next();!e.done;e=d.next()){e=g.u(a[e.value]);for(var f=e.next();!f.done;f=e.next()){var h=f.value;h.i&&(f=h.i.getId(),c[f]||(h=new rq(f,h.i),c[f]=h,b.push(h)))}}return 0<b.length?b:null};
Eea=function(a,b,c,d,e){if(!(Mk||Jk()||Gk()))return g.Mj();var f=Bea(c);c=Jy(c,g.P(a.experiments,"html5_filter_fmp4_in_hls"),a.i.B);if(!c)return g.Mj();g.P(a.experiments,"html5_filter_video_m2ts_in_hls_killswitch")||Cea(c);var h={},l=(h.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",h);h=[];for(var m=[],n=[],p=null,q="",r=g.u(Object.keys(c)),t=r.next();!t.done;t=r.next())if(t=t.value,!g.P(a.experiments,"html5_disable_drm_hfr_1080")||"383"!==t&&"373"!==t){t=g.u(c[t]);for(var v=t.next();!v.done;v=
t.next())if(v=v.value,v.width){var y=g.u(v.B);for(var C=y.next();!C.done;C=y.next())if(C=C.value,c[C]){v.l=C;break}v.l||(v.l=Dea(c,v));if(C=c[v.l]){h.push(v);y="fairplay"===v.Qc?l:null;var z="";"PQ"===v.u?z="smpte2084":"HLG"===v.u&&(z="arib-std-b67");z&&(q=z);n.push(Ly(C,[v],e,v.itag,v.width,v.height,v.fps,f,void 0,void 0,y,z));if(!p||v.width*v.height*v.fps>p.width*p.height*p.fps)p=v}}else m.push(v)}y=n.reduce(function(E,O){return O.Md().isEncrypted()&&E},!0)?l:null;
c=p||{};n.push(Ly(m,h,e,"93",void 0===c.width?0:c.width,void 0===c.height?0:c.height,void 0===c.fps?0:c.fps,f,"auto",Math.max(d,0),y,q));return Fy(a.i,n,sy(a,b))};
Ly=function(a,b,c,d,e,f,h,l,m,n,p,q){for(var r=0,t="",v=g.u(a),y=v.next();!y.done;y=v.next())y=y.value,t||(t=y.itag),y.audioChannels&&y.audioChannels>r&&(r=y.audioChannels,t=y.itag);d=new Av(d,"application/x-mpegURL",new uv(0,r,null,t),new wv(e,f,h,null,void 0,m,void 0,q),void 0,p);a=new Gy(a,b,c);a.B=n?n:1369843;return new Ky(d,a,l)};
Bea=function(a){a=g.u(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.url&&(b=b.url.split("expire/"),!(1>=b.length)))return+b[1].split("/")[0];return NaN};
Dea=function(a,b){for(var c=g.u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d][0];if(!e.width&&e.Qc===b.Qc&&!e.audioChannels)return d}return""};
Cea=function(a){for(var b=new Set,c=g.u(Object.values(a)),d=c.next();!d.done;d=c.next())d=d.value,d.length&&(d=d[0],d.height&&d.codecs.startsWith("vp09")&&b.add(d.height));c=[];if(b.size){d=g.u(Object.keys(a));for(var e=d.next();!e.done;e=d.next())if(e=e.value,a[e].length){var f=a[e][0];f.height&&b.has(f.height)&&!f.codecs.startsWith("vp09")&&c.push(e)}}b=g.u(c);for(e=b.next();!e.done;e=b.next())delete a[e.value]};
My=function(a,b){this.i=a;this.l=b};
Fea=function(a,b,c,d){var e=[];c=g.u(c);for(var f=c.next();!f.done;f=c.next()){var h=f.value;if(h.url){f=new Ps(h.url,!0);if(h.s){var l=h.sp,m=Cq(decodeURIComponent(h.s));f.set(l,encodeURIComponent(m))}l=g.u(Object.keys(d));for(m=l.next();!m.done;m=l.next())m=m.value,f.set(m,d[m]);h=Gv(h.type,h.quality,h.itag,h.width,h.height);e.push(new My(h,f))}}return Fy(a.i,e,sy(a,b))};
Ny=function(a,b){this.i=a;this.l=b};
Gea=function(a){var b=[];g.wd(a,function(c){if(c&&c.url){var d=Gv(c.type,"medium","0");b.push(new Ny(d,c.url))}});
return b};
Hea=function(a,b,c){c=Gea(c);return Fy(a.i,c,sy(a,b))};
Oy=function(a,b,c){var d=void 0===c?{}:c;c=void 0===d.isHeadless?!1:d.isHeadless;var e=void 0===d.Do?!1:d.Do;d=void 0===d.jm?void 0:d.jm;this.videoId=a;this.status=b;this.isHeadless=c;this.Do=e;this.jm=d};
Py=function(a){return{videoId:a.videoId,status:a.status,isHeadless:a.isHeadless}};
Iea=function(a,b,c,d,e){this.videoId=a;this.formatStream=b;this.i=c;this.bytesDownloaded=d;this.l=e};
Jea=function(a){if(a=a.commonConfig)this.url=a.url,this.urlQueryOverride=a.urlQueryOverride,a.ustreamerConfig&&(this.ustreamerConfig=vx(a.ustreamerConfig))};
g.Qy=function(a){a=void 0===a?{}:a;this.languageCode=a.languageCode||"";this.languageName=a.languageName||null;this.kind=a.kind||"";this.name=a.name||null;this.id=a.id||null;this.i=a.is_servable||!1;this.isTranslateable=a.is_translateable||!1;this.url=a.url||null;this.vssId=a.vss_id||"";this.isDefault=a.is_default||!1;this.translationLanguage=a.translationLanguage||null};
g.Ry=function(a){var b=a.languageName||"",c=[b];"asr"===a.kind&&-1===b.indexOf("(")&&c.push(" (Automatic Captions)");a.name&&c.push(" - "+a.name);a.translationLanguage&&c.push(" >> "+a.translationLanguage.languageName);return c.join("")};
Vy=function(a,b,c,d){a||(a=b&&Sy.hasOwnProperty(b)&&Ty.hasOwnProperty(b)?Ty[b]+"_"+Sy[b]:void 0);b=a;if(!b)return null;a=b.match(Uy);if(!a||5!==a.length)return null;if(a=b.match(Uy)){var e=Number(a[3]),f=[7,8,10,5,6];a=!(1===Number(a[1])&&8===e)&&0<=f.indexOf(e)}else a=!1;return c||d||a?b:null};
Xy=function(a){for(var b={},c=g.u(Object.keys(Wy)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[Wy[d]];e&&(b[d]=e)}return b};
Yy=function(a,b){for(var c={},d=g.u(Object.keys(Wy)),e=d.next();!e.done;e=d.next()){e=e.value;var f=b?b+e:e;f=a[f+"_webp"]||a[f];g.Ks(f)&&(c[Wy[e]]=f)}return c};
az=function(a){var b={};if(!a||!a.thumbnails)return b;a=a.thumbnails.filter(function(l){return!!l.url});
a.sort(function(l,m){return l.width-m.width||l.height-m.height});
for(var c=g.u(Object.keys(Zy)),d=c.next();!d.done;d=c.next()){var e=Number(d.value);d=Zy[e];for(var f=g.u(a),h=f.next();!h.done;h=f.next())if(h=h.value,h.width>=e){e=$y(h.url);g.Ks(e)&&(b[d]=e);break}}(a=a.pop())&&1280<=a.width&&(a=$y(a.url),g.Ks(a)&&(b["maxresdefault.jpg"]=a));return b};
$y=function(a){return a.startsWith("//")?"https:"+a:a};
bz=function(a){if(a=a.colorInfo)if(a=a.transferCharacteristics)return Kea[a];return null};
cz=function(a){return a&&a.baseUrl||""};
dz=function(a){a=g.lj(a);for(var b=g.u(Object.keys(a)),c=b.next();!c.done;c=b.next()){c=c.value;var d=a[c];a[c]=Array.isArray(d)?d[0]:d}return a};
ez=function(a,b){a.botguardData=b.playerAttestationRenderer.botguardData;b=b.playerAttestationRenderer.challenge;null!=b&&(a.ea=b)};
Lea=function(a,b){a.captionTracks=[];if(b.captionTracks)for(var c=g.u(b.captionTracks),d=c.next();!d.done;d=c.next()){d=d.value;var e=fz(d.baseUrl);if(!e)return;d=new g.Qy({is_translateable:!!d.isTranslatable,languageCode:d.languageCode,languageName:d.name&&g.Wo(d.name),url:e,vss_id:d.vssId,kind:d.kind});a.captionTracks.push(d)}a.Lk=b.audioTracks||[];a.Yv=b.defaultAudioTrackIndex||0;a.Zv=b.translationLanguages?g.Zc(b.translationLanguages,function(f){return{languageCode:f.languageCode,languageName:g.Wo(f.languageName)}}):
[];
a.KB=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
Mea=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=c.interstitials.map(function(h){var l=h.unserializedPlayerResponse;if(l)return{is_yto_interstitial:!0,raw_player_response:l};if(h=h.playerVars)return Object.assign({is_yto_interstitial:!0},g.jj(h))});
d=g.u(d);for(var e=d.next();!e.done;e=d.next())switch(e=e.value,c.podConfig.playbackPlacement){case "INTERSTITIAL_PLAYBACK_PLACEMENT_PRE":a.interstitials=a.interstitials.concat({time:0,playerVars:e,pg:5});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_POST":a.interstitials=a.interstitials.concat({time:0x7ffffffffffff,playerVars:e,pg:6});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_INSERT_AT_VIDEO_TIME":var f=Number(c.podConfig.timeToInsertAtMillis);a.interstitials=a.interstitials.concat({time:f,playerVars:e,
pg:0===f?5:7})}}};
Nea=function(a,b){if(b=b.find(function(c){return!(!c||!c.tooltipRenderer)}))a.tooltipRenderer=b.tooltipRenderer};
gz=function(a,b){b.subscribeCommand&&(a.subscribeCommand=b.subscribeCommand);b.unsubscribeCommand&&(a.unsubscribeCommand=b.unsubscribeCommand);b.addToWatchLaterCommand&&(a.addToWatchLaterCommand=b.addToWatchLaterCommand);b.removeFromWatchLaterCommand&&(a.removeFromWatchLaterCommand=b.removeFromWatchLaterCommand);b.getSharePanelCommand&&(a.getSharePanelCommand=b.getSharePanelCommand)};
iz=function(a){var b=a.indexRange,c=a.initRange;b={itag:a.itag,url:a.url,index:b?b.start+"-"+b.end:"0-0",bitrate:a.bitrate,init:c?c.start+"-"+c.end:"0-0",type:a.mimeType,clen:a.contentLength,lmt:a.lastModified,xtags:a.xtags};if(c=a.audioTrack){var d=c.displayName;d&&(b.name=d,b.audio_track_id=c.id,c.audioIsDefault&&(b.isDefault="1"))}if(c=a.captionTrack)b.caption_display_name=c.displayName,b.caption_vss_id=c.vssId,b.caption_language_code=c.languageCode,b.caption_kind=c.kind;(c=a.cipher||a.signatureCipher)?
(c=g.jj(c),b.sp=c.sp,b.s=c.s,b.url=c.url):b.url=a.url;c=a.width;d=a.height;null!=c&&null!=d&&(b.size=c+"x"+d);(c=a.fps)&&(b.fps=c);(c=a.type)&&(b.stream_type=Oea[c]);(c=a.projectionType)&&(b.projection_type=Pea[c]);(c=a.stereoLayout)&&(b.stereo_layout=Qea[c]);(c=a.spatialAudioType)&&(b.spatial_audio_type=Rea[c]);if(d=a.drmFamilies){c=[];d=g.u(d);for(var e=d.next();!e.done;e=d.next())c.push(hz[e.value]);b.drm_families=c.join(",")}(c=a.qualityLabel)&&(b.quality_label=c);(c=a.targetDurationSec)&&(b.target_duration_sec=
c);(c=a.maxDvrDurationSec)&&(b.max_dvr_duration_sec=c);(c=a.audioSampleRate)&&(b.audio_sample_rate=c);(c=a.audioChannels)&&(b.audio_channels=c);(c=bz(a))&&(b.eotf=c);(a=a.colorInfo)&&(a=a.primaries)&&(a=Sea[a])&&(b.primaries=a);return $d(b)};
jz=function(){g.N.call(this);this.i=null;new zi;this.i=null};
kz=function(a,b,c,d){this.level=a;this.C=b;this.loaded=new Set;this.level=a;this.C=b;a=c.split("#");this.width=Math.floor(Number(a[0]));this.height=Math.floor(Number(a[1]));this.l=Math.floor(Number(a[2]));this.columns=Math.floor(Number(a[3]));this.rows=Math.floor(Number(a[4]));this.u=Math.floor(Number(a[5]));this.B=a[6];this.signature=a[7];this.videoLength=d};
lz=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;jz.call(this,c);this.isLive=d;this.B=!!e;this.levels=this.l(a,b);1<this.levels.length&&this.levels[0].isDefault()&&this.levels.splice(0,1)};
mz=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");kz.call(this,a,b,c,0);this.i=null;this.D=d?3:0};
nz=function(a,b,c,d){lz.call(this,a,0,void 0,b,!(void 0===d||!d));for(a=0;a<this.levels.length;a++)this.levels[a].nw(c)};
Tea=function(a,b,c){b={cpn:b};-1===a.indexOf("/ibw/")&&(b.ibw=c?String(c):"1369843");return{url:g.ae(a,b),type:"application/x-mpegURL",quality:"auto",itag:"93"}};
Uea=function(a){navigator.mediaCapabilities?oz(a.videoInfos).then(function(){return a},function(){return a}):g.Nj(a)};
oz=function(a){var b=navigator.mediaCapabilities;if(!b)return g.Nj(a);var c=a.map(function(d){var e;if(e=b)d.video?(e=d.video,d={type:"media-source",video:{contentType:d.mimeType,width:e.width||640,height:e.height||360,bitrate:8*d.l||1E6,framerate:e.fps||30}}):d.audio?(e=d.audio,d={type:"media-source",audio:{contentType:d.mimeType,channels:e.i||2,bitrate:8*d.l||128E3,samplerate:e.sampleRate||44100}}):d=null,e=b.decodingInfo(d);return e});
return qaa(c).then(function(d){for(var e=0;e<d.length;e++)a[e].D=d[e].smooth,a[e].B=d[e].powerEfficient,a[e].isSupported=d[e].supported;return a},function(){return a})};
g.rz=function(a,b){g.N.call(this);this.B=a;this.adModule=!1;this.adaptiveFormats="";this.Vv=this.Xg=this.adQueryId=this.Gm=null;this.Hm={start:NaN,end:NaN};this.ws="";this.Qc=null;this.drmParams="";this.allowEmbed=!0;this.allowLiveDvr=this.offlineable=this.backgroundable=!1;this.Ie="";this.Vg=this.Hc=this.Wd=this.Tr=this.Kk=this.Jk=!1;this.G=null;this.Xb=!1;this.hg=NaN;this.Wl=0;this.vz=!1;this.Xr={};this.Xt=this.cycToken=null;this.author="";this.yl=0;this.Mk=!1;this.il=null;this.zg=this.cw=!1;this.clientScreenNonce=
this.clientPlaybackNonce=this.videoCountText=this.channelBanner=this.Je="";this.contentCheckOk=!1;this.bb=0;this.Pk=this.Ok=!1;this.endSeconds=0;this.wB=this.Sb=this.u=this.Us=null;this.Xk="";this.I=!1;this.qe=this.Xh=0;this.Jm=this.pipable=this.Rf=!1;this.paidContentOverlayDurationMs=0;this.isLivePlayback=this.Tb=this.isPrivate=this.isListed=this.dl=this.mutedAutoplay=this.Yf=!1;this.Vr="";this.isLowLatencyLiveStream=this.isLivingRoomDeeplink=this.isLiveDefaultBroadcast=this.Rr=this.Vf=this.qd=!1;
this.latencyClass="UNKNOWN";this.enableServerStitchedDai=this.Cc=this.isMdxPlayback=this.isUpcoming=this.isPremiere=!1;this.mdxControlMode=null;this.isPharma=!1;this.Pa=0;this.reloadReason="";this.Sr=this.Tw=this.Mc=!1;this.keywords={};this.Ua="";this.dg=0;this.yj=!1;this.liveChunkReadahead=NaN;this.eh=0;this.Oc=null;this.zl=this.lengthSeconds=0;this.playerParams=this.musicVideoType=null;this.paygated=!1;this.Cf=[];this.T=[];this.racyCheckOk=!1;this.Xw={};this.Jo=0;this.l=null;this.autonavState=1;
this.wx=null;this.shortDescription="";this.Ba=!1;this.xj=this.Bb=this.startSeconds=0;this.zj=this.Xv=this.fB=pz;this.suggestions=null;this.fm=this.lm=void 0;this.Kd=null;this.Wt=!1;this.expandedSubtitle=this.subtitle=this.title="";this.multiMarkersPlayerBarRenderer=void 0;this.PC=[];this.hlsFormats=this.Ug="";this.pj=this.wj=this.Vd=this.Xa=this.X=this.Sg=this.dh=null;this.uf="vvt";this.Vb=!1;this.tB=null;this.vB="";this.Qu=NaN;this.Ij=this.yu=this.Ej=this.Dj=this.mu=this.Hj=this.Cj=this.Gj=this.Wg=
this.Fj="";this.Xd=null;this.Mt=!1;this.D={};this.clipStart=0;this.clipEnd=Infinity;this.heartbeatToken="";this.gw=this.ew=NaN;this.Gb=this.cg=this.Wb=this.Sw=this.Rw=!1;this.Tg=!0;this.ub={};this.captionTracks=[];this.Lk=[];this.Yv=0;this.Zv=[];this.KB=!1;this.Ke=new rq("und",new Hv("Default","und",!0));this.Ur=0;this.C=null;this.ld=[];this.Ik=[];this.Aj=this.zc="";this.slotPosition=-1;this.breakType=0;this.watchNextResponse=this.playerResponse=this.dw=this.Nk=this.qc=this.Qk=this.Im=this.Dm=null;
this.bh=!1;this.Ma=null;this.al=this.Oe=this.useCobaltWidevine=this.rz=this.QB=this.Ya=!1;this.OB=this.PB=NaN;this.defraggedFromSubfragments=this.Hg=this.hasSubfragmentedFmp4=!1;this.liveExperimentalContentId=NaN;this.Ul=this.au=this.Gc=!1;this.interstitials=[];this.N=this.Um=!1;this.fg=this.MC=this.ma="";this.rj=null;this.Lb="";this.Da=!1;this.SB=this.Bj="";this.Yr=this.Wr=this.Yk=this.readAheadGrowthRateMs=this.minReadAheadMediaTimeMs=this.maxReadAheadMediaTimeMs=NaN;this.showShareButton=!0;this.errorDetail=
this.userGenderAge="";this.Iz=this.oA=this.getSharePanelCommand=this.removeFromWatchLaterCommand=this.addToWatchLaterCommand=this.unsubscribeCommand=this.subscribeCommand=this.contextParams=this.Bi=this.errorReason=this.errorCode=null;this.Zg=this.Yg="";this.pc=!1;this.qB=this.eB=this.Ce=this.Lc=0;this.qj=this.fetchType=null;this.Yw=!0;this.JA=void 0;this.Wv=-1;this.uj=this.vj=!1;this.Re=null;this.Ha="";this.S("web_player_ux_module_wait")&&this.B.ma&&this.T.push("ux");this.vj=this.S("web_new_autonav_countdown");
this.uj=this.S("web_new_big_thumbnail_endscreen");qz(this,b)};
xz=function(a,b,c,d){b&&b.cpn&&g.to(new g.hm("CPN provided in VideoData update",{RT:b.cpn,Zd:a.clientPlaybackNonce,FT:c}));d&&(a.errorCode=null,a.errorDetail="",a.errorReason=null,a.Bi=null);c?(Tx(b),qz(a,b),sz(a)&&tz(a)):(b=b||{},a.S("embeds_enable_updatedata_from_embeds_response_killswitch")||uz(a,b),vz(a,b),wz(a,b),a.U("dataupdated"))};
wz=function(a,b){a.fflags=Rx(a.fflags,b.fflags);var c=b.iv_invideo_url;c&&(a.Ie=Os(c));a.Jk=R(a.Jk,b.iv_ads_only);a.Kk=R(a.Kk,b.iv_allow_in_place_switch);a.isPharma=R(a.isPharma,b.is_pharma);a.author=Rx(a.author,b.author);a.Je=fz(b.ttsurl)||a.Je;a.Mk=R(a.Mk,b.cc_asr);a.channelBanner=Rx(a.channelBanner,b.channel_banner);if(c=b.profile_picture)a.Mh=Rx(a.Mh,c);a.videoCountText=Rx(a.videoCountText,b.video_count_text);a.autonavState=Px(a.autonavState,b.autonav_state,Vea);a.clientPlaybackNonce=Rx(a.clientPlaybackNonce,
b.cpn);a.subscribed=R(a.subscribed,b.subscribed);a.rawViewCount=g.Qx(a.rawViewCount,b.view_count);a.shortViewCount=Rx(a.shortViewCount,b.short_view_count_text);a.publishedTimeText=Rx(a.publishedTimeText||"",b.publishedTimeText);a.lengthText=Rx(a.lengthText||"",b.lengthText);a.jq=Rx(a.jq||"",b.jq);a.pp=Rx(a.pp||"",b.pp);a.title=Rx(a.title,b.title);a.subtitle=Rx(a.subtitle,b.subtitle);a.expandedSubtitle=Rx(a.expandedSubtitle,b.expanded_subtitle);a.ws=Rx(a.ws,b.aria_label);a.ypcPreview=Rx(a.ypcPreview,
b.ypc_preview);a.Mu=Rx(a.Mu,b.ypc_origin);a.Vb=R(a.Vb,b.ypc_is_premiere_trailer);a.Bj=Rx(a.Bj,b.ypc_clickwrap_message);a.paygated=R(a.paygated,b.paygated);a.Mt=R(a.Mt,b.requires_purchase);a.showShareButton=!R(!a.showShareButton,b.ss);if(c=b.keywords)a.keywords=yz(c.split(","));if(c=b.rvs)a.suggestions=kj(c);a.contentCheckOk=R(a.contentCheckOk,b.cco);a.racyCheckOk=R(a.racyCheckOk,b.rco);a.isLivingRoomDeeplink=R(a.isLivingRoomDeeplink,b.is_living_room_deeplink);a.oauthToken=Rx(a.oauthToken,b.oauth_token);
a.Ua=Rx(a.Ua,b.kpt);a.visitorData=Rx(a.visitorData,b.visitor_data);if(c=b.session_data)a.ov=hj(c,"&");if(c=b.endscreen_autoplay_session_data)a.Us=hj(c,"&");a.Wk=Rx(a.Wk,b.endscreen_ad_tracking_data);a.DA=Rx(a.DA,b.tracking_list);a.Yg=Rx(a.Yg,b.clip);a.Zg=Rx(a.Zg,b.clipt);zz(a,b)};
qz=function(a,b){var c;b=b||{};var d=b.errordetail;null!=d&&(a.errorDetail=d);var e=b.errorcode;null!=e?a.errorCode=e:"fail"==b.status&&(a.errorCode="150");var f=b.reason;null!=f&&(a.errorReason=f);var h=b.subreason;null!=h&&(a.Bi=h);a.clientPlaybackNonce||(a.clientPlaybackNonce=b.cpn||g.Zn());a.Tb=R(a.B.Je,b.livemonitor);uz(a,b);var l=b.raw_player_response;if(!l){var m=b.player_response;m&&(l=JSON.parse(m))}l&&(a.playerResponse=l);if(a.playerResponse){var n=a.playerResponse.annotations;if(n)for(var p=
g.u(n),q=p.next();!q.done;q=p.next()){var r=q.value.playerAnnotationsUrlsRenderer;if(r){r.adsOnly&&(a.Jk=!0);r.allowInPlaceSwitch&&(a.Kk=!0);var t=r.loadPolicy;t&&(a.annotationsLoadPolicy=Wea[t]);var v=r.invideoUrl;v&&(a.Ie=Os(v));a.Tr=!0;break}}var y=a.playerResponse.attestation;y&&ez(a,y);var C=a.playerResponse.cotn;C&&(a.cotn=C);var z=a.playerResponse.heartbeatParams;if(z){var E=z.heartbeatToken;E&&(a.drmSessionId=z.drmSessionId||"",a.heartbeatToken=E,a.ew=Number(z.intervalMilliseconds),a.gw=Number(z.maxRetries),
a.Rw=!!z.softFailOnError,a.Sw=!!z.useInnertubeHeartbeatsForDrm,a.Wd=!0);a.heartbeatServerData=z.heartbeatServerData;a.S("heartbeat_iff_heartbeat_params_filled")&&(a.Wd=!0)}var O=a.playerResponse.messages;O&&Nea(a,O);var L=a.playerResponse.multicamera;if(L){var ca=L.playerLegacyMulticameraRenderer;if(ca){var ha=ca.metadataList;ha&&(a.SB=ha,a.Ik=kj(ha))}}var qa=a.playerResponse.overlay;if(qa){var wc=qa.playerControlsOverlayRenderer;if(wc){var zd=wc.controlBgHtml;null!=zd?(a.ma=zd,a.N=!0):(a.ma="",a.N=
!1);if(wc.mutedAutoplay){var Qe=wc.mutedAutoplay.playerMutedAutoplayOverlayRenderer;if(Qe&&Qe.endScreen){var Ab=Qe.endScreen.playerMutedAutoplayEndScreenRenderer;Ab&&Ab.text&&(a.MC=g.Wo(Ab.text))}}else a.mutedAutoplay=!1}}var Pb=a.playerResponse.playabilityStatus;if(Pb){var Lq=Pb.backgroundability;Lq&&Lq.backgroundabilityRenderer.backgroundable&&(a.backgroundable=!0);var Mq=Pb.offlineability;Mq&&Mq.offlineabilityRenderer.offlineable&&(a.offlineable=!0);var xf=Pb.contextParams;xf&&(a.contextParams=
xf);var Nq=Pb.pictureInPicture;Nq&&Nq.pictureInPictureRenderer.playableInPip&&(a.pipable=!0);Pb.playableInEmbed&&(a.allowEmbed=!0);var se=Pb.ypcClickwrap;if(se){var Oq=se.playerLegacyDesktopYpcClickwrapRenderer,Pq=se.ypcRentalActivationRenderer;if(Oq)a.Bj=Oq.durationMessage||"",a.Vg=!0;else if(Pq){var qi=Pq.durationMessage;a.Bj=qi?g.Wo(qi):"";a.Vg=!0}}var yf=Pb.errorScreen;if(yf){if(yf.playerLegacyDesktopYpcTrailerRenderer){var xc=yf.playerLegacyDesktopYpcTrailerRenderer;a.Ij=xc.trailerVideoId||"";
var Qq=yf.playerLegacyDesktopYpcTrailerRenderer.ypcTrailer;var ri=Qq&&Qq.ypcTrailerRenderer}else if(yf.playerLegacyDesktopYpcOfferRenderer)xc=yf.playerLegacyDesktopYpcOfferRenderer;else if(yf.ypcTrailerRenderer){ri=yf.ypcTrailerRenderer;var Om=ri.fullVideoMessage;a.Cj=Om?g.Wo(Om):""}xc&&(a.Ej=xc.itemTitle||"",xc.itemUrl&&(a.yu=xc.itemUrl),xc.itemBuyUrl&&(a.mu=xc.itemBuyUrl),a.Dj=xc.itemThumbnail||"",a.Gj=xc.offerHeadline||"",a.Wg=xc.offerDescription||"",a.Hj=xc.offerId||"",a.Fj=xc.offerButtonText||
"",a.tB=xc.offerButtonFormattedText||null,a.Qu=xc.overlayDurationMsec||NaN,a.Cj=xc.fullVideoMessage||"",a.Hc=!0);if(ri){var Rq=ri.unserializedPlayerResponse;if(Rq)a.Xd={raw_player_response:Rq};else{var Sq=ri.playerVars;a.Xd=Sq?g.jj(Sq):null}a.Hc=!0}}}var Nd=a.playerResponse.playbackTracking;if(Nd){var Tq=b,Uq=cz(Nd.googleRemarketingUrl);Uq&&(a.googleRemarketingUrl=Uq);var Vq=cz(Nd.youtubeRemarketingUrl);Vq&&(a.youtubeRemarketingUrl=Vq);var Wq=cz(Nd.ptrackingUrl);if(Wq){var te=dz(Wq),Xq=te.oid;Xq&&
(a.Vw=Xq);var Yq=te.pltype;Yq&&(a.Ww=Yq);var Zq=te.ptchn;Zq&&(a.Uw=Zq);var Iw=te.ptk;Iw&&(a.sj=encodeURIComponent(Iw))}var Jw=cz(Nd.ppvRemarketingUrl);Jw&&(a.ppvRemarketingUrl=Jw);var Pm=cz(Nd.qoeUrl);if(Pm){for(var si=g.lj(Pm),$q=g.u(Object.keys(si)),ok=$q.next();!ok.done;ok=$q.next()){var pk=ok.value,qk=si[pk];si[pk]=Array.isArray(qk)?qk.join(","):qk}var Yb=si.cat;Yb&&(a.fg=Yb);var Re=si.live;Re&&(a.Vr=Re)}var $g=cz(Nd.remarketingUrl);if($g){a.remarketingUrl=$g;var ar=dz($g);ar.foc_id&&(a.D.focEnabled=
!0);var br=ar.data;br&&(a.D.rmktEnabled=!0,br.engaged&&(a.D.engaged="1"));a.D.baseUrl=g.Td($g)+Pd(Rd(5,$g))}var cr=cz(Nd.videostatsPlaybackUrl);if(cr){var Zb=dz(cr),rk=Zb.adformat;if(rk&&(Tq.adformat=rk,!a.S("process_video_data_ad_format_in_player_tracking_killswitch"))){var Qm=a.V(),dr=Vy(rk,a.Aj,Qm.B,Qm.l);dr&&(a.adFormat=dr)}var er=Zb.aqi;er&&(Tq.ad_query_id=er);var fr=Zb.autoplay;fr&&(a.Yf="1"==fr);var Rm=Zb.autonav;Rm&&(a.Rf="1"==Rm);var Sm=Zb.delay;Sm&&(a.bb=g.Jd(Sm));var Kw=Zb.ei;Kw&&(a.eventId=
Kw);"adunit"===Zb.el&&(a.Yf=!0);var ti=Zb.feature;ti&&(a.uB=ti);var ah=Zb.list;ah&&(a.playlistId=ah);var Tm=Zb.of;Tm&&(a.FB=Tm);var gr=Zb.osid;gr&&(a.osid=gr);var hr=Zb.referrer;hr&&(a.referrer=hr);var ir=Zb.sdetail;ir&&(a.sB=ir);var jr=Zb.sourceid;jr&&(a.YP=jr);var Lw=Zb.ssrt;Lw&&(a.Vl="1"==Lw);var id=Zb.subscribed;id&&(a.subscribed="1"==id,a.D.subscribed=id);var Um=Zb.uga;Um&&(a.userGenderAge=Um);var Mw=Zb.upt;Mw&&(a.HB=Mw);var Vm=Zb.vm;Vm&&(a.videoMetadata=Vm)}var Wm=cz(Nd.videostatsWatchtimeUrl);
if(Wm){var yc=dz(Wm).ald;yc&&(a.lH=yc)}if(Nd.promotedPlaybackTracking){var jd=Nd.promotedPlaybackTracking;jd.startUrls&&(a.tj=jd.startUrls);jd.firstQuartileUrls&&(a.xs=jd.firstQuartileUrls);jd.secondQuartileUrls&&(a.Cs=jd.secondQuartileUrls);jd.thirdQuartileUrls&&(a.Ns=jd.thirdQuartileUrls);jd.completeUrls&&(a.ds=jd.completeUrls);jd.engagedViewUrls&&(1<jd.engagedViewUrls.length&&g.to(new g.hm("There are more than one engaged_view_urls.")),a.Jd=jd.engagedViewUrls[0])}}var Xm=a.playerResponse.playerAds;
if(Xm)for(var Nw=b,Ym=g.u(Xm),Zm=Ym.next();!Zm.done;Zm=Ym.next()){var kr=Zm.value;if(kr){var lr=kr.playerLegacyDesktopWatchAdsRenderer;if(lr){var bh=lr.playerAdParams;if(bh){"1"==bh.autoplay&&(a.Yf=!0);a.Xg=bh.encodedAdSafetyReason||null;void 0!==bh.showContentThumbnail&&(a.Tg=!!bh.showContentThumbnail);Nw.enabled_engage_types=bh.enabledEngageTypes;break}}}}var Kc=a.playerResponse.playerConfig;if(Kc){var ch=Kc.manifestlessWindowedLiveConfig;if(ch){var eg=Number(ch.minDvrSequence),mr=Number(ch.maxDvrSequence),
$m=Number(ch.minDvrMediaTimeMs),Ow=Number(ch.maxDvrMediaTimeMs);eg&&(a.Lc=eg);$m&&(a.qB=$m/1E3);mr&&(a.Ce=mr);Ow&&(a.eB=Ow/1E3)}var dh=Kc.daiConfig;if(dh){dh.enableDai&&(a.Cc=!0);var nr=dh.enableServerStitchedDai;nr&&(a.enableServerStitchedDai=nr)}var sk=Kc.audioConfig;if(sk){var or=sk.loudnessDb;null!=or&&(a.hg=or);sk.audioMuted&&(a.Xb=!0);sk.muteOnStart&&(a.Xb=!0)}var pr=Kc.playbackEndConfig;if(pr){var qr=pr.endSeconds;qr&&a.mutedAutoplay&&(a.endSeconds=qr)}var tk=Kc.fairPlayConfig;if(tk){var rr=
tk.certificate;rr&&(a.Sb=vx(rr));var an=Number(tk.keyRotationPeriodMs);0<an&&(a.BB=an);var uk=Number(tk.keyPrefetchMarginMs);0<uk&&(a.yB=uk)}var Pw=Kc.playbackStartConfig;if(Pw){a.Yr=Number(Pw.startSeconds);var DV=Pw.liveUtcStartSeconds,UF=!1;a.S("html5_start_seconds_priority")&&(UF=!!a.liveUtcStartSeconds&&0<a.liveUtcStartSeconds);DV&&!UF&&(a.liveUtcStartSeconds=Number(DV));var VF=Pw.startPosition;if(VF){var EV=VF.utcTimeMillis;EV&&!UF&&(a.liveUtcStartSeconds=.001*Number(EV));var FV=VF.streamTimeMillis;
FV&&(a.xj=.001*Number(FV))}}else{var WF=Kc.skippableSegmentsConfig;if(WF){var GV=WF.introSkipDurationMs;GV&&(a.Yk=Number(GV)/1E3);var HV=WF.outroSkipDurationMs;HV&&(a.Wr=Number(HV)/1E3)}}var XF=Kc.skippableIntroConfig;if(XF){var IV=Number(XF.startMs),JV=Number(XF.endMs);isNaN(IV)||isNaN(JV)||(a.PB=IV,a.OB=JV)}var KV=Kc.streamSelectionConfig;KV&&(a.qe=Number(KV.maxBitrate));var LV=Kc.vrConfig;LV&&(a.QB="1"==LV.partialSpherical);var sr=Kc.webDrmConfig;if(sr){sr.skipWidevine&&(a.rz=!0);var MV=sr.widevineServiceCert;
MV&&(a.wB=vx(MV));sr.useCobaltWidevine&&(a.useCobaltWidevine=!0);sr.startWithNoQualityConstraint&&(a.Oe=!0)}var NV=Kc.mediaCommonConfig;if(NV){var Qw=NV.dynamicReadaheadConfig;Qw&&(a.maxReadAheadMediaTimeMs=Qw.maxReadAheadMediaTimeMs||NaN,a.minReadAheadMediaTimeMs=Qw.minReadAheadMediaTimeMs||NaN,a.readAheadGrowthRateMs=Qw.readAheadGrowthRateMs||NaN)}}var eh=a.playerResponse.streamingData;if(eh){var OV=eh.adaptiveFormats;if(OV){for(var PV=[],QV=g.u(OV),zf=QV.next();!zf.done;zf=QV.next()){var Rw=zf.value;
PV.push(iz(Rw));var RV=Rw.loudnessDb;Rw.itag&&null!=RV&&(a.Xr[Rw.itag.toString()]=RV)}a.adaptiveFormats=PV.join(",")}var YF=eh.formats;if(YF){var tr=[],SV=g.u(YF);for(zf=SV.next();!zf.done;zf=SV.next()){var ZF=zf.value;tr.push(ZF.itag+"/"+ZF.width+"x"+ZF.height)}a.Xk=tr.join(",");tr=[];var TV=g.u(YF);for(zf=TV.next();!zf.done;zf=TV.next()){var bn=zf.value,ur={itag:bn.itag,type:bn.mimeType,quality:bn.quality},UV=bn.url;UV&&(ur.url=UV);var VV=bn.cipher||bn.signatureCipher;if(VV){var $F=g.jj(VV);ur.sp=
$F.sp;ur.s=$F.s;ur.url=$F.url}tr.push($d(ur))}a.Ug=tr.join(",")}var aG=eh.hlsFormats;if(aG){var WV=Kc||null,Sw={};if(WV){var bG=WV.audioPairingConfig;if(bG&&bG.pairs)for(var XV=g.u(bG.pairs),cG=XV.next();!cG.done;cG=XV.next()){var YV=cG.value,dG=YV.videoItag;Sw[dG]||(Sw[dG]=[]);Sw[dG].push(YV.audioItag)}}for(var ZV={},$V=g.u(aG),vk=$V.next();!vk.done;vk=$V.next()){var aW=vk.value;ZV[aW.itag]=aW.bitrate}var bW=[],cW=g.u(aG);for(vk=cW.next();!vk.done;vk=cW.next()){var Od=vk.value,fg={itag:Od.itag,type:Od.mimeType,
url:Od.url,bitrate:Od.bitrate,width:Od.width,height:Od.height,fps:Od.fps},Tw=Od.audioTrack;if(Tw){var dW=Tw.displayName;dW&&(fg.name=dW,fg.audio_track_id=Tw.id,Tw.audioIsDefault&&(fg.is_default="1"))}if(Od.drmFamilies){for(var eW=[],fW=g.u(Od.drmFamilies),eG=fW.next();!eG.done;eG=fW.next())eW.push(hz[eG.value]);fg.drm_families=eW.join(",")}var Uw=Sw[Od.itag];if(Uw&&Uw.length){fg.audio_itag=Uw.join(",");var gW=ZV[Uw[0]];gW&&(fg.bitrate+=gW)}var hW=bz(Od);hW&&(fg.eotf=hW);Od.audioChannels&&(fg.audio_channels=
Od.audioChannels);bW.push($d(fg))}a.hlsFormats=bW.join(",")}var fG=eh.licenseInfos;if(fG&&0<fG.length){for(var iW={},jW=g.u(fG),gG=jW.next();!gG.done;gG=jW.next()){var kW=gG.value,lW=kW.drmFamily,mW=kW.url;lW&&mW&&(iW[hz[lW]]=mW)}a.Qc=iW}var nW=eh.drmParams;nW&&(a.drmParams=nW);var oW=eh.dashManifestUrl;oW&&(a.xa=g.ae(oW,{cpn:a.clientPlaybackNonce}));var pW=eh.hlsManifestUrl;pW&&(a.hlsvp=pW);var qW=eh.probeUrl;qW&&(a.probeUrl=Os(g.ae(qW,{cpn:a.clientPlaybackNonce})))}var rW=a.playerResponse.trackingParams;
rW&&(a.Ka=rW);var rb=a.playerResponse.videoDetails;if(rb){var gg=b,hG=rb.videoId;hG&&(a.videoId=hG,gg.video_id||(gg.video_id=hG));var sW=rb.channelId;sW&&(a.D.uid=sW.substr(2));var iG=rb.title;iG&&(a.title=iG,gg.title||(gg.title=iG));var jG=rb.lengthSeconds;jG&&(a.lengthSeconds=Number(jG),gg.length_seconds||(gg.length_seconds=jG));var tW=rb.keywords;tW&&(a.keywords=yz(tW));var kG=rb.channelId;kG&&(a.jj=kG,gg.ucid||(gg.ucid=kG));var uW=rb.viewCount;uW&&(a.rawViewCount=Number(uW));var lG=rb.author;
lG&&(a.author=lG,gg.author||(gg.author=lG));var vW=rb.shortDescription;vW&&(a.shortDescription=vW);var wW=rb.isCrawlable;wW&&(a.isListed=wW);var xW=rb.musicVideoType;xW&&(a.musicVideoType=xW);var mG=rb.isLive;null!=mG&&(a.isLivePlayback=mG);if(mG||rb.isUpcoming)a.isPremiere=!rb.isLiveContent;var yW=rb.thumbnail;yW&&(a.ub=az(yW));var zW=Kc||null,nG=b;rb.isLiveDefaultBroadcast&&(a.isLiveDefaultBroadcast=!0);rb.isUpcoming&&(a.isUpcoming=!0);if(rb.isPostLiveDvr)a.qd=!0;else{var oG=!1;if(a.Tb)a.allowLiveDvr=
Az(!0),a.isLivePlayback=!0;else if(rb.isLive){nG.livestream="1";a.allowLiveDvr=Az(!!rb.isLiveDvrEnabled);a.qb=27;rb.isLowLatencyLiveStream&&(a.isLowLatencyLiveStream=!0);var AW=rb.latencyClass;AW&&(a.latencyClass=Xea[AW]||"UNKNOWN");a.Ok=!0;var BW=rb.liveChunkReadahead;BW&&(a.liveChunkReadahead=BW);var vr=zW&&zW.livePlayerConfig;if(vr){vr.hasSubfragmentedFmp4&&(a.hasSubfragmentedFmp4=!0);vr.hasSubfragmentedWebm&&(a.Hg=!0);vr.defraggedFromSubfragments&&(a.defraggedFromSubfragments=!0);var CW=vr.liveExperimentalContentId;
CW&&(a.liveExperimentalContentId=Number(CW))}oG=!0}else rb.isUpcoming&&(oG=!0);oG&&(a.isLivePlayback=!0,nG.adformat&&"8"!==nG.adformat.split("_")[1]||a.T.push("heartbeat"),a.S("heartbeat_iff_heartbeat_params_filled")||(a.Wd=!0),a.Pk=!0)}var DW=rb.isPrivate;DW&&(a.isPrivate=R(a.isPrivate,DW))}if(Pb){var EW=rb||null,FW=!1,cn=Pb.errorScreen;FW=cn&&(cn.playerLegacyDesktopYpcOfferRenderer||cn.playerLegacyDesktopYpcTrailerRenderer||cn.ypcTrailerRenderer)?!0:EW&&EW.isUpcoming?!0:["OK","LIVE_STREAM_OFFLINE",
"FULLSCREEN_ONLY"].includes(Pb.status);if(!FW){a.errorCode="150";var Vw=cn&&cn.playerErrorMessageRenderer;if(Vw){a.playerErrorMessageRenderer=Vw;var GW=Vw.reason;GW&&(a.errorReason=g.Wo(GW));var qG=Vw.subreason;qG&&(a.Bi=g.Wo(qG),a.IP=qG)}else a.errorReason=Pb.reason||null;var rG=Pb.status;if("LOGIN_REQUIRED"===rG)a.errorDetail="1";else if("CONTENT_CHECK_REQUIRED"===rG)a.errorDetail="2";else if("AGE_CHECK_REQUIRED"===rG){var HW=Pb.errorScreen,IW=HW&&HW.playerKavRenderer;a.errorDetail=IW&&IW.kavUrl?
"4":"3"}else a.errorDetail=Pb.isBlockedInRestrictedMode?"5":"0"}}var JW=a.playerResponse.interstitialPods;JW&&Mea(a,JW);a.Ie&&a.eventId&&(a.Ie=g.oj(a.Ie,{ei:a.eventId}));var sG=a.playerResponse.captions;sG&&sG.playerCaptionsTracklistRenderer&&Lea(a,sG.playerCaptionsTracklistRenderer);a.clipConfig=a.playerResponse.clipConfig;a.clipConfig&&null!=a.clipConfig.startTimeMs&&(a.Yr=.001*Number(a.clipConfig.startTimeMs));a.accountLinkingConfig=a.playerResponse.accountLinkingConfig;a.accountLinkingConfig&&
a.accountLinkingConfig.alsParam&&(a.IA=a.accountLinkingConfig.alsParam);a.S("web_player_include_innertube_commands")&&a.playerResponse&&a.playerResponse.playerConfig&&a.playerResponse.playerConfig.webPlayerConfig&&a.playerResponse.playerConfig.webPlayerConfig.webPlayerActionsPorting&&gz(a,a.playerResponse.playerConfig.webPlayerConfig.webPlayerActionsPorting)}vz(a,b);b.queue_info&&(a.queueInfo=b.queue_info);var KW=b.hlsdvr;null!=KW&&(a.allowLiveDvr=Az("1"==KW));a.adQueryId=b.ad_query_id||null;a.Xg||
(a.Xg=b.encoded_ad_safety_reason||null);a.Vv=b.agcid||null;a.Dm=b.ad_id||null;a.Im=b.ad_sys||null;a.Qk=b.encoded_ad_playback_context||null;a.Xb=R(a.Xb,b.infringe||b.muted);a.authKey=b.authkey;a.ZA=b.authuser;a.wx=b.autonav_watch_endpoint||null;a.mutedAutoplay=R(a.mutedAutoplay,b&&b.playmuted)&&a.S("embeds_enable_muted_autoplay");a.Ok=R(a.Ok,b.enable_cardio);a.Pk=R(a.Pk,b.enable_cardio_before_playback);a.endSeconds=g.Qx(a.endSeconds,a.Wr||b.end||b.endSeconds);a.Ka=Rx(a.Ka,b.itct);a.dl=R(a.dl,b.noiba);
a.Rr=R(a.Rr,b.is_live_destination);a.isLivePlayback=R(a.isLivePlayback,b.live_playback);a.enableServerStitchedDai=a.enableServerStitchedDai&&a.isLivePlayback;b.isUpcoming&&(a.isUpcoming=R(a.isUpcoming,b.isUpcoming));a.qd=R(a.qd,b.post_live_playback);a.isMdxPlayback=R(a.isMdxPlayback,b.mdx);var Ww=b.mdx_control_mode;Ww&&(a.mdxControlMode="number"===typeof Ww?Ww:g.Jd(Ww));a.al=R(a.al,b.is_inline_playback_no_ad);a.Pa=g.Qx(a.Pa,b.reload_count);a.reloadReason=Rx(a.reloadReason,b.reload_reason);a.Tg=R(a.Tg,
b.show_content_thumbnail);a.Sr=R(a.Sr,b.utpsa);a.Wt=R(a.Wt,b.third_party_remapped_ad);a.cycToken=b.cyc||null;a.Xt=b.tkn||null;var LW=Yy(b);0<Object.keys(LW).length&&(a.ub=LW);a.W=Rx(a.W,b.vvt);a.mdxEnvironment=Rx(a.mdxEnvironment,b.mdx_environment);a.NC=b.osig;a.eventId||(a.eventId=b.eventid);a.osid||(a.osid=b.osid);a.playlistId=Rx(a.playlistId,b.list);b.index&&(a.playlistIndex=void 0===a.playlistIndex?g.Qx(0,b.index):g.Qx(a.playlistIndex,b.index));a.fx=b.pyv_view_beacon_url;a.ix=b.pyv_quartile25_beacon_url;
a.jx=b.pyv_quartile50_beacon_url;a.py=b.pyv_quartile75_beacon_url;a.hx=b.pyv_quartile100_beacon_url;var MW=b.remarketing_url;MW&&(a.remarketingUrl=MW);var NW=b.ppv_remarketing_url;NW&&(a.ppvRemarketingUrl=NW);var OW=b.session_data;!a.nz&&OW&&(a.nz=hj(OW,"&").feature);a.Zk=1==g.Qx(a.Zk?1:0,b.is_fling);a.vnd=g.Qx(a.vnd,b.vnd);a.Nc=Rx(a.Nc,b.force_ads_url);a.We=Rx(a.We,b.ctrl);a.Td=Rx(a.Td,b.ytr);a.lh=b.ytrcc;a.oz=b.ytrexp;a.kt=b.ytrext;a.zc=Rx(a.zc,b.adformat);a.Aj=Rx(a.Aj,b.attrib);a.slotPosition=
g.Qx(a.slotPosition,b.slot_pos);a.breakType=b.break_type;a.Vl=R(a.Vl,b.ssrt);a.videoId=Tx(b)||a.videoId;a.Aa=Rx(a.Aa,b.vss_credentials_token);a.uf=Rx(a.uf,b.vss_credentials_token_type);a.Gc=R(a.Gc,b.audio_only);a.au=R(a.au,b.aac_high);a.Ul=R(a.Ul,b.prefer_low_quality_audio);a.fg=Rx(a.fg,b.qoe_cat);a.pc=R(a.pc,b.download_media);a.Da=R(a.Da,b.prefer_gapless);a:{var tG=a.playerResponse;if(tG&&tG.adPlacements)for(var PW=g.u(tG.adPlacements),uG=PW.next();!uG.done;uG=PW.next()){var Xw=uG.value.adPlacementRenderer;
if(null!=Xw&&"AD_PLACEMENT_KIND_START"==(Xw.config&&Xw.config.adPlacementConfig&&Xw.config.adPlacementConfig.kind)){var QW=!0;break a}}QW=!1}QW&&(a.adModule=!0,a.T.push("ad"));var RW=b.adaptive_fmts;RW&&(a.adaptiveFormats=RW);var SW=b.allow_embed;SW&&(a.allowEmbed="1"==SW);var TW=b.backgroundable;TW&&(a.backgroundable="1"==TW);var UW=b.autonav;UW&&(a.Rf="1"==UW);var VW=b.autoplay;VW&&(a.Yf="1"==VW);var WW=b.iv_load_policy;WW&&(a.annotationsLoadPolicy=Px(a.annotationsLoadPolicy,WW,hy));var XW=b.cc_lang_pref;
XW&&(a.captionsLanguagePreference=Rx(XW,a.captionsLanguagePreference));var YW=b.cc_load_policy;YW&&(a.il=Px(a.il,YW,hy));var ZW=b.cached_load;ZW&&(a.zg=R(a.zg,ZW));"0"==b.dash&&(a.cw=!0);var $W=b.dashmpd;$W&&(a.xa=g.ae($W,{cpn:a.clientPlaybackNonce}));var aX=b.delay;aX&&(a.bb=g.Jd(aX));var bX=a.Wr||b.end;void 0!=bX&&(a.clipEnd=g.Qx(a.clipEnd,bX));var cX=b.fmt_list;cX&&(a.Xk=cX);b.heartbeat_preroll&&a.T.push("heartbeat");a.Xh=-Math.floor(10*Math.random());a.zl=-Math.floor(40*Math.random());var dX=
b.is_listed;dX&&(a.isListed=R(a.isListed,dX));var eX=b.is_private;eX&&(a.isPrivate=R(a.isPrivate,eX));var fX=b.is_dni;fX&&(a.N=R(a.N,fX));var gX=b.dni_color;gX&&(a.ma=Rx(a.ma,gX));var hX=b.pipable;hX&&(a.pipable=R(a.pipable,hX));a.Jm=a.pipable&&a.B.bh;!a.Jm||a.B.showMiniplayerButton&&a.S("web_player_pip");var iX=b.paid_content_overlay_duration_ms;iX&&(a.paidContentOverlayDurationMs=g.Jd(iX));var jX=b.paid_content_overlay_text;jX&&(a.paidContentOverlayText=jX);var kX=b.url_encoded_fmt_stream_map;kX&&
(a.Ug=kX);var lX=b.hls_formats;lX&&(a.hlsFormats=lX);var mX=b.hlsvp;mX&&(a.hlsvp=mX);var Yw=b.length_seconds;Yw&&(a.lengthSeconds="string"===typeof Yw?g.Jd(Yw):Yw);var Zw=b.live_start_walltime;Zw&&(a.eh="number"===typeof Zw?Zw:g.Jd(Zw));var $w=b.live_manifest_duration;$w&&(a.Oc="number"===typeof $w?$w:g.Jd($w));var nX=b.player_params;nX&&(a.playerParams=nX);var oX=b.partnerid;oX&&(a.qb=g.Qx(a.qb,oX));var pX=b.probe_url;pX&&(a.probeUrl=Os(g.ae(pX,{cpn:a.clientPlaybackNonce})));var vG=b.pyv_billable_url;
vG&&Ls(vG)&&(a.Jd=vG);var wG=b.pyv_conv_url;wG&&Ls(wG)&&(a.gx=wG);zz(a,b);0<a.startSeconds||(a.startSeconds=g.Qx(a.startSeconds,a.Yr||a.Yk||b.start||b.startSeconds),a.Bb=a.startSeconds);if(a.S("html5_start_seconds_priority")){if(!(a.liveUtcStartSeconds&&0<a.liveUtcStartSeconds)){var qX=b.live_utc_start;if(null!=qX)a.liveUtcStartSeconds=Number(qX);else{var xG=a.startSeconds;xG&&isFinite(xG)&&1E9<xG&&(a.liveUtcStartSeconds=a.startSeconds)}}if(!(a.liveUtcStartSeconds&&0<a.liveUtcStartSeconds)){var rX=
b.utc_start_millis;rX&&(a.liveUtcStartSeconds=.001*Number(rX))}}else{var sX=b.live_utc_start;null!=sX&&(a.liveUtcStartSeconds=Number(sX));var tX=b.utc_start_millis;tX&&(a.liveUtcStartSeconds=.001*Number(tX))}var uX=b.stream_time_start_millis;uX&&(a.xj=.001*Number(uX));var vX=a.Yk||b.start;void 0==vX||"1"==b.resume||a.isLivePlayback||(a.clipStart=g.Qx(a.clipStart,vX));var wX=b.url_encoded_third_party_media;wX&&(a.Kd=kj(wX));var yG=b.ypc_offer_button_formatted_text;if(yG){var xX=JSON.parse(yG);a.tB=
null!=xX?xX:null;a.vB=yG}var yX=b.ypc_offer_button_text;yX&&(a.Fj=yX);var zX=b.ypc_offer_description;zX&&(a.Wg=zX);var AX=b.ypc_offer_headline;AX&&(a.Gj=AX);var BX=b.ypc_full_video_message;BX&&(a.Cj=BX);var CX=b.ypc_offer_id;CX&&(a.Hj=CX);var DX=b.ypc_buy_url;DX&&(a.mu=DX);var EX=b.ypc_item_thumbnail;EX&&(a.Dj=EX);var FX=b.ypc_item_title;FX&&(a.Ej=FX);var GX=b.ypc_item_url;GX&&(a.yu=GX);var HX=b.ypc_vid;HX&&(a.Ij=HX);b.ypc_overlay_timeout&&(a.Qu=Number(b.ypc_overlay_timeout));var IX=b.ypc_trailer_player_vars;
IX&&(a.Xd=g.jj(IX));var JX=b.ypc_original_itct;JX&&(a.UC=JX);a.jj=Rx(a.jj,b.ucid);b.baseUrl&&(a.D.baseUrl=b.baseUrl);b.uid&&(a.D.uid=b.uid);b.oeid&&(a.D.oeid=b.oeid);b.ieid&&(a.D.ieid=b.ieid);b.ppe&&(a.D.ppe=b.ppe);b.engaged&&(a.D.engaged=b.engaged);b.subscribed&&(a.D.subscribed=b.subscribed);a.D.focEnabled=R(a.D.focEnabled,b.focEnabled);a.D.rmktEnabled=R(a.D.rmktEnabled,b.rmktEnabled);a.wj=b.storyboard_spec||null;a.pj=b.live_storyboard_spec||null;a.Tr=R(a.Tr,b.iv3_module);a.Wd=R(a.Wd,b.ypc_license_checker_module);
a.Hc=R(a.Hc,b.ypc_module);a.Vg=R(a.Vg,b.ypc_clickwrap_module);a.Hc&&a.T.push("ypc");a.Xw={video_id:b.video_id,eventid:b.eventid,cbrand:b.cbrand,cbr:b.cbr,cbrver:b.cbrver,c:b.c,cver:b.cver,ctheme:b.ctheme,cplayer:b.cplayer,cmodel:b.cmodel,cnetwork:b.cnetwork,cos:b.cos,cosver:b.cosver,cplatform:b.cplatform,user_age:b.user_age,user_display_image:b.user_display_image,user_display_name:b.user_display_name,user_gender:b.user_gender,csi_page_type:b.csi_page_type,csi_service_name:b.csi_service_name,enablecsi:b.enablecsi,
enabled_engage_types:b.enabled_engage_types};wz(a,b);var KX=b.cotn;KX&&(a.cotn=KX);Bz(a)?Cz(a)&&(a.isLivePlayback&&a.xa?a.Wb=!0:a.Sb&&(a.cg=!0)):Dz(a)?a.Wb=!0:!Ez(a,a.adaptiveFormats)&&a.xa&&(a.Wb=!0);var BG=b.adpings;BG&&(a.Gm=BG?g.jj(BG):null);var NX=b.feature;NX&&(a.uB=NX);var OX=b.referrer;OX&&(a.referrer=OX);a.clientScreenNonce=Rx(a.clientScreenNonce,b.csn);a.Jo=g.Qx(a.Jo,b.root_ve_type);a.dg=g.Qx(a.dg,b.kids_age_up_mode);void 0!=b.kids_app_info&&(a.kidsAppInfo=b.kids_app_info);a.yj=R(a.yj,b.upg_content_filter_mode);
var PX=b.unplugged_location_info;PX&&(a.Ma=PX);var QX=b.unplugged_partner_opt_out;QX&&(a.Am=Rx("",QX));a.bh=R(a.bh,b.disable_watch_next);a.nf=Rx(a.nf,b.internal_ip_override);a.Um=!!b.is_yto_interstitial;(a.interstitials.length||a.Um)&&a.T.push("yto");var RX=b.Cf;RX&&(a.Cf=RX);b.yv&&(a.yv=b.yv);a.Ha=null!==(c=b.csi_timer)&&void 0!==c?c:""};
vz=function(a,b){var c,d,e,f,h,l,m,n,p,q,r,t,v,y=b.raw_watch_next_response;if(!y){var C=b.watch_next_response;C&&(y=JSON.parse(C))}if(y){a.watchNextResponse=y;var z=a.watchNextResponse.contents;if(z){var E=z.singleColumnWatchNextResults;if(E){var O=g.Qx(0,b.autoplay_count);if(E.autoplay&&E.autoplay.autoplay&&!E.playlist){var L=E.autoplay.autoplay.sets,ca={},ha={},qa=null;if(L){for(var wc=g.u(L),zd=wc.next();!zd.done;zd=wc.next()){var Qe=zd.value.autoplayVideoRenderer;if(Qe&&Qe.compactVideoRenderer){qa=
Qe.compactVideoRenderer;break}}var Ab=L[0].autoplayVideo;if(Ab){var Pb=Ab.clickTrackingParams;Pb&&(ca.itct=Pb);ca.autonav="1";ca.playnext=String(O)}}else ca.feature="related-auto";if(qa){ha.autonav="1";ha.video_id=qa.videoId;var Lq=qa.shortBylineText;Lq&&(ha.author=g.Wo(Lq));var Mq=qa.title;Mq&&(ha.title=g.Wo(Mq))}ha.endscreen_autoplay_session_data=$d(ca);a.suggestions=[ha]}}var xf=z.twoColumnWatchNextResults}var Nq=a.watchNextResponse.playerOverlays;if(Nq){var se=Nq.playerOverlayRenderer;if(se){var Oq=
se.endScreen;if(Oq){var Pq=Oq.watchNextEndScreenRenderer;if(Pq)var qi=Pq.results}var yf=se.videoDetails;if(yf)var xc=yf.embeddedPlayerOverlayVideoDetailsRenderer;var Qq=se.actions;if(Qq)for(var ri=g.u(Qq),Om=ri.next();!Om.done;Om=ri.next()){var Rq=Om.value;Rq.likeButtonRenderer&&(a.likeButtonRenderer=Rq.likeButtonRenderer)}var Sq=null===(d=null===(c=se.suggestedActionsRenderer)||void 0===c?void 0:c.suggestedActionsRenderer)||void 0===d?void 0:d.suggestedActions;if(Sq)for(var Nd=g.u(Sq),Tq=Nd.next();!Tq.done;Tq=
Nd.next());var Uq=null===(e=se.decoratedPlayerBarRenderer)||void 0===e?void 0:e.decoratedPlayerBarRenderer;Uq&&(a.multiMarkersPlayerBarRenderer=null===(f=Uq.playerBar)||void 0===f?void 0:f.multiMarkersPlayerBarRenderer);a.showShareButton=!!se.shareButton;var Vq=se.productsInVideoOverlayRenderer;Vq&&(a.shoppingOverlayRenderer=Vq.shoppingOverlayRenderer);var Wq=se.autoplay;if(Wq)var te=Wq.playerOverlayAutoplayRenderer}}if(!qi&&xf){var Xq=xf.endScreen&&xf.endScreen.endScreen;Xq&&(qi=Xq.results)}if(xf){var Yq=
xf.desktopOverlay&&xf.desktopOverlay.desktopOverlayConfigRenderer;Yq&&Yq.suppressShareButton&&(a.showShareButton=!1)}xc&&Fz(a,b,xc);var Zq=g.Qx(0,b.autoplay_count);if(qi){for(var Iw=xf||null,Jw=te||null,Pm=[],si=!0,$q=g.u(qi),ok=$q.next();!ok.done;ok=$q.next()){var pk=ok.value,qk=void 0,Yb=null;if(pk.endScreenVideoRenderer){var Re=pk.endScreenVideoRenderer,$g=Re.title;Yb={id:Re.videoId,length_seconds:Re.lengthInSeconds};var ar=Re.publishedTimeText;ar&&(Yb.publishedTimeText=g.Wo(ar));var br=Re.shortBylineText;
br&&(Yb.author=g.Wo(br));var cr=Re.shortViewCountText;cr&&(Yb.short_view_count_text=g.Wo(cr));if($g){Yb.title=g.Wo($g);var Zb=$g.accessibility;if(Zb){var rk=Zb.accessibilityData;rk&&rk.label&&(Yb.aria_label=rk.label)}}var Qm=Re.navigationEndpoint;if(Qm){qk=Qm.clickTrackingParams;var dr=Qm.watchEndpoint;dr&&(Yb.BD=dr)}var er=Re.thumbnailOverlays;if(er)for(var fr=g.u(er),Rm=fr.next();!Rm.done;Rm=fr.next()){var Sm=Rm.value.thumbnailOverlayTimeStatusRenderer;if(Sm)if("LIVE"===Sm.style){Yb.live_playback=
"1";break}else if("UPCOMING"===Sm.style){Yb.isUpcoming=!0;break}}var Kw=az(Re.thumbnail),ti=Xy(Kw);ti.iurlmq&&(ti={iurlmq:ti.iurlmq,iurlhq:ti.iurlmq});Object.assign(Yb,ti)}else if(pk.endScreenPlaylistRenderer){var ah=pk.endScreenPlaylistRenderer,Tm=ah.navigationEndpoint;if(!Tm)continue;var gr=Tm.watchEndpoint;if(!gr)continue;var hr=gr.videoId;Yb={list:ah.playlistId,video_id:hr,playlist_length:ah.videoCount,thumbnail_ids:hr};var ir=ah.title;ir&&(Yb.playlist_title=g.Wo(ir));var jr=ah.shortBylineText;
jr&&(Yb.playlist_author=g.Wo(jr));qk=Tm.clickTrackingParams;var Lw=az(ah.thumbnail);Object.assign(Yb,Xy(Lw))}Yb&&(Yb.session_data=$d({itct:qk}),si?(Gz(Yb,Iw,Jw,Zq),Pm.splice(0,0,Yb),si=!1):Pm.push(Yb))}a.suggestions=Pm}if(te){a.Yw=!!te.preferImmediateRedirect;a.vj=a.vj||!!te.webShowNewAutonavCountdown;a.uj=a.uj||!!te.webShowBigThumbnailEndscreen;if(a.vj||a.uj){var id=te,Um=qi||null,Mw=xf||null,Vm,Wm,yc={id:id.videoId},jd=null===(Wm=null===(Vm=null===Um||void 0===Um?void 0:Um[0])||void 0===Vm?void 0:
Vm.endScreenVideoRenderer)||void 0===Wm?void 0:Wm.navigationEndpoint;jd&&(yc.session_data=$d({itct:jd.clickTrackingParams}));var Xm=id.videoTitle;if(Xm){yc.title=g.Wo(Xm);var Nw=Xm.accessibility;if(Nw){var Ym=Nw.accessibilityData;Ym&&Ym.label&&(yc.aria_label=Ym.label)}}var Zm=id.byline;Zm&&(yc.author=g.Wo(Zm));var kr=id.publishedTimeText;kr&&(yc.publishedTimeText=g.Wo(kr));var lr=id.shortViewCountText;lr&&(yc.short_view_count_text=g.Wo(lr));var bh=id.thumbnailOverlays;if(bh)for(var Kc=g.u(bh),ch=
Kc.next();!ch.done;ch=Kc.next()){var eg=ch.value.thumbnailOverlayTimeStatusRenderer;if(eg)if("LIVE"===eg.style){yc.live_playback="1";break}else if("UPCOMING"===eg.style){yc.isUpcoming=!0;break}else if("DEFAULT"===eg.style&&eg.text){yc.lengthText=g.Wo(eg.text);var mr=eg.text.accessibility;if(mr){var $m=mr.accessibilityData;$m&&$m.label&&(yc.jq=$m.label)}break}}var Ow=az(id.background),dh=Xy(Ow);dh.iurlmq&&(dh={iurlmq:dh.iurlmq,iurlhq:dh.iurlmq});Object.assign(yc,dh);var nr=id.nextButton;if(nr){var sk=
nr.buttonRenderer;if(sk){var or=sk.navigationEndpoint;if(or){var pr=or.watchEndpoint;pr&&(yc.BD=pr)}}}if(id.topBadges){var qr=id.topBadges[0];if(qr){var tk=qr.metadataBadgeRenderer;tk&&"BADGE_STYLE_TYPE_PREMIUM"==tk.style&&(yc.yv=!0)}}var rr=id.alternativeTitle;rr&&(yc.pp=g.Wo(rr));Gz(yc,Mw,id,Zq);a.suggestions||(a.suggestions=[]);a.suggestions[0]=yc}null!=te.countDownSecs&&(a.Wv=1E3*te.countDownSecs)}a.watchNextResponse.currentVideoThumbnail&&(a.ub=az(a.watchNextResponse.currentVideoThumbnail));
if(!a.S("player_parse_profile_picture_from_watch_next_killswitch")){var an=null===(p=null===(n=null===(m=null===(l=null===(h=a.watchNextResponse)||void 0===h?void 0:h.contents)||void 0===l?void 0:l.twoColumnWatchNextResults)||void 0===m?void 0:m.results)||void 0===n?void 0:n.results)||void 0===p?void 0:p.contents;if(an&&an[1]){var uk=null===(v=null===(t=null===(r=null===(q=an[1].videoSecondaryInfoRenderer)||void 0===q?void 0:q.owner)||void 0===r?void 0:r.videoOwnerRenderer)||void 0===t?void 0:t.thumbnail)||
void 0===v?void 0:v.thumbnails;uk&&uk.length&&(a.Mh=uk[uk.length-1].url)}}}};
Hz=function(a){return!!(a.l&&a.l.videoInfos&&a.l.videoInfos.length)};
Lz=function(a){if(a.S("html5_single_format_policy")&&a.Re)return a.Re;var b=a.Da,c=!!a.i&&(mw(a.i)||nw(a.i)||ow(a.i)),d=a.B,e=!!a.i&&a.i.Lg,f=Iz(a),h=a.au;a.isAd();var l=a.isOtf(),m=Jz(a,"html5_samsung_vp9_live"),n=new bea;if(g.P(d.experiments,"html5_high_res_logging")||g.P(d.experiments,"html5_logging_format_selection"))n.i=!0;n.Ha=f;n.xa=h&&d.l;Ck("windows nt 5.1")&&!kx&&(n.u=!0);if(f=c)(f=d.S("disable_html5_ambisonic_audio"))||(f=!(d.S("html5_enable_spherical")||d.S("html5_enable_spherical3d"))),
f=f?!1:xea(d);f&&(n.Ba=!0);b&&(n.u=!0,n.qb=!0);l&&!g.P(d.experiments,"html5_otf_prefer_vp9")&&(n.u=!0);us(d.i,vs.CHANNELS)&&(g.P(d.experiments,"html5_enable_aac51")&&(n.ea=!0),g.P(d.experiments,"html5_enable_ac3")&&(n.N=!0),g.P(d.experiments,"html5_enable_eac3")&&(n.T=!0),g.P(d.experiments,"html5_enable_ac3_gapless")&&(n.ma=!0));g.P(d.experiments,"html5_block_8k_hfr")&&(n.Pa=!0);n.C=g.Q(d.experiments,"html5_max_selectable_quality_ordinal");n.D=g.Q(d.experiments,"html5_min_selectable_quality_ordinal");
!g.P(d.experiments,"html5_kaios_hd_killswitch")&&g.Wx&&(n.Xa=480);if(e||c)n.Ka=!1;n.Ma=!1;b=ax(d,n.l);0<b&&2160>b&&($v()||g.P(d.experiments,"html5_format_hybridization"))&&(n.l.supportsChangeType=+$v(),n.G=b);2160<=b&&(n.bb=!0);Gw()&&(n.l.serveVp9OverAv1IfHigherRes=0,n.ub=!1);n.Bb=m;m=jn||Qk()&&!m?!1:!0;n.Aa=m;n.W=g.P(d.experiments,"html5_format_hybridization");n.Ya=g.P(d.experiments,"html5_offline_av1_fallback");n.X=g.P(d.experiments,"html5_disable_codec_on_errors_with_exp_backoff");n.Ua=g.P(d.experiments,
"html5_disable_codec_on_platform_errors");Gk()&&a.playerResponse&&a.playerResponse.playerConfig&&a.playerResponse.playerConfig.webPlayerConfig&&a.playerResponse.playerConfig.webPlayerConfig.useCobaltTvosDogfoodFeatures&&(n.N=!0,n.T=!0);a.lm&&(n.I=a.lm);a.fm&&(n.B=a.fm);n.Da=a.isLivePlayback&&Kz(a)&&a.B.S("html5_drm_live_audio_51");return a.Re=n};
Zea=function(a){a.Sb||a.i&&ws(a.i);var b={};a.i&&(b=rs(Lz(a),a.B.i,a.i,function(c){return a.U("ctmp","fmtflt",c)}));
b=new nx(b,a.B.experiments,a.rz,Yea(a),function(c,d){a.Ja(c,d)});
g.G(a,b);a.cg=!1;a.I=!0;eea(b,function(c){for(var d=g.u(c),e=d.next();!e.done;e=d.next())switch(e=e.value,e.flavor){case "fairplay":e.l=a.Sb;e.G=a.BB;e.D=a.yB;break;case "widevine":e.B=a.wB}a.ld=c;if(0<a.ld.length&&(a.C=a.ld[0],g.Mz(a))){c=[];d=g.u(Object.entries(a.C.i));for(e=d.next();!e.done;e=d.next()){var f=g.u(e.value);e=f.next().value;f=f.next().value;var h="unk";(e=e.match(/(.*)codecs="(.*)"/))&&(h=e[2]);c.push(h+"_"+f)}a.Ja("drmProbe",c.join("."))}tz(a)})};
Oz=function(a,b){var c;(c=!b)||(c=!(!Cz(a)&&a.adaptiveFormats));if(c)return null;Jz(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(vw=!0);c=Nz(b);b=tw(c,a.Qc,a.lengthSeconds,a.isLivePlayback,a.qd,a.B.experiments);0<c.length&&(c=c[0],c.url&&c.sp&&c.s&&(c=rw(c.url,c.sp,c.s),c=Number(c.get("max_sq"))||Infinity,isFinite(c)&&(a.Vf=!0)));if(c=b.isManifestless)c=!(a.S("html5_manifestless_vp9")||a.S("html5_manifestless_vp9_normal_latency")&&(!a.isLowLatencyLiveStream||"NORMAL"==a.latencyClass)||!$ea(b));
return c?(b.dispose(),null):b};
Ez=function(a,b){b=Oz(a,b);if(!b)return!1;Pz(a,b);return!0};
Cz=function(a){return Gk()?!Qz(a):Jk()?!(!a.Sb||!a.S("html5_enable_safari_fairplay")):!1};
Qz=function(a){return Jz(a,"html5_enable_tvos_dash_dogfood")||a.S("html5_enable_tvos_dash")&&(a.S("html5_tvos_skip_dash_audio_check")||MediaSource.isTypeSupported('audio/webm; codecs="opus"'))};
Yea=function(a){return a.useCobaltWidevine?a.S("html5_enable_tvos_widevine")&&Gk()?Qz(a):Jz(a,"html5_enable_androidtv_cobalt_widevine")&&Ck("cobalt")&&Ck("android")?!0:!1:!1};
$ea=function(a){return a.isManifestless&&Kv('video/webm; codecs="vp9"')&&g.Nb(a.i,function(b){return Bv(b.info)})};
Rz=function(a){return!(!a.i||!a.i.isManifestless)};
Tz=function(a){if(!ls())return!1;if(a.S("html5_streaming_debug"))return!0;if(jn)return!1;if(g.Fk()){var b=Bk();if(16<=b&&17>b)return!1}return!Rz(a)||"ULTRALOW"!=a.latencyClass&&21530001!=Sz(a)?window.AbortController?a.S("html5_streaming_xhr")||a.S("html5_streaming_xhr_manifestless")&&Rz(a)?!0:!1:!1:!0};
Uz=function(a){return Cs({hasSubfragmentedFmp4:a.hasSubfragmentedFmp4,Hg:a.Hg,defraggedFromSubfragments:a.defraggedFromSubfragments,isManifestless:Rz(a),Ev:Tz(a)})};
Sz=function(a){return a.isLowLatencyLiveStream&&void 0!=a.i&&5<=Ew(a.i)?21530001:a.liveExperimentalContentId};
Bz=function(a){return Gk()&&Qz(a)?!1:!rx()||a.cw?!0:!1};
afa=function(a){a.I=!0;a.Wb=!1;if(!a.xa&&Dz(a))Tca(a.videoId).then(function(d){var e=[];d=g.u(d);for(var f=d.next();!f.done;f=d.next())f=iz(f.value),e.push(f);a:if(d=e.join(","),e=Oz(a,a.adaptiveFormats))if(d=Oz(a,d)){f=g.u(Object.keys(d.i));for(var h=f.next();!h.done;h=f.next()){var l=h.value;h=d.i[l];l=e.i[l];if(!l||h.lastModified<l.lastModified){Vz(a,!0);f=new Oy(a.videoId,2,{Do:!0});a.qj=f;d.dispose();Pz(a,e);break a}}e.dispose();Pz(a,d)}else Pz(a,e);a.Ja("dlr","")},function(){return Ez(a,a.adaptiveFormats)}).then(function(){tz(a)});
else{Js(a.xa)||g.to(new g.hm("DASH MPD Origin invalid: ",a.xa));var b=a.xa,c=g.Q(a.B.experiments,"dash_manifest_version")||4;b=g.ae(b,{mpd_version:c});a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||(b=g.ae(b,{pacing:0}));Wda(b,a.B.experiments,a.isLivePlayback).then(function(d){a.ya()||(Pz(a,d,!0),g.Vp("mrc",void 0,a.Ha),tz(a))},function(d){a.ya()||(a.I=!1,a.U("dataloaderror",new oq("manifest.net.retryexhausted",!0,{backend:"manifest",
rc:d.status})))});
g.Vp("mrs",void 0,a.Ha)}};
tz=function(a){a.ya()||(a.I=!1,a.U("dataloaded"))};
Pz=function(a,b,c){c=void 0===c?!1:c;a.i=b;g.G(a,b);b.Lc=a.Lc;b.Ce=a.Ce;b.C=a.qB;b.G=a.eB;a.i.isLive||(a.isLivePlayback=!1);var d=b.sourceUrl.split("/");-1!=d.indexOf("manifest_duration")&&(a.Oc=Number(d[d.indexOf("manifest_duration")+1]));b.u&&(b.subscribe("clienttemp",a.Ja,a),c?b.subscribe("refresh",a.Rz,a):b.subscribe("cuepointsadded",a.Jx,a));ws(b)&&(a.cg=!0)};
Kz=function(a){return a.Qc?!0:!!a.i&&ws(a.i)};
ffa=function(a,b){if(a.ya())return g.Mj();a.l=null;a.X=null;a.Xa=null;var c=a.B.deviceParams.c;a.S("disable_rqs")||(a.Ya=/^rq/.test(a.clientPlaybackNonce)||/^r/.test(a.clientPlaybackNonce)&&/UNPLUGGED/.test(c)||g.Mz(a));return bfa(a,b).then(void 0,function(){return cfa(a,b)}).then(void 0,function(){return dfa(a)}).then(void 0,function(){return efa(a)})};
bfa=function(a,b){b=b||Bz(a);return a.i&&!b?(Iz(a)&&$da(a.i,a.isLivePlayback),Jz(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(a.B.i.l=!0),gfa(a).then(function(){return bda(Lz(a),a.B.i,a.i,a.C,function(c){return a.U("ctmp","fmtflt",c)},a.S("html5_dynamic_av1_hybrid_threshold")).then(function(c){Wz(a,c);
/^av/.test(a.clientPlaybackNonce)&&a.Re&&a.Ja("av1",g.pq(a.Re.l))})})):g.Mj()};
gfa=function(a){if(!a.i||!a.i.i||!a.S("html5_use_media_capability"))return g.Nj();for(var b=[],c=g.u(Object.keys(a.i.i)),d=c.next();!d.done;d=c.next())(d=a.i.i[d.value])&&d.info&&b.push(d.info);return oz(b)};
cfa=function(a,b){if(b&&a.hlsvp)return g.Mj();if(a.hlsFormats){b=Nz(a.hlsFormats);a.dh=Aea(a.B,b);var c=a.clientPlaybackNonce;return Eea(a.B,a.isAd(),b,a.qe,c).then(function(d){for(var e,f,h=0,l=g.u(d),m=l.next();!m.done;m=l.next())m=m.value,(null===(f=null===(e=m.Md())||void 0===e?void 0:e.audio)||void 0===f?void 0:f.i)>h&&(h=m.Md().audio.i);2<h&&a.Ja("hlschl",""+h);Xz(a,d)})}return g.Mj()};
dfa=function(a){return a.Kd&&a.Tw?Hea(a.B,a.isAd(),a.Kd).then(function(b){Xz(a,b)}):g.Mj()};
efa=function(a){var b=Nz(a.Ug,a.Xk);if(a.hlsvp){var c=Tea(a.hlsvp,a.clientPlaybackNonce,a.qe);b.push(c)}return Fea(a.B,a.isAd(),b,hfa(a)).then(function(d){Xz(a,d)})};
Wz=function(a,b){a.l=b;b=a.getAvailableAudioTracks();b=b.concat(a.Ke);for(var c=0;c<a.Lk.length;c++)for(var d=a.Lk[c],e=0;e<b.length;e++){var f=b[e],h=f.i.id==d.audioTrackId;if(f.i.isDefault&&c==a.Yv||h){if(d.captionTrackIndices)for(h=0;h<d.captionTrackIndices.length;h++)f.captionTracks[h]=a.captionTracks[d.captionTrackIndices[h]];void 0!==d.defaultCaptionTrackIndex&&(f.B=a.captionTracks[d.defaultCaptionTrackIndex]);void 0!==d.forcedCaptionTrackIndex&&(f.l=a.captionTracks[d.forcedCaptionTrackIndex]);
f.u=d.visibility||"UNKNOWN";f.captionsInitialState=d.captionsInitialState||"CAPTIONS_INITIAL_STATE_UNKNOWN"}}if(a.C&&a.l&&a.l.videoInfos&&!(0>=a.l.videoInfos.length)&&(b=Ev(a.l.videoInfos[0]),b!=("fairplay"==a.C.flavor)))for(c=g.u(a.ld),d=c.next();!d.done;d=c.next())if(d=d.value,b==("fairplay"==d.flavor)){a.C=d;break}};
Xz=function(a,b){a.Xa=b;Wz(a,new ns(g.Zc(a.Xa,function(c){return c.Md()})))};
hfa=function(a){var b={cpn:a.clientPlaybackNonce,c:a.B.deviceParams.c,cver:a.B.deviceParams.cver};a.sj&&(b.ptk=a.sj,b.oid=a.Vw,b.ptchn=a.Uw,b.pltype=a.Ww);return b};
g.Yz=function(a){return Cz(a)&&a.Sb?(a={},a.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",a):a.u&&a.u.Qc||null};
Zz=function(a){var b=a.playerResponse&&a.playerResponse.paidContentOverlay&&a.playerResponse.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.Wo(b.text):a.paidContentOverlayText};
$z=function(a){var b=a.playerResponse&&a.playerResponse.paidContentOverlay&&a.playerResponse.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?g.Jd(b.durationMs):a.paidContentOverlayDurationMs};
aA=function(a){var b="";if(a.Vr)return a.Vr;a.isLivePlayback&&(b=a.allowLiveDvr?"dvr":"live");return b};
g.bA=function(a,b){return"string"!==typeof a.keywords[b]?null:a.keywords[b]};
cA=function(a){return a.i&&!isNaN(Dw(a.i))?Dw(a.i):Rz(a)?0:a.lengthSeconds};
dA=function(a){return!!(a.xa||a.adaptiveFormats||a.Ug||a.Kd||a.hlsvp)};
sz=function(a){var b=g.pb(a.T,"ypc");a.ypcPreview&&(b=!1);return a.isValid()&&!a.I&&(dA(a)||g.pb(a.T,"heartbeat")||b)};
Nz=function(a,b){a=kj(a);var c={};if(b){b=g.u(b.split(","));for(var d=b.next();!d.done;d=b.next())(d=d.value.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(c[d[1]]={width:d[2],height:d[3]})}b=g.u(a);for(d=b.next();!d.done;d=b.next()){d=d.value;var e=c[d.itag];e&&(d.width=e.width,d.height=e.height)}return a};
uz=function(a,b){var c=b.raw_embedded_player_response;if(!c){var d=b.embedded_player_response;d&&(c=JSON.parse(d))}c&&(a.qc=c);if(a.qc){if(c=a.qc.videoFlags)c.playableInEmbed&&(a.allowEmbed=!0),c.isPrivate&&(a.isPrivate=!0),c.userDisplayName&&(b.user_display_name=c.userDisplayName),c.userDisplayImage&&(b.user_display_image=c.userDisplayImage);if(c=a.qc.embedPreview){c=c.thumbnailPreviewRenderer;d=c.controlBgHtml;null!=d?(a.ma=d,a.N=!0):(a.ma="",a.N=!1);if(d=c.defaultThumbnail)a.ub=az(d),a.sampledThumbnailColor=
d.sampledThumbnailColor;(d=c.videoDetails&&c.videoDetails.embeddedPlayerOverlayVideoDetailsRenderer)&&Fz(a,b,d);(d=c.videoDetails&&c.videoDetails.musicEmbeddedPlayerOverlayVideoDetailsRenderer)&&d.musicVideoType&&(a.musicVideoType=d.musicVideoType);a.showShareButton=!!c.shareButton;if(c.playButton&&c.playButton.buttonRenderer&&c.playButton.buttonRenderer.navigationEndpoint&&(d=c.playButton.buttonRenderer.navigationEndpoint,d.watchEndpoint)){var e=d.watchEndpoint;e.watchEndpointSupportedOnesieConfig&&
e.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig&&(a.rj=new Jea(e.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig));a.S("embeds_build_video_id_from_watchendpoint_killswitch")||(a.videoId=d.watchEndpoint.videoId||a.videoId)}c.videoDurationSeconds&&(a.lengthSeconds=g.Jd(c.videoDurationSeconds));a.S("web_player_include_innertube_commands")&&c.webPlayerActionsPorting&&gz(a,c.webPlayerActionsPorting);if(c.playlist&&c.playlist.playlistPanelRenderer){c=c.playlist.playlistPanelRenderer;
d=[];e=Number(c.currentIndex);if(c.contents)for(var f=0,h=c.contents.length;f<h;f++){var l=c.contents[f].playlistPanelVideoRenderer;if(l){var m=l.shortBylineText?g.Wo(l.shortBylineText):"",n=l.title?g.Wo(l.title):"",p=f===e?b.channel_path:"",q=f===e?b.profile_picture:"",r=f!==e||a.B.S("embeds_enable_playlist_is_private_killswitch")?!1:a.isPrivate,t=f!==e||a.B.S("embeds_enable_playlist_dni_killswitch")?!1:a.N,v=f!==e||a.B.S("embeds_enable_playlist_dni_killswitch")?"":a.ma;d.push({author:m,encrypted_id:l.videoId,
title:n,channel_path:p,profile_picture:q,is_private:r,is_dni:t,dni_color:v})}}b={index:c.currentIndex,list:c.playlistId,playlist_length:c.totalVideos,video:d};c.titleText&&(b.title=g.Wo(c.titleText));c.shortBylineText&&(b.author=g.Wo(c.shortBylineText));a.dw=b}}a.qc.playabilityStatus&&(a.Nk=a.qc.playabilityStatus,eA(a)&&(a.errorDetail="0"));(b=a.qc.attestation)&&ez(a,b)}};
Gz=function(a,b,c,d){d={autonav:1,playnext:d};a.list&&(d.autoplay="1");if(b){if(b=b.autoplay)if(b=b.autoplay)if(b=b.sets)if(b=b[0])if(b=b.autoplayVideo)if((c=b.clickTrackingParams)&&(d.itct=c),b=b.watchEndpoint)a.autonav_watch_endpoint=b}else c&&(b=c.nextButton)&&(b=b.buttonRenderer)&&(b=b.navigationEndpoint)&&b.clickTrackingParams&&(d.itct=b.clickTrackingParams);d.itct||(d.feature="related-auto");a.endscreen_autoplay_session_data=$d(d)};
Fz=function(a,b,c){var d=c.channelThumbnail;d&&(d=d.thumbnails)&&(d=d[0])&&(b.profile_picture=d.url);if(d=c.channelThumbnailEndpoint&&c.channelThumbnailEndpoint.channelThumbnailEndpoint)if(d=d.urlEndpoint&&d.urlEndpoint.urlEndpoint)b.channel_path=d.url;if(d=c.collapsedRenderer)if(d=d.embeddedPlayerOverlayVideoDetailsCollapsedRenderer){var e=d.title;e&&(b.title=g.Wo(e));if(d=d.subtitle)b.subtitle=g.Wo(d)}if(c=c.expandedRenderer)if(c=c.embeddedPlayerOverlayVideoDetailsExpandedRenderer){if(d=c.title)b.expanded_title=
g.Wo(d);if(d=c.subtitle)b.expanded_subtitle=g.Wo(d);if(c=c.subscribeButton)if(c=c.subscribeButtonRenderer)b.ucid=c.channelId,b.subscribed=c.subscribed,c.notificationPreferenceToggleButton&&c.notificationPreferenceToggleButton.toggleButtonRenderer&&(b=c.notificationPreferenceToggleButton.toggleButtonRenderer,b.isToggled?(a.oA=b.toggledServiceEndpoint||null,a.Iz=b.defaultServiceEndpoint||null):(a.oA=b.defaultServiceEndpoint||null,a.Iz=b.toggledServiceEndpoint||null))}};
g.fA=function(a){return a.isLivePlayback&&!a.allowLiveDvr};
gA=function(a){return a.isLivePlayback&&a.allowLiveDvr};
ifa=function(a){a.l=a.l.l};
xr=function(a){return a.adFormat&&"1_5"!=a.adFormat?"adunit":a.B.D};
hA=function(a){if(a.isAd()&&a.videoId!=a.B.Ba)return a.B.Ba};
iA=function(a){return a.Yf||"detailpage"==xr(a)||a.mutedAutoplay};
zr=function(a){if(iA(a)){if("detailpage"==xr(a))return a.Rf||0<a.Pa;if(!("17_8"===a.adFormat&&!a.Rf||"adunit"==xr(a)&&a.Jd))return!0}return!1};
g.jA=function(a){return a.oauthToken||a.B.Sb};
kA=function(a){var b=1,c=g.Q(a.B.experiments,"html5_default_ad_gain");c&&a.isAd()&&(b=c);c=a.hg;a.l&&a.l.i&&a.l.i[0]&&a.Xr[a.l.i[0].id]&&(c=a.Xr[a.l.i[0].id]);if(a.S("html5_stateful_audio_normalization")&&null!=c){if(a.vz)return Math.min(1,Math.pow(10,-a.Wl/20))||b;var d=0;g.P(a.B.experiments,"html5_diff_bias_over_ad_content")&&(d=a.isAd()?0:3);c-=Math.min(0,d+Math.max(a.B.zc,g.Q(a.B.experiments,"html5_stateful_audio_min_adjustment_value")));a.Wl=c}return Math.min(1,Math.pow(10,-c/20))||b};
Iz=function(a){var b=["MUSIC_VIDEO_TYPE_ATV","MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"],c="TVHTML5_SIMPLY"===a.B.deviceParams.c&&"MUSIC"===a.B.deviceParams.ctheme;!a.Gc&&(g.dy(a.B)||c)&&b.includes(a.musicVideoType)&&(a.Gc=!0);if(b=g.Fk())b=/Starboard\/([0-9]+)/.exec(g.md),b=10>(b?parseInt(b[1],10):NaN);c=a.B;c=("TVHTML5_CAST"===c.deviceParams.c||"TVHTML5"===c.deviceParams.c&&(c.deviceParams.cver.startsWith("6.20130725")||c.deviceParams.cver.startsWith("6.20130726")))&&"MUSIC"===a.B.deviceParams.ctheme;
!a.Gc&&(c||wy(a.B))&&!b&&(b="MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"===a.musicVideoType,c=(a.S("cast_prefer_audio_only_for_atv_and_uploads")||a.S("kabuki_pangea_prefer_audio_only_for_atv_and_uploads"))&&"MUSIC_VIDEO_TYPE_ATV"===a.musicVideoType,b||c)&&(a.Gc=!0);return!a.B.deviceHasDisplay||a.Gc&&a.B.l};
lA=function(a){return Ar(a)&&!!a.adaptiveFormats};
Ar=function(a){return!!(a.S("hoffle_save")&&a.pc&&a.B.l)};
Vz=function(a,b){if(a.pc!=b&&(a.pc=b)&&a.i){a=a.i;for(var c in a.i)b=a.i[c],b.u=!1,b.i=null}};
Dz=function(a){return a.S("hoffle_load")?!(!a.adaptiveFormats||!Ur(a.videoId)||a.pc):a.S("woffle_orchestration")?!!a.cotn&&Ur(a.videoId)&&!a.pc:!1};
mA=function(a){if(!a.i||!a.u||!a.G)return!1;var b=a.i.i;return!!b[a.u.id]&&Ts(b[a.u.id].l.i)&&!!b[a.G.id]&&Ts(b[a.G.id].l.i)};
eA=function(a){return(a=a.Nk)&&a.showError?a.showError:!1};
g.Mz=function(a){return a.S("disable_rqs")?!1:Jz(a,"html5_high_res_logging")};
Jz=function(a,b){return a.S(b)?!0:(a.fflags||"").includes(b+"=true")};
jfa=function(a){return(a=/html5_log_experiment_id_from_player_response_to_ctmp=([0-9]+)/.exec(a.fflags))?a[1]:null};
zz=function(a,b){if(b=b.video_masthead_ad_quartile_urls)a.Zr=b.quartile_0_url,a.ax=b.quartile_25_url,a.dx=b.quartile_50_url,a.ex=b.quartile_75_url,a.Zw=b.quartile_100_url,a.tj=b.quartile_0_urls,a.xs=b.quartile_25_urls,a.Cs=b.quartile_50_urls,a.Ns=b.quartile_75_urls,a.ds=b.quartile_100_urls};
Az=function(a){return a?rx()?!0:nA&&5>oA?!1:!0:!1};
yz=function(a){var b={};a=g.u(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.split("=");2==d.length?b[d[0]]=d[1]:b[c]=!0}return b};
fz=function(a){if(a){if(Ms(a))return a;a=Ns(a);if(Ms(a,!0))return a}return""};
pA=function(a,b,c){this.api=a;this.player=b;this.player.subscribe("localmediachange",this.i,this);this.l=c;kfa(this);this.K()};
qA=function(a){return D(this,function c(){var d;return A(c,function(e){return 1==e.i?x(e,Wca(a),2):3!=e.i?(d=e.l,x(e,Jr(d),3)):e.return(ks(a))})})};
lfa=function(){return D(this,function b(){return A(b,function(c){if(1==c.i){var d=Promise,e=d.all;var f="caches"in window?g.B.caches.delete(Hr(!1)):Promise.resolve(!0);c=x(c,e.call(d,[f,Xca()]),2)}else c=c.return();return c})})};
mfa=function(){D(this,function b(){return A(b,function(c){return 1==c.i?x(c,Promise.all([Ir(),Wr()]),2):c.return()})})};
kfa=function(a){bs().then(function(){var b=Sr(2);b=g.u(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=rA(a,c);a.K();d||Tr(c,3)}a.K();sA(a)})};
ofa=function(a,b){return D(a,function d(){var e,f=this;return A(d,function(h){if(1==h.i)return Qr(b)?h.return():x(h,Gr(b),2);if(3!=h.i)return e=h.l,x(h,nfa(f,b,e),3);0===Sr(2).length?tA(f,b):Tr(b,3);h.i=0})})};
pfa=function(a,b){var c,d;return D(a,function f(){var h,l,m;return A(f,function(n){if(1==n.i)return x(n,Vca(b),2);h=n.l;if(!h)return n.return(null);l=h.timestampSecs;m=null===(d=null===(c=h.player)||void 0===c?void 0:c.offlineState)||void 0===d?void 0:d.expiresInSeconds;return!m||l+m<=Math.floor(Date.now()/1E3)?n.return(null):n.return(h.player)})})};
rA=function(a,b){var c=a.api.Jb(),d=c?c.getVideoData():null;return c&&(null===d||void 0===d?0:lA(d))&&d.videoId===b?c:a.player.getVideoData().videoId===b?a.player:null};
tA=function(a,b){Tr(b,2);var c=qfa(a,{videoId:b,download_media:!0,start:Infinity,disable_watch_next:!0});c.subscribe("dataloaded",function(){var d;if(g.P(a.api.V().experiments,"hoffle_api")){var e=c.getPlayerResponse(),f=null===(d=null===e||void 0===e?void 0:e.videoDetails)||void 0===d?void 0:d.videoId;e&&f&&Sca(f,e)}});
uA(a.player,c,a.l);b=rfa();g.P(a.player.V().experiments,"hoffle_lmqf_killswitch")||(b=vq(b,b,!0,"m"),vA(a.player,b));a.K();wA(a.player,!1)};
qfa=function(a,b){return new g.rz(a.player.V(),b)};
rfa=function(){switch(g.Al.getInstance().get("lmqf")){case "HD_1080":return"hd1080";case "HD":return"hd720";case "SD":return"medium";case "LD":return"tiny";default:return"medium"}};
sA=function(a){if(!(0<Sr(2).length)){var b=Sr(3);0<b.length&&tA(a,b[0])}};
nfa=function(a,b,c){return D(a,function e(){var f=this;return A(e,function(h){if(1==h.i)h=g.P(f.api.V().experiments,"hoffle_api")?x(h,Rca(b,c),2):h.return();else{var l=h.return,m,n,p=xA(c.thumbnail);p=p.concat(xA(null===(n=null===(m=c.channel)||void 0===m?void 0:m.offlineChannelData)||void 0===n?void 0:n.thumbnail));m=p.length?Kr(p):Promise.resolve(void 0);h=l.call(h,m)}return h})})};
xA=function(a){if(!a||!a.thumbnails)return[];var b=[];a=g.u(a.thumbnails);for(var c=a.next();!c.done;c=a.next())c=c.value,c.url&&b.push(c.url);return b};
AA=function(a,b){g.F.call(this);var c=this;this.app=a;this.playerType=b;this.i=!0;this.element=null;this.C={};this.G={};this.l={};this.I=[];this.D={};this.B={};this.u=null;this.N=new Set;yA(this,"cueVideoById",this.cueVideoById);yA(this,"loadVideoById",this.loadVideoById);yA(this,"cueVideoByUrl",this.cueVideoByUrl);yA(this,"loadVideoByUrl",this.loadVideoByUrl);yA(this,"playVideo",this.playVideo);yA(this,"pauseVideo",this.pauseVideo);yA(this,"stopVideo",this.stopVideo);yA(this,"clearVideo",this.clearVideo);
yA(this,"getVideoBytesLoaded",this.getVideoBytesLoaded);yA(this,"getVideoBytesTotal",this.getVideoBytesTotal);yA(this,"getVideoLoadedFraction",this.getVideoLoadedFraction);yA(this,"getVideoStartBytes",this.getVideoStartBytes);yA(this,"cuePlaylist",this.cuePlaylist);yA(this,"loadPlaylist",this.loadPlaylist);yA(this,"nextVideo",this.nextVideo);yA(this,"previousVideo",this.previousVideo);yA(this,"playVideoAt",this.playVideoAt);yA(this,"setShuffle",this.setShuffle);yA(this,"setLoop",this.setLoop);yA(this,
"getPlaylist",this.ID);yA(this,"getPlaylistIndex",this.getPlaylistIndex);yA(this,"getPlaylistId",this.getPlaylistId);yA(this,"loadModule",this.loadModule);yA(this,"unloadModule",this.unloadModule);yA(this,"setOption",this.setOption);yA(this,"getOption",this.getOption);yA(this,"getOptions",this.getOptions);yA(this,"mute",this.mute);yA(this,"unMute",this.unMute);yA(this,"isMuted",this.isMuted);yA(this,"setVolume",this.setVolume);yA(this,"getVolume",this.getVolume);yA(this,"seekTo",this.seekTo);yA(this,
"getPlayerState",this.getPlayerState);yA(this,"getPlaybackRate",this.getPlaybackRate);yA(this,"setPlaybackRate",this.setPlaybackRate);yA(this,"getAvailablePlaybackRates",this.getAvailablePlaybackRates);yA(this,"getPlaybackQuality",function(){return c.getPlaybackQuality(1)});
yA(this,"setPlaybackQuality",this.setPlaybackQuality);yA(this,"getAvailableQualityLevels",this.getAvailableQualityLevels);yA(this,"getCurrentTime",this.getCurrentTime);yA(this,"getDuration",this.getDuration);yA(this,"addEventListener",this.iD);yA(this,"removeEventListener",this.DG);yA(this,"getDebugText",this.getDebugText);yA(this,"getVideoData",function(){return c.Sp()});
yA(this,"addCueRange",this.addCueRange);yA(this,"removeCueRange",this.removeCueRange);yA(this,"setSize",this.setSize);yA(this,"getApiInterface",this.getApiInterface);yA(this,"destroy",this.destroy);yA(this,"showVideoInfo",this.showVideoInfo);yA(this,"hideVideoInfo",this.hideVideoInfo);yA(this,"isVideoInfoVisible",this.isVideoInfoVisible);yA(this,"getSphericalProperties",this.getSphericalProperties);yA(this,"setSphericalProperties",this.setSphericalProperties);yA(this,"getVideoEmbedCode",this.getVideoEmbedCode);
yA(this,"getVideoUrl",this.getVideoUrl);zA(this,"getInternalApiInterface",this.getInternalApiInterface);zA(this,"cueVideoByPlayerVars",this.cueVideoByPlayerVars);zA(this,"loadVideoByPlayerVars",this.loadVideoByPlayerVars);zA(this,"preloadVideoByPlayerVars",this.preloadVideoByPlayerVars);zA(this,"getAdState",this.getAdState);zA(this,"sendAbandonmentPing",this.sendAbandonmentPing);zA(this,"setLoopRange",this.setLoopRange);zA(this,"getLoopRange",this.getLoopRange);zA(this,"setAutonavState",this.setAutonavState);
zA(this,"seekToLiveHead",this.seekToLiveHead);zA(this,"seekToStreamTime",this.seekToStreamTime);zA(this,"seekToChapterWithAnimation",this.seekToChapterWithAnimation);zA(this,"getStreamTimeOffset",this.getStreamTimeOffset);zA(this,"getVideoData",this.Sp);zA(this,"setIsExternalPlaylist",this.setIsExternalPlaylist);zA(this,"deleteLocalMediaById",this.deleteLocalMediaById);zA(this,"deleteAllLocalMedia",this.deleteAllLocalMedia);zA(this,"cancelPendingLocalMediaById",this.cancelPendingLocalMediaById);zA(this,
"fetchLocalMedia",this.ED);zA(this,"fetchLocalMediaById",this.fetchLocalMediaById);zA(this,"downloadVideo",this.downloadVideo);zA(this,"refreshAllVideos",this.refreshAllVideos);zA(this,"deleteVideos",this.deleteVideos);zA(this,"deleteAllVideos",this.deleteAllVideos);zA(this,"startOrchestration",this.startOrchestration);zA(this,"stopOrchestration",this.stopOrchestration);zA(this,"getLocalPlayerResponse",this.getLocalPlayerResponse);zA(this,"getLocalMediaInfoById",this.getLocalMediaInfoById);zA(this,
"getAllLocalMediaInfo",this.getAllLocalMediaInfo);zA(this,"getAppState",this.getAppState);zA(this,"addInfoCardXml",this.addInfoCardXml);zA(this,"updateLastActiveTime",this.updateLastActiveTime);zA(this,"setBlackout",this.setBlackout);zA(this,"setAccountLinkState",this.setAccountLinkState);zA(this,"updateAccountLinkingConfig",this.updateAccountLinkingConfig);zA(this,"setUserEngagement",this.setUserEngagement);zA(this,"updateSubtitlesUserSettings",this.updateSubtitlesUserSettings);zA(this,"setFauxFullscreen",
this.setFauxFullscreen);zA(this,"setUseFastSizingOnWatch",this.setUseFastSizingOnWatch);zA(this,"getPresentingPlayerType",this.getPresentingPlayerType);zA(this,"canPlayType",this.canPlayType);zA(this,"updatePlaylist",this.updatePlaylist);zA(this,"updateVideoData",this.updateVideoData);zA(this,"updateEnvironmentData",this.updateEnvironmentData);zA(this,"sendVideoStatsEngageEvent",this.sendVideoStatsEngageEvent);zA(this,"setCardsVisible",this.setCardsVisible);zA(this,"productsInVideoVisibilityUpdated",
this.productsInVideoVisibilityUpdated);zA(this,"setSafetyMode",this.setSafetyMode);zA(this,"isAtLiveHead",function(d){c.isAtLiveHead(void 0,d)});
zA(this,"getVideoAspectRatio",this.getVideoAspectRatio);zA(this,"getPreferredQuality",this.getPreferredQuality);zA(this,"setPlaybackQualityRange",this.setPlaybackQualityRange);zA(this,"onAdUxClicked",this.onAdUxClicked);zA(this,"getFeedbackProductData",this.getFeedbackProductData);zA(this,"getStoryboardFrame",this.getStoryboardFrame);zA(this,"getStoryboardFrameIndex",this.getStoryboardFrameIndex);zA(this,"getStoryboardLevel",this.getStoryboardLevel);zA(this,"getNumberOfStoryboardLevels",this.getNumberOfStoryboardLevels);
zA(this,"getCaptionWindowContainerId",this.getCaptionWindowContainerId);zA(this,"getLoopVideo",this.getLoopVideo);zA(this,"setLoopVideo",this.setLoopVideo);zA(this,"getVisibilityState",this.getVisibilityState);zA(this,"isMutedByMutedAutoplay",this.isMutedByMutedAutoplay);zA(this,"setInternalSize",this.setInternalSize)};
yA=function(a,b,c){a.C[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];a.K();return c.apply(a,e)};
a.l.hasOwnProperty(b)||zA(a,b,c);a.I.push(b)};
BA=function(a,b,c){a.G[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];a.K();return c.apply(a,e)};
a.l.hasOwnProperty(b)||zA(a,b,c);a.I.push(b)};
zA=function(a,b,c){a.l[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];a.K();return c.apply(a,e)}};
DA=function(a,b,c){b=g.bf(Math.floor(b),0,100);isFinite(b)&&CA(a.app,{volume:b,muted:a.isMuted()},c)};
EA=function(a,b){CA(a.app,{muted:!0,volume:a.getVolume()},b)};
FA=function(a,b){CA(a.app,{muted:!1,volume:Math.max(5,a.getVolume())},b)};
g.HA=function(a){var b=GA(a.app.Za());if(b)return b.chrome;a=a.app.Za();a=g.fy(a.L.V())?a.lc.get("music"):void 0;return a?a.chrome:null};
IA=function(a,b,c){(a=a.app.config)&&a.args&&a.args.error_report_func&&(0,a.args.error_report_func)(b,c)};
KA=function(a,b){AA.call(this,a,b);var c=this;this.i=!1;BA(this,"cueVideoByPlayerVars",function(d,e){c.cueVideoByPlayerVars(JA(d),e)});
BA(this,"loadVideoByPlayerVars",function(d,e,f,h){c.loadVideoByPlayerVars(JA(d),e,f,h)});
BA(this,"preloadVideoByPlayerVars",function(d,e,f,h){return void c.preloadVideoByPlayerVars(JA(d),e,f,h)});
BA(this,"seekBy",this.seekBy);BA(this,"mutedAutoplay",this.mutedAutoplay);BA(this,"showControls",this.showControls);BA(this,"hideControls",this.hideControls);BA(this,"cancelPlayback",this.cancelPlayback);BA(this,"getProgressState",this.getProgressState);BA(this,"isInline",this.isInline);BA(this,"setInline",this.setInline);BA(this,"toggleFullscreen",this.toggleFullscreen);BA(this,"isFullscreen",this.isFullscreen);BA(this,"getVideoStats",this.getVideoStats);BA(this,"getPlayerSize",this.getPlayerSize);
BA(this,"toggleSubtitles",this.toggleSubtitles);BA(this,"setCenterCrop",this.setCenterCrop)};
JA=function(a){var b,c={},d=g.u(sfa);for(b=d.next();!b.done;b=d.next())b=b.value,a.hasOwnProperty(b)&&(c[b]=a[b]);return c};
g.LA=function(a){KA.call(this,a)};
MA=function(a){a=a.Za();var b=a.lc.get("endscreen");return b&&b.No()?!0:a.Mo()||g.fy(a.L.V())};
g.NA=function(a,b){3===a.getPresentingPlayerType()?a.U("mdxautoplaycancel"):a.U("autonavcancel",b)};
g.PA=function(a){var b=g.OA(a.Za());return a.app.xe&&!a.isFullscreen()||3===a.getPresentingPlayerType()&&b&&b.hasNext()&&(b.loop||0<=b.index-1)||!!a.getPlaylist()};
g.QA=function(a,b,c){a=a.Db().element;var d=Eb(a.children,function(e){e=Number(e.getAttribute("data-layer"));return c-e||1});
0>d&&(d=-(d+1));g.vf(a,b,d);b.setAttribute("data-layer",String(c))};
g.RA=function(a){var b=a.V();if(!b.Gc)return!1;var c=a.getVideoData();if(!c||3===a.getPresentingPlayerType())return!1;var d=!c.isLiveDefaultBroadcast||g.P(b.experiments,"allow_poltergust_autoplay");d=c.isLivePlayback&&(!g.P(b.experiments,"allow_live_autoplay")||!d);var e=c.isLivePlayback&&g.P(b.experiments,"allow_live_autoplay_on_mweb");a=a.getPlaylist();a=!!a&&a.hasNext();var f=c.watchNextResponse&&c.watchNextResponse.playerOverlays||null;f=!!(f&&f.playerOverlayRenderer&&f.playerOverlayRenderer.autoplay);
f=c.N&&f;return!c.ypcPreview&&(!d||e)&&!g.pb(c.T,"ypc")&&!a&&(!Yx(b)||f)};
g.SA=function(a){return(a=tfa[a.toString()])?a:"LICENSE"};
g.TA=function(){g.Rn.apply(this,arguments)};
UA=function(a,b){this.u=a;this.timerName="";this.l=!1;this.i=b||null;this.l=!1};
ufa=function(a){a=a.timerName;Up("yt_sts","p",a);g.Vp("_start",void 0,a)};
g.VA=function(a,b,c){if(b.B.Xb&&!a.l){a.l=!0;g.I("TIMING_ACTION")||Xi("TIMING_ACTION",a.u.csiPageType);a.u.csiServiceName&&Xi("CSI_SERVICE_NAME",a.u.csiServiceName);if(a.i){b=a.i.Cl();for(var d=g.u(Object.keys(b)),e=d.next();!e.done;e=d.next())e=e.value,g.Vp(e,b[e],a.timerName);b=a.i.un;d=g.u(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,Up(e,b[e],a.timerName);b=a.i;b.i={};b.un={}}Up("yt_pvis",sca(),a.timerName);Up("yt_pt","html5",a.timerName);c&&!dq("pbs",a.timerName)&&a.tick("pbs",
c);c=a.u;!g.Dy(c)&&!$x(c)&&dq("_start",a.timerName)&&fq(a.timerName)}};
g.XA=function(a,b,c){this.start=a;this.end=b;this.active=!0;this.color="";this.B=vfa++;a=c||{};this.id=a.id||"";this.priority=a.priority||7;this.visible=a.visible||!1;this.style=a.style||WA.AD_MARKER;this.namespace=a.namespace||"";if(b=a.color)b=b.toString(16),this.color="#"+Array(7-b.length).join("0")+b;this.tooltip=a.tooltip;this.icons=a.icons?a.icons.filter(function(d){return g.yu(d.thumbnails,function(e){return g.Ks(e.url)})}):null;
this.visible=this.visible;this.style=this.style;this.start=this.start};
YA=function(a){return-0x8000000000000===a?"BEFORE_MEDIA_START":0===a?"MEDIA_START":0x7ffffffffffff===a?"MEDIA_END":0x8000000000000===a?"AFTER_MEDIA_END":a.toString()};
g.ZA=function(a,b){return a.start-b.start||a.priority-b.priority||a.B-b.B};
g.$A=function(a){return"crn_"+a};
g.aB=function(a,b){this.type=a||"";this.id=b||""};
g.bB=function(a,b){g.N.call(this);this.l=a;this.startSeconds=0;this.shuffle=!1;this.index=0;this.title="";this.length=0;this.items=[];this.loaded=!1;this.ov=this.Us=this.i=null;this.dislikes=this.likes=this.views=0;this.order=[];this.author="";this.u={};if(a=b.session_data)this.ov=hj(a,"&");this.index=Math.max(0,Number(b.index)||0);this.loop=!!b.loop;this.startSeconds=Number(b.startSeconds)||0;this.title=b.playlist_title||"";this.description=b.playlist_description||"";this.author=b.author||b.playlist_author||
"";b.video_id&&(this.items[this.index]=b);if(a=b.api)"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;if(a=b.list)switch(b.listType){case "user_uploads":this.listId=new g.aB("UU","PLAYER_"+a);break;default:var c=b.playlist_length;c&&(this.length=Number(c)||0);this.listId=new g.aB(a.substr(0,2),a.substr(2));if(a=b.video)this.items=a.slice(0),this.loaded=!0}else if(b.playlist){a=b.playlist.toString().split(",");0<this.index&&(this.items=[]);a=g.u(a);for(c=a.next();!c.done;c=a.next())(c=
c.value)&&this.items.push({video_id:c});this.length=this.items.length;if(a=b.video)this.items=a.slice(0),this.loaded=!0}this.setShuffle(!!b.shuffle);if(a=b.suggestedQuality)this.quality=a;this.u=Yy(b,"playlist_");this.B=(b=b.thumbnail_ids)?b.split(","):[]};
cB=function(a){return!!(a.playlist||a.list||a.api)};
wfa=function(a){var b=a.index+1;return b>=a.length?0:b};
dB=function(a,b){a.index=g.bf(b,0,a.length-1);a.startSeconds=0};
eB=function(a,b){if(b.video&&b.video.length){a.title=b.title||"";a.description=b.description;a.views=b.views;a.likes=b.likes;a.dislikes=b.dislikes;a.author=b.author||"";var c=b.loop;c&&(a.loop=c);c=a.Qa();a.items=[];for(var d=g.u(b.video),e=d.next();!e.done;e=d.next())if(e=e.value)e.video_id=e.encrypted_id,a.items.push(e);a.length=a.items.length;if(b=b.index)a.index=b;else if(c&&(b=c.videoId,!a.items[a.index]||a.items[a.index].video_id!==b))for(c=0;c<a.items.length;c++)if(a.items[c].video_id===b){a.index=
c;break}a.setShuffle(!1);a.loaded=!0;a.i&&a.i()}};
fB=function(a,b){a.i=b;a.loaded&&g.yj(a.i,0)};
hB=function(a,b){return D(this,function d(){var e,f,h,l,m;return A(d,function(n){if(1==n.i){e=g.sp();var p=a.V(),q={context:g.yr(a)};p=p.embedConfig;var r,t,v,y,C,z;var E=b.docid||b.video_id||b.videoId||b.id;if(!E){E=b.raw_embedded_player_response;if(!E&&!g.J("parse_video_id_from_serialized_embedded_player_response_killswitch")){var O=b.embedded_player_response;O&&(E=JSON.parse(O))}E=E?(null===(z=null===(C=null===(y=null===(v=null===(t=null===(r=null===E||void 0===E?void 0:E.embedPreview)||void 0===
r?void 0:r.thumbnailPreviewRenderer)||void 0===t?void 0:t.playButton)||void 0===v?void 0:v.buttonRenderer)||void 0===y?void 0:y.navigationEndpoint)||void 0===C?void 0:C.watchEndpoint)||void 0===z?void 0:z.videoId)||null:null}r=(r=E)?r:void 0;t=a.playlistId?a.playlistId:b.list;v=b.listType;if(t){var L;"user_uploads"===v?L={username:t}:L={playlistId:t};gB(p,r,b,L);q.playlistRequest=L}else b.playlist?(L={templistVideoIds:b.playlist.toString().split(",")},gB(p,r,b,L),q.playlistRequest=L):r&&(L={videoId:r},
p&&(L.serializedThirdPartyEmbedConfig=p),q.singleVideoRequest=L);f=q;h=dp(xfa);return x(n,g.ip(e,f,h),2)}l=n.l;m=a.V();return n.return(new g.rz(m,{raw_embedded_player_response:l}))})})};
gB=function(a,b,c,d){c.index&&(d.playlistIndex=String(Number(c.index)+1));d.videoId=b?b:"";a&&(d.serializedThirdPartyEmbedConfig=a)};
g.iB=function(a){g.N.call(this);this.loaded=!1;this.player=a};
jB=function(){this.i=.125;this.l=!1;this.u=0;this.Ud=!1};
kB=function(a,b){var c=void 0===b?{}:b;b=void 0===c.hasSubfragmentedFmp4?!1:c.hasSubfragmentedFmp4;c=void 0===c.Hg?!1:c.Hg;var d=new jB;d.l=a.S("html5_streaming_xhr_no_mp4_holdback_chunk");d.u=g.Q(a.experiments,"html5_time_based_consolidation_ms");a.S("html5_resume_streaming_requests")&&(d.i=0);d.Ud=b||c;return d};
g.lB=function(){this.B=new jB;this.Vl=this.Ul=!1;this.Hj=2;this.D=20971520;this.G=8388608;this.C=120;this.bb=3145728;this.W=62914560;this.qb=10485760;this.Ij=this.il=this.Kd=0;this.Yk=!1;this.N=NaN;this.hg=0;this.Xg=this.al=2;this.Oe=3;this.Gm=2;this.xa=2097152;this.Dm=1048576;this.Ua=!1;this.qc=1800;this.Fj=5;this.X=15;this.zc=1;this.l=1.15;this.u=1.05;this.zl=!0;this.Ba=!1;this.Hm=.8;this.zj=this.Sb=!1;this.ub=6;this.vf=this.Ya=!1;this.fg=.5;this.Tb=0;this.Wg=this.Vb=!1;this.Xd=this.Jd=0;this.Xk=
2;this.Gb=5E3;this.xj=6;this.yl=!1;this.jf=1;this.nf=1.6;this.Xa=!1;this.T=.5;this.Xb=2;this.Wb=this.Pk=0;this.Qk=1.5;this.Wk=this.cg=.5;this.Hc=15;this.Ej=1;this.Jm=this.Wd=!1;this.Gj=0;this.vj=this.qh=this.Nk=this.lm=this.Bj=this.fm=this.Nl=!1;this.qe=0;this.Ik=this.Dj=this.Lk=this.eh=!1;this.Oc=0;this.Aa=this.Bb=this.Tg=this.dl=this.Je=this.Ma=this.Ok=this.Vd=this.Jk=!1;this.Pa=!0;this.pc=this.Da=this.Wl=this.Ka=!1;this.uj=!0;this.Re=!1;this.i="";this.Um=1048576;this.Aj=this.Ug=this.hf=this.sj=
!1;this.ld=46800;this.ea=this.rj=this.Xh=this.Gc=this.Mc=!1;this.Zk=!0;this.tj=this.pj=this.Am=this.Im=this.dh=this.Yg=this.Mk=!1;this.Ha=0;this.wj="";this.Vg=this.Sg=this.yj=this.Ie=this.dg=this.ma=this.qj=this.bh=!1;this.Nc=0;this.Ke=this.I=this.Zg=this.Kk=this.Cj=this.Vf=!1};
yfa=function(a,b){1080<b.Qa().i&&!a.Ul&&(a.D=36700160,a.G=5242880,a.bb=10485760,a.xa=4194304,a.Ul=!0);2160<b.Qa().i&&!a.Vl&&(a.D=104857600,a.N=13107200,a.Vl=!0);a.Dm=Math.max(65536,Math.min(a.xa,5*b.l))};
g.mB=function(a,b){return Fv(a.info.mimeType)?b?a.info.wb()===b:!0:!1};
g.nB=function(a,b){if(null!=a.i&&g.By(b.V())&&!a.i.isManifestless&&null!=a.i.i.rawcc)return!0;if(!a.Lg())return!1;b=!!a.i&&a.i.isManifestless&&Object.values(a.i.i).some(function(c){return g.mB(c,"386")});
a=!!a.i&&!a.i.isManifestless&&Oda(a.i);return b||a};
g.oB=function(a,b){g.F.call(this);this.L=a;this.l=b;this.un={};this.i={};this.u=null;this.lc=new Map;this.B=g.P(a.V().experiments,"web_player_defer_modules")};
pB=function(a){return a.lc.get("captions")};
Afa=function(a,b){switch(b){case "ad":return qB(a);case "annotations_module":return!1;case "attribution":return a=a.L.V(),g.P(a.experiments,"web_player_show_music_in_this_video")&&"desktop-polymer"===a.playerStyle;case "creatorendscreen":return!1;case "embed":return Yx(a.L.V());case "endscreen":return zfa(a);case "heartbeat":return a.uv();case "inline_preview":return a.L.V().showInlinePreviewUi;case "kids":return!1;case "remote":return a.L.V().Nc;case "miniplayer":return a.L.V().showMiniplayerUiWhenMinimized;
case "music":return g.fy(a.L.V());case "captions":return b=a.L.getVideoData(),!!b.Je||!!b.captionTracks.length||g.nB(b,a.L);case "unplugged":return g.ny(a.L.V());case "ux":return a.L.V().ma;case "webgl":return!1;case "ypc":return a.Mo();case "ypc_clickwrap":return a=a.L.getVideoData(),a.Vg&&!a.Um;case "yto":return!!a.L.getVideoData().T.includes("yto");default:return g.so(Error("Module descriptor "+b+" does not match")),!1}};
rB=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;var f=a.lc.get(b);if(!f||e)if(c||(c=function(){rB(a,b,void 0,d,e)}),f=f||Bfa(a,b,c,Afa(a,b)))a.lc.set(b,f),f.create(),d&&a.L.Ga("onApiChange")};
sB=function(a){a.B&&(rB(a,"endscreen"),a.Ls(),rB(a,"creatorendscreen",void 0,!0))};
zfa=function(a){var b=a.L.V();if(g.Dy(b)||g.P(b.experiments,"mweb_c3_endscreen")||!b.Yg&&!b.Zg)return!1;var c=a.L.getPresentingPlayerType();if(2===c)return!1;if(3===c)return g.P(b.experiments,"desktop_enable_autoplay");a=a.L.getVideoData();if(!a)return!1;c=!a.isLiveDefaultBroadcast||g.P(b.experiments,"allow_poltergust_autoplay");c=a.isLivePlayback&&(!g.P(b.experiments,"allow_live_autoplay")||!c);b=a.isLivePlayback&&g.P(b.experiments,"allow_live_autoplay_on_mweb");return!c||b};
tB=function(a){return a.lc.get("webgl")};
uB=function(a){g.P(a.L.V().experiments,"web_player_ux_module_wait")&&a.lc.get("ux")&&a.L.jd("ux")};
Cfa=function(a){uB(a);rB(a,"ux",void 0,!0)};
qB=function(a){if(a=a.L.getVideoData(1).getPlayerResponse())if(a=a.adPlacements)for(var b=0;b<a.length;b++)if(a[b].adPlacementRenderer)return!0;return!1};
Bfa=function(a,b,c,d){try{if(d){var e=g.vB[b];if(e)return new e(a.L);"creatorendscreen"===b?a.l&&wB(a,a.l+"annotations_module.js","annotations_module",c):a.l&&wB(a,a.l+b+".js",b,c)}else a.L.jd(b)}catch(f){a.L.jd(b),g.so(f)}return null};
xB=function(a,b,c){for(var d=g.u(a.lc),e=d.next();!e.done;e=d.next()){var f=g.u(e.value);e=f.next().value;(f=f.next().value)&&(c||f.xm(b))&&(g.tg(f),a.lc.delete(e))}};
yB=function(a){return a.lc.get("ad")};
g.OA=function(a){if(a.L.V().Nc)return a.lc.get("remote")};
zB=function(a){if(g.ny(a.L.V()))return a.lc.get("unplugged")};
GA=function(a){if(a.L.V().ma)return a.lc.get("ux")};
AB=function(a){return a.lc.get("annotations_module")};
BB=function(a){return a.lc.get("creatorendscreen")};
Dfa=function(a){var b=a.l.split("/").slice(0,4).join("/")+"/wasm/lib.js";return new Promise(function(c){wB(a,b,null,function(){return D(a,function e(){var f;return A(e,function(h){if(1==h.i)return x(h,g.B.i(),2);f=h.l;c(f);h.i=0})})})})};
wB=function(a,b,c,d){function e(){!a.ya()&&c&&a.L.jd(c)}
function f(){a.ya()||d.call(a)}
for(var h=document.getElementsByTagName("SCRIPT"),l=!1,m,n=0;n<h.length;n++){var p=h[n];if(p.src===b||p.getAttribute("data-original-src")===b)m=p}m||(m=g.sf("SCRIPT"),m.setAttribute("data-original-src",b),l=!0);var q=m.onload;m.onload=function(y){g.Xg(f);q&&q.apply(window,[y])};
var r=m.onerror;m.onerror=function(y){if(.01>Math.random()){var C=new g.hm("Unable to load player module",(c||"lib")+".js from "+b+" on "+(document.location&&document.location.origin)+".");g.so(C)}g.Xg(e);r&&r(y)};
var t=m,v=t.onreadystatechange;t.onreadystatechange=function(y){switch(t.readyState){case "loaded":case "complete":g.Xg(f)}v&&v(y)};
l&&((h=a.L.V().cspNonce)&&m.setAttribute("nonce",h),g.Dd(m,Pf(b)),h=document.getElementsByTagName("HEAD")[0]||document.body,h.insertBefore(m,h.firstChild),g.vg(a,function(){m.parentNode&&m.parentNode.removeChild(m);c&&(g.vB[c]=null);"annotations_module"===c&&(g.vB.creatorendscreen=null)}))};
CB=function(){g.F.call(this);this.l=null;this.D=this.C=!1;this.u=new g.Sg;g.G(this,this.u)};
DB=function(a){a=a.Nn();return 1>a.length?NaN:a.end(a.length-1)};
EB=function(a,b,c){a.ci()||a.getCurrentTime()>b||10<c||(a.play(),g.yj(function(){EB(a,a.getCurrentTime(),c+1)},500))};
FB=function(a,b){a.l&&null!==b&&b.i===a.l.i||(a.l&&a.l.dispose(),a.l=b)};
GB=function(a){return Vv(a.ye(),a.getCurrentTime())};
Efa=function(a,b){if(0===a.df()||0<a.Kf())return!1;var c=0<a.getCurrentTime();return 0<=b&&(a=a.Nn(),a.length||!c)?Sv(a,b):c};
HB=function(a){var b=a.ye();return 0<Uv(b)&&a.getDuration()?b.end(b.length-1):0};
IB=function(a){var b=a.getDuration();return Infinity===b?1:b?a.Il()/b:0};
JB=function(a){switch(a.Kf()){case 2:return"progressive.net.retryexhausted";case 3:return"fmt.decode";case 4:return"fmt.unplayable";case 5:return"drm.unavailable";case 1E3:return"capability.changed";default:return null}};
KB=function(a,b,c){zg.call(this,b,a);this.i=c};
g.LB=function(a){CB.call(this);var b=this;this.i=a;this.B={};this.listener=function(c){b.dispatchEvent(new KB(b,c.type,c))}};
g.MB=function(a,b){var c=Math.abs(Math.floor(a)),d=Math.floor(c/86400),e=Math.floor(c%86400/3600),f=Math.floor(c%3600/60);c=Math.floor(c%60);if(b){b="";0<d&&(b+=" "+d+" Days");if(0<d||0<e)b+=" "+e+" Hours";d=(b+(" "+f+" Minutes ")+(c+" Seconds")).trim()}else{b="";0<d&&(b+=d+":",10>e&&(b+="0"));if(0<d||0<e)b+=e+":",10>f&&(b+="0");b+=f+":";10>c&&(b+="0");d=b+c}return 0<=a?d:"-"+d};
NB=function(a){return(!("button"in a)||"number"!==typeof a.button||0===a.button)&&!("shiftKey"in a&&a.shiftKey)&&!("altKey"in a&&a.altKey)&&!("metaKey"in a&&a.metaKey)&&!("ctrlKey"in a&&a.ctrlKey)};
PB=function(a,b,c,d){g.N.call(this);var e=this;this.target=a;this.vp=b;this.l=0;this.D=!1;this.B=new g.df(NaN,NaN);this.i=new g.TA(this);this.ea=this.u=this.G=null;g.G(this,this.i);b=d?4E3:3E3;this.N=new g.H(function(){OB(e,1,!1)},b,this);
g.G(this,this.N);this.T=new g.H(function(){OB(e,2,!1)},b,this);
g.G(this,this.T);this.X=new g.H(function(){OB(e,512,!1)},b,this);
g.G(this,this.X);this.W=c&&0<c.Ik.length?5E3:3E3;d||(this.u=this.i.Y(a,"mouseover",this.yq),this.i.Y(a,"mousemove",this.oE),this.i.Y(a,"mouseleave",this.pE));g.Uf?this.i.Y(a,"keypress",this.gE):this.i.Y(a,"focusin",this.FD);this.C=this.i.Y(a,"mousedown",this.Az);this.I=this.i.Y(a,"touchstart",this.dB,void 0,!0);OB(this,640,!0)};
QB=function(a){OB(a,4,!1);a.G&&(a.i.Fc(a.G),a.G=null,a.u=a.i.Y(a.target,"mouseover",a.yq));a.u&&(a.i.Fc(a.u),a.u=a.i.Y(a.target,"mouseover",a.yq))};
OB=function(a,b,c){a.ya();var d=!a.l;c?(a.l|=b,b&1&&a.N.start(),b&2&&a.T.start()):(a.l&=~b,b&1&&a.N.stop(),b&2&&a.T.stop(),b&512&&a.X.stop());a.l&512&&!(a.l&128)&&g.Ih(a.X,a.W);b=!a.l;d!==b&&a.U("autohideupdate",b)};
g.RB=function(a,b,c,d,e,f){g.F.call(this);this.element=a;this.state=null;c||a.hide();this.u=b;this.B=void 0===d?b:d;this.i=f;this.l=e;this.delay=new g.H(this.qr,0,this);g.G(this,this.delay)};
SB=function(a,b){a=a.element.element;b?a.setAttribute("aria-hidden","true"):a.removeAttribute("aria-hidden")};
g.TB=function(a){g.F.call(this);this.Da={};this.Pa={};this.element=this.createElement(a)};
UB=function(a,b,c,d){if("{{"===d.substr(0,2))a.Pa[d]=[b,c];else return d};
g.WB=function(a,b,c){(b=a.Pa["{{"+b+"}}"])&&VB(a,b[0],b[1],c)};
Ffa=function(a,b){var c=[];if(!b)return c;b=g.u(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,null!=d){var e=d.nodeType;1===e||3===e?c.push(d):d&&"string"===typeof d.J?c.push(a.createElement(d)):d.element?c.push(d.element):"string"===typeof d&&-1!==d.indexOf("\n")?d.split("\n").forEach(function(f,h){0<h&&c.push(g.sf("BR"));c.push(g.tf(f))}):c.push(g.tf(d))}return c};
VB=function(a,b,c,d){if("child"===c){g.uf(b);var e;void 0===d?e=void 0:e=!Array.isArray(d)||d&&"string"===typeof d.J?[d]:d;c=Ffa(a,e);c=g.u(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else"style"===c?g.Rf(b,"cssText",d?d:""):null===d||void 0===d?b.removeAttribute(c):(a=d.toString(),"href"===c&&(a=g.Qc(g.Uc(a)||g.ld)),b.setAttribute(c,a))};
g.XB=function(a){g.TB.call(this,a);this.u=!0;this.listeners=[]};
YB=function(a){g.XB.call(this,{J:"button",xb:["ytp-large-play-button","ytp-button"],Ea:{"aria-label":"Play"},va:["{{largePlayButtonChildren}}"]});this.api=a;this.Y(a,"videodatachange",this.oe);this.oe()};
ZB=function(a){var b=["ytp-cued-thumbnail-overlay"];g.P(a.V().experiments,"web_player_contain_thumbnail")&&b.push("ytp-exp-contain-thumbnail");g.XB.call(this,{J:"div",xb:b,va:[{J:"div",Z:"ytp-cued-thumbnail-overlay-image"}]});b=this.La("ytp-cued-thumbnail-overlay");var c=new YB(a);g.G(this,c);c.Na(b);this.B=new g.TA(this);g.G(this,this.B);this.api=a;this.D=this.La("ytp-cued-thumbnail-overlay-image");this.C=c;this.l=new g.RB(this,250);g.G(this,this.l);this.i=new g.H(this.oe,0,this);g.G(this,this.i);
this.oe();this.Y(a,"appresize",this.em);this.Y(a,"presentingplayerstatechange",this.TB);this.Y(a,"ypcStateChanged",this.tG);$x(a.V())&&this.Y(a,"videoplayerreset",this.OF)};
g.$B=function(a,b){for(var c={},d=g.u(Object.keys(b)),e=d.next();!e.done;c={Ar:c.Ar},e=d.next())e=e.value,c.Ar=b[e],a=a.replace(new RegExp("\\$"+e,"gi"),function(f){return function(){return f.Ar}}(c));
return a};
g.aC=function(a,b,c){var d=a.currentTarget;if((void 0===c||!c)&&NB(a))return g.dk(a),!0;b.pauseVideo();a=d.getAttribute("href");b=void 0;c=!0;b=void 0===b?{}:b;c=void 0===c?!1:c;(d=g.I("EVENT_ID"))&&(b.ei||(b.ei=d));b&&g.Vo(a,b);if(!c)if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var h=void 0===h?window:h;h=h.location;e=g.ae(a,e)+f;e=e instanceof Pc?e:Vc(e);h.href=g.Qc(e)}return!1};
bC=function(a){g.XB.call(this,{J:"div",xb:["ytp-error"],Ea:{role:"alert"},va:[{J:"div",Z:"ytp-error-content",va:[{J:"div",Z:"ytp-error-icon-container",va:[{J:"svg",Ea:{fill:"#fff",viewBox:"0 0 48 48"},va:[{J:"path",Ea:{d:"M0 0h48v48H0V0z",fill:"none"}},{J:"path",Ea:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z","fill-opacity":"0.7"}}]}]},{J:"div",Z:"ytp-error-content-wrap",
va:[{J:"div",Z:"ytp-error-content-wrap-reason",Oa:"{{content}}"},{J:"div",Z:"ytp-error-content-wrap-subreason",Oa:"{{subreason}}"}]}]}]});this.api=a;this.keys=[]};
Jfa=function(a,b){Gfa(a);var c=b.Ys,d=a.api.V();"GENERIC_WITHOUT_LINK"!==c?"TOO_MANY_REQUESTS"===c?(d=a.api.getVideoData(),a.mm(cC(a,"TOO_MANY_REQUESTS_WITH_LINK",d.Ft(),void 0,void 0,void 0,!1))):"HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!==c?a.mm(Hfa(b.errorMessage)):a.mm(cC(a,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK_SHORT","//www.youtube.com/supported_browsers")):(b=d.hostLanguage,c="//support.google.com/youtube/?p=player_error1",b&&(c=g.ae(c,{hl:b})),a.mm(cC(a,"GENERIC_WITH_LINK_AND_CPN",c,!0)),
!d.B&&Ifa(a,function(e){if(g.aC(e,a.api,!vy(a.api.V()))){e={as3:!1,html5:!0,player:!0,cpn:a.api.getVideoData().clientPlaybackNonce};var f=a.api;f.Ga("onFeedbackArticleRequest",{articleId:3037019,helpContext:"player_error",productData:e});f.isFullscreen()&&f.toggleFullscreen()}}))};
Hfa=function(a){a=a.split(Kfa);for(var b=[],c=0;c<a.length;c+=3){var d=a[c++].split("\n");b.push(d[0]);for(var e=1;e<d.length;e++)b.push({J:"br"}),b.push(d[e]);c<a.length&&b.push({J:"a",Ea:{href:a[c],target:a[c+1]},Oa:a[c+2]})}return{J:"span",va:b}};
cC=function(a,b,c,d,e,f,h){d=void 0===d?!1:d;e=void 0===e?!1:e;h=void 0===h?!0:h;e||(e=a.api.V().B);a=a.api.getVideoData();b=g.$B(g.dC[b]||"",d?{CPN:a.clientPlaybackNonce}:{}).split(/\$(BEGIN|END)_LINK/);d=[];f&&d.push({J:"h2",Oa:f});d.push(b[0]);h&&d.push({J:"br"});d.push({J:"a",Ea:{href:c,target:e?"_blank":null},Oa:b[2]});d.push(b[4]);return{J:"span",va:d}};
Ifa=function(a,b){for(var c=a.element.getElementsByTagName("a"),d=0;d<c.length;d++){var e=a.Y(c[d],"click",b);a.keys.push(e)}};
Gfa=function(a){for(var b=0;b<a.keys.length;b++)a.Fc(a.keys[b]);a.keys=[]};
fC=function(a){g.TA.call(this);this.L=a;this.i=new Set;this.mediaSession=navigator.mediaSession;eC(this,"play",function(){a.playVideo()});
eC(this,"pause",function(){a.pauseVideo()});
eC(this,"seekbackward",function(){a.seekBy(-5*a.getPlaybackRate())});
eC(this,"seekforward",function(){a.seekBy(5*a.getPlaybackRate())});
this.Y(a,"videodatachange",this.Rd);this.Y(a,"presentingplayerstatechange",this.Ng);this.Rd()};
eC=function(a,b,c){a.mediaSession.setActionHandler(b,c?function(){c()}:null);
a.i.add(b)};
gC=function(a){g.XB.call(this,{J:"div",Z:"ytp-paid-content-overlay",Ea:{"aria-live":"assertive","aria-atomic":"true"}});this.L=a;this.videoId=null;this.D=!1;this.C=this.i=null;a.S("enable_new_paid_product_placement")?(this.l=new g.XB({J:"a",Z:"ytp-paid-content-overlay-link",Ea:{href:"{{href}}",target:"_blank"},va:[{J:"div",Z:"ytp-paid-content-overlay-icon",va:[{J:"svg",Ea:{fill:"none",height:"100%",viewBox:"0 0 24 24",width:"100%"},va:[{J:"path",Ea:{d:"M6 9H5V5V4H6H19V5H6V9ZM21.72 16.04C21.56 16.8 21.15 17.5 20.55 18.05C20.47 18.13 18.42 20.01 14.03 20.01C13.85 20.01 13.67 20.01 13.48 20C11.3 19.92 8.51 19.23 5.4 18H2V10H5H6H7V6H21V13H16.72C16.37 13.59 15.74 14 15 14H12.7C13.01 14.46 13.56 15 14.5 15H15.02C16.07 15 17.1 14.64 17.92 13.98C18.82 13.26 20.03 13.22 20.91 13.84C21.58 14.32 21.9 15.19 21.72 16.04ZM15 10C15 9.45 14.55 9 14 9C13.45 9 13 9.45 13 10H15ZM20 11C19.45 11 19 11.45 19 12H20V11ZM19 7C19 7.55 19.45 8 20 8V7H19ZM8 8C8.55 8 9 7.55 9 7H8V8ZM8 10H12C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10V10.28C16.59 10.63 17 11.26 17 12H18C18 10.9 18.9 10 20 10V9C18.9 9 18 8.1 18 7H10C10 8.1 9.1 9 8 9V10ZM5 13.5V11H3V17H5V13.5ZM20.33 14.66C19.81 14.29 19.1 14.31 18.6 14.71C17.55 15.56 16.29 16 15.02 16H14.5C12.62 16 11.67 14.46 11.43 13.64L11.24 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H6V13.5V17.16C8.9 18.29 11.5 18.93 13.52 19C17.85 19.15 19.85 17.34 19.87 17.32C20.33 16.9 20.62 16.4 20.74 15.84C20.84 15.37 20.68 14.91 20.33 14.66Z",
fill:"white"}}]}]},{J:"div",Z:"ytp-paid-content-overlay-text",Oa:"{{text}}"},{J:"div",Z:"ytp-paid-content-overlay-chevron",va:[{J:"svg",Ea:{height:"100%",viewBox:"0 0 24 24",width:"100%"},va:[{J:"path",Ea:{d:"M9.71 18.71l-1.42-1.42 5.3-5.29-5.3-5.29 1.42-1.42 6.7 6.71z",fill:"#fff"}}]}]}]}),this.Y(this.l.element,"click",this.onClick)):this.l=new g.XB({J:"div",xb:["ytp-button","ytp-paid-content-overlay-text"],Oa:"{{text}}"});this.B=new g.RB(this.l,250,!1,100);g.G(this,this.l);this.l.Na(this.element);
g.G(this,this.B);this.L.nh(this.element,this);this.Y(a,"videodatachange",this.Rd);this.Y(a,"presentingplayerstatechange",this.UB)};
hC=function(a,b){var c=Zz(b),d=$z(b);if(a.i)b.videoId&&b.videoId!==a.videoId&&(c=a.i,c.isActive()&&c.Tj(),a.videoId=b.videoId,a.D=!!d);else if(c&&d){var e,f,h,l,m;a.i=new g.H(a.wh,d,a);g.G(a,a.i);b=null===(h=null===(f=null===(e=b.getPlayerResponse())||void 0===e?void 0:e.paidContentOverlay)||void 0===f?void 0:f.paidContentOverlayRenderer)||void 0===h?void 0:h.navigationEndpoint;d=null!==(m=null===(l=null===b||void 0===b?void 0:b.urlEndpoint)||void 0===l?void 0:l.url)&&void 0!==m?m:"#";a.L.Vq(a.element,
(null===b||void 0===b?void 0:b.clickTrackingParams)||null);a.l.update({href:d,text:c})}};
iC=function(a,b){a.i&&(g.S(b,8)&&a.D?(a.D=!1,a.Ep(),a.i.start()):(g.S(b,2)||g.S(b,64))&&a.videoId&&(a.videoId=null))};
kC=function(a){g.XB.call(this,{J:"div",Z:"ytp-spinner",va:[{J:"div",Z:"ytp-spinner-container",va:[{J:"div",Z:"ytp-spinner-rotator",va:[{J:"div",Z:"ytp-spinner-left",va:[{J:"div",Z:"ytp-spinner-circle"}]},{J:"div",Z:"ytp-spinner-right",va:[{J:"div",Z:"ytp-spinner-circle"}]}]}]},{J:"div",Z:"ytp-spinner-message",Oa:"If playback doesn't begin shortly, try restarting your device."}]});this.api=a;this.message=this.La("ytp-spinner-message");this.i=new g.H(this.show,500,this);g.G(this,this.i);this.Y(a,"presentingplayerstatechange",
this.l);this.Y(a,"playbackstalledatstart",this.B);a=a.hc();jC(a)?this.i.start():this.hide()};
jC=function(a){return g.S(a,128)?!1:g.S(a,16)||g.S(a,1)?!0:!1};
g.lC=function(a){g.XB.call(this,a);this.I=new g.N;g.G(this,this.I)};
g.mC=function(a,b,c,d){d=void 0===d?!1:d;g.lC.call(this,b);var e=this;this.L=a;this.N=d;this.C=new g.TA(this);this.D=new g.RB(this,c,!0,void 0,void 0,function(){e.i&&e.element&&(e.i.getAttribute("aria-haspopup"),e.i.setAttribute("aria-expanded","true"),e.focus())});
g.G(this,this.C);g.G(this,this.D)};
nC=function(a){a.i&&(document.activeElement&&g.Cf(a.element,document.activeElement)&&(g.Hf(a.i),a.i.focus()),a.i.removeAttribute("aria-expanded"),a.i=void 0);g.Tn(a.C);a.G=void 0};
oC=function(a){return a.u&&4!==a.D.state};
qC=function(a){var b=g.bx(a.V().experiments,"mweb_muted_autoplay_animation"),c=[],d=[{J:"div",xb:["ytp-unmute-icon"],va:[{J:"svg",Ea:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},va:[{J:"path",zm:!0,Z:"ytp-svg-fill",Ea:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}]},
{J:"div",xb:["ytp-unmute-text"],Oa:"Tap to unmute"}];"none"!==b&&(c.push("ytp-unmute-animated"),d.push({J:"div",xb:["ytp-unmute-box"],va:[]}),"expand"===b?c.push("ytp-unmute-expand"):"shrink"===b&&c.push("ytp-unmute-shrink"));g.mC.call(this,a,{J:"button",xb:["ytp-unmute","ytp-popup","ytp-button"].concat(c),va:[{J:"div",Z:"ytp-unmute-inner",va:d}]},100);this.seen=this.l=!1;this.api=a;this.api.ul(this.element,this,51663);this.Y(a,"onMutedAutoplayChange",this.zo,this);this.Y(a,"presentingplayerstatechange",
this.Ng);this.Cd("click",this.onClick,this);(a=a.isMutedByMutedAutoplay()&&!Yx(this.api.V()))?this.show():this.hide();a&&pC(this);this.B=a};
pC=function(a){a.seen||(a.seen=!0,a.api.ke(a.element,!0))};
g.tC=function(a){g.TA.call(this);var b=this;this.api=a;this.bz=null;this.qD=!1;this.Of=null;this.Ks=this.Lv=!1;this.Nv=null;this.bH=this.Wx=!1;this.uE=0;this.gs=[];var c=a.V(),d=a.Db();this.tx=new g.H(this.VE,0,this);g.G(this,this.tx);g.fy(c)||(this.wl=new ZB(a),g.G(this,this.wl),g.QA(a,this.wl.element,4));if(Lfa(this)){var e=new kC(a);g.G(this,e);e=e.element;g.QA(a,e,4)}var f=a.getVideoData();this.ih=new PB(d,function(l){return b.vp(l)},f,c.eh);
g.G(this,this.ih);this.ih.subscribe("autohideupdate",this.UE,this);var h=new gC(a);g.G(this,h);g.QA(a,h.element,4);this.lr=new qC(a);g.G(this,this.lr);g.QA(this.api,this.lr.element,2);this.Nt=this.api.isMutedByMutedAutoplay();this.Y(a,"onMutedAutoplayChange",this.zo);this.gr=new g.H(this.er,200,this);g.G(this,this.gr);this.Yt=f.videoId;this.HG=new g.H(function(){b.uE=0},350);
g.G(this,this.HG);this.Xx=new g.H(function(){b.bH||rC(b)},350,this);
g.G(this,this.Xx);f=a.getRootNode();f.setAttribute("aria-label","YouTube Video Player");switch(c.color){case "white":g.Nh(f,"ytp-color-white")}g.fy(c)&&g.Nh(f,"ytp-music-player");!g.P(a.V().experiments,"disable_mediasession2")&&navigator.mediaSession&&!navigator.mediaSession.metadata&&navigator.mediaSession.setActionHandler&&(f=new fC(a),g.G(this,f));this.Y(a,"appresize",this.em);this.Y(a,"presentingplayerstatechange",this.Ng);this.Y(a,"videodatachange",this.Rd);this.Y(a,"videoplayerreset",this.FF);
this.Y(a,"autonavvisibility",function(){sC(b)});
this.Y(a,"sizestylechange",function(){sC(b)});
this.Y(d,"click",this.SF,this);c.Hc&&(this.Y(d,"gesturechange",this.TF,this),this.Y(d,"gestureend",this.UF,this));this.Aq=[d.Gs];this.wl&&this.Aq.push(this.wl.element);e&&this.Aq.push(e)};
uC=function(a,b){if(!b)return!1;var c=a.api.uc();if(c.Uk()&&(c=c.wd())&&g.Cf(c,b))return c.controls;for(c=0;c<a.Aq.length;c++)if(g.Cf(a.Aq[c],b))return!1;return g.Mh(b,"ytp-player-content")||g.Mh(b,"html5-endscreen")||b===a.api.getRootNode()?!1:!0};
wC=function(a){var b=2===a.api.getPresentingPlayerType()&&(a.api.Db().Wp||g.P(a.api.V().experiments,"mweb_enable_custom_control_shared")||g.P(a.api.V().experiments,"mweb_enable_custom_control_visitor"))&&vC&&11<=oA;a=Yx(a.api.V())&&a.api.V().S("embeds_enable_mobile_custom_controls")&&a.api.V().u&&vC;return!(!b&&!a)};
xC=function(a,b){return!uC(a,g.ak(b))&&NB(b)};
rC=function(a){a.ih.ir();if(g.P(a.api.V().experiments,"web_player_touch_mode_improvements")&&a.Lv&&a.Ks)a.Ks=!1;else{var b;if(b=!a.api.V().Tb)a.api.Ae()?(g.NA(a.api,!0),b=!0):b=!1,b=!b;if(b)if(b=a.api.hc(),g.S(b,2)&&MA(a.api),!a.api.V().Hc||b.isCued()||g.S(b,1024)){var c=a.api.vv();g.Zl("embedsShouldRequestStorageAccessResult",{result:!!c,returnsUndefined:void 0===c});var d=g.S(b,2048);c&&(b.isCued()||d)?(g.Zl("embedsRequestStorageAccessState",{isCued:b.isCued(),isAutoplayBlocked:d}),a.requestStorageAccess()):
(!c||b.isCued()&&d||g.Zl("embedsRequestStorageAccessFailedState",{state:b.state}),yC(a),a.er())}else a.gr.isActive()?a.gr.stop():a.gr.start()}};
zC=function(a,b){return NB(b)&&a.api.isMutedByMutedAutoplay()?(a.api.unMute(),yC(a),2===a.api.getPresentingPlayerType()&&a.api.playVideo(),b=a.api.hc(),!g.S(b,4)||g.S(b,8)||g.S(b,2)||a.er(),!0):!1};
yC=function(a){a=a.api.Cl();!dq("rfg",a.timerName)||dq("grc",a.timerName)||"blz_watch_tap"!==g.I("TIMING_ACTION")&&!g.I("TIMING_PLAYBACK_REQUIRES_TAP")&&"watch"!==g.I("TIMING_ACTION")||a.tick("grc")};
AC=function(a,b,c){a.api.isFullscreen()?c<1-b&&a.api.toggleFullscreen():c>1+b&&a.api.toggleFullscreen()};
sC=function(a){var b=!!a.Yt&&!a.api.Ae();var c=2===a.api.getPresentingPlayerType(),d=a.api.V();c?BC&&g.P(d.experiments,"enable_visit_advertiser_support_on_ipad_mweb")?b=!1:(c=yB(a.api.Za()),b=b&&c.xv()):b=b&&(d.Xg||a.api.isFullscreen()||d.dg);a.bz!==b&&(a.bz=b,g.Rh(a.api.getRootNode(),"ytp-hide-info-bar",!b))};
Lfa=function(a){var b=Dk()&&67<=Ak(),c=Ck("tizen");a=g.P(a.api.V().experiments,"mweb_enable_custom_control_shared")||g.P(a.api.V().experiments,"mweb_enable_custom_control_visitor");return!c&&!g.Wx&&!b&&!a};
Nfa=function(a,b,c,d){var e=window.location.search;if(38===b.qb&&"books"===a.playerStyle)return e=b.videoId.indexOf(":"),g.ae("//play.google.com/books/volumes/"+b.videoId.slice(0,e)+"/content/media",{aid:b.videoId.slice(e+1),sig:b.NC});if(30===b.qb&&"docs"===a.playerStyle)return g.ae("https://docs.google.com/get_video_info",{docid:b.videoId,authuser:b.ZA,authkey:b.authKey,eurl:a.Xa});if(33===b.qb&&"google-live"===a.playerStyle)return g.ae("//google-liveplayer.appspot.com/get_video_info",{key:b.videoId});
"yt"!==a.C&&g.so(Error("getVideoInfoUrl for invalid namespace: "+a.C));var f={html5:"1",video_id:b.videoId,cpn:b.clientPlaybackNonce,eurl:a.Xa,ps:a.playerStyle,el:xr(b),hl:a.Bb,list:b.playlistId,agcid:b.Vv,aqi:b.adQueryId,sts:18722,lact:g.zk()};g.$a(f,a.deviceParams);a.ea&&(f.forced_experiments=a.ea);b.W?(f.vvt=b.W,b.mdxEnvironment&&(f.mdx_environment=b.mdxEnvironment)):g.jA(b)&&(f.access_token=g.jA(b));b.adFormat&&(f.adformat=b.adFormat);0<=b.slotPosition&&(f.slot_pos=b.slotPosition);b.breakType&&
(f.break_type=b.breakType);null!==b.Dm&&(f.ad_id=b.Dm);null!==b.Im&&(f.ad_sys=b.Im);null!==b.Qk&&(f.encoded_ad_playback_context=b.Qk);b.Wt&&(f.tpra="1");a.captionsLanguagePreference&&(f.cc_lang_pref=a.captionsLanguagePreference);a.T&&2!==a.T&&(f.cc_load_policy=a.T);var h=g.Cl(g.Al.getInstance(),65);g.Br(a)&&null!=h&&!h&&(f.device_captions_on="1");a.mute&&(f.mute=a.mute);b.annotationsLoadPolicy&&2!==a.annotationsLoadPolicy&&(f.iv_load_policy=b.annotationsLoadPolicy);b.Wk&&(f.endscreen_ad_tracking=
b.Wk);(h=a.I.get(b.videoId))&&h.Ov&&(f.ic_track=h.Ov);b.Ka&&(f.itct=b.Ka);zr(b)&&(f.autoplay="1");b.mutedAutoplay&&(f.mutedautoplay=b.mutedAutoplay);b.Rf&&(f.autonav="1");b.dl&&(f.noiba="1");g.P(a.experiments,"send_mdx_remote_data_if_present")?(b.isMdxPlayback&&(f.mdx="1"),b.Td&&(f.ytr=b.Td)):b.isMdxPlayback&&(f.mdx="1",f.ytr=b.Td);b.mdxControlMode&&(f.mdx_control_mode=b.mdxControlMode);b.lh&&(f.ytrcc=b.lh);b.Sr&&(f.utpsa="1");b.Zk&&(f.is_fling="1");b.al&&(f.mute="1");b.vnd&&(f.vnd=b.vnd);b.Nc&&(h=
3===b.Nc.split("|").length,f.force_ad_params=h?b.Nc:"||"+b.Nc);b.Gb&&(f.preload=b.Gb);c.width&&(f.width=c.width);c.height&&(f.height=c.height);b.Mc&&(f.splay="1");b.ypcPreview&&(f.ypc_preview="1");hA(b)&&(f.content_v=hA(b));b.Tb&&(f.livemonitor=1);a.N&&(f.authuser=a.N);a.pageId&&(f.pageid=a.pageId);a.Aa&&(f.ei=a.Aa);a.B&&(f.iframe="1");b.contentCheckOk&&(f.cco="1");b.racyCheckOk&&(f.rco="1");a.l&&b.eh&&(f.live_start_walltime=b.eh);a.l&&b.Oc&&(f.live_manifest_duration=b.Oc);a.l&&b.playerParams&&(f.player_params=
b.playerParams);a.l&&b.cycToken&&(f.cyc=b.cycToken);a.l&&b.Xt&&(f.tkn=b.Xt);0!==d&&(f.vis=d);a.enableSafetyMode&&(f.enable_safety_mode="1");b.Ua&&(f.kpt=b.Ua);b.dg&&(f.kids_age_up_mode=b.dg);b.kidsAppInfo&&(f.kids_app_info=b.kidsAppInfo);b.yj&&(f.upg_content_filter_mode="1");a.widgetReferrer&&(f.widget_referrer=a.widgetReferrer.substring(0,128));b.Ma?(h=null!=b.Ma.latitudeE7&&null!=b.Ma.longitudeE7?b.Ma.latitudeE7+","+b.Ma.longitudeE7:",",h+=","+(b.Ma.clientPermissionState||0)+","+(b.Ma.locationRadiusMeters||
"")+","+(b.Ma.locationOverrideToken||"")):h=null;h&&(f.uloc=h);b.nf&&(f.internalipoverride=b.nf);a.embedConfig&&(f.embed_config=a.embedConfig);a.Vd&&(f.co_rel="1");0<a.qb.length&&(f.ancestor_origins=Array.from(a.qb).join(","));void 0!==a.homeGroupInfo&&(f.home_group_info=a.homeGroupInfo);void 0!==a.livingRoomAppMode&&(f.living_room_app_mode=a.livingRoomAppMode);a.enablePrivacyFilter&&(f.enable_privacy_filter="1");b.isLivingRoomDeeplink&&(f.is_living_room_deeplink="1");b.Yg&&b.Zg&&(f.clip=b.Yg,f.clipt=
b.Zg);b.bh&&(f.disable_watch_next="1");a.S("web_player_gvi_wexit_diff")&&(f.player_request=JSON.stringify(Er(b,c,d)));a.S("html5_onesie_watch_next_diff")&&(f.watch_next_request=JSON.stringify(Fr(b)));for(var l in f)!Mfa.has(l)&&f[l]&&512<String(f[l]).length&&(g.to(Error("GVI param too long: "+l)),f[l]="");b=a.X;g.ny(a)&&(b=Is(b.replace(/\b(?:www|web)([.-])/,"tv$1"))||a.X);a=g.ae(b+"get_video_info",f);e&&(a=Dj(a,e));return a};
Ofa=function(a){var b={};a.kt&&(b.ytrext=a.kt);return g.$b(b)?void 0:b};
g.CC=function(a,b){return cB(b)?(b.fetch=0,new g.bB(a,b)):new g.rz(a,b)};
g.DC=function(a){g.iB.call(this,a);this.chrome=null;this.load()};
EC=function(){var a=Pfa;var b=void 0===b?[]:b;var c=void 0===c?[]:c;b=Li.apply(null,[Eaa.apply(null,g.oa(b))].concat(g.oa(c)));this.store=Oi(a,void 0,b)};
FC=function(a,b,c,d){if(void 0===d){d=a[b]||{};var e=["symbol"===typeof c?c:c+""];c={};for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&0>e.indexOf(f)&&(c[f]=d[f]);if(null!=d&&"function"===typeof Object.getOwnPropertySymbols){var h=0;for(f=Object.getOwnPropertySymbols(d);h<f.length;h++)0>e.indexOf(f[h])&&(c[f[h]]=d[f[h]])}f={};return Object.assign(Object.assign({},a),(f[b]=c,f))}f={};e={};return Object.assign(Object.assign({},a),(e[b]=Object.assign(Object.assign({},a[b]),(f[c]=d,f)),e))};
GC=function(a){this.l=a;this.B=this.i=0;this.u=-1};
HC=function(a){var b=bv(a.l,a.i);++a.i;if(128>b)return b;for(var c=b&127,d=1;128<=b;)b=bv(a.l,a.i),++a.i,d*=128,c+=(b&127)*d;return c};
IC=function(a,b){for(a.B=b;a.i+1<=a.l.totalLength;){var c=a.u;0>c&&(c=HC(a));var d=c>>3,e=c&7;if(d===b)return!0;if(d>b){a.u=c;break}switch(e){case 0:HC(a);break;case 1:a.i+=8;break;case 2:c=HC(a);a.i+=c;break;case 5:a.i+=4}}return!1};
JC=function(a,b,c){c=void 0===c?0:c;return IC(a,b)?HC(a):c};
KC=function(a,b){var c=void 0===c?"":c;if(!IC(a,b))return c;b=HC(a);if(!b)return"";c=$u(a.l,a.i,b);a.i+=b;return g.B.TextDecoder?(new TextDecoder).decode(c):g.je(c)};
LC=function(a,b){var c=void 0===c?null:c;if(!IC(a,b))return c;b=HC(a);c=$u(a.l,a.i,b);a.i+=b;return c};
MC=function(){this.i=0;this.u=void 0;this.l=new Uint8Array(4096);this.view=new DataView(this.l.buffer);g.B.TextEncoder&&(this.u=new TextEncoder)};
NC=function(a,b){b=a.i+b;if(!(a.l.length>=b)){for(var c=2*a.l.length;c<b;)c*=2;b=new Uint8Array(c);b.set(a.l);a.l=b;a.view=new DataView(a.l.buffer)}};
OC=function(a,b){if(268435455<b){NC(a,4);for(var c=b&1073741823,d=0;4>d;d++)a.view.setUint8(a.i,c&127|128),c>>=7,a.i+=1;b=Math.floor(b/268435456)}for(NC(a,4);127<b;)a.view.setUint8(a.i,b&127|128),b>>=7,a.i+=1;a.view.setUint8(a.i,b);a.i+=1};
PC=function(a,b,c){OC(a,b<<3|2);b=c.length;OC(a,b);NC(a,b);a.l.set(c,a.i);a.i+=b};
RC=function(a,b,c){if(a.u)c=a.u.encode(c);else{for(var d=[],e=0,f=0;f<c.length;f++){var h=c.charCodeAt(f);128>h?d[e++]=h:(2048>h?d[e++]=h>>6|192:(55296==(h&64512)&&f+1<c.length&&56320==(c.charCodeAt(f+1)&64512)?(h=65536+((h&1023)<<10)+(c.charCodeAt(++f)&1023),d[e++]=h>>18|240,d[e++]=h>>12&63|128):d[e++]=h>>12|224,d[e++]=h>>6&63|128),d[e++]=h&63|128)}c=new Uint8Array(QC(d).buffer)}PC(a,b,c)};
SC=function(a){return new Uint8Array(a.l.buffer,0,a.i)};
UC=function(a){var b=new GC(new Tu([oe(decodeURIComponent(a))]));a=KC(b,2);b=JC(b,4);return{CD:b,entityType:TC[b],entityId:a}};
WC=function(a,b){var c=new MC;RC(c,2,a);a=VC[b];OC(c,32);OC(c,a);OC(c,40);OC(c,1);c=SC(c);return encodeURIComponent(g.Je(c))};
Qfa=function(a){a=a.key||a.id;if(!a)throw Error("Entity key is missing");return a};
Rfa=function(a){this.i=a;this.l={}};
XC=function(a,b,c){return Dm(a.i,"EntityStore").get(b).then(function(d){if(d){if(c&&d.entityType!==c)throw Error("Incorrect entity type");return d.data}})};
YC=function(a,b,c){return c?(c=c.map(function(d){return XC(a,d,b)}),tn.all(c)):Dm(a.i,"EntityStore").index("entityType").getAll(IDBKeyRange.only(b)).then(function(d){return d.map(function(e){return e.data})})};
$C=function(a,b,c){function d(){return Cm(Dm(a.i,"EntityStore"),f).then(function(h){ZC(a,h,c);return h})}
var e=Qfa(b),f={key:e,entityType:c,data:b};return c?Dm(a.i,"EntityStore").get(e).then(function(h){if(h&&c&&h.entityType!==c)throw Error("Incorrect entity type");}).then(d):d()};
aD=function(a,b,c){b=b.map(function(d){return $C(a,d,c)});
return tn.all(b)};
bD=function(a,b){var c=UC(b).entityType;return Dm(a.i,"EntityStore").delete(b).then(function(){ZC(a,b,c)})};
ZC=function(a,b,c){var d=a.l[c];d||(d=new Set,a.l[c]=d);d.add(b)};
cD=function(){g.F.apply(this,arguments);this.i=[];if(void 0===mn)throw Error("Datasync ID is missing");if("undefined"===typeof BroadcastChannel)var a=null;else a=new BroadcastChannel("PERSISTENT_ENTITY_STORE_SYNC:"+nn()),a.onmessage=this.l.bind(this);this.channel=a};
eD=function(a,b,c){return D(a,function e(){var f,h,l,m,n=this;return A(e,function(p){if(1==p.i)return x(p,Sfa().open(),2);if(3!=p.i)return f=p.l,x(p,Bm(f,["EntityStore"],b,function(q){h=new Rfa(q);return c(h)}),3);
l=p.l;h&&(m=h.l,0<Object.keys(m).length&&(n.channel&&n.channel.postMessage(m),dD(n,m)));return p.return(l)})})};
fD=function(a,b){a.i.push(b);return function(){var c=a.i.indexOf(b);0<=c&&a.i.splice(c,1)}};
gD=function(a,b,c){return eD(a,"readwrite",function(d){return $C(d,b,c)})};
hD=function(a,b){return eD(a,"readwrite",function(c){return aD(c,b,"offlineOrchestrationActionWrapperEntity")})};
iD=function(a,b,c){return eD(a,"readonly",function(d){return XC(d,b,c)})};
jD=function(a,b,c){return eD(a,"readonly",function(d){return YC(d,b,c)})};
dD=function(a,b){a=g.u(a.i);for(var c=a.next();!c.done;c=a.next())c=c.value,c=c(b),kD&&c&&kD.push(c)};
mD=function(){return D(this,function b(){var c;return A(b,function(d){if(1==d.i)return(c=!g.J("enable_web_pes"))?d.fb(2):x(d,ln(),3);2!=d.i&&(c=!d.l);if(c)return d.return();if(lD)return d.return(lD);lD=new cD;return d.return(lD)})})};
Vfa=function(a){var b=Tfa;return D(this,function d(){var e;return A(d,function(f){if(1==f.i){e=a.mutations;if(!e||0>=e.length)return f.return();if(b){var h=e,l={type:"ENTITY_LOADED"};void 0!==h&&(l.payload=h);b.dispatch(l)}return x(f,Ufa(e),2)}e.length=0;f.i=0})})};
Ufa=function(a){return D(this,function c(){var d;return A(c,function(e){return 1==e.i?x(e,mD(),2):(d=e.l)?x(e,eD(d,"readwrite",function(f){for(var h=[],l=g.u(a),m=l.next();!m.done;m=l.next()){m=m.value;var n;if(n=m.entityKey){n=void 0;var p=null===(n=m.options)||void 0===n?void 0:n.persistenceOption;n="ENTITY_PERSISTENCE_OPTION_PERSIST"===p||"ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST"===p}n&&(n=Qb(m.payload),"ENTITY_MUTATION_TYPE_REPLACE"===m.type&&h.push($C(f,m.payload[n],n)),"ENTITY_MUTATION_TYPE_DELETE"===
m.type&&h.push(bD(f,m.entityKey)))}return tn.all(h)}),0):e.return()})})};
nD=function(a){return void 0!==a};
oD=function(a){var b,c,d;return 0<(null!==(d=null===(c=null===(b=a.actionMetadata)||void 0===b?void 0:b.retryScheduleIntervalsInSeconds)||void 0===c?void 0:c.length)&&void 0!==d?d:0)};
pD=function(a){return"OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD"===a.actionType&&!!a.entityKey};
qD=function(a){return"OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH"===a.actionType&&!!a.entityKey};
Wfa=function(){try{g.Yp("entity_key_serialization_perf",["ekspe"],0);g.Yp("entity_key_deserialization_perf",["ekdpe"],0);var a="";g.Vp("eksps",void 0,"entity_key_serialization_perf");for(var b=0;100>b;b++)a=WC("entity_id","playbackData");g.Vp("ekspe",void 0,"entity_key_serialization_perf");g.Vp("ekdps",void 0,"entity_key_deserialization_perf");for(b=0;100>b;b++)UC(a);g.Vp("ekdpe",void 0,"entity_key_deserialization_perf")}catch(c){}};
rD=function(a){this.i=a};
sD=function(a,b,c){this.status=a;this.i=b;this.l=c};
tD=function(a,b){this.i=a;this.u=b};
Xfa=function(a,b){return D(a,function d(){var e,f=this,h;return A(d,function(l){switch(l.i){case 1:return e=b.entityKey,va(l,2),x(l,uD(f,e),4);case 4:return(h=l.l)?x(l,vD(f,h),5):l.return(wD(b,!1));case 5:return l.return(wD(b,!0,h.orchestrationActions));case 2:return xa(l),l.return(wD(b,!1))}})})};
Yfa=function(a,b){return D(a,function d(){var e,f=this,h,l,m,n;return A(d,function(p){switch(p.i){case 1:return e=b.entityKey,x(p,iD(f.i,e,"playbackData"),2);case 2:return h=p.l,x(p,iD(f.i,WC(UC(b.entityKey).entityId,"offlineVideoPolicy"),"offlineVideoPolicy"),3);case 3:l=p.l;if(!h||!l)return p.return(wD(b,!1));m={lastPlayerResponseTimestampSeconds:h.playerResponseTimestamp,offlineToken:l.offlineToken};va(p,4);return x(p,uD(f,e,m),6);case 6:return(n=p.l)?x(p,vD(f,n),7):p.return(wD(b,!1));case 7:return p.return(wD(b,
!0,n.orchestrationActions));case 4:return xa(p),p.return(wD(b,!1))}})})};
uD=function(a,b,c){return D(a,function e(){var f,h=this,l,m;return A(e,function(n){f=g.sp();var p=h.u,q={entityKey:b};c&&(q.refreshData=c);l={context:wr(p),signatureTimestamp:18722,videos:[q]};m=dp(Zfa);return n.return(g.ip(f,l,m))})})};
vD=function(a,b){return D(a,function d(){return A(d,function(e){return b.frameworkUpdates&&b.frameworkUpdates.entityBatchUpdate?x(e,Vfa(b.frameworkUpdates.entityBatchUpdate),0):e.return()})})};
wD=function(a,b,c){return new sD(b?"OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS":"OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",oD(a),c)};
xD=function(){rD.apply(this,arguments)};
$fa=function(a,b){return D(a,function d(){var e,f=this,h;return A(d,function(l){switch(l.i){case 1:return e=oD(b),x(l,iD(f.i,b.entityKey,"transfer"),2);case 2:if(h=l.l)return l.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",e));va(l,3);return x(l,yD(f,b),5);case 5:wa(l,4);break;case 3:return xa(l),l.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",e));case 4:return l.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",e))}})})};
aga=function(a,b){return D(a,function d(){var e,f=this,h;return A(d,function(l){switch(l.i){case 1:return e=oD(b),x(l,iD(f.i,b.entityKey,"transfer"),2);case 2:h=l.l;if(!h||"TRANSFER_STATE_COMPLETE"!==h.transferState)return l.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",e));va(l,3);return x(l,yD(f,b),5);case 5:wa(l,4);break;case 3:return xa(l),l.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",e));case 4:return l.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
e))}})})};
yD=function(a,b){var c;return D(a,function e(){var f,h,l=this;return A(e,function(m){f=null===(c=b.actionMetadata)||void 0===c?void 0:c.transferEntityActionMetadata;h={key:b.entityKey,transferState:"TRANSFER_STATE_TRANSFER_IN_QUEUE",cotn:g.Zn(),enqueuedTimestampMs:Date.now().toString(),maximumDownloadQuality:null===f||void 0===f?void 0:f.maximumDownloadQuality,preferredAudioTrack:null===f||void 0===f?void 0:f.preferredAudioTrack};return x(m,gD(l.i,h,"transfer"),0)})})};
zD=function(){rD.apply(this,arguments)};
cga=function(a,b){return D(a,function d(){var e,f,h,l=this,m;return A(d,function(n){switch(n.i){case 1:return e=oD(b),f=UC(b.entityKey),h=f.entityId,va(n,2),x(n,AD(l,h),4);case 4:wa(n,3);break;case 2:return xa(n),n.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",e));case 3:return m=BD("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD",h),n.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",e,[m]))}})})};
dga=function(a,b){return D(a,function d(){var e,f,h,l=this,m,n;return A(d,function(p){switch(p.i){case 1:return e=oD(b),f=UC(b.entityKey),h=f.entityId,x(p,iD(l.i,b.entityKey,"ytMainDownloadedVideoEntity"),2);case 2:m=p.l;if(!m)return p.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",e));va(p,3);return x(p,AD(l,h),5);case 5:wa(p,4);break;case 3:return xa(p),p.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",e));case 4:return n=BD("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH",h),
p.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",e,[n]))}})})};
fga=function(a,b){return D(a,function d(){var e,f,h,l,m,n=this,p,q,r,t,v,y,C,z;return A(d,function(E){switch(E.i){case 1:return e=oD(b),va(E,2),f=UC(b.entityKey).entityId,h=WC(f,"ytMainVideoEntity"),l=WC(f,"ytMainChannelEntity"),m=WC(f,"transfer"),x(E,eD(n.i,"readonly",function(O){var L=XC(O,h,"ytMainVideoEntity"),ca=XC(O,l,"ytMainChannelEntity");O=XC(O,m,"transfer");return tn.all([L,ca,O])}),4);
case 4:p=E.l;q=g.u(p);r=q.next().value;t=q.next().value;v=q.next().value;if(!r&&!t){E.fb(5);break}y=r?CD(r.thumbnail):[];if(!t){C=[];E.fb(6);break}return x(E,ega(n,t),7);case 7:C=E.l;case 6:return z=C,x(E,Jr(y.concat(z),!0),5);case 5:return x(E,eD(n.i,"readwrite",function(O){var L=[b.entityKey,h,l,WC(f,"playbackData"),m,WC(f,"offlineVideoPolicy")];(null===v||void 0===v?0:v.offlineVideoStreams)&&L.push.apply(L,g.oa(v.offlineVideoStreams));return tn.all(L.map(function(ca){return bD(O,ca)}))}),9);
case 9:wa(E,3);break;case 2:return xa(E),E.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",e));case 3:return E.return(new sD("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",e))}})})};
AD=function(a,b){return D(a,function d(){var e=this,f,h,l,m;return A(d,function(n){if(1==n.i)return x(n,Gr(b),2);if(3!=n.i)return f=n.l,x(n,gga(e,f),3);h=n.l;l=h.videoEntity;m=h.channelEntity;var p=CD(l.thumbnail),q=CD(m.avatar);return x(n,Kr(p.concat(q),!0),0)})})};
gga=function(a,b){var c;return D(a,function e(){var f,h,l,m,n=this;return A(e,function(p){switch(p.i){case 1:if(!(b&&b.channel&&b.channel.offlineChannelData&&b.videoId))throw Error("Invalid OfflineVideoData");f=null===(c=b.channel)||void 0===c?void 0:c.offlineChannelData;h={id:WC(b.videoId,"ytMainChannelEntity"),channelId:f.channelId,title:f.title,avatar:f.thumbnail};l={id:WC(b.videoId,"ytMainVideoEntity"),videoId:b.videoId,title:b.title,thumbnail:b.thumbnail,localizedStrings:{viewCount:b.shortViewCountText},
lengthSeconds:b.lengthSeconds?Number(b.lengthSeconds):void 0,publishedTimestampMillis:b.publishedTimestamp?(1E3*Number(b.publishedTimestamp)).toString():void 0,formattedDescription:b.description,channelOwner:h.id};m={id:WC(b.videoId,"ytMainDownloadedVideoEntity"),video:l.id,playbackData:WC(b.videoId,"playbackData"),offlineVideoPolicy:WC(b.videoId,"offlineVideoPolicy")};return x(p,gD(n.i,h,"ytMainChannelEntity"),2);case 2:return x(p,gD(n.i,l,"ytMainVideoEntity"),3);case 3:return x(p,gD(n.i,m,"ytMainDownloadedVideoEntity"),
4);case 4:return p.return({videoEntity:l,channelEntity:h,AT:m})}})})};
BD=function(a,b){b=WC(b,"playbackData");return{actionType:a,entityKey:b,actionMetadata:{priority:0,retryScheduleIntervalsInSeconds:hga}}};
CD=function(a){if(!a||!a.thumbnails)return[];var b=[];a=g.u(a.thumbnails);for(var c=a.next();!c.done;c=a.next())c=c.value,c.url&&b.push(c.url);return b};
ega=function(a,b){return D(a,function d(){var e=this,f,h,l,m,n,p,q,r,t;return A(d,function(v){if(1==v.i)return f=CD(b.avatar),x(v,jD(e.i,"ytMainChannelEntity"),2);h=v.l;l=g.u(h);for(m=l.next();!m.done;m=l.next())if(n=m.value,n.id!==b.id)for(p=g.u(CD(n.avatar)),q=p.next();!q.done;q=p.next())r=q.value,t=f.indexOf(r),-1!==t&&f.splice(t,1);return v.return(f)})})};
DD=function(a,b,c,d,e,f,h,l,m,n,p){this.entityType=a;this.actionId=b;this.action=c;this.parentActionId=d;this.rootActionId=void 0===e?b:e;this.childActionIds=f;this.prereqActionId=h;this.postreqActionIds=l;this.hasChildActionFailed=n;this.retryScheduleIndex=0;this.i=p||Date.now();this.retryScheduleIndex=m||0};
ED=function(a){return{key:WC(a.actionId,"offlineOrchestrationActionWrapperEntity"),actionProto:a.action,parentActionId:a.parentActionId,rootActionId:a.rootActionId,childActionIds:a.childActionIds,prereqActionId:a.prereqActionId,postreqActionIds:a.postreqActionIds,retryScheduleIndex:a.retryScheduleIndex,hasChildActionFailed:a.hasChildActionFailed,enqueueTimeSec:(a.i/1E3).toFixed()}};
iga=function(){this.i=new Map};
GD=function(){FD||(FD=new iga);return FD};
HD=function(a,b){return{eventType:{flowEventNamespace:"FLOW_EVENT_NAMESPACE_OFFLINE_ORCHESTRATION",flowEventType:a},metadata:b,statusCode:void 0}};
ID=function(a,b,c){if(!c){var d=void 0===d?!1:d;c=a.i.get("FLOW_TYPE_OFFLINE_ORCHESTRATION");if(!c||d)c=g.Zn(),a.i.set("FLOW_TYPE_OFFLINE_ORCHESTRATION",c)}a={flowNonce:c,flowType:"FLOW_TYPE_OFFLINE_ORCHESTRATION",flowEventType:b.eventType};b.metadata&&(a.flowMetadata=b.metadata);void 0!==b.statusCode&&(a.flowEventStatus=b.statusCode);g.Zl("flowEvent",a)};
JD=function(a,b,c){if(!a.action.entityKey)throw Error("entityKey is missing.");var d=UC(a.action.entityKey);a={entityType:d.CD,entityId:d.entityId,offlineOrchestrationActionType:a.action.actionType,orchestrationAction:{orchestrationActionId:a.actionId}};b&&(a.offlineOrchestrationActionResult=b.status,a.isRetryable=b.i);c&&(a.additionalOrchestrationActions=c.map(function(e){return{orchestrationActionId:e.actionId}}));
return a};
KD=function(a,b){var c={offlineOrchestrationContext:JD(a)};b=HD(b,c);ID(GD(),b,a.rootActionId)};
LD=function(a,b,c){c=void 0===c?[]:c;b={offlineOrchestrationContext:JD(a,b,c)};b=HD(3,b);ID(GD(),b,a.rootActionId)};
MD=function(){this.actions=[]};
ND=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,KD(c,1),a.actions.push(c);a.actions.sort(a.i)};
OD=function(a,b){g.F.call(this);this.i=a;this.D=b;this.u=new MD;this.B=fD(this.i,this.C.bind(this))};
kga=function(a,b){return D(this,function d(){var e;return A(d,function(f){if(1==f.i)return e=new OD(a,b),x(f,jga(e),2);e.l?Promise.resolve():PD(e);return f.return(e)})})};
PD=function(a){return D(a,function c(){var d=this,e,f,h;return A(c,function(l){switch(l.i){case 1:if(d.l)throw Error("Already processing an action");if(d.ya())return l.return();e=d.u.actions.shift();if(void 0===e)return l.return();d.l=e;f=d.D[e.entityType];va(l,2,3);KD(e,2);return x(l,f.l(e.action),5);case 5:return h=l.l,x(l,lga(d,e,h),3);case 3:l.N=[l.u];l.D=0;l.C=0;d.l=void 0;var m=l.N.splice(0)[0];(m=l.u=l.u||m)?m.fz?l.i=l.D||l.C:void 0!=m.fb&&l.C<m.fb?(l.i=m.fb,l.u=null):l.i=l.C:l.i=4;break;case 2:return xa(l),
va(l,7),x(l,QD(d,e),9);case 9:wa(l,3);break;case 7:xa(l);3>e.retryScheduleIndex&&ND(d.u,[e]);l.fb(3);break;case 4:return x(l,PD(d),0)}})})};
lga=function(a,b,c){var d;return D(a,function f(){var h=this,l,m;return A(f,function(n){if(1==n.i){l=h;if("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS"===c.status)return m=null===(d=c.l)||void 0===d?void 0:d.map(function(p){return l.createAction(p,b)}),LD(b,c,m),x(n,eD(h.i,"readwrite",function(p){var q=[];
if(m){var r=m.map(function(t){return ED(t)});
q.push(aD(p,r,"offlineOrchestrationActionWrapperEntity"))}r=ED(b);q.push(bD(p,r.key));return tn.all(q)}),7);
if("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE"!==c.status)return n.fb(0);LD(b,c);return c.i?x(n,QD(h,b),0):n.fb(0)}KD(b,4);n.i=0})})};
QD=function(a,b){return D(a,function d(){var e=this;return A(d,function(f){b.retryScheduleIndex++;return x(f,mga(e,[b]),0)})})};
jga=function(a){return D(a,function c(){var d=this,e;return A(c,function(f){if(1==f.i)return x(f,jD(d.i,"offlineOrchestrationActionWrapperEntity"),2);e=f.l;RD(d,e);f.i=0})})};
RD=function(a,b){0!==b.length&&b.forEach(function(c){if(!c.key)throw Error("Entity key is required.");if(!c.actionProto)throw Error("OfflineOrchestrationAction is required.");var d=UC(c.key),e=UC(c.actionProto.entityKey);c=new DD(e.entityType,d.entityId,c.actionProto,c.parentActionId,c.rootActionId,c.childActionIds,c.prereqActionId,c.postreqActionIds,c.retryScheduleIndex,c.hasChildActionFailed,1E3*Number(c.enqueueTimeSec));3>c.retryScheduleIndex&&ND(a.u,[c])})};
nga=function(a,b){return D(a,function d(){var e=this,f;return A(d,function(h){if(1==h.i)return x(h,jD(e.i,"offlineOrchestrationActionWrapperEntity",b),2);f=h.l;return h.return(f.filter(nD))})})};
mga=function(a,b){if(0===b.length)return Promise.resolve([]);b=b.map(function(c){return ED(c)});
return hD(a.i,b)};
SD=function(a,b,c,d){this.api=a;this.player=b;this.i=d;this.player.subscribe("localmediachange",this.B,this);this.u=c;oga(this);this.K()};
pga=function(a){return D(this,function c(){return A(c,function(d){return d.return(ks(a))})})};
oga=function(a){bs().then(function(){var b=Sr(2);b=g.u(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a;d=d.player.getVideoData().videoId===c?d.player:null;a.K();d||Tr(c,3)}a.K()})};
qga=function(){switch(g.Al.getInstance().get("lmqf")){case "HD_1080":return"hd1080";case "HD":return"hd720";case "SD":return"medium";case "LD":return"tiny";default:return"medium"}};
TD=function(a){g.F.call(this);this.i=a;this.l=fD(this.i,this.u.bind(this))};
rga=function(a){var b=Rr();return UD(a,b)};
UD=function(a,b){return D(a,function d(){var e,f=this,h,l,m,n,p,q;return A(d,function(r){switch(r.i){case 1:if(0===b.length)return r.return([]);e=b.map(function(t){return WC(t,"transfer")});
return x(r,jD(f.i,"transfer",e),2);case 2:h=r.l;l=h.filter(nD).map(function(t){return UC(t.key).entityId});
m=b.filter(function(t){return-1===l.indexOf(t)});
if(0===m.length)return r.return([]);n=g.u(m);p=n.next();case 3:if(p.done){r.fb(5);break}q=p.value;return x(r,pga(q),4);case 4:p=n.next();r.fb(3);break;case 5:return r.return(m)}})})};
sga=function(a,b,c,d,e,f){return D(this,function l(){var m,n,p;return A(l,function(q){m="STREAM_TYPE_UNKNOWN";c.video&&c.audio?m="STREAM_TYPE_AUDIO_AND_VIDEO":c.video&&!c.audio?m="STREAM_TYPE_VIDEO":!c.video&&c.audio&&(m="STREAM_TYPE_AUDIO");n=WC(b,"offlineVideoStreams");p={numBytesDownloaded:e.toFixed(),numTotalBytes:f.toFixed(),streamType:m,streamState:"DOWNLOAD_STREAM_STATE_IN_PROGRESS",formatStreamBytes:JSON.stringify(d),itag:"STREAM_TYPE_AUDIO_AND_VIDEO"===m?Number(c.wb()):void 0};return x(q,
eD(a,"readwrite",function(r){return XC(r,n,"offlineVideoStreams").then(function(t){if(t&&t.streamsProgress){var v=t;a:{var y=d.itag+";"+d.xtags;for(var C=t.streamsProgress,z=0;z<C.length;z++){var E=JSON.parse(C[z].formatStreamBytes);if(E.itag+";"+E.xtags===y){C[z]=p;y=C;break a}}C.push(p);y=C}v.streamsProgress=y}else t={key:n,streamsProgress:[p]};return t}).then(function(t){t=$C(r,t,"offlineVideoStreams");
var v=XC(r,WC(b,"transfer"),"transfer");return tn.all([t,v]).then(function(y){y=g.u(y);y.next();y=y.next().value;if(!y)return bD(r,n).then(function(){return tn.resolve(void 0)});
y.offlineVideoStreams||(y.offlineVideoStreams=[]);return-1===y.offlineVideoStreams.indexOf(n)?(y.offlineVideoStreams.push(n),$C(r,y,"transfer")):tn.resolve(void 0)})})}),0)})})};
VD=function(a,b,c,d){g.F.call(this);this.l=a;this.u=fD(this.l,this.C.bind(this));this.G=new SD(b,c,d,this);this.B=new TD(this.l)};
WD=function(a){return D(a,function c(){var d=this,e;return A(c,function(f){if(1==f.i){if(d.i)throw Error("Already downloading a video");return x(f,tga(d),2)}return(e=f.l)?x(f,uga(d,e),0):f.fb(0)})})};
uga=function(a,b){return D(a,function d(){var e=this,f;return A(d,function(h){switch(h.i){case 1:return e.i=b,f=null,va(h,2),x(h,vga(e,b),4);case 4:f=h.l;e.D=f;wa(h,3);break;case 2:return xa(h),XD(e),h.return();case 3:var l=e.G,m=f,n=b.cotn;2===l.l?l.K():(Tr(m.videoDetails.videoId,2),l.l=2,m=new g.rz(l.player.V(),{cotn:n,raw_player_response:m,download_media:!0,start:Infinity,disable_watch_next:!0}),uA(l.player,m,l.u),m=qga(),g.P(l.player.V().experiments,"hoffle_lmqf_killswitch")||(m=vq(m,m,!0,"m"),
vA(l.player,m)),l.K(),wA(l.player,!1));h.i=0}})})};
tga=function(a){return D(a,function c(){var d=this,e,f;return A(c,function(h){if(1==h.i)return x(h,jD(d.l,"transfer"),2);e=h.l;f=e.filter(wga).sort(xga);return 0===f.length?h.return():h.return(f[0])})})};
yga=function(a){D(a,function c(){var d=this;return A(c,function(e){return x(e,YD(d,"TRANSFER_STATE_TRANSFERRING"),0)})})};
zga=function(a){D(a,function c(){var d=this;return A(c,function(e){if(1==e.i)return x(e,YD(d,"TRANSFER_STATE_COMPLETE","DOWNLOAD_STREAM_STATE_COMPLETE"),2);XD(d);WD(d);e.i=0})})};
Aga=function(a){D(a,function c(){var d=this;return A(c,function(e){if(1==e.i)return x(e,YD(d,"TRANSFER_STATE_FAILED","DOWNLOAD_STREAM_STATE_ERROR_STREAMS_MISSING","TRANSFER_FAILURE_REASON_INTERNAL"),2);XD(d);WD(d);e.i=0})})};
Bga=function(a,b){D(a,function d(){var e=this;return A(d,function(f){return x(f,sga(e.l,b.videoId,b.i,b.formatStream,b.bytesDownloaded,b.l),0)})})};
YD=function(a,b,c,d){return D(a,function f(){var h=this,l;return A(f,function(m){l=h;h.i.transferState=b;h.i.failureReason=d;return x(m,Cga(h,function(n){return c?YC(n,"offlineVideoStreams",l.i.offlineVideoStreams).then(function(p){for(var q=g.u(p),r=q.next();!r.done;r=q.next())if((r=r.value)&&r.streamsProgress){r=g.u(r.streamsProgress);for(var t=r.next();!t.done;t=r.next())t.value.streamState=c}return aD(n,p.filter(function(v){return!!v}),"offlineVideoStreams")}):tn.resolve(void 0)}),0)})})};
Cga=function(a,b){return D(a,function d(){var e=this,f;return A(d,function(h){if(!e.i)return h.return();f=e.i;return x(h,eD(e.l,"readwrite",function(l){var m=[$C(l,f,"transfer")];b&&m.push(b(l));return tn.all(m)}),0)})})};
XD=function(a){a.i=void 0;a.D=void 0};
vga=function(a,b){return D(a,function d(){var e,f,h,l=this,m;return A(d,function(n){if(1==n.i)return e=UC(b.key),f=e.entityId,h=WC(f,"playbackData"),x(n,iD(l.l,h,"playbackData"),2);m=n.l;if(null===m||void 0===m?0:m.playerResponseJson)return n.return(JSON.parse(m.playerResponseJson));throw Error("No PlayerResponse found");})})};
wga=function(a){return void 0!==ZD[a.transferState]};
xga=function(a,b){var c=ZD[a.transferState],d=ZD[b.transferState];return c!==d?c-d:Number(a.enqueuedTimestampMs)-Number(b.enqueuedTimestampMs)};
$D=function(a,b,c,d){this.D=a;this.api=b;this.player=c;this.G=d;this.B=this.init()};
Dga=function(a,b){return D(a,function d(){var e=this;return A(d,function(f){return f.return(e.Eo(b,"OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD"))})})};
Ega=function(a,b){return D(a,function d(){var e=this;return A(d,function(f){return f.return(e.Eo(b,"OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH"))})})};
Fga=function(a,b){return D(a,function d(){var e=this,f,h;return A(d,function(l){if(1==l.i){if(!e.i)return l.return(Promise.reject());f=WC(b,"playbackData");return x(l,iD(e.i,f,"playbackData"),2)}h=l.l;return(null===h||void 0===h?0:h.playerResponseJson)?l.return(JSON.parse(h.playerResponseJson)):l.return(null)})})};
aE=function(a){return D(a,function c(){var d=this,e,f;return A(c,function(h){if(1==h.i)return x(h,d.isReady(),2);if(3!=h.i)return d.i?x(h,jD(d.i,"ytMainDownloadedVideoEntity"),3):h.return([]);e=h.l;f=e.map(function(l){return UC(l.id).entityId});
return h.return(f)})})};
bE=function(a,b){b=void 0===b?!1:b;return D(a,function d(){var e=this,f,h,l,m,n,p,q;return A(d,function(r){if(1==r.i)return b?r.fb(2):x(r,e.isReady(),2);if(4!=r.i){if(!e.i)return r.return();f=Date.now()/1E3;return x(r,jD(e.i,"offlineVideoPolicy"),4)}h=r.l;l=[];m=g.u(h);for(n=m.next();!n.done;n=m.next())p=n.value,Number(p.lastUpdatedTimestampSeconds)+43200<=f&&(q=UC(p.key).entityId,l.push(q));return l.length?x(r,Ega(e,l),0):r.fb(0)})})};
iE=function(a){this.counter=[0,0,0,0];this.l=new Uint8Array(16);this.i=16;if(!cE){var b,c=new Uint8Array(256),d=new Uint8Array(256);var e=1;for(b=0;256>b;b++)c[e]=b,d[b]=e,e^=e<<1^(e>>7&&283);dE=new Uint8Array(256);eE=[];fE=[];gE=[];hE=[];for(var f=0;256>f;f++){e=f?d[255^c[f]]:0;e^=e<<1^e<<2^e<<3^e<<4;e=e&255^e>>>8^99;dE[f]=e;b=e<<1^(e>>7&&283);var h=b^e;eE.push(b<<24|e<<16|e<<8|h);fE.push(h<<24|eE[f]>>>8);gE.push(e<<24|fE[f]>>>8);hE.push(e<<24|gE[f]>>>8)}cE=!0}e=[];for(c=0;4>c;c++)e.push(a[4*c]<<
24|a[4*c+1]<<16|a[4*c+2]<<8|a[4*c+3]);for(d=1;44>c;c++)a=e[c-1],c%4||(a=(dE[a>>16&255]^d)<<24|dE[a>>8&255]<<16|dE[a&255]<<8|dE[a>>>24],d=d<<1^(d>>7&&283)),e.push(e[c-4]^a);this.key=e};
jE=function(a,b){for(var c=0;4>c;c++)a.counter[c]=b[4*c]<<24|b[4*c+1]<<16|b[4*c+2]<<8|b[4*c+3];a.i=16};
kE=function(a){for(var b=a.key,c=a.counter[0]^b[0],d=a.counter[1]^b[1],e=a.counter[2]^b[2],f=a.counter[3]^b[3],h=3;0<=h&&!(a.counter[h]=-~a.counter[h]);h--);for(h=4;40>h;){var l=eE[c>>>24]^fE[d>>16&255]^gE[e>>8&255]^hE[f&255]^b[h++];var m=eE[d>>>24]^fE[e>>16&255]^gE[f>>8&255]^hE[c&255]^b[h++];var n=eE[e>>>24]^fE[f>>16&255]^gE[c>>8&255]^hE[d&255]^b[h++];f=eE[f>>>24]^fE[c>>16&255]^gE[d>>8&255]^hE[e&255]^b[h++];c=l;d=m;e=n}a=a.l;c=[c,d,e,f];for(d=0;16>d;)a[d++]=dE[c[0]>>>24]^b[h]>>>24,a[d++]=dE[c[1]>>
16&255]^b[h]>>16&255,a[d++]=dE[c[2]>>8&255]^b[h]>>8&255,a[d++]=dE[c[3]&255]^b[h++]&255,c.push(c.shift())};
lE=function(a){this.C=new Uint8Array(64);this.u=new Uint8Array(64);this.B=0;this.D=new Uint8Array(64);this.l=0;this.C.set(a);this.u.set(a);for(a=0;64>a;a++)this.C[a]^=92,this.u[a]^=54;this.reset()};
mE=function(a,b,c){for(var d=[],e=0;16>e;e++)d.push(b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3]),c+=4;for(b=16;64>b;b++)c=d[b-7]+d[b-16],e=d[b-2],c+=(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10,e=d[b-15],c+=(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3,d.push(c);b=a.i[0];c=a.i[1];e=a.i[2];for(var f=a.i[3],h=a.i[4],l=a.i[5],m=a.i[6],n=a.i[7],p,q,r=0;64>r;r++)p=n+Gga[r]+d[r]+((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&l^~h&m),q=((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+(b&c^b&e^c&e),n=m,m=l,l=h,h=f+p,f=e,e=c,c=b,b=p+
q;a.i[0]=b+a.i[0]|0;a.i[1]=c+a.i[1]|0;a.i[2]=e+a.i[2]|0;a.i[3]=f+a.i[3]|0;a.i[4]=h+a.i[4]|0;a.i[5]=l+a.i[5]|0;a.i[6]=m+a.i[6]|0;a.i[7]=n+a.i[7]|0};
oE=function(a){var b=new Uint8Array(32),c=64-a.l;55<a.l&&(c+=64);var d=new Uint8Array(c);d[0]=128;for(var e=8*a.B,f=1;9>f;f++){var h=e%256;d[c-f]=h;e=(e-h)/256}a.update(d);for(c=0;8>c;c++)b[4*c]=a.i[c]>>>24,b[4*c+1]=a.i[c]>>>16&255,b[4*c+2]=a.i[c]>>>8&255,b[4*c+3]=a.i[c]&255;nE(a);return b};
nE=function(a){a.i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];a.B=0;a.l=0};
Hga=function(a,b,c){return D(this,function e(){var f,h,l,m,n,p,q,r;return A(e,function(t){switch(t.i){case 1:if(!(window.crypto&&window.crypto.subtle&&window.crypto.subtle.importKey)){t.fb(2);break}h=window.crypto.subtle;l={name:"HMAC",hash:{name:"SHA-256"}};m=["sign"];n=new Uint8Array(b.length+c.length);n.set(b);n.set(c,b.length);va(t,3);return x(t,h.importKey("raw",a,l,!1,m),5);case 5:return p=t.l,x(t,h.sign(l,p,n),6);case 6:q=t.l;f=new Uint8Array(q);wa(t,2);break;case 3:xa(t);case 2:if(!f){r=new lE(a);
r.update(b);r.update(c);var v=oE(r);r.update(r.C);r.update(v);v=oE(r);r.reset();f=v}return t.return(f)}})})};
rE=function(a,b,c){return D(this,function e(){var f,h,l,m,n,p,q;return A(e,function(r){switch(r.i){case 1:if(!(window.crypto&&window.crypto.subtle&&window.crypto.subtle.importKey)){r.fb(2);break}h=window.crypto.subtle;l={name:"AES-CTR",counter:c,length:128};va(r,3);return x(r,pE(a),5);case 5:return m=r.l,n=qE.Oo("oan2"),x(r,h.encrypt(l,m,b),6);case 6:p=r.l;qE.En(n,Math.ceil(b.byteLength/16));f=new Uint8Array(p);wa(r,2);break;case 3:xa(r);case 2:return f||(q=new iE(a),jE(q,c),f=q.encrypt(b)),r.return(f)}})})};
pE=function(a){return window.crypto.subtle.importKey("raw",a,{name:"AES-CTR"},!1,["encrypt"])};
sE=function(a){var b=this,c=new iE(a);return function(d,e){return D(b,function h(){return A(h,function(l){jE(c,e);return l.return(new Uint8Array(c.encrypt(d)))})})}};
Iga=function(){for(var a=tE.length;4>a;a++){var b=g.sf("VIDEO");b.load();tE.push(new g.LB(b))}};
g.uE=function(a,b){this.state=a;this.Wi=b};
g.vE=function(a,b){return g.S(a.state,b)&&!g.S(a.Wi,b)?1:!g.S(a.state,b)&&g.S(a.Wi,b)?-1:0};
g.wE=function(a,b){return 0<g.vE(a,b)};
Jga=function(){this.l=200;this.i=12};
Kga=function(a){var b=new Jga;b.l=g.Q(a.experiments,"html5_gapless_ended_transition_buffer_ms");b.i=g.Q(a.experiments,"html5_gapless_max_played_ranges");return b};
g.xE=function(a,b,c,d){d=void 0===d?!1:d;CB.call(this);this.i=a;this.start=b;this.end=c;this.B=d};
Lga=function(a,b,c,d){var e=c.getVideoData(),f=b.getVideoData();if(c.getPlayerState().isError())return"player-error";c=f.l;if(b.yh()>d/1E3+1)return"in-the-past";if(f.isLivePlayback&&!isFinite(d))return"live-infinite";if(a.i&&((b=b.uc())&&b.isView()&&(b=b.i),b&&b.Xj().length>a.i&&g.Yz(e)))return"played-ranges";if(!e.l)return null;if(!e.l.i||!c.i)return"non-dash";if(e.l.videoInfos[0].containerType!==c.videoInfos[0].containerType)return"container";if(g.Yz(f)&&g.Yz(e))return"content-protection";a=c.i[0].audio;
e=e.l.i[0].audio;return a.sampleRate===e.sampleRate||Lv?(a.i||2)!==(e.i||2)?"channel-count":null:"sample-rate"};
yE=function(){var a=this;this.i=this.l=fb;this.promise=new g.oh(function(b,c){a.l=b;a.i=c})};
zE=function(a,b,c,d){g.F.call(this);var e=this;this.policy=a;this.i=b;this.l=c;this.B=this.u=null;this.D=-1;this.G=!1;this.C=new yE;this.If=d-1E3*b.Kb();this.C.then(void 0,function(){});
this.timeout=new g.H(function(){e.Uc("timeout")},1E4);
g.G(this,this.timeout);this.I=isFinite(d);this.status={status:0,error:null};this.K()};
Mga=function(a){return D(a,function c(){var d=this,e,f,h,l,m,n,p,q,r,t;return A(c,function(v){if(1==v.i){e=d;if(d.ya())return v.return(Promise.reject(Error(d.status.error||"disposed")));d.K();d.timeout.start();f=g.AE.Oo("gtfta");return x(v,d.C,2)}g.AE.En(f);h=d.i.uc();if(h.Jg())return d.Uc("ended_in_finishTransition"),v.return(Promise.reject(Error(d.status.error||"")));if(!d.B||!cw(d.B))return d.Uc("next_mse_closed"),v.return(Promise.reject(Error(d.status.error||"")));if(d.l.mediaSource!==d.B)return d.Uc("next_mse_mismatch"),
v.return(Promise.reject(Error(d.status.error||"")));l=BE(d);m=l.Gz;n=l.Tx;p=l.Fz;d.i.Xe(!1,!0);q=CE(h,m,p,!d.l.getVideoData().isAd());DE(d.l,q);d.I&&(d.l.seekTo(d.l.getCurrentTime()+.001,{Tn:!0,Kv:3}),q.play()||g.Nj());r=h.gb();r.cpn=d.i.getVideoData().clientPlaybackNonce;r.st=""+m;r.et=""+p;d.l.Ja("gapless",g.pq(r));d.i.Ja("gaplessTo",d.l.getVideoData().clientPlaybackNonce);t=d.i.getPlayerType()===d.l.getPlayerType();EE(d.i,n,!1,t,d.l.getVideoData().clientPlaybackNonce);EE(d.l,d.l.getCurrentTime(),
!0,t,d.i.getVideoData().clientPlaybackNonce);g.jh(function(){!e.l.getVideoData().Ba&&FE(e.l.getPlayerState())&&GE(e.l)});
HE(d,6);d.dispose();return v.return(Promise.resolve())})})};
LE=function(a){if(a.l.getVideoData().l){IE(a.l,a.B);HE(a,3);JE(a);var b=KE(a),c=b.UA;b=b.NG;c.subscribe("updateend",a.Vk,a);b.subscribe("updateend",a.Vk,a);a.Vk(c);a.Vk(b)}};
JE=function(a){a.i.unsubscribe("internalvideodatachange",a.Nj,a);a.l.unsubscribe("internalvideodatachange",a.Nj,a);a.i.unsubscribe("mediasourceattached",a.Nj,a);a.l.unsubscribe("statechange",a.pw,a)};
CE=function(a,b,c,d){a=a.isView()?a.i:a;return new g.xE(a,b,c,d)};
HE=function(a,b){a.K();b<=a.status.status||(a.status={status:b,error:null},5===b&&a.C.resolve(void 0))};
BE=function(a){var b=a.i.uc();b=b.isView()?b.start:0;var c=a.i.getVideoData().isLivePlayback?Infinity:ME(a.i,!0);c=Math.min(a.If/1E3,c)+b;var d=a.I?100:0;a=c-a.l.yh()+d;return{uD:b,Gz:a,Tx:c,Fz:Infinity}};
KE=function(a){return{UA:a.u.i.Qb,NG:a.u.l.Qb}};
NE=function(a){g.F.call(this);var b=this;this.api=a;this.C=this.i=this.l=null;this.G=!1;this.B=null;this.I=Kga(this.api.V());this.u=null;this.D=function(){g.jh(function(){Nga(b)})}};
Oga=function(a,b,c,d){d=void 0===d?0:d;a.K();a.Sl()||OE(a);a.B=new yE;a.l=b;var e=c,f=a.api.Jb(),h=f.getVideoData().isLivePlayback?Infinity:1E3*ME(f,!0);e>h&&(e=h-a.I.l,a.G=!0);f.getCurrentTime()>=e/1E3?a.D():(a.i=f,f=e,e=a.i,a.api.addEventListener(g.$A("vqueued"),a.D),f=isFinite(f)||f/1E3>e.getDuration()?f:0x8000000000000,a.C=new g.XA(f,0x8000000000000,{namespace:"vqueued"}),e.addCueRange(a.C));f=d/=1E3;e=b.getVideoData().i;if(d&&e&&a.i){h=d;var l=0;b.getVideoData().isLivePlayback&&(f=Math.min(c/
1E3,ME(a.i,!0)),l=Math.max(0,f-a.i.getCurrentTime()),h=Math.min(d,ME(b)+l));f=Yda(e,h)||d;f!==d&&a.l.Ja("qvaln","st."+d+";at."+f+";rm."+(l+";ct."+h))}b=f;d=a.l;if(e=a.api.Jb())d.Xb=e;d.getVideoData().Gb=!0;d.getVideoData().Da=!0;wA(d,!0);e="";a.i&&(e=PE(a.i.C.provider),f=a.i.getVideoData().clientPlaybackNonce,e="crt."+(1E3*e).toFixed()+";cpn."+f);d.Ja("queued",e);0!==b&&d.seekTo(b+.01,{Tn:!0,Kv:3});a.u=new zE(a.I,a.api.Jb(),a.l,c);c=a.u;c.K();Infinity!==c.status.status&&(HE(c,1),c.i.subscribe("internalvideodatachange",
c.Nj,c),c.l.subscribe("internalvideodatachange",c.Nj,c),c.i.subscribe("mediasourceattached",c.Nj,c),c.l.subscribe("statechange",c.pw,c),c.i.subscribe("newelementrequired",c.Zz,c),c.Nj());return a.B};
Nga=function(a){D(a,function c(){var d=this,e,f,h,l;return A(c,function(m){switch(m.i){case 1:e=d;if(d.ya())return m.return();d.K();if(!d.B||!d.l)return d.K(),m.return();d.G&&QE(d.api.Jb(),!0,!1);f=null;if(!d.u){m.fb(2);break}va(m,3);return x(m,Mga(d.u),5);case 5:wa(m,2);break;case 3:f=h=xa(m);case 2:return d.api.wp(d.l),g.AE.Tu("vqsp",function(){e.api.Rh(e.l.getPlayerType())}),g.AE.Tu("vqpv",function(){e.api.playVideo()}),f&&Pga(d.l,f.message),l=d.B,OE(d),m.return(l.resolve(void 0))}})})};
OE=function(a){if(a.i){var b=a.i;a.api.removeEventListener(g.$A("vqueued"),a.D);b.removeCueRange(a.C);a.i=null;a.C=null}a.u&&(a.u.isFinished()||(b=a.u,Infinity!==b.status.status&&b.Uc("Canceled")),a.u=null);a.B=null;a.l=null;a.G=!1};
RE=function(){var a=Pj();return!(!a||"visible"===a)};
TE=function(a){var b=SE();b&&document.addEventListener(b,a,!1)};
UE=function(a){var b=SE();b&&document.removeEventListener(b,a,!1)};
SE=function(){if(document.visibilityState)var a="visibilitychange";else{if(!document[Oj+"VisibilityState"])return"";a=Oj+"visibilitychange"}return a};
WE=function(){g.N.call(this);var a=this;this.fullscreen=0;this.l=this.pictureInPicture=this.i=this.u=this.inline=!1;this.B=function(){VE(a)};
TE(this.B);this.C=this.getVisibilityState(this.ge(),this.isFullscreen(),this.Pe(),this.isInline(),this.Rl(),this.Ql())};
VE=function(a){a.U("visibilitychange");var b=a.getVisibilityState(a.ge(),a.isFullscreen(),a.Pe(),a.isInline(),a.Rl(),a.Ql());b!==a.C&&a.U("visibilitystatechange");a.C=b};
Qga=function(a){this.end=this.start=a};
g.ZE=function(a,b,c){g.F.call(this);var d=this;this.api=a;this.B=b;this.i=c;this.Ka=new Map;this.D=new Map;this.C=[];this.u=[];this.Aa=NaN;this.ea=this.W=null;this.Da=new g.H(function(){XE(d,d.Aa)});
this.events=new g.TA(this);this.isLiveNow=!0;this.Pa=g.Q(this.B.experiments,"web_player_ss_dai_ad_fetching_timeout_ms")||1E4;this.G=new g.H(function(){d.I=!0;d.i.Ja("sdai","aftimeout."+d.Pa.toString());g.YE(d,!1)},this.Pa);
this.I=!1;this.Ba=new Map;this.ma=[];this.T=null;this.X=[];this.Ma=[];this.l=void 0;this.Ha=0;this.xa=!0;this.N=!1;this.i.getPlayerType();Rga(this.i,this);g.G(this,this.Da);g.G(this,this.events);g.G(this,this.G);this.events.Y(this.api,g.$A("serverstitchedcuerange"),this.fd);this.events.Y(this.api,"crx_serverstitchedcuerange",this.tf)};
$E=function(a,b){return new g.XA(a,b,{namespace:"serverstitchedcuerange",priority:7})};
bF=function(a,b,c){var d=a.N,e={cpn:a.i.getVideoData().clientPlaybackNonce,durationMs:0,Ab:0,playerType:1,ac:0,videoData:a.i.getVideoData()};if(b.isAd&&c.isAd){e=a.u.find(function(h){return h.cpn===b.adCpn});
var f=a.u.find(function(h){return h.cpn===c.adCpn});
f&&e&&(a.api.U("serverstitchedvideochange",e.Lb),aF(a.i,f,e,c.Th,b.Th,d))}else!b.isAd&&c.isAd?(a.api.U("serverstitchedvideochange"),f=c.Ic,a.Ha=f.end-f.start,(f=a.u.find(function(h){return h.cpn===c.adCpn}))&&aF(a.i,f,e,c.Th,b.Th,d)):b.isAd&&!c.isAd&&(f=a.u.find(function(h){return h.cpn===b.adCpn}))&&(a.api.U("serverstitchedvideochange",f.Lb),a.Ha=0,aF(a.i,e,f,c.Th,b.Th,d))};
cF=function(a,b,c){c=void 0===c?0:c;var d=0;a=g.u(a.u);for(var e=a.next();!e.done;e=a.next()){e=e.value;var f=e.Ab/1E3+d,h=f+e.durationMs/1E3;if(f>b+c)break;if(h>b)return{kh:e,jk:b-d};d=h-e.ac/1E3}return{kh:void 0,jk:b-d}};
dF=function(a,b){for(var c={},d=g.u(a.D),e=d.next();!e.done;c={xr:c.xr},e=d.next()){e=g.u(e.value);var f=e.next().value;c.xr=e.next().value;if(f.start<=b&&f.end>=b)return a.u.find(function(h){return function(l){return l.cpn===h.xr}}(c))}};
XE=function(a,b){var c=a.ea||a.api.Jb().getPlayerState();eF(a,!0);b=cF(a,b).jk;a.K();a.K();a.i.seekTo(b);a=a.api.Jb();b=a.getPlayerState();FE(c)&&!FE(b)?a.playVideo():g.S(c,4)&&!g.S(b,4)&&a.pauseVideo()};
eF=function(a,b){a.Aa=NaN;a.Da.stop();a.W&&b&&fF(a.W);a.ea=null;a.W=null};
iF=function(a){var b=void 0===b?-1:b;var c=void 0===c?Infinity:c;a.K();for(var d=g.u(a.Ka),e=d.next();!e.done;e=d.next()){var f=g.u(e.value);e=f.next().value;f=f.next().value;f.If>=b&&f.target&&f.target.ac<=c&&(a.i.removeCueRange(e),a.Ka.delete(e))}d=[];e=g.u(a.u);for(f=e.next();!f.done;f=e.next())f=f.value,(f.Ab<b||f.ac>c)&&d.push(f);a.u=d;d=g.u(a.D.keys());for(e=d.next();!e.done;e=d.next())e=e.value,e.start>=b&&e.end<=c&&(a.i.removeCueRange(e),a.D.delete(e));d=cF(a,b/1E3);b=d.kh;d=d.jk;b&&(d=1E3*
d-b.Ab,g.gF(a,b,d,b.Ab+d));(b=cF(a,c/1E3).kh)&&a.kc("Invalid clearEndTimeMs="+c+" that falls during "+g.hF(b)+".Child playbacks can only have duration updated not their start.")};
g.gF=function(a,b,c,d){a.K();b.durationMs=c;b.ac=d;c=null;d=g.u(a.D);for(var e=d.next();!e.done;e=d.next()){e=g.u(e.value);var f=e.next().value;e.next().value===b.cpn&&(c=f)}if(c){a=g.u(a.C);for(d=a.next();!d.done;d=a.next())d=d.value,d.start===c.end?d.start=b.Ab+b.durationMs:d.end===c.start&&(d.end=b.Ab);c.start=b.Ab;c.end=b.Ab+b.durationMs}};
g.hF=function(a){var b;return"playback={timelinePlaybackId="+a.Lb+" video_id="+(null===(b=a.videoData)||void 0===b?void 0:b.videoId)+" durationMs="+a.durationMs+" enterTimeMs="+a.Ab+" parentReturnTimeMs="+a.ac+"}"};
jF=function(a,b,c){c=a.Ba.get(c);c||(c=0,a.B.S("web_player_ss_media_time_offset")&&(c=0===a.i.getStreamTimeOffset()?a.i.Kb():a.i.getStreamTimeOffset()),c=cF(a,b+c,1).kh);return c};
lF=function(a,b,c,d){if(d)for(d=0;d<a.C.length;){var e=a.C[d];if(e.start<b&&e.end>c){var f=e.end;e.end=b;kF(a,c,f)}else if(e.start>=b&&e.start<c&&e.end>c)e.start=c;else if(e.end>b&&e.end<=c&&e.start<b)e.end=b;else if(e.start>=b&&e.end<=c){a.i.removeCueRange(e);a.C.splice(d,1);continue}d++}else kF(a,b,c)};
kF=function(a,b,c){b=$E(b,c);a.i.addCueRange(b);Jb(a.C,b,function(e,f){return e.start-f.start});
for(b=0;b<a.C.length;){if(0<b){c=a.C[b];var d=a.C[b-1];if(Math.round(d.end/1E3)>=Math.round(c.start/1E3)){d.end=c.end;a.i.removeCueRange(c);a.C.splice(b,1);continue}}b++}};
Sga=function(a,b){for(var c=g.u(a.ma),d=c.next();!d.done;d=c.next()){d=d.value;if(b>=d.start&&b<=d.end)return;if(b===d.end+1){d.end+=1;return}}a.ma.push(new Qga(b))};
Tga=function(a,b){a=g.u(a.ma);for(var c=a.next();!c.done;c=a.next())if(c=c.value,b>=c.start&&b<=c.end)return!0;return!1};
Uga=function(a,b){var c=[];a=g.u(a.u);for(var d=a.next();!d.done;d=a.next())d=d.value,d.Jj===b&&d.cpn&&c.push(d.cpn);return c};
g.YE=function(a,b){g.P(a.B.experiments,"html5_high_res_logging")&&a.i.Ja("sdai","adf.0");a.I&&a.T&&a.X.push(a.T);a.T=null;a=a.i;if(a.l){a=a.l;var c=a.u,d=a.currentTime;mF(c,"sdai","adfetchdone_to"+b);b&&!isNaN(c.C)&&nF(c,d,c.C,c.B);c.l=4;g.Ih(a.N)}};
g.oF=function(a,b){this.stateData=void 0===b?null:b;this.state=a||64};
pF=function(a,b,c){return b===a.state&&c===a.stateData||void 0!==b&&(b&128&&!c||b&2&&b&16)?a:new g.oF(b,c)};
qF=function(a,b){return pF(a,a.state|b)};
rF=function(a,b){return pF(a,a.state&~b)};
sF=function(a,b,c){return pF(a,(a.state|b)&~c)};
g.S=function(a,b){return!!(a.state&b)};
tF=function(a,b){return b.state===a.state&&b.stateData===a.stateData};
FE=function(a){return g.S(a,8)&&!g.S(a,2)&&!g.S(a,1024)};
uF=function(a){return a.Zb()&&!g.S(a,16)&&!g.S(a,32)};
Vga=function(a){return g.S(a,8)&&g.S(a,16)};
g.vF=function(a){return g.S(a,1)&&!g.S(a,2)};
wF=function(a){return g.S(a,128)?-1:g.S(a,2)?0:g.S(a,64)?-1:g.S(a,1)&&!g.S(a,32)?3:g.S(a,8)?1:g.S(a,4)?2:-1};
yF=function(a,b,c){g.F.call(this);var d=this;this.api=a;this.C=b;this.l=c;this.D=new Map;this.i=[];this.u=this.I=null;this.T=NaN;this.G=this.B=null;this.N=new g.H(function(){xF(d,d.T)});
this.X=[];this.W=new g.H(function(){var e=d.X.pop();if(e){var f=e.Lb,h=e.playerVars;e=e.playerType;h&&(h.prefer_gapless=!0,d.api.preloadVideoByPlayerVars(h,e,NaN,"",f),d.X.length&&g.Ih(d.W,4500))}});
this.events=new g.TA(this);c.getPlayerType();g.G(this,this.N);g.G(this,this.W);g.G(this,this.events);this.events.Y(this.api,g.$A("childplayback"),this.fd);this.events.Y(this.api,"onQueuedVideoLoaded",this.MF);this.events.Y(this.api,"presentingplayerstatechange",this.Ng)};
g.zF=function(a,b){return new g.XA(Math.max(0,a-5E3),b?0x8000000000000:a-1,{namespace:"childplayback",priority:7})};
Wga=function(a,b,c,d){a.K();a.u=d;a.api.Dp(a.l,c,b)};
AF=function(a,b,c,d){a.K();a.u=d;d=b.Lb;var e=b.playerVars,f=b.playerType;a.I=b;e&&a.api.enqueueVideoByPlayerVars(e,f,c,d)};
g.DF=function(a,b,c){var d=b.Di;b.Di=c;BF(a,b)&&(c=a.api.Jb(),d.Ic===a.u&&CF(a),a.K(),c.removeCueRange(d.Ic),b=b.Di,a.K(),c.addCueRange(b.Ic))};
CF=function(a){a.I=null;a.u=null;a.api.Sl()||a.api.clearQueue()};
EF=function(a,b){BF(a,b)||a.kc("e.childPlaybackIsNotPresenting");return b.ac===b.Ab+b.durationMs?(a=a.api.Jb(),b.Ab+1E3*a.getCurrentTime()):b.ac};
FF=function(a,b){var c=0;a=g.u(a.i);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e=d.Ab/1E3+c,f=e+d.durationMs/1E3;if(e>b)break;if(f>b)return{kh:d,jk:b-e};c=f-d.ac/1E3}return{kh:null,jk:b-c}};
xF=function(a,b){var c=a.G||a.api.Jb().getPlayerState();GF(a,!0);b=g.P(a.C.experiments,"html5_playbacktimeline_seektoinf_killswitch")||isFinite(b)?b:HF(a.l);var d=FF(a,b);b=d.kh;d=d.jk;var e=b&&!BF(a,b)||!b&&a.l!==a.api.Jb(),f=1E3*d;f=a.u&&a.u.start<=f&&f<=a.u.end;!e&&f||CF(a);a.K();b?(a.K(),g.IF(a,b,d,c)):(a.K(),JF(a,d,c))};
JF=function(a,b,c){var d=a.l,e=a.api.Jb();d!==e&&a.api.Rh(d.getPlayerType());d.seekTo(b);KF(a,c)};
g.IF=function(a,b,c,d){var e=BF(a,b);if(!e){a.api.Rh(b.playerType);b.playerVars.prefer_gapless=!0;var f=new g.rz(a.C,b.playerVars);f.Lb=b.Lb;a.api.Si(f,b.playerType)}f=a.api.Jb();e||(b=b.Di,a.K(),f.addCueRange(b.Ic));f.seekTo(c);KF(a,d)};
KF=function(a,b){a=a.api.Jb();var c=a.getPlayerState();FE(b)&&!FE(c)?a.playVideo():g.S(b,4)&&!g.S(c,4)&&a.pauseVideo()};
GF=function(a,b){a.T=NaN;a.N.stop();a.B&&b&&fF(a.B);a.G=null;a.B=null};
BF=function(a,b){a=a.api.Jb();return!!a&&a.getVideoData().Lb===b.Lb};
LF=function(a){var b=a.i.find(function(d){return BF(a,d)});
if(b){CF(a);var c=new g.oF(8);b=EF(a,b)/1E3;JF(a,b,c)}};
NF=function(a){var b=void 0===b?-1:b;var c=void 0===c?Infinity:c;a.K();for(var d=g.u(a.D),e=d.next();!e.done;e=d.next()){var f=g.u(e.value);e=f.next().value;f=f.next().value;f.If>=b&&f.target&&f.target.ac<=c&&(a.l.removeCueRange(e),a.D.delete(e))}d=[];e=g.u(a.i);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.Ab>=b&&f.ac<=c){var h=a;h.I===f&&CF(h);BF(h,f)&&h.api.cj(f.playerType)}else d.push(f);a.i=d;d=FF(a,b/1E3);b=d.kh;d=d.jk;b&&(d*=1E3,g.MF(a,b,d,b.ac===b.Ab+b.durationMs?b.Ab+d:b.ac));(b=FF(a,
c/1E3).kh)&&a.kc("Invalid clearEndTimeMs="+c+" that falls during playback={timelinePlaybackId="+(b.Lb+" video_id="+b.playerVars.video_id+" durationMs="+b.durationMs+" enterTimeMs="+b.Ab+" parentReturnTimeMs="+b.ac+"}.Child playbacks can only have duration updated not their start."))};
g.MF=function(a,b,c,d){a.K();b.durationMs=c;b.ac=d;d={Ic:g.zF(c,!0),If:c,target:null};g.DF(a,b,d);BF(a,b)&&1E3*a.api.Jb().getCurrentTime()>c&&(b=EF(a,b)/1E3,c=a.api.Jb().getPlayerState(),JF(a,b,c))};
Yga=function(a){a&&"web"!==a&&Xga.includes(a)};
QF=function(a,b){g.F.call(this);var c=this;this.data=[];this.u=a||NaN;this.l=b||null;this.i=new g.H(function(){OF(c);PF(c)});
g.G(this,this.i)};
OF=function(a){var b=(0,g.M)();a.data.forEach(function(c){c.expire<b&&RF(a,c,!0)});
a.data=g.Ph(a.data,function(c){return!(c.expire<b)})};
RF=function(a,b,c){c&&a.l&&a.l(b.value)};
PF=function(a){a.i.stop();var b=Infinity;for(var c=g.u(a.data),d=c.next();!d.done;d=c.next())d=d.value,d.expire<b&&(b=d.expire);b&&isFinite(b)&&a.i.start(Math.max(b-Date.now(),0))};
SF=function(a){this.data=window.Float32Array?new Float32Array(a):Array(a);this.l=this.i=a-1};
TF=function(a){return a.data[a.i]||0};
pG=function(a){g.F.call(this);this.B=a;this.i=new Map;this.l=new g.H(this.u,250,this);g.G(this,this.l);this.start()};
zG=function(a,b){var c;if(null===(c=a.i.get(b))||void 0===c)a=void 0;else{a=c.buffer;for(b=[];a.l!==a.i;)a.l=(a.l+1)%a.data.length,b.push(a.data[a.l]);a=b}return a||[]};
AG=function(a,b){var c;return(null===(c=a.i.get(b))||void 0===c?void 0:TF(c.buffer))||0};
CG=function(a){this.l=a;this.i=NaN;this.buffer=new SF(100)};
DG=function(a){var b=/codecs="([^"]*)"/.exec(a.mimeType);return b&&b[1]?b[1]+" ("+a.wb()+")":a.wb()};
EG=function(a,b){g.F.call(this);var c=this;this.i=null;for(var d=[],e=0;100>=e;e++)d.push(e/100);e={threshold:d};b&&(e={threshold:d,trackVisibility:!0,delay:1E3});(this.l=window.IntersectionObserver?new IntersectionObserver(function(f){f=f[f.length-1];b?"undefined"===typeof f.isVisible?c.i=null:c.i=f.isVisible?f.intersectionRatio:0:c.i=f.intersectionRatio},e):null)&&this.l.observe(a)};
Zga=function(a,b){Jn(a,"version",b)};
HG=function(a){g.XB.call(this,{J:"div",xb:["html5-video-player"],Ea:{tabindex:g.P(a.V().experiments,"mweb_enable_custom_control_shared")||g.P(a.V().experiments,"mweb_enable_custom_control_visitor")?"":"-1",id:a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId:a.config.attrs.id},va:[{J:"div",Z:FG.VIDEO_CONTAINER,Ea:{"data-layer":"0"}}]});var b=this;this.app=a;this.Gs=this.La(FG.VIDEO_CONTAINER);this.im=new g.Lf(0,0,0,0);this.yb=null;this.Jq=new g.Lf(0,0,0,0);this.Gt=this.pu=this.ou=NaN;
this.Wp=this.Ix=!1;this.Hs=NaN;this.Vt=!1;this.jo=null;this.dispatchEvent=function(){};
this.Gu=function(){b.element.focus()};
this.vr=null;var c=this.element.addEventListener,d=this.element.removeEventListener;this.addEventListener=function(f,h,l){c.apply(b.element,[f,h,l])};
this.removeEventListener=function(f,h,l){d.apply(b.element,[f,h,l])};
var e=a.V();e.transparentBackground&&this.Lj("ytp-transparent");"0"===e.controlsType&&this.Lj("ytp-hide-controls");g.Nh(this.element,"ytp-exp-bottom-control-flexbox");e.S("html5_player_bottom_linear_gradient")&&g.Nh(this.element,"ytp-linear-gradient-bottom-experiment");e.S("web_player_bigger_buttons_like_mobile")&&g.Nh(this.element,"ytp-exp-bigger-button-like-mobile");e.S("enable_new_paid_product_placement")&&g.Nh(this.element,"ytp-exp-ppp-update");Zga(this.element,GG(a));this.VA=!1;vy(e)&&"blazer"!==
e.playerStyle&&window.matchMedia&&(this.vr="desktop-polymer"===e.playerStyle?[{query:window.matchMedia("(max-width: 656px)"),size:new g.ff(426,240)},{query:window.matchMedia("(max-width: 856px)"),size:new g.ff(640,360)},{query:window.matchMedia("(max-width: 999px)"),size:new g.ff(854,480)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.ff(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.ff(854,480)},{query:window.matchMedia("(min-width: 1000px)"),
size:new g.ff(640,360)}]:[{query:window.matchMedia("(max-width: 656px)"),size:new g.ff(426,240)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.ff(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.ff(854,480)},{query:window.matchMedia("(min-width: 657px)"),size:new g.ff(640,360)}]);this.Uv=e.useFastSizingOnWatchDefault;this.Fn=new g.ff(NaN,NaN);$ga(this);this.Y(a.Fa,"onMutedAutoplayChange",this.zo)};
$ga=function(a){function b(){a.yb&&IG(a);JG(a)!==a.Vt&&a.resize()}
function c(h,l){a.updateVideoData(l)}
function d(h){h.getVideoData()&&a.updateVideoData(h.getVideoData())}
function e(){a.Jq=new g.Lf(0,0,0,0);a.im=new g.Lf(0,0,0,0)}
var f=a.app.Fa;f.addEventListener("initializingmode",e);f.addEventListener("videoplayerreset",d);f.addEventListener("videodatachange",c);f.addEventListener("presentingplayerstatechange",b);g.vg(a,function(){f.removeEventListener("initializingmode",e);f.removeEventListener("videoplayerreset",d);f.removeEventListener("videodatachange",c);f.removeEventListener("presentingplayerstatechange",b)})};
LG=function(a){var b=g.P(a.app.V().experiments,"html5_aspect_from_adaptive_format"),c=g.T(a.app);if(c=c?c.getVideoData():null){if(c.i&&mw(c.i)||c.i&&nw(c.i)||c.i&&ow(c.i))return 16/9;if(b&&Hz(c)&&c.l.i)return b=c.l.videoInfos[0].video,KG(b.width,b.height)}return(a=a.yb)?KG(a.videoWidth,a.videoHeight):b?16/9:NaN};
MG=function(a,b,c,d){var e=c,f=KG(b.width,b.height);a.Ix?e=c<f?Infinity:0:isNaN(a.Gt)?isNaN(a.pu)||(e=a.pu):e=a.Gt;isFinite(e)||(e=Math.max(c,f));var h;e>f?h={width:b.width,height:b.width/e,aspectRatio:e}:e<f?h={width:b.height*e,height:b.height,aspectRatio:e}:h={width:b.width,height:b.height,aspectRatio:f};d||isNaN(c)||(c>e?h.width=h.height*c:c<e&&(h.height=h.width/c),h.aspectRatio=c);return h};
KG=function(a,b){return 1>Math.abs(NG*b-a)||1>Math.abs(NG/a-b)?NG:a/b};
JG=function(a){if(1===a.app.getAppState())return!1;if(6===a.app.getAppState())return!0;var b=g.T(a.app);if(!b||b.Hh())return!1;var c=a.app.Fa.hc();a=!g.S(c,2)||!g.P(a.app.V().experiments,"html5_leanback_gapless_elem_display_killswitch")&&b&&b.getVideoData().Da;b=g.S(c,1024);return c&&a&&!b&&!c.isCued()};
IG=function(a){var b=a.app.V();var c="0"===b.controlsType&&g.P(a.app.V().experiments,"mweb_native_control_in_faux_fullscreen_shared")&&!!g.On()&&!g.Nn();b="3"===b.controlsType&&!a.Wp&&JG(a)&&!a.app.qo||c;a.yb.controls=b;a.yb.tabIndex=b?0:-1;b?a.yb.removeEventListener("focus",a.Gu):g.P(a.app.V().experiments,"disable_focus_redirect")||a.yb.addEventListener("focus",a.Gu)};
QG=function(a){var b=a.Ne(),c=1,d=MG(a,b,a.getVideoAspectRatio()),e=Lk();if(JG(a)){var f=LG(a);var h=isNaN(f)||jn||OG&&g.nm;Mk&&!g.Ge(601)?f=d.aspectRatio:h=h||"3"===a.app.V().controlsType;h?h=new g.Lf(0,0,b.width,b.height):(c=d.aspectRatio/f,h=new g.Lf((b.width-d.width/c)/2,(b.height-d.height)/2,d.width/c,d.height),1===c&&g.nm&&(f=h.width-b.height*f,0<f&&(h.width+=f,h.height+=f)));if(e||a.VA)a.yb.style.display="";a.Vt=!0}else{h=-b.height;Mk?h*=window.devicePixelRatio:g.PG&&(h-=window.screen.height);
h=new g.Lf(0,h,b.width,b.height);if(e||a.VA)a.yb.style.display="none";a.Vt=!1}if(!Mf(a.Jq,h)){a.Jq=h;g.ny(a.app.V())?(a.yb.style.setProperty("width",h.width+"px","important"),a.yb.style.setProperty("height",h.height+"px","important")):cg(a.yb,new g.ff(h.width,h.height));f=new g.df(h.left,h.top);e=a.yb;var l=Math.round(f.x);l instanceof g.df?(h=l.x,f=l.y):(h=l,f=Math.round(f.y));e.style.left=bg(h,!1);e.style.top=bg(f,!1)}b=new g.Lf((b.width-d.width)/2,(b.height-d.height)/2,d.width,d.height);Mf(a.im,
b)||(a.im=b);g.Rf(a.yb,"transform",1===c?"":"scaleX("+c+")")};
RG=function(){this.B=[];this.C=[];this.i=[];this.l=new Set;this.D=new Map};
g.SG=function(){RG.i||(RG.i=new RG);return RG.i};
aha=function(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.l.has(c)&&a.u&&a.u();var h=g.io(c),l=go(c);h&&l&&(d.csn=h,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Ao(a.client,h,l,[g.bo(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Ao(a.client,h,l,[g.bo(d.playerResponse.trackingParams)]))})};
g.TG=function(a,b,c,d){d=void 0===d?0:d;if(a.l.has(d))a.B.push([b,c]);else{var e=g.io(d);c=c||go(d);e&&c&&Ao(a.client,e,c,[b])}};
bha=function(a,b,c){c=void 0===c?{}:c;a.l.add(c.layer||0);a.u=function(){UG(a,b,c);var f=go(c.layer);if(f){for(var h=g.u(a.B),l=h.next();!l.done;l=h.next())l=l.value,g.TG(a,l[0],l[1]||f,c.layer);f=g.u(a.C);for(h=f.next();!h.done;h=f.next()){var m=h.value;h=void 0;h=void 0===h?0:h;l=g.io(h);var n=m[0]||go(h);l&&n&&(h=a.client,m=m[1],m={csn:l,ve:n.getAsJson(),clientData:m},n={md:jo(l),Ph:l},"UNDEFINED_CSN"==l?zo("visualElementStateChanged",m,n):h?wl("visualElementStateChanged",m,h,n):g.Zl("visualElementStateChanged",
m,n))}}};
g.io(c.layer)||a.u();if(c.Ux)for(var d=g.u(c.Ux),e=d.next();!e.done;e=d.next())aha(a,e.value,c.layer);else g.so(Error("Delayed screen needs a data promise."))};
UG=function(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.uG?c.uG:c.layer;var e=g.io(d);d=go(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var h=a.client,l=f,m=c.Rx,n=c.md,p=cha(),q={csn:p,pageVe:(new ao({veType:b,youtubeData:void 0})).getAsJson()};l&&l.visualElement?q.implicitGesture={parentCsn:l.clientScreenNonce,gesturedVe:l.visualElement.getAsJson()}:l&&g.to(new g.hm("newScreen() parent element does not have a VE - rootVe",
b));m&&(q.cloneCsn=m);m={md:n,Ph:p};h?wl("screenCreated",q,h,m):g.Zl("screenCreated",q,m);Pl(Go,new yo(p));var r=p}catch(t){Zba(t,{Jo:b,rootVe:d,parentVisualElement:void 0,zT:e,bU:f,Rx:c.Rx});g.so(t);return}lo(r,b,c.layer,c.md);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=g.J("screen_manager_skip_hide_killswitch"))){a:{b=g.u(Object.values(dha));for(f=b.next();!f.done;f=b.next())if(g.io(f.value)==e){b=!0;break a}b=!1}b=!b}b&&Co(a.client,e,d,!0);a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=
r||"");Up("csn",r);Io.getInstance().clear();d=go(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(g.J("web_mark_root_visible")||g.J("music_web_mark_root_visible"))&&Bo(r,d,void 0);a.l.delete(c.layer||0);a.u=void 0;e=g.u(a.D);for(r=e.next();!r.done;r=e.next())r=g.u(r.value),b=r.next().value,r.next().value.has(c.layer)&&d&&g.TG(a,b,d,c.layer)};
g.VG=function(){this.csn=g.io();this.clientPlaybackNonce=null;this.elements=new Set;this.u=new Set;this.i=new Set;this.l=new Set};
WG=function(a,b){a.elements.has(b);a.elements.delete(b);a.u.delete(b);a.i.delete(b);a.l.delete(b)};
XG=function(a){if(a.csn!==g.io())if("UNDEFINED_CSN"===a.csn)a.csn=g.io();else{var b=g.io(),c=go();if(b&&c){a.csn=b;for(var d=g.u(a.elements),e=d.next();!e.done;e=d.next())(e=e.value.visualElement)&&e.isClientVe()&&Ho(b,c,e)}if(b)for(a=g.u(a.i),e=a.next();!e.done;e=a.next())(c=e.value.visualElement)&&c.isClientVe()&&Bo(b,c,void 0)}};
YG=function(a,b,c,d,e){g.XB.call(this,{J:"div",Z:"ytp-horizonchart"});this.G=b;this.sampleCount=c;this.C=d;this.D=e;this.index=0;this.heightPx=-1;this.B=this.l=null;this.i=Math.round(a/c);this.element.style.width=this.i*this.sampleCount+"px";this.element.style.height=this.G+"em"};
ZG=function(a,b){if(-1===a.heightPx){var c=null;try{c=g.sf("CANVAS"),a.l=c.getContext("2d")}catch(e){}if(a.l){var d=a.i*a.sampleCount;a.B=c;a.B.width=d;a.B.style.width=d+"px";a.element.appendChild(a.B)}else for(a.sampleCount=Math.floor(a.sampleCount/4),a.i*=4,c=0;c<a.sampleCount;c++)d=g.sf("SPAN"),d.style.width=a.i+"px",d.style.left=a.i*c+"px",a.element.appendChild(d)}c=a.element.clientHeight||24;c!==a.heightPx&&(a.heightPx=c,a.l&&(c=1<(window.devicePixelRatio||1)?2:1,a.B.height=a.heightPx*c,a.B.style.height=
a.heightPx+"px",a.l.scale(1,c)));b=g.u(b);for(c=b.next();!c.done;c=b.next())a.setValue(a.index,c.value),a.index=(a.index+1)%a.sampleCount;b=a.index;a.l?a.l.clearRect(b*a.i,0,a.i,a.heightPx):(a=a.element.children[b],a.style.height="0px",a.style.borderTop="")};
$G=function(a){var b=null;b={J:"button",xb:["html5-video-info-panel-close","ytp-button"],Ea:{title:"close"},Oa:"[x]"};g.XB.call(this,{J:"div",Z:"html5-video-info-panel",va:[b,{J:"div",Z:"html5-video-info-panel-content",va:[{J:"div",va:[{J:"div",Oa:"Video ID / sCPN"},{J:"span",Oa:"{{video_id_and_cpn}}"}]},{J:"div",va:[{J:"div",Oa:"Viewport / Frames"},{J:"span",Oa:"{{dims_and_frames}}"}]},{J:"div",va:[{J:"div",Oa:"Current / Optimal Res"},{J:"span",Oa:"{{resolution}}"}]},{J:"div",va:[{J:"div",Oa:"Volume / Normalized"},
{J:"span",Oa:"{{volume}}"}]},{J:"div",va:[{J:"div",Oa:"Codecs"},{J:"span",Oa:"{{codecs}}"}]},{J:"div",Ea:{style:"{{shader_info_style}}"},va:[{J:"div",Oa:"Shader Info"},{J:"span",Oa:"{{shader_info}}"}]},{J:"div",Ea:{style:"{{color_style}}"},va:[{J:"div",Oa:"Color"},{J:"span",Oa:"{{color}}"}]},{J:"div",Ea:{style:"{{drm_style}}"},va:[{J:"div",Oa:"Protected"},{J:"span",Oa:"{{drm}}"}]},{J:"div",Ea:{style:"{{bandwidth_style}}"},va:[{J:"div",Oa:"Connection Speed"},{J:"span",va:[{J:"span",Oa:"{{bandwidth_chart}}"},
{J:"span",Oa:"{{bandwidth_kbps}}"}]}]},{J:"div",Ea:{style:"{{network_activity_style}}"},va:[{J:"div",Oa:"Network Activity"},{J:"span",va:[{J:"span",Oa:"{{network_activity_chart}}"},{J:"span",Oa:"{{network_activity_bytes}}"}]}]},{J:"div",va:[{J:"div",Oa:"Buffer Health"},{J:"span",va:[{J:"span",Oa:"{{buffer_health_chart}}"},{J:"span",Oa:"{{buffer_health_seconds}}"}]}]},{J:"div",Ea:{style:"{{live_latency_style}}"},va:[{J:"div",Oa:"Live Latency"},{J:"span",va:[{J:"span",Oa:"{{live_latency_chart}}"},{J:"span",
Oa:"{{live_latency_secs}}"}]}]},{J:"div",Ea:{style:"{{live_mode_style}}"},va:[{J:"div",Oa:"Live Mode"},{J:"span",Oa:"{{live_mode}}"}]},{J:"div",Ea:{style:"{{playback_categories_style}}"},va:[{J:"div",Oa:"Playback Categories"},{J:"span",Oa:"{{playback_categories}}"}]},{J:"div",va:[{J:"div",Oa:"Mystery Text"},{J:"span",Oa:"{{debug_info}}"}]},{J:"div",Ea:{style:"{{release_style}}"},va:[{J:"div",Oa:"Player Release"},{J:"span",Oa:"{{release_name}}"}]}]}]});b&&(b=this.La("html5-video-info-panel-close"),
this.Y(b,"click",this.hide));b=[0,18750,37500,81250,128E3,256E3,512E3,2048E3,8192E3,32768E3,131072E3];var c="#000 #d53e4f #f46d43 #fdae61 #fee08b #e6f598 #abdda4 #66c2a5 #3288bd #124588 #fff".split(" "),d=b.map(function(e){return e/4});
this.i=new YG(300,1,150,b,c);g.G(this,this.i);g.WB(this,"bandwidth_chart",this.i);this.B=new YG(300,1,150,[0,3,10,15,30,60,90],"#000 #66c2a5 #abdda4 #e6f598 #fdae61 #f46d43 #a8330f".split(" "));g.G(this,this.B);g.WB(this,"live_latency_chart",this.B);this.l=new YG(300,1,150,[0,15,30,60,90,120],"#000 #fdae61 #e6f598 #66c2a5 #3288bd #fff".split(" "));g.G(this,this.l);g.WB(this,"buffer_health_chart",this.l);this.C=new YG(300,1,150,d,c);g.G(this,this.C);g.WB(this,"network_activity_chart",this.C);this.delay=
new g.H(this.oe,500,this);g.G(this,this.delay);this.D=a};
eha=function(a){a=void 0===a?{}:a;var b=a.Ud,c=a.Ee,d=a.vb,e=a.Gl;this.qh=a.qh;this.Ud=b;this.Ee=c;this.vb=d;this.Gl=e};
aH=function(a,b){if(0>b)return!0;var c=a.vb();return b<c||b===c&&!a.qh||b===c&&(a=a.Gl())&&b===a.oa?!0:!1};
fha=function(a,b,c){if(!aH(a,b))return 0;if(!a.Ud||!isNaN(c)&&0<c)return 2;if(0>b)return 1;c=a.vb();return b<c||b===c&&(a=a.Gl())&&b===a.oa&&!a.pending?2:1};
gha=function(a){this.schedule=a;this.i=NaN;this.l=[];this.totalBytes=0};
bH=function(a,b,c,d){var e=void 0===d?{}:d;d=void 0===e.yf?!1:e.yf;var f=void 0===e.Kg?!1:e.Kg,h=void 0===e.ck?!1:e.ck,l=e.Se,m=e.oa;e=e.bd;this.ma=null;this.xa=this.i=NaN;this.Ka=0;this.X=this.Da=this.l=this.B=NaN;this.Ba=this.ea=this.isActive=!1;this.u=0;this.W=NaN;this.I=this.D=Infinity;this.T=NaN;this.Ha=!1;this.G=this.N=NaN;this.C=this.Aa=void 0;this.yf=d;this.Kg=f;this.ck=h;this.Se=l;this.oa=m;this.bd=e;this.schedule=a;this.Pa=b;this.Ma=c;this.snapshot=Gx(this.schedule)};
cH=function(a){return{rt:(Date.now()-a.i).toFixed(),lb:a.l.toFixed(),pt:(1E3*a.W).toFixed(),pb:a.Pa.toFixed(),stall:(1E3*a.u).toFixed(),elbowTime:(a.xa-a.i).toFixed(),elbowBytes:a.Ka.toFixed()}};
hha=function(a){a.i=Date.now();a.B=a.i;a.l=0;a.Da=a.i;a.X=0;a.C&&(a.C=[]);a.ea=!1;a.Ba=!1;a.u=0;a.snapshot=Gx(a.schedule);a.D=Infinity;a.I=Infinity;dH(a);eH(a,a.i);a.W=(a.N-a.i)/1E3;a.G=NaN;a.Aa=void 0};
fH=function(a){!a.G&&a.ma&&(a.G=a.ma(),3===a.G&&(a.Aa=new gha(a.schedule)));return a.G};
jH=function(a,b,c,d){var e=(b-a.B)/1E3,f=c-a.l,h=fH(a);if(3===h&&f){var l=a.Aa;l.l.push({NT:f,mU:isNaN(l.i)?NaN:d-l.i,cU:d});l.i=d}a.isActive?1===h&&0<f&&(.2<e||1024>f?(a.u+=e,.2<e&&iH(a,.05,f)):iH(a,e,f),a.Ba=!0):gH(a,c)&&(1===h&&(d=(b-a.i)/1E3,hH(a)||a.Kg||(h=a.schedule,h.C.wf(1,d),Ix(h))),a.xa=b,a.Ka=c,a.isActive=!0);a.Kg||Dx(a.schedule,e,f);a.B=b;a.l=c};
iH=function(a,b,c){if(!a.Kg){b=Math.max(b,.05);var d=a.schedule,e=b;a=a.ck;a=void 0===a?!1:a;d.l.wf(void 0===b?e:b,c/e);a||(d.G=Ax())}};
lH=function(a,b,c){c=Math.round(c/1024);a.C&&a.C.push(kH(b-a.Da,c-a.X));a.Da=b;a.X=c};
gH=function(a,b){return b?a.Se&&1!==fH(a)?!0:2048<=b:!1};
mH=function(a){return gH(a,a.l)};
dH=function(a){a.T=a.i+1E3*a.snapshot.delay;a.Ha=!1};
nH=function(a,b){if(a.Se&&void 0!==a.oa&&void 0!==a.bd){var c=Math,d=c.min,e=a.D;var f=a.Se;var h=a.i;if(aH(f,a.oa))f=b;else{var l=0;f.Ud&&(l=.2);f=h+1E3*(f.Ee+l)}a.D=d.call(c,e,f);c=Math;d=c.min;e=a.I;f=a.Se;h=a.i;l=fha(f,a.oa,a.bd);2!==l&&(b=l?b:h+1E3*f.Ee,f.Ud&&(b+=1E3*f.Ee));a.I=d.call(c,e,b);a.D<=a.i?dH(a):(a.T=a.D,a.Ha=!0)}};
hH=function(a){a.Se&&nH(a,Date.now());return a.Ha};
eH=function(a,b){b=void 0===b?Date.now():b;if(a.Se){nH(a,b);var c=a.G?a.Se?1!==fH(a):!1:a.D!==a.I;if(c){if(c=a.I,b<c){a.N=a.I;return}}else c=a.D;c=Math.max(c,a.T)}else c=a.T;var d=a.Pa-a.l;0>d&&(d=0);d=1E3*(d*a.snapshot.stall+d/a.snapshot.byterate);d=mH(a)?d+b:d+Math.max(b,c);a.N=d};
kH=function(a,b){for(var c="";4095<a;)c+=kH(4095,0),a-=4095;for(;4095<b;)c+=kH(a,4095),b-=4095,a=0;return c+("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b&63))};
oH=function(a,b){this.schedule=a;this.policy=b;this.playbackRate=1};
qH=function(a,b,c,d,e){e=void 0===e?!1:e;a.policy.hf&&(d=Math.abs(d));d/=a.playbackRate;var f=1/Fx(a.schedule);var h=.9*(d-a.policy.Oe);h=Math.max(h,Cx(a.schedule)+2048*f);c=h/f*a.policy.Hm/(b+c);c=Math.min(c,d);a.policy.Hc&&e&&(c=Math.max(c,a.policy.Hc));return pH(a,c,b)};
pH=function(a,b,c){return Math.ceil(Math.max(Math.max(65536,a.policy.Gm*c),Math.min(Math.min(a.policy.xa,31*c),Math.ceil(b*c))))||65536};
rH=function(a){var b=Fx(a.schedule);if(a.policy.zj)return b;var c=a.policy.Dm,d=1E-9+Cx(a.schedule);b*=Math.min(1,c/(b*d));a.policy.fg&&(c=((zx(a.schedule.u,.98)||0)-1)/2,c=Math.max(0,Math.min(1,c)),b*=1-a.policy.fg*c);return b};
sH=function(a){return rH(a)/a.playbackRate};
tH=function(a,b,c,d,e){g.N.call(this);this.u=a;this.videoTrack=b;this.audioTrack=c;this.policy=d;this.D=e;this.seekCount=this.l=0;this.i=!1;this.C=null;this.B=this.u.isManifestless&&!this.u.qd};
uH=function(a,b,c){var d=b.i.index,e=b.l.oa;Pu(d,e)||c&&c.oa===e?(a.K(),b.C=!Pu(d,e),b.I=!Pu(d,e)):(a.K(),b.C=!0,b.I=!0)};
zH=function(a,b,c,d){a.K();if(!b.i.pd())return 0!==c&&vH(b),c;var e=wH(b,c);if(!isNaN(e))return a.K(),e;xH(b);return d&&(a=Tv(d.yd(),c),!isNaN(a))?(yH(b,a+iha),c):yH(b,c)};
kha=function(a,b,c,d){if(a.i&&a.l){var e=jha(a,b,c);if(-1!==e){a.videoTrack.C=!1;a.audioTrack.C=!1;a.B=!0;g.jh(function(){AH(a,"seekreason","behindMinSq");BH(a,e)});
return}}c?a.videoTrack.I=!1:a.audioTrack.I=!1;var f=a.policy.Zg||!a.B;if(0<=wH(a.videoTrack,a.l)&&0<=wH(a.audioTrack,a.l)&&f){if(a.videoTrack.C||a.audioTrack.C)a.K(),AH(a,"iterativeSeeking","done;count."+a.seekCount,!1);a.videoTrack.C=!1;a.audioTrack.C=!1}else d&&g.jh(function(){if(a.B||!a.policy.Pa)CH(a);else{var h=b.startTime,l=b.duration,m=c?a.videoTrack.C:a.audioTrack.C;m=!a.ya()&&m;var n=-1!==a.videoTrack.D&&-1!==a.audioTrack.D,p=!a.videoTrack.I&&!a.audioTrack.I;m&&n&&p&&(a.l>=h&&a.l<h+l+.1?
((c?a.videoTrack:a.audioTrack).C=!1,a.videoTrack.C||a.audioTrack.C||(a.K(),AH(a,"iterativeSeeking","done;count."+a.seekCount,!1),a.seekCount=0)):8>a.seekCount?(a.seekCount++,a.K(),AH(a,"iterativeSeeking","inprogress;count."+a.seekCount+";target."+a.l+";actual."+h+";duration."+l+";isVideo."+c,!1),a.seek(a.l)):(a.K(),AH(a,"iterativeSeeking","incomplete;count."+a.seekCount+";target."+a.l+";actual."+h,!1),a.seekCount=0,a.videoTrack.C=!1,a.audioTrack.C=!1,a.U("seekplayerrequired",h+.1,!0)))}})};
jha=function(a,b,c){if(!a.i)return-1;c=(c?a.videoTrack:a.audioTrack).i.index;var d=c.zf(a.l);return(Pu(c,a.u.Lc)||b.oa===a.u.Lc)&&d<a.u.Lc?(a.K(),a.u.Nb()):-1};
BH=function(a,b){!a.ya()&&a.B&&-1!==a.videoTrack.D&&-1!==a.audioTrack.D&&(a.B=!1,a.K(),a.U("seekplayerrequired",b+.1,!0))};
CH=function(a){var b=-1!==a.videoTrack.D,c=-1!==a.audioTrack.D;if(!b||!c)if(b=!b&&a.videoTrack.De(),c=!c&&a.audioTrack.De(),b||c)if(c=b?a.videoTrack:a.audioTrack,b=b?a.audioTrack:a.videoTrack,c.D=c.De().info.oa,-1!==b.D){var d=Math.max(b.i.index.Pd(b.D),c.i.index.Pd(c.D));AH(a,"seekreason","initManifestlessSync");g.jh(function(){return BH(a,d)});
a.C&&(a.C.resolve(d+.1),a.C=null)}};
AH=function(a,b,c,d){a.U("ctmp",b,c,void 0===d?!1:d)};
DH=function(){this.u=this.B=0;this.ticks={}};
FH=function(a,b,c,d,e){g.N.call(this);this.I=a;this.policy=b;this.D=c;this.u=this.X=this.i=null;this.N=!1;this.B=this.C=NaN;this.G=0;this.T=null;this.l=e?1:0;this.policy.I&&a.isManifestless||EH(this.D,"cuepoint",this.W,this);this.ea=d};
GH=function(a,b,c){a.policy.Aa&&(b.startSecs+=isNaN(a.G)?0:a.G);a=a.I;a.N.push(b);a.U("cuepointsadded",c)};
nF=function(a,b,c,d){HH(a.D,d,c,b);HH(a.ea,d,c,b);Fw(a.I,d,!0);Fw(a.I,d,!1);mF(a,"sdai","rollbk2_seg"+d+"_rbt"+c.toFixed(3)+"_lt"+b.toFixed(3))};
IH=function(a,b){if(a.i){a.u=null;a.N=!1;var c=a.i.tc.durationSecs-(b.startTime+a.G-a.i.tc.startSecs);0>=c||(c=new g.mt(a.i.tc.startSecs-(a.policy.Aa&&!isNaN(a.G)?a.G:0),c,a.i.tc.context,a.i.tc.identifier,"stop",a.i.tc.i+1E3*b.duration),mF(a,"cuepointdiscontinuity","segNum."+b.oa),a.policy.I?GH(a,c,b.oa):a.W(c,b.oa))}};
JH=function(a,b){a.u=null;a.N=!1;0<b&&4===a.l&&(a.l=5)};
mF=function(a,b,c){a.U("ctmp",b,c,!1)};
KH=function(){this.length=3;this.count=this.index=0;this.buffer=Array(3)};
lha=function(a,b){for(var c={},d=0,e=a.index;e<a.index+a.length;e++){var f=a.buffer[e%a.length];if(void 0!==f){f=Object.entries(b(f));f=g.u(f);for(var h=f.next();!h.done;h=f.next()){var l=g.u(h.value);h=l.next().value;l=l.next().value;c[d+"_"+h]=l}d++}}return c};
LH=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
MH=function(a,b,c,d,e,f){e=void 0===e?[]:e;this.W=a;this.policy=b;this.C=c;this.D=d;this.Ka=e;this.Aa=void 0===f?function(){}:f;
this.l=pz;this.i=this.I=null;this.T=-1;this.nextVideo=this.u=null;this.B=[];this.xa={};this.G=0;this.Ba=this.X=this.N=!1;this.ea=0;this.Da=new Set;this.Ha=!1;this.ma=null;this.l=pz;this.Da=new Set};
oha=function(a,b,c){NH(a,b);mha(a,c);a.I=a.u;nha(a);a.i=a.nextVideo;return OH(a)};
pha=function(a,b){if(tq(a.l,b))return null;if("m"===b.reason&&b.isLocked())return a.K(),NH(a,b),a.G=a.B.length-1,PH(a),QH(a),a.X=a.X||a.i!==a.nextVideo,a.i=a.nextVideo,new LH(a.u,a.i,b.reason);"r"===b.reason&&(a.T=-1);NH(a,b);QH(a);if("r"===b.reason&&a.nextVideo===a.i)return new LH(a.u,a.nextVideo,b.reason);a.i&&a.nextVideo&&RH(a,a.i.info)<RH(a,a.nextVideo.info)&&(b=a.l.reason,a.N=a.N||"r"===b||"u"===b||"v"===b);return null};
qha=function(a,b){if(b.info.video){if(a.i!==b)return a.i=b,OH(a)}else a.Ba=a.I!==b,a.I=b;return null};
SH=function(a,b){b.I=(0,g.M)();a.T=-1;NH(a,a.l)};
TH=function(a){for(var b=(0,g.M)()-6E4,c=g.u(a.D.videoInfos),d=c.next();!d.done;d=c.next())if(a.C.i[d.value.id].I>b)return!0;return!1};
UH=function(a,b){return new LH(a.I,a.i,b||a.l.reason)};
VH=function(a){return a.l.isLocked()};
OH=function(a){a.T=(0,g.M)();a.N=!1;return new LH(a.I,a.i,a.l.reason)};
WH=function(a){var b=!VH(a)&&-1<a.T&&8E3>(0,g.M)()-a.T,c=a.nextVideo&&3*RH(a,a.nextVideo.info)<sH(a.W);if(!b||c)PH(a),QH(a),a.X=a.X||a.nextVideo!==a.i};
XH=function(a,b){var c={};b=g.u(b);for(var d=b.next();!d.done;d=b.next())if((d=d.value)&&d.video){var e=d.video.i,f=c[e],h=f&&Dv(f)&&f.video.i>a.policy.Ha,l=e<=a.policy.Ha?Dv(d):Bv(d);if(!f||h||l)c[e]=d}return c};
NH=function(a,b){a.l=b;var c=a.D.videoInfos;if(!VH(a)){var d=(0,g.M)()-6E4;c=g.Ph(c,function(n){if(n.l>this.policy.N)return this.K(),!1;n=this.C.i[n.id];var p=n.info.i;return this.policy.qj&&this.Da.has(p)||n.I>d?!1:4<n.l.l||4<n.G?(this.K(),!1):n.B?!1:!0},a);
if(TH(a)){var e=g.Ph(c,function(n){n=n.wb();return"140"===n||"134"===n||"243"===n});
e.length&&(c=e)}}c.length||(c=a.D.videoInfos);e=g.Ph(c,b.B,b);if(a.policy.tj||a.policy.Sg){var f="m"===b.reason||"s"===b.reason;a.policy.yj&&OG&&g.nm&&(!f||1080>b.i)&&(e=e.filter(function(n){return!!n&&!!n.video&&!!n.B}));
if(!$v()&&0<e.length){var h=(b=e[0])&&b.video&&b.video.i;if(h){b=e.filter(function(n){return!!n&&!!n.video&&n.video.i===h});
var l=XH(a,b)[h].i;e=e.filter(function(n){return!!n&&!!n.video&&n.i===l})}}var m=XH(a,e);
e=e.filter(function(n){return!!n&&!!n.video&&n.i===m[n.video.i].i})}e.length||(e=[c[0]]);
e.sort(function(n,p){return RH(a,n)-RH(a,p)});
for(c=1;c<e.length;c++)b=e[c-1],f=e[c],b.video.width>f.video.width?(a.K(),g.sb(e,c),c--):RH(a,b)*a.policy.l>RH(a,f)&&(a.K(),g.sb(e,c-1),c--);c=e[e.length-1];a.Ha=!!a.i&&!!a.i.info&&a.i.info.i!==c.i;a.K();a.B=e;yfa(a.policy,c)};
mha=function(a,b){b?a.u=a.C.i[b]:(b=(b=g.lb(a.D.i,function(c){return!!c.u&&c.u.isDefault}))||a.D.i[0],a.u=a.C.i[b.id]);
PH(a)};
YH=function(a,b){for(var c=0;c+1<a.B.length&&"tiny"===a.B[c].Qa().quality;)c++;var d=sH(a.W)/a.policy.l;return RH(a,b.info)+RH(a,a.B[c])>d};
PH=function(a){if(!a.u||!a.policy.i)if(!a.u||!a.u.info.u)if(a.u=a.C.i[a.D.i[0].id],1<a.D.i.length){var b=!1;if(a.policy.Ka){if(b=!0,a.policy.Wl){var c=g.kb(a.D.i,function(d){return"250"===d.wb()});
0<=c&&(a.u=a.C.i[a.D.i[c].id],b=YH(a,a.u))}}else b=a.l.isLocked()?240>a.l.i:YH(a,a.u);b&&(a.u=a.C.i[g.jb(a.D.i).id])}};
QH=function(a){a.policy.Ie&&(a.ma=a.ma||new g.H(function(){a.policy.Ie&&a.i&&!TH(a)&&1===Math.floor(10*Math.random())?(SH(a,a.i),a.N=!0):a.ma.start()},6E4),g.Ih(a.ma));
if(!a.nextVideo||!a.policy.i)if(VH(a))a.nextVideo=360>=a.l.i?a.C.i[a.B[0].id]:a.C.i[g.jb(a.B).id],a.K();else{for(var b=Math.min(a.G,a.B.length-1),c=sH(a.W),d=RH(a,a.u.info),e=c/a.policy.u-d;0<b&&!(RH(a,a.B[b])<=e);b--);for(c=c/a.policy.l-d;b<a.B.length-1&&!(RH(a,a.B[b+1])>=c);b++);a.nextVideo=a.C.i[a.B[b].id];a.G!==b&&a.K();a.G=b}};
nha=function(a){var b=a.policy.u,c=sH(a.W)/b-RH(a,a.u.info);b=g.nb(a.B,function(d){return RH(this,d)<c},a);
0>b&&(b=0);a.G=b;a.nextVideo=a.C.i[a.B[b].id];a.K();a.Ka.length&&rha(a)};
rha=function(a){var b=a.Ka;if(!b.includes(a.nextVideo.Fl())){for(var c=g.u(a.D.videoInfos),d=c.next();!d.done;d=c.next()){d=a.C.i[d.value.id];var e=d.Fl();if(b.includes(e)){b=a.nextVideo.info.wb();c=d.info.wb();a.Aa("ombifa","f."+b+";t."+c);a.K();a.nextVideo=d;return}}a.Aa("ombifa","mismatch."+b.join("."))}};
ZH=function(a,b){a.policy.Ha=ax(b,{},a.D);NH(a,a.l);WH(a);a.N=a.nextVideo!==a.i};
RH=function(a,b){if(!a.xa[b.id]){var c=a.C.i[b.id].index.Gy(a.ea,15);c=b.C&&a.i&&a.i.index.Vc()?c||b.C:c||b.l;a.xa[b.id]=c}c=a.xa[b.id];a.policy.Tb&&b.video&&b.video.i>a.policy.Tb&&(c*=1.5);return c};
sha=function(a,b){a=Xb(a.C.i,function(c){return c.info.wb()===b});
if(!a)throw Error("Itag "+b+" from server not known.");return a};
tha=function(a){var b=[];if("m"===a.l.reason||"s"===a.l.reason)return b;if(Qda(a.C)){for(var c=Math.max(0,a.G-2);c<a.G&&c<a.B.length;c++){var d=a.B[c].wb();b.push(d)}b.reverse()}return b};
uha=function(a,b,c){this.policy=a;this.i=b;this.G=c;this.u=this.l=0;this.dd=null;this.C=[];this.indexRange=this.initRange=null;this.chunkSize=a.Um;this.B=new Uint8Array(this.chunkSize);this.D=new yE};
vha=function(a){var b=g.ij($H(a));b=ds(a.policy.i,a.i.info,aI(a),b);bI(a,b)};
cI=function(a){return!!a.dd&&a.dd.u};
eI=function(a,b){if(!cI(a)){if(1===b.info.type)a.initRange=ou(0,b.i.totalLength);else if(2===b.info.type){if(!a.dd||1!==a.dd.type)return;a.indexRange=ou(a.u*a.chunkSize+a.l,b.i.totalLength)}else if(3===b.info.type){if(3===a.dd.type&&!wu(a.dd,b.info)){a.C=[];var c=a.dd;if(b.info.oa!==c.oa+(c.Dc?1:0)||0!==b.info.Va)return}if(b.info.Dc){c=g.u(a.C);for(var d=c.next();!d.done;d=c.next())dI(a,d.value);a.C=[]}else{a.C.push(b);a.dd=b.info;return}}a.dd=b.info;dI(a,b);cI(a)&&(b=new Uint8Array(a.B.buffer,0,
a.l),c={mket:Math.round(a.i.index.Gi()),avbr:Math.round(a.i.info.C)},c=g.ij(c),b=ds(a.policy.i,a.dd.i.info,aI(a),c,a.u,b),bI(a,b,!0))}};
dI=function(a,b){for(var c=0,d=$u(b.i);c<d.length;){var e=Math.min(d.length-c,a.B.byteLength-a.l),f=new Uint8Array(d.buffer,d.byteOffset+c,e);a.B.set(f,a.l);a.l+=e;c+=e;if(a.l===a.B.length){if(b.info===a.dd&&cI(a)&&c===d.length)break;e=g.ij($H(a));e=ds(a.policy.i,a.i.info,aI(a),e,a.u,a.B);bI(a,e);e=$H(a);a.G(aI(a),js(e),is(e));a.B=new Uint8Array(a.chunkSize);a.l=0;a.u+=1}}};
$H=function(a){return{dlt:Math.round(a.dd?a.dd.B:0),mket:Math.round(a.i.index.Gi()),avbr:Math.round(a.i.info.C)}};
aI=function(a){var b,c,d={lmt:a.i.lastModified,docid:a.policy.i,fmtid:a.i.info.id,type:a.i.info.mimeType.split(";")[0],csz:a.chunkSize,clen:a.u*a.chunkSize+a.l};d="local://localhost/videoplayback?"+g.ij(d);d={itag:+a.i.info.wb(),mimeType:a.i.info.mimeType,bitrate:8*a.i.info.l,lastModified:String(a.i.lastModified),initRange:null===(b=a.initRange)||void 0===b?void 0:pu(b),indexRange:null===(c=a.indexRange)||void 0===c?void 0:pu(c),url:d};var e=a.i.info;if(e=0<e.id.indexOf(";")?e.id.split(";")[1]:null)d.xtags=
e;if(e=a.i.info.video)if(d.quality=e.quality,d.qualityLabel=e.qualityLabel,d.width=e.width,d.height=e.height,e=e.fps)d.fps=e;if(a=a.i.info.audio){if(e=a.sampleRate)d.audioSampleRate=String(e);if(a=a.i)d.audioChannels=a}return d};
bI=function(a,b,c){c=void 0===c?!1:c;b.then(function(d){(c||4===d)&&a.D.resolve(d)},function(d){a.D.reject(d)})};
wha=function(a){for(var b=new Uint8Array(0),c=new DataView(a.buffer,a.byteOffset,a.length),d=0;d<a.length-8;){var e=c.getUint32(d);if(1>=e)break;var f=c.getUint32(d+4);if(1836019574===f)d+=8;else{if(1886614376===f){f=a.subarray(d,d+e);var h=new Uint8Array(b.length+f.length);h.set(b);h.set(f,b.length);b=h}d+=e}}return b};
xha=function(a){a=Ht(a,1886614376);g.wd(a,function(b){return!b.l});
return g.Zc(a,function(b){return new Uint8Array(b.data.buffer,b.offset+b.data.byteOffset,b.size)})};
yha=function(a){var b=g.rg(a,function(e,f){return e+f.length},0),c=new Uint8Array(b),d=0;
g.wd(a,function(e){c.set(e,d);d+=e.length});
return c};
zha=function(a,b,c,d){this.ids=a;this.l=b;this.u=c;this.i=d};
fI=function(a,b,c){this.initData=a;this.contentType=b;this.isPrefetch=c;this.i=this.cryptoPeriodIndex=NaN;this.l=[];this.cd=!1};
gI=function(a){a:{var b=a.initData;try{for(var c=0,d=new DataView(b.buffer);c<d.byteLength-8;){var e=d.getUint32(c);if(1>=e)break;if(1886614376===d.getUint32(c+4)){var f=32;if(0<d.getUint8(c+8)){var h=d.getUint32(c+28);f+=16*h+4}var l=d.getUint32(c+f-4);try{for(var m=b.subarray(c+f,c+f+l),n=new g.Qi,p=new re(m);ue(p)&&4!=p.l;){var q;switch(p.u){case 2:f=q=xe(p);g.Ve(n,2).push(f);break;case 4:q=xe(p);g.We(n,4,q);break;case 7:q=qe(p.i);g.We(n,7,q);break;case 9:q=qe(p.i);g.We(n,9,q);break;case 10:q=
qe(p.i);g.We(n,10,q);break;case 11:q=pe(p.i);g.We(n,11,q);break;case 12:q=qe(p.i);g.We(n,12,q);break;case 13:f=q=xe(p);g.Ve(n,13).push(f);break;case 14:q=new Ri;f=p;var r=q,t=Iaa,v=f.i.u,y=qe(f.i),C=f.i.i+y;f.i.u=C;t(r,f);f.i.i=C;f.i.u=v;f=n;r=q;t=Ri;var z=f,E=z,O=t;E.u||(E.u={});if(!E.u[14]){for(var L=g.Ve(E,14),ca=[],ha=0;ha<L.length;ha++)ca[ha]=new O(L[ha]);E.u[14]=ca}var qa=z.u[14];qa==Te&&(qa=z.u[14]=[]);var wc=qa;var zd=r?r:new t;var Qe=g.Ve(f,14);wc.push(zd);Qe.push(Ze(zd));break;case 15:q=
we(p);g.We(n,15,q);break;case 16:q=we(p);g.We(n,16,q);break;case 17:q=qe(p.i);g.We(n,17,q);break;case 1:q=pe(p.i);g.We(n,1,q);break;case 3:q=we(p);g.We(n,3,q);break;case 5:q=we(p);g.We(n,5,q);break;case 6:q=we(p);g.We(n,6,q);break;case 8:q=xe(p);g.We(n,8,q);break;default:ve(p)}}f=n;if(null!==f){var Ab=f;break a}}catch(Pb){}}c+=e}Ab=null}catch(Pb){Ab=null}}if(null!=Ab)for(b=g.Ve(Ab,7),null==b||a.cd||(a.cryptoPeriodIndex=b),b=g.Ve(Ab,10),null!=b&&0<b&&!a.cd&&(a.i=b),Ab=g.Ve(Ab,2),Ab=!Ab.length||Ab[0]instanceof
Uint8Array?Ab:g.Zc(Ab,Ye),Ab=g.u(Ab),b=Ab.next();!b.done;b=Ab.next())a.l.push(g.Je(b.value,4))};
hI=function(a){this.i=a;this.offset=0};
iI=function(a){if(a.offset>=a.i.totalLength)throw Error();return bv(a.i,a.offset++)};
jI=function(a,b){b=void 0===b?!1:b;var c=iI(a);if(1===c){b=-1;for(c=0;7>c;c++){var d=iI(a);-1===b&&255!==d&&(b=0);-1<b&&(b=256*b+d)}return b}d=128;for(var e=0;6>e&&d>c;e++)c=256*c+iI(a),d*=128;return b?c:c-d};
kI=function(a,b,c){g.N.call(this);var d=this;this.policy=a;this.u=b;this.Pa=c;this.l=[];this.i=null;this.X=-1;this.I=0;this.ea=NaN;this.N=0;this.C=NaN;this.xa=0;this.ma=-1;this.B=this.T=this.Ha=this.Aa=this.Da=this.Ba=this.D=this.G=this.W=null;this.Ka=!1;this.timestampOffset=0;this.Pa=c;if(this.policy.i){var e=this.u,f=this.policy.i;this.B=new uha(this.policy,e,function(h,l,m){d.U("localmediachange",2,{jm:new Iea(f,h,e.info,l,m)})});
this.B.D.promise.then(function(h){d.B=null;1===h&&d.U("localmediachange",h)},function(){d.B=null;
d.U("localmediachange",4)});
vha(this.B)}};
lI=function(a){return a.l.length?a.l[0]:null};
mI=function(a){return a.l.length?a.l[a.l.length-1]:null};
tI=function(a,b,c){if(a.D){var d=a.D.Va+a.D.l;if(a.policy.dg&&0<c.info.Va)if(c.info.oa===a.D.oa&&c.info.Va<d){if(c.info.Va+c.info.l<=d)return;c=gv(c,d-c.info.Va)[1]}else if(0<=c.info.oa&&0<=a.D.oa&&!wu(a.D,c.info))throw new g.hm("improper_continuation",ru(a.D),ru(c.info));if(a.policy.bh){d=a.D;var e=c.info;d=d.oa!==e.oa&&e.oa!==d.oa+1||d.type!==e.type||g.cf(d.C,e.C)&&d.oa===e.oa?!1:xu(d,e)}else d=xu(a.D,c.info);d||(a.C=NaN,a.xa=0,a.ma=-1)}else if(a.policy.dg&&0<c.info.Va)throw new g.hm("continuation_of_null",
ru(c.info));a.D=c.info;a.u=c.info.i;0===c.info.Va?nI(a):!a.u.re()&&a.G&&Au(c.info,a.G);if(a.i){d=hv(a.i,c);if(!d)throw new g.hm("failed_to_merge",ru(a.i.info),ru(c.info));a.i=d}else a.i=c;a:{c=g.iv(a.i.info.i.info);if(3!==a.i.info.type){if(!a.i.info.Dc)break a;6===a.i.info.type?oI(a,b,a.i):pI(a,a.i);a.i=null}for(;a.i;){d=a.i.i.totalLength;if(0>=a.X&&0===a.I){var f=a.i.i,h=-1;e=-1;if(c){for(var l=0;l+8<f.totalLength;){var m=cv(f,l),n=cv(f,l+4);l+=m||1;if(1836019558===n)h=l;else if(1835295092===n){e=
l;break}}0>e&&(h=-1)}else{f=new hI(f);for(m=l=!1;;){n=f.Bh();var p=f;try{var q=jI(p,!0),r=jI(p,!1);var t=q;var v=r}catch(C){v=t=-1}p=t;var y=v;if(0>p)break;if(408125543!==p)if(524531317===p)l=!0,0<=y&&(e=f.Bh()+y,m=!0);else{if(l&&(160===p||163===p)&&(0>h&&(h=n),m))break;163===p&&(h=Math.max(0,h),e=f.Bh()+y);if(160===p){0>h&&(e=h=f.Bh()+y);break}f.skip(y)}}0>h&&(e=-1)}if(0>h)break;a.X=h;a.I=e-h}if(a.X>d)break;a.X?(d=qI(a,a.X),d.u&&!a.u.re()&&rI(a,d),oI(a,b,d),sI(a,d),a.X=0):a.I&&(d=qI(a,0>a.I?Infinity:
a.I),a.I-=d.i.totalLength,sI(a,d))}}a.i&&a.i.info.Dc&&(sI(a,a.i),a.i=null)};
pI=function(a,b){!a.u.re()&&0===b.info.Va&&(g.iv(b.info.i.info)||b.info.i.info.cd())&&ov(b);if(1===b.info.type)try{rI(a,b),uI(a,b)}catch(d){g.so(d);var c=zu(b.info);c.hms="1";a.U("error",c||{})}b.info.i.It(b);a.B&&eI(a.B,b)};
Aha=function(a){var b=a.l.reduce(function(c,d){return c+d.i.totalLength},0);
a.i&&(b+=a.i.i.totalLength);return b};
vI=function(a){return g.Zc(a.l,function(b){return b.info})};
qI=function(a,b){var c=a.i;b=Math.min(b,c.i.totalLength);if(b===c.i.totalLength)return a.i=null,c;c=gv(c,b);a.i=c[1];return c[0]};
rI=function(a,b){var c=ev(b);if(!a.policy.lm&&Cv(b.info.i.info)&&"bt2020"===b.info.i.info.Qa().primaries){var d=new Jt(c);Kt(d,[408125543,374648427,174,224,21936,21937])&&(d=d.start+d.i,129===c.getUint8(d)&&1===c.getUint8(d+1)&&c.setUint8(d+1,9))}c=b.info.i.info;Bv(c)&&!Cv(c)&&(c=ev(b),Vt(new Jt(c)),Pt([408125543,374648427,174,224],21936,c));b.info.i.info.isVideo();b.info.i.info.cd()&&b.info.isVideo()&&(c=ev(b),Vt(new Jt(c)),Pt([408125543,374648427,174,224],30320,c)&&Pt([408125543,374648427,174,224],
21432,c));if(a.policy.Vf&&b.info.i.info.cd()){c=ev(b);var e=new Jt(c);if(Kt(e,[408125543,374648427,174,29637])){d=Nt(e,!0);e=e.start+e.i;for(var f=0;f<d-1;f++)c.setUint8(e+f,0);c.setUint8(e+d-1,1)}}if(a.isAudio()&&g.iv(b.info.i.info)){d=ev(b);c=g.ut(d,0,1701606260);f=g.ut(d,0,1836476516);if(c&&f){c.skip(2);var h=gt(c),l=it(c);d=[];e=[];var m=[],n=[];if(h)for(h=0;h<l;++h)d.push(jt(c)),e.push(jt(c)),m.push(gt(c)),n.push(gt(c));else for(h=0;h<l;++h)d.push(ht(c)),e.push(ht(c)),m.push(gt(c)),n.push(gt(c));
c=wt(f);c=new oda(e[0]/c,d[0]/c)}else c=null;if(c){if(g.iv(b.info.i.info))for(d=ev(b),e=g.ut(d,0,1701082227);e;)e.markAsSkip(),e=g.ut(d,e.offset+e.size,1701082227);a.Ka=!0;b.info.i.C=c}}a.u.re()||b.info.i.i||b.info.i.indexRange||(g.iv(b.info.i.info)?(a=ev(b),(c=Bt(a,0,1836019574))?(c=c.offset+c.size,d=new Uint8Array(c),d.set(new Uint8Array(a.buffer,a.byteOffset,c)),a=d):a=null):a=qda(new Jt(ev(b))),a&&(b.info.i.i=a))};
oI=function(a,b,c){if(a.u.re()){if(a.Ka&&a.u.re()&&c.info.oa===c.info.i.index.vb()&&(b=ev(c),b=g.ut(b,0,1953658222))){b.skip(1);var d=ft(b)<<16|gt(b),e=d&1,f=d&4;if(d&256){var h=d&512,l=d&1024;d&=2048;var m=it(b);2>m||(e&&b.skip(4),f&&b.skip(4),e=it(b),b.skip((m-1)*(4+(h?4:0)+(l?4:0)+(d?4:0))-4),b.data.setUint32(b.offset+b.i,e))}}if(b=a.W&&!!a.W.u.C)if(b=c.info.isVideo())b=nv(c),h=a.W,wI?(l=1/b,b=xI(a,b)>=xI(h)+l):b=a.getDuration()>=h.getDuration(),b=!b;b&&a.u.re()&&c.info.oa===c.info.i.index.vb()&&
(b=a.W,wI?(l=nv(c),h=1/l,l=xI(a,l),b=xI(b)+h-l):b=b.getDuration()-a.getDuration(),b=1+b/c.info.duration,vt(ev(c),b))}else{h=!1;a.G||(ov(c),c.l&&(a.G=c.l,h=!0,Au(c.info,c.l),l=c.info.i.info,f=ev(c),g.iv(l)?Gt(f,1701671783):l.cd()&&Pt([408125543],307544935,f)));if(f=l=mv(c))f=c.info.i.info.cd()&&160===bv(c.i,0);if(f)a.N+=l,a.C=NaN;else{if(a.policy.Lk){var n=a.Pa(jv(c),1);e=n;if(0<=a.C&&6!==c.info.type){f=n-a.C;var p=f-a.xa;d=c.info.oa;var q=a.Ba?a.Ba.oa:-1,r=a.Aa?a.Aa:-1,t=a.Da?a.Da:-1;m=a.policy.Oc&&
f>a.policy.Oc;var v=a.policy.Nc&&p>a.policy.Nc;1E-4<Math.abs(p)&&(a.policy.Dj&&a.U("avsyncissue",{audio:""+ +a.isAudio(),sq:d.toFixed(),sliceStart:n,lastSq:q.toFixed(),lastSliceStart:r,lastSliceDuration:t,totalDrift:(1E3*f).toFixed(),segDrift:(1E3*p).toFixed(),skipRewrite:""+(+m||v)}),a.ma=d);n=0;a.policy.Ik&&(m||v||(e=a.C),a.policy.Jk&&a.W&&!a.isAudio()&&g.iv(c.info.i.info)&&(v=a.W,m=v.ma,v=v.xa,p=.02<Math.abs(v-f),(d===m||d>m&&d>a.ma)&&p&&(d=Math.max(.95,Math.min(1.05,(l-(v-f))/l)),vt(ev(c),d),
d=mv(c),n=l-d,l=d)));a.xa=f+n}}else isNaN(a.C)?e=c.info.startTime:e=a.C;kv(c,e)?(isNaN(a.ea)&&(a.ea=e),a.N+=l,a.C=e+l):(l=zu(c.info),l.smst="1",a.U("error",l||{}))}a.Ba=c.info;a.Da=mv(c);c.B&&(a.Aa=c.B);if(h&&a.G){h=yI(a,!0);Bu(c.info,h);a.i&&Bu(a.i.info,h);b=g.u(b.info.i);for(l=b.next();!l.done;l=b.next())Bu(l.value,h);(c.info.Dc||a.i&&a.i.info.Dc)&&6!==c.info.type||(a.T=h,a.U("placeholderinfo",h),a.policy.I||zI(a))}}uI(a,c);a.timestampOffset&&lv(c,a.timestampOffset)};
sI=function(a,b){if(b.info.Dc){a.Ha=b.info;if(a.G){var c=yI(a,!1);a.U("segmentinfo",c);a.T||a.policy.I||zI(a);a.T=null}nI(a)}a.B&&eI(a.B,b);if(c=mI(a))if(c=hv(c,b,a.policy.Yg)){a.l.pop();a.l.push(c);return}a.l.push(b)};
nI=function(a){a.i=null;a.X=-1;a.I=0;a.G=null;a.ea=NaN;a.N=0;a.T=null};
uI=function(a,b){if(a.u.info.Qc){if(b.info.i.info.cd()){var c=new Jt(ev(b));if(Kt(c,[408125543,374648427,174,28032,25152,20533,18402])){var d=Nt(c,!0);c=16!==d?null:St(c,d)}else c=null;d="webm"}else b.info.I=xha(ev(b)),c=yha(b.info.I),d="cenc";c&&c.length&&(c=new fI(c,d),c.cd=b.info.i.info.cd(),b.l&&b.l.cryptoPeriodIndex&&(c.cryptoPeriodIndex=b.l.cryptoPeriodIndex),a.policy.pj&&b.l&&b.l.u&&(c.i=b.l.u),a.U("needkeyinfo",c))}};
zI=function(a){var b=a.G,c=qt(b);c&&(c.startSecs+=a.ea,a.U("cuepoint",c,b.i))};
yI=function(a,b){var c,d=a.G;a.policy.I&&(c=qt(d))&&(c.startSecs+=a.ea);if(d.data["Stitched-Video-Id"]||d.data["Stitched-Video-Cpn"]||d.data["Stitched-Video-Duration-Us"]||d.data["Stitched-Video-Start-Frame-Index"]||d.data["Serialized-State"]){var e=d.data["Stitched-Video-Id"]?d.data["Stitched-Video-Id"].split(",").slice(0,-1):[];var f=d.data["Stitched-Video-Cpn"]?d.data["Stitched-Video-Cpn"].split(",").slice(0,-1):[],h=[];if(d.data["Stitched-Video-Duration-Us"])for(var l=g.u(d.data["Stitched-Video-Duration-Us"].split(",").slice(0,
-1)),m=l.next();!m.done;m=l.next())h.push((Number(m.value)||0)/1E6);l=[];if(d.data["Stitched-Video-Start-Frame-Index"]){m=g.u(d.data["Stitched-Video-Start-Frame-Index"].split(",").slice(0,-1));for(var n=m.next();!n.done;n=m.next())l.push(Number(n.value)||0)}e=new zha(e,f,h,d.data["Serialized-State"]?d.data["Serialized-State"]:"")}return new Zs(d.i,a.ea,b?d.Gf:a.N,d.ingestionTime,"sq/"+d.i,void 0,void 0,b,e,c)};
xI=function(a,b){b=(b=void 0===b?0:b)?Math.round(a.timestampOffset*b)/b:a.timestampOffset;a.u.C&&b&&(b+=a.u.C.i);return b+a.getDuration()};
AI=function(a,b){0>b||(a.l.forEach(function(c){lv(c,b)}),a.timestampOffset=b)};
BI=function(a,b){this.info=a;this.callback=b;this.I=!1;this.B=0;this.C=!1;this.i=null;this.state=1};
CI=function(a){return g.yu(a.info.i,function(b){return 3===b.type})};
DI=function(a,b){var c=a.state;a.state=b;a.Bo(c)};
Bha=function(a){a.i&&a.i.B?(a=a.i.B,a=new tu(a.type,a.i,a.range,"getEmptyStubAfter"+a.D,a.oa,a.startTime+a.duration,0,a.Va+a.l,0,!1)):(a=a.info.i[0],a=new tu(a.type,a.i,a.range,"getEmptyStubBefore"+a.D,a.oa,a.startTime,0,a.Va,0,!1));return a};
EI=function(a,b){this.i=a;this.D=this.C=!1;this.l=0;this.u=null;this.slices=[];this.B=null;(this.length=b?b:0)?1!==this.i.length||this.i[0].l||(this.i[0].l=this.length):1===this.i.length||g.yu(this.i,function(c){return!!c.range})};
FI=function(a,b,c){a.u&&(Vu(a.u,b),b=a.u,a.u=null);for(var d=0,e=0,f=g.u(a.i),h=f.next();!h.done;h=f.next())if(h=h.value,h.range&&d+h.l<=a.l)d+=h.l;else{if(uu(h)&&!c&&a.l+b.totalLength-e<d+h.l){a.u=b.split(e).Bk;break}var l=a.l-d;var m=a;if(1===h.type)m.C=!0,m=!1;else if(3===h.type||4===h.type){var n=m.C&&!m.D;m.D=!0;m=n}else m=!1;m=m||h.i.Sk()&&!l;n=a;var p=e,q=b,r=!!c,t=q.totalLength-p;h.range&&(t=Math.min(h.l-l,t));r=h.range?h.Va+l+t===h.range.length:r;l=new tu(h.type,h.i,h.range,"reslice"+h.D,
h.oa,h.startTime,h.duration,h.Va+l,t,r&&h.u,r);r=t;p=q.split(p).Bk.split(r).Vp;n.slices.push(new dv(l,p,m));l=t;a.l+=l;e+=l;d+=h.l;if(e===b.totalLength)break}};
GI=function(a){var b=a.slices;a.slices=[];a.B=g.jb(b).info;return b};
Cha=function(a){return a.length-a.l+a.slices.reduce(function(b,c){return b+c.i.totalLength},0)};
HI=function(){g.N.apply(this,arguments);this.i={}};
Dha=function(a,b){return new g.H(function(){a.i[b].isFailed=!0;a.U("FAILED",{formatId:b})},3E3)};
Eha=function(a){return Object.values(a.i).some(function(b){return 0<b.bytesShifted})};
Fha=function(a){return Object.keys(a.i).every(function(b){return a.isComplete(b)})};
Gha=function(a){return Object.values(a.i).some(function(b){return b.isFailed})};
II=function(a,b,c,d){BI.call(this,b,d);this.formatId=a;this.l=c;this.i=new EI(this.info.i,this.info.range.length);Hha(this);this.l.isFailed(this.formatId)?DI(this,6):this.l.isComplete(this.formatId)?DI(this,5):this.l.Qe(this.formatId)&&DI(this,2)};
Hha=function(a){a.l.subscribe("PROGRESS",function(b){b.formatId===a.formatId&&DI(a,Math.max(2,a.state))});
a.l.subscribe("DONE",function(b){b.formatId===a.formatId&&DI(a,5)});
a.l.subscribe("FAILED",function(b){b.formatId===a.formatId&&DI(a,6)})};
JI=function(a){for(;a.l.Qe(a.formatId);){var b=a.i,c=a.l.Ff(a.formatId);var d=a.l;var e=a.formatId;d=0===d.i[e].expectedBytes-d.i[e].bytesShifted&&d.isComplete(e);FI(b,c,d)}};
KI=function(a,b,c,d){d=void 0===d?function(e){return e}:d;
this.policy=a;this.i=b;this.X=c;this.u=[];this.l=this.eb=null;this.W=this.ea=0;this.D=-1;this.I=!1;this.N=-1;this.Zt=null;this.Mq=0;this.ey=!1;this.X=c;this.B=new kI(a,b,d);this.T=b.info.l;this.G=b.Yn();this.isManifestless=b.Yn();this.C=this.G};
LI=function(a,b){b&&wI&&AI(a.B,b.Dt());a.eb=b};
MI=function(a){return a.eb&&a.eb.Kp()};
NI=function(a,b){a.u.push(b);a.l=g.jb(b.info.i)};
PI=function(a){for(;a.u.length&&5===a.u[0].state;){var b=a.u.shift();OI(a,b);a.ea=b.yy()}a.u.length&&(b=a.u[0],b.hm()&&(!b.info.yf()||b instanceof II)&&OI(a,b))};
OI=function(a,b){if(b.hm()){var c=b.uw();if(a.policy.vf&&b instanceof II){var d=a.i.info.wb();a.X("omblss","itag."+d+";len."+c.length)}c=g.u(c);for(d=c.next();!d.done;d=c.next())QI(a,b,d.value)}};
QI=function(a,b,c){switch(c.info.type){case 1:case 2:pI(a.B,c);break;case 4:var d=c.info.i.lw(c);c=c.info;var e=a.l;e&&e.i===c.i&&e.type===c.type&&(c.range&&e.range?e.range.start===c.range.start&&e.range.end===c.range.end:e.range===c.range)&&e.oa===c.oa&&e.Va===c.Va&&e.l===c.l&&(a.l=g.jb(d).info);d=g.u(d);for(c=d.next();!c.done;c=d.next())QI(a,b,c.value);break;case 3:tI(a.B,b,c);break;case 6:tI(a.B,b,c),a.l=c.info}};
wH=function(a,b,c){c=void 0===c?!1:c;if(a.eb){var d=a.eb.yd(),e=Tv(d,b),f=NaN,h=MI(a);h&&(f=Tv(d,h.i.index.Pd(h.oa)));if(e===f&&a.l&&a.l.l&&RI(SI(a),0))return b}a=TI(a,b,c);return 0<=a?a:NaN};
yH=function(a,b){a.i.pd();var c=TI(a,b);if(0<=c)return c;c=a.B;c.B?(c=c.B,c=c.dd&&3===c.dd.type?c.dd.startTime:0):c=Infinity;b=Math.min(b,c);a.l=a.i.Ii(b).i[0];UI(a)&&a.eb&&a.eb.abort();a.W=0;return a.l.startTime};
VI=function(a){a.G=!0;a.C=!0;a.D=-1;yH(a,Infinity)};
WI=function(a){var b=0;g.wd(a.u,function(c){var d=b;c=c.i&&c.i.length?Cha(c.i):Fu(c.info);b=d+c},a);
return b+=Aha(a.B)};
XI=function(a,b){if(!a.eb)return 0;var c=MI(a);if(c&&c.u)return c.B;a=a.eb.yd(!0);return Vv(a,b)};
xH=function(a){vH(a);a=a.B;a.l=[];nI(a)};
HH=function(a,b,c,d){vH(a);for(var e=a.B,f=!1,h=e.l.length-1;0<=h;h--){var l=e.l[h];l.info.oa>=b&&(e.l.pop(),e.C-=mv(l),f=!0)}f&&(e.D=0<e.l.length?e.l[e.l.length-1].info:null);d>c?yH(a,d):a.l=a.i.ai(b-1,!1).i[0]};
$I=function(a,b){var c;for(c=0;c<a.u.length&&b!==a.u[c];c++);if(c===a.u.length)YI(a,b);else{for(;c<a.u.length;)YI(a,a.u.pop());var d=ZI(a);a.policy.ma&&d&&d.i.re()&&g.Qj(b.info.i,function(e){return e.i===d.i&&e.oa===d.oa&&!!d.l&&d.Va+d.l>e.Va&&d.Va+d.l<=e.Va+e.l})?a.l=d:vu(b.info.i[0])?a.l=Bha(b):a.l=null}};
UI=function(a){var b;!(b=!a.policy.Xh&&"f"===a.i.info.i)&&(b=a.policy.i)&&(b=a.B,b=!!b.B&&cI(b.B));if(b)return!0;b=MI(a);if(!b)return!1;var c=b.u&&b.Dc;return a.isManifestless&&0<a.N?c||b.oa>=a.N:c};
SI=function(a){var b=[],c=MI(a);c&&b.push(c);b=g.vb(b,vI(a.B));g.wd(a.u,function(d){g.wd(d.info.i,function(e){d.I&&(b=g.Ph(b,function(f){return!(f.i!==e.i?0:f.range&&e.range?f.range.start+f.Va>=e.range.start+e.Va&&f.range.start+f.Va+f.l<=e.range.start+e.Va+e.l:f.oa===e.oa&&f.Va>=e.Va&&(f.Va+f.l<=e.Va+e.l||e.Dc))}));
(vu(e)||4===e.type)&&b.push(e)})});
a.l&&!xda(a.l,g.jb(b),a.l.i.re())&&b.push(a.l);return b};
RI=function(a,b){if(!a.length)return!1;for(b+=1;b<a.length;b++)if(!xu(a[b-1],a[b]))return!1;return!0};
TI=function(a,b,c){c=void 0===c?!1:c;if(!a.l||!a.l.l)return NaN;a=SI(a);a:{var d=c;d=void 0===d?!1:d;for(var e=-1,f=0;f<a.length;++f){var h=a[f];if(h.C<=b)if(d)e=f;else if(h.startTime+h.duration>=b){b=f;break a}}b=e}return 0>b?NaN:RI(a,c?b:0)?a[b].startTime:NaN};
aJ=function(a){return g.Qj(a.u,function(b){return 3<=b.state})};
bJ=function(a){return!(!a.l||a.l.i===a.i)};
cJ=function(a){return bJ(a)&&a.i.pd()&&a.l.i.info.l<a.i.info.l};
dJ=function(a,b,c){return(a=ZI(a))&&!a.u?a.B>b&&a.B<b+c:!1};
ZI=function(a){var b=mI(a.B);return b?b.info:MI(a)};
vH=function(a){g.wd(a.u,function(b){YI(this,b)},a);
a.u=[];a.l=null};
YI=function(a,b){var c=a.policy.ma&&b.info.i[0].i.re();b.I&&!c&&(a=a.B,a.K(),a.T&&!a.policy.Vd&&a.U("placeholderrollback",a.T),a.T=null,a.G=null,a.D=a.Ha,a.C-=a.N,nI(a));b.dispose()};
eJ=function(a){return!!a.l&&-1!==a.l.oa&&a.l.oa<a.i.index.Qf()};
fJ=function(a){var b=a.l;b&&-1===b.oa&&(a=mI(a.B))&&vu(a.info)&&(a=a.info.oa,b.D="updateLastSliceRequested",b.oa=a)};
EH=function(a,b,c,d){a.B.subscribe(b,c,d)};
gJ=function(a){return g.Qj(a.u,function(b){return b.C})};
hJ=function(a,b,c,d){this.target=a;this.trigger=b;this.l=c;this.u=d;this.i=0};
iJ=function(a,b,c){var d=this;this.l=a;this.u=b;this.loaded=this.status=0;this.error="";a=nu(this.l.get("range")||"");if(!a)throw Error("bad range");this.range=a;this.i=new Tu;Iha(this).then(c,function(e){d.error=""+e||"unknown_err";c()})};
Iha=function(a){return D(a,function c(){var d=this,e,f,h,l,m,n,p,q,r,t,v,y,C;return A(c,function(z){if(1==z.i){d.status=200;e=d.l.get("docid");f=Gd(d.l.get("fmtid")||"");h=+(d.l.get("csz")||0);if(!e||!f||!h)throw Error("Invalid local URL");l=d.range;m=Math.floor(l.start/h);n=Math.floor(l.end/h);p=m}if(5!=z.i)return p<=n?x(z,Uca(e,f,p),5):z.fb(0);q=z.l;if(void 0===q)throw Error("invariant: data is undefined");r=p*h;t=(p+1)*h;v=Math.max(0,l.start-r);y=Math.min(l.end+1,t)-(v+r);C=new Uint8Array(q.buffer,
v,y);d.i.append(C);d.loaded+=y;d.loaded<l.length&&d.u(Date.now(),d.loaded);p++;return z.fb(2)})})};
jJ=function(a,b,c,d,e,f){var h=void 0===f?{}:f;f=void 0===h.method?"GET":h.method;var l=h.headers,m=h.body;h=void 0===h.credentials?"include":h.credentials;this.W=b;this.X=c;this.ea=d;this.policy=e;this.status=0;this.response=void 0;this.T=!1;this.l=0;this.N=NaN;this.aborted=this.C=this.I=!1;this.errorMessage="";this.method=f;this.headers=l;this.body=m;this.credentials=h;this.i=new Tu;this.id=Jha++;this.B=window.AbortController?new AbortController:void 0;this.start(a);this.startTime=Date.now()};
Kha=function(a,b){a.status=b.status;if(b.ok&&b.body)a.status=a.status||242,a.u=b.body.getReader(),a.ya()?a.u.cancel().catch(function(){}):(a.G=b.headers,a.ea(),kJ(a));
else a.onDone()};
kJ=function(a){a.u.read().then(function(b){if(!a.ya()){var c;window.performance&&window.performance.now&&(c=window.performance.now());var d=Date.now(),e=b.value?b.value:void 0;a.D&&(a.i.append(a.D),a.D=void 0);b.done?(a.u=void 0,a.onDone()):(a.l+=e.length,lJ(a)?a.i.append(e):a.D=e,a.W(d,a.l,c),kJ(a))}},function(b){a.onError(b)}).then(void 0,g.dj)};
lJ=function(a){var b=a.getResponseHeader("content-type");b="audio/mp4"===b||"video/mp4"===b;return a.policy.l&&a.policy.Ud&&ms(a)&&b};
mJ=function(a,b,c,d){var e=this;this.status=0;this.ya=this.i=!1;this.l=NaN;this.xhr=new XMLHttpRequest;this.xhr.open("GET",a);this.xhr.responseType="arraybuffer";this.xhr.withCredentials=!0;this.xhr.onreadystatechange=function(){2===e.xhr.readyState&&e.C()};
this.u=c;this.B=b;this.C=d;a=ej(function(f){e.onDone(f)});
this.xhr.addEventListener("load",a,!1);this.xhr.addEventListener("error",a,!1);this.xhr.send();this.xhr.addEventListener("progress",ej(function(f){e.ya||(e.status=e.xhr.status,e.B(f.timeStamp,f.loaded))}),!1)};
pJ=function(a,b,c,d,e,f){var h=void 0===f?{}:f;f=void 0===h.Co?[]:h.Co;var l=void 0===h.Ro?!1:h.Ro;h=void 0===h.Pj?0:h.Pj;BI.call(this,b,e);var m=this;this.policy=a;this.timing=c;this.lastError=null;this.T=this.u=0;this.ea=!1;this.G=this.D=null;this.timing.ma=function(){var n;if(Lha(m)){if(n=m.policy.vj&&!(!window.performance||!window.performance.now)&&m.xhr&&m.xhr.Pi()&&m.Mg())n=m.xhr,n=n.policy.Ud&&ms(n);n=n?m.info.i[0].i.info.video?3:4:2}else n=1;return n};
this.X=d;this.Ro=l;this.requestNumber=++Mha;this.l=g.Eu(this.info,this.policy,this.X);this.l.set("rn",this.requestNumber.toString());this.l.set("rbuf",(1E3*h).toFixed().toString());this.Ro&&this.l.set("smb","1");this.Co=f||null;this.C=Nha(this);this.W=this.policy.qc*(this.policy.ma?fu(nJ(this),this.policy,!1):1);this.N=new g.H(this.FG,this.W,this);this.info.l.C=(0,g.M)();uda(nJ(this));hha(this.timing);try{this.xhr=Oha(this),this.N.start(),this.K("Sent, itag="+this.l.get("itag")+(" seg="+this.info.i[0].oa)+
(" range="+this.l.get("range"))+(" time="+Math.round(this.info.i[0].C)+"-"+Math.round(g.jb(this.info.i).B))+(" rtp="+(this.timing.N-Date.now()).toFixed(0))+(" isStreaming="+this.Mg()))}catch(n){g.fj(n),this.lastError="net.ssl",g.jh(function(){oJ(m)})}};
Nha=function(a){if(!(Du(a.info)&&a.info.yf()&&a.policy.Wd&&a.Co)||2<=a.info.l.l||qJ()||!rJ())return!1;var b=a.l.get("aitags");if(!b)return!1;b=Gd(b).split(",");for(var c=[],d=g.u(a.Co),e=d.next();!e.done;e=d.next())e=e.value,g.pb(b,e)&&c.push(e);if(!c.length)return!1;a.l.set("altitags",Fd(c.join(",")));return!0};
nJ=function(a){return gu(a.X,Ss(a.l.kf))};
Qha=function(a,b){if(400<=b.status)return a.lastError="net.badstatus",6;if(!b.Up())return a.lastError=204===b.status?"net.nocontent":"net.connect",6;var c="";if(sJ(a)){var d=b.De();2048>=d.totalLength&&(c=$u(d),c=dt(c),Js(c)?a.K():c="")}if(c)return b=nJ(a),(0,g.M)(),b.started=0,b.l=0,b.i=0,b=a.info,a=a.l,g.ku(b.l,a,c),b.requestId=a.get("req_id"),4;c=b.Uj();if((d=!!a.info.range&&a.info.range.length)&&d!==c||b.Su())return a.lastError="net.closed",6;tJ(a,!0);if(a.policy.Zk&&!d&&a.i&&(d=a.i.slices,d.length&&
!fv(d[0])))return a.lastError="net.closed",6;d=CI(a)?b.getResponseHeader("X-Bandwidth-Est"):0;if(b=CI(a)?b.getResponseHeader("X-Bandwidth-Est3"):0)a.ea=!0,a.policy.fm&&(d=b);b=a.timing;var e=d?Number(d):0;d=g.ab();if(!b.ea){b.ea=!0;if(!b.Kg){d=d>b.i&&4E12>d?d:Date.now();lH(b,d,c);jH(b,d,c);var f=fH(b);if(2===f&&e)iH(b,b.l/e,b.l);else if(2===f||1===f)e=(d-b.i)/1E3,(e<=b.schedule.T.i||!b.schedule.T.i)&&!b.Ba&&mH(b)&&iH(b,e,c),mH(b)&&(e=b.schedule,c=Math.max(c,2048),e.i.wf(1,b.u/c),Ix(e));Bx(b.schedule,
(d-b.i)/1E3||.05,b.l,b.W,b.yf,b.ck)}b.deactivate()}c=nJ(a);(0,g.M)();c.started=0;c.l=0;c.i=0;a.info.l.l=0;(0,g.M)()<uJ+3E5||!a.l||Ts(a.l.kf)||!(c=Ss(a.l.kf))||0>c.indexOf("googlevideo.com")||(Pha({primary:c}),uJ=(0,g.M)());a.K();return 5};
oJ=function(a){a.K("Request failed, itag="+a.l.get("itag")+(" seg="+a.info.i[0].oa)+(" sliced="+(a.i&&a.i.l))+(" error="+a.lastError));if("net.timeout"===a.lastError){var b=a.timing,c=g.ab();if(!b.Kg){c=c>b.i&&4E12>c?c:Date.now();lH(b,c,1024*b.X);var d=(c-b.i)/1E3;if(2!==fH(b))if(mH(b)){b.u+=(c-b.B)/1E3;var e=b.schedule,f=b.l;f=Math.max(f,2048);e.i.wf(1,b.u/f);Ix(e)}else hH(b)||b.Kg||(e=b.schedule,e.C.wf(1,d),Ix(e)),b.xa=c;Bx(b.schedule,d,b.l,b.W,b.yf,b.ck);Dx(b.schedule,(c-b.B)/1E3,0)}}"net.nocontent"!==
a.lastError&&("net.timeout"===a.lastError||"net.connect"===a.lastError||"net.closed"===a.lastError&&a.policy.yl?(b=nJ(a),b.l+=1):(b=nJ(a),b.i+=1),a.info.l.l++);DI(a,6)};
wJ=function(a,b){b&&(b=nJ(a),b.u+=1);vJ(a);a.lastError="net.timeout";oJ(a)};
vJ=function(a){a.K();a.xhr&&a.xhr.abort();a.timing.deactivate()};
sJ=function(a){var b=a.xhr.getResponseHeader("content-type"),c=a.xhr.In();return(!a.Mg()||!b||-1!==b.indexOf("text/plain"))&&(!c||2048>=c)};
Oha=function(a){var b=a.WB.bind(a),c=a.XB.bind(a),d=a.sG.bind(a);if(Ts(a.l.kf))return new iJ(a.l,c,b);var e=g.du(a.l);return a.policy.Ba&&(a.policy.Jm&&!isNaN(a.info.bd)&&a.info.bd>a.policy.Gj||a.C?0:ls())?new jJ(e,c,b,d,a.policy.B):new mJ(e,c,b,d)};
tJ=function(a,b){if(b||a.xhr.Pi()&&a.xhr.Qe()&&!sJ(a)&&!a.C){if(!a.i){if(a.Mg())a.info.range&&(c=a.info.range.length);else var c=a.xhr.Uj();a.i=new EI(a.info.i,c)}for(;a.xhr.Qe();)FI(a.i,a.xhr.Ff(),b&&!a.xhr.Qe())}};
Lha=function(a){if(!a.policy.B.Ud||!isNaN(a.info.bd)&&0<a.info.bd)return!1;if(!a.xhr.Pi())return a.K(),!0;if(!ms(a.xhr))return!1;if(isNaN(a.info.bd)){var b=a.xhr.getResponseHeader("x-head-seqnum");if(!b)a.K();else if(Number(b)>a.info.i[0].oa)return!1}return!0};
xJ=function(a,b,c,d){g.N.call(this);this.policy=a;this.schedule=b;this.N=c;this.T=d;this.X=NaN;this.l=this.G=this.B=null;this.i=this.C=this.D=this.startTimeSecs=NaN;this.u=!1;this.I=NaN};
Rha=function(a,b,c,d){return a.Xa&&a.Ma&&3===Ds(a)?new xJ(a,b,c,d):null};
yJ=function(a,b){if(a.policy.Ok){var c=b.info.l;if(0>=c)a.I=NaN;else{var d=Fx(a.schedule);b=b.index.Ee;c=Math.max(1,d/c);a.I=Math.round(1E3*Math.max(((c-1)*b+a.policy.T)/c,b-a.policy.Xb));a.K()}}};
Sha=function(a,b){var c=g.ab()/1E3,d=c-a.startTimeSecs,e=c-a.D,f=e>=a.policy.cg,h=!1;if(f){var l=0;!isNaN(b)&&b>a.C&&(l=b-a.C,a.C=b);l/e<a.policy.Qk&&(h=!0);a.K();a.D=c}c=d>=a.policy.Xb&&!a.u;if(!f&&!c&&zJ(a,b))return NaN;c&&(a.u=!0,a.K());a:{d=h;c=g.ab()/1E3-(a.N.ze()||0)-a.G.l-a.policy.T;f=a.l.startTime;c=f+c;if(d){if(isNaN(b)){a.K();AJ(a,NaN,"n",b);f=NaN;break a}d=b-a.policy.Wb;d<c&&(a.K(),c=d)}else a.u&&(d=c+a.policy.T-a.X+a.policy.Wk,isNaN(b)||(d=Math.max(d,Math.min(c,b-a.policy.Wb))),c=d);c=
Math.max(c,f);a.K();f=c}a.i=f;if(isNaN(a.i))return a.K(),a.clear(),NaN;if(!h&&zJ(a,b))return BJ(a,b),NaN;if(a.i<=a.l.startTime)return AJ(a,NaN,"y",b),a.clear(),NaN;if(!a.T(a.i,!1))return!BJ(a,b)&&h&&(AJ(a,NaN,"t",b),a.clear()),NaN;a.K();h=a.i;AJ(a,h,"s",b);a.clear();return h};
BJ=function(a,b){return a.T(a.i,!0)?!1:(AJ(a,NaN,"ns",b),a.K(),a.clear(),!0)};
zJ=function(a,b){return isNaN(b)?!0:isNaN(a.i)?!1:b<a.i+(a.u?a.policy.Wb:a.policy.Pk)};
AJ=function(a,b,c,d){var e=a.B.Pm();e.ssr_sk=(1E3*b).toFixed(0);e.ssr_t=(1E3*a.i).toFixed(0);e.ssr_r=c;e.ssr_st=(1E3*a.startTimeSecs).toFixed(0);e.ssr_n=g.ab().toFixed(0);e.ssr_f=(1E3*a.G.l).toFixed(0);e.ssr_fa=a.u?"1":"0";e.ssr_o=(1E3*a.N.ze()||0).toFixed(0);e.ssr_v=(1E3*d).toFixed(0);b=a.l.i.index;Pu(b,a.l.oa,!0)&&(e.ssr_ist=(1E3*b.Pd(a.l.oa)).toFixed(0),e.ssr_id=(1E3*b.getDuration(a.l.oa)).toFixed(0));e=g.pq(e);a.U("ctmp","ssr",e,!1)};
FJ=function(a,b,c,d,e,f,h,l,m){l=void 0===l?!1:l;g.N.call(this);var n=this;this.schedule=a;this.policy=b;this.i=c;this.Ma=h;this.T=m;this.timing=new DH;this.mediaSource=null;this.G=this.currentTime=NaN;this.xa=this.Ka=0;this.W=this.Ba=this.isSuspended=!1;this.Da="";this.ea={};this.Ua=this.bd=NaN;this.Se=null;this.timestampOffset=NaN;this.Xa=!1;this.Ha=0;this.I=!1;this.X=null;this.bb=!1;this.qb=new KH;this.D=new oH(a,b);a=m&&Object.keys(m.i);this.l=new MH(this.D,b,this.i,d,a,this.Hb.bind(this));b=
oha(this.l,e,f&&f.id);this.audioTrack=new KI(this.policy,b.audio,this.Hb.bind(this),function(p,q){return CJ(n,p,q)});
this.videoTrack=new KI(this.policy,b.video,this.Hb.bind(this),function(p,q){return CJ(n,p,q)});
DJ(this,this.audioTrack);DJ(this,this.videoTrack);this.videoTrack.B.W=this.audioTrack.B;this.Aa={updateend:this.YB,error:this.OE};this.N=new g.H(this.gf,0,this);g.G(this,this.N);this.Pa=new g.H(this.gf,1E3,this);g.G(this,this.Pa);this.ub=new g.H(this.gf,void 0,this);g.G(this,this.ub);this.Ya=new g.H(this.gf,1E4,this);g.G(this,this.Ya);this.ma=new wx(5);(this.C=Rha(this.policy,this.schedule,this.ma,function(p,q){return EJ(n,p,q)}))&&this.C.subscribe("ctmp",this.Hb,this);
this.u=new FH(this.i,this.policy,this.videoTrack,this.audioTrack,l);g.G(this,this.u);this.u.subscribe("ctmp",this.Hb,this);this.B=new tH(this.i,this.videoTrack,this.audioTrack,this.policy,this.u);g.G(this,this.B);Tha(this,this.B);this.K()};
Uha=function(a){if(!a.T)return!1;var b=a.videoTrack.i.Fl(),c=a.audioTrack.i.Fl();c=void 0!==a.T.i[c]&&!a.T.isFailed(c);a=void 0!==a.T.i[b]&&!a.T.isFailed(b);return c&&a};
IJ=function(a,b,c){function d(m){m.isFailed()?(a.Hb("ombf","1",!0),$I(b,m),Du(m.info)&&GJ(a,b,c,!0),a.gf()):HJ(a,m)&&a.gf()}
var e=c.Fl(),f=c.Wj((a.T.i[e].expectedBytes||0)-(c.indexRange.length+c.initRange.length));c.u=!0;for(var h=0;h<f.length;h++){var l=new II(e,f[h],a.T,d);NI(b,l)}};
Vha=function(a){var b=a.videoTrack.i.index;a.Se=new eha({qh:a.policy.qh,Ud:a.policy.B.Ud,Ee:b.Ee,vb:function(){return b.vb()},
Gl:function(){return b.Gl()}})};
KJ=function(a,b){b=b||a.videoTrack&&a.videoTrack.l&&a.videoTrack.l.startTime||a.currentTime;var c=a.videoTrack,d=a.l;b=d.nextVideo&&d.nextVideo.index.zf(b)||0;d.ea!==b&&(d.xa={},d.ea=b,NH(d,d.l));WH(d);d.nextVideo&&!d.nextVideo.index.Vc()&&(d.ea=-1);JJ(a,c,d.nextVideo);JJ(a,a.audioTrack,a.l.u)};
LJ=function(a,b){a.Ba=b;a.I||(a.K(),a.isSuspended=!0)};
MJ=function(a){a.mediaSource&&a.mediaSource.i&&a.mediaSource.l&&(Vn(a.mediaSource.i,a.Aa,a),Vn(a.mediaSource.l,a.Aa,a));LI(a.audioTrack,null);LI(a.videoTrack,null);a.mediaSource=null};
OJ=function(a,b){b=void 0===b?!1:b;a.K();MJ(a);b?(a.K(),a.I=!0):a.policy.pc?LJ(a,a.Xa):LJ(a,!1);NJ(a)};
QJ=function(a){a.mediaSource&&gw(a.mediaSource)&&(OJ(a),a.policy.Im&&PJ(a,!0,"fmt.unplayable",{unexpected:1}))};
SJ=function(a,b,c){var d=a.u;if(2===d.l||3===d.l||a.isSuspended&&(!Jx(a.schedule)||a.Ba)||a.policy.i&&!Jx(a.schedule))return!1;if(a.i.isManifestless){if(0<b.u.length&&b.l&&-1===b.l.oa||b.u.length>=a.policy.Ej&&!a.policy.Vb||!a.policy.Nl&&0<b.u.length&&!a.policy.B.Ud)return!1;if(b.G)return!a.i.isLive||!isNaN(a.bd)}if(gJ(b))return a.K(),!1;if(!(b.l||a.i.isManifestless&&a.policy.Vb&&b.G)){if(!b.i.pd())return!1;yH(b,a.currentTime)}d=b.u.length+c.u.length;(aJ(b)||aJ(c)||a.i.isLive&&(!a.policy.Vb||!b.u.length))&&
--d;if(d+1>=a.policy.Hj)return!1;if(!b.l)return!0;d=b.l;if(!ju(d.i.l,a.policy))return!1;4===d.type&&d.i.pd()&&(b.l=g.jb(d.i.Pq(d)),d=b.l);if(!d.u&&!d.i.Zh(d))return!1;var e=a.i.qd||a.i.D;if(a.i.isManifestless&&e){e=b.i.index.vb();var f=c.i.index.vb();e=Math.min(e,f);if(0<b.i.index.Mm&&0<e&&d.oa>=e)return b.N=e,c.N=e,!1}if(d.i.info.audio&&4===d.type)return!1;if(cJ(b)&&!a.policy.Ua)return!0;if(d.u||WI(b)&&WI(b)+WI(c)>a.policy.bb)return!1;e=!b.C&&!c.C;f=b===a.videoTrack&&a.I;if(!(c=!!(c.l&&!c.l.u&&c.l.B<
d.B)&&(!a.i.isManifestless||c.l&&c.l.B&&d.B)&&e&&!f||a.policy.Pa&&!b.C&&c.C)&&(c=vu(d))){c=d.B;a:if(d=a.u,d=d.i?d.i.tc:null,a.I&&d)a=d.startSecs+d.durationSecs;else{d=RJ(a,b,!0);!VH(a.l)&&0<a.policy.X&&(e=((0,g.M)()-a.Ka)/1E3,d=Math.min(d,a.policy.X+a.policy.zc*e));d=a.currentTime+d;if(a.policy.Xd&&(e=Wha(a)+a.policy.Xd,e<d)){a.Hb("mrl","ori."+d+";mod."+e,!0);a.policy.Aj&&(a.Ka=(0,g.M)());a=e;break a}a=d}c=c>a}return c?!1:(b=b.eb)&&b.isLocked()?!1:!0};
VJ=function(a,b,c){if(SJ(a,b,c)){if(b.G){if(a.i.isLive){var d=a.i.Lc&&a.i.D?b.i.ai(a.i.Lc,!1):b.i.Ii(Infinity);d.bd=a.bd}else d=b.i.ai(0,!1);a.C?0===d.bd&&(d.B=a.C.I):d.B=a.Ua}else if(d=b.l,d.i.pd()){var e=d.B-a.currentTime,f=!d.range||0===d.l&&0===d.Va?0:d.range.length-(d.Va+d.l),h=d.i;if(bJ(b)&&b.i.pd()){var l=Math.min(15,.5*RJ(a,b,!0));var m=cJ(b)||e<=l||a.l.N;a.K("ready to adapt: "+m+", upgrade pending: "+cJ(b)+", health: "+e+", max health: "+l);l=m}else l=!1;l&&0===f&&(a.i.isManifestless?h=b.i:
(h=d.startTime+TJ,d.l&&(h+=d.duration),yH(b,h),d=b.l,h=d.i));h.re()?(f=a.l,c=qH(a.D,h.info.l,c.i.info.l,e,0<f.B.length&&0===f.G&&a.W),e=bJ(b),c=d.i.Rk(d,c),c.range&&1<c.i.length&&(e||c.l.l||c.i[0].i!==d.i?c=d.i.Rk(d,c.i[0].l):(e=c.i[c.i.length-1],h=e.l/c.range.length,!e.Dc&&.4>h&&(c=d.i.Rk(d,c.range.length-e.l)))),d=c):(0>d.oa&&(c=zu(d),c.pr=""+b.u.length,a.B.i&&(c.sk="1"),a.Hb("nosq",d.D+";"+g.pq(c))),d=h.Lm(d));if(a.I)for(c=g.u(d.i),e=c.next();!e.done;e=c.next())e.value.type=6}else d.i.re()?(c=
qH(a.D,b.i.info.l,c.i.info.l,0),d=d.i.Rk(d,c)):d=d.i.Lm(d);if(a.policy.Mk&&a.i.isManifestless&&!b.G&&0>d.i[0].oa)a.Hb("invalidsq",ru(d.i[0]));else{if(a.X&&(c=a.u,e=d.i[0].oa,c=0>e&&!isNaN(c.B)?c.B:e,e=a.u,h=(0>c||c===e.B)&&!isNaN(e.C)?e.C:d.i[0].C,e=a.X.qt(h,c,d.i[0].i.info.id))){h="decurl_itag"+d.i[0].i.info.wb()+"_sg"+c+"_st"+h.toFixed(3)+".";if(a.policy.Kk&&b.u.length&&c-1===b.u[b.u.length-1].info.i[0].oa){a.Hb("sdai","wt_daistate_on_sg"+(c-1));return}a.Hb("sdai",h);d.D=e}a.policy.dh&&-1!==d.i[0].oa&&
d.i[0].oa<a.i.Lc&&(d=b.i.ai(a.i.Lc,!1));c=d.i[0].oa;b.Zt===c?b.Mq++:(b.Zt=c,b.Mq=0);!a.policy.Ke&&40<b.Mq&&!a.bb&&a.i.isManifestless&&(a.bb=!0,PJ(a,!0,"net.retryexhausted",{err:"mflRequestLoop",sq:c}));NI(b,UJ(a,d))}}};
Xha=function(a){for(var b=g.u([a.videoTrack,a.audioTrack]),c=b.next();!c.done;c=b.next())if(c=c.value,20<c.Mq&&!c.ey){var d=c.Zt;a.Hb("requestLoopDispose","segNum."+d,!0);g.fj(new g.hm("b172965563","requestLoopDispose.segNum."+d));c.ey=!0}};
Yha=function(a,b){var c=Fu(b),d=a.D,e=Math.min(2.5,Cx(d.schedule));d=rH(d);var f=uu(b.i[0]),h=Ts(b.l.i),l=a.policy.i,m;a.Se?m={yf:f,Kg:h,ck:l,Se:a.Se,oa:b.i[0].oa,bd:b.bd}:m={yf:f,Kg:h,ck:l};return new bH(a.schedule,c,c-e*d,m)};
UJ=function(a,b){vu(b.i[b.i.length-1])&&WJ(a,qha(a.l,b.i[0].i));var c=Yha(a,b);a.policy.vf&&(c.C=[]);var d={Pj:Math.max(0,b.i[0].C-a.currentTime),Co:a.policy.Wd&&Du(b)&&b.i[0].i.info.video?tha(a.l):void 0,Ro:a.I};return new pJ(a.policy,b,c,a.ea,function(e,f){a:{var h=e.info.i[0].i,l=h.info.video?a.videoTrack:a.audioTrack;if(!(2<=e.state)||e.isComplete()||!e.Mg()||e.B||!(!a.mediaSource||a.isSuspended||3<XI(l,a.currentTime))){var m=a.policy.qe;if(!(!m||e.isComplete()||e.B<m||iu(e.info.l,a.policy,a.ea))){m=
a.ea;var n=Ss(hu(e.info.l));m=gu(m,n);m.i||m.l||m.started||(m=Gu(e.info,!0))&&UJ(a,m)}if(e.isComplete()||e.ya()&&4>f)a.policy.Ya&&(f=cH(e.timing),m=e.timing,a.Hb("rqs",g.pq({rn:e.requestNumber.toString(),rt:f.rt,pt:f.pt,stall:f.stall,elt:f.elbowTime,elb:f.elbowBytes,rst:""+e.state,strm:""+e.Mg(),d:m.C?m.C.join(""):""}))),e.ea&&a.Hb("sbwe3","1",!0);if(!a.ya()&&2<=e.state)if(f=a.timing,n=e.info.i[0].i,m=!f.l&&n.info.video,n=!f.i&&n.info.audio,4===e.state?m?f.tick("vrr"):n&&f.tick("arr"):5===e.state?
m?(f.l=g.du(e.l),mk(4)):n&&(f.i=g.du(e.l)):3===e.state&&m&&mk(4),4===e.state)$I(l,e),Du(e.info)&&GJ(a,l,h,!0),a.gf();else if(e.isComplete()&&5===e.info.i[0].type)5===e.state&&(h=(e.info.i[0].i.info.video?a.videoTrack:a.audioTrack).u[0]||null)&&h instanceof pJ&&h.B&&wJ(h,!0),e.dispose();else{if(!e.isFailed()&&e.C&&2<=e.state&&4!==e.state)if(h=e.xhr?e.xhr.getResponseHeader("X-Response-Itag"):null){a.K();h=sha(a.l,h);l=e.info.range.length-h.ut();h.u=!0;e.info.i[0].i.u=!1;f=h.Wj(l)[0];e.info=f;if(e.i){l=
e.i;f=f.i;l.i=f;m=f[0].range;n=$u(l.slices[0].i);$u(g.jb(l.slices).i);for(var p=0;p<l.slices.length;p++){l.slices[p].info=f[p];var q=f[p].range;l.slices[p].i=new Tu([new Uint8Array(n.buffer,q.start-m.start,q.length)])}}e.C=!1;JJ(a,a.videoTrack,h);l=a.videoTrack;l.l&&(l.l.i=h);a.U("constraint",h.info.Qa().quality);(l=e.xhr?e.xhr.getResponseHeader("X-Segment-Lmt"):null)&&h instanceof rv&&(isNaN(h.lastModified)||h.lastModified===+l||$I(a.videoTrack,e))}else e.C=!1;if(5===e.state){if(HJ(a,e),a.u&&(h=
a.u,l=e.info,f=a.X,0!==h.l&&f&&l.i[0].isVideo()))if(l.i[0].oa>h.B&&(h.B=NaN,h.C=NaN),h.i&&h.i.oa===l.i[0].oa)if(m=h.i.tc.event,"start"===m||"continue"===m){if(1===h.l||5===h.l)h.B=l.i[0].oa,h.C=l.i[0].C,mF(h,"sdai","joinad"+h.l+"_sg"+h.B+"_st"+h.C.toFixed(3)),h.l=2,f.Ht(h.i.tc)}else h.l=5;else 1===h.l&&(h.l=5)}else if(a.policy.Ba&&e.hm()&&!e.isComplete()&&!HJ(a,e)&&!e.isFailed())break a;e.isFailed()&&(h=e.info.i[0].i,l=e.lastError,Ts(h.l.i)&&(f=g.Ke(e.zd()),a.Hb("dldbrerr",f||"none")),e.canRetry()?
(f=(h.info.video&&1<h.l.l||410===e.u||500===e.u||503===e.u)&&!TH(a.l),m=e.Pm(),n=h.info.video?a.videoTrack:a.audioTrack,f&&(m.stun="1"),PJ(a,!1,l,m),a.ya()||(f&&(a.K(),SH(a.l,h)),a.policy.Je&&1===e.info.i.length&&0<e.info.i[0].Va&&h!==n.i&&a.W?a.U("reattachrequired"):($I(n,e),a.gf()))):Ts(h.l.i)?(a.U("localplaybackfailed"),PJ(a,!1,"net.closed",{err:e.lastError||"",rn:e.requestNumber.toString()})):(PJ(a,!1,l,e.Pm()),e.info.yf()?(h.B=l,a.gf()):PJ(a,!0,"net.retryexhausted",{err:l,rn:e.requestNumber.toString()})));
a.gf();a.policy.Gb&&e.isComplete()&&e.canRetry()&&iu(e.info.l,a.policy,a.ea)&&(h=a.ea,l=Ss(e.info.l.i),h=gu(h,l),h.B+a.policy.Gb*fu(h,a.policy,!0)>(0,g.M)()||(e=Gu(e.info,!1))&&UJ(a,e))}}}},d)};
WJ=function(a,b){b&&(a.K(),a.U("videoformatchange",b));a.policy.Cj&&a.l.Ba&&a.U("audioformatchange",UH(a.l,"a"))};
HJ=function(a,b){try{var c=b.info.i[0].i,d=c.info.video?a.videoTrack:a.audioTrack;if(a.i.isManifestless&&d){d.G&&(b.ya(),b.isComplete()||b.Mg()||b.hm(),d.G=!1);b.ot()&&a.ma.wf(1,b.ot());var e=b.qw(),f=b.Ey(),h=a.i,l;for(l in h.i){var m=h.i[l].index;m.yg&&(e&&(m.Mm=Math.max(m.Mm,e)),f&&(m.i=Math.max(m.i||0,f)))}}var n;if(n=b.info.yf()){var p=b.info;n=!!uu(p.i[p.i.length-1])}if(n){for(var q=g.u(b.Er()),r=q.next();!r.done;r=q.next())pI(d.B,r.value);a.U("metadata",c)}PI(d);return!!d.De()}catch(t){return t instanceof
Error&&(g.dj(t),b=b.Pm(),b.origin="hrhs",PJ(a,!0,"fmt.unplayable",b)),!1}};
ZJ=function(a){var b=a.mediaSource.i,c=a.mediaSource.l;if(Zha(a)){if(a.policy.Wg){if(!b.Vj()){var d=a.audioTrack.De();d&&XJ(a,b,d)}c.Vj()||(b=a.videoTrack.De())&&XJ(a,c,b)}a.xa||(a.xa=(0,g.M)())}else{if(a.xa){d=(0,g.M)()-a.xa;var e=XI(a.audioTrack,a.currentTime),f=XI(a.videoTrack,a.currentTime);a.K();a.Hb("appendpause","dur."+d.toFixed()+";abuf."+((1E3*e).toFixed()+";vbuf.")+(1E3*f).toFixed());a.xa=0}if(a.C){d=a.C;e=a.audioTrack;f=Uv(a.mediaSource.l.yd());if(d.B)d=Sha(d,f);else{if(f=e.De()){var h=
f.l;h&&h.C&&h.l&&(e=e.u.length?e.u[0]:null)&&2<=e.state&&!e.isFailed()&&0===e.info.bd&&e.Mg()&&(d.B=e,d.G=h,d.l=f.info,d.startTimeSecs=g.ab()/1E3,d.D=d.startTimeSecs,d.C=d.l.startTime,d.K())}d=NaN}d&&a.U("seekplayerrequired",d,!0)}d=!1;YJ(a,a.videoTrack,c)&&(d=!0,e=a.timing,e.B||(e.B=g.ab(),e.tick("vda"),eq("vda","video_to_ad"),e.u&&mk(4)));if(a.mediaSource&&!gw(a.mediaSource)&&(YJ(a,a.audioTrack,b)&&(d=a.timing,d.u||(d.u=g.ab(),d.tick("ada"),eq("ada","video_to_ad"),d.B&&mk(4)),d=!0),!a.ya()&&a.mediaSource)){!a.policy.Da&&
UI(a.videoTrack)&&UI(a.audioTrack)&&cw(a.mediaSource)&&!a.mediaSource.Be()&&(e=MI(a.audioTrack).i,e===a.i.i[e.info.id]&&(a.K(),e=a.mediaSource,cw(e)&&(e.mediaSource?e.mediaSource.endOfStream():e.Wc.webkitSourceEndOfStream(e.Wc.EOS_NO_ERROR)),e=a.schedule,Hx(Gx(e)),e.B=Ax()));e=a.policy.Ij;f=a.policy.Yk;d||!(0<e||f)||!cw(a.mediaSource)||UI(a.videoTrack)||UI(a.audioTrack)||(b.Xo(a.currentTime,f,e),c.Xo(a.currentTime,f,e));if(c=d)c=a.mediaSource,c=!(c.i?c.i.supports(0):hw());c&&g.Ih(a.N)}}};
Zha=function(a){if(gJ(a.videoTrack))return a.K(),!0;var b=a.u;if(1===b.l||2===b.l||3===b.l)return!0;if(a.policy.Bb)return!1;if(b=a.B.i){b=a.D;var c=a.videoTrack,d=a.audioTrack;if(c.u.length||d.u.length){var e=0,f=vI(c.B).concat(vI(d.B));f=g.u(f);for(var h=f.next();!h.done;h=f.next())e+=h.value.l;c=c.i.info.l+d.i.info.l;e/=c;b=10<e?!0:10>c*(10-e)/sH(b)}else b=!0;(b=!b)||(b=a.videoTrack,b=0<b.u.length&&1===b.B.l.length&&lI(b.B).info.G<b.ea)}if(b)return!0;if(!a.W||!a.policy.ub||10>a.currentTime||360<
a.videoTrack.i.info.Qa().i)return!1;b=dJ(a.videoTrack,a.currentTime,a.policy.ub)||dJ(a.audioTrack,a.currentTime,a.policy.ub);return(0<a.videoTrack.u.length||0<a.audioTrack.u.length||SJ(a,a.videoTrack,a.audioTrack)||SJ(a,a.audioTrack,a.videoTrack))&&b};
YJ=function(a,b,c){if(c.Be())return!0;if(!c.As())return!1;var d=b.De(),e;if(!(e=!d||6===d.info.type)&&(e=a.u)){e=a.u;var f;if(f=0!==e.l&&b===e.ea)e=ZI(e.D),f=d.info.oa>(e?e.oa:-1);e=!!f}if(e)return!1;e=d.info;f=MI(b);!f||f.Dc||wu(f,e)||c.abort();!c.Mn()||$v()?c.Rv(e.i.info.containerType,e.i.info.mimeType):e.i.info.containerType!==c.Mn()&&a.Hb("ctu","ct."+$v()+";prev_c."+c.Mn()+";curr_c."+e.i.info.containerType);f=e.i.C;a.policy.uj&&f&&(e=0+f.duration,f=-f.i,0===c.Hp()&&e===c.nt()||c.qv(0,e),f!==c.Kb()&&
(c.wm(f),wI&&AI(a.audioTrack.B,c.Dt())));if(a.i.u&&0===d.info.Va&&(g.iv(d.info.i.info)||a.policy.dl)){if(null==c.Vj()){e=MI(b);if(!(f=!e||e.i!==d.info.i)){b:if(e=e.I,f=d.info.I,e.length!==f.length)e=!1;else{for(var h=0;h<e.length;h++)if(!Ib(e[h],f[h])){e=!1;break b}e=!0}f=!e}e=f}else e=c.Vj(),f=d.info.i.i,e=e!==f&&!Ib(e,f);e&&a.Hb("initchg","it."+d.info.i.info.id+".ty."+d.info.type+".seg."+d.info.oa);a.policy.Sb&&!e&&(g.iv(d.info.i.info)?(Gt(ev(d),1836019574),Gt(ev(d),1718909296)):(e=new Jt(ev(d)),
au(e),Mt(e,524531317,!0),d.i=d.i.split(e.start+e.i).Bk),d.u=!1)}a.policy.Re&&d.u&&(d.u=!1);e=a.C&&!!a.C.B&&b.i.info.audio;f=a.i.isManifestless||d.u;if(!(a.i.u&&0!==d.info.Va||f&&!e)&&XJ(a,c,d))return!0;if(e)return!1;e=a.currentTime+RJ(a,b,!1);if(!(e=d.info.C>e)){a:if(a.qb.push(d.info),a.policy.Mc&&(!d.info.Va||d.info.Dc||10>d.info.C)&&a.Hb("sba",c.gb({as:ru(d.info)})),e=d.u?d.info.i.i:null,f=$u(d.i),d.u&&(f=new Uint8Array(f.buffer,0,f.byteOffset+f.length)),e=$J(a,c,f,d.info,e),"s"===e)a.Ha=0,e=!0;
else{a.policy.rj||(c.abort(),xH(b));if("i"===e||"x"===e)aK(a,"checked",e,d.info);else{if("q"===e&&(d.info.isVideo()?(e=a.policy,e.D=Math.floor(.8*e.D),e.W=Math.floor(.8*e.W),e.C=Math.floor(.8*e.C)):(e=a.policy,e.G=Math.floor(.8*e.G),e.qb=Math.floor(.8*e.qb),e.C=Math.floor(.8*e.C)),!c.Be()&&!a.mediaSource.isView&&c.Xo(Math.min(a.currentTime,d.info.startTime),!0,5))){e=!1;break a}a.U("reattachrequired")}e=!1}e=!e}if(e)return!1;b.Ff(d);a.K("Appended "+ru(d.info)+", buffered: "+Qv(c.yd()));return!0};
aK=function(a,b,c,d){var e="fmt.unplayable",f=!0;"x"===c||"m"===c?(e="fmt.unparseable",d.i.B=e,d.i.info.video&&!TH(a.l)&&SH(a.l,d.i)):"i"===c&&(15>a.Ha?(a.Ha++,e="html5.invalidstate",f=!1):e="fmt.unplayable");d=zu(d);d.mrs=fw(a.mediaSource);d.origin=b;d.reason=c;PJ(a,f,e,d)};
bK=function(a,b,c){var d=a.i,e=!1;for(l in d.i){var f=Fv(d.i[l].info.mimeType)||d.i[l].info.isVideo();if(c===f)if(f=d.i[l].index,!Pu(f,b.oa))f.Cr(b),e=!0;else if(d.Ha){e=b;var h=f.Pf(e.oa);h&&h.startTime!==e.startTime?(f.segments=[],f.Cr(e),e=!0):e=!1;e&&d.U("clienttemp","restMflIndex","1",!1)}}kha(a.B,b,c,e);if(c)a:if(a=a.u,a.T&&(c=[],d=[],b.i&&(c=b.i.l,d=b.i.u),a.T.Iu(b.startTime,a.l,c,d)),a.policy.ea){if(a.policy.I){c=a.X&&b.oa===a.X.oa+1;a.X=b;d=a.i&&b.oa===a.i.oa+1;d=a.i&&c&&d&&"stop"!==a.i.tc.event&&
"predictStart"!==a.i.tc.event;var l=b.tc||null;f=a.D.i.index.vb()<=b.oa;e=a.I.isManifestless&&a.policy.ea;if(l){a.i={tc:l,oa:b.oa};if(!c){GH(a,l,b.oa);break a}if(d&&f&&e){GH(a,l,b.oa);break a}"continue"===l.event||"stop"===l.event?IH(a,b):GH(a,l,b.oa)}else d&&IH(a,b)}c=a.i&&a.u&&a.i.oa===a.u.oa-1;c=a.i&&c&&"stop"!==a.i.tc.event&&"predictStart"!==a.i.tc.event;a.u&&a.u.oa<b.oa&&(c?IH(a,a.u):a.N=!0);a.u=b}};
XJ=function(a,b,c){c.info.i.pd();var d=c.info.i.i;if(null==d||b.Vj()===d)return!1;var e=d,f=b.Jp();if(a.policy.Re&&f&&b.isView()&&g.iv(c.info.i.info)){var h=new DataView(d.buffer,d.byteOffset,d.byteLength);(f=pda(h,f))?e=new Uint8Array(f.buffer,f.byteOffset,f.byteLength):a.Hb("fenc","1")}f=null;h=c.info.i.Wj(0);h.length&&(f=h[0].i[0]);a.policy.Vg&&b.abort();d=$J(a,b,e,f,d);if("s"!==d)return aK(a,"sepInit",d,c.info),!0;a.K();return b.Be()};
$J=function(a,b,c,d,e){try{b.appendBuffer(c,d,e)}catch(f){if(11===f.code)return"i";if(12===f.code)return"x";if(22!==f.code&&0!==f.message.indexOf("Not enough storage"))return g.dj(f),"u";c=Qv(b.yd()).replace(/,/g,"_");d=g.Ke(f.message);a.Hb("quex","br."+c+";t."+(a.mediaSource?b===a.mediaSource.l?"v":"a":"u")+";e."+d);return"q"}return gw(a.mediaSource)?"m":"s"};
DJ=function(a,b){EH(b,"needkeyinfo",a.tE,a);EH(b,"error",a.uF,a);EH(b,"avsyncissue",a.tF,a);EH(b,"placeholderinfo",function(c){a.i.isManifestless&&bK(a,c,b===a.videoTrack)});
EH(b,"placeholderrollback",function(c){a.i.isManifestless&&Fw(a.i,c.oa,b===a.videoTrack)});
EH(b,"segmentinfo",function(c){a.i.isManifestless&&bK(a,c,b===a.videoTrack)});
EH(b,"localmediachange",a.vF.bind(a))};
Tha=function(a,b){b.subscribe("seekplayerrequired",function(c,d){a.I||a.U("seekplayerrequired",c,d)});
b.subscribe("ctmp",function(c,d){a.Hb(c,d,!1)});
b.subscribe("error",function(c,d,e){PJ(a,c,d,e)});
b.subscribe("setcurrenttime",function(c){a.currentTime=c})};
RJ=function(a,b,c){if(a.isSuspended)return 1;var d=b.i.info.audio?a.policy.G:a.policy.D;!a.policy.Ua&&VH(a.l)&&(d=Math.max(d,b.i.info.audio?a.policy.qb:a.policy.W));c&&(d+=a.policy.bb);var e=VH(a.l)?b.l?b.l.i.info.l:b.i.info.l:b.T;d/=e;0<a.policy.Kd&&a.mediaSource&&cw(a.mediaSource)&&(b=b.i.info.video?a.mediaSource.l:a.mediaSource.i)&&!b.Be()&&(b=b.yd(),e=Rv(b,a.currentTime),0<=e&&(b=a.currentTime-b.start(e),d+=Math.max(0,Math.min(b-a.policy.Kd,a.policy.il))));0<a.policy.C&&(d=Math.min(d,a.policy.C));
a.policy.Jd&&c&&!VH(a.l)&&(c=a.l,c=RH(c,g.jb(c.B))+RH(c,c.D.i[0]),c=a.policy.Jd*(c/rH(a.D)),c<d&&15>c&&a.Hb("bwcapped","1",!0),c=Math.max(c,15),d=Math.min(d,c));return d};
Wha=function(a){if(!a.Ma)return Infinity;var b=g.Ph(cK(a.Ma),function(d){return"ad"===d.namespace});
b=g.u(b);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c.start/1E3>a.currentTime)return c.start/1E3;return Infinity};
$ha=function(a,b){(new hJ(b,"cms",null,function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];return a.U.apply(a,["error"].concat(g.oa(d)))})).send()};
aia=function(a,b){if(a.mediaSource&&a.mediaSource.l){b-=!isNaN(a.timestampOffset)&&a.policy.Aa?a.timestampOffset:0;a.currentTime!==b&&a.resume();if(a.B.i&&!gw(a.mediaSource)){var c=a.currentTime<=b&&b<a.currentTime+10,d=Sv(a.mediaSource.l.yd(),a.currentTime+TJ);c&&d&&(a.B.i=!1)}a.B.i||(a.currentTime=b);g.Ih(a.Pa)}};
bia=function(a,b){var c=SI(a.videoTrack).find(function(d){return d.startTime>=b&&EJ(a,d.startTime,!1)});
return c&&c.startTime<b+1.5*c.duration?c.startTime+.1:0};
EJ=function(a,b,c){if(!(a.videoTrack.i.pd()&&a.audioTrack.i.pd()&&a.mediaSource&&a.mediaSource.l&&a.mediaSource.i))return!1;if(c&&a.i.isManifestless&&(-1===a.videoTrack.D||-1===a.audioTrack.D))return!0;var d=wH(a.videoTrack,b,c);if(isNaN(d))return!1;a=wH(a.audioTrack,a.policy.Ma?b:d,c);return isNaN(a)?!1:!0};
JJ=function(a,b,c){b.i!==c&&(a.K(),b.i=c)};
GJ=function(a,b,c,d){if(!c.pd()&&!c.u&&ju(c.l,a.policy)){if(d){d=a.D;var e=c.info,f=pH(d,e.video?d.policy.al:d.policy.Xg,e.l);d=d.policy.hg&&e.video?Math.max(f,d.policy.hg):f}else d=0;d=c.Wj(d);d=g.u(d);for(e=d.next();!e.done;e=d.next()){e=e.value;if("f"===e.i[0].i.info.i)return;f=UJ(a,e);!uu(e.i[e.i.length-1])&&NI(b,f)}c.u=!0}};
PJ=function(a,b,c,d){a.ya()||(d=new oq(c,b,d),g.Va(a),g.pq(d.details),a.U("error",d),"html5.invalidstate"!==c&&"fmt.unplayable"!==d.errorCode&&"fmt.unparseable"!==c&&b&&a.dispose())};
NJ=function(a){xH(a.audioTrack);xH(a.videoTrack)};
cia=function(a,b){var c=b.info.video?a.videoTrack:a.audioTrack;null!=c&&GJ(a,c,b,!1)};
CJ=function(a,b,c){b/=c;isNaN(a.timestampOffset)&&dK(a,b-Math.min(b,a.policy.ld));return(b-a.timestampOffset)*c};
dK=function(a,b){a.timestampOffset!==b&&(a.timestampOffset=b,a.K(),a.u.G=a.timestampOffset,a.U("timestamp",a.timestampOffset),a.i.isManifestless&&!a.policy.Aa&&(a.i.l=a.timestampOffset))};
eK=function(a){this.i=a};
fK=function(){g.N.apply(this,arguments)};
gK=function(a,b,c,d){fK.call(this);var e=this;this.u=-1;this.i={};this.B=new g.H(this.C,0,this);g.G(this,this.B);this.l=new g.H(function(){e.ya()||(e.B.start(Math.random()*c),e.l.start(b))},a,this);
g.G(this,this.l);d.subscribe("fairplay_next_need_key_info",this.D,this)};
hK=function(a){a=a.subarray(4);a=new Uint16Array(a.buffer,a.byteOffset,a.byteLength/2);return String.fromCharCode.apply(null,a)};
iK=function(a){var b=a.interval,c=a.Rq,d=a.rB,e=a.drmSessionId;this.url=a.url;this.interval=b;this.Rq=c;this.rB=d;this.drmSessionId=e};
jK=function(a,b){this.statusCode=a;this.message=b;this.i=this.heartbeatParams=this.errorMessage=null;this.l={};this.nextFairplayKeyId=null};
kK=function(a){var b=ct(a.subarray(0,16384)),c=b.indexOf("\r\n\r\n");if(-1===c)return null;var d=b.indexOf("\r\n"),e=b.slice(0,d).match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);if(null==e)return null;e=e[1];isFinite(e)&&(e=String(e));e="string"===typeof e?/^\s*-?0x/i.test(e)?parseInt(e,16):parseInt(e,10):NaN;b=tt(b.slice(d+2));if(null==b)return null;a=new jK(e,a.subarray(c+4));0!==a.statusCode&&(a.errorMessage=g.SA(a.statusCode));if(c=b["Heartbeat-Url"])a.heartbeatParams=new iK({url:c,interval:Number(b["Heartbeat-Interval-Secs"])||
60,Rq:Number(b["Heartbeat-Num-Retries"])||4});if(c=b["Authorized-Format-Types"])a.i=c.split(",");if(c=b["Key-Ids"])a.l=dia(c);a.nextFairplayKeyId=b["Next-Key-Id"];return a};
dia=function(a){if(!a)return{};a=a.split(";");var b={};g.wd(a,function(c){c=c.split(",");2===c.length&&(b[c[1]]=c[0])});
return b};
lK=function(a,b,c){c=void 0===c?"":c;g.F.call(this);this.message=a;this.requestNumber=b;this.l=c;this.onError=this.onSuccess=null;this.i=new g.Yh(5E3,2E4,.2)};
eia=function(a,b,c){a.onSuccess=b;a.onError=c};
fia=function(a,b,c){var d={format:"RAW",method:"POST",postBody:a.message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4,onSuccess:function(e){if(!a.ya())if(a.K(),0!==e.status&&e.response)if(g.Vp("drm_net_r",void 0,a.l),e=new Uint8Array(e.response),e=kK(e))a.onSuccess(e,a.requestNumber);else a.onError(a,"drm.net","t.p");else mK(a,e)},
onError:function(e){mK(a,e)}};
c&&(b=he(b,"access_token",c));g.Fj(b,d);a.K()};
mK=function(a,b){if(!a.ya())a.onError(a,b.status?"drm.net.badstatus":"drm.net.connect","t.r;c."+String(b.status),b.status)};
hia=function(a,b,c,d){var e={timeout:3E4,onSuccess:function(f){if(!a.ya()){a.K();g.Vp("drm_net_r",void 0,a.l);var h="LICENSE_STATUS_OK"===f.status?0:9999,l=null;if(f.license)try{l=oe(f.license)}catch(v){}if(0!==h||l){l=new jK(h,l);0!==h&&f.reason&&(l.errorMessage=f.reason);if(f.authorizedFormats){h={};for(var m=[],n={},p=g.u(f.authorizedFormats),q=p.next();!q.done;q=p.next())if(q=q.value,q.trackType&&q.keyId){var r=gia[q.trackType];if(r){"HD"===r&&f.isHd720&&(r="HD720");q.isHdr&&(r+="HDR");h[r]||
(m.push(r),h[r]=!0);var t=null;try{t=oe(q.keyId)}catch(v){}t&&(n[g.Je(t,4)]=r)}}l.i=m;l.l=n}f.nextFairplayKeyId&&(l.nextFairplayKeyId=f.nextFairplayKeyId);f=l}else f=null;if(f)a.onSuccess(f,a.requestNumber);else a.onError(a,"drm.net","t.p;p.i")}},
onError:function(f){if(!a.ya())if(f&&f.error)f=f.error,a.onError(a,"drm.net.badstatus","t.r;p.i;c."+f.code+";s."+f.status,f.code);else a.onError(a,"drm.net.badstatus","t.r;p.i;c.n")},
onTimeout:function(){a.onError(a,"drm.net","rt.req."+a.requestNumber)}};
d&&(e.rx="Bearer "+d);g.rl(c,"player/get_drm_license",b,e)};
oK=function(a,b,c,d){g.N.call(this);this.videoData=a;this.u=b;this.Da=c;this.sessionId=d;this.C={};this.cryptoPeriodIndex=NaN;this.url="";this.requestNumber=0;this.I=this.X=!1;this.B=null;this.xa=[];this.D=[];this.W=!1;this.i={};this.ea=NaN;this.status="";this.N=!1;this.G=NaN;this.l=a.C;this.cryptoPeriodIndex=c.cryptoPeriodIndex;a={};Object.assign(a,this.u.deviceParams);a.cpn=this.videoData.clientPlaybackNonce;this.videoData.W&&(a.vvt=this.videoData.W,this.videoData.mdxEnvironment&&(a.mdx_environment=
this.videoData.mdxEnvironment));this.u.N&&(a.authuser=this.u.N);this.u.pageId&&(a.pageid=this.u.pageId);isNaN(this.cryptoPeriodIndex)||(a.cpi=this.cryptoPeriodIndex.toString());this.C=a;this.C.session_id=d;this.T=!0;"widevine"===this.l.flavor&&(this.C.hdr="1");"playready"===this.l.flavor&&(b=Number(g.bx(b.experiments,"playready_first_play_expiration")),!isNaN(b)&&0<=b&&(this.C.mfpe=""+b),this.T=!1,this.videoData.S("html5_playready_enable_non_persist_license")&&(this.C.pst="0"));this.videoData.S("html5_ytlfe_use_py3_spork")&&
(this.C.dlc3="1");this.baseUrl=g.jx(this.l)?hK(c.initData).replace("skd://","https://"):this.l.u;this.fairplayKeyId=ee(this.baseUrl,"ek")||"";if(b=ee(this.baseUrl,"cpi")||"")this.cryptoPeriodIndex=Number(b);this.ma=this.videoData.S("html5_use_drm_retry");this.xa=c.l;this.K();nK(this,"sessioninit."+c.cryptoPeriodIndex);this.status="in"};
lia=function(a,b){nK(a,"createkeysession");a.status="gr";g.Vp("drm_gk_s",void 0,a.videoData.Ha);a.url=iia(a);try{a.B=b.createSession(a.Da,function(c){nK(a,c)})}catch(c){b="t.g";
c instanceof DOMException&&(b+=";c."+c.code);a.U("licenseerror","drm.unavailable",!0,b,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK");return}a.B&&(pK(a.B,function(c,d){jia(a,c,d)},function(c){a.ya()||(a.K(),a.error("drm.keyerror",!0,c))},function(){a.ya()||(a.K(),nK(a,"onkyadd"),a.I||(a.U("sessionready"),a.I=!0))},function(c){kia(a,c)}),g.G(a,a.B))};
iia=function(a){var b=a.baseUrl;ida(b)||a.error("drm.net",!0,"t.x");if(!ee(b,"fexp")){var c=["23898307","23914062","23916106","23883098"].filter(function(e){return a.u.experiments.experiments[e]});
0<c.length&&(a.C.fexp=c.join())}c=g.u(Object.keys(a.C));for(var d=c.next();!d.done;d=c.next())d=d.value,b=he(b,d,a.C[d]);return b};
mia=function(a){var b={};Object.assign(b,a.C);return b};
nia=function(a,b){b=new iK({rB:g.Je(b),drmSessionId:a.sessionId});a.U("heartbeatparams",b)};
jia=function(a,b,c){if(!a.ya())if(b){a.K();nK(a,"onkmtyp."+c);a.status="km";switch(c){case "license-renewal":case "license-request":case "license-release":break;case "individualization-request":oia(a,b);return;default:a.U("ctmp","message_type","t."+c+";l."+b.byteLength)}a.X||(g.Vp("drm_gk_f",void 0,a.videoData.Ha),a.X=!0,a.U("newsession",a));if(a.videoData.S("use_innertube_heartbeats_for_widevine")&&a.videoData.useInnertubeDrmService()&&a.N&&"widevine"===a.l.flavor)a.N&&"license-request"!==c&&nK(a,
"wvrenew.mt."+c,!0),nia(a,b);else{if(fx(a.l)&&(b=qK(b),!b))return;g.jx(a.l)&&!a.videoData.useInnertubeDrmService()&&(b=bt(g.Je(b)));b=new lK(b,++a.requestNumber,a.videoData.Ha);eia(b,function(d,e){pia(a,d,e)},function(d,e,f){if(!a.ya()){var h=!1,l;
(l=3<=d.i.l)||(l=a.ma&&36E4<(0,g.M)()-a.ea);l&&(h=!0,e="drm.net.retryexhausted");a.K();nK(a,"onlcsrqerr."+e+";"+f);a.error(e,h,f);a.shouldRetry(h,d)&&qia(a,d)}});
g.G(a,b);rK(a,b)}}else a.error("drm.unavailable",!1,"km.empty")};
oia=function(a,b){a.K();nK(a,"sdpvrq");a.G=Date.now();if("widevine"!==a.l.flavor)a.error("drm.provision",!0,"e.flavor;f."+a.l.flavor+";l."+b.byteLength);else{var c={cpn:a.videoData.clientPlaybackNonce};Object.assign(c,a.u.deviceParams);c=g.ae("https://www.googleapis.com/certificateprovisioning/v1/devicecertificates/create?key=AIzaSyB-5OLKTx2iU5mko18DfdwK5611JIjbUhE",c);b={format:"RAW",headers:{"content-type":"application/json"},method:"POST",postBody:JSON.stringify({signedRequest:ct(b)}),responseType:"arraybuffer"};
g.Kj(c,b,3,500).then(ej(function(d){if(!a.ya()){d=new Uint8Array(d.response);var e=ct(d);try{var f=JSON.parse(e)}catch(h){}f&&f.signedResponse?(a.U("ctmp","drminfo","provisioning"),f=(Date.now()-a.G)/1E3,a.G=NaN,a.U("ctmp","provs",""+f.toFixed(3)),a.B&&a.B.update(d)):(d=f&&f.error&&f.error.message,f="e.parse",d&&(f+=";m."+d),a.error("drm.provision",!0,f))}}),ej(function(d){a.ya()||a.error("drm.provision",!0,"e."+d.errorCode+";c."+(d.xhr&&d.xhr.status))}))}};
kia=function(a,b){a.ya()||0>=b.size||(b.forEach(function(c,d){var e=fx(a.l)?d:c;d=new Uint8Array(fx(a.l)?c:d);fx(a.l)&&sK(d);c=g.Je(d,4);sK(d);d=g.Je(d,4);a.i[c]?a.i[c].status=e:a.i[d]?a.i[d].status=e:a.i[c]={type:"",status:e}}),a.K("Key statuses changed: "+tK(a,",")),nK(a,"onkeystatuschange"),a.status="kc",a.U("keystatuseschange",a))};
uK=function(a){var b;if(b=a.T&&null!=a.B)a=a.B,b=!(!a.i||!a.i.keyStatuses);return b};
rK=function(a,b){var c,d;a.status="km";g.Vp("drm_net_s",void 0,a.videoData.Ha);if(a.videoData.useInnertubeDrmService()){var e=new g.Hn(a.u.Vb),f={context:g.pl(e.i||g.ql())};f.drmSystem=ria[a.l.flavor];f.videoId=a.videoData.videoId;f.cpn=a.videoData.clientPlaybackNonce;f.sessionId=a.sessionId;f.licenseRequest=g.Je(b.message);f.drmParams=a.videoData.drmParams;isNaN(a.cryptoPeriodIndex)||(f.isKeyRotated=!0,f.cryptoPeriodIndex=a.cryptoPeriodIndex);var h=!(null===(d=null===(c=a.videoData.u)||void 0===
c?void 0:c.Qa())||void 0===d||!d.isHdr());a.videoData.S("html5_request_only_hdr_or_sdr_keys")&&(f.drmVideoFeature=h?"DRM_VIDEO_FEATURE_PREFER_HDR":"DRM_VIDEO_FEATURE_SDR");if(!f.context||!f.context.client){a.K();a.error("drm.net",!0,"t.r;ic.0");return}if(h=a.u.deviceParams)f.context.client.deviceMake=h.cbrand,f.context.client.deviceModel=h.cmodel,f.context.client.browserName=h.cbr,f.context.client.browserVersion=h.cbrver,f.context.client.osName=h.cos,f.context.client.osVersion=h.cosver;f.context.user=
f.context.user||{};f.context.request=f.context.request||{};a.videoData.W&&(f.context.user.credentialTransferTokens=[{token:a.videoData.W,scope:"VIDEO"}]);f.context.request.mdxEnvironment=a.videoData.mdxEnvironment||f.context.request.mdxEnvironment;a.videoData.Ua&&(f.context.user.kidsParent={oauthToken:a.videoData.Ua});if(g.jx(a.l)){h=a.fairplayKeyId;for(var l=[],m=0;m<h.length;m+=2)l.push(parseInt(h.substring(m,m+2),16));f.fairplayKeyId=g.Je(l)}hia(b,f,e,g.jA(a.videoData))}else fia(b,a.url,a.videoData.oauthToken);
a.status="rs"};
pia=function(a,b,c){if(!a.ya()){if(a.requestNumber!==c&&"widevine"===a.l.flavor&&((a.u.S("html5_drm_ignore_out_of_order_responses")||a.u.S("html5_drm_ignore_out_of_order_responses_cfl"))&&nK(a,"drmOOO."+a.requestNumber+"."+c,!0),a.u.S("html5_drm_ignore_out_of_order_responses")))return;nK(a,"onlcsrsp");a.status="rr";0!==b.statusCode?a.error("drm.auth",!0,"t.f;c."+b.statusCode,b.errorMessage||void 0):(g.Vp("drm_kr_s",void 0,a.videoData.Ha),b.heartbeatParams&&b.heartbeatParams.url&&(a.videoData.S("outertube_streaming_data_always_use_staging_license_service")&&
(c=a.l.u.match(/(.*)youtube.com/g))&&(b.heartbeatParams.url=c[0]+b.heartbeatParams.url),a.videoData.S("html5_ytlfe_use_py3_spork")&&(b.heartbeatParams.url+="&dlc3=1")),b.heartbeatParams&&a.U("newlicense",b.heartbeatParams),b.i&&(a.D=b.i,a.N=!0,a.W=g.Qj(a.D,function(d){return d.includes("HDR")})),b.l&&(a.i=Mb(b.l,function(d){return{type:d,
status:"unknown"}})),hx(a.l)&&!a.videoData.useInnertubeDrmService()?b.message=oe(ct(b.message)):ix(a.l)&&a.videoData.useInnertubeDrmService()&&(b.message=bt(g.Je(b.message))),a.B&&(a.K(),nK(a,"updtks"),a.status="ku",a.B.update(b.message).then(function(){g.Vp("drm_kr_f",void 0,a.videoData.Ha);
if(!uK(a))if(nK(a,"ksApiUnsup"),gx(a.l)){var d=vK(a.D);480<uq[d]&&a.U("hdentitled",a)}else a.U("keystatuseschange",a)},function(d){d="msuf.req."+a.requestNumber+";msg."+g.Ke(d.message);
a.error("drm.keyerror",!0,d)})),a.I&&(a.ea=(0,g.M)()),g.jx(a.l)&&a.U("fairplay_next_need_key_info",a.baseUrl,b.nextFairplayKeyId))}};
qia=function(a,b){var c=b.i.getValue();c=new g.H(function(){rK(a,b)},c);
g.G(a,c);c.start();g.Zh(b.i);a.K();nK(a,"rtyrq")};
wK=function(a,b){if(!uK(a)&&gx(a.l)&&!b)return"large";b=[];var c=!0;if(uK(a))for(var d=g.u(Object.keys(a.i)),e=d.next();!e.done;e=d.next())e=e.value,"usable"===a.i[e].status&&b.push(a.i[e].type),"unknown"!==a.i[e].status&&(c=!1);if(!uK(a)||c)b=a.D;return vK(b)};
tK=function(a,b){for(var c=[],d=g.u(Object.keys(a.i)),e=d.next();!e.done;e=d.next())e=e.value,c.push(e+"_"+a.i[e].type+"_"+a.i[e].status);return c.join(b)};
xK=function(a){var b=a.status+".";return uK(a)?b+tK(a,"."):b+a.D.join(".")};
yK=function(a,b,c){a:{switch(b){case "highres":case "hd2880":b="UHD2";break;case "hd2160":case "hd1440":b="UHD1";break;case "hd1080":case "hd720":b="HD";break;case "large":case "medium":case "small":case "light":case "tiny":b="SD";break;default:c="";break a}c&&(b+="HDR");c=b}for(var d in a.i)if("output-restricted"===a.i[d].status&&(b=a.i[d].type,""===c||"AUDIO"===b||c===b))return!0;return!1};
zK=function(a,b){for(var c in a.i)if("usable"===a.i[c].status&&a.i[c].type===b)return!0;return!1};
nK=function(a,b,c){c=void 0===c?!1:c;a.K();(c||g.Mz(a.videoData)||"playready"===a.l.flavor&&a.videoData.S("html5_log_playready_high_res"))&&a.U("ctmp","drmlog",b)};
sK=function(a){var b=a[0];a[0]=a[3];a[3]=b;b=a[1];a[1]=a[2];a[2]=b;b=a[4];a[4]=a[5];a[5]=b;b=a[6];a[6]=a[7];a[7]=b};
vK=function(a){return g.pb(a,"UHD2")?"highres":g.pb(a,"UHD1")?"hd2160":g.pb(a,"HD")?"hd1080":g.pb(a,"HD720")?"hd720":"large"};
qK=function(a){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]);a=g.Ed(new DOMParser,Bd(g.oc("Uses only text content."),b),"text/xml");return a?(a=a.querySelector("Challenge"))&&a.childNodes&&0!==a.childNodes.length?new Uint8Array(QC(Me(a.childNodes[0].nodeValue)).buffer):null:null};
AK=function(a,b,c,d,e){var f;"playready"===e?f=qK(a):"fairplay"===e&&(f=bt(g.Je(a)));f&&(a={format:"RAW",method:"POST",postBody:f,responseType:"arraybuffer",withCredentials:!0,timeout:3E4},c=ie(c,d),g.Kj(c,a,3,500).then(function(h){h=new Uint8Array(h.response);(h=kK(h))&&h.message&&b.update(h.message)}))};
BK=function(a,b,c,d,e){g.F.call(this);this.element=a;this.I=b;this.initData=c;this.i=d;this.l=e;this.sessionId="";this.G=this.D=this.u=this.C=null;this.B=new g.Rn(this);g.G(this,this.B);sia(this)};
sia=function(a){a.i?(a.B.Y(a.i,"message",a.ZB),a.B.Y(a.i,"keystatuseschange",a.aC),a.i.closed&&a.i.closed.then(ej(function(){a.ya()||Ck("xboxone")&&a.u&&a.u("closed")}),null)):a.l&&(Sn(a.B,a.l,["mskeymessage",
"webkitkeymessage"],a.gA),Sn(a.B,a.l,["mskeyerror","webkitkeyerror"],a.fA),Sn(a.B,a.l,["mskeyadded","webkitkeyadded"],a.eA))};
pK=function(a,b,c,d,e){a.C=b;a.u=c;a.D=d;a.G=e};
CK=function(a,b,c){g.dj(c);a.u&&(c instanceof DOMException&&(b+=";n."+c.name+";m."+c.message),a.u(b))};
DK=function(a,b){g.F.call(this);this.element=a;this.i=b;this.D={};this.B=null;this.C=new g.Rn(this);this.u=this.l=null;g.G(this,this.C)};
EK=function(a){if(a.i.keySystemAccess)return a.i.keySystemAccess.createMediaKeys().then(function(b){a.ya()||(a.l=b,a.element.setMediaKeys(b))});
ex(a.i)?a.u=new (dx())(a.i.keySystem):hx(a.i)?(a.u=new (dx())(a.i.keySystem),a.element.webkitSetMediaKeys(a.u)):tia(a);return null};
tia=function(a){Sn(a.C,a.element,["keymessage","webkitkeymessage"],a.dC);Sn(a.C,a.element,["keyerror","webkitkeyerror"],a.cC);Sn(a.C,a.element,["keyadded","webkitkeyadded"],a.bC)};
uia=function(a,b){b=FK(b,a.i.l);a=a.u.createSession("video/mp4",b);return new BK(null,null,null,null,a)};
via=function(a,b){for(var c=new Uint8Array(270),d=0;135>d;d++)c[2*d]='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(d);a=a.u.createSession("video/mp4",b,c);return new BK(null,null,null,null,a)};
GK=function(a,b){var c=a.D[b.sessionId];!c&&a.B&&(c=a.B,a.B=null,c.sessionId=b.sessionId,a.D[b.sessionId]=c);return c};
FK=function(a,b){var c=a.subarray(4);c=new Uint16Array(c.buffer,c.byteOffset,c.byteLength/2);c=String.fromCharCode.apply(null,c).match(/ek=([0-9a-f]+)/)[1];for(var d="",e=0;e<c.length;e+=2)d+=String.fromCharCode(parseInt(c.substr(e,2),16));c=d;d=new ArrayBuffer(2*c.length);e=new Uint16Array(d);for(var f=0;f<c.length;f++)e[f]=c.charCodeAt(f);c=new Uint8Array(d);d=0;f=new ArrayBuffer(a.byteLength+4+c.byteLength+4+b.byteLength);e=new Uint8Array(f);f=new DataView(f);e.set(a);d+=a.byteLength;f.setUint32(d,
c.length,!0);d+=4;e.set(c,d);d+=c.length;f.setUint32(d,b.byteLength,!0);e.set(b,d+4);return e};
HK=function(a,b){g.F.call(this);this.i=g.sf("video");this.l=null;this.C=[];this.B=new g.Rn(this);this.u=new cx("fairplay","com.youtube.fairplay","",b);this.u.l=a;g.G(this,this.B);this.init()};
IK=function(a,b,c){fK.call(this);var d=this;this.B=a;this.u=b;this.i=[];this.l=new g.H(function(){var e=d.i.shift().info;a:{var f=e.cryptoPeriodIndex;if(isNaN(f)&&0<d.u.values.length)f=!0;else{for(var h=g.u(d.u.values),l=h.next();!l.done;l=h.next())if(l.value.cryptoPeriodIndex===f){f=!0;break a}f=!1}}f||d.U("rotated_need_key_info_ready",e);0<d.i.length&&(e=d.i[0].time-(0,g.M)(),d.l.start(Math.max(0,e)))},0);
g.G(this,this.l);c.subscribe("widevine_set_need_key_info",this.C,this)};
JK=function(){this.keys=[];this.values=[]};
KK=function(a,b){return g.nb(a.keys,function(c){return Ib(b,c)})};
NK=function(a,b,c){g.N.call(this);this.element=a;this.videoData=b;this.u=c;this.i=this.videoData.C;this.drmSessionId=this.videoData.drmSessionId||g.$n();this.l=new JK;this.G=new JK;this.N=new JK;this.B=[];this.Ha=2;this.W=new g.Rn(this);this.Ka=this.Da=!1;this.heartbeatParams=null;this.ea=this.ma=this.xa=this.T=!1;this.D=null;this.Aa=!1;(a=this.element)&&(a.addKey||a.webkitAddKey)||dx()||lx(c.experiments);c=this.videoData.Oe;this.I="fairplay"===this.i.flavor||c?pz:LK;this.C=new DK(this.element,this.i);
g.G(this,this.C);ex(this.i)&&(this.X=new DK(this.element,this.i),g.G(this,this.X));g.G(this,this.W);c=this.element;this.i.keySystemAccess?this.W.Y(c,"encrypted",this.eC):Sn(this.W,c,ex(this.i)?["msneedkey"]:["needkey","webkitneedkey"],this.AF);wia(this);a:switch(c=this.i,a=this.u.experiments,b=this.l,c.flavor){case "fairplay":19.2999<Bk()?(a=c.G,c=c.D,c>=a&&(c=.75*a),b=.5*(a-c),c=new gK(b,a,a-b-c,this)):c=null;break a;case "widevine":c=new IK(g.P(a,"disable_license_delay"),b,this);break a;default:c=
null}if(this.D=c)g.G(this,this.D),this.D.subscribe("rotated_need_key_info_ready",this.qx,this);this.K("Created, key system "+this.i.keySystem+", final EME "+lx(this.u.experiments));MK(this,"cks"+this.i.Md());c=this.i;"com.youtube.widevine.forcehdcp"===c.keySystem&&c.C&&(this.Pa=new HK(this.videoData.Sb,this.u.experiments),g.G(this,this.Pa))};
wia=function(a){var b=EK(a.C);b?b.then(ej(function(){xia(a)}),ej(function(c){if(!a.ya()){a.K();
g.dj(c);var d="t.a";c instanceof DOMException&&(d+=";n."+c.name+";m."+c.message);a.U("licenseerror","drm.unavailable",!0,d,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK")}})):(a.K(),MK(a,"mdkrdy"),a.T=!0);
a.X&&(b=EK(a.X))};
QK=function(a,b,c){a.Ka=!0;c=new fI(b,c);a.u.S("html5_eme_loader_sync")&&(a.G.get(b)||a.G.set(b,c));a.u.S("html5_process_all_encrypted_events")?OK(a,c):a.u.S("html5_eme_loader_sync")?OK(a,c):0!==a.B.length&&a.videoData.l&&a.videoData.l.i?PK(a):OK(a,c)};
RK=function(a,b){MK(a,"onneedkeyinfo");g.P(a.u.experiments,"html5_eme_loader_sync")&&(a.N.get(b.initData)||a.N.set(b.initData,b));OK(a,b)};
zia=function(a,b){if(ex(a.i)&&!a.xa&&(b=wha(b),0!==b.length)){var c=new fI(b);a.xa=!0;navigator.requestMediaKeySystemAccess("com.microsoft.playready",[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}]).then(function(d){d.createMediaKeys().then(function(e){yia(a,e,c)})},null)}};
yia=function(a,b,c){var d=b.createSession(),e=a.l.values[0],f=mia(e);d.addEventListener("message",function(h){h=new Uint8Array(h.message);AK(h,d,a.i.u,f,"playready")});
d.addEventListener("keystatuseschange",function(){"usable"in d.keyStatuses&&(a.ma=!0,SK(a,wK(e,a.ma)))});
d.generateRequest("cenc",c.initData)};
OK=function(a,b){if(!a.ya()){MK(a,"onInitData");if(g.P(a.u.experiments,"html5_eme_loader_sync")&&a.videoData.l&&a.videoData.l.i){var c=a.N.get(b.initData);b=a.G.get(b.initData);if(!c||!b)return;b=c;c=b.initData;a.G.remove(c);a.N.remove(c)}a.K();MK(a,"initd."+b.initData.length+";ct."+b.contentType);if("widevine"===a.i.flavor)if(a.Da&&!a.videoData.isLivePlayback)a.u.S("html5_process_all_encrypted_events")&&PK(a);else{if(!(g.P(a.u.experiments,"vp9_drm_live")&&a.videoData.isLivePlayback&&b.cd)){a.Da=
!0;c=b.cryptoPeriodIndex;var d=b.i;gI(b);b.cd||(d&&b.i!==d?a.U("ctmp","cpsmm","emsg."+d+";pssh."+b.i):c&&b.cryptoPeriodIndex!==c&&a.U("ctmp","cpimm","emsg."+c+";pssh."+b.cryptoPeriodIndex));a.U("widevine_set_need_key_info",b)}}else a.qx(b)}};
xia=function(a){if(!a.ya())if(g.P(a.u.experiments,"html5_drm_set_server_cert")&&!g.my(a.u)){var b=a.C.setServerCertificate();b?b.then(ej(function(c){g.Mz(a.videoData)&&a.U("ctmp","ssc",c)}),ej(function(c){a.U("ctmp","ssce","n."+c.name+";m."+c.message)})).then(ej(function(){TK(a)})):TK(a)}else TK(a)};
TK=function(a){a.ya()||(a.T=!0,a.K(),MK(a,"onmdkrdy"),PK(a))};
PK=function(a){if(a.Ka&&a.T&&!a.ea){for(;a.B.length;){var b=a.B[0];if(a.l.get(b.initData))if("fairplay"===a.i.flavor)a.l.remove(b.initData);else{a.B.shift();continue}gI(b);break}a.B.length&&a.createSession(a.B[0])}};
SK=function(a,b){var c=vq("auto",b,!1,"l");if(a.videoData.Oe){if(tq(a.I,c))return}else if(yq(a.I,b))return;a.I=c;a.U("qualitychange");a.K();MK(a,"updtlq"+b)};
MK=function(a,b,c){c=void 0===c?!1:c;a.ya()||(a.K(),(g.Mz(a.videoData)||c)&&a.U("ctmp","drmlog",b))};
UK=function(a){var b;if(b=g.Fk()){var c;b=!(null===(c=a.C.l)||void 0===c||!c.getMetrics)}b&&(b=a.C.getMetrics())&&MK(a,"mtr."+g.Je(b,3),!0)};
VK=function(a,b,c){g.N.call(this);this.videoData=a;this.i=b;this.playerVisibility=c;this.D=0;this.u=this.l=null;this.N=this.C=this.B=!1;this.I=this.G=0};
aL=function(a,b,c){var d=!1,e=a.D+3E4<(0,g.M)()||!1,f;if(f=a.videoData.S("html5_pause_on_nonforeground_platform_errors")&&!e)f=a.playerVisibility,f=!!(f.Pe()||f.isInline()||f.isBackground()||f.Rl()||f.Ql());f&&(c.nonfg="paused",e=!0,a.U("pausevideo"));f=a.videoData.u;if(!e&&!a.videoData.S("html5_disable_codec_on_platform_errors_cfl")&&((null===f||void 0===f?0:Dv(f))||(null===f||void 0===f?0:Bv(f)))){if(a.videoData.S("html5_disable_codec_on_platform_errors")){a.i.i.i.set(f.i,{dy:1,Zu:Number.MAX_SAFE_INTEGER});
var h="cfalls"}else if(a.videoData.S("html5_disable_codec_on_errors_with_exp_backoff")){h=a.i.i;var l=f.i,m=0;h.i.has(l)&&(m=h.i.get(l).dy);h.i.set(l,{dy:m+1,Zu:Math.pow(2,m+1)});h="cfallexp"}else a.videoData.S("html5_disable_codec_for_playback_on_error")&&a.l&&(l=a.l.l,m=f.i,l.Da.has(m)?l=!1:(l.Da.add(m),l.T=-1,NH(l,l.l),l=!0),l&&(h="cfallp"));h&&(d=e=!0,c[h]=f.i)}if(!e)return WK(a,c);a.D=(0,g.M)();e=a.videoData;e=e.X?e.X.Ay()<Date.now()/1E3+1800:!1;c.e=b;e&&(c.staleprog="1");XK(a,"qoe.restart",
c);if(e&&YK(a))return ZK(a),!0;Ck("philips")&&$K(a);!a.videoData.S("html5_disable_codec_on_platform_errors")&&f&&Dv(f)?(a.i.i.disableAv1(),d=!0):a.l?(b=a.l,c=(c=MI(b.videoTrack)||b.videoTrack.l)?c.i:b.videoTrack.i,c.G+=1,SH(b.l,c)):a.videoData.X&&a.videoData.X.ev();a.U("newelementrequired",d);return!0};
WK=function(a,b){if(a.videoData.Ba)return!1;a.i.W+=1;if(10>=a.i.W)return!1;b.exiled=""+a.i.W;XK(a,"qoe.start15s",b);a.U("playbackstalledatstart");return!0};
$K=function(a){if("GAME_CONSOLE"!==a.i.deviceParams.cplatform)try{window.close()}catch(b){}};
YK=function(a){return a.B||"yt"!==a.i.C?!1:a.videoData.Ba?25>a.videoData.Pa:!a.videoData.Pa};
ZK=function(a){a.B||(a.B=!0,a.U("signatureexpiredreloadrequired"))};
Aia=function(a,b){if(a.u&&("fmt.unplayable"===b.errorCode||"html5.invalidstate"===b.errorCode)){var c=a.u.Kf();b.details.merr=c?c.toString():"0";b.details.msg=a.u.zd()}};
bL=function(a){return"net.retryexhausted"===a.errorCode||"net.badstatus"===a.errorCode&&!!a.details.fmt_unav};
Bia=function(a,b,c){if("403"===b.details.rc){var d=b.errorCode;d="net.badstatus"===d||"manifest.net.retryexhausted"===d}else d=!1;if(!d)return!1;b.details.sts="18722";if(YK(a))return c?(a.C=!0,a.U("releaseloader")):(b.i&&(b.details.e=b.errorCode,b.errorCode="qoe.restart",b.i=!1),XK(a,b.errorCode,b.details),ZK(a)),!0;6048E5<(0,g.M)()-a.i.xa&&cL(a,"signature");return!1};
cL=function(a,b){try{window.location.reload();XK(a,"qoe.restart",{detail:"pr."+b});return}catch(c){}a.i.S("tvhtml5_retire_old_players")&&g.my(a.i)&&$K(a)};
dL=function(a,b){a.i.i.B=!1;XK(a,"qoe.restart",{e:void 0===b?"fmt.noneavailable":b,detail:"hdr"});a.U("formatupdaterequested")};
eL=function(a,b,c,d){a.U("clienttemp",b,c,(void 0===d?{Bv:!1}:d).Bv)};
XK=function(a,b,c){a.U("qoeerror",b,c)};
fL=function(a,b,c,d){this.videoData=a;this.i=b;this.reason=c;this.l=d};
gL=function(a,b,c){this.i=a;this.X=b;this.l=c;this.T=this.G=this.I=this.B=this.u=this.D=this.N=this.C=0;this.playbackRate=1};
iL=function(a,b,c){!g.P(a.i.experiments,"html5_tv_ignore_capable_constraint")&&g.my(a.i)&&(c=c.compose(hL(a,b)));return c};
kL=function(a){return a.S("html5_exponential_memory_for_sticky")?.5>Nx(a.i.Pa,"sticky-lifetime")?"auto":jL():jL()};
lL=function(a,b){var c=new sq(0,0,!1,"o");a.S("html5_varispeed_playback_rate")&&1<a.playbackRate?(a=sx(a.i.i,b.i.videoInfos,a.playbackRate),c=new sq(0,a,!0,"o")):1<a.playbackRate&&(c=new sq(0,480,!0,"o"));return c};
hL=function(a,b){if(g.my(a.i)&&us(a.i.i,vs.HEIGHT))a=b.i.videoInfos[0].Qa().i;else{var c=!!b.i.i,d;g.gy(a.i)&&(d=window.screen&&window.screen.width?new g.ff(window.screen.width,window.screen.height):null);d||(d=a.i.Xd?a.i.Xd.clone():a.X.Ne());(cy||OG||c)&&d.scale(yy());a=d;Iz(b.videoData)||lA(b.videoData);d=b.i.videoInfos;if(d.length){d[0].Qa();b=d[0];c=b.Qa();d=g.u(d);for(var e=d.next();!e.done&&!(b=c=e.value,c=c.Qa(),null===a||.78*c.width<a.width&&.78*c.height<a.height);e=d.next());a="93"===b.wb()?
vv(c.width,c.height):c.quality;a=vq("auto",a,!1,"r")}else a=pz;a=a.i}a&&(a=Math.max(a,360));return new sq(0,a,!1,"r")};
Cia=function(a,b){return D(a,function d(){var e;return A(d,function(f){if(!b.i.i)return f.return(void 0);e=b.i.videoInfos;return f.return(oz(e))})})};
Dia=function(a,b){return D(a,function d(){var e,f,h,l,m=this;return A(d,function(n){if(1==n.i)return(e=b.i.videoInfos.find(function(p){return Dv(p)}))?null!==e.B?n.fb(2):x(n,oz([e]),2):n.return(!1);
f=e.B||!1;h=b.i.videoInfos[0].video;l=Math.min(Hw("1",h.fps),Hw("1",30));m.l.Ja("mcrsp","itag."+e.id+";smooth."+ +e.D+";efficient."+ +f+";perf."+l);return n.return(f)})})};
nL=function(a,b){if(!b.videoData.u||a.S("html5_disable_performance_downgrade"))return!1;6E4<g.ab()-a.N&&(a.C=0);a.C++;a.N=g.ab();if(4!==a.C)return!1;mL(a,b.videoData.u);return!0};
Eia=function(a,b,c,d){if(!b||!c||!b.videoData.u)return!1;var e=g.Q(a.i.experiments,"html5_df_downgrade_thresh"),f=a.S("html5_log_media_perf_info"),h=g.Q(a.i.experiments,"hfr_dropped_framerate_fallback_threshold");if(!(5E3>(0,g.M)()-a.D?0:f||0<e||0<h))return!1;a.D=(0,g.M)();c=c.kp();if(!c)return!1;var l=c.droppedVideoFrames-a.G,m=c.totalVideoFrames-a.T;a.G=c.droppedVideoFrames;a.T=c.totalVideoFrames;var n=0===c.displayCompositedVideoFrames?0:c.displayCompositedVideoFrames||-1;f&&b.videoData.Ya&&a.l.Ja("ddf",
"dr."+c.droppedVideoFrames+";de."+c.totalVideoFrames+";comp."+n);if(d)return a.u=0,a.B=0,!1;d=60<m?l/m:0;0<d&&(a.I=d);a.B=0<h&&60*d>h?a.B+1:0;if(!e||g.my(a.i))return!1;a.u=d>e?a.u+1:0;if(3!==a.u)return!1;mL(a,b.videoData.u);a.l.Ja("dfd",oL());return!0};
Fia=function(a,b){return 0>=g.Q(a.i.experiments,"hfr_dropped_framerate_fallback_threshold")||!(b&&b.Qa()&&32<b.Qa().fps)?!1:3<=a.B?(a.B=0,!0):!1};
mL=function(a,b){var c=b.Qa().i-1;Gia(b.i,b.Qa().fps,c);a=a.l;a.l&&ZH(a.l.l,a.u)};
pL=function(a,b){if(!b.i.i)return pz;var c=a.i.S("html5_dynamic_av1_hybrid_threshold"),d=0,e=g.Q(a.i.experiments,"html5_performance_cap_floor");a=a.i.u?240:e;b=g.u(b.i.videoInfos);for(e=b.next();!e.done;e=b.next()){var f=e.value;if(!c||!Dv(f))if(e=Hw(f.i,f.Qa().fps),f=f.Qa().i,Math.max(e,a)>=f){d=f;break}}return new sq(0,d,!1,"b")};
Hia=function(a,b){a.S("html5_log_media_perf_info")&&(a.l.Ja("perfdb",oL()),a.l.Ja("hwc",""+navigator.hardwareConcurrency,!0),b&&a.l.Ja("mcdb",b.i.videoInfos.filter(function(c){return!1===c.D}).map(function(c){return c.wb()}).join("-")))};
oL=function(){var a=Mb(qL(),function(b){return""+b});
return g.pq(a)};
rL=function(a,b){g.F.call(this);this.provider=a;this.D=b;this.i=-1;this.C=!1;this.l=-1;this.playerState=new g.oF;this.seekCount=this.nonNetworkErrorCount=this.networkErrorCount=this.rebufferTimeSecs=this.playTimeSecs=this.B=0;this.delay=new g.H(this.send,6E4,this);this.u=!1;g.G(this,this.delay)};
sL=function(a){0<=a.i||(3===a.provider.l.getVisibilityState()?a.C=!0:(a.i=PE(a.provider),a.delay.start()))};
tL=function(a){if(!(0>a.l)){var b=PE(a.provider),c=b-a.B;a.B=b;8===a.playerState.state?a.playTimeSecs+=c:g.vF(a.playerState)&&!g.S(a.playerState,16)&&(a.rebufferTimeSecs+=c)}};
uL=function(a){switch(a.i.Ug){case "canary":return"HTML5_PLAYER_CANARY_TYPE_EXPERIMENT";case "holdback":return"HTML5_PLAYER_CANARY_TYPE_CONTROL";default:return"HTML5_PLAYER_CANARY_TYPE_UNSPECIFIED"}};
Iia=function(a){return(!a.S("html5_health_to_gel")||a.i.xa+36E5<(0,g.M)())&&(a.S("html5_health_to_gel_canary_killswitch")||a.i.xa+36E5<(0,g.M)()||"HTML5_PLAYER_CANARY_TYPE_UNSPECIFIED"===uL(a))?a.S("html5_health_to_qoe"):!0};
vL=function(a,b,c,d,e){var f={format:"RAW"},h={};g.pj(a)&&g.qj()&&(c&&(h["X-Goog-Visitor-Id"]=c),b&&(h["X-Goog-PageId"]=b),d&&(h.Authorization="Bearer "+d),c||d||b)&&(f.withCredentials=!0);0<Object.keys(h).length&&(f.headers=h);e&&(f.onFinish=e);return 1<Object.keys(f).length?f:null};
wL=function(a,b,c,d,e,f,h){g.qj()&&c.token&&(a=g.ae(a,{ctt:c.token,cttype:c.Jv,mdx_environment:c.mdxEnvironment}));e?(null==b?b={}:(c=g.lj(a),Object.keys(c).includes("cpn")),h?Gn(a,b):f?g.Fn(a,b):g.En(a,b)):b?(f=g.lj(a),Object.keys(f).includes("cpn"),g.Fj(a,b)):g.Tk(a,d)};
yL=function(a){g.F.call(this);var b=this;this.provider=a;this.i={};this.sequenceNumber=1;this.Ka=NaN;this.l="N";this.xa=this.Ya=this.Ma=this.Ha=this.B=0;this.ea=this.bb="";this.Ua=this.T=NaN;this.Pa=0;this.qb=-1;this.Xa=1;this.playTimeSecs=this.rebufferTimeSecs=0;this.Aa=this.W=this.isOffline=this.X=!1;this.Bb=[];this.I=null;this.N=this.Da=this.C=!1;this.u=-1;this.ma=!1;this.ub=new g.H(this.ND,750,this);this.G=this.adCpn="";this.adFormat=void 0;this.Gb=0;g.G(this,this.ub);(a="function"===typeof navigator.getBattery?
navigator.getBattery():null)&&a.then&&a.then(function(c){b.I=c});
xL(this,0,"vps",["N"])};
xL=function(a,b,c,d){var e=a.i[c];e||(e=[],a.i[c]=e);e.push(b.toFixed(3)+":"+d.join(":"))};
zL=function(a,b){var c=a.provider.l.getCurrentTime();xL(a,b,"cmt",[c.toFixed(3)]);c=a.provider.l.yh();if(a.D&&1E3*c>a.D.Hz+100&&a.D){var d=a.D,e=d.isAd;a.Ba=1E3*b-d.JG-(1E3*c-d.Hz)-d.CG;a.Ja("gllat","l."+a.Ba.toFixed()+";prev_ad."+ +e);delete a.D}};
DL=function(a,b){b=void 0===b?NaN:b;b=0<=b?b:PE(a.provider);var c=a.provider.l.Qp();if(!isNaN(a.T)&&!isNaN(c.l)){var d=c.l-a.T;0<d&&xL(a,b,"bwm",[d,(c.B-a.Ua).toFixed(3)])}isNaN(a.T)&&c.l&&a.isOffline&&AL(a,!1);a.T=c.l;a.Ua=c.B;isNaN(c.bandwidthEstimate)||xL(a,b,"bwe",[c.bandwidthEstimate.toFixed(0)]);a.provider.videoData.Ya&&c.i&&a.Ja("bwinfo",c.i);a.I&&xL(a,b,"bat",[a.I.level,a.I.charging?"1":"0"]);d=a.provider.l.getVisibilityState();a.qb!==d&&(xL(a,b,"vis",[d]),a.qb=d);zL(a,b);(d=BL(a.provider))&&
d!==a.Pa&&(xL(a,b,"conn",[d]),a.Pa=d);CL(a,b,c)};
CL=function(a,b,c){if(!isNaN(c.Pj)){var d=c.Pj;c.u<d&&(d=c.u);xL(a,b,"bh",[d.toFixed(3)])}};
EL=function(a){for(var b=0,c=g.u(Object.keys(a.i)),d=c.next();!d.done;d=c.next())d=d.value,b+=d.length+Number(g.rg(a.i[d],function(e,f){return e+f.length},0));
96E3<b&&(new g.H(a.reportStats,0,a)).start()};
Jia=function(a){a.provider.videoData.Gb&&FL(a,"prefetch");a.provider.videoData.Pa&&a.Ja("reload","r."+a.provider.videoData.reloadReason+";ct."+a.provider.videoData.Pa);a.provider.videoData.Tb&&FL(a,"monitor");a.provider.videoData.isLivePlayback&&FL(a,"live");a.provider.videoData.We&&a.Ja("ctrl",a.provider.videoData.We,!0);if(a.provider.videoData.Td){var b=a.provider.videoData.Td.replace(/,/g,"_");a.Ja("ytp",b,!0)}a.provider.videoData.oz&&(b=a.provider.videoData.oz.replace(/,/g,"."),a.Ja("ytrexp",
b,!0));if(!g.P(a.provider.i.experiments,"html5_disable_gpu_reporting")){var c=a.provider.i.experiments;b=a.provider.videoData;c=g.P(c,"enable_white_noise")||g.P(c,"enable_webgl_noop")||g.P(c,"enable_gpu_logging");var d=!!b.i&&Pda(b.i)||!!b.i&&mw(b.i)||!!b.i&&nw(b.i)||!!b.i&&ow(b.i),e=b.l&&Dv(g.jb(b.l.videoInfos))&&/^g/.test(b.clientPlaybackNonce);b=/^gp/.test(b.clientPlaybackNonce);(c||d||b||e)&&(b=GL())&&(a.i.gpu=[b])}a.Ka=zj(function(){a.reportStats()},1E4)};
HL=function(a,b,c,d){var e=a.provider.l.getCurrentTime();c=[c,e.toFixed(3)];d&&c.push(d);xL(a,b,"error",c);a.N=!0};
IL=function(a){0<=a.u||(a.provider.i.Ma||3!==a.provider.l.getVisibilityState()?a.u=PE(a.provider):a.ma=!0)};
FL=function(a,b){var c=a.i.cat||[];c.push(b);a.i.cat=c};
AL=function(a,b){a.isOffline=b;xL(a,PE(a.provider),"is_offline",[a.isOffline?"1":"0"]);(b=a.provider.videoData.cotn)&&!a.i.cotn&&(a.i.cotn=[b])};
JL=function(a,b,c,d,e){var f=PE(a.provider);1===b&&xL(a,f,"vps",[a.l]);var h=a.i.xvt||[];h.push("t."+f.toFixed(3)+";m."+e.toFixed(3)+";g.2;tt."+b+";np.0;c."+c+";d."+d);a.i.xvt=h};
LL=function(a){this.provider=a;this.G=!1;this.i=0;this.B=-1;this.lastUpdateTime=NaN;this.l=0;this.segments=[];this.D=this.C=0;this.N=this.provider.od().volume;this.I=this.provider.od().muted;this.u=KL(this.provider)};
ML=function(a){a.u.startTime=a.l;a.u.endTime=a.i;a.segments.length&&g.jb(a.segments).isEmpty()?a.segments[a.segments.length-1]=a.u:a.segments.length&&a.u.isEmpty()||a.segments.push(a.u);a.C+=a.i-a.l;a.u=KL(a.provider);a.l=a.i};
NL=function(a){a.segments.length&&a.i===a.l||ML(a);var b=a.segments;a.segments=[];return b};
Kia=function(a){OL(a);a.D=zj(function(){a.update()},100);
a.lastUpdateTime=PE(a.provider);a.u=KL(a.provider)};
OL=function(a){window.clearInterval(a.D);a.D=NaN};
PL=function(a,b,c){c-=a.lastUpdateTime;return b===a.i&&.5<c};
QL=function(a,b,c,d){this.segments=[];this.experimentIds=[];this.xa=this.bb=this.isFinal=this.hf=this.Ua=this.autoplay=this.autonav=!1;this.Bb="yt";this.B=this.D=null;this.sendVisitorIdHeader=this.ma=!1;this.pageId="";this.u="watchtime"===c;this.C="playback"===c;this.Ya="delayplay"===c;this.Xa="atr"===c;this.zc="engage"===c;this.sendVisitorIdHeader=!1;this.uri=this.Xa?"/api/stats/"+c:"//"+b.qe+"/api/stats/"+c;this.Oc=!b.S("embeds_disable_event_label_embedded_unbranded_killswitch")&&this.C&&b.pfpChazalUi&&
a.N;this.Tb=b.S("embeds_enable_intersection_observer_v2");d&&(this.bb=d.fs,d.rtn&&(this.B=d.rtn),this.u?(this.playerState=d.state,0<d.rti&&(this.D=d.rti)):(this.Gc=d.mos,this.Mc=d.volume,d.at&&(this.adType=d.at)),d.autonav&&(this.autonav=d.autonav),null!=d.inview&&(this.Sb=d.inview),d.size&&(this.Gb=d.size));this.deviceParams=g.dc(b.deviceParams);this.qc=b.Xa;this.experimentIds=b.experiments.experimentIds;this.ea=b.Bb;this.Bb=b.C;this.region=b.region;this.userAge=b.userAge;this.Ha=b.Gb;this.ld=g.zk();
this.sendVisitorIdHeader=b.sendVisitorIdHeader;this.N=g.P(b.experiments,"vss_pings_using_networkless");this.T=g.P(b.experiments,"vss_send_then_write");this.Hc=g.P(b.experiments,"vss_final_ping_send_and_write");this.pageId=b.pageId;b.livingRoomAppMode&&(this.livingRoomAppMode=b.livingRoomAppMode);this.accessToken=g.jA(a);this.adFormat=a.adFormat;this.adQueryId=a.adQueryId;this.autoplay=zr(a);this.autonav=a.Rf||this.autonav;this.contentVideoId=hA(a);this.clientPlaybackNonce=a.clientPlaybackNonce;this.Ua=
a.N;a.Aa&&(this.G=a.Aa,this.Ma=a.uf);a.mdxEnvironment&&(this.mdxEnvironment=a.mdxEnvironment);this.i=a.yl;this.W=a.bb;a.u&&(this.videoFormat=a.u.wb(),a.G&&a.G.wb()!==this.videoFormat&&(this.Pa=a.G.wb()));a.i&&os(a.i)&&(this.offlineDownloadUserChoice="1");this.eventLabel=this.Oc?"embedded_unbranded":xr(a);this.xa=a.Mc;this.Vb=a.Xh;if(b=aA(a))this.vf=b;this.Wb=a.zl;this.eventId=a.eventId;this.playlistId=a.DA||a.playlistId;this.We=a.We;this.Td=a.Td;this.pc=a.Vl;this.subscribed=a.subscribed;this.videoId=
a.videoId;this.videoMetadata=a.videoMetadata;this.visitorData=a.visitorData;this.osid=a.osid;this.Xb=a.FB;this.referrer=a.referrer;this.Da=a.nz||a.uB;this.Aa=a.Am;this.Ba=a.HB;this.userGenderAge=a.userGenderAge;this.X=a.lH};
g.RL=function(a,b){return vL(a.uri,a.pageId,a.sendVisitorIdHeader?a.visitorData:void 0,a.accessToken,b)};
g.TL=function(a){var b={ns:a.Bb,el:a.eventLabel,cpn:a.clientPlaybackNonce,docid:a.videoId,ver:2,referrer:a.referrer,cmt:a.l(a.i),ei:a.eventId,fmt:a.videoFormat,fs:a.bb?"1":"0",rt:a.l(a.Nc),of:a.Xb,adformat:a.adFormat,content_v:a.contentVideoId,euri:a.qc,lact:a.ld,live:a.vf,cl:(366719603).toString(),mos:a.Gc,osid:a.osid,state:a.playerState,vm:a.videoMetadata,volume:a.Mc};a.adQueryId&&(b.aqi=a.adQueryId);a.subscribed&&(b.subscribed="1");g.$a(b,a.deviceParams);a.autonav&&(b.autonav="1");a.autoplay&&
(b.autoplay="1");a.Ua&&(b.dni="1");a.isFinal&&(b["final"]="1");a.xa&&(b.splay="1");a.W&&(b.delay=a.W);a.ea&&(b.hl=a.ea);a.region&&(b.cr=a.region);a.userGenderAge&&(b.uga=a.userGenderAge);void 0!==a.userAge&&a.Ha&&(b.uga=a.Ha+a.userAge);void 0!==a.ub&&(b.len=a.l(a.ub));!a.u&&0<a.experimentIds.length&&(b.fexp=a.experimentIds.toString());null!==a.B&&(b.rtn=a.l(a.B));a.Da&&(b.feature=a.Da);a.playlistId&&(b.list=a.playlistId);a.We&&(b.ctrl=a.We);a.Td&&(b.ytr=a.Td);a.pc&&(b.ssrt="1");a.Pa&&(b.afmt=a.Pa);
a.offlineDownloadUserChoice&&(b.ODUC=a.offlineDownloadUserChoice);a.qb&&(b.lio=a.l(a.qb));a.u?(b.idpj=a.Vb,b.ldpj=a.Wb,null!=a.D&&(b.rti=a.l(a.D)),a.X&&(b.ald=a.X)):void 0!==a.adType&&(b.at=a.adType);a.Gb&&(a.C||a.Ya||a.u&&a.Tb)&&(b.size=a.Gb);null!=a.Sb&&(a.C||a.Ya||a.u&&a.Tb)&&(b.inview=a.l(a.Sb));a.u&&(b.volume=SL(a,g.Zc(a.segments,function(d){return d.volume})),b.muted=SL(a,g.Zc(a.segments,function(d){return d.muted?1:0})),b.st=SL(a,g.Zc(a.segments,function(d){return d.startTime})),b.et=SL(a,
g.Zc(a.segments,function(d){return d.endTime})),g.Qj(a.segments,function(d){return 1!==d.playbackRate})&&(b.rate=SL(a,g.Zc(a.segments,function(d){return d.playbackRate}))),g.Qj(a.segments,function(d){return"-"!==d.i})&&(b.als=g.Zc(a.segments,function(d){return d.i}).join(",")));
g.Qj(a.segments,function(d){return 0!==d.visibilityState})&&(b.vis=SL(a,g.Zc(a.segments,function(d){return d.visibilityState})));
g.Qj(a.segments,function(d){return 0!==d.connectionType})&&(b.conn=SL(a,g.Zc(a.segments,function(d){return d.connectionType})));
g.Qj(a.segments,function(d){return 0!==d.l})&&(b.blo=SL(a,g.Zc(a.segments,function(d){return d.l})));
g.Qj(a.segments,function(d){return"-"!==d.B})&&(b.cc=g.Zc(a.segments,function(d){return d.B}).join(","));
g.Qj(a.segments,function(d){return"-"!==d.clipId})&&(b.clipid=g.Zc(a.segments,function(d){return d.clipId}).join(","));
if(g.Qj(a.segments,function(d){return!!d.u})){var c="au";
a.C&&(c="au_d");b[c]=g.Zc(a.segments,function(d){return d.u}).join(",")}g.qj()&&a.G&&(b.ctt=a.G,b.cttype=a.Ma,b.mdx_environment=a.mdxEnvironment);
a.zc&&(b.etype=void 0!==a.I?a.I:0);a.Aa&&(b.uoo=a.Aa);a.Ba&&(b.upt=a.Ba);a.livingRoomAppMode&&"LIVING_ROOM_APP_MODE_UNSPECIFIED"!==a.livingRoomAppMode&&(b.clram=Lia[a.livingRoomAppMode]||a.livingRoomAppMode);return b};
SL=function(a,b){return g.Zc(b,a.l).join(",")};
g.UL=function(a){g.F.call(this);this.provider=a;this.currentPlayerState="paused";this.l=NaN;this.C=[10,10,10,40];this.G=this.D=0;this.X=this.T=this.ea=this.W=this.N=this.I=this.u=!1;this.B=NaN;this.i=new LL(a)};
ZL=function(a){if(!a.u){g.P(a.provider.i.experiments,"disable_embedpage_playback_logging")||16623!==a.provider.videoData.Jo||g.fj(Error("Playback for EmbedPage"));var b=g.VL(a,"playback");a.C=[10+a.provider.videoData.Xh,10,10,40+a.provider.videoData.zl-a.provider.videoData.Xh,40];Kia(a.i);b.B=WL(a,!0);0<a.B&&(b.i-=a.B);b.send();if(a.provider.videoData.sj){b=a.provider.i;var c=a.provider.videoData;c={html5:"1",video_id:c.videoId,cpn:c.clientPlaybackNonce,ei:c.eventId,ptk:c.sj,oid:c.Vw,ptchn:c.Uw,pltype:c.Ww,
content_v:hA(c)};b=g.ae(b.X+"ptracking",c);XL(a,b)}a.provider.videoData.bb||YL(a);a.u=!0;a=a.i;a.i=a.provider.l.getCurrentTime();a.lastUpdateTime=PE(a.provider);!(0===a.l&&5>a.i)&&2<a.i-a.l&&(a.l=a.i);a.G=!0}};
WL=function(a,b,c){c=void 0===c?NaN:c;var d=PE(a.provider);c=isNaN(c)?d:c;c=Math.ceil(c);var e=a.C[a.D];a.D+1<a.C.length&&a.D++;var f=c+e;a.l=g.yj(function(){if(!a.ya()){a.l=NaN;a.i.update();var h=NL(a.i),l=$L(a,h);b&&(l.D=f);var m=a.provider.S("html5_expanded_max_vss_pings")?1E3:400;m=a.G>m;!(1<h.length)&&h[0].isEmpty()||m||(l.B=WL(a,!0,f));l.send();a.G++}},1E3*(f-d));
return f};
g.VL=function(a,b){var c=a.provider;c=Object.assign(c.od(),c.videoData.od());g.$a(c,{state:a.currentPlayerState});b=new QL(a.provider.videoData,a.provider.i,b,c);b.i=a.provider.l.getCurrentTime();a.provider.videoData.isLivePlayback||(b.ub=a.provider.l.getDuration());a.provider.videoData.i&&(c=a.provider.videoData.i.Nd(b.i))&&(b.qb=c-b.i);b.Nc=PE(a.provider);b.segments=[KL(a.provider)];return b};
$L=function(a,b){var c=g.VL(a,"watchtime");if(0<a.B){for(var d=g.u(b),e=d.next();!e.done;e=d.next())e=e.value,e.startTime-=a.B,e.endTime-=a.B;c.i-=a.B}else c.i=a.i.i;c.segments=b;return c};
aM=function(a){a.i.update();return $L(a,NL(a.i))};
YL=function(a){a.provider.videoData.remarketingUrl&&!a.W&&(XL(a,a.provider.videoData.remarketingUrl),a.W=!0);a.provider.videoData.youtubeRemarketingUrl&&!a.ea&&(XL(a,a.provider.videoData.youtubeRemarketingUrl),a.ea=!0);a.provider.videoData.googleRemarketingUrl&&!a.T&&(XL(a,a.provider.videoData.googleRemarketingUrl),a.T=!0);a.provider.videoData.ppvRemarketingUrl&&!a.X&&(XL(a,a.provider.videoData.ppvRemarketingUrl),a.X=!0);bM(a)};
cM=function(a){a.i.update();var b;if(b=a.provider.videoData.Vc()&&a.provider.videoData.bb&&a.u&&!a.N)b=a.i,b=b.C+b.provider.l.getCurrentTime()-b.l>=a.provider.videoData.bb;b&&(a.u&&a.provider.videoData.bb&&(b=g.VL(a,"delayplay"),b.hf=!0,b.send(),a.N=!0),YL(a))};
dM=function(a){if(!a.ya()&&a.u){a.currentPlayerState="paused";var b=aM(a);b.isFinal=!0;b.send();a.dispose()}};
eM=function(a,b){a.ya()||(g.S(b.state,2)?(a.currentPlayerState="paused",g.wE(b,2)&&a.u&&aM(a).send()):g.S(b.state,8)?(a.currentPlayerState="playing",a.u&&isNaN(a.l)&&WL(a,!1)):a.currentPlayerState="paused")};
fM=function(a,b,c){a.I||(c||(c=g.VL(a,"atr")),c.Ka=b,c.send(),a.I=!0)};
bM=function(a){a.provider.videoData.D.eventLabel=xr(a.provider.videoData);a.provider.videoData.D.playerStyle=a.provider.i.playerStyle;a.provider.videoData.Jd&&(a.provider.videoData.D.feature="pyv");a.provider.videoData.D.vid=a.provider.videoData.videoId;var b=a.provider.videoData.D;a=a.provider.videoData;a=a.isAd()||!!a.Jd;b.isAd=a};
XL=function(a,b){var c=g.jA(a.provider.videoData),d=a.provider.S("web_player_vss_pageid_header")?a.provider.i.pageId:void 0,e=a.provider.i.sendVisitorIdHeader?a.provider.videoData.visitorData:void 0,f=g.P(a.provider.i.experiments,"vss_pings_using_networkless"),h=g.P(a.provider.i.experiments,"vss_send_then_write");c=vL(b,d,e,c,void 0);wL(b,c,{token:a.provider.videoData.Aa,Jv:a.provider.videoData.uf,mdxEnvironment:a.provider.videoData.mdxEnvironment},void 0,f,h)};
gM=function(){this.endTime=this.startTime=-1;this.B="-";this.playbackRate=1;this.visibilityState=0;this.u="";this.volume=this.connectionType=this.l=0;this.muted=!1;this.i=this.clipId="-"};
hM=function(a,b,c,d){this.videoData=a;this.i=b;this.l=c;this.od=d;this.u=void 0};
PE=function(a){return g.iM(a)()};
g.iM=function(a){if(!a.u){var b=g.Za(function(d){var e=(0,g.M)();d&&631152E6>=e&&(g.dj(Error("invalid coreTime.now value: "+e)),e=(new Date).getTime()+2);return e},g.P(a.i.experiments,"html5_validate_yt_now")),c=b();
a.u=function(){return Math.round(b()-c)/1E3};
a.l.Hu()}return a.u};
BL=function(a){if(navigator.connection&&navigator.connection.type)return jM[navigator.connection.type]||jM.other;if(g.my(a.i)){a=navigator.userAgent;if(/[Ww]ireless[)]/.test(a))return 3;if(/[Ww]ired[)]/.test(a))return 1}return 0};
KL=function(a){var b=new gM;b.B=a.od().cc||"-";b.playbackRate=a.l.getPlaybackRate();var c=a.l.getVisibilityState();0!==c&&(b.visibilityState=c);a.i.Da&&(b.l=1);c=a.l.getAudioTrack();c.i&&c.i.id&&"und"!==c.i.id&&(b.u=c.i.id);b.connectionType=BL(a);b.volume=a.od().volume;b.muted=a.od().muted;b.clipId=a.od().clipid||"-";b.i=a.videoData.IA||"-";return b};
g.kM=function(a){g.F.call(this);var b=this;this.provider=a;this.l=this.qoe=this.i=null;this.Zd=void 0;this.u=new Map;this.provider.videoData.isValid()&&!this.provider.videoData.Kd&&(this.i=new g.UL(this.provider),g.G(this,this.i),this.qoe=new yL(this.provider),g.G(this,this.qoe),this.provider.videoData.enableServerStitchedDai&&(this.Zd=this.provider.videoData.clientPlaybackNonce)&&this.u.set(this.Zd,this.i));Iia(this.provider)&&(this.l=new rL(this.provider,function(c){b.Ja("h5h",c)}),g.G(this,this.l))};
lM=function(a){var b;a.provider.videoData.enableServerStitchedDai&&a.Zd?null===(b=a.u.get(a.Zd))||void 0===b?void 0:ML(b.i):a.i&&ML(a.i.i)};
mM=function(a,b,c,d){a.qoe&&(a=a.qoe,xL(a,PE(a.provider),"ad_playback",[b,c,d]))};
Mia=function(a,b){a.i&&fM(a.i,b)};
Nia=function(a){if(!a.i)return null;var b=g.VL(a.i,"atr");return function(c){a.i&&fM(a.i,c,b)}};
Oia=function(a,b,c,d){c.adFormat=c.zc;var e=b.l;b=new g.UL(new hM(c,b.i,{getDuration:function(){return c.lengthSeconds},
getCurrentTime:function(){return e.getCurrentTime()},
yh:function(){return e.yh()},
Qp:function(){return e.Qp()},
getPlayerSize:function(){return e.getPlayerSize()},
getAudioTrack:function(){return c.getAudioTrack()},
getPlaybackRate:function(){return e.getPlaybackRate()},
Qn:function(){return e.Qn()},
getVisibilityState:function(){return e.getVisibilityState()},
Hu:function(){e.Hu()},
xo:function(){e.xo()}},b.od));
b.B=d;g.G(a,b);return b};
Pia=function(){this.Pj=0;this.C=this.B=this.l=this.u=NaN;this.i="";this.bandwidthEstimate=NaN};
Qia=function(){this.l=g.ZA;this.i=[]};
Ria=function(a,b,c){var d=[];for(b=nM(a,b);b<a.i.length;++b){var e=a.i[b];(e.end<=c||e.contains(c))&&d.push(e);if(e.start>c)break}return d};
oM=function(a,b){var c=[];a=g.u(a.i);for(var d=a.next();!d.done&&!(d=d.value,d.contains(b)&&c.push(d),d.start>b);d=a.next());return c};
Sia=function(a){return a.i.slice(nM(a,0x7ffffffffffff),a.i.length)};
nM=function(a,b){a=Eb(a.i,function(c){return b-c.start||1});
return 0>a?-(a+1):a};
pM=function(a,b){var c=NaN;a=g.u(a.i);for(var d=a.next();!d.done;d=a.next())if(d=d.value,d.contains(b)&&(isNaN(c)||d.end<c)&&(c=d.end),d.start>b&&(isNaN(c)||d.start<c)){c=d.start;break}return c};
Tia=function(a,b){a.i=a.i.filter(function(c){return!b.has(c)})};
qM=function(a,b,c,d){g.F.call(this);this.T=a;this.X=b;this.G=c;this.I=d;this.u=NaN;this.C=this.D=this.started=!1;this.l=[];this.N=new g.H(this.fh,250,this);g.G(this,this.N);this.B=new g.H(this.fh,0,this);g.G(this,this.B);this.i=new Qia};
cK=function(a){return a.ya()?[]:a.i.i};
Uia=function(a,b){b=g.u(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=c[1];1===c[0]?a.I(g.$A(d.namespace),d):a.I("crx_"+d.namespace,d)}};
Via=function(){var a=window.H5vccPlatformService,b="";if(a&&a.has("dev.cobalt.coat.clientloginfo")&&(a=a.open("dev.cobalt.coat.clientloginfo",function(){}))){var c=a.send(new ArrayBuffer(0));
c&&(b=String.fromCharCode.apply(String,g.oa(new Uint8Array(c))));a.close()}return b};
Wia=function(a){this.l=this.mediaTime=NaN;this.u=this.i=!1;this.B=.001;g.my(a)&&g.Q(a.experiments,"tvhtml5_min_has_advanced_secs_float")&&(this.B=g.Q(a.experiments,"tvhtml5_min_has_advanced_secs_float"))};
rM=function(a,b){return b>a.mediaTime+a.B&&b<a.mediaTime+5};
sM=function(a,b,c,d){if(d=1<d)a.u=!0;if(a.i)b!==a.mediaTime&&(a.i=!1);else if(0<b&&a.mediaTime===b)return c-a.l>(d||!a.u?1500:400);a.mediaTime=b;a.l=c;return!1};
Xia=function(a,b){this.videoData=a;this.i=b};
Yia=function(a,b,c){return ffa(b,c).then(function(){return g.Nj(new Xia(b,b.l))},function(d){d instanceof Error&&g.fj(d);
d=b.isLivePlayback&&!g.tx(a.i,!0)?"html5.unsupportedlive":"fmt.noneavailable";var e={buildRej:"1",a:""+ +!!b.adaptiveFormats,d:""+ +!!b.xa,drm:""+ +Kz(b),f18:""+ +(0<=b.Ug.indexOf("itag=18")),c18:""+ +Jv('video/mp4; codecs="avc1.42001E, mp4a.40.2"')};b.i&&(Kz(b)?(e.f142=""+ +!!b.i.i["142"],e.f149=""+ +!!b.i.i["149"],e.f279=""+ +!!b.i.i["279"]):(e.f133=""+ +!!b.i.i["133"],e.f140=""+ +!!b.i.i["140"],e.f242=""+ +!!b.i.i["242"]),e.cAVC=""+ +Kv('video/mp4; codecs="avc1.42001E"'),e.cAAC=""+ +Kv('audio/mp4; codecs="mp4a.40.2"'),
e.cVP9=""+ +Kv('video/webm; codecs="vp9"'));if(b.C){e.drmsys=b.C.keySystem;var f=0;b.C.i&&(f=Object.keys(b.C.i).length);e.drmst=""+f}return new oq(d,!0,e)})};
Zia=function(a){this.C=a;this.u=this.l=0;this.B=new SF(50)};
uM=function(a,b,c){g.N.call(this);this.videoData=a;this.experiments=b;this.I=c;this.l=[];this.B=0;this.u=!0;this.D=!1;this.G=0;c=new $ia;"ULTRALOW"===a.latencyClass&&(c.B=!1);a.Tb?c.l=3:g.fA(a)&&(c.l=2);g.P(b,"html5_adaptive_seek_to_head_killswitch")||"NORMAL"!==a.latencyClass||(c.I=!0);var d=Uz(a);c.C=2===d||-1===d;c.C&&(c.X++,21530001===Sz(a)&&(c.D=g.Q(b,"html5_jumbo_ull_nonstreaming_mffa_ms")||NaN));if(Ck("trident/")||Ck("edge/"))d=g.Q(b,"html5_platform_minimum_readahead_seconds")||3,c.u=Math.max(c.u,
d);g.Q(b,"html5_minimum_readahead_seconds")&&(c.u=g.Q(b,"html5_minimum_readahead_seconds"));g.Q(b,"html5_maximum_readahead_seconds")&&(c.N=g.Q(b,"html5_maximum_readahead_seconds"));g.P(b,"html5_force_adaptive_readahead")&&(c.B=!0);g.Q(b,"html5_allowable_liveness_drift_chunks")&&(c.i=g.Q(b,"html5_allowable_liveness_drift_chunks"));g.Q(b,"html5_readahead_ratelimit")&&(c.T=g.Q(b,"html5_readahead_ratelimit"));switch(Sz(a)){case 21530001:c.i=(c.i+1)/5,"LOW"===a.latencyClass&&(c.i*=2),c.G=g.P(b,"html5_live_smoothly_extend_max_seekable_time")}this.policy=
c;this.C=1!==this.policy.l;b=isNaN(a.liveChunkReadahead)?3:a.liveChunkReadahead;a.Tb&&b--;a.isLowLatencyLiveStream&&"NORMAL"!==a.latencyClass||b++;switch(Sz(a)){case 21530001:b=1;break;case 2153E4:b=2}this.policy.C&&b++;this.i=tM(this,b);this.K()};
wM=function(a,b){var c=a.i;(void 0===b?0:b)&&a.policy.G&&3===Uz(a.videoData)&&--c;return vM(a)*c};
yM=function(a,b){var c=xM(a),d=a.policy.i;a.D||(d=Math.max(d-1,0));a=d*vM(a);return b>=c-a};
xM=function(a){return Math.max(a.I()-wM(a,!0),a.videoData.Nb())};
zM=function(a,b,c){b=yM(a,b);c||b?b&&(a.u=!0):a.u=!1;a.C=2===a.policy.l||3===a.policy.l&&a.u};
AM=function(a,b){b=yM(a,b);a.D!==b&&a.U("livestatusshift",b);a.D=b};
vM=function(a){return a.videoData.i?Ew(a.videoData.i)||5:5};
tM=function(a,b){b=Math.max(Math.max(a.policy.X,Math.ceil(a.policy.u/vM(a))),b);return Math.min(Math.min(8,Math.floor(a.policy.N/vM(a))),b)};
$ia=function(){this.X=1;this.u=0;this.N=Infinity;this.T=0;this.B=!0;this.i=2;this.l=1;this.C=!1;this.D=NaN;this.G=this.I=!1};
DM=function(a,b,c,d,e){g.F.call(this);this.u=a;this.videoData=b;this.U=c;this.visibility=d;this.I=e;this.l=this.B=null;this.G=this.i=0;this.D={};this.playerState=new g.oF;this.C=new g.H(this.N,1E3,this);g.G(this,this.C);this.Da=new BM({delayMs:g.Q(this.u.experiments,"html5_seek_timeout_delay_ms")});this.ea=new BM({delayMs:g.Q(this.u.experiments,"html5_long_rebuffer_threshold_ms")});this.Aa=CM(this,"html5_seek_set_cmt");this.xa=CM(this,"html5_seek_jiggle_cmt");this.ma=CM(this,"html5_seek_new_elem");
this.Ha=CM(this,"html5_unreported_seek_reseek");this.X=CM(this,"html5_long_rebuffer_jiggle_cmt");this.W=CM(this,"html5_reload_element_long_rebuffer");this.T=CM(this,"html5_ads_preroll_lock_timeout");this.Ba=new BM({delayMs:g.Q(this.u.experiments,"html5_skip_slow_ad_delay_ms")||5E3,qn:!g.P(this.u.experiments,"html5_report_slow_ads_as_error")})};
CM=function(a,b){var c=g.Q(a.u.experiments,b+"_delay_ms");a=g.P(a.u.experiments,b+"_cfl");return new BM({delayMs:c,qn:a})};
EM=function(a,b,c,d,e,f,h){aja(b,c)?(a.kc(e,b,h),b.qn||f()):(b.Nq&&b.l&&!b.B?(c=(0,g.M)(),d?b.i||(b.i=c):b.i=0,f=!d&&c-b.l>b.Nq,c=b.i&&c-b.i>b.Wu||f?b.B=!0:!1):c=!1,c&&(c=a.gb(b),c.wn=h,c.we=e,c.wsuc=""+ +d,h=g.pq(c),a.U("ctmp","workaroundReport",h),d&&(b.reset(),a.D[e]=!1)))};
BM=function(a){a=void 0===a?{}:a;var b=void 0===a.Wu?1E3:a.Wu,c=void 0===a.Nq?3E4:a.Nq,d=void 0===a.qn?!1:a.qn;this.C=Math.ceil((void 0===a.delayMs?0:a.delayMs)/1E3);this.Wu=b;this.Nq=c;this.qn=d;this.i=this.l=this.u=this.startTimestamp=0;this.B=!1};
aja=function(a,b){if(!a.C||a.l)return!1;if(!b)return a.reset(),!1;b=(0,g.M)();if(!a.startTimestamp)a.startTimestamp=b,a.u=0;else if(a.u>=a.C)return a.l=b,!0;a.u+=1;return!1};
IM=function(a,b,c,d){g.N.call(this);var e=this;this.videoData=a;this.T=b;this.visibility=c;this.Ua=d;this.policy=new bja(this.T);this.I=new DM(this.T,this.videoData,(0,g.Ya)(this.U,this),this.visibility,this.Ua);a={};this.Da=(a.seekplayerrequired=this.MG,a.videoformatchange=this.fC,a);this.playbackData=null;this.Ma=new g.Rn;this.N=this.u=this.B=this.i=null;this.l=NaN;this.C=0;this.D=null;this.Aa=NaN;this.G=this.X=null;this.ea=this.W=!1;this.ma=new g.H(function(){FM(e,!1)},2E3);
this.Ya=new g.H(function(){GM(e)});
this.Pa=new g.H(function(){e.K();e.W=!0;HM(e)});
this.Ka=this.timestampOffset=0;this.Ba=!0;this.Ha=0;this.Xa=NaN;this.xa=new g.H(function(){var f=e.T.Pa;f.i+=1E4/36E5;f.i-f.u>1/6&&(Kx(f),f.u=f.i);e.xa.start()},1E4);
this.S("html5_unrewrite_timestamps")?this.Da.timestamp=this.wm:this.Da.timestamp=this.gC;g.G(this,this.Ma);g.G(this,this.ma);g.G(this,this.Pa);g.G(this,this.Ya);g.G(this,this.xa)};
cja=function(a,b){a.playbackData=b;a.videoData.isLivePlayback&&(a.N=new Zia(function(){a:{if(a.playbackData&&a.playbackData.i.i){if(Rz(a.videoData)&&a.B){var c=a.B.ma.ze()||0;break a}if(a.videoData.i){c=a.videoData.i.X;break a}}c=0}return c}),a.u=new uM(a.videoData,a.T.experiments,function(){return JM(a,!0)}));
a.videoData.startSeconds&&isFinite(a.videoData.startSeconds)&&1E9<a.videoData.startSeconds||(a.C=a.C||a.videoData.startSeconds||0)};
LM=function(a,b){g.Tn(a.Ma);(a.i=b)?(dja(a),GM(a)):KM(a);a=a.I;(a.B=b)&&g.Ih(a.C)};
NM=function(a,b){a.B&&Vn(a.B,a.Da,a);(a.B=b)?(Un(b,a.Da,a),MM(a,!0)):KM(a);a.I.l=b};
g.OM=function(a){return!!a.u&&a.u.C};
eja=function(a,b){var c=a.getCurrentTime(),d=a.isAtLiveHead(c);if(a.N&&d){var e=a.N;if(e.i&&!(c>=e.l&&c<e.u)){var f=e.i.zf(c);-1!==f&&(e.l=e.i.Pd(f),e.u=e.l+e.i.getDuration(f),f=g.ab()/1E3-e.i.Nd(f),f-=e.C(),e.B.add(f))}}a.u&&(d&&(d=a.u,e=a.i?GB(a.i):0,d.B++,3>d.B||g.ab()-d.G<d.policy.T||(d.G=g.ab(),d.l.push(e),50<d.l.length&&d.l.shift(),d.K())),d=a.u,zM(d,c,void 0===b?!0:b),AM(d,c),b&&FM(a,!0))};
FM=function(a,b){if(a.u){var c=a.u;var d=a.getCurrentTime();!yM(c,d)&&c.C?(c.K(),c.policy.I&&(c.policy.i=Math.max(c.policy.i+1,10)),c=Infinity):d<c.videoData.Nb()?(c.K(),c=Math.min(c.videoData.Nb()+10,xM(c))):c=NaN;if(!isNaN(c)){if(a.B&&b&&(b=a.ma.isActive(),d=xM(a.u),(d=bia(a.B,d-a.Kb()))&&!b)){a.ma.start();a.U("ctmp","inBufferPtl","cmt."+a.getCurrentTime()+";seekTo"+(d+a.Kb()));a.seekTo(d+a.Kb());return}a.S("html5_peg_to_live_logging")&&a.U("ctmp","ptl","cmt."+a.getCurrentTime()+";seekTo"+(c+a.Kb()));
a.seekTo(c)}}};
JM=function(a,b){if(!a.videoData.isLivePlayback)return cA(a.videoData);if(Rz(a.videoData)&&a.videoData.Vf&&a.videoData.i)return Dw(a.videoData.i)+a.timestampOffset;if(a.videoData.l&&a.videoData.l.i){if(!b&&a.u)return xM(a.u);b=cA(a.videoData);a.policy.i&&a.i&&(b=Math.max(b,HB(a.i)));return b+a.timestampOffset}a.i?Gk()?(a=a.i.jp().getTime(),a=isNaN(a)?0:Math.max((Date.now()-a)/1E3-30,0)):a=DB(a.i)+a.timestampOffset||a.timestampOffset:a=a.timestampOffset;return a};
MM=function(a,b){if(a.u&&a.B){var c=!1;if(b)c=!0;else if(a.videoData.isLowLatencyLiveStream||"LOW"===a.videoData.latencyClass||"ULTRALOW"===a.videoData.latencyClass)if(b=a.u,b.l.length){c=b.i;b:{if(b.l.length){if(1<Math.min.apply(null,b.l)){b.K();var d=tM(b,b.i-1);break b}if(b.policy.B){b.K();d=tM(b,b.i+1);break b}}d=b.i}b.i=d;if(c=c!==b.i)b.K(),b.l=[],b.B=0}else c=!1;c&&a.U("livereadaheadchanged",wM(a.u));b=a.B;c=a.u.i;d=a.u;d=(d.i-1+d.policy.i)*vM(d);a=a.u.policy.D;b.bd=Math.max(c-1,0);b.C&&(b.C.X=
d);b.Ua=a}};
PM=function(a){return a.videoData.isLivePlayback&&!!a.videoData.l&&!a.videoData.l.i};
HM=function(a){fja(a).then(void 0,function(){KM(a)});
QM(a).then(function(c){RM(a,c)},function(){KM(a)});
a.U("seekstart");a.B&&Xha(a.B);if(g.Mz(a.videoData)){var b=a.gb();b["native"]=""+ +a.ea;b.tgt=""+a.l;a.U("ctmp","seekStart",g.pq(b))}};
fja=function(a){if(!a.X)if(a.B)if(isFinite(a.l))a.K(),a.X=a.B.seek(a.l-a.timestampOffset);else{a.K();var b=a.B;NJ(b);b.B.i&&b.K();b.C&&yJ(b.C,b.videoTrack.i);g.Ih(b.N);b=b.B;var c=Math.max(b.videoTrack.B.C||0,b.audioTrack.B.C||0);VI(b.videoTrack);VI(b.audioTrack);var d=b.u,e;for(e in d.i)at(d.i[e].index,Infinity);b.u.isManifestless&&(b.B=!0);b.U("setcurrenttime",c);b.i=!0;b.C=new yE;a.X=b.C;a.l=a.B.getCurrentTime()+a.timestampOffset}else a.X=sh(a.l-a.timestampOffset);return a.X};
QM=function(a){var b=a.D;b||(a.D=new yE,b=a.D,GM(a));return b};
SM=function(a,b,c){return isNaN(b)?NaN:g.bf(b,a.Nb(),JM(a,c))};
GM=function(a){if(a.D)if(!a.S("html5_nondash_live_seek_killswitch")&&PM(a)&&a.i&&0<a.i.df()&&0<DB(a.i)&&(a.l=SM(a,a.l,!1)),!a.i||!TM(a))a.Ya.start(750);else if(!isNaN(a.l)&&isFinite(a.l)&&a.Aa!==a.l-a.timestampOffset){var b=a.i.getCurrentTime()-a.l;if(Math.abs(b)<=a.Ha)UM(a);else if(!a.videoData.isLivePlayback&&a.l>=JM(a)-.1)a.l=JM(a),a.D.resolve(JM(a)),a.U("ended");else try{var c=a.l-a.timestampOffset;a.K();a.i.seekTo(c);a.I.i=c;a.Aa=c;a.C=a.l}catch(d){a.K()}}};
TM=function(a){if(!a.i||0===a.i.df()||0<a.i.Kf())return!1;var b=0<a.i.getCurrentTime();if(!(a.S("html5_nondash_mediaelementready_killswitch")||a.videoData.l&&a.videoData.l.i||a.videoData.isLivePlayback)&&Kz(a.videoData))return b;if(0<=a.l){var c=a.i.Nn();if(c.length||!b)return Sv(c,a.l-a.timestampOffset)}return b};
UM=function(a){a.D?a.D.resolve(a.i.getCurrentTime()):a.K()};
RM=function(a,b){a.K();a.G&&(a.G.resolve(b),a.U("seekend"),g.Mz(a.videoData)&&(b=a.gb(),b["native"]=""+ +a.ea,a.U("ctmp","seekEnd",g.pq(b))));VM(a)};
VM=function(a){a.l=NaN;a.Aa=NaN;a.D=null;a.X=null;a.G=null;a.W=!1;a.ea=!1;a.Ha=0;a.ma.stop();a.Pa.stop()};
KM=function(a){a.G&&a.K();VM(a)};
dja=function(a){if(a.i){for(var b=g.u(["loadedmetadata","progress","seeked","seeking"]),c=b.next();!c.done;c=b.next())a.Ma.Y(a.i,c.value,function(d){var e=a.i;d=d.type;a.K();switch(d){case "seeking":d=e.getCurrentTime()+a.timestampOffset;if(!a.D||a.ea&&d!==a.l)a.D=new yE,a.Aa=d,e=e.getCurrentTime(),a.I.i=e,a.seekTo(d),a.ea=!0;break;case "seeked":UM(a);break;case "loadedmetadata":a.Ba?(e="ss.",d=0,(gA(a.videoData)||a.videoData.liveUtcStartSeconds)&&(a.videoData.liveUtcStartSeconds||a.videoData.startSeconds&&
isFinite(a.videoData.startSeconds)&&1E9<a.videoData.startSeconds)&&a.videoData.i?(d=a.videoData.liveUtcStartSeconds||a.videoData.Bb,e="utc.",d=JM(a)-a.Nd(JM(a))+d):a.videoData.i&&a.videoData.i.isManifestless&&a.videoData.Bb?(e="mss.",d=a.videoData.Bb+a.Kb()):a.S("html5_unrewrite_timestamps")&&a.videoData.xj&&(e="stss.",d=a.videoData.xj),d?(a.seekTo(d),a.U("ctmp","startSeconds",e+String(d)),a.Ba=!1):a.videoData.Bb&&a.U("ctmp","startSeconds",""+e+(a.videoData.Bb+a.Kb())),e=!!d):e=!1;a.S("html5_nondash_live_seek_killswitch")&&
!e&&PM(a)&&(a.l=isFinite(a.l)?g.bf(a.l,a.Nb(),JM(a)):JM(a));GM(a);break;case "progress":GM(a)}});
a.G||a.C||a.policy.l||!a.i.Yu()||a.seekTo(.01)}};
gja=function(a,b){a.l=b;a.C=b;QM(a).then(function(c){RM(a,c)},function(){KM(a)})};
bja=function(a){this.i=g.P(a.experiments,"html5_live_smoothly_extend_max_seekable_time");this.u=a.S("html5_seek_over_discontinuities");this.l=a.S("html5_requires_seek_for_playback_at_zero_killswitch")};
WM=function(){this.i=this.started=!1};
XM=function(){this.i=this.l=void 0};
YM=function(){Vl.apply(this,arguments);this.i={}};
g.$M=function(){ZM||(ZM=new YM);return ZM};
g.aN=function(a,b){b?a.i.Authorization="Bearer "+b:delete a.i.Authorization};
bN=function(a){this.i=a;this.iv=QC(Yn())};
hja=function(a,b){return D(a,function d(){var e=this;return A(d,function(f){return f.return(Hga(e.i.l,b,e.iv))})})};
ija=function(a){this.iv=LC(new GC(a),5)};
jja=function(a){a=LC(new GC(a),4);this.i=new ija(new Tu([a]))};
lja=function(a){a=new GC(a);this.i=JC(a,1);this.itag=JC(a,3);this.lastModifiedTime=JC(a,4);this.xtags=KC(a,5);JC(a,6);JC(a,8);JC(a,9,-1);JC(a,10);this.formatId=this.itag+";"+this.lastModifiedTime+";"+this.xtags;this.isAudio="audio"===kja[zv[""+this.itag]]};
mja=function(a){this.body=null;a=new GC(a);this.onesieProxyStatus=JC(a,1,-1);this.body=LC(a,4)};
nja=function(a){a=new GC(a);this.startTimeMs=JC(a,1);this.endTimeMs=JC(a,2)};
oja=function(a){var b=new GC(a);a=KC(b,3);var c=JC(b,5);this.i=JC(b,7);var d=LC(b,14);this.l=new nja(new Tu([d]));b=KC(b,15);this.formatId=a+";"+c+";"+b};
cN=function(a){this.u=a;this.l=!1;this.i=[]};
dN=function(a){for(;a.i.length&&!a.i[0].isEncrypted;){var b=a.i.shift();a.u(b.streamId,b.buffer,!1)}};
pja=function(a){var b,c;return D(this,function e(){var f=this,h,l,m,n;return A(e,function(p){switch(p.i){case 1:h=f;if(eN||null===(c=null===(b=window.crypto)||void 0===b?void 0:b.subtle)||void 0===c||!c.importKey)return p.return(sE(a));l=window.crypto.subtle;va(p,2);return x(p,pE(a),4);case 4:m=p.l;wa(p,3);break;case 2:return xa(p),p.return(sE(a));case 3:return p.return(function(q,r){return D(h,function v(){var y,C,z;return A(v,function(E){if(1==E.i){if(n)return E.return(n(q,r));y={name:"AES-CTR",
counter:r,length:128};va(E,2);C=qE.Oo("oan2");return x(E,l.encrypt(y,m,q),4)}if(2!=E.i)return z=E.l,qE.En(C,Math.ceil(q.byteLength/16)),E.return(new Uint8Array(z));xa(E);n=sE(a);return E.return(n(q,r))})})})}})})};
fN=function(a,b,c){g.N.call(this);var d=this;this.I=a;this.G=b;this.Ja=c;this.u={};this.i={};this.iv=null;this.C=this.B=this.D=!1;this.l=null;this.queue=new cN(function(e,f,h){d.U("STREAM_DATA",{formatId:e,data:f,isDecrypted:h});f=d.i[e];f.numSlicesProcessing--;0===f.numSlicesProcessing&&(f.hasEnded?d.U("STREAM_ENDED",{formatId:e}):d.D&&(d.Ja("ombpf","reason."+(d.B&&!d.C?"no_decryption_key":"no_media_end"),!0),d.U("STREAM_FAILED",{formatId:e})))})};
gN=function(a,b,c){a.Ja("ombup","id.21;enc."+ +c+";len."+b.totalLength,!1,!0);if(1!==b.totalLength){c&&(a.B=!0);var d=bv(b,0);b=$u(b,1);d=a.u[d]||null;a.K();d&&(a.i[d].numSlicesProcessing+=1,a=a.queue,a.i.push({streamId:d,buffer:b,isEncrypted:c}),a.l||dN(a))}};
qja=function(a,b){D(a,function d(){var e=this,f,h,l,m,n,p,q,r;return A(d,function(t){switch(t.i){case 1:return e.U("PLAYER_RESPONSE_RECEIVED"),f=$u(b),va(t,2),x(t,e.I(f,e.iv),4);case 4:h=t.l;wa(t,3);break;case 2:return l=xa(t),e.K(),e.U("PLAYER_RESPONSE_FAILED",{errorInfo:l}),t.return();case 3:m=new mja(new Tu([h]));if(1!==m.onesieProxyStatus)return n={st:m.onesieProxyStatus},p=new oq("onesie.response.badproxystatus",!1,n),e.U("PLAYER_RESPONSE_FAILED",{errorInfo:p}),t.return();q=m.body;r=g.B.TextDecoder?
(new TextDecoder).decode(q):g.je(q);e.K();e.K();e.U("PLAYER_RESPONSE_READY",r);t.i=0}})})};
hN=function(a){var b=a.value;this.name=a.name;this.value=b};
iN=function(a){var b=a.httpHeaders,c=a.postBody;this.url=a.url;this.httpHeaders=b;this.postBody=c};
rja=function(a,b,c){var d=b.Vb;d="https://youtubei.googleapis.com/youtubei/"+d.innertubeApiVersion+"/player?key="+d.innertubeApiKey;var e=[new hN({name:"Content-Type",value:"application/json"})],f=g.jA(c);f&&e.push(new hN({name:"Authorization",value:"Bearer "+f}));e.push(new hN({name:"User-Agent",value:g.md}));(c=c.visitorData||g.I("VISITOR_DATA",void 0))&&e.push(new hN({name:"X-Goog-Visitor-Id",value:c}));(b=g.bx(b.experiments,"debug_sherlog_username"))&&e.push(new hN({name:"X-Youtube-Sherlog-Username",
value:b}));a=JSON.stringify(a);return new iN({url:d,httpHeaders:e,postBody:a})};
jN=function(a){var b=a.Ss,c=a.encryptedClientKey,d=a.iv;a=a.hmac;this.serializeResponseAsJson=!0;this.Ss=b;this.encryptedClientKey=c;this.iv=d;this.hmac=a};
sja=function(a,b){return D(this,function d(){var e,f,h,l,m,n;return A(d,function(p){switch(p.i){case 1:return va(p,2),x(p,b.encrypt(a.Dk()),4);case 4:e=p.l;wa(p,3);break;case 2:return xa(p),f=new oq("onesie.request.encrypt",!1),p.return(Promise.reject(f));case 3:return h=b.i.encryptedClientKey,l=b.iv,x(p,hja(b,e),5);case 5:return m=p.l,n={Ss:e,encryptedClientKey:h,iv:l,hmac:m},p.return(new jN(n))}})})};
kN=function(a){var b=a.onesieUstreamerConfig;this.Ts=a.Ts;this.onesieUstreamerConfig=b};
tja=function(a,b,c){return D(this,function e(){var f,h;return A(e,function(l){if(1==l.i)return x(l,sja(a,b),2);f=l.l;h={Ts:f,onesieUstreamerConfig:c};return l.return(new kN(h))})})};
lN=function(a,b){if(b+1<=a.totalLength){var c=bv(a,b);c=128>c?1:192>c?2:224>c?3:240>c?4:5}else c=0;if(1>c||!(b+c<=a.totalLength))return[-1,b];if(1===c)a=bv(a,b++);else if(2===c)c=bv(a,b++),a=bv(a,b++),a=(c&63)+64*a;else if(3===c){c=bv(a,b++);var d=bv(a,b++);a=bv(a,b++);a=(c&31)+32*(d+256*a)}else if(4===c){c=bv(a,b++);d=bv(a,b++);var e=bv(a,b++);a=bv(a,b++);a=(c&15)+16*(d+256*(e+256*a))}else c=b+1,a.focus(c),Xu(a,c,4)?a=Yu(a).getUint32(c-a.u,!0):(d=bv(a,c+2)+256*bv(a,c+3),a=bv(a,c)+256*(bv(a,c+1)+
256*d)),b+=5;return[a,b]};
mN=function(a){this.l=a;this.i=new Tu};
nN=function(a){var b=g.u(lN(a.i,0));var c=b.next().value;var d=b.next().value;d=g.u(lN(a.i,d));b=d.next().value;d=d.next().value;!(0>c||0>b)&&d+b<=a.i.totalLength&&(d=a.i.split(d).Bk.split(b),b=d.Vp,d=d.Bk,a.l(c,b),a.i=d,nN(a))};
oN=function(a){return[a].concat(g.oa(uja[a]||[]))};
wja=function(a){return D(this,function c(){var d,e,f,h,l,m,n,p,q,r;return A(c,function(t){d=tw(vja,null,0,!1,!1,void 0);e=a.V();f=e.i;h=function(){return!0};
l=Lz(a);m=rs(l,f,d,h);n=function(v){return m[v]||[]};
p=xs(l).map(n).flat();q=Bs(l).map(n).flat();r=function(v){return v.id};
return t.return({video:q.map(r),audio:p.map(r)})})})};
yja=function(a,b){var c,d;a:{var e,f=a.V().Wb;if(f){var h=null===(d=xja())||void 0===d?void 0:d.primary;if(h&&f.baseUrl){d=new Ps("https://"+h+f.baseUrl);if(f=null===(e=a.rj)||void 0===e?void 0:e.urlQueryOverride)for(e=Xs(f),e=g.u(Object.entries(e)),f=e.next();!f.done;f=e.next())h=g.u(f.value),f=h.next().value,h=h.next().value,d.set(f,h);if(!d.get("id")){f=vx(a.videoId);e=[];if(f)for(f=g.u(f),h=f.next();!h.done;h=f.next())e.push(h.value.toString(16).padStart(2,"0"));e=e.join("");if(!e){d=void 0;break a}d.set("id",
e)}break a}}d=void 0}!d&&(null===(c=a.rj)||void 0===c?0:c.url)&&(d=new Ps(a.rj.url));if(!d)return"";d.set("ack","1");d.set("cpn",a.clientPlaybackNonce);d.set("opr","1");d.set("pvi","135");d.set("pai","140");d.set("oaad","0");d.set("oavd","0");b?(a=b.audio,d.set("pvi",b.video.join(",")),d.set("pai",a.join(","))):(d.set("oad","0"),d.set("ovd","0"));return Qs(d)};
pN=function(a,b,c){var d=this;this.videoData=a;this.i=b;this.playerRequest=c;this.xhr=null;this.B=new yE;this.G=!1;this.C=new g.H(this.X,1E4,this);this.I=!1;this.u=a.V();this.D=this.u.Wb;this.T=new bN(this.D.i);var e=g.Mz(this.videoData);this.Ja=function(f,h,l,m){m&&!e||d.videoData.Ja(f,h,l)};
this.W=new mN(function(f,h){d.N.feed(f,h)});
g.P(this.u.experiments,"html5_onesie_media_bytes")&&(this.l=new HI);this.N=zja(this)};
zja=function(a){var b=new fN(function(c,d){return a.T.decrypt(c,d)},a.i,a.Ja);
b.subscribe("FIRST_BYTE_RECEIVED",function(){a.i.tick("orfb");a.G=!0});
b.subscribe("PLAYER_RESPONSE_READY",function(c){a.i.tick("oprr");a.B.resolve(c);a.C.stop()});
b.subscribe("PLAYER_RESPONSE_RECEIVED",function(){a.i.tick("orpr")});
b.subscribe("PLAYER_RESPONSE_FAILED",function(c){qN(a,c.errorInfo)});
a.l&&(b.subscribe("STREAM_STARTED",function(c){var d=a.l;c=c.formatId;var e=Dha(d,c);d.i[c]={slices:new Tu,isComplete:!1,bytesShifted:0,bytesReceived:0,hasDecryptedBytes:!1,failureTimeout:e,isFailed:!1};d.K();e.start()}),b.subscribe("STREAM_METADATA",function(c){var d=a.l;
d.i[c.formatId].expectedBytes=c.numBytes;d.K()}),b.subscribe("STREAM_DATA",function(c){var d=a.l,e=c.formatId,f=c.data;
c=c.isDecrypted;c=void 0===c?!1:c;var h=d.i[e];h.failureTimeout.start();!h.hasDecryptedBytes&&c&&(h.hasDecryptedBytes=!0);h.slices.append(f);h.bytesReceived+=f.length;d.U("PROGRESS",{formatId:e});d.K()}),b.subscribe("STREAM_ENDED",function(c){var d=a.l;
c=c.formatId;var e=d.i[c];e.expectedBytes?(e.failureTimeout.stop(),e.isComplete=!0,d.U("DONE",{formatId:c}),d.K()):d.i[c].failureTimeout.Tj()}),b.subscribe("STREAM_FAILED",function(c){a.l.i[c.formatId].failureTimeout.Tj()}));
return b};
Cja=function(a){return D(a,function c(){var d=this,e,f,h,l;return A(c,function(m){if(1==m.i){if(!d.l)return m.return();e=Fx(d.u.schedule);return x(m,Aja(d.videoData),2)}f=m.l;h=f.video;l=f.audio;h=Bja(h,e);return h.length?m.return({video:h,audio:l}):(d.Ja("ombspf","limit."+e),m.return())})})};
qN=function(a,b){a.B.reject(b);a.C.stop();a.i.tick("ore");a.xhr&&a.xhr.abort()};
rN=function(a){var b=a.xhr;102400<b.Uj()&&!a.I&&(a.i.tick("or100k"),a.I=!0);for(;b.Qe();){var c=b.Ff(),d=c.totalLength;a.K();a.Ja("ombrss","len."+d,!1,!0);a.W.feed(c)}};
Aja=function(a){return D(this,function c(){var d;return A(c,function(e){if(1==e.i)return x(e,wja(a),2);d=e.l;return e.return({video:d.video.map(oN).flat(),audio:d.audio.map(oN).flat()})})})};
Bja=function(a,b){b=.9*b-16E3;var c=[];a=g.u(a);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e=Dja[d];!e||e>b||c.push({itag:d,zx:e})}return c.sort(function(f,h){return h.zx-f.zx}).map(function(f){return f.itag})};
Jja=function(a,b,c,d,e,f){function h(m){return Eja(l,a)?Fja(a,e,f,c).then(function(){sN(a)},function(n){sN(a,!0);
throw n;}):Gja(a,b,c,m)}
a.ya();a.I=!0;var l=a.V();return g.P(l.experiments,"html5_onesie")&&g.P(l.experiments,"html5_onesie_player_config")&&"yt"===l.C?Hja(a).then(function(){return Ija(a,d,e,f)}).then(function(){sN(a)},function(m){m=qq(m);
if(m.i)return sN(a,!0),Promise.reject(m);c(m);return h("onesie")}):h("gvi")};
Eja=function(a,b){return!((a.Oc?0:a.S("web_player_gvi_wexit")||("MWEB"===a.deviceParams.c?a.S("web_player_gvi_wexit_mweb"):g.my(a)?"TVHTML5"===a.deviceParams.c?wy(a)?a.S("web_player_gvi_wexit_living_room_pangea"):a.S("web_player_gvi_wexit_living_room_bedrock"):"TVHTML5_KIDS"===a.deviceParams.c?a.S("web_player_gvi_wexit_living_room_kids"):"TVHTML5_SIMPLY"===a.deviceParams.c||Ux(a)?a.S("web_player_gvi_wexit_living_room_simply"):g.Ay(a)||g.zy(a)?a.S("web_player_gvi_wexit_living_room_unplugged"):a.S("web_player_gvi_wexit_living_room_other"):
g.Cr(a)?a.S("web_player_gvi_wexit_web"):g.Cy(a)?a.S("web_player_gvi_wexit_embeds"):a.S("web_player_gvi_wexit_other")))||g.P(a.experiments,"hoffle_api")&&Ar(b))||"yt"!==a.C||"adunit"===xr(b)&&!g.P(a.experiments,"web_player_gvi_wexit_adunit")?!1:!0};
Hja=function(a){a=a.V().Wb;if(!a||!a.i)return Promise.reject(new oq("onesie.unavailable.hotconfig",!1,{key:"0"}));a={};ls()||(a.fetch="0");window.Uint8Array||(a.uint8="0");return 0<Object.keys(a).length?(a.onesie="0",Promise.reject(new oq("html5.missingapi",!1,a))):Promise.resolve()};
tN=function(a){var b=g.$M();(a=g.jA(a))&&g.aN(b,a);XM.i||(XM.i=new XM);return g.sp(b,XM.i)};
Ija=function(a,b,c,d){return D(this,function f(){var h,l,m,n,p,q;return A(f,function(r){if(1==r.i)return a.fetchType="onesie",h=Er(a,c,d),l=new pN(a,b,h),x(r,l.fetch(),2);m=r.l;n={player_response:m};a.I=!1;a.Nl=l.l;xz(a,n,!0);if(a.I||sz(a))return r.return(Promise.resolve());a.Nl=void 0;p={};a.errorCode?(p.ec=a.errorCode,p.ed=a.errorDetail,p.es=a.Bi||""):p.successButUnplayable="1";q=new oq("onesie.response",!1,p);return r.return(Promise.reject(q))})})};
Fja=function(a,b,c,d){return D(this,function f(){var h,l,m,n,p,q,r;return A(f,function(t){switch(t.i){case 1:l=(h=a.isAd())?1:3,m=0;case 2:if(!(m<l)){t.fb(4);break}if(!(0<m)){t.fb(5);break}return x(t,g.Hh(5E3),6);case 6:n=new g.hm("Retrying OnePlatform request",{attempt:m}),g.to(n);case 5:return va(t,7),x(t,Kja(a,b,c),9);case 9:return t.return();case 7:p=xa(t);q=qq(p);if("auth"===q.errorCode||"manifest.net.retryexhausted"===q.errorCode)return t.return(Promise.reject(q));d(q);if(q.i){t.fb(4);break}case 3:m++;
t.fb(2);break;case 4:return r=h?"auth":"manifest.net.retryexhausted",t.return(Promise.reject(new oq(r,!0,{backend:"op"})))}})})};
Kja=function(a,b,c){return D(this,function e(){var f,h,l,m,n,p,q,r,t,v,y,C,z,E,O;return A(e,function(L){if(1==L.i)return a.fetchType="gp",f=tN(a),h=Er(a,b,c),l=dp(Lja),m=(0,g.M)(),n=!1,p="empty",q=0,x(L,g.ip(f,h,l),2);r=L.l;if(a.ya())return L.return();r?r.error?(n=!0,p="esf:"+r.error.message,q=r.error.code):r.errorMetadata&&(n=!0,p="its",q=r.errorMetadata.status):n=!0;if(n)return t=a.V(),v=400===q||429===q,y=((0,g.M)()-m).toFixed(),C={backend:"op",rc:""+q,rt:y,reason:p,has_omit_key_flag:g.I("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")?
"1":"0",has_page_id:t.pageId?"1":"0",has_token:g.jA(a)?"1":"0"},z="manifest.net.connect",429===q?z="auth":200<q&&(z="manifest.net.badstatus"),L.return(Promise.reject(new oq(z,v,C)));a.I=!1;xz(a,{raw_player_response:r},!0);if(a.errorCode)return E={ec:a.errorCode,ed:a.errorDetail,es:a.Bi||""},L.return(Promise.reject(new oq("auth",!0,E)));if(!a.I&&!sz(a))return O=a.isAd()?"auth":"manifest.net.retryexhausted",L.return(Promise.reject(new oq(O,!0,{successButUnplayable:"1",hasMedia:dA(a)?"1":"0"})));L.i=
0})})};
Gja=function(a,b,c,d){return D(this,function f(){var h,l,m,n,p,q,r,t,v;return A(f,function(y){switch(y.i){case 1:h=function(){return!0},l=function(C){C=qq(C);
if(C.i)return Promise.reject(C);c(C);return!1},n=(m=a.isAd())?1:3,p=0;
case 2:if(!(p<n)){y.fb(4);break}q=b;if(!(0<p)){y.fb(5);break}return x(y,g.Hh(5E3),6);case 6:r={playerretry:p,playerretrysrc:d},m||(r.recover="embedded"),q=g.oj(b,r);case 5:return x(y,Mja(a,q).then(h,l),7);case 7:if(t=y.l)return y.return();p++;y.fb(2);break;case 4:v=m?"auth":"manifest.net.retryexhausted";if(!m&&1E-4>Math.random())try{g.to(new g.hm("b/152131571",btoa(b)))}catch(C){}return y.return(Promise.reject(new oq(v,!0,{backend:"gvi"})))}})})};
Mja=function(a,b){return D(this,function d(){var e,f,h,l,m,n,p,q,r,t,v,y,C;return A(d,function(z){if(1==z.i)return a.fetchType="gvi",e=a.V(),(l=Ofa(a))?(f={format:"RAW",method:"POST",withCredentials:!0,timeout:3E4,postParams:l},h=g.oj(b,{action_display_post:1})):(f={format:"RAW",method:"GET",withCredentials:!0,timeout:3E4},h=b),m={},e.sendVisitorIdHeader&&a.visitorData&&(m["X-Goog-Visitor-Id"]=a.visitorData),(n=g.bx(e.experiments,"debug_sherlog_username"))&&(m["X-Youtube-Sherlog-Username"]=n),0<Object.keys(m).length&&
(f.headers=m),p=(0,g.M)(),q=function(E){if(!a.ya()){E=E?E.status:-1;var O=400===E||429===E,L=((0,g.M)()-p).toFixed();L={backend:"gvi",rc:""+E,rt:L};var ca="manifest.net.connect";429===E?ca="auth":200<E&&(ca="manifest.net.badstatus");return Promise.reject(new oq(ca,O,L))}},r=function(E){return q(E.xhr)},x(z,jw(g.Jj,h,f).then(void 0,r),2);
t=z.l;if(!t||!t.responseText)return z.return(q(t));a.I=!1;v=g.jj(t.responseText);xz(a,v,!0,void 0);if(a.errorCode)return y={ec:a.errorCode,ed:a.errorDetail,es:a.Bi||""},z.return(Promise.reject(new oq("auth",!0,y)));if(!a.I&&!sz(a))return C=a.isAd()?"auth":"manifest.net.retryexhausted",z.return(Promise.reject(new oq(C,!0,{successButUnplayable:"1"})));z.i=0})})};
sN=function(a,b){b=void 0===b?!1:b;D(this,function d(){var e,f,h,l,m;return A(d,function(n){if(1==n.i){e=a.V();if(b&&(!g.Cy(e)||"embedded"!==xr(a))||a.bh||"adunit"!==xr(a)&&(g.my(e)||g.oy(e)||g.dy(e)||g.ny(e)||"WEB_CREATOR"===e.deviceParams.c))return n.return();va(n,2);f=tN(a);h=Fr(a);l=dp(Nja);return x(n,g.ip(f,h,l),4)}if(2!=n.i)return(m=n.l)&&!m.error&&xz(a,{raw_watch_next_response:m},!1),wa(n,0);xa(n);n.i=0})})};
Oja=function(a,b,c,d,e,f){function h(){d.tick("virc");eq("virc","video_to_ad")}
d.tick("vir");eq("vir","video_to_ad");a=Jja(a,b,c,d,e,f);a.then(h,h);return a};
g.zN=function(a,b,c,d,e,f,h){g.N.call(this);var l=this;this.u=a;this.playerType=b;this.N=c;this.Gb=d;this.getVisibilityState=f;this.visibility=h;this.bb=new Wia(this.u);this.G=null;this.Ma=new JK;this.xa=null;this.X=new gL(this.u,this.Gb,this);this.Nc=!0;this.mediaSource=this.l=null;this.W=[];this.ea=new WM;this.I=this.Pa=null;this.ma=new WM;this.ub=null;this.Xd=this.Ba=!1;this.Tb=NaN;this.zc=new g.H(this.hG,500,this);this.playerState=new g.oF;this.Wb=[];this.Ua=new g.Rn;this.videoData=new g.rz(this.u);
this.i=null;this.Ha=new g.H(this.nF,15E3,this);this.Kd=new g.H(this.aG,g.Q(this.u.experiments,"html5_source_buffer_attach_delay_time")||15E3,this);this.Oe=0;this.Jd=this.qb=!1;this.Aa=NaN;this.Ka=!1;this.Ya=0;this.Hc=new g.H(this.fv,4500,this);this.aq=!1;this.Sb=NaN;this.qc=new pG(new Map([["bufferhealth",function(){var m=l.B;return m.i?GB(m.i):0}],
["bandwidth",function(){return l.l?rH(l.l.D):Fx(l.u.schedule)}],
["networkactivity",function(){return l.u.schedule.I}],
["livelatency",function(){return l.isAtLiveHead()&&l.Zb()?uN(l):NaN}],
["rawlivelatency",function(){return uN(l)}]]));
this.Mc=!0;this.Vd=0;this.loop=!1;this.playbackRate=1;this.Ie=0;this.Da=null;this.Wd=!1;this.Vb=[];this.Oc=this.Ke=0;this.ld=this.Re=!1;this.Gc=new g.H(this.LD,0,this);this.Xa=null;this.Xb=void 0;this.qe=0;this.Je=new g.H(this.mD,0,this);this.pc=new g.H(this.OA,3E4,this);this.nf=[this.zc,this.Ua,this.Gc,this.Ha,this.pc,this.zc,this.Hc,this.qc,this.Je,this.Kd];this.Bb=function(){var m=l.C;m.provider.i.Ma||3===m.provider.l.getVisibilityState()||(m.provider.i.Ma=!0);lM(m);if(m.l){var n=m.l;n.C&&0>n.i&&
3!==n.provider.l.getVisibilityState()&&sL(n)}m.qoe&&(m=m.qoe,m.ma&&0>m.u&&m.provider.i.Ma&&IL(m));g.Q(l.u.experiments,"html5_background_quality_cap")&&l.l&&vN(l);l.u.fg&&!l.videoData.backgroundable&&l.i&&!l.ge()&&(l.isBackground()&&l.i.ip()?(l.Ja("bgmobile","suspend"),l.dj(!0)):l.isBackground()||wN(l)&&l.Ja("bgmobile","resume"))};
this.K();this.T=new qM(function(){return l.getCurrentTime()},function(){return l.getPlaybackRate()},function(){return l.getPlayerState()},function(m,n){m!==g.$A("endcr")||g.S(l.playerState,32)||QE(l);
e(m,n,l.playerType)});
g.G(this,this.T);xN(this,function(){return{}});
yN(this);TE(this.Bb);this.visibility.subscribe("visibilitystatechange",this.Bb);Pja(this);!this.S("html5_log_coat_killswitch")&&this.S("html5_high_res_logging")&&(a=Via())&&this.Ja("cblt",a)};
uA=function(a,b,c,d){d=void 0===d?!0:d;a.K();a.W.length=0;a.Pa=null;a.ea.reset();a.ma.reset();a.qb=!1;a.Vd=0;a.Nc=!0;a.ub=null;a.i&&a.i.stopVideo();AN(a);BN(a);CN(a);lk(a.Aa);a.qc.clear();g.tg(a.videoData);g.tg(a.D);if(2===a.playerType||a.u.hg)b.Tw=!0;var e=Vy(b.zc,b.Aj,a.u.B,a.u.l);e&&(b.adFormat=e);2===a.playerType&&(b.Yf=!0);if(a.isFullscreen()||a.u.B)e=Qja(),b.autonavState=e||(a.u.B?2:a.videoData.autonavState);a.Mc=d;a.videoData=b;a.videoData.subscribe("dataupdated",a.nG,a);a.videoData.subscribe("dataloaded",
a.Es,a);a.videoData.subscribe("dataloaderror",a.handleError,a);a.videoData.subscribe("ctmp",a.Ja,a);DN(a,b);xN(a,c);yN(a);a.Ka=!1;a.Ya=0;EN(a,"newdata");a.Eb(new g.oF);c=a.B;d=a.videoData;KM(c);c.videoData=d;c.u=null;c.N=null;c.timestampOffset=0;c.Ka=0;c.C=0;c.Ba=!0;c.I.dispose();c.I=new DM(c.T,c.videoData,(0,g.Ya)(c.U,c),c.visibility,c.Ua);d=c.I;e=c.i;(d.B=e)&&g.Ih(d.C);c.I.l=c.B;eA(b)&&(b=a.videoData.errorDetail,c=a.videoData.Nk,a.me("auth",unescape(c.reason),b,b,c.subreason||void 0));1===a.playerType&&
FN.isActive()&&a.pc.start()};
xN=function(a,b){!a.C||a.C.ya();a.C=new g.kM(new hM(a.videoData,a.u,a,b))};
yN=function(a){!a.D||a.D.ya();a.D=new VK(a.videoData,a.u,a.visibility);a.D.subscribe("newelementrequired",function(b){return GN(a,b)});
a.D.subscribe("qoeerror",a.Fr,a);a.D.subscribe("playbackstalledatstart",function(){return a.U("playbackstalledatstart")});
a.D.subscribe("signatureexpiredreloadrequired",function(){return a.U("signatureexpired")});
a.D.subscribe("releaseloader",function(){CN(a)});
a.D.subscribe("pausevideo",function(){a.pauseVideo()});
a.D.subscribe("clienttemp",a.Ja,a);a.D.subscribe("highrepfallback",a.gF,a);a.D.subscribe("playererror",a.me,a);a.D.subscribe("removedrmplaybackmanager",function(){AN(a)});
a.D.subscribe("formatupdaterequested",function(){HN(a)});
a.D.subscribe("reattachvideosourcerequired",function(){IN(a)})};
BN=function(a){var b=a.C;b.l&&b.l.send();if(b.qoe){var c=b.qoe;if(c.N){"PL"===c.l&&(c.l="N");var d=PE(c.provider);xL(c,d,"vps",[c.l]);c.C||(0<=c.u&&(c.i.user_intent=[c.u.toString()]),c.C=!0);c.W=!0;c.reportStats(d)}}if(b.provider.videoData.enableServerStitchedDai)for(c=g.u(b.u.values()),d=c.next();!d.done;d=c.next())dM(d.value);else b.i&&dM(b.i);b.dispose();g.tg(a.C)};
g.JN=function(a){return a.i&&a.i.Uk()?a.i.wd():null};
KN=function(a){if(a.videoData.isValid())return!0;a.me("api.invalidparam",void 0,"invalidVideodata.1");return!1};
wA=function(a,b){b=void 0===b?!1:b;if(a.Xb&&a.S("html5_match_codecs_for_gapless")){a.videoData.Da=!0;a.videoData.Gb=!0;var c;var d=null===(c=a.Xb.l)||void 0===c?void 0:c.audioTrack.i.info.i;a.videoData.fm=d;var e;d=null===(e=a.Xb.l)||void 0===e?void 0:e.videoTrack.i.info.i;a.videoData.lm=d}a.Ba=b;!KN(a)||a.ea.started?g.my(a.u)&&a.videoData.isLivePlayback&&a.ea.started&&!a.ea.isFinished()&&!a.Ba&&a.Es():(a.ea.start(),b=a.C,PE(b.provider),b.qoe&&Jia(b.qoe),a.Es())};
Rja=function(a){var b=a.videoData,c=a.Gb.getPlayerSize(),d=a.getVisibilityState(),e=Nfa(a.u,a.videoData,c,d,a.isFullscreen());Oja(a.videoData,e,function(f){a.handleError(f)},a.N,c,d).then(void 0,function(f){a.videoData!==b||b.ya()||(f=qq(f),"auth"===f.errorCode&&a.videoData.errorDetail?a.me("auth",unescape(a.videoData.errorReason),g.pq(f.details),a.videoData.errorDetail,a.videoData.Bi||void 0):a.handleError(f))})};
Rga=function(a,b){a.Xa=b;a.l&&(a=a.l,b=new eK(b),a.X=b,a.u&&(a.u.T=b))};
Tja=function(a){if(!g.S(a.playerState,128))if(a.videoData.Vc(),a.Mc=!0,a.K(),4!==a.playerType&&(a.W=g.wb(a.videoData.T)),dA(a.videoData)){LN(a).then(function(){a.ya()||(a.Ba&&(a.S("embeds_enable_preloadvideobyplayervars_startseconds_fix")&&a.Eb(qF(qF(a.playerState,512),1)),wN(a)),DN(a,a.videoData),a.ea.i=!0,EN(a,"dataloaded"),a.ma.started?MN(a):a.Ba&&!a.S("embeds_enable_preloadvideobyplayervars_startseconds_fix")&&a.Eb(qF(qF(a.playerState,512),1)),Hia(a.X,a.I))});
a.Ja("loudness",""+a.videoData.hg.toFixed(3),!0);var b=jfa(a.videoData);b&&a.Ja("playerResponseExperiment",b,!0);Sja(a)}else EN(a,"dataloaded")};
LN=function(a){CN(a);a.I=null;var b=Yia(a.u,a.videoData,a.ge());a.Pa=b;a.Pa.then(function(c){Uja(a,c)},function(c){a.ya()||(c=qq(c),a.visibility.isBackground()?(NN(a,"vp_none_avail"),a.Pa=null,a.ea.reset()):(a.ea.i=!0,a.me(c.errorCode,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK",g.pq(c.details))))});
return b};
HN=function(a){a.K();LN(a).then(function(){return wN(a)});
FE(a.playerState)&&a.playVideo()};
Uja=function(a,b){if(!a.ya()&&!b.videoData.ya()&&(a.K(),a.I=b,cja(a.B,a.I),!a.videoData.isLivePlayback||0<a.videoData.Bb&&!Rz(a.videoData)||(a.seekTo(g.ON(a)),PN(a,"playbackData")),a.videoData.l.i&&(a.l?g.to(Error("Duplicated Loader")):QN(a)),RN(a),a.S("html5_nonblocking_media_capabilities"))){var c=Date.now();Cia(a.X,b).then(function(){a.Ja("mclatency",(Date.now()-c).toString())})}};
SN=function(a){a.K();a.i&&a.i.jl();wA(a);KN(a)&&!g.S(a.playerState,128)&&(a.ma.started||(a.ma.start(),a.Eb(qF(qF(a.playerState,8),1))),MN(a))};
MN=function(a){a.ya();a.K();if(a.ma.isFinished())a.K();else if(a.ea.isFinished())if(g.S(a.playerState,128))a.K();else if(a.W.length)a.K();else{if(!a.T.started){var b=a.T;b.started=!0;b.fh()}if(a.Hh())a.K();else{a.l&&(b=a.l.timing,a.Xd=!!b.i&&!!b.l);a.ma.isFinished()||(a.ma.i=!0);!a.videoData.isLivePlayback||0<a.videoData.Bb&&!Rz(a.videoData)||(a.K(),a.seekTo(Infinity),PN(a,"readying"),a.isBackground()&&(a.Jd=!0));b=a.C;if(b.qoe){b=b.qoe;b.provider.videoData.fg&&FL(b,b.provider.videoData.fg);if(b.provider.videoData.isLivePlayback){var c=
b.provider.videoData.i;Rz(b.provider.videoData)&&FL(b,"manifestless");c&&Ew(c)&&FL(b,"live-segment-"+Ew(c).toFixed(1))}"yt"!==b.provider.i.C&&(b.i.len=[b.provider.videoData.lengthSeconds.toFixed(2)]);b.provider.videoData.cotn&&!lA(b.provider.videoData)&&AL(b,!0)}a.K();a.U("playbackready",a);dq("pbr",a.N.timerName)||(a.N.tick("pbr"),eq("pbr","video_to_ad"))}}else a.K()};
QE=function(a,b,c){b=void 0===b?!0:b;(void 0===c||c)&&a.i&&a.i.pause();b=b?new g.oF(14):new g.oF;a.Eb(b)};
DN=function(a,b){b.endSeconds&&b.endSeconds>b.startSeconds&&(b=b.endSeconds,a.xa&&(a.removeCueRange(a.xa),a.xa=null),a.xa=new g.XA(1E3*b,0x7ffffffffffff),a.xa.namespace="endcr",a.addCueRange(a.xa))};
VN=function(a,b,c,d){a.videoData.u=c;d&&TN(a,b,d);var e=(d=UN(a))?d.wb():"";d=a.C;c=new fL(a.videoData,c,b,e);if(d.qoe){d=d.qoe;e=PE(d.provider);xL(d,e,"vfs",[c.i.id,c.l,d.bb,c.reason]);d.bb=c.i.id;var f=d.provider.l.getPlayerSize();if(0<f.width&&0<f.height){f=[Math.round(f.width),Math.round(f.height)];var h=yy();1<h&&f.push(h);xL(d,e,"view",f)}d.Da||(d.provider.videoData.Ya&&FL(d,"rqs"),d.provider.videoData.i&&os(d.provider.videoData.i)&&(d.i.preload=["1"]));d.Da=!0;d.N=!0;"m"===c.reason&&100===
++d.Gb&&(c=d.i.fcnz,c||(c=[],d.i.fcnz=c),c.push("2"));xL(d,e,"vps",[d.l]);d.reportStats(e)}c=a.X;c.C=0;c.u=0;a.U("internalvideoformatchange",a.videoData,"m"===b)};
UN=function(a){var b=WN(a);return wq(b)||!a.I?null:g.lb(a.I.i.videoInfos,function(c){return b.B(c)})};
TN=function(a,b,c){if(c!==a.videoData.G){var d=!a.videoData.G;a.videoData.G=c;"m"!==b&&(b=d?"i":"a");var e=a.C;c=new fL(a.videoData,c,b,"");if(e.qoe){e=e.qoe;var f=PE(e.provider);c.i.id!==e.ea&&(xL(e,f,"afs",[c.i.id,e.ea,c.reason]),e.ea=c.i.id)}d||a.U("internalaudioformatchange",a.videoData,"m"===b)}};
DE=function(a,b){a.K();if(a.i&&b.wd()===a.i.wd()&&(b.isView()||a.i.isView())){if(b.isView()||!a.i.isView())g.Tn(a.Ua),a.i=b,XN(a),LM(a.B,a.i),a.D.u=a.i}else{a.i&&a.Xe();if(!a.playerState.isError()){var c=rF(a.playerState,512);g.S(c,8)&&!g.S(c,2)&&(c=qF(c,1));b.isView()&&(c=rF(c,64));a.Eb(c)}a.i=b;a.i.setLoop(a.loop);a.i.setPlaybackRate(a.playbackRate);XN(a);LM(a.B,a.i);a.D.u=a.i}};
WN=function(a){if(a.I){var b=a.X;var c=a.I,d=YN(a),e=a.isBackground();a=kL(b);a=vq("auto",a,!1,"s");if(wq(a)){a=lL(b,c);var f=c.videoData.fB,h=pL(b,c);if(g.my(b.i)&&1080<=uq[jL(-1)])var l=pz;else{l=g.Q(b.i.experiments,"html5_autonav_quality_cap");var m=g.Q(b.i.experiments,"html5_autonav_cap_idle_secs");l=l&&c.videoData.Rf&&g.zk()/1E3>m?new sq(0,l,!1,"e"):pz}m=g.Q(b.i.experiments,"html5_background_quality_cap");var n=g.Q(b.i.experiments,"html5_background_cap_idle_secs");e=!m||"auto"!==kL(b)||g.zk()/
1E3<n?pz:e?new sq(0,m,!1,"v"):pz;m=0;!b.i.u||ey(b.i)||Lk()||g.P(b.i.experiments,"hls_for_vod")||(m=uq.medium);if(n=g.Q(b.i.experiments,"html5_default_quality_cap")){var p=!!c.i.i&&!c.videoData.We&&!c.videoData.Qc,q=g.Q(b.i.experiments,"html5_quality_cap_min_age_secs");p&&q&&(p=b.i.schedule.D,p=(0,g.M)()-p>1E3*q);p&&(m=m?Math.min(m,n):n)}n=g.Q(b.i.experiments,"html5_random_playback_cap");q=/[a-h]$/;n&&q.test(c.videoData.clientPlaybackNonce)&&(m=m?Math.min(m,n):n);(n=g.Q(b.i.experiments,"html5_not_vp9_supported_quality_cap"))&&
!Kv('video/webm; codecs="vp9"')&&(m=m?Math.min(m,n):n);if(q=n=g.Q(b.i.experiments,"html5_hfr_quality_cap"))a:{q=c.i;if(q.i)for(q=g.u(q.videoInfos),p=q.next();!p.done;p=q.next())if(32<p.value.Qa().fps){q=!0;break a}q=!1}q&&(m=m?Math.min(m,n):n);(n=g.Q(b.i.experiments,"html5_live_quality_cap"))&&c.videoData.isLivePlayback&&(m=m?Math.min(m,n):n);m=new sq(0,m,!1,"d");n=hL(b,c);q=n.compose;a:if((p=c.i)&&p.videoInfos.length){for(var r=g.u(p.videoInfos),t=r.next();!t.done;t=r.next())if(t=t.value,t.D){p=
t.Qa().i;break a}p=p.videoInfos[0].Qa().i}else p=0;Ek()&&!g.my(b.i)&&Bv(c.i.videoInfos[0])&&(p=Math.min(p,uq.large));p=new sq(0,p,!1,"o");a=q.call(n,p).compose(m).compose(e).compose(l).compose(h).compose(f).compose(a)}else b.S("html5_perf_cap_override_sticky")&&(a=a.compose(pL(b,c)));b.S("html5_varispeed_playback_rate")&&(a=a.compose(lL(b,c)));b=c.videoData.zj.compose(a).compose(c.videoData.Xv).compose(d)}else b=pz;return b};
YN=function(a,b){if(a.G){var c=a.G;b=void 0===b?!1:b;c=(void 0===b?0:b)&&c.Ba?c.Ba:c.I}else c=Hz(a.videoData)&&a.videoData.i&&ws(a.videoData.i)?a.videoData.Oe?pz:LK:pz;a.ld&&(c=c.compose(ZN));return c};
vA=function(a,b){a.videoData.zj=b;if(a.I){var c=a.X,d=a.I;if(d.i.i){var e=uq[jL()],f=d.i.videoInfos[0].Qa().i;if(!(e>f&&0!==f&&b.i===f)){1<c.playbackRate&&c.S("html5_varispeed_playback_rate")&&(d=sx(c.i.i,d.i.videoInfos,c.playbackRate),0!==b.i&&d<b.i&&c.l.setPlaybackRate(1));Vja(xq(b));if(c.S("html5_exponential_memory_for_sticky")){b=c.i.Pa;d=1;var h=void 0===h?!1:h;Mx(b,"sticky-lifetime");b.values["sticky-lifetime"]&&b.Dh["sticky-lifetime"]||(b.values["sticky-lifetime"]=0,b.Dh["sticky-lifetime"]=
0);h&&.0625<Nx(b,"sticky-lifetime")&&(d=2*b.Dh["sticky-lifetime"]);b.values["sticky-lifetime"]+=1*Math.pow(2,b.i/d);b.Dh["sticky-lifetime"]=d;b.B.start()}c.S("html5_perf_cap_override_sticky")&&Wja(c.S("html5_perserve_av1_perf_cap"))}}}RN(a)};
RN=function(a){if(!a.ya()&&!g.S(a.playerState,128)&&a.videoData.l){if(a.videoData.l.i)$N(a);else{var b=WN(a),c=a.videoData;a:{var d=a.videoData.Xa;if(b.i){for(var e=g.u(d),f=e.next();!f.done;f=e.next()){f=f.value;var h=f.Md(),l=uq[h.Qa().quality];if((!b.u||"auto"!==h.Qa().quality)&&l<=b.i){d=f;break a}}d=d[d.length-1]}else d=d[0]}c.X=d;VN(a,b.reason,aO(a,a.videoData.X))}a.Zb()&&(a.B.Ba=!1,a.playVideo())}};
$N=function(a){if(a.videoData.l&&a.videoData.l.i){var b=WN(a),c=a.videoData.u;if(!a.S("html5_dynamic_av1_hybrid_threshold")&&c&&Dv(c)){var d=ax(a.u);if(d&&d<c.Qa().i&&d!==a.qe){a.qe=d;LN(a);return}}if(a.l&&(a=a.l,!a.ya()&&!tq(a.l.l,b)&&a.videoTrack)){a.K();var e=a.l.l;WJ(a,pha(a.l,b));KJ(a);c=VH(a.l)&&"m"===b.reason&&a.l.X;d=a.policy.eh&&"l"===b.reason&&bJ(a.videoTrack);b=("b"===b.reason||"o"===b.reason)&&e.i>b.i;e=a.l.Ha&&!$v();c||d||b||e?(a.Hb("reattachOnConstraint",c?"u":d?"drm":e?"codec":"perf"),
a.U("reattachrequired")):g.Ih(a.N)}}};
vN=function(a){a.S("html5_nonblocking_media_capabilities")?$N(a):RN(a)};
QN=function(a){a.S("html5_probe_media_capabilities")&&Uea(a.videoData.l);Zda(a.videoData.i,{cpn:a.videoData.clientPlaybackNonce,c:a.u.deviceParams.c,cver:a.u.deviceParams.cver});var b=a.u,c=a.videoData,d=new g.lB,e=kB(b,{hasSubfragmentedFmp4:c.hasSubfragmentedFmp4,Hg:c.Hg});d.B=e;d.qj=b.S("html5_disable_codec_for_playback_on_error");d.bh=b.S("html5_max_drift_per_track_secs")||b.S("html5_rewrite_manifestless_for_sync")||b.S("html5_check_segnum_discontinuity");d.Aa=b.S("html5_unrewrite_timestamps");
d.Vb=b.S("html5_stop_overlapping_requests");d.Kd=g.Q(b.experiments,"html5_min_readbehind_secs");d.il=g.Q(b.experiments,"html5_min_readbehind_cap_secs");d.Ij=g.Q(b.experiments,"html5_max_readbehind_secs");d.Yk=g.P(b.experiments,"html5_trim_future_discontiguous_ranges");d.Wg=b.S("html5_append_init_while_paused");d.Jd=g.Q(b.experiments,"html5_max_readahead_bandwidth_cap");d.Xd=g.Q(b.experiments,"html5_post_interrupt_readahead");d.T=g.Q(b.experiments,"html5_subsegment_readahead_target_buffer_health_secs");
d.Xb=g.Q(b.experiments,"html5_subsegment_readahead_timeout_secs");d.Pk=g.Q(b.experiments,"html5_subsegment_readahead_min_buffer_health_secs");d.Wb=g.Q(b.experiments,"html5_subsegment_readahead_min_buffer_health_secs_on_timeout");d.Qk=g.Q(b.experiments,"html5_subsegment_readahead_min_load_speed");d.cg=g.Q(b.experiments,"html5_subsegment_readahead_load_speed_check_interval");d.Wk=g.Q(b.experiments,"html5_subsegment_readahead_seek_latency_fudge");d.Wd=b.S("html5_peak_shave");d.Jm=b.S("html5_restrict_streaming_xhr_on_sqless_requests");
d.Gj=g.Q(b.experiments,"html5_max_headm_for_streaming_xhr");d.yl=b.S("html5_net_closed_is_timeout");d.Nl=b.S("html5_pipeline_manifestless_allow_nonstreaming");d.fm=b.S("html5_prefer_server_bwe3");d.hg=1024*g.Q(b.experiments,"html5_video_tbd_min_kb");d.Bj=b.S("html5_last_slice_transition");d.Nk=b.S("html5_store_xhr_headers_readable");d.vj=b.S("html5_enable_packet_train_response_rate");if(e=g.Q(b.experiments,"html5_probe_secondary_during_timeout_miss_count"))d.qe=e,d.Xk=1;d.Gb=g.Q(b.experiments,"html5_probe_primary_delay_base_ms")||
d.Gb;d.Vd=b.S("html5_no_placeholder_rollbacks");d.Ok=b.S("html5_subsegment_readahead_enable_mffa");b.S("html5_allow_video_keyframe_without_audio")&&(d.Ma=!0);d.Je=b.S("html5_reattach_on_stuck");d.dl=b.S("html5_webm_init_skipping");d.Oe=g.Q(b.experiments,"html5_request_size_padding_secs")||d.Oe;d.Tg=b.S("html5_log_timestamp_offset");d.hf=b.S("html5_abs_buffer_health");d.Aj=b.S("html5_interruption_resets_seeked_time");d.ld=g.Q(b.experiments,"html5_max_live_dvr_window_plus_margin_secs")||d.ld;d.Gc=b.S("html5_explicitly_dispose_xhr");
d.Mk=b.S("html5_skip_invalid_sq");d.Im=b.S("html5_restart_on_unexpected_detach");d.Dj=b.S("html5_log_live_discontinuity");d.Ik=b.S("html5_rewrite_manifestless_for_continuity");d.Nc=g.Q(b.experiments,"html5_manifestless_seg_drift_limit_secs");d.Oc=g.Q(b.experiments,"html5_max_drift_per_track_secs");d.Jk=b.S("html5_rewrite_manifestless_for_sync");d.Tb=g.Q(b.experiments,"html5_static_abr_resolution_shelf");d.Yg=!b.S("html5_encourage_array_coalescing");d.pj=b.S("html5_crypto_period_secs_from_emsg");d.rj=
b.S("html5_disable_reset_on_append_error");d.yj=b.S("html5_filter_non_efficient_formats_for_safari");d.Sg=b.S("html5_format_hybridization");d.Vg=b.S("html5_abort_before_separate_init");d.Kk=b.S("html5_serialize_server_stitched_ad_request");d.dg=b.S("html5_validate_media_stream_slices");b.S("html5_media_common_config_killswitch")||(d.C=c.maxReadAheadMediaTimeMs/1E3||d.C,e=b.schedule,e.l.ze()===e.policy.u?d.X=10:d.X=c.minReadAheadMediaTimeMs/1E3||d.X,d.zc=c.readAheadGrowthRateMs/1E3||d.zc);g.Uf&&(d.W=
41943040);d.Ua=!hw();g.my(b)||!hw()?(e=b.experiments,d.D=8388608,d.G=524288,d.Xg=5,d.bb=2097152,d.xa=1048576,d.Gm=1.5,d.zl=!1,d.N=4587520,Hk()&&(d.N=786432),d.l*=1.1,d.u*=1.1,d.Sb=!0,d.W=d.D,d.qb=d.G,d.pc=g.P(e,"persist_disable_player_preload_on_tv")||g.P(e,"persist_disable_player_preload_on_tv_for_living_room")||!1):b.u&&(d.l*=1.3,d.u*=1.3);Lv&&Ck("crkey")&&(e="CHROMECAST/ANCHOVY"===b.deviceParams.cmodel,d.D=20971520,d.G=1572864,e&&(d.N=812500,d.qc=1E3,d.al=5,d.xa=2097152));!b.S("html5_disable_firefox_init_skipping")&&
kx&&(d.Sb=!0);b.supportsGaplessAudio()||(d.uj=!1);g.Wx&&(d.Ka=!0);Kk()&&(d.Vf=!0);var f;e=null===(f=c.i)||void 0===f?void 0:ws(f);if(Rz(c)){d.I=b.S("html5_used_segment_info_cuepoint");d.zj=!0;d.Lk=!0;if("ULTRALOW"===c.latencyClass||"LOW"===c.latencyClass&&!b.S("html5_disable_low_pipeline"))d.Ej=2,d.Hj=4;d.qh=c.defraggedFromSubfragments;c.Cc&&(d.ea=!0);g.fA(c)&&(d.Pa=!1);d.dh=g.By(b)}g.By(b)||(d.Ke=!0);c.isAd()&&(d.ub=0,d.Hc=0);Tz(c)&&(d.Ba=!0,b.S("html5_resume_streaming_requests")&&(d.ma=!0,d.qc=
400,d.Fj=2,d.jf=3,d.nf=1.4));d.Xa=b.S("html5_enable_subsegment_readahead_v3")||b.S("html5_ultra_low_latency_subsegment_readahead")&&"ULTRALOW"===c.latencyClass;d.Ya=c.Ya;d.vf=d.Ya&&(/^rq[a-f]/.test(c.clientPlaybackNonce)||g.Mz(c));Qk()&&/(K\d{3}|KS\d{3}|KU\d{3})/.test(b.deviceParams.cmodel)&&!b.S("html5_disable_move_pssh_to_moov")&&e&&(d.Sb=!1);e&&(d.Je=!1);var h=0;b.S("html5_live_use_alternate_bandwidth_window_sizes")&&(h=b.schedule.policy.l,c.isLivePlayback&&(h=g.Q(b.experiments,"ULTRALOW"===c.latencyClass?
"html5_live_ultra_low_latency_bandwidth_window":c.isLowLatencyLiveStream?"html5_live_low_latency_bandwidth_window":"html5_live_normal_latency_bandwidth_window")||h));f=b.schedule;f.T.i=Rz(c)?.5:0;if(!f.policy.i&&h&&(f=f.l,h=Math.round(h*f.resolution),h!==f.i)){var l=Array(h),m=Math.min(h,f.l?f.i:f.valueIndex),n=f.valueIndex-m;0>n&&(n+=f.i);for(var p=0;p<m;++p)l[p]=f.values[(n+p)%f.i];for(;p<h;++p)l[p]=Infinity;f.i=h;f.values=l;f.valueIndex=m%h;f.l=m===h;f.B=!0;f.D=xx(f)}d.Bb=c.isLivePlayback;switch(Sz(c)){case 21530001:d.Ug=
b.S("html5_live_smoothly_extend_max_seekable_time");d.Xa=!0;"LOW"===c.latencyClass?d.T=g.Q(b.experiments,"html5_jumbo_mobile_subsegment_readahead_target"):"ULTRALOW"===c.latencyClass&&(d.T=g.Q(b.experiments,"html5_jumbo_ull_subsegment_readahead_target"));d.Vd=!0;break;case 2153E4:d.Xa=!1}d.Ka=d.Ka||c.Ul;d.Da=c.Da;g.Mz(c)&&(d.Mc=!0);c.Da&&!e&&b.S("html5_hack_gapless_init")&&(d.Re=!0);(e=g.Q(b.experiments,"html5_gapless_ad_byterate_multiplier"))&&c.Da&&c.isAd()&&(d.l*=e,d.u*=e);lA(c)&&(d.i=c.videoId,
d.hf=!0);d.eh=c.Oe;b.S("html5_dynamic_av1_hybrid_threshold")&&(d.tj=!0,d.Ha=ax(b,{},c.l||void 0));c=qJ();e=g.Q(b.experiments,"html5_deadzone_multiplier")||1;(f=g.Q(b.experiments,"html5_sticky_reduces_discount_by"))&&c&&(e-=f);d.l*=e;d.u*=e;if(e=g.Q(b.experiments,"html5_request_sizing_multiplier"))d.Hm=e;us(b.i,vs.BITRATE)&&(d.N=NaN);b.i.l&&(d.wj="; "+vs.EXPERIMENTAL.name+"=allowed");c&&(d.fg=0,d.Tb=0);d.lm=b.S("html5_rec_2020_matrix_correction_killswitch");c=d.Bb&&!b.S("html5_pause_appends_killswitch");
d.Bb=c||b.S("html5_never_pause_appends");g.P(b.experiments,"html5_prefer_low_quality_audio_means_64k")&&g.Wx&&(d.Wl=!0);g.P(b.experiments,"debug_html5_random_stun_format")&&(d.Ie=!0);g.P(b.experiments,"html5_log_audio_abr")&&(d.Cj=!0);b=b.experiments;g.P(b,"html5_validate_lengthless_slices_killswitch")&&(d.Zk=!1);g.P(b,"html5_audio_only_eos_fix_killswitch")&&(d.Xh=!0);g.P(b,"html5_reject_promise_if_seeking_to_head_killswitch")&&(d.Am=!0);g.P(b,"html5_rewrite_webm_track_uid_killswitch")&&(d.Vf=!1);
g.P(b,"html5_skip_buffer_check_seek_to_head")&&(d.Zg=!0);g.P(b,"html5_request_loop_retry_exhausted_killswitch")&&(d.Ke=!0);b=a.getAudioTrack();b=b.i.isDefault?void 0:b;c=a.Ma;c.keys=[];c.values=[];a.l=new FJ(a.u.schedule,d,a.videoData.i,a.videoData.l,WN(a),b,a.T,a.videoData.enableServerStitchedDai,a.videoData.Nl);a.l.subscribe("needkeyinfo",a.cA,a);a.l.subscribe("newDrmInfo",a.BF,a);a.l.subscribe("videoformatchange",a.lC,a);a.l.subscribe("audioformatchange",a.pF,a);a.l.subscribe("error",a.handleError,
a);a.l.subscribe("ctmp",a.Ja,a);a.l.subscribe("reattachrequired",a.GG,a);a.l.subscribe("metadata",a.Xz,a);a.l.subscribe("constraint",a.kG,a);a.l.subscribe("timestamp",a.hC,a);a.l.subscribe("localmediachange",a.qF,a);a.l.subscribe("localplaybackfailed",a.cD,a);d=bO(a)?!0:a.Ba&&g.my(a.u)&&a.videoData.isLivePlayback;a.l.initialize(a.getCurrentTime(),WN(a),d);a.videoData.probeUrl&&(a.l.Da=a.videoData.probeUrl);(a.W.length||a.Ba)&&cO(a,!1);NM(a.B,a.l);a.D.l=a.l;a.Xa&&(d=a.l,b=new eK(a.Xa),d.X=b,d.u&&(d.u.T=
b));mA(a.videoData)&&(a.l.policy.xj=2)};
Pja=function(a){a.B=new IM(a.videoData,a.u,a.visibility,function(){return g.pb(a.W,"ad")});
g.G(a,a.B);a.B.subscribe("seekto",function(b,c){a.B.C=b;var d=a.bb;d.mediaTime=b;d.i=!0;c||dO(a);a.xa&&b>a.videoData.endSeconds&&isFinite(b)&&(a.removeCueRange(a.xa),a.xa=null);b<g.ON(a)-.01&&(c=rF(a.playerState,2),g.S(c,8)&&(c=rF(c,4)),a.Eb(c));a.U("SEEK_TO",a,b)});
a.B.subscribe("seekstart",function(){fF(a)});
a.B.subscribe("seekend",function(){return a.U("SEEK_COMPLETE")});
a.B.subscribe("newmediaelementrequired",function(){return GN(a)});
a.B.subscribe("ended",function(){QE(a)});
a.B.subscribe("ctmp",a.Ja,a);a.B.subscribe("qoeerror",a.Fr,a);a.B.subscribe("livereadaheadchanged",function(b){var c=a.C;c.qoe&&(c=c.qoe,xL(c,PE(c.provider),"lra",[b]),c.Ja("live-readahead-seconds",b.toString()))});
a.B.subscribe("releaseadsprerolllock",function(){a.jd("ad")});
a.B.subscribe("skipslowad",function(){a.me("ad.rebuftimeout","RETRYABLE_ERROR","skipslad.vid."+a.videoData.videoId)})};
CN=function(a){a.l&&(a.l.dispose(),a.l=null,NM(a.B,null),a.D.l=null);eO(a)};
eO=function(a){if(a.mediaSource){a.K();if(a.l){var b=Rz(a.videoData)&&a.videoData.Cc&&!a.videoData.isAd();OJ(a.l,b)}a.mediaSource.dispose();a.mediaSource=null}};
fO=function(a){if(a.mediaSource)return a.mediaSource.po;a.K();Xja(a);return a.mediaSource?a.mediaSource.po:null};
Xja=function(a){if(a.S("html5_application_media_source"))a.U("requestmediasource",a);else{var b=g.Q(a.u.experiments,"html5_source_buffer_attach_retry_limit")||0;a.Oe<b&&a.Kd.start();try{var c=a.i.hp()}catch(d){if(aL(a.D,"html5.missingapi",{updateMs:"1"}))return;g.to(d);d.message="window.URL object overwritten by external code";window.setTimeout(function(){throw d;},0);
a.me("html5.missingapi","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","updateMs.1");return}IE(a,c)}};
IE=function(a,b){Yja(a);a.mediaSource=b;Lda(a.mediaSource,function(c){try{if(a.mediaSource&&(!c||a.mediaSource===c)){a.K();var d=a.getDuration();!d&&Rz(a.videoData)&&(d=g.Q(a.u.experiments,"html5_manifestless_media_source_duration")||3600);a.mediaSource.isView?(c=d,a.K(),c>a.mediaSource.getDuration()&&dw(a.mediaSource,c)):dw(a.mediaSource,d);var e=a.l,f=a.mediaSource;e.I&&(e.K(),NJ(e),e.I=!1);e.K();MJ(e);if(!ew(f)){var h=e.videoTrack.i.info.mimeType+e.policy.wj,l=e.audioTrack.i.info.mimeType,m,n,
p=null===(m=f.mediaSource)||void 0===m?void 0:m.addSourceBuffer(l),q="fakesb"===h.split(";")[0]?void 0:null===(n=f.mediaSource)||void 0===n?void 0:n.addSourceBuffer(h);f.Wc&&(f.Wc.webkitSourceAddId("0",l),f.Wc.webkitSourceAddId("1",h));var r=new Zv(p,f.Wc,"0",yv(l),!1),t=new Zv(q,f.Wc,"1",yv(h),!0);f.i=r;f.l=t;g.G(f,r);g.G(f,t)}LI(e.videoTrack,f.l||null);LI(e.audioTrack,f.i||null);e.mediaSource=f;e.resume();Un(f.i,e.Aa,e);Un(f.l,e.Aa,e);e.policy.Tg&&1E-4>=Math.random()&&e.Hb("toff",""+f.i.supports(1),
!0);e.gf();a.U("mediasourceattached");a.Kd.stop()}}catch(v){g.to(v),a.handleError(new oq("fmt.unplayable",!0,{msi:"1",ename:v.name}))}})};
Yja=function(a){a.l?g.xh(a.l.seek(a.getCurrentTime()-a.Kb()),function(){}):QN(a)};
GN=function(a,b){b=void 0===b?!1:b;return D(a,function d(){var e=this;return A(d,function(f){if(1==f.i)return e.l&&e.l.ya()&&CN(e),e.U("newelementrequired"),b?x(f,LN(e),2):f.fb(2);g.S(e.playerState,8)&&e.playVideo();f.i=0})})};
Pga=function(a,b){a.Ja("newelem",b);GN(a)};
dO=function(a){g.S(a.playerState,32)||(a.Eb(qF(a.playerState,32)),g.S(a.playerState,8)&&a.pauseVideo(!0),a.U("beginseeking",a));a.kd()};
fF=function(a){g.S(a.playerState,32)?(a.Eb(sF(a.playerState,16,32)),a.U("endseeking",a)):g.S(a.playerState,2)||a.Eb(qF(a.playerState,16))};
HF=function(a){a=a.B;return a.u?xM(a.u):Infinity};
EN=function(a,b){a.U("internalvideodatachange",void 0===b?"dataupdated":b,a,a.videoData)};
XN=function(a){g.wd("loadstart loadeddata loadedmetadata play playing progress pause ended suspend seeking seeked timeupdate durationchange ratechange error waiting resize".split(" "),function(b){this.Ua.Y(this.i,b,this.mC,this)},a);
a.u.Xh&&a.i.Uk()&&(a.Ua.Y(a.i,"webkitplaybacktargetavailabilitychanged",a.JE,a),a.Ua.Y(a.i,"webkitcurrentplaybacktargetiswirelesschanged",a.KE,a))};
hO=function(a){a.S("html5_enable_timeupdate_timeout")&&!a.videoData.isLivePlayback&&gO(a)&&a.zc.start()};
gO=function(a){if(!a.i)return!1;var b=a.i.getCurrentTime();a=a.i.getDuration();return!!(1<b&&b>a-.3)};
jO=function(a){window.clearInterval(a.Tb);iO(a)||(a.Tb=zj(function(){return iO(a)},100))};
iO=function(a){var b=a.i;b&&a.qb&&!a.videoData.Ba&&!dq("vfp",a.N.timerName)&&2<=b.df()&&!b.Jg()&&0<Uv(b.ye())&&a.N.tick("vfp");return(b=a.i)&&!a.videoData.Ba&&0<b.getDuration()&&(!dq("pbp",a.N.timerName)&&b.ci()&&2<=b.df()&&0<Uv(b.ye())&&a.N.tick("pbp"),b=b.getCurrentTime(),rM(a.bb,b))?(GE(a),!0):!1};
GE=function(a){window.clearInterval(a.Tb);a.Ha.stop();a.videoData.Ba=!0;a.u.Ie=!0;a.u.W=0;var b=a.D,c=b.videoData.u;c&&b.videoData.S("html5_disable_codec_on_errors_with_exp_backoff")&&b.i.i.i.delete(c.i);a.u.zc=a.videoData.Wl;a.videoData.vz=!0;g.kO(a);g.S(a.playerState,8)&&a.Eb(rF(a.playerState,65));b=a.C;b.i&&ZL(b.i);b.l&&(b=b.l,c=PE(b.provider),0>b.i&&(b.i=c,b.delay.start()),b.l=c,b.B=c);g.Ih(a.Hc);a.U("playbackstarted");kk()&&((a=g.Na("yt.scheduler.instance.clearPriorityThreshold"))?a():mk(0))};
g.kO=function(a){var b=a.getCurrentTime(),c=a.videoData;!dq("pbs",a.N.timerName)&&bq.measure&&bq.getEntriesByName&&(bq.getEntriesByName("mark_nr")[0]?cq("mark_nr"):cq());c.videoId&&a.N.info("docid",c.videoId);c.eventId&&a.N.info("ei",c.eventId);c.clientPlaybackNonce&&a.N.info("cpn",c.clientPlaybackNonce);0<c.startSeconds&&a.N.info("start",c.startSeconds.toString());a.i&&a.i.ci()&&a.N.info("paused",1);c.u?a.N.info("fmt",c.u.wb()):a.N.info("fmt","-1");c.Gb&&a.N.info("yt_pre",a.Xd?"2":"1");a.isFullscreen()&&
a.N.info("yt_fs","1");a.N.info("cmt",b.toFixed(3));if(a.l){b=a.l.timing;window&&window.performance&&window.performance.getEntriesByName&&(b.l&&(c=window.performance.getEntriesByName(b.l),c.length&&(c=c[0],b.tick("vri",c.fetchStart),b.tick("vdns",c.domainLookupEnd),b.tick("vreq",c.requestStart),b.tick("fvb",c.responseStart),b.tick("vrc",c.responseEnd))),b.i&&(c=window.performance.getEntriesByName(b.i),c.length&&(c=c[0],b.tick("ari",c.fetchStart),b.tick("adns",c.domainLookupEnd),b.tick("areq",c.requestStart),
b.tick("avb",c.responseStart),b.tick("arc",c.responseEnd))));b=b.ticks;for(var d in b)b.hasOwnProperty(d)&&a.N.tick(d,b[d])}};
Zja=function(a){var b=a.C,c;b.provider.videoData.enableServerStitchedDai&&b.Zd?null===(c=b.u.get(b.Zd))||void 0===c?void 0:cM(c):b.i&&cM(b.i);if(a.videoData.isLivePlayback&&Date.now()>a.Ie+6283){if(!(!a.isAtLiveHead()||a.videoData.i&&Bw(a.videoData.i))&&(b=a.C,b.qoe)){b=b.qoe;var d=b.provider.l.Qp();c=PE(b.provider);CL(b,c,d);d=d.C;isNaN(d)||xL(b,c,"e2el",[d.toFixed(3)])}g.By(a.u)&&a.Ja("rawlat","l."+AG(a.qc,"rawlivelatency").toFixed(3));a.Ie=Date.now()}a.videoData.u&&Ev(a.videoData.u)&&(b=g.JN(a))&&
b.videoHeight!==a.Oc&&(a.Oc=b.videoHeight,VN(a,"a",aO(a,a.videoData.X)))};
aO=function(a,b){if("auto"===b.i.Qa().quality&&Ev(b.Md())&&a.videoData.Xa)for(var c=g.u(a.videoData.Xa),d=c.next();!d.done;d=c.next())if(d=d.value,d.getHeight()===a.Oc&&"auto"!==d.i.Qa().quality)return d.Md();return b.Md()};
uN=function(a){if(!a.videoData.isLivePlayback||!a.videoData.i||!a.l)return NaN;var b=Rz(a.videoData)?a.l.ma.ze()||0:a.videoData.i.X;return Date.now()/1E3-a.Nd()-b};
$ja=function(a){!a.S("html5_ignore_airplay_events_on_new_video_killswitch")&&a.i&&a.i.ge()&&(a.Sb=(0,g.M)());a.u.Vg?g.yj(function(){lO(a)},0):lO(a)};
lO=function(a){if(a.i)try{a.ub=a.i.playVideo()}catch(c){NN(a,"err."+c)}if(a.ub){var b=a.ub;b.then(void 0,function(c){a.K();if(!g.S(a.playerState,4)&&!g.S(a.playerState,256)&&a.ub===b)if(c&&"AbortError"===c.name&&c.message&&c.message.includes("load"))a.K();else{var d="promise";c&&c.name&&(d+=";m."+c.name);try{a.Eb(qF(a.playerState,2048))}catch(e){}NN(a,d);a.Wd=!0}})}};
NN=function(a,b){g.S(a.playerState,128)||(a.Eb(sF(a.playerState,1028,9)),a.Ja("dompaused",b),a.U("onDompaused"))};
wN=function(a){if(!a.i||!a.videoData.l)return!1;var b,c,d=null;(null===(c=a.videoData.l)||void 0===c?0:c.i)?(d=fO(a),null===(b=a.l)||void 0===b?void 0:b.resume()):(CN(a),a.videoData.X&&(d=a.videoData.X.Nm()));b=d;d=a.i.ip();c=!1;d&&null!==b&&b.i===d.i||(a.N.tick("vta"),eq("vta","video_to_ad"),0<a.getCurrentTime()&&(c=a.getCurrentTime(),a.B.C=c),a.i.jl(b),a.mediaSource&&mk(4),!a.videoData.Ba&&FE(a.playerState)&&a.Ha.start(),c=!0);g.S(a.playerState,2)||(b=a.B,b.G||!(0<b.C)||b.i&&0<b.i.getCurrentTime()||
b.seekTo(b.C));a:if(b=c,g.Yz(a.videoData)&&a.i)if((d=a.videoData.C)&&a.i.Uk()){var e=a.i.wd();if(a.G)if(e!==a.G.element)AN(a);else if(b&&"fairplay"===d.flavor&&!Gk())AN(a);else break a;a.G=new NK(e,a.videoData,a.u);a.G.subscribe("licenseerror",a.kC,a);a.G.subscribe("qualitychange",a.kF,a);a.G.subscribe("heartbeatparams",a.iC,a);a.G.subscribe("keystatuseschange",a.jC,a);a.G.subscribe("hdproberequired",a.jF,a);a.G.subscribe("ctmp",a.Ja,a);b=g.u(a.Ma.keys);for(d=b.next();!d.done;d=b.next())d=a.Ma.get(d.value),
RK(a.G,d);a.S("html5_eme_loader_sync")||(a=a.Ma,a.keys=[],a.values=[])}else a.me("fmt.unplayable","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","drm.1");return c};
AN=function(a){a.G&&(a.G.dispose(),a.G=null)};
ME=function(a,b){b=void 0===b?!1:b;return a.videoData.isLivePlayback&&(a.isAtLiveHead()&&(a.S("html5_videoplayer_getmaxseekabletimeforux_check_pause_killswitch")||!g.S(a.playerState,4))||g.OM(a.B)||g.fA(a.videoData))?a.getCurrentTime():g.ON(a,b)};
g.ON=function(a,b){return JM(a.B,void 0===b?!1:b)};
mO=function(a){return a.i?a.i.gp():a.loop};
IN=function(a){a.K();a.i&&(a.mediaSource?(AN(a),eO(a),fO(a)):(a.videoData.X&&a.videoData.X.ev(),a.i.stopVideo()),a.playVideo())};
nO=function(a,b){g.P(a.u.experiments,"html5_log_rebuffer_reason")&&a.Ja("bufreason","r."+b+";lact."+g.zk())};
aF=function(a,b,c,d,e,f){var h;if(null===(h=a.videoData.i)||void 0===h?0:h.isLive){var l=2===c.playerType?c:b,m=b.videoData.videoId,n=c.videoData.videoId;if(m&&n){var p=a.C;if(p.qoe){p=p.qoe;var q=b.cpn,r=c.cpn,t=l.videoData.zc,v=p.provider.videoData.clientPlaybackNonce,y=p.provider.videoData.videoId,C=r!==v&&n!==y;v=q!==v&&m!==y;p.reportStats();p.adCpn&&p.adCpn!==q||(p.adCpn=v?q:"",p.G=v?m:"",p.adFormat=v?t:void 0,JL(p,f?2:0,r,n,e),p.reportStats(),p.adCpn=C?r:"",p.G=C?n:"",p.adFormat=C?t:void 0,
JL(p,f?3:1,q,m,d),p.reportStats())}d=a.C;b=b.cpn;d.u.has(b)?(b=d.u.get(b),aM(b).send(),Aj(b.l),b.l=NaN):(d.Zd=d.provider.videoData.clientPlaybackNonce,d.Zd&&d.i&&d.u.set(d.Zd,d.i));a=a.C;c=c.cpn;b=l.videoData;l=l.Ab/1E3;var z;a.u.has(c)?null===(z=a.u.get(c))||void 0===z?void 0:z.u&&isNaN(z.l)&&WL(z,!1):(z=Oia(a,a.provider,b,l),a.u.set(c,z),ZL(z));a.Zd=c}}};
oO=function(a){a.l&&(a=a.l,a.audioTrack.B.B=null,a.videoTrack.B.B=null,a.policy.i="",a.policy.sj=!1)};
pO=function(a,b){if(a.videoData.Ya){var c=g.Q(a.u.experiments,"html5_log_rebuffer_events");if(c&&a.i){var d=a.i.gb();d.rt=(1E3*PE(a.C.provider)).toFixed();d.e=b.substr(0,3);a.Vb[a.Ke++%c]=d}}"timeupdate"!==b&&"progress"!==b&&a.K()};
qO=function(a){if(a.videoData.Ya){a.Vb.sort(function(d,e){return+d.rt-+e.rt});
for(var b=g.u(a.Vb),c=b.next();!c.done;c=b.next())c=c.value,a.Ja("vpe","t."+c.rt+";"+g.pq(c));a.Vb=[];a.Ke=0}};
PN=function(a,b){a.Ja("seekreason",b)};
rO=function(a){if(Ck("cobalt")&&Ck("nintendo switch")){var b=!window.matchMedia("screen and (max-height: 720px) and (min-resolution: 200dpi)").matches;a.Ja("nxdock",""+ +b)}};
EE=function(a,b,c,d,e){a.Ja("xvt","m."+b+";g.1;tt."+(c?1:0)+";np."+(d?1:0)+";c."+e)};
cO=function(a,b){LJ(a.l,b||bO(a))};
bO=function(a){var b=a.S("disable_prefetch_when_ad_pending_for_living_room")&&g.my(a.u),c=a.S("disable_prefetch_when_ad_pending_for_web");return(b||c)&&g.pb(a.W,"ad")};
Sja=function(a){if(Jz(a.videoData,"html5_set_debugging_opt_in")&&(a=g.Al.getInstance(),!g.Cl(0,183))){var b="f"+(Math.floor(183/31)+1),c=Bl(b)||0;c|=268435456;0==c?delete zl[b]:(c=c.toString(16),zl[b]=c.toString());a.save()}};
g.yO=function(a,b,c){g.F.call(this);var d=this;this.qo=this.xe=!1;this.T=null;this.Wb={};this.bb={};this.pc=!1;this.Gb=null;this.qc=!1;this.Da=!0;this.Vb=!1;this.Gc=this.Sb=null;this.Hc=!0;this.B=this.I=null;this.Xa=this.Ha=!1;this.Nc=this.Pa=this.u=this.playlist=null;this.Ma=void 0;this.ma=0;this.Ba=this.X=null;this.K();this.config=Pba(b||{});this.webPlayerContextConfig=c;lba();b=this.config.args||{};this.i=new qy(b,c,c?c.canaryState:this.config.assets.player_canary_state);g.G(this,this.i);void 0!==
navigator.mediaCapabilities&&(vw=!0);this.S("html5_disable_subtract_cuepoint_offset")&&(pt=!0);this.S("html5_log_opus_oboe_killswitch")&&(Xt=!1);this.S("html5_skip_empty_load")&&(sO=!0);tO=this.S("html5_ios_force_seek_to_zero_on_stop");uO=this.S("html5_ios7_force_play_on_stall");vO=this.S("html5_ios4_seek_above_zero");Yv=this.S("html5_retain_source_buffer_appends_for_debugging");this.S("html5_mediastream_applies_timestamp_offset")&&(wI=!0);this.S("html5_dont_override_default_sample_desc_index")&&
(It=!0);this.S("html5_onesie_media_bytes_disable_hw_crypto")&&(eN=!0);this.i.u&&!wO&&(window.addEventListener(Vx?"touchstart":"click",Iga,{capture:!0,passive:!0}),wO=!0);this.zc=R(!1,b.player_wide);this.visibility=new WE;g.G(this,this.visibility);this.setIsExternalPlaylist(b.external_list);this.events=new g.TA(this);g.G(this,this.events);this.ag=new bi;g.G(this,this.ag);this.uh=new bi;g.G(this,this.uh);this.Qi=new g.VG;this.Fa=new g.LA(this);g.G(this,this.Fa);this.template=new HG(this);g.G(this,this.template);
this.W=1;this.cf=this.i.pc?aka():{volume:100,muted:this.i.mute};this.L=this.i.l?new KA(this,1):new AA(this,1);g.G(this,this.L);c={};this.qb=(c.internalvideodatachange=this.NE,c.playbackready=this.PE,c.playbackstarted=this.QE,c.statechange=this.RE,c);this.C=bka(this);this.Tb=new g.TA(this);g.G(this,this.Tb);this.G=new UA(this.i,this.C);this.l=cka(this);g.P(this.i.experiments,"html5_enable_web_assembly")&&this.C&&this.l&&Dfa(this.C).then(function(e){e=e.version();"string"===typeof e&&d.l.Ja("wasm",
e)});
c={};this.Mc=(c.airplayactivechange=this.HE,c.airplayavailabilitychange=this.IE,c.beginseeking=this.WE,c.endseeking=this.fF,c.internalAbandon=this.pC,c.internalaudioformatchange=this.nC,c.internalvideodatachange=this.Rd,c.internalvideoformatchange=this.tC,c.liveviewshift=this.lF,c.playbackstalledatstart=this.bG,c.progresssync=this.KF,c.onLoadProgress=this.mF,c.SEEK_COMPLETE=this.rC,c.SEEK_TO=this.XF,c.onVideoProgress=this.pG,c.onLoadedMetadata=this.oF,c.onDompaused=this.aF,c.playbackready=this.EF,
c.statechange=this.jA,c.connectionissue=this.xo,c.newelementrequired=this.aA,c.heartbeatparams=this.oC,c.videoelementevent=this.sC,c.drmoutputrestricted=this.eF,c.requestmediasource=this.NF,c.signatureexpired=this.ZF,c.localmediachange=this.qC,c);this.xa=new g.TA(this);g.G(this,this.xa);c=10;g.my(this.i)&&(c=3);g.Ay(this.i)&&(c=g.Q(this.i.experiments,"tvhtml5_unplugged_preload_cache_size"));this.Ka=new QF(c,function(e){e!==g.T(d,e.getPlayerType())&&e.dispose()});
g.G(this,this.Ka);this.ub=this.Ua=-1;this.Ya=new g.H(this.template.resize,16,this.template);g.G(this,this.Ya);dka(this);this.ea=new yF(this.Fa,this.i,this.l);this.Aa=new NE(this.Fa);g.G(this,this.Aa);Yga(this.i.deviceParams.c);this.events.Y(this.Fa,g.$A("appapi"),this.LE);this.events.Y(this.Fa,"crx_appapi",this.ME);this.events.Y(this.Fa,g.$A("appad"),this.Mz);this.events.Y(this.Fa,"crx_appad",this.Mz);this.S("html5_clip_seek_to_start_behavior_killswitch")?this.events.Y(this.Fa,"crx_applooprange",
this.SA):this.events.Y(this.Fa,"crx_applooprange",this.Sq);this.events.Y(this.Fa,"presentingplayerstatechange",this.Ng);this.events.Y(this.Fa,"resize",this.PF);this.template.Na(jf(a));this.events.Y(this.Fa,"offlineslatestatechange",this.DF);this.Xb=eka(this,this.template.element);g.G(this,this.Xb);this.i.Ke&&(this.S("woffle_orchestration")?this.N=new $D(this.i,this.Fa,xO(this,1),function(){return d.od()}):this.S("hoffle_save")?this.T=new pA(this.Fa,xO(this,1),function(){return d.od()}):Pca()&&mfa(),
this.S("woffle_entity_key_deserialization_performance")&&hk(Wfa));
this.i.ma&&(g.vB.ux=g.DC);fka(this);this.G.tick("fs");gka(this);this.D=null;this.i.ma&&Cfa(this.C);g.fy(this.C.L.V())&&rB(this.C,"music");Yx(this.C.L.V())&&rB(this.C,"embed");this.S("web_player_sentinel_is_uniplayer")||g.to(Error("Player flag missing: web_player_sentinel_is_uniplayer"));this.Oc=hka(this);if(a=g.Q(this.i.experiments,"html5_block_pip_safari_delay"))this.Bb=new g.H(this.Dx,a,this),g.G(this,this.Bb);this.K()};
hka=function(a){function b(c){if(c.stack&&-1!==c.stack.indexOf("player"))(a.u||a.l).C.onError("player.exception",g.pq({n:c.name,m:c.message}))}
wo.subscribe("handleError",b);cj.push(b);return function(){wo.unsubscribe("handleError",b);var c=cj.indexOf(b);-1!==c&&cj.splice(c,1)}};
cka=function(a){var b=new g.zN(a.i,1,a.G,a.template,function(c,d){for(var e=[],f=1;f<arguments.length;++f)e[f-1]=arguments[f];return a.ag.U.apply(a.ag,[c].concat(g.oa(e)))},function(){return a.Fa.getVisibilityState()},a.visibility);
b.setPlaybackRate(a.i.B?1:zO(a,ika()));Un(b,a.qb,a);return b};
bka=function(a){var b="",c=GG(a);0===c.indexOf("//")&&(c=a.i.protocol+":"+c);var d=c.lastIndexOf("/base.js");-1!==d&&(b=c.substring(0,d+1));if(c=Error().stack)if(c=c.match(/\((.*?\/(debug-)?player-.*?):\d+:\d+\)/))c=c[1],c.includes(b)||g.to(Error("Player module URL mismatch: "+(c+" vs "+b+".")));b=new g.oB(a.Fa,b);jka(a,b);return b};
jka=function(a,b){var c={};c=(c.destroyed=function(){a.i.l&&a.u?a.Fa.Ga("onApiChange",a.u.getPlayerType()):a.Fa.Ga("onApiChange")},c);
b.u=c};
BO=function(a,b){var c=a.isVideoInfoVisible();a.X||(a.X=new $G(a.Fa),g.G(a,a.X),g.QA(a.Fa,a.X.element,4));var d=a.X;b?d.show():d.hide();AO(a)&&c!==b&&g.OA(a.C).nU();a=a.u;b&&a&&a.Ja("sfn","1",!0)};
CO=function(a){a.B=a.i.deviceHasDisplay?tE.pop()||new g.LB(g.sf("VIDEO")):new g.LB(g.sf("AUDIO"));g.G(a,a.B);a.u&&DE(a.u,a.B);try{a.i.Ya?(a.Ba&&a.events.Fc(a.Ba),a.Ba=a.events.Y(a.B,"volumechange",a.wF)):(a.B.nm(a.cf.muted),a.B.setVolume(a.cf.volume/100))}catch(d){a.Uc("html5.missingapi","UNSUPPORTED_DEVICE","setvolume.1;emsg."+(d.message&&d.message.replace(/[;:,]/g,"_")));return}g.Tn(a.xa);kka(a);var b=a.template;b.yb=a.B.wd();b.Wp=!1;b.yb.parentNode||g.vf(b.Gs,b.yb,0);b.Jq=new g.Lf(0,0,0,0);QG(b);
IG(b);g.Nh(b.yb,"video-stream");g.Nh(b.yb,FG.MAIN_VIDEO);var c=b.app.V();c.ld&&b.yb.setAttribute("data-no-fullscreen","true");c.Kd&&(b.yb.setAttribute("webkit-playsinline",""),b.yb.setAttribute("playsinline",""));c.Tg&&b.yb&&b.Y(b.yb,"click",b.yb.play,b.yb);try{a.B.jl()}catch(d){a.Uc("html5.missingapi","UNSUPPORTED_DEVICE","activate.1;emsg."+(d.message&&d.message.replace(/[;:,]/g,"_")))}};
HO=function(a,b){if(a.u!==b){a.K("start set presenting player, type "+b.getPlayerType()+", vid "+b.getVideoData().videoId);var c=null;a.u&&(c=a.u.getPlayerState(),a.K(),xB(a.C,3),g.DO(a,"cuerangesremoved",cK(a.u.T)||[]),a.Aa&&!b.isGapless()&&a.u.isGapless()&&a.B&&a.B.stopVideo(),EO(a));FO(a,b);a.u=b;a.B&&DE(b,a.B);Un(b,a.Mc,a);a.Rd("newdata",b,b.getVideoData());c&&!tF(c,b.getPlayerState())&&a.jA(new g.uE(b.getPlayerState(),c));b.ea.isFinished()&&a.Rd("dataloaded",b,b.getVideoData());(c=(c=b.getVideoData().u)&&
c.video)&&a.Fa.Ga("onPlaybackQualityChange",c.quality);g.DO(a,"cuerangesadded",cK(a.u.T)||[]);c=b.getPlayerState();g.S(c,2)?GO(a):g.S(c,8)&&b.playVideo();a.K()}};
GO=function(a){if(!lka(a)){var b=a.l.uc();b&&(b=b.An(),b instanceof Promise&&b.catch(function(){}));
IO(a,wF(a.hc()))}};
kka=function(a){var b=a.B;Nv()?a.xa.Y(b,"webkitpresentationmodechanged",a.WF):Mv()&&(a.xa.Y(b,"enterpictureinpicture",function(){a.pm(!0)}),a.xa.Y(b,"leavepictureinpicture",function(){a.pm(!1)}));
cy&&(a.xa.Y(b,"webkitbeginfullscreen",function(){a.Qh(3)}),a.xa.Y(b,"webkitendfullscreen",function(){a.Qh(0)}))};
FO=function(a,b){if(b!==a.l){var c=b.getPlayerType();a.Wb[c]=b}};
EO=function(a){a.K();a.u&&(a.u.Xe(),Vn(a.u,a.Mc,a));a.u=null;a.K()};
g.T=function(a,b){return b?1===b?a.l:a.getVideoData().enableServerStitchedDai&&2===b?a.u:a.Wb[b]||null:a.u};
xO=function(a,b){var c=a.G;2===b&&(c=new UA(a.i));return new g.zN(a.i,b,c,a.template,function(d,e){for(var f=[],h=1;h<arguments.length;++h)f[h-1]=arguments[h];return a.ag.U.apply(a.ag,[d].concat(g.oa(f)))},function(){return a.Fa.getVisibilityState()},a.visibility)};
g.JO=function(a,b){return a.Cc(b)?a.l:b};
KO=function(a,b){var c=a.u;return c&&b===a.l&&a.Cc(b)&&a.Cc(c)?c:b};
LO=function(a){a.K();var b=a.getVideoData(),c=10<b.lengthSeconds,d=a.C;d.Mx();rB(d,"attribution",void 0,!1,!0);rB(d,"embed");rB(d,"inline_preview");rB(d,"kids");rB(d,"remote");rB(d,"miniplayer");rB(d,"music");rB(d,"captions",void 0,!0);rB(d,"unplugged");rB(d,"ypc",void 0,!1,!0);rB(d,"ypc_clickwrap",void 0,!1,!0);rB(d,"yto",void 0,!1,!0);d.B&&c?d.L.jd("endscreen"):rB(d,"endscreen");d.B&&c?(d.L.jd("annotations_module"),d.L.jd("creatorendscreen")):(d.Ls(),rB(d,"creatorendscreen",void 0,!0));d.Nx();uB(d);
c&&iA(b)?a.Tb.Y(a.Fa,"presentingplayerstatechange",a.HF):sB(a.C);a.Fa.U("videoready",b)};
MO=function(a){return a.l.getVideoData()};
NO=function(a){a=MO(a);a.isValid();return iA(a)};
fka=function(a){var b=new g.rz(a.i,a.config.args);Mo("yt-remote-session-screen-id")&&b.T.push("remote");b.isValid()&&(uA(a.l,b,function(){return a.od()}),a.S("html5_androidtv_quic")&&(b=window,"h5vcc"in b&&"settings"in b.h5vcc&&b.h5vcc.settings.set("QUIC",1)),!g.P(a.i.experiments,"html5_delay_initial_loading")&&NO(a)&&(a.i.qc||a.i.bb)&&wA(a.l))};
gka=function(a){a.K();a.Os();var b=a.config.args;CO(a);var c=MO(a);a.Fa.Ga("onVolumeChange",a.cf);if(b&&cB(b)){var d=vy(a.i);d&&!a.xe&&(b.fetch=0);var e=Yx(a.i);e&&!a.xe&&(b.fetch=0);OO(a,b);Yx(a.i)&&a.G.tick("ep_pr_s");d&&!a.xe?PO(a):e&&!a.xe?QO(a):c.isValid()||fB(a.playlist,function(){RO(a)})}HO(a,a.l);
g.S(a.l.getPlayerState(),128)||(b=Jda(a.i.deviceHasDisplay),"fmt.noneavailable"===b?a.Uc("html5.missingapi","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nocodecs.1"):"html5.missingapi"===b?a.Uc(b,"UNSUPPORTED_DEVICE","nocanplaymedia.1"):c&&c.isValid()&&NO(a)&&(a.i.qc||a.i.bb)?SO(a):mka()?(g.Zl("embedsItpPlayedOnReload",{playedOnReload:!0,isLoggedIn:!!a.i.N}),TO(!1),SO(a)):g.Dy(a.i)||UO(a),a.S("web_player_inline_botguard")&&(g.Cr(a.i)?(hk(function(){VO(a)}),hk(function(){up()})):(VO(a),up())),a.K())};
VO=function(a){var b=a.getVideoData().botguardData;a.S("web_player_botguard_inline_skip_config_killswitch")&&(b={},b.interpreterScript=g.I("BG_I",null),b.interpreterUrl=g.I("BG_IU",null),b.program=g.I("BG_P",null));if(b){var c=a.getVideoData().ea||"";a=a.i.cspNonce;c=c?"c1b"in g.jj(c):!1;var d=b.interpreterScript,e=b.interpreterUrl;if(b.interpreterSafeScript){d=b.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=g.oc("From proto message. b/166824318");g.nc(f);g.nc(f);
d=(f=jc())?f.createScript(d):d;d=(new qc(d)).toString()}b.interpreterSafeUrl&&(e=b.interpreterSafeUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"",f=g.oc("From proto message. b/166824318"),g.nc(f),g.nc(f),e=g.uc(e).toString());b.program&&(lq.l?0:!mq||72E5<(0,g.M)()-mq)&&(d||e)&&(eq("bg_i","player_att"),lq.initialize(d,e,b.program,xca,a,c))}};
UO=function(a){a.K();a.Fa.U("initializingmode");a.hj(2);rB(a.C,"remote");g.P(a.i.experiments,"player_cued_miniplayer_module_killswitch")||rB(a.C,"miniplayer");a.K()};
SO=function(a){a.K();if(g.S(a.l.getPlayerState(),128))return!1;NO(a)&&a.i.bb&&(tE.length&&a.qo?(CA(a,{muted:!1,volume:a.cf.volume},!1),WO(a,!1)):tE.length||a.cf.muted||(CA(a,{muted:!0,volume:a.cf.volume},!1),WO(a,!0)));XO(a,1,a.l.getVideoData(),!1);a.Fa.U("initializingmode");HO(a,a.l);a.hj(3);a.i.Wd&&a.pc||(a.Xe(),CO(a),DE(a.l,a.B));SN(a.l);if(g.S(a.l.getPlayerState(),128))return!1;IO(a,3);return a.pc=!0};
AO=function(a){a=g.OA(a.C);return!!a&&a.loaded};
YO=function(a,b){if(!a.I)return!1;var c=.001*a.I.startTimeMs;a=.001*a.I.endTimeMs;return g.cf(b,c)||g.cf(b,a)||b>=c&&b<=a};
zO=function(a,b){var c=a.Fa.getAvailablePlaybackRates();b=Number(b.toFixed(2));a=c[0];c=c[c.length-1];b<=a?b=a:b>=c?b=c:(a=Math.floor(100*b+.001)%5,b=0===a?b:Math.floor(100*(b-.01*a)+.001)/100);return b};
ZO=function(a,b,c){if(a.Cc(c)){c=c.getVideoData();if(a.D)c=b;else{a=a.ea;for(var d=g.u(a.i),e=d.next();!e.done;e=d.next())if(e=e.value,c.Lb===e.Lb){b+=e.Ab/1E3;break}d=b;a=g.u(a.i);for(e=a.next();!e.done;e=a.next()){e=e.value;if(c.Lb===e.Lb)break;var f=e.Ab/1E3;if(f<b)d+=e.durationMs/1E3+f-e.ac/1E3;else break}c=d}return c}return b};
$O=function(a,b){var c;return 3===a.getPresentingPlayerType()?wF(g.OA(a.C).JD()):a.getVideoData().enableServerStitchedDai&&2===b?(null===(c=a.D)||void 0===c?0:c.isAdPlaying(a.getCurrentTime()))?a.Ua:-1:2!==b||a.Cc()?a.Ua:a.ub};
bP=function(a){a.K();aP(a);a.setLoopVideo(!1);a.setLoopRange(null);a.bb={};var b=a.G;if(b.i){var c=b.i;c.i={};c.un={}}b.l=!1;a.D?(b=a.D,a=a.l,a.getPlayerType(),b.K(),eF(b,!1),iF(b),b.i=a):(b=a.ea,a=a.l,1!==a.getPlayerType()&&b.kc("e.invalidParentVideoPlayerType"),b.K(),GF(b,!1),NF(b),b.l=a)};
PO=function(a){var b=cP();if(b)if(!b.list)a.xp();else if(a.playlist&&a.playlist.getPlaylistId()===b.list)if(0<=b.index){var c=b.video;a.Fa.isFullscreen()&&((c=c[a.playlist.index])&&c.encrypted_id!==a.playlist.Qa().videoId||(b.index=a.playlist.index));eB(a.playlist,b);a.Pa&&dP(a,a.Pa)}else a.Pa=null};
QO=function(a,b){var c=(b?b:MO(a)).dw;a.G.tick("ep_pr_r");null!=c&&(eB(a.playlist,c),a.Vb&&fB(a.playlist,function(){RO(a,b)}))};
OO=function(a,b){a.playlist&&(a.playlist.unsubscribe("error",a.xp,a),g.tg(a.playlist),a.playlist=null);b&&(a.xe&&(b.fetch=0),a.playlist=new g.bB(a.i,b),a.playlist.subscribe("error",a.xp,a))};
eP=function(a,b,c,d){b in a.bb||(c=new g.XA(c,d,{id:b,priority:1,namespace:"appad"}),a.l.addCueRange(c),a.bb[b]=c)};
fP=function(a,b){if(!(b in a))return!1;a=a[b];Array.isArray(a)||(a=[a]);a.forEach(function(c){var d=void 0===d?!1:d;if(!(d=Es(Gs(c,nka,null),c,d,"Active View 3rd Party Integration URL"))){var e=void 0===e?!1:e;d=Es(Gs(c,oka,null),c,e,"Google/YouTube Brand Lift URL")}if(!(e=d)){var f=void 0===f?!1:f;e=Es(Gs(c,pka,null),c,f,"Nielsen OCR URL")}g.Tk(c,void 0,e)});
return!0};
IO=function(a,b){a.K();if(a.u){var c=a.u.getPlayerType();if(2===c&&!a.Cc()){a.ub!==b&&(a.ub=b,a.Fa.Ga("onAdStateChange",b));return}if(2===c&&a.Cc()||5===c||6===c||7===c)if(-1===b||0===b||5===b)return}a.Ua!==b&&(a.Ua=b,a.Fa.Ga("onStateChange",b))};
qka=function(a,b,c,d){d=void 0===d?Infinity:d;a.K();c=c||a.u.getPlayerType();var e;g.P(a.i.experiments,"html5_gapless_preloading")&&(e=XO(a,c,b,!0));e||(e=xO(a,c),uA(e,b,function(){return a.od()}));
a.Dp(e,d)};
rka=function(a,b,c,d){var e=gP(c,b.videoId,b.Lb);a.K();b.Gb=!0;var f=a.u&&e===gP(a.u.getPlayerType(),a.u.getVideoData().videoId,a.u.getVideoData().Lb)?a.u:xO(a,c);uA(f,b,function(){return a.od()});
!g.P(a.i.experiments,"unplugged_tvhtml5_video_preload_no_dryrun")&&1===c&&g.Ay(a.i)||wA(f,!0);a.Ka.set(e,f,d||3600)};
gP=function(a,b,c){return a+"_"+b+"_"+c};
XO=function(a,b,c,d){if(!f){var e=gP(b,c.videoId,c.Lb);var f=a.Ka.get(e);if(!f)return null;a.Ka.remove(e);if(g.S(f.getPlayerState(),128))return f.dispose(),null}if(f===g.T(a,b))return f;if((f.getVideoData().oauthToken||c.oauthToken)&&f.getVideoData().oauthToken!==c.oauthToken)return null;d||a.wp(f);return f};
hP=function(a,b,c){c=g.T(a,c);b&&c===a.l&&(c.getVideoData().Mc=!0)};
iP=function(a,b,c){a.K();var d=g.T(a,c);d&&(a.cancelPlayback(4,c),uA(d,b,function(){return a.od()}),2===c&&a.l&&mM(a.l.C,b.clientPlaybackNonce,b.zc||"",b.breakType||0),d===a.l&&(a.hj(1),UO(a)));
a.K()};
jP=function(a,b,c,d,e){b=Eca(b,c,d,e);(c=Yx(a.i)&&!0)&&!a.xe&&(b.fetch=0);OO(a,b);Yx(a.i)&&a.G.tick("ep_a_pr_s");c&&!a.xe?(c=MO(a),hB(c,b).then(function(f){a.Vb=!0;QO(a,f)})):fB(a.playlist,function(){RO(a)});
Yx(a.i)&&a.G.tick("ep_a_pr_r")};
RO=function(a,b){var c=Yx(a.i)&&!0,d=c&&b?b:a.playlist.Qa();b=c&&b?b:a.getVideoData();d&&(b.Yf&&(a.i.qc||a.i.bb)||!a.Da?(b=b.Mc,d=a.Si(d),b&&hP(a,d)):iP(a,d));Yx(a.i)&&a.G.tick("ep_p_l");a.Vb=!1;a.Fa.Ga("onPlaylistUpdate")};
lka=function(a){if(a.playlist&&ey(a.i)&&a.Gn()){var b=g.P(a.i.experiments,"html5_player_autonav_logging");a.nextVideo(!1,b);return!0}return!1};
dP=function(a,b){var c=g.Na(b);c?((b=cP())&&b.list&&c(),a.Pa=null):a.Pa=b};
cP=function(){var a=g.Na("yt.www.watch.lists.getState");return a?a():null};
kP=function(a,b,c,d,e,f){b={id:b,namespace:"appapi"};"chapter"===f?(b.style=WA.CHAPTER_MARKER,b.visible=!0):isNaN(e)||("ad"===f?b.style=WA.AD_MARKER:(b.style=WA.TIME_MARKER,b.color=e),b.visible=!0);a.Ym([new g.XA(1E3*c,1E3*d,b)],1);return!0};
g.lP=function(a){var b=(0,g.M)(),c=a.getCurrentTime();a=a.getVideoData();c=1E3*(c-a.startSeconds);a.isLivePlayback&&(c=0);return b-Math.max(c,0)};
CA=function(a,b,c){a.i.Ka&&(a.cf=b,b.muted||WO(a,!1),c&&a.i.pc&&!a.i.Ya&&ska({volume:Math.floor(b.volume),muted:b.muted}),mP(a),c=Lv&&a.B&&!a.B.Me(),!a.i.Ya||c)&&(b=g.dc(b),a.i.pc||(b.unstorable=!0),a.Fa.Ga("onVolumeChange",b))};
mP=function(a){var b=a.getVideoData();if(!b.Xb){b=a.i.Ya?1:kA(b);var c=a.B;c.nm(a.cf.muted);c.setVolume(a.cf.volume*b/100)}};
WO=function(a,b){b!==a.qo&&(a.qo=b,a.Fa.Ga("onMutedAutoplayChange",b))};
nP=function(a){var b=g.On(!0);return b&&(b===a.template.element||a.B&&b===a.B.wd())?b:null};
pP=function(a,b){var c=window.screen&&window.screen.orientation;if((g.P(a.i.experiments,"lock_fullscreen2")||a.i.S("embeds_enable_mobile_custom_controls")&&a.i.u)&&c&&c.lock&&(!Lv||!oP))if(b){b=0===c.type.indexOf("portrait");var d=a.template.getVideoAspectRatio(),e=b;1>d?e=!0:1<d&&(e=!1);if(!a.Ha||e!==b){c=c.lock(e?"portrait":"landscape");if(null!=c)c["catch"](g.Oa);a.Ha=!0}}else a.Ha&&(a.Ha=!1,c.unlock())};
g.DO=function(a,b,c){a.Fa.U(b,c);var d=g.my(a.i)||g.ny(a.i)||g.dy(a.i);if(c&&d){switch(b){case "cuerangemarkersupdated":var e="onCueRangeMarkersUpdated";break;case "cuerangesadded":e="onCueRangesAdded";break;case "cuerangesremoved":e="onCueRangesRemoved"}e&&a.Fa.Ga(e,c)}};
qP=function(a,b,c,d,e,f){c=void 0===c?!0:c;f=void 0===f?!1:f;var h=g.T(a,e);if(!h||(2!==h.getPlayerType()||a.Cc(h)||f)&&!g.fA(h.getVideoData()))3===a.getPresentingPlayerType()?g.OA(a.C).Kh("control_seek"):(h===a.l&&a.I&&!YO(a,b)&&a.setLoopRange(null),a.seekTo(b,c,d,e))};
rP=function(a,b,c,d){if(!a.Xa){c&&(a.Xe(),CO(a));a.Xa=!0;c=g.T(a);c.D.B=!0;c.Fr("staleconfig",{reason:b});var e=a.getVideoData(),f={};f.video_id=e.videoId;f.adformat=e.adFormat;a.S("propagate_aqi_on_player_reload")&&e.adQueryId&&(f.ad_query_id=e.adQueryId);e.isLivePlayback?Rz(e)&&g.By(a.i)&&(f.live_utc_start=c.Nd(),f.resume="1"):(f.start=c.getCurrentTime(),f.resume="1");e.W&&(f.vvt=e.W);e.Aa&&(f.vss_credentials_token=e.Aa,f.vss_credentials_token_type=e.uf);e.oauthToken&&(f.oauth_token=e.oauthToken);
f.autoplay=1;f.reload_count=e.Pa+1;f.reload_reason=b;e.Am&&(f.unplugged_partner_opt_out=e.Am);e.Vb&&(f.ypc_is_premiere_trailer=e.Vb);a.loadVideoByPlayerVars(f,void 0,d)}};
sP=function(a){var b=a.getVideoData().Xb,c=a.i.Da,d=a.B;b||c?d.Qs():(d.Rs(),CA(a,a.cf))};
eka=function(a,b){return g.P(a.i.experiments,"html5_enable_embedded_player_visibility_signals")&&Yx(a.i)?new EG(b,a.i.S("embeds_enable_intersection_observer_v2")):null};
aP=function(a){var b=yB(a.Za());b&&b.created&&(a.K(),b.destroy())};
tP=function(a,b){b.bounds=a.getBoundingClientRect();for(var c=g.u(["display","opacity","visibility","zIndex"]),d=c.next();!d.done;d=c.next())d=d.value,b[d]=g.Xf(a,d);b.hidden=!!a.hidden};
dka=function(a){var b=a.i,c=document,d=c.requestStorageAccess&&c.hasStorageAccess;g.P(b.experiments,"embeds_enable_request_storage_access_safari_itp")&&g.nm&&d&&b.B?Nk()||b.Ua?(g.Zl("embedsStorageAccessNotChecked",{isIosWebview:Nk(),isPemPlayer:b.Ua}),a.Ma=!1):c.hasStorageAccess().then(function(e){g.Zl("embedsHasStorageAccessResult",{hasCookieAccess:e,resultedInError:!1});a.Ma=!e},function(e){g.Zl("embedsHasStorageAccessResult",{hasCookieAccess:!1,
resultedInError:!0});g.to(Error("Embeds ITP Error: "+e));a.Ma=!1}):a.Ma=!1};
uP=function(a,b){var c=void 0;g.my(a.i)&&g.rj(b)&&g.qj(b)&&(a=g.jA(a.getVideoData()))&&(c={Authorization:"Bearer "+a});g.Tk(b,void 0,void 0,c)};
vP=function(a,b){b.forEach(function(c){uP(a,c)})};
GG=function(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:a.config.assets&&a.config.assets.js?a.config.assets.js:""};
aa=[];ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
ia=fa(this);la("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.i=e;ka(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d=0;return b});
la("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ia[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ka(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ma(ea(this))}})}return a});
var pa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},tka=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=pa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),wP;
if("function"==typeof Object.setPrototypeOf)wP=Object.setPrototypeOf;else{var xP;a:{var uka={a:!0},yP={};try{yP.__proto__=uka;xP=yP.a;break a}catch(a){}xP=!1}wP=xP?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=wP;
sa.prototype.I=function(a){this.l=a};
sa.prototype.return=function(a){this.u={return:a};this.i=this.C};
sa.prototype.fb=function(a){this.i=a};
la("Reflect",function(a){return a?a:{}});
la("Reflect.construct",function(){return tka});
la("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
la("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
la("Array.prototype.find",function(a){return a?a:function(b,c){return Ea(this,b,c).oB}});
la("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var h=0;h<f&&c<e;)if(d[c++]!=b[h++])return!1;return h>=f}});
la("String.prototype.repeat",function(a){return a?a:function(b){var c=Da(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
la("Object.setPrototypeOf",function(a){return a||ra});
var vka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Fa(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||vka});
la("Promise",function(a){function b(h){this.dc=0;this.ej=void 0;this.i=[];this.C=!1;var l=this.l();try{h(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.i=null}
function d(h){return h instanceof b?h:new b(function(l){l(h)})}
if(a)return a;c.prototype.l=function(h){if(null==this.i){this.i=[];var l=this;this.u(function(){l.C()})}this.i.push(h)};
var e=ia.setTimeout;c.prototype.u=function(h){e(h,0)};
c.prototype.C=function(){for(;this.i&&this.i.length;){var h=this.i;this.i=[];for(var l=0;l<h.length;++l){var m=h[l];h[l]=null;try{m()}catch(n){this.B(n)}}}this.i=null};
c.prototype.B=function(h){this.u(function(){throw h;})};
b.prototype.l=function(){function h(n){return function(p){m||(m=!0,n.call(l,p))}}
var l=this,m=!1;return{resolve:h(this.T),reject:h(this.u)}};
b.prototype.T=function(h){if(h===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(h instanceof b)this.W(h);else{a:switch(typeof h){case "object":var l=null!=h;break a;case "function":l=!0;break a;default:l=!1}l?this.N(h):this.B(h)}};
b.prototype.N=function(h){var l=void 0;try{l=h.then}catch(m){this.u(m);return}"function"==typeof l?this.ea(l,h):this.B(h)};
b.prototype.u=function(h){this.D(2,h)};
b.prototype.B=function(h){this.D(1,h)};
b.prototype.D=function(h,l){if(0!=this.dc)throw Error("Cannot settle("+h+", "+l+"): Promise already settled in state"+this.dc);this.dc=h;this.ej=l;2===this.dc&&this.X();this.G()};
b.prototype.X=function(){var h=this;e(function(){if(h.I()){var l=ia.console;"undefined"!==typeof l&&l.error(h.ej)}},1)};
b.prototype.I=function(){if(this.C)return!1;var h=ia.CustomEvent,l=ia.Event,m=ia.dispatchEvent;if("undefined"===typeof m)return!0;"function"===typeof h?h=new h("unhandledrejection",{cancelable:!0}):"function"===typeof l?h=new l("unhandledrejection",{cancelable:!0}):(h=ia.document.createEvent("CustomEvent"),h.initCustomEvent("unhandledrejection",!1,!0,h));h.promise=this;h.reason=this.ej;return m(h)};
b.prototype.G=function(){if(null!=this.i){for(var h=0;h<this.i.length;++h)f.l(this.i[h]);this.i=null}};
var f=new c;b.prototype.W=function(h){var l=this.l();h.tp(l.resolve,l.reject)};
b.prototype.ea=function(h,l){var m=this.l();try{h.call(l,m.resolve,m.reject)}catch(n){m.reject(n)}};
b.prototype.then=function(h,l){function m(r,t){return"function"==typeof r?function(v){try{n(r(v))}catch(y){p(y)}}:t}
var n,p,q=new b(function(r,t){n=r;p=t});
this.tp(m(h,n),m(l,p));return q};
b.prototype.catch=function(h){return this.then(void 0,h)};
b.prototype.tp=function(h,l){function m(){switch(n.dc){case 1:h(n.ej);break;case 2:l(n.ej);break;default:throw Error("Unexpected state: "+n.dc);}}
var n=this;null==this.i?f.l(m):this.i.push(m);this.C=!0};
b.resolve=d;b.reject=function(h){return new b(function(l,m){m(h)})};
b.race=function(h){return new b(function(l,m){for(var n=g.u(h),p=n.next();!p.done;p=n.next())d(p.value).tp(l,m)})};
b.all=function(h){var l=g.u(h),m=l.next();return m.done?d([]):new b(function(n,p){function q(v){return function(y){r[v]=y;t--;0==t&&n(r)}}
var r=[],t=0;do r.push(void 0),t++,d(m.value).tp(q(r.length-1),p),m=l.next();while(!m.done)})};
return b});
la("Array.prototype.findIndex",function(a){return a?a:function(b,c){return Ea(this,b,c).Py}});
la("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
la("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
la("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Da(this,b,"includes").indexOf(b,c||0)}});
la("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push([d,b[d]]);return c}});
la("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
la("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
la("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
la("Array.prototype.flat",function(a){return a?a:function(b){b=void 0===b?1:b;for(var c=[],d=0;d<this.length;d++){var e=this[d];Array.isArray(e)&&0<b?(e=Array.prototype.flat.call(e,b-1),c.push.apply(c,e)):c.push(e)}return c}});
la("WeakMap",function(a){function b(m){this.i=(l+=Math.random()+1).toString();if(m){m=g.u(m);for(var n;!(n=m.next()).done;)n=n.value,this.set(n[0],n[1])}}
function c(){}
function d(m){var n=typeof m;return"object"===n&&null!==m||"function"===n}
function e(m){if(!Fa(m,h)){var n=new c;ka(m,h,{value:n})}}
function f(m){var n=Object[m];n&&(Object[m]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return n(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),n=Object.seal({}),p=new a([[m,2],[n,3]]);if(2!=p.get(m)||3!=p.get(n))return!1;p.delete(m);p.set(n,4);return!p.has(m)&&4==p.get(n)}catch(q){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,n){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!Fa(m,h))throw Error("WeakMap key fail: "+m);m[h][this.i]=n;return this};
b.prototype.get=function(m){return d(m)&&Fa(m,h)?m[h][this.i]:void 0};
b.prototype.has=function(m){return d(m)&&Fa(m,h)&&Fa(m[h],this.i)};
b.prototype.delete=function(m){return d(m)&&Fa(m,h)&&Fa(m[h],this.i)?delete m[h][this.i]:!1};
return b});
la("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
la("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var n=l.i;return ma(function(){if(n){for(;n.head!=l.i;)n=n.previous;for(;n.next!=n.head;)return n=n.next,{done:!1,value:m(n)};n=null}return{done:!0,value:void 0}})}
function d(l,m){var n=m&&typeof m;"object"==n||"function"==n?f.has(m)?n=f.get(m):(n=""+ ++h,f.set(m,n)):n="p_"+m;var p=l.l[n];if(p&&Fa(l.l,n))for(l=0;l<p.length;l++){var q=p[l];if(m!==m&&q.key!==q.key||m===q.key)return{id:n,list:p,index:l,ue:q}}return{id:n,list:p,index:-1,ue:void 0}}
function e(l){this.l={};this.i=b();this.size=0;if(l){l=g.u(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.u([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var n=m.entries(),p=n.next();if(p.done||p.value[0]!=l||"s"!=p.value[1])return!1;p=n.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!n.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var n=d(this,l);n.list||(n.list=this.l[n.id]=[]);n.ue?n.ue.value=m:(n.ue={next:this.i,previous:this.i.previous,head:this.i,key:l,value:m},n.list.push(n.ue),this.i.previous.next=n.ue,this.i.previous=n.ue,this.size++);return this};
e.prototype.delete=function(l){l=d(this,l);return l.ue&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.l[l.id],l.ue.previous.next=l.ue.next,l.ue.next.previous=l.ue.previous,l.ue.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).ue};
e.prototype.get=function(l){return(l=d(this,l).ue)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var n=this.entries(),p;!(p=n.next()).done;)p=p.value,l.call(m,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
la("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push(b[d]);return c}});
la("Set",function(a){function b(c){this.i=new Map;if(c){c=g.u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
la("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var h=0;!(f=b.next()).done;)e.push(c.call(d,f.value,h++))}else for(f=b.length,h=0;h<f;h++)e.push(c.call(d,b[h],h));return e}});
la("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
la("Int8Array.prototype.fill",Ha);la("Uint8Array.prototype.fill",Ha);la("Uint8ClampedArray.prototype.fill",Ha);la("Int16Array.prototype.fill",Ha);la("Uint16Array.prototype.fill",Ha);la("Int32Array.prototype.fill",Ha);la("Uint32Array.prototype.fill",Ha);la("Float32Array.prototype.fill",Ha);la("Float64Array.prototype.fill",Ha);la("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
la("String.prototype.padStart",function(a){return a?a:function(b,c){var d=Da(this,null,"padStart");b-=d.length;c=void 0!==c?String(c):" ";return(0<b&&c?c.repeat(Math.ceil(b/c.length)).substring(0,b):"")+d}});
la("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
la("Object.fromEntries",function(a){return a?a:function(b){var c={};if(!(Symbol.iterator in b))throw new TypeError(""+b+" is not iterable");b=b[Symbol.iterator].call(b);for(var d=b.next();!d.done;d=b.next()){d=d.value;if(Object(d)!==d)throw new TypeError("iterable for fromEntries should yield objects");c[d[0]]=d[1]}return c}});
la("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
la("WeakSet",function(a){function b(c){this.i=new WeakMap;if(c){c=g.u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}}
if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),d=Object.seal({}),e=new a([c]);if(!e.has(c)||e.has(d))return!1;e.delete(c);e.add(d);return!e.has(c)&&e.has(d)}catch(f){return!1}}())return a;
b.prototype.add=function(c){this.i.set(c,!0);return this};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.delete=function(c){return this.i.delete(c)};
return b});
la("Number.parseInt",function(a){return a||parseInt});
g.B=this||self;Ma=/^[\w+/_-]+[=]{0,2}$/;Ka=null;Ta="closure_uid_"+(1E9*Math.random()>>>0);Ua=0;g.bb(g.db,Error);g.db.prototype.name="CustomError";g.bb(eb,g.db);eb.prototype.name="AssertionError";var ob;ob=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.wd=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Ph=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in h){var m=h[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Zc=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
g.rg=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
(0,g.wd)(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
g.Qj=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
g.yu=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");var wka={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var ic;g.mc.prototype.Ig=!0;g.mc.prototype.Bf=function(){return this.i};
var lc={},kc={};var pc={};qc.prototype.Bf=function(){return this.i.toString()};
qc.prototype.toString=function(){return this.i.toString()};g.k=sc.prototype;g.k.Ig=!0;g.k.Bf=function(){return this.i.toString()};
g.k.Ot=!0;g.k.Dl=function(){return 1};
g.k.toString=function(){return this.i+""};
var rc={};var Bc,Cc,Dc,Ec,Fc,Gc,Hc;g.Lc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
Bc=/&/g;Cc=/</g;Dc=/>/g;Ec=/"/g;Fc=/'/g;Gc=/\x00/g;Hc=/[\x00&<>"']/;var Tc,Sc,Rc,Oc;g.k=Pc.prototype;g.k.Ig=!0;g.k.Bf=function(){return this.i.toString()};
g.k.Ot=!0;g.k.Dl=function(){return 1};
g.k.toString=function(){return this.i.toString()};
Tc=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;Sc=/^data:(.*);base64,[a-z0-9+\/]+=*$/i;Rc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;Oc={};g.ld=new Pc("about:invalid#zClosurez",Oc);var fd,ed,dd,gd;g.Xc.prototype.Ig=!0;g.Xc.prototype.Bf=function(){return this.i};
g.Xc.prototype.toString=function(){return this.i.toString()};
g.Wc={};g.ad=new g.Xc("",g.Wc);fd=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/;ed=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;dd=/\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;gd=/\/\*/;a:{var zP=g.B.navigator;if(zP){var AP=zP.userAgent;if(AP){g.md=AP;break a}}g.md=""};g.k=sd.prototype;g.k.Ot=!0;g.k.Dl=function(){return this.l};
g.k.Ig=!0;g.k.Bf=function(){return this.i.toString()};
g.k.toString=function(){return this.i.toString()};
var BP=/^[a-zA-Z0-9-]+$/,xka={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},yka={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},rd={},xd=new sd(g.B.trustedTypes&&g.B.trustedTypes.emptyHTML||"",0,rd);var zka=g.ib(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=td(xd);return!b.parentElement});g.Aka=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};var de,fe;g.Qd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;de=/#|$/;fe=/[?&]($|#)/;le.prototype.clone=function(){return ne(this.l,this.B,this.u-this.B)};
le.prototype.clear=function(){this.l=null;this.i=this.u=this.B=0;this.C=!1};
le.prototype.reset=function(){this.i=this.B};
le.prototype.advance=function(a){this.i+=a};
var me=[];re.prototype.reset=function(){this.i.reset();this.l=this.u=-1};
re.prototype.advance=function(a){this.i.advance(a)};Ae[" "]=g.Oa;var Vf,jn,OG,oP,Ok,Bka,BC,Cka,Vx,CP;Vf=g.nd("Opera");g.Ne=g.nd("Trident")||g.nd("MSIE");jn=g.nd("Edge");g.PG=jn||g.Ne;g.Uf=g.nd("Gecko")&&!(g.Jc(g.md,"WebKit")&&!g.nd("Edge"))&&!(g.nd("Trident")||g.nd("MSIE"))&&!g.nd("Edge");g.Tf=g.Jc(g.md,"WebKit")&&!g.nd("Edge");OG=g.nd("Macintosh");oP=g.nd("Windows");Ok=g.nd("Android");Bka=ye();BC=g.nd("iPad");Cka=g.nd("iPod");Vx=g.ze();g.Wx=g.Jc(g.md,"KaiOS");
a:{var DP="",EP=function(){var a=g.md;if(g.Uf)return/rv:([^\);]+)(\)|;)/.exec(a);if(jn)return/Edge\/([\d\.]+)/.exec(a);if(g.Ne)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Tf)return/WebKit\/(\S+)/.exec(a);if(Vf)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
EP&&(DP=EP?EP[1]:"");if(g.Ne){var FP=De();if(null!=FP&&FP>parseFloat(DP)){CP=String(FP);break a}}CP=DP}var Fe=CP,Ee={},GP;if(g.B.document&&g.Ne){var HP=De();GP=HP?HP:parseInt(Fe,10)||void 0}else GP=void 0;g.mi=GP;var kx,cy,nA,Xx,Lv;kx=od();cy=ye()||g.nd("iPod");nA=g.nd("iPad");Xx=g.nd("Android")&&!(pd()||od()||g.nd("Opera")||g.nd("Silk"));Lv=pd();g.nm=g.qd()&&!g.ze();var Ie={},Oe=null;var Se="function"==typeof Uint8Array,Te=[];g.Pe.prototype.clone=function(){return af(this)};g.IP=document;g.K=window;g.Dka=g.ib(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.B.addEventListener("test",null,b)}catch(c){}return a});try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}var of=!g.Ne||9<=Number(g.mi);!g.Uf&&!g.Ne||g.Ne&&9<=Number(g.mi)||g.Uf&&g.Ge("1.9.1");g.Ne&&g.Ge("9");var Af=g.Ne||Vf||g.Tf;g.k=g.df.prototype;g.k.clone=function(){return new g.df(this.x,this.y)};
g.k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};g.k=g.ff.prototype;g.k.clone=function(){return new g.ff(this.width,this.height)};
g.k.aspectRatio=function(){return this.width/this.height};
g.k.isEmpty=function(){return!hf(this)};
g.k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.k.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};var mf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Kf={HH:"allow-forms",IH:"allow-modals",JH:"allow-orientation-lock",KH:"allow-pointer-lock",LH:"allow-popups",MH:"allow-popups-to-escape-sandbox",NH:"allow-presentation",OH:"allow-same-origin",PH:"allow-scripts",QH:"allow-top-navigation",RH:"allow-top-navigation-by-user-activation"},baa=g.ib(function(){return aaa()});g.k=g.Lf.prototype;g.k.clone=function(){return new g.Lf(this.left,this.top,this.width,this.height)};
g.k.contains=function(a){return a instanceof g.df?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.k.distance=function(a){var b=a.x<this.left?this.left-a.x:Math.max(a.x-(this.left+this.width),0);a=a.y<this.top?this.top-a.y:Math.max(a.y-(this.top+this.height),0);return Math.sqrt(b*b+a*a)};
g.k.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.k.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.k.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.k.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.width*=a;this.top*=b;this.height*=b;return this};var Nf=g.Oa;var Sf={};g.JP=!!window.google_async_iframe_id;g.KP=g.JP&&window.parent||window;var Paa=(new Date).getTime();var gaa={};g.k=lg.prototype;g.k.isEnabled=function(){if(!g.B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{nq:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
g.k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.iU;d=c.LG||!1;var f=c.domain||void 0;var h=c.path||void 0;var l=c.nq}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===l&&(l=-1);this.i.cookie=a+"="+b+(f?";domain="+f:"")+(h?";path="+h:"")+(0>l?"":0==l?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*l)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
g.k.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Lc)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{nq:0,path:b,domain:c});return d};
g.k.Ei=function(){return mg(this).keys};
g.k.Ki=function(){return mg(this).values};
g.k.isEmpty=function(){return!this.i.cookie};
g.k.clear=function(){for(var a=mg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Si=new lg("undefined"==typeof document?null:document);var py={eN:"LIVING_ROOM_APP_MODE_UNSPECIFIED",bN:"LIVING_ROOM_APP_MODE_MAIN",aN:"LIVING_ROOM_APP_MODE_KIDS",cN:"LIVING_ROOM_APP_MODE_MUSIC",dN:"LIVING_ROOM_APP_MODE_UNPLUGGED",ZM:"LIVING_ROOM_APP_MODE_GAMING"};qg.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.l=-1)};
qg.prototype.get=function(a){return!!this.i[a]};g.F.prototype.vf=!1;g.F.prototype.ya=function(){return this.vf};
g.F.prototype.dispose=function(){this.vf||(this.vf=!0,this.ra())};
g.F.prototype.ra=function(){if(this.hf)for(;this.hf.length;)this.hf.shift()()};var xg={};var maa=function(){if(!g.B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.B.addEventListener("test",g.Oa,b),g.B.removeEventListener("test",g.Oa,b)}catch(c){}return a}();zg.prototype.stopPropagation=function(){this.l=!0};
zg.prototype.preventDefault=function(){this.defaultPrevented=!0};g.bb(Ag,zg);var Eka={2:"touch",3:"pen",4:"mouse"};
Ag.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;(b=a.relatedTarget)?g.Uf&&(g.Be(b,"nodeName")||(b=null)):"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Eka[a.pointerType]||"";this.state=a.state;this.i=a;a.defaultPrevented&&Ag.bf.preventDefault.call(this)};
Ag.prototype.stopPropagation=function(){Ag.bf.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ag.prototype.preventDefault=function(){Ag.bf.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ig="closure_listenable_"+(1E6*Math.random()|0);var jaa=0;Cg.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var h=Eg(a,b,d,e);-1<h?(b=a[h],c||(b.rp=!1)):(b=new kaa(b,this.src,f,!!d,e),b.rp=c,a.push(b));return b};
Cg.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Eg(e,b,c,d);return-1<b?(Bg(e[b]),g.sb(e,b),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};var Lg="closure_lm_"+(1E6*Math.random()|0),Qg={},Ng=0,Rg="__closure_events_fn_"+(1E9*Math.random()>>>0);g.bb(g.Sg,g.F);g.Sg.prototype[Ig]=!0;g.k=g.Sg.prototype;g.k.addEventListener=function(a,b,c,d){g.Gg(this,a,b,c,d)};
g.k.removeEventListener=function(a,b,c,d){Og(this,a,b,c,d)};
g.k.dispatchEvent=function(a){var b=this.B;if(b){var c=[];for(var d=1;b;b=b.B)c.push(b),++d}b=this.G;d=a.type||a;if("string"===typeof a)a=new zg(a,b);else if(a instanceof zg)a.target=a.target||b;else{var e=a;a=new zg(d,b);g.gc(a,e)}e=!0;if(c)for(var f=c.length-1;!a.l&&0<=f;f--){var h=a.currentTarget=c[f];e=Tg(h,d,!0,a)&&e}a.l||(h=a.currentTarget=b,e=Tg(h,d,!0,a)&&e,a.l||(e=Tg(h,d,!1,a)&&e));if(c)for(f=0;!a.l&&f<c.length;f++)h=a.currentTarget=c[f],e=Tg(h,d,!1,a)&&e;return e};
g.k.ra=function(){g.Sg.bf.ra.call(this);if(this.Ci){var a=this.Ci,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Bg(d[e]);delete a.listeners[c];a.i--}}this.B=null};
g.k.Cd=function(a,b,c,d){return this.Ci.add(String(a),b,!1,c,d)};
g.k.Fc=function(a,b,c,d){this.Ci.remove(String(a),b,c,d)};Ug.prototype.get=function(){if(0<this.l){this.l--;var a=this.i;this.i=a.next;a.next=null}else a=this.u();return a};var Wg;Zg.prototype.add=function(a,b){var c=lh.get();c.set(a,b);this.l?this.l.next=c:this.i=c;this.l=c};
Zg.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.l=null),a.next=null);return a};
var lh=new Ug(function(){return new fh},function(a){return a.reset()});
fh.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
fh.prototype.reset=function(){this.next=this.scope=this.i=null};var gh,hh=!1,ih=new Zg;ph.prototype.reset=function(){this.context=this.onRejected=this.l=this.i=null;this.u=!1};
var qh=new Ug(function(){return new ph},function(a){a.reset()});
g.oh.prototype.then=function(a,b,c){return wh(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
g.oh.prototype.$goog_Thenable=!0;g.oh.prototype.cancel=function(a){if(0==this.dc){var b=new g.Dh(a);g.jh(function(){yh(this,b)},this)}};
g.oh.prototype.dH=function(a){this.dc=0;nh(this,2,a)};
g.oh.prototype.eH=function(a){this.dc=0;nh(this,3,a)};
g.oh.prototype.DD=function(){for(var a;a=zh(this);)Ah(this,a,this.dc,this.ej);this.ct=!1};
var Fh=Yg;g.bb(g.Dh,g.db);g.Dh.prototype.name="cancel";g.bb(g.H,g.F);g.k=g.H.prototype;g.k.Km=0;g.k.ra=function(){g.H.bf.ra.call(this);this.stop();delete this.i;delete this.l};
g.k.start=function(a){this.stop();this.Km=g.Gh(this.u,void 0!==a?a:this.Pl)};
g.k.stop=function(){this.isActive()&&g.B.clearTimeout(this.Km);this.Km=0};
g.k.Tj=function(){this.stop();this.jw()};
g.k.isActive=function(){return 0!=this.Km};
g.k.jw=function(){this.Km=0;this.i&&this.i.call(this.l)};var Th="StopIteration"in g.B?g.B.StopIteration:{message:"StopIteration",stack:""};Sh.prototype.next=function(){throw Th;};
Sh.prototype.di=function(){return this};g.k=Vh.prototype;g.k.Ki=function(){Xh(this);for(var a=[],b=0;b<this.i.length;b++)a.push(this.l[this.i[b]]);return a};
g.k.Ei=function(){Xh(this);return this.i.concat()};
g.k.isEmpty=function(){return 0==this.u};
g.k.clear=function(){this.l={};this.lj=this.u=this.i.length=0};
g.k.remove=function(a){return Wh(this.l,a)?(delete this.l[a],this.u--,this.lj++,this.i.length>2*this.u&&Xh(this),!0):!1};
g.k.get=function(a,b){return Wh(this.l,a)?this.l[a]:b};
g.k.set=function(a,b){Wh(this.l,a)||(this.u++,this.i.push(a),this.lj++);this.l[a]=b};
g.k.forEach=function(a,b){for(var c=this.Ei(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.k.clone=function(){return new Vh(this)};
g.k.di=function(a){Xh(this);var b=0,c=this.lj,d=this,e=new Sh;e.next=function(){if(c!=d.lj)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)throw Th;var f=d.i[b++];return a?f:d.l[f]};
return e};g.Rk=g.B.JSON.stringify;g.Yh.prototype.l=0;g.Yh.prototype.reset=function(){this.i=this.u=this.B;this.l=0};
g.Yh.prototype.getValue=function(){return this.u};var LP=new WeakMap;(function(){if(oP){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(g.md))?a[1]:"0"}return OG?(a=/1[0|1][_.][0-9_.]+/,(a=a.exec(g.md))?a[0].replace(/_/g,"."):"10"):Ok?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(g.md))?a[1]:""):Bka||BC||Cka?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(g.md))?a[1].replace(/_/g,"."):""):""})();var xaa=function(){if(kx)return $h(/Firefox\/([0-9.]+)/);if(g.Ne||jn||Vf)return Fe;if(Lv)return g.ze()?$h(/CriOS\/([0-9.]+)/):$h(/Chrome\/([0-9.]+)/);if(g.nm&&!g.ze())return $h(/Version\/([0-9.]+)/);if(cy||nA){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(g.md);if(a)return a[1]+"."+a[2]}else if(Xx)return(a=$h(/Android\s+([0-9.]+)/))?a:$h(/Version\/([0-9.]+)/);return""}();g.bb(bi,g.F);g.k=bi.prototype;g.k.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.C;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.C=e+3;d.push(e);return e};
g.k.unsubscribe=function(a,b,c){if(a=this.l[a]){var d=this.i;if(a=g.lb(a,function(e){return d[e+1]==b&&d[e+2]==c}))return this.Jf(a)}return!1};
g.k.Jf=function(a){var b=this.i[a];if(b){var c=this.l[b];0!=this.B?(this.u.push(a),this.i[a+1]=g.Oa):(c&&g.tb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
g.k.U=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var h=c[e];yaa(this.i[h+1],this.i[h+2],d)}else{this.B++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.i[h+1].apply(this.i[h+2],d)}finally{if(this.B--,0<this.u.length&&0==this.B)for(;c=this.u.pop();)this.Jf(c)}}return 0!=e}return!1};
g.k.clear=function(a){if(a){var b=this.l[a];b&&(g.wd(b,this.Jf,this),delete this.l[a])}else this.i.length=0,this.l={}};
g.k.ra=function(){bi.bf.ra.call(this);this.clear();this.u.length=0};g.ci.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,(0,g.Rk)(b))};
g.ci.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.ci.prototype.remove=function(a){this.i.remove(a)};g.bb(di,g.ci);di.prototype.set=function(a,b){di.bf.set.call(this,a,fi(b))};
di.prototype.l=function(a){a=di.bf.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
di.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.bb(gi,di);gi.prototype.set=function(a,b,c){if(b=fi(b)){if(c){if(c<g.ab()){gi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=g.ab()}gi.bf.set.call(this,a,b)};
gi.prototype.l=function(a){var b=gi.bf.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<g.ab()||c&&c>g.ab())gi.prototype.remove.call(this,a);else return b}};g.bb(hi,gi);g.bb(ii,zaa);ii.prototype.clear=function(){var a=vaa(this.di(!0)),b=this;g.wd(a,function(c){b.remove(c)})};g.bb(ji,ii);g.k=ji.prototype;g.k.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
g.k.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.k.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.k.remove=function(a){this.i.removeItem(a)};
g.k.di=function(a){var b=0,c=this.i,d=new Sh;d.next=function(){if(b>=c.length)throw Th;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.k.clear=function(){this.i.clear()};
g.k.key=function(a){return this.i.key(a)};g.bb(ki,ji);g.bb(li,ji);g.bb(oi,ii);var Aaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ni=null;g.k=oi.prototype;g.k.isAvailable=function(){return!!this.i};
g.k.set=function(a,b){this.i.setAttribute(pi(a),b);ui(this)};
g.k.get=function(a){a=this.i.getAttribute(pi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.k.remove=function(a){this.i.removeAttribute(pi(a));ui(this)};
g.k.di=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Sh;d.next=function(){if(b>=c.length)throw Th;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.k.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ui(this)};g.bb(vi,ii);vi.prototype.set=function(a,b){this.l.set(this.i+a,b)};
vi.prototype.get=function(a){return this.l.get(this.i+a)};
vi.prototype.remove=function(a){this.l.remove(this.i+a)};
vi.prototype.di=function(a){var b=this.l.di(!0),c=this,d=new Sh;d.next=function(){for(var e=b.next();e.substr(0,c.i.length)!=c.i;)e=b.next();return a?e.substr(c.i.length):c.l.get(e)};
return d};xi.prototype.getKey=function(){return this.i};
xi.prototype.getValue=function(){return this.l};
xi.prototype.clone=function(){return new xi(this.i,this.l)};g.k=yi.prototype;g.k.remove=function(){var a=this.i,b=a.length,c=a[0];if(!(0>=b)){if(1==b)g.qb(a);else{a[0]=a.pop();a=0;b=this.i;for(var d=b.length,e=b[a];a<d>>1;){var f=2*a+1,h=2*a+2;f=h<d&&b[h].getKey()<b[f].getKey()?h:f;if(b[f].getKey()>e.getKey())break;b[a]=b[f];a=f}b[a]=e}return c.getValue()}};
g.k.Ki=function(){for(var a=this.i,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getValue());return b};
g.k.Ei=function(){for(var a=this.i,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getKey());return b};
g.k.clone=function(){return new yi(this)};
g.k.isEmpty=function(){return 0==this.i.length};
g.k.clear=function(){g.qb(this.i)};g.bb(zi,yi);g.Fka=g.ib(function(){if(g.Ne)return g.Ge("10.0");var a=g.sf("DIV"),b=g.Tf?"-webkit":g.Uf?"-moz":g.Ne?"-ms":Vf?"-o":null,c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");b={style:c};if(!BP.test("div"))throw Error("");if("DIV"in yka)throw Error("");c=null;var d="";if(b)for(h in b)if(Object.prototype.hasOwnProperty.call(b,h)){if(!BP.test(h))throw Error("");var e=b[h];if(null!=e){var f=h;if(e instanceof g.mc)e=g.nc(e);else if("style"==f.toLowerCase()){if(!g.Sa(e))throw Error("");
e instanceof g.Xc||(e=g.bd(e));e=g.Yc(e)}else{if(/^on/i.test(f))throw Error("");if(f.toLowerCase()in xka)if(e instanceof sc)e=tc(e).toString();else if(e instanceof Pc)e=g.Qc(e);else if("string"===typeof e)e=(g.Uc(e)||g.ld).Bf();else throw Error("");}e.Ig&&(e=e.Bf());f=f+'="'+Ic(String(e))+'"';d+=" "+f}}var h="<div"+d;d=void 0;null==d?d=[]:Array.isArray(d)||(d=[d]);!0===wka.div?h+=">":(c=Ad(d),h+=">"+td(c).toString()+"</div>",c=c.Dl());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?c=0:c=null);b=ud(h,
c);if(zka())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=td(b);return""!=g.Wf(a.firstChild,"transition")});g.Ai.prototype.toString=function(){var a=[],b=this.l;b&&a.push(Hi(b,MP,!0),":");var c=this.i;if(c||"file"==b)a.push("//"),(b=this.G)&&a.push(Hi(b,MP,!0),"@"),a.push(Fd(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.getPath())this.i&&"/"!=c.charAt(0)&&a.push("/"),a.push(Hi(c,"/"==c.charAt(0)?Gka:Hka,!0));(c=this.C.toString())&&a.push("?",c);(c=this.u)&&a.push("#",Hi(c,Ika));return a.join("")};
g.Ai.prototype.resolve=function(a){var b=this.clone(),c=!!a.l;c?Bi(b,a.l):c=!!a.G;c?b.G=a.G:c=!!a.i;c?Ci(b,a.i):c=null!=a.B;var d=a.getPath();if(c)Di(b,a.B);else if(c=!!a.I){if("/"!=d.charAt(0))if(this.i&&!this.I)d="/"+d;else{var e=b.getPath().lastIndexOf("/");-1!=e&&(d=b.getPath().substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=g.vc(e,"/");e=e.split("/");for(var f=[],h=0;h<e.length;){var l=e[h++];"."==l?d&&h==e.length&&f.push(""):".."==l?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?b.I=d:c=""!==a.C.toString();c?Ei(b,a.C.clone()):c=!!a.u;c&&(b.u=a.u);return b};
g.Ai.prototype.clone=function(){return new g.Ai(this)};
g.Ai.prototype.getPath=function(){return this.I};
var MP=/[#\/\?@]/g,Hka=/[#\?:]/g,Gka=/[#\?]/g,Caa=/[#\?@]/g,Ika=/#/g;g.k=Gi.prototype;g.k.add=function(a,b){Ii(this);this.u=null;a=Ji(this,a);var c=this.i.get(a);c||this.i.set(a,c=[]);c.push(b);this.l=this.l+1;return this};
g.k.remove=function(a){Ii(this);a=Ji(this,a);return Wh(this.i.l,a)?(this.u=null,this.l=this.l-this.i.get(a).length,this.i.remove(a)):!1};
g.k.clear=function(){this.i=this.u=null;this.l=0};
g.k.isEmpty=function(){Ii(this);return 0==this.l};
g.k.forEach=function(a,b){Ii(this);this.i.forEach(function(c,d){g.wd(c,function(e){a.call(b,e,d,this)},this)},this)};
g.k.Ei=function(){Ii(this);for(var a=this.i.Ki(),b=this.i.Ei(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.k.Ki=function(a){Ii(this);var b=[];if("string"===typeof a)Ki(this,a)&&(b=g.vb(b,this.i.get(Ji(this,a))));else{a=this.i.Ki();for(var c=0;c<a.length;c++)b=g.vb(b,a[c])}return b};
g.k.set=function(a,b){Ii(this);this.u=null;a=Ji(this,a);Ki(this,a)&&(this.l=this.l-this.i.get(a).length);this.i.set(a,[b]);this.l=this.l+1;return this};
g.k.get=function(a,b){if(!a)return b;a=this.Ki(a);return 0<a.length?String(a[0]):b};
g.k.toString=function(){if(this.u)return this.u;if(!this.i)return"";for(var a=[],b=this.i.Ei(),c=0;c<b.length;c++){var d=b[c],e=Fd(d);d=this.Ki(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+Fd(d[f]));a.push(h)}}return this.u=a.join("&")};
g.k.clone=function(){var a=new Gi;a.u=this.u;this.i&&(a.i=this.i.clone(),a.l=this.l);return a};/*


 The MIT License (MIT)

 Copyright (c) 2015-present Dan Abramov

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
var Ni="@@redux/INIT"+Mi(),Gaa="@@redux/REPLACE"+Mi();var Pi="function"===typeof Symbol&&Symbol.observable||"@@observable";g.bb(g.Qi,g.Pe);g.bb(Ri,g.Pe);var Haa=[2,13,14];Ri.prototype.getKey=function(){return g.Ve(this,3)};
g.Qi.prototype.ib=ba(0);var Wi=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.Ia("yt.config_",Wi,void 0);var cj=[];var Oaa=/^[\w.]*$/,Naa={q:!0,search_query:!0},Maa=String(hj);g.sj=new function(){var a=window.document;this.i=window;this.l=a};
g.Ia("yt.ads_.signals_.getAdSignalsString",function(a){return g.ij(g.uj(a))},void 0);var vj="XMLHttpRequest"in g.B?function(){return new XMLHttpRequest}:null;var Bj,Saa,Gj;Bj={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
Saa="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" ");Gj=!1;g.NP=Cj;g.w(g.Ij,g.db);Lj.prototype.then=function(a,b,c){return 1===this.dc&&a?(a=a.call(c,this.i),mh(a)?a:g.Nj(a)):2===this.dc&&b?(a=b.call(c,this.i),mh(a)?a:g.Mj(a)):this};
Lj.prototype.getValue=function(){return this.i};
Lj.prototype.$goog_Thenable=!0;var Jka=0,Oj=g.Tf?"webkit":g.Uf?"moz":g.Ne?"ms":Vf?"o":"",Kka=g.Na("ytDomDomGetNextId")||function(){return++Jka};
g.Ia("ytDomDomGetNextId",Kka,void 0);var Yaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};Sj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};g.Uj=g.B.ytEventsEventsListeners||{};g.Ia("ytEventsEventsListeners",g.Uj,void 0);var Vj=g.B.ytEventsEventsCounter||{count:0};g.Ia("ytEventsEventsCounter",Vj,void 0);var Lka=g.ib(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a}),Wj=g.ib(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});var Ax=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};g.bb(ek,g.F);ek.prototype.N=function(a){void 0===a.i&&Tj(a);var b=a.i;void 0===a.l&&Tj(a);this.i=new g.df(b,a.l)};
ek.prototype.Hi=function(){return this.i||new g.df};
ek.prototype.T=function(){if(this.i){var a=Ax();if(0!=this.B){var b=this.D,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.B);this.l[this.u]=.5<Math.abs((d-this.C)/this.C)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.G();this.C=d}this.B=a;this.D=this.i;this.u=(this.u+1)%4}};
ek.prototype.ra=function(){window.clearInterval(this.I);g.Yj(this.X)};g.w(jk,fk);jk.prototype.start=function(){var a=g.Na("yt.scheduler.instance.start");a&&a()};
jk.prototype.pause=function(){var a=g.Na("yt.scheduler.instance.pause");a&&a()};
g.Pa(jk);jk.getInstance();var yk={};var Mk=cy||nA;var Vk={},cba=0;var Mka=g.B.ytPubsubPubsubInstance||new bi,Xk=g.B.ytPubsubPubsubSubscribedKeys||{},Zk=g.B.ytPubsubPubsubTopicToKeys||{},Yk=g.B.ytPubsubPubsubIsSynchronous||{};bi.prototype.subscribe=bi.prototype.subscribe;bi.prototype.unsubscribeByKey=bi.prototype.Jf;bi.prototype.publish=bi.prototype.U;bi.prototype.clear=bi.prototype.clear;g.Ia("ytPubsubPubsubInstance",Mka,void 0);g.Ia("ytPubsubPubsubTopicToKeys",Zk,void 0);g.Ia("ytPubsubPubsubIsSynchronous",Yk,void 0);g.Ia("ytPubsubPubsubSubscribedKeys",Xk,void 0);var OP;OP=window;g.M=OP.ytcsi&&OP.ytcsi.now?OP.ytcsi.now:OP.performance&&OP.performance.timing&&OP.performance.now&&OP.performance.timing.navigationStart?function(){return OP.performance.timing.navigationStart+OP.performance.now()}:function(){return(new Date).getTime()};var fba=aj("initial_gel_batch_timeout",1E3),tl=Math.pow(2,16)-1,ul=null,sl=0,hl=void 0,ml=0,nl=0,jl=0,ol=!0,gl=g.B.ytLoggingTransportGELQueue_||new Map;g.Ia("ytLoggingTransportGELQueue_",gl,void 0);var el=g.B.ytLoggingTransportTokensToCttTargetIds_||{};g.Ia("ytLoggingTransportTokensToCttTargetIds_",el,void 0);var vl=g.B.ytLoggingGelSequenceIdObj_||{};g.Ia("ytLoggingGelSequenceIdObj_",vl,void 0);var zl=g.Na("ytglobal.prefsUserPrefsPrefs_")||{};g.Ia("ytglobal.prefsUserPrefsPrefs_",zl,void 0);g.k=g.Al.prototype;g.k.get=function(a,b){El(a);Dl(a);a=void 0!==zl[a]?zl[a].toString():null;return null!=a?a:b?b:""};
g.k.set=function(a,b){El(a);Dl(a);if(null==b)throw Error("ExpectedNotNull");zl[a]=b.toString()};
g.k.remove=function(a){El(a);Dl(a);delete zl[a]};
g.k.save=function(){var a=!0;g.J("web_secure_pref_cookie_killswitch")&&(a=!1);Ti(this.i,this.dump(),63072E3,this.l,a)};
g.k.clear=function(){g.ac(zl)};
g.k.dump=function(){var a=[],b;for(b in zl)a.push(b+"="+encodeURIComponent(String(zl[b])));return a.join("&")};
g.Pa(g.Al);var Gl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Il={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};Ll.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,g.ab()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((0,g.Rk)(b))}catch(f){return}else e=escape(b);Ti(a,e,c,this.l)};
Ll.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=g.Si.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ll.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.l;g.Si.remove(""+a,"/",void 0===b?"youtube.com":b)};Nl.prototype.toString=function(){return this.topic};var Nka=g.Na("ytPubsub2Pubsub2Instance")||new bi;bi.prototype.subscribe=bi.prototype.subscribe;bi.prototype.unsubscribeByKey=bi.prototype.Jf;bi.prototype.publish=bi.prototype.U;bi.prototype.clear=bi.prototype.clear;g.Ia("ytPubsub2Pubsub2Instance",Nka,void 0);var Ql=g.Na("ytPubsub2Pubsub2SubscribedKeys")||{};g.Ia("ytPubsub2Pubsub2SubscribedKeys",Ql,void 0);var Sl=g.Na("ytPubsub2Pubsub2TopicToKeys")||{};g.Ia("ytPubsub2Pubsub2TopicToKeys",Sl,void 0);var Rl=g.Na("ytPubsub2Pubsub2IsAsync")||{};
g.Ia("ytPubsub2Pubsub2IsAsync",Rl,void 0);g.Ia("ytPubsub2Pubsub2SkipSubKey",null,void 0);Vl.prototype.Ip=function(a,b){a={};var c=pg();c&&(a.Authorization=c,c=b=null===b||void 0===b?void 0:b.sessionIndex,void 0===c&&(c=Number(g.I("SESSION_INDEX",0)),c=isNaN(c)?0:c),a["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in Wi||(a["X-Origin"]=window.location.origin),g.J("pageid_as_header_web")&&void 0===b&&"DELEGATED_SESSION_ID"in Wi&&(a["X-Goog-PageId"]=g.I("DELEGATED_SESSION_ID")));return a};var hp={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var $l=[],Wl,am=!1;var dm=function(){var a;return function(){a||(a=new Ll("ytidb"));return a}}();
fm.prototype.isSupported=function(){return this.l};
fm.prototype.log=function(){em()&&cm("IS_SUPPORTED_COMPLETED",{isSupported:this.l,lastIsSupported:this.i.isSupported,failureMessage:this.failureMessage,sameResultCount:this.i.resultCount,sameResultDurationMs:Math.floor((0,g.M)()-this.i.createdTimestampMs),canDetectDataOnFailure:this.u})};g.w(g.hm,Error);var PP={},km=(PP.AUTH_INVALID="No user identifier specified.",PP.EXPLICIT_ABORT="Transaction was explicitly aborted.",PP.IDB_NOT_SUPPORTED="IndexedDB is not supported.",PP.MISSING_OBJECT_STORE="Object store not created.",PP.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",PP.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",PP.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",PP.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",PP),QP={},mba=(QP.AUTH_INVALID="ERROR",QP.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",QP.EXPLICIT_ABORT="IGNORED",QP.IDB_NOT_SUPPORTED="ERROR",QP.MISSING_OBJECT_STORE="ERROR",QP.QUOTA_EXCEEDED="WARNING",QP.QUOTA_MAYBE_EXCEEDED="WARNING",QP.UNKNOWN_ABORT="WARNING",QP),RP={},nba=(RP.AUTH_INVALID=!1,RP.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,RP.EXPLICIT_ABORT=!1,RP.IDB_NOT_SUPPORTED=!1,RP.MISSING_OBJECT_STORE=!1,RP.QUOTA_EXCEEDED=!1,RP.QUOTA_MAYBE_EXCEEDED=
!0,RP.UNKNOWN_ABORT=!0,RP);g.w(lm,g.hm);g.w(mm,lm);var oba=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];om.all=function(a){return new om(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Hk:0};f.Hk<a.length;f={Hk:f.Hk},++f.Hk)om.resolve(a[f.Hk]).then(function(h){return function(l){d[h.Hk]=l;e--;0===e&&b(d)}}(f)).catch(function(h){c(h)})})};
om.resolve=function(a){return new om(function(b,c){a instanceof om?a.then(b,c):b(a)})};
om.reject=function(a){return new om(function(b,c){c(a)})};
om.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:rba,e=null!==b&&void 0!==b?b:qba;return new om(function(f,h){"PENDING"===c.state.status?(c.i.push(function(){qm(c,c,d,f,h)}),c.onRejected.push(function(){rm(c,c,e,f,h)})):"FULFILLED"===c.state.status?qm(c,c,d,f,h):"REJECTED"===c.state.status&&rm(c,c,e,f,h)})};
om.prototype.catch=function(a){return this.then(void 0,a)};wm.prototype.advance=function(a){this.cursor.advance(a);return xm(this.request)};
wm.prototype.continue=function(a){this.cursor.continue(a);return xm(this.request)};
wm.prototype.continuePrimaryKey=function(a,b){this.cursor.continuePrimaryKey(a,b);return xm(this.request)};
wm.prototype.getKey=function(){return this.cursor.key};g.k=ym.prototype;g.k.add=function(a,b,c){return Bm(this,[a],{mode:"readwrite",Cg:g.J("ytidb_transaction_enable_retries_core_and_nwl")},function(d){return Dm(d,a).add(b,c)})};
g.k.clear=function(a){return Bm(this,[a],{mode:"readwrite",Cg:g.J("ytidb_transaction_enable_retries_core_and_nwl")},function(b){return Dm(b,a).clear()})};
g.k.close=function(){var a;this.i.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
g.k.count=function(a,b){return Bm(this,[a],{mode:"readonly",Cg:g.J("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return Dm(c,a).count(b)})};
g.k.delete=function(a,b){return Bm(this,[a],{mode:"readwrite",Cg:g.J("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return Dm(c,a).delete(b)})};
g.k.get=function(a,b){return Bm(this,[a],{mode:"readonly",Cg:g.J("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return Dm(c,a).get(b)})};
g.k.getAll=function(a,b,c){return Bm(this,[a],{mode:"readonly",Cg:g.J("ytidb_transaction_enable_retries_core_and_nwl")},function(d){return Dm(d,a).getAll(b,c)})};
g.k=zm.prototype;g.k.add=function(a,b){return um(this.i.add(a,b))};
g.k.clear=function(){return um(this.i.clear()).then(function(){})};
g.k.count=function(a){return um(this.i.count(a))};
g.k.delete=function(a){return a instanceof IDBKeyRange?uba(this,a):um(this.i.delete(a))};
g.k.get=function(a){return um(this.i.get(a))};
g.k.getAll=function(a,b){return"getAll"in IDBObjectStore.prototype?um(this.i.getAll(a,b)):vba(this,a,b)};
g.k.index=function(a){return new Km(this.i.index(a))};
g.k.getName=function(){return this.i.name};
Fm.prototype.abort=function(){this.i.abort();this.aborted=!0;throw new lm("EXPLICIT_ABORT");};
Fm.prototype.commit=function(){var a=this.i;a.commit&&!this.aborted&&a.commit()};
g.k=Km.prototype;g.k.count=function(a){return um(this.i.count(a))};
g.k.delete=function(a){return Lm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
g.k.get=function(a){return um(this.i.get(a))};
g.k.getAll=function(a,b){return"getAll"in IDBIndex.prototype?um(this.i.getAll(a,b)):xba(this,a,b)};
g.k.getKey=function(a){return um(this.i.getKey(a))};
g.k=Mm.prototype;g.k.advance=function(a){this.cursor.advance(a);return Jm(this.request)};
g.k.continue=function(a){this.cursor.continue(a);return Jm(this.request)};
g.k.delete=function(){return um(this.cursor.delete()).then(function(){})};
g.k.getKey=function(){return this.cursor.key};
g.k.getValue=function(){return this.cursor.value};
g.k.update=function(a){return um(this.cursor.update(a))};en.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Nm(a,b,c)};
en.prototype.delete=function(a){a=void 0===a?{}:a;return dn(this.name,a)};
en.prototype.open=function(){var a=this;if(!this.i){var b,c=function(){a.i===b&&(a.i=void 0)},d={blocking:function(f){f.close()},
closed:c,WG:c,upgrade:this.options.upgrade},e=function(){return D(a,function h(){var l=this,m,n,p;return A(h,function(q){switch(q.i){case 1:return va(q,2),x(q,l.l(l.name,l.options.version,d),4);case 4:m=q.l;a:{var r=g.u(Object.keys(l.options.xu));for(var t=r.next();!t.done;t=r.next())if(t=t.value,!m.i.objectStoreNames.contains(t)){r=t;break a}r=void 0}n=r;if(void 0===n){q.fb(5);break}if(l.u){q.fb(6);break}l.u=!0;return x(q,l.delete(),7);case 7:return q.return(e());case 6:throw new mm(n);case 5:return q.return(m);
case 2:p=xa(q);if(p instanceof DOMException?"VersionError"===p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"===p.name:p instanceof Object&&"message"in p&&"An attempt was made to open a database using a lower version than the existing version."===p.message)return q.return(l.l(l.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw p;}})})};
this.i=b=e()}return this.i};var fn=new en("YtIdbMeta",{xu:{databases:!0},upgrade:function(a,b){1>b&&Am(a,"databases",{keyPath:"actualName"})}});var kn;var mn;g.w(rn,en);rn.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.tv?Fba:Eba)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
rn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.tv?qn:Gba)(this.name,a)};g.w(tn,om);tn.reject=om.reject;tn.resolve=om.resolve;tn.all=om.all;var un;g.w(xn,g.Sg);g.w(Bn,g.Sg);var Cn;g.Hn.prototype.isReady=function(){!this.i&&Kl()&&(this.i=g.ql());return!!this.i};var Mba=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),Oba=["/fashion","/feed/fashion_destination","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"];var Ln={};g.w(g.Rn,g.F);g.Rn.prototype.Y=function(a,b,c,d,e){c=ej((0,g.Ya)(c,d||this.D));c={target:a,name:b,callback:c};var f;e&&Lka()&&(f={passive:!0});a.addEventListener(b,c.callback,f);this.u.push(c);return c};
g.Rn.prototype.Fc=function(a){for(var b=0;b<this.u.length;b++)if(this.u[b]==a){this.u.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
g.Rn.prototype.ra=function(){g.Tn(this);g.F.prototype.ra.call(this)};g.bb(g.N,g.F);g.N.prototype.subscribe=function(a,b,c){return this.ya()?0:this.jf.subscribe(a,b,c)};
g.N.prototype.unsubscribe=function(a,b,c){return this.ya()?!1:this.jf.unsubscribe(a,b,c)};
g.N.prototype.Jf=function(a){return this.ya()?!1:this.jf.Jf(a)};
g.N.prototype.U=function(a,b){return this.ya()?!1:this.jf.U.apply(this.jf,arguments)};Wn.prototype.clone=function(){var a=new Wn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==Qa(c)?g.dc(c):c}return a};var xfa=["embedded_player"],Mca=["offline"],Zfa=["offline/get_playback_data_entity"],Lja=["player"],Nja=["next","unplugged/watch_next"];var Xn=Date.now().toString();var ko,SP=g.B.ytLoggingDocDocumentNonce_;SP||(SP=g.Zn(),g.Ia("ytLoggingDocDocumentNonce_",SP,void 0));ko=SP;var dha={GB:0,uI:1,JI:2,KO:3,BK:4,WS:5,BP:6,gR:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};var Qba=1;ao.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
ao.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
ao.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};g.Ia("yt_logging_screen.getRootVeType",fo,void 0);g.Ia("yt_logging_screen.getCurrentCsn",g.io,void 0);g.Ia("yt_logging_screen.getCttAuthInfo",jo,void 0);g.Ia("yt_logging_screen.setCurrentScreen",lo,void 0);var Wba=[{xz:function(a){return"Cannot read property '"+a.key+"'"},
Ju:{TypeError:[{Ef:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{Ef:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{Ef:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{Ef:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{Ef:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{Ef:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{xz:function(a){return"Cannot call '"+a.key+"'"},
Ju:{TypeError:[{Ef:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{Ef:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{Ef:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{Ef:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{Ef:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},
{Ef:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];var mo;var wo=new bi;var vo=new Set,uo=0,Xba=0,xo=0,Vba=[],Yba=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];g.w(yo,Ml);var Go=new Nl("screen-created",yo),Eo=[],cha=$ba,Fo=0;var Oka={kI:29434,tI:3611,NL:3854,IN:42993,ZQ:4724,bS:96370,mH:27686,oH:85013,pH:23462,rH:42016,sH:62407,tH:26926,qH:43781,vH:51236,wH:79148,xH:50160,yH:77504,TH:87907,UH:18630,VH:54445,WH:80935,bI:105675,cI:37521,dI:47786,fI:98349,jI:6827,sI:7282,AI:32276,zI:76278,BI:93911,DI:106531,FI:27259,GI:27262,HI:27263,KI:21759,LI:27107,MI:62936,NI:49568,QI:38408,RI:80637,SI:68727,TI:68728,UI:80353,VI:80356,WI:74610,XI:45707,YI:83962,ZI:83970,aJ:46713,bJ:89711,cJ:74612,dJ:93265,eJ:74611,gJ:113533,hJ:93252,
iJ:99357,kJ:94521,lJ:114252,mJ:113532,nJ:94522,jJ:94583,oJ:88E3,pJ:93253,qJ:93254,rJ:94387,sJ:94388,tJ:93255,uJ:97424,fJ:72502,vJ:110111,wJ:76019,yJ:117092,zJ:117093,xJ:89431,AJ:110466,BJ:77240,CJ:60508,DJ:105350,EJ:73393,FJ:113534,GJ:92098,HJ:84517,IJ:83759,JJ:80357,KJ:86113,LJ:72598,MJ:72733,NJ:107349,OJ:118203,PJ:117431,QJ:117429,RJ:117430,SJ:117432,TJ:120080,UJ:117259,VJ:121692,WJ:97615,XJ:31402,YJ:84774,ZJ:95117,aK:98930,bK:98931,cK:98932,dK:43347,eK:45474,fK:100352,gK:84758,hK:98443,iK:117985,
jK:74613,kK:74614,lK:64502,mK:74615,nK:74616,oK:122224,pK:74617,qK:77820,rK:74618,sK:93278,tK:93274,uK:93275,vK:93276,wK:22110,xK:29433,yK:120541,CK:82047,DK:113550,EK:75836,FK:75837,HK:42352,JK:84512,KK:76065,MK:75989,QK:16623,RK:32594,SK:27240,UK:32633,cL:74858,fL:3945,eL:16989,gL:45520,hL:25488,iL:25492,jL:25494,lL:55760,mL:14057,nL:18451,oL:57204,pL:57203,qL:17897,rL:57205,sL:18198,tL:17898,uL:17909,vL:43980,wL:46220,EL:11721,KL:49954,ML:96369,UL:56251,VL:25624,bM:16906,cM:99999,eM:68172,fM:27068,
iM:47973,jM:72773,kM:26970,lM:26971,mM:96805,nM:17752,oM:73233,pM:109512,qM:22256,rM:14115,sM:22696,tM:89278,uM:89277,vM:109513,wM:43278,xM:43459,yM:43464,zM:89279,AM:43717,BM:55764,CM:22255,DM:89281,EM:40963,FM:43277,GM:43442,HM:91824,KM:120137,MM:96367,PM:36850,QM:72694,RM:37414,SM:36851,TM:121343,UM:73491,VM:54473,WM:43375,XM:46674,kN:32473,lN:72901,mN:72906,nN:50947,oN:50612,pN:50613,qN:50942,rN:84938,sN:84943,tN:84939,uN:84941,vN:84944,wN:84940,xN:84942,yN:35585,zN:51926,AN:79983,BN:63238,CN:18921,
DN:63241,EN:57893,FN:41182,GN:33424,HN:22207,JN:36229,KN:22206,LN:22205,MN:18993,NN:19001,ON:18990,PN:18991,QN:18997,RN:18725,SN:19003,TN:36874,UN:44763,VN:33427,WN:67793,XN:22182,YN:37091,ZN:34650,aO:50617,bO:47261,cO:22287,dO:25144,eO:97917,fO:62397,gO:36961,hO:108035,iO:27426,jO:27857,kO:27846,lO:27854,mO:69692,nO:61411,oO:39299,pO:38696,qO:62520,rO:36382,sO:108701,tO:50663,uO:36387,vO:14908,wO:37533,xO:105443,yO:61635,zO:62274,AO:65702,BO:65703,CO:65701,DO:76256,GO:37671,HO:49953,NO:36216,OO:28237,
PO:39553,QO:29222,RO:26107,SO:38050,TO:26108,VO:120745,UO:26109,WO:26110,XO:66881,YO:28236,ZO:14586,cP:57929,dP:74723,eP:44098,fP:44099,gP:23528,hP:61699,iP:59149,jP:101951,kP:97346,lP:118051,mP:95102,nP:64882,oP:119505,pP:63595,qP:63349,rP:95101,sP:75240,tP:27039,uP:68823,vP:21537,wP:83464,xP:75707,yP:83113,zP:101952,AP:101953,CP:79610,EP:24402,FP:24400,GP:32925,HP:57173,JP:122502,KP:64423,LP:64424,MP:33986,NP:100828,OP:21409,ZP:11070,aQ:11074,bQ:17880,cQ:14001,eQ:30709,fQ:30707,gQ:30711,hQ:30710,
iQ:30708,dQ:26984,jQ:63648,kQ:63649,mQ:51879,rQ:111059,tQ:5754,uQ:20445,xQ:110386,zQ:113746,AQ:66557,FQ:17310,GQ:28631,HQ:21589,IQ:68012,JQ:60480,KQ:31571,OQ:76980,RQ:41577,SQ:45469,UQ:38669,VQ:13768,WQ:13777,YQ:62985,aR:59369,bR:43927,cR:43928,eR:12924,fR:100355,iR:56219,jR:27669,kR:10337,hR:47896,lR:122629,mR:121258,nR:107598,oR:96639,pR:107536,qR:96661,rR:96658,sR:116646,tR:121122,uR:96660,vR:104443,wR:96659,xR:106442,yR:63667,zR:63668,AR:63669,DR:78314,GR:55761,KR:96368,LR:67374,MR:48992,PR:49956,
TR:31961,UR:26388,ZR:23811,aS:5E4,cS:47355,dS:47356,eS:37935,fS:45521,gS:21760,hS:83769,iS:49977,jS:49974,kS:93497,lS:93498,mS:34325,oS:115803,pS:123707,qS:100081,rS:35309,sS:68314,tS:25602,uS:100339,xS:59018,yS:18248,zS:50625,AS:9729,BS:37168,CS:37169,DS:21667,ES:16749,GS:18635,HS:39305,IS:18046,KS:53969,LS:8213,NS:93926,QS:102852,RS:110099,SS:22678,US:69076,XS:100856,ZS:17736,aT:3832,bT:55759,cT:64031,dT:93044,fT:93045,gT:34388,hT:17657,iT:17655,jT:39579,kT:39578,lT:77448,mT:8196,nT:11357,oT:69877,
pT:8197,rT:82039};Io.prototype.clear=function(){this.l.clear();this.i.clear();this.u.clear()};
g.Pa(Io);var Jo=g.ib(function(){var a=new ki;return a.isAvailable()?new hi(a):null}),Ko=g.ib(function(){var a=new li;
return a.isAvailable()?new hi(a):null});var dca=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,eca=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Po={};(function(a,b){function c(f){var h=g.u(f);f=h.next().value;h=na(h);return a.apply(f,h)}
function d(f){f=g.u(f);f.next();f=na(f);return b(e,f)}
b=void 0===b?waa:b;var e=g.Va(a);return function(f){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];l=this||g.B;var m=LP.get(l);m||(m={},LP.set(l,m));return Ce(m,[this].concat(g.oa(h)),c,d)}})(function(a){var b=g.sf("DIV");
a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=g.sf("DIV");cg(a,"200px","200px");b.appendChild(a);document.body.appendChild(b);a=b.offsetWidth-b.clientWidth;g.wf(b);return a});var TP={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},UP;a:{var VP=g.md;VP=VP.toLowerCase();if(-1!=VP.indexOf("android")){var WP=VP.match(/android\s*(\d+(\.\d+)?)[^;|)]*[;)]/);if(WP){var XP=parseFloat(WP[1]);if(100>XP){UP=XP;break a}}var YP=VP.match("("+g.Tb(TP).join("|")+")");UP=YP?TP[YP[0]]:0}else UP=void 0}var by=UP,ay=0<=by;var ZP;var $P=g.md,aQ=$P.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!aQ||2>aQ.length)ZP=void 0;else{var bQ=$P.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);ZP=bQ&&6==bQ.length?Number(bQ[5].replace("_",".")):0}var oA=ZP,vC=0<=oA;vC&&0<=g.md.search("Safari")&&g.md.search("Version");g.Ia("yt.pubsub.publish",g.bl,void 0);Yo.prototype.Yj=function(a,b){var c,d,e;b=(null===(d=null===(c=b.Ry.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars)||[];(a=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar)&&this.replace(b,a)};
Yo.prototype.replace=function(a,b){a=g.u(a);for(var c=a.next();!c.done;c=a.next())delete this.i[c.value.encryptedTokenJarContents];Xo(this,b)};$o.prototype.Yj=function(a){var b,c,d=null===(b=a.responseContext)||void 0===b?void 0:b.locationPlayabilityToken;void 0!==d&&(this.locationPlayabilityToken=d,this.i=void 0,"TVHTML5"===(null===(c=a.responseContext)||void 0===c?void 0:c.clientName)?(this.localStorage=Zo(this))&&this.localStorage.set("yt-location-playability-token",d,15552E3):Ti("YT_CL",JSON.stringify({OT:d}),15552E3,void 0,!0))};var cQ={},cp=(cQ.WEB_UNPLUGGED="^unplugged/",cQ.WEB_UNPLUGGED_ONBOARDING="^unplugged/",cQ.WEB_UNPLUGGED_OPS="^unplugged/",cQ.WEB_UNPLUGGED_PUBLIC="^unplugged/",cQ.WEB_CREATOR="^creator/",cQ.WEB_KIDS="^kids/",cQ.WEB_EXPERIMENTS="^experiments/",cQ.WEB_MUSIC="^music/",cQ.WEB_REMIX="^music/",cQ.WEB_MUSIC_EMBEDDED_PLAYER="^music/",cQ.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",cQ);g.w(fp,ep);var dQ={},ica=(dQ.GET_DATASYNC_IDS=fp,dQ);g.w(kp,ep);g.w(lp,ep);g.w(mp,ep);g.w(np,ep);g.w(op,ep);g.w(pp,ep);qp.prototype.fetch=function(a,b){var c=this,d;if(null===(d=this.l)||void 0===d?0:d.B(a,b))return sh(this.l.u(a,b).catch(function(f){g.to(f)}));
if(this.i){var e=Pd(Rd(5,ge(a,"key")))||"/UNKNOWN_PATH";this.i.start(e)}e=new Request(a,b);return sh(fetch(e).then(function(f){return c.Yj(f)}).catch(function(f){var h,l;
if(null===(h=c.l)||void 0===h?0:h.i(a,b))return f=c.l.l(a,b),null===(l=c.i)||void 0===l?void 0:l.success(),f;g.to(f)}))};
qp.prototype.Yj=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){g.to(new g.hm("Error: API fetch failed",a.status,a.url,c));return Object.assign(Object.assign({},c),{errorMetadata:{status:a.status}})}));
return b};var rp;var mca=[],tp=!1;var oca;g.w(wp,Ml);g.w(xp,Ml);oca=new Nl("aft-recorded",wp);g.gq=new Nl("timing-sent",xp);var eQ=window,bq=eQ.performance||eQ.mozPerformance||eQ.msPerformance||eQ.webkitPerformance||new nca;var Gp=!1,pca=(0,g.Ya)(bq.clearResourceTimings||bq.webkitClearResourceTimings||bq.mozClearResourceTimings||bq.msClearResourceTimings||bq.oClearResourceTimings||g.Oa,bq);var Op=g.B.ytLoggingLatencyUsageStats_||{};g.Ia("ytLoggingLatencyUsageStats_",Op,void 0);Mp.prototype.tick=function(a,b,c){Pp(this,"tick_"+a+"_"+b)||g.Zl("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Mp.prototype.info=function(a,b){var c=Object.keys(a).join("");Pp(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,g.Zl("latencyActionInfo",a))};
Mp.prototype.span=function(a,b){var c=Object.keys(a).join("");Pp(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,g.Zl("latencyActionSpan",a))};var U={},Wp=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U.browse="LATENCY_ACTION_BROWSE",U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.embed="LATENCY_ACTION_EMBED",U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.home="LATENCY_ACTION_HOME",
U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",U.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",
U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",U.results="LATENCY_ACTION_RESULTS",U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.settings="LATENCY_ACTION_SETTINGS",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",
U.watch="LATENCY_ACTION_WATCH",U.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U),V={},Zp=(V.ad_allowed=
"adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid=
"requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.ncnp="webInfo.nonPreloadedNodeCount",V.pnt="performanceNavigationTiming",
V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat=
"kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",
V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),qca="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),fQ={},$p=(fQ.ccs="CANARY_STATE_",fQ.mver="MEASUREMENT_VERSION_",fQ.pis="PLAYER_INITIALIZED_STATE_",
fQ.yt_pt="LATENCY_PLAYER_",fQ.pa="LATENCY_ACTION_",fQ.yt_vst="VIDEO_STREAM_TYPE_",fQ),rca="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");var gQ=window;gQ.ytcsi&&(gQ.ytcsi.info=Up,gQ.ytcsi.tick=g.Vp);Xl.prototype.kc=function(a){this.handleError(a)};
Xl.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":g.J("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":g.J("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":vca(this,b);break;case "TRANSACTION_ENDED":Math.random()<=aj("ytidb_transaction_ended_event_rate_limit",.02)&&this.i("idbTransactionEnded",b);break;
case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},b),{hasWindowUnloaded:this.l}),this.i("idbTransactionAborted",a)}};iq.prototype.initialize=function(a,b,c,d,e,f){var h=this;f=void 0===f?!1:f;b?(this.l=!0,No(b,function(){h.l=!1;var l=0<=b.indexOf("/th/");if(l?window.trayride:window.botguard)kq(h,c,!!f,l,d);else{l=Oo(b);var m=document.getElementById(l);m&&(dl(l),m.parentNode.removeChild(m));g.to(new g.hm("Unable to load Botguard","from "+b))}},e)):a&&(e=g.sf("SCRIPT"),e.textContent=a,e.nonce=La(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?
kq(this,c,!!f,a,d):g.to(Error("Unable to load Botguard from JS")))};
iq.prototype.invoke=function(a){a=void 0===a?{}:a;return this.i?this.i.hasOwnProperty("hot")?this.i.hot(void 0,void 0,a):this.i.invoke(void 0,void 0,a):null};
iq.prototype.dispose=function(){this.i=null};var lq=new iq,mq=0;var Vea={GK:1,TK:2,PAUSED:3,1:"DISABLED",2:"ENABLED",3:"PAUSED"};var NG=16/9,hQ=[.25,.5,.75,1,1.25,1.5,1.75,2],Pka=hQ.concat([3,4,5,6,7,8,9,10,15]);rq.prototype.getLanguageInfo=function(){return this.i};
rq.prototype.toString=function(){return this.i.name};
rq.prototype.getLanguageInfo=rq.prototype.getLanguageInfo;var Dca={aI:"auto",SR:"tiny",OM:"light",CR:"small",FO:"medium",JM:"large",JL:"hd720",FL:"hd1080",GL:"hd1440",HL:"hd2160",IL:"hd2880",LL:"highres",UNKNOWN:"unknown"};var iQ={},uq=(iQ.auto=0,iQ.tiny=144,iQ.light=144,iQ.small=240,iQ.medium=360,iQ.large=480,iQ.hd720=720,iQ.hd1080=1080,iQ.hd1440=1440,iQ.hd2160=2160,iQ.hd2880=2880,iQ.highres=4320,iQ);sq.prototype.isLocked=function(){return this.u&&!!this.l&&this.l===this.i};
sq.prototype.compose=function(a){if(a.u&&wq(a))return pz;if(a.u||wq(this))return a;if(this.u||wq(a))return this;var b=this.l&&a.l?Math.max(this.l,a.l):this.l||a.l,c=this.i&&a.i?Math.min(this.i,a.i):this.i||a.i;b=Math.min(b,c);return b===this.l&&c===this.i?this:new sq(b,c,!1,c===this.i?this.reason:a.reason)};
sq.prototype.B=function(a){return a.video?yq(this,a.video.quality):!1};
var ZN=vq("auto","hd1080",!1,"l"),LK=vq("auto","large",!1,"l"),pz=vq("auto","auto",!1,"p");vq("small","auto",!1,"p");var jQ={},kQ=(jQ["api.invalidparam"]=2,jQ.auth=150,jQ["drm.auth"]=150,jQ["heartbeat.net"]=150,jQ["heartbeat.servererror"]=150,jQ["heartbeat.stop"]=150,jQ["html5.unsupportedads"]=5,jQ["fmt.noneavailable"]=5,jQ["fmt.decode"]=5,jQ["fmt.unplayable"]=5,jQ["html5.missingapi"]=5,jQ["html5.unsupportedlive"]=5,jQ["drm.unavailable"]=5,jQ);var Bq={wS:function(a){a.reverse()},
bl:function(a,b){a.splice(0,b)},
ka:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};var uea={FH:"adunit",zK:"detailpage",LK:"editpage",OK:"embedded",PK:"embedded_unbranded",LM:"leanback",yQ:"previewpage",BQ:"profilepage",nS:"unplugged",sQ:"playlistoverview",ER:"sponsorshipsoffer"};Eq.prototype.toString=function(){return""};
var Dq=[20,100,500,2E3];g.k=Hq.prototype;g.k.isActive=function(){return!0};
g.k.Zp=function(a,b){var c=this;if(b){var d={},e;for(e in b)b.hasOwnProperty(e)&&(d.zr=a.prototype[e],d.Br=b[e],a.prototype[e]=function(f){return function(h){for(var l=[],m=0;m<arguments.length;++m)l[m-0]=arguments[m];m=(0,g.M)();l=f.zr.apply(this,l);Iq(c,f.Br,(0,g.M)()-m);return l}}(d)),d={zr:d.zr,
Br:d.Br}}};
g.k.Rb=function(a,b){var c=this;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];f=(0,g.M)();e=b.apply(null,e);Iq(c,a,(0,g.M)()-f);return e}};
g.k.Oo=function(a){return new Gq(a)};
g.k.En=function(a,b){b=void 0===b?1:b;a instanceof Gq&&(Iq(this,a.name,(0,g.M)()-a.startTimeMs,b),a.i=!0)};
g.k.Tu=function(a,b){var c=void 0===c?1:c;var d=(0,g.M)();b();Iq(this,a,(0,g.M)()-d,c)};
g.k.ly=function(){var a="",b;for(b in this.profiles)if(this.profiles.hasOwnProperty(b)){var c=this.profiles[b];if(0===c.i)c=null;else{for(var d=c.i.toString()+"."+Math.round(c.u).toString(),e=0;e<Dq.length;++e)if(0<c.l[e])d+="."+Dq[e].toString()+"_"+Math.round(c.l[e]).toString();else break;c=d}c&&(a+=b+"."+c+";")}this.profiles=new Fq;return a};
g.k.toString=function(){return""};g.k=Jq.prototype;g.k.isActive=function(){return!1};
g.k.Zp=function(){};
g.k.Rb=function(a,b){return b};
g.k.Oo=function(){};
g.k.En=function(){};
g.k.Tu=function(a,b){b()};
g.k.ly=function(){return""};
g.k.toString=function(){return""};var lQ,FN,qE;lQ=new Jq;FN=Zi("html5_enable_profiler")||Zi("html5_onesie_enable_profiler")?new Hq:new Jq;g.AE=Zi("html5_enable_profiler")?FN:lQ;qE=Zi("html5_onesie_enable_profiler")?FN:lQ;var ska,aka,Hx,mea,pea,Vja,jL,qJ,Ox,Gia,Hw,qL,Wja,Qka,ika,Rka,Qja,Ska,rJ,Pha,xja,TO,mka,Gw;ska=g.AE.Rb("plssv",function(a){a.unstorable||(Lo("yt-player-volume",a),Lo("yt-player-volume",a,2592E3))});
aka=g.AE.Rb("plsgv",function(){var a=Mo("yt-player-volume")||{},b=a.volume;return{volume:isNaN(b)?100:g.bf(Math.floor(b),0,100),muted:!!a.muted}});
Hx=g.AE.Rb("plssbs",function(a){Lo("yt-player-bandwidth",a,2592E3)});
mea=g.AE.Rb("plsgbs",function(){return Mo("yt-player-bandwidth")||{}});
pea=g.AE.Rb("plswm",function(a,b){var c={};c.values=a;c.halfLives=b;Lo("yt-player-memory",c,2592E3)});
Vja=g.AE.Rb("plssq",function(a){Lo("yt-player-quality",a,31104E3)});
jL=g.AE.Rb("plsgq",function(a){a=void 0===a?2592E3:a;var b;if(b=0<a){a:{if(b=Jo())if(b=b.l("yt-player-quality")){b=b.creation;break a}b=void 0}b=!(b>(0,g.M)()-1E3*a)}if(b)return"auto";a=Mo("yt-player-quality");return 0<uq[a]?a:"auto"});
qJ=g.AE.Rb("plshsq",function(){return"auto"!==jL()});
Ox=g.AE.Rb("plslm",function(){var a={values:{},Dh:{}};try{var b=JSON.parse(JSON.parse(window.localStorage["yt-player-memory"]).data);a.values=b.values;a.halfLives=b.halfLives}catch(c){}return a});
Gia=g.AE.Rb("plsspc",function(a,b,c){var d=qL();a=Kq(a,b);0<+d[a]&&(c=Math.min(+d[a],c));d[a]!==c&&(d[a]=c,Lo("yt-player-performance-cap",d,604800))});
Hw=g.AE.Rb("plsgpc",function(a,b){return+qL()[Kq(a,b)]||8192});
qL=g.AE.Rb("plsgrpd",function(){return Mo("yt-player-performance-cap")||{}});
Wja=g.AE.Rb("plscpc",function(a){if(a){a=qL();for(var b=g.u(Object.keys(a)),c=b.next();!c.done;c=b.next())c=c.value,0!==c.indexOf("1")&&(a[c]=0);Lo("yt-player-performance-cap",a,604800)}else try{b=Ko(),c=Jo(),b&&b.remove("yt-player-performance-cap"),c&&c.remove("yt-player-performance-cap")}catch(d){}});
Qka=g.AE.Rb("plsspr",function(a){Lo("yt-player-playback-rate",a)});
ika=g.AE.Rb("plsgpr",function(){return Number(Mo("yt-player-playback-rate"))||1});
Rka=g.AE.Rb("plssas",function(a){Lo("yt-player-autonavstate",a)});
Qja=g.AE.Rb("plsgas",function(){return Mo("yt-player-autonavstate")});
Ska=g.AE.Rb("plsshr",function(a){Lo("yt-player-headers-readable",a,2592E3)});
rJ=g.AE.Rb("plsghr",function(){return Mo("yt-player-headers-readable")||!1});
Pha=g.AE.Rb("plssrbh",function(a){Lo("yt-player-bandaid-host",a,432E3)});
xja=g.AE.Rb("plsgrbh",function(){return Mo("yt-player-bandaid-host")});
TO=g.AE.Rb("plsspor",function(a){Lo("yt-player-playback-on-reload",a)});
mka=g.AE.Rb("plsgpor",function(){return Mo("yt-player-playback-on-reload")});
Gw=g.AE.Rb("plsgaup",function(){try{return+(window.localStorage&&window.localStorage["yt-player-av1-pref"])||0}catch(a){return 0}});
g.mQ=g.AE.Rb("plssscp",function(a){Lo("yt-player-sticky-caption",a,14400)});
g.nQ=g.AE.Rb("plssscp",function(){return Mo("yt-player-sticky-caption")});
g.Tka=g.AE.Rb("plssclp",function(a){Lo("yt-player-caption-language-preferences",a)});
g.Dr=g.AE.Rb("plsgclp",function(){var a=Mo("yt-player-caption-language-preferences");return a?a:[]});var Jca={phone:"SMALL_FORM_FACTOR",tablet:"LARGE_FORM_FACTOR"},Kca={android:"ANDROID","android.k":"ANDROID_KIDS","android.m":"ANDROID_MUSIC","android.up":"ANDROID_UNPLUGGED",youtube:"WEB",ytios:"IOS","ytios.k":"IOS_KIDS","ytios.m":"IOS_MUSIC","ytios.up":"IOS_UNPLUGGED"},Lca={desktop:"DESKTOP",phone:"MOBILE",tablet:"TABLET"},Ica={preroll:"BREAK_PREROLL",midroll:"BREAK_MIDROLL",postroll:"BREAK_POSTROLL"},Gca={0:"YT_KIDS_AGE_UP_MODE_UNKNOWN",1:"YT_KIDS_AGE_UP_MODE_OFF",2:"YT_KIDS_AGE_UP_MODE_TWEEN",
3:"YT_KIDS_AGE_UP_MODE_PRESCHOOL"},Hca={0:"MDX_CONTROL_MODE_UNKNOWN",1:"MDX_CONTROL_MODE_REMOTE",2:"MDX_CONTROL_MODE_VOICE"};var Lr=void 0;var oQ={},Xr=sn("yt-player-local-media",{xu:(oQ.index=!0,oQ.media=!0,oQ.metadata=!0,oQ.playerdata=!0,oQ.captions=!0,oQ),tv:!1,upgrade:function(a,b){2>b&&(Am(a,"index"),Am(a,"media"));3>b&&Am(a,"metadata");4>b&&Am(a,"playerdata");5>b&&Am(a,"captions")},
version:5}),Vr=!1;ns.prototype.Hn=function(a){a=a||pz;for(var b=g.Ph(this.videoInfos,function(h){return a.B(h)}),c=[],d={},e=0;e<b.length;e++){var f=b[e].Qa();
d[f.quality]||(c.push(f),d[f.quality]=!0)}return c};
ns.prototype.getAvailableAudioTracks=function(){return this.audioTracks};var nka=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,Hs=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https:\/\/([a-z]+\.)?[0-9a-f]{1,63}\.sslproxy\.corp\.google\.com\/|^https:\/\/([a-z]+\.)?[a-z0-9\-]{1,63}\.demos\.corp\.google\.com\/|^https:\/\/[0-9a-f]{1,63}\.proxy\.googleprod\.com\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+(corp\.)?youtube(-nocookie|kids)?\.com\/|([A-Za-z0-9-]{1,63}\.)*(youtube\.googleapis\.com)[.]?(:[0-9]+)?\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.c\.googlers\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|(tv|tv-green-qa|tv-release-qa)\.youtube\.com\/|[A-Za-z0-9-]+\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/)/,
oka=/^https?:\/\/(www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/slav)/,jda=/^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|proxy\.googlers\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|currents\.google\.com|mail\.google\.com|youtube\.com|youtube\-nocookie\.com|youtubekids\.com)[.]?(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$))/,
kda=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(plus\.google\.com)[.]?(:[0-9]+)?\//,hda=/^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|proxy\.googlers\.com|borg\.google\.com|prod\.google\.com|youtube\.com|youtubekids\.com)[.]?(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$))/,eda=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)|(sandbox\.google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|(ccp-lh\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(play-(ti-)?lh\.googleusercontent)|(gz0\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|proxy\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|currents\.google\.com|video\.google\.com|youtube\.com|ytimg\.com|ytimg\.sandbox\.google\.com|chat\.google\.com)[.]?(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$)|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/,
fda=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(plus\.google\.com)[.]?(:[0-9]+)?\//,pka=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/,gda=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion))|www\.youtube\.com\/pagead\/conversion)/,cda=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)|(sandbox\.google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|(ccp-lh\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(play-(ti-)?lh\.googleusercontent)|(gz0\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|proxy\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|prod\.google\.com|lh3\.photos\.google\.com|currents\.google\.com|mail\.google\.com|youtube\.com|xfx7\.com|yt\.akamaized\.net|chat\.google\.com|shopping\.google\.com|cdn\.shoploop\.tv)[.]?(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$)|([A-Za-z0-9-]{1,63}\.)*c\.lh3(-d[a-gz]|-testonly)?\.(googleusercontent|photos\.google)\.com\/.*$)/,
dda=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(plus\.google\.com)[.]?(:[0-9]+)?\//,tea=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|proxy\.googlers\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubekids\.com|ytimg\.com|ytimg\.sandbox\.google\.com)[.]?(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/,
rea=/^https:\/\/([A-Za-z0-9-]{1,63}\.)*(crowdsource|datacompute)\.google\.com\/|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https:\/\/canvastester-3fd0b\.appspot\.com(\/|$)|^https:\/\/narrative-news-cast-receiver-d\.appspot\.com(\/|$)|^https:\/\/narrative-news-cast-receiver-f\.appspot\.com(\/|$)|^https:\/\/one\.google\.com(\/|$)|^https:\/\/www\.gstatic\.com\/aog_howto|^https:\/\/www\.gstatic\.com\/narrative_cast_receiver\/news|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|proxy\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|photos\.google\.com|get\.google\.com|class\.photos\.google\.com|currents\.google\.com|books\.googleusercontent\.com|play\-books\-autopush\-sandbox\.googleusercontent\.com|play\-books\-canary\-sandbox\.googleusercontent\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|play\-books\-staging\-sandbox\.googleusercontent\.com|blogger\.com|mail\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubekids\.com|vevo\.com|chat\.google\.com|meet\.google\.com|stadia\.google\.com|shoploop\.area120\.google\.com|shopping\.google\.com)[.]?(:[0-9]+)?(\/|$)|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$)|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|(www\.|encrypted\.)google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/?$|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/,
sea=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(plus\.google\.com)[.]?(:[0-9]+)?(\/|$)/,pQ=/^(https\:\/\/photos\.google\.com|https\:\/\/get\.google\.com|https\:\/\/class\.photos\.google\.com|https\:\/\/currents\.google\.com|https\:\/\/mail\.google\.com|https\:\/\/chat\.google\.com|https\:\/\/stadia\.google\.com|https\:\/\/one\.google\.com|https\:\/\/shoploop\.area120\.google\.com|https\:\/\/shopping\.google\.com)$|^http:\/\/[0-9]+\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?$|^https:\/\/((staging|stream|today)\.)?meet\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)*(crowdsource|datacompute)\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)*(youtube|youtubekids)\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sandbox\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com$|^https:\/\/(books|play-books-(autopush|canary|internal|staging)-sandbox)\.googleusercontent\.com$|^https:\/\/(draft|www|(www\.)?dev\.sandbox|(www\.)?autopush\.sandbox|(www\.)?restore\.sandbox)\.blogger\.com$|^https:\/\/[0-9a-f]{1,63}\.proxy\.googleprod\.com$|^https?:\/\/(((docs|m|sing|ss|sss|www)\.)?drive\.google\.com$|([A-Za-z0-9-]{1,63}\.)*c\.googlers\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\.)*corp\.google\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\.)*googleplex\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\.)*proxy\.googlers\.com(:[0-9]+)?$|(www\.|encrypted\.)google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/?$|[A-Za-z0-9-]+\.prod\.google\.com(:[0-9]+)?$|docs\.google\.com$)/,
qQ=/^(https\:\/\/plus\.google\.com)$/;var Fs=!1;Ps.prototype.set=function(a,b){this.i[a]!==b&&(this.i[a]=b,this.url="")};
Ps.prototype.get=function(a){Rs(this);return this.i[a]||null};
Ps.prototype.clone=function(){var a=new Ps(this.l,this.C);a.u=this.u;a.path=this.path;a.B=this.B;a.i=g.dc(this.i);a.url=this.url;return a};g.k=g.$s.prototype;g.k.Cr=function(a){this.segments.push(a)};
g.k.getDuration=function(a){return(a=this.Pf(a))?a.duration:0};
g.k.zy=function(a){return this.getDuration(a)};
g.k.Qf=function(){return this.segments.length?this.segments[0].oa:-1};
g.k.Nd=function(a){return(a=this.Pf(a))?a.ingestionTime:NaN};
g.k.Ct=function(a){return(a=this.Pf(a))?a.i:null};
g.k.vb=function(){return this.segments.length?this.segments[this.segments.length-1].oa:-1};
g.k.Gi=function(){var a=this.segments[this.segments.length-1];return a?a.endTime:NaN};
g.k.Nb=function(){return this.segments[0].startTime};
g.k.Jl=function(){return this.segments.length};
g.k.Bh=function(){return 0};
g.k.zf=function(a){return(a=this.Al(a))?a.oa:-1};
g.k.Bt=function(a){return(a=this.Pf(a))?a.sourceURL:""};
g.k.Pd=function(a){return(a=this.Pf(a))?a.startTime:0};
g.k.Pp=ba(2);g.k.Vc=function(){return 0<this.segments.length};
g.k.Pf=function(a){a=g.Db(this.segments,new Zs(a,0,0,0,""),function(b,c){return b.oa-c.oa});
return 0<=a?this.segments[a]:null};
g.k.Al=function(a){a=g.Db(this.segments,{startTime:a},function(b,c){return b.startTime-c.startTime});
return 0<=a?this.segments[a]:this.segments[Math.max(0,-a-2)]};
g.k.append=function(a){if(a.length)if(a=g.wb(a),this.segments.length){var b=this.segments.length?g.jb(this.segments).endTime:0,c=a[0].oa-this.vb();1<c&&g.qb(this.segments);for(c=0<c?0:-c+1;c<a.length;c++){var d=a[c];d.startTime=b;d.endTime=d.startTime+d.duration;b+=a[c].duration;this.segments.push(a[c])}}else this.segments=a};
g.k.Gy=function(){return 0};var QC=function(){function a(d){for(var e=new Uint8Array(d.length),f=0;f<d.length;f++)e[f]=d[f];return e}
function b(d){return new Uint8Array(d)}
var c=new Uint8Array([1]);return 1===c.length&&1===c[0]?b:a}();et.prototype.skip=function(a){this.i+=a};
et.prototype.markAsSkip=function(){this.type=1936419184;this.data.setUint32(this.offset+4,1936419184)};var pt=!1;var rQ={},Uka=(rQ.predictStart="predictStart",rQ.start="start",rQ["continue"]="continue",rQ.stop="stop",rQ),nda={EVENT_PREDICT_START:"predictStart",EVENT_START:"start",EVENT_CONTINUE:"continue",EVENT_STOP:"stop"};var It=!1;var Xt=!0;bu.prototype.set=function(a,b){this.kf.get(a);this.i[a]=b;this.url=""};
bu.prototype.get=function(a){return this.i[a]||this.kf.get(a)};g.k=lu.prototype;g.k.pd=function(){return!!this.i&&this.index.Vc()};
g.k.Sk=function(){return!1};
g.k.lw=function(a){return[a]};
g.k.Pq=function(a){return[a]};
g.k.Fl=function(){var a=g.u(this.info.id.split(";")),b=a.next().value;a=a.next().value;return b+";;"+(void 0===a?"":a)};mu.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};tu.prototype.isEncrypted=function(){return this.i.info.isEncrypted()};
tu.prototype.isVideo=function(){return!!this.i.info.video};Cu.prototype.yf=function(){return uu(this.i[0])};g.w(Hu,lu);g.k=Hu.prototype;g.k.re=function(){return!1};
g.k.Yn=function(){return!1};
g.k.Sk=function(){return!this.N};
g.k.Wj=function(){if(this.Sk())return[];var a=new tu(1,this,this.initRange,"getMetadataRequestInfos");return[new Cu([a],this.N)]};
g.k.Rk=function(){return null};
g.k.Lm=function(a){this.Zh(a);return this.ai(a.Dc?a.oa+1:a.oa,!1)};
g.k.Ii=function(a,b){b=void 0===b?!1:b;a=this.index.zf(a);b&&(a=Math.min(this.index.vb(),a+1));return this.ai(a,!0)};
g.k.It=function(a){this.i=new Uint8Array(ev(a).buffer)};
g.k.Zh=function(a){return 0===a.l?!0:this.index.vb()>a.oa&&this.index.Qf()<=a.oa+1};
g.k.update=function(a,b,c){this.index.append(a);at(this.index,c);this.D=b};
g.k.pd=function(){return this.Sk()?!0:lu.prototype.pd.call(this)};
g.k.ai=function(a,b){var c=this.index.Bt(a),d=this.index.Pd(a),e=this.index.getDuration(a),f;b?e=f=0:f=0<this.info.l?this.info.l*e:1E3;b=!b;var h=f;f=a===this.index.vb()&&!this.D&&0<f;a=new tu(3,this,void 0,"liveCreateRequestInfoForSegment",a,d,e,0,h,f,b);return new Cu([a],c)};
g.k.ut=function(){return this.Sk()?0:this.initRange.length};
g.k.Nu=function(){return!1};Mu.prototype.update=function(a,b){var c=void 0;this.l&&(c=this.l);var d=new Mu,e=Array.from(a.getElementsByTagName("S"));if(e.length){var f=+Iu(a,"timescale")||1,h=(+e[0].getAttribute("t")||0)/f,l=+Iu(a,"startNumber")||0;d.B=h;var m=h,n=+Iu(a,"presentationTimeOffset")||0;b=c?c.startSecs+c.durationSecs:b?m-n/f:0;m=Date.parse(Lu(Iu(a,"yt:segmentIngestTime")))/1E3;d.C="SegmentTemplate"===a.parentElement.tagName;d.C&&(d.G=Iu(a,"media"));a=c?l-c.oa:1;d.D=0<a?0:-a+1;a=g.u(e);for(e=a.next();!e.done;e=a.next()){e=
e.value;n=+e.getAttribute("d")/f;for(var p=(+e.getAttribute("yt:sid")||0)/f,q=+e.getAttribute("r")||0,r=0;r<=q;r++)if(c&&l<=c.oa)l++;else{var t=new zda(l,b,n,m+p,h);d.i.push(t);var v=t.startSecs;t=e.getAttribute("yt:cuepointTimeOffset");var y=e.getAttribute("yt:cuepointDuration");if(t&&y){t=Number(t);v=(pt?t/f:-t/f)+v;y=Number(y)/f;var C=e.getAttribute("yt:cuepointContext")||null,z=e.getAttribute("yt:cuepointIdentifier")||"";var E=e.getAttribute("yt:cuepointEvent")||"";E=Uka[E]||"unknown";t=new g.mt(v,
y,C,z,E,t)}else t=null;t&&d.u.push(t);l++;b+=n;h+=n;m+=n+p}}d.i.length&&(d.l=g.jb(d.i))}this.D=d.D;this.l=d.l||this.l;g.xb(this.i,d.i);g.xb(this.u,d.u);this.C=d.C;this.G=d.G;-1===this.B&&(this.B=d.getStreamTimeOffset())};
Mu.prototype.getStreamTimeOffset=function(){return-1===this.B?0:this.B};g.w(Nu,g.$s);g.k=Nu.prototype;g.k.Qf=function(){return this.yg?this.segments.length?this.Al(this.Nb()).oa:-1:g.$s.prototype.Qf.call(this)};
g.k.Nb=function(){if(this.qd)return 0;if(!this.yg)return g.$s.prototype.Nb.call(this);if(!this.segments.length)return 0;var a=Math.max(g.jb(this.segments).endTime-this.rh,0);return 0<this.Lc&&this.Al(a).oa<this.Lc?this.Pf(this.Lc).startTime:a};
g.k.Gi=function(){if(!this.segments.length)return g.$s.prototype.Gi.call(this);var a=this.vb();if(!this.yg||a<=this.segments[this.segments.length-1].oa)a=this.segments[this.segments.length-1];else{var b=this.segments[this.segments.length-1];a=new Zs(a,Math.max(0,b.startTime-(b.oa-a)*this.Ee),this.Ee,0,"sq/"+a,void 0,void 0,!0)}return null!==this.l&&a.pending&&3===this.l?this.qd?Math.min(this.rh,a.startTime):a.startTime:this.qd?Math.min(this.rh,a.endTime):a.endTime};
g.k.Jl=function(){return this.yg?this.segments.length?this.vb()-this.Qf()+1:0:g.$s.prototype.Jl.call(this)};
g.k.vb=function(){var a=Math.min(this.Ce,Math.max(g.$s.prototype.vb.call(this),this.Mm)),b=1E3*this.rh;b=0<this.i&&this.i<b;this.qd&&0<this.rh&&0<this.Mm&&!b&&(b=this.Al(this.rh))&&(a=Math.min(b.oa-1,a));return a};
g.k.Gl=function(){return this.segments.length?this.segments[this.segments.length-1]:null};
g.k.Cr=function(a){var b=Ou(this,a.oa);if(0<=b)this.segments[b]=a;else if(this.segments.splice(-(b+1),0,a),this.oo&&0===a.oa%(300/this.Ee)){var c=this.segments[0].oa,d=Math.floor(this.oo/this.Ee);a=a.oa-d;b=-(b+1)-d;0<b&&a>c&&(this.segments=this.segments.slice(b))}};
g.k.Al=function(a){if(!this.yg)return g.$s.prototype.Al.call(this,a);if(!this.segments.length)return null;var b=this.segments[this.segments.length-1];if(a<this.segments[0].startTime)b=Math.max(0,this.segments[0].oa-Math.ceil((this.segments[0].startTime-a)/this.Ee));else if(a>=b.endTime)b=b.oa+Math.floor((a-b.endTime)/this.Ee+1);else{b=Eb(this.segments,function(d){return a<d.startTime?-1:a>=d.endTime?1:0});
if(0<=b)return this.segments[b];var c=-(b+1);b=this.segments[c-1];c=this.segments[c];b=Math.floor((a-b.endTime)/((c.startTime-b.endTime)/(c.oa-b.oa-1))+1)+b.oa}return this.Pf(b)};
g.k.Pf=function(a){if(!this.yg)return g.$s.prototype.Pf.call(this,a);if(!this.segments.length)return null;var b=Ou(this,a);if(0<=b)return this.segments[b];var c=-(b+1);b=this.Ee;if(0===c)var d=Math.max(0,this.segments[0].startTime-(this.segments[0].oa-a)*b);else c===this.segments.length?(d=this.segments[this.segments.length-1],d=d.endTime+(a-d.oa-1)*b):(d=this.segments[c-1],b=this.segments[c],b=(b.startTime-d.endTime)/(b.oa-d.oa-1),d=d.endTime+(a-d.oa-1)*b);return new Zs(a,d,b,0,"sq/"+a,void 0,void 0,
!0)};g.w(Qu,Hu);g.k=Qu.prototype;g.k.Yn=function(){return!0};
g.k.pd=function(){return!0};
g.k.Zh=function(a){return!a.u};
g.k.Wj=function(){return[]};
g.k.Ii=function(a,b){b=void 0===b?!1:b;return"number"!==typeof a||isFinite(a)?Hu.prototype.Ii.call(this,a,b):(a=new tu(3,this,void 0,"mlLiveGetReqInfoStubForTime",-1,void 0,this.Gf,void 0,this.Gf*this.info.l),new Cu([a],""))};
g.k.ai=function(a,b){var c=void 0===c?!1:c;if(Pu(this.index,a))return Hu.prototype.ai.call(this,a,b);var d=this.index.Pd(a),e=b?0:this.Gf*this.info.l;b=!b;c=new tu(c?6:3,this,void 0,"mlLiveCreateReqInfoForSeg",a,d,void 0,void 0,e,a===this.index.vb()&&!this.D&&0<e,b);return new Cu([c],0<=a?"sq/"+a:"")};g.w(Ru,lu);g.k=Ru.prototype;g.k.re=function(){return!1};
g.k.Yn=function(){return!1};
g.k.Wj=function(){if(this.D){var a=new tu(1,this,void 0,"otfInit");return[new Cu([a],this.D)]}a=new tu(1,this,this.initRange,"otfInitInfo");var b=new tu(2,this,this.indexRange,"otfIndexInfo");return[new Cu([a,b])]};
g.k.Rk=function(){return null};
g.k.Lm=function(a){this.Zh(a);return Su(this,a.oa+(a.Dc?1:0),!1)};
g.k.Ii=function(a,b){b=void 0===b?!1:b;a=this.index.zf(a);b&&(a=Math.min(this.index.vb(),a+1));return Su(this,a,!0)};
g.k.It=function(a){if(1===a.info.type)this.i||(this.i=av(a.i)),a.l&&"http://youtube.com/streaming/otf/durations/112015"===a.l.uri&&Hda(this,a.l);else if(2===a.info.type)if(g.iv(this.info)){if(!this.index.Vc()&&(a=g.ut(ev(a),0,1936286840))){var b=[],c=Et(a);a=c.Uu.length;var d=c.dr,e=c.Uu,f=c.Zq;c=this.indexRange.end+c.iy+1;for(var h=0,l=0;l<a;l++){var m=f[l]/d,n=e[l];b.push(new Zs(l,h,m,NaN,"range/"+c+"-"+(c+n-1)));h+=m;c+=n}this.index.append(b)}}else if(this.info.cd()&&this.i&&(d=new Jt(new DataView(this.i.buffer)),
b=Wt(d))&&(d=new Jt(ev(a)),a=Yt(d,b.Ko,this.indexRange.end))){d=[];e=b.Hv/b.Iv;f=a.length-1;for(c=0;c<f;c++)h=a[c],l=a[c+1],m=h.Bp*e,d.push(new Zs(c,m,l.Bp*e-m,NaN,"range/"+h.Rj+"-"+(l.Rj-1)));c=a[f].Bp*e;d.push(new Zs(f,c,b.duration*e-c,NaN,"range/"+a[f].Rj+"-"+(b.bv+b.Ko)));this.index.append(d)}};
g.k.Zh=function(a){return 0===a.l?!0:this.index.vb()>a.oa&&this.index.Qf()<=a.oa+1};
g.k.ut=function(){return this.initRange&&this.indexRange?this.initRange.length+this.indexRange.length:0};
g.k.Nu=function(){return!1};Tu.prototype.append=function(a){if(Uu(this,a)){var b=this.i[this.i.length-1];this.i[this.i.length-1]=new Uint8Array(b.buffer,b.byteOffset,b.length+a.length);Wu(this)}else this.i.push(a);this.totalLength+=a.length};
Tu.prototype.split=function(a){for(var b=new Tu,c=new Tu,d=g.u(this.i),e=d.next();!e.done;e=d.next())e=e.value,a>=e.length?(b.append(e),a-=e.length):a?(b.append(new Uint8Array(e.buffer,e.byteOffset,a)),c.append(new Uint8Array(e.buffer,e.byteOffset+a,e.length-a)),a=0):c.append(e);return{Vp:b,Bk:c}};
Tu.prototype.isFocused=function(a){return a>=this.u&&a<this.u+this.i[this.l].length};
Tu.prototype.focus=function(a){if(!this.isFocused(a)){for(a<this.u&&Wu(this);this.u+this.i[this.l].length<=a&&this.l<this.i.length;)this.u+=this.i[this.l].length,this.l+=1;this.B=void 0}};dv.prototype.verify=function(a){if(this.info.l!==this.i.totalLength)return a.slength=this.info.l.toString(),a.range=this.i.totalLength.toString(),!1;if(1===this.info.i.info.containerType){if(8>this.info.l||4===this.info.type)return!0;var b=ev(this),c=b.getUint32(0,!1);b=b.getUint32(4,!1);a.infotype=this.info.type.toString();a.slicesize=c.toString();a.boxtype=b.toString();if(2===this.info.type)return c===this.info.l&&1936286840===b;if(3===this.info.type&&0===this.info.Va)return 1836019558===b||1936286840===
b||1937013104===b||1718909296===b||1701671783===b||1936419184===b}else if(2===this.info.i.info.containerType){if(4>this.info.l||4===this.info.type)return!0;c=ev(this).getUint32(0,!1);a.ebm=c.toString();if(3===this.info.type&&0===this.info.Va)return 524531317===c||440786851===c}return!0};g.k=g.pv.prototype;g.k.Bh=function(a){return this.offsets[a]};
g.k.Pd=function(a){return this.i[a]/this.u};
g.k.Pp=ba(1);g.k.Nd=function(){return NaN};
g.k.Ct=function(){return null};
g.k.getDuration=function(a){a=this.zy(a);return 0<=a?a/this.u:-1};
g.k.zy=function(a){return a+1<this.count||this.l?this.i[a+1]-this.i[a]:-1};
g.k.Qf=function(){return 0};
g.k.vb=function(){return this.count-1};
g.k.Gi=function(){return this.l?this.i[this.count]/this.u:NaN};
g.k.Nb=function(){return 0};
g.k.Jl=function(){return this.count};
g.k.Bt=function(){return""};
g.k.zf=function(a){a=g.Db(this.i.subarray(0,this.count),a*this.u);return 0<=a?a:Math.max(0,-a-2)};
g.k.Vc=function(){return 0<=this.vb()};
g.k.Gy=function(a,b){if(a>=this.vb())return 0;var c=0;for(b=this.Pd(a)+b;a<this.vb()&&b>this.Pd(a);a++)c=Math.max(c,(a+1<this.count||this.l?this.offsets[a+1]-this.offsets[a]:-1)/this.getDuration(a));return c};
g.k.resize=function(a){a+=2;var b=this.offsets;this.offsets=new Float64Array(a+1);var c=this.i;this.i=new Float64Array(a+1);for(a=0;a<this.count+1;a++)this.offsets[a]=b[a],this.i[a]=c[a]};
g.k.cap=function(a,b){qv(this);this.l=!0;this.i[this.count]=b;this.offsets[this.count]=a};g.w(rv,lu);g.k=rv.prototype;g.k.Wj=function(a){var b=new tu(1,this,this.initRange,"initInfo"),c=new tu(2,this,this.indexRange,"indexInfo"),d=[],e=[b];wu(b,c)?e.push(c):(d.push(new Cu([c])),a=0);isNaN(this.contentLength)&&(a=0);b=e[e.length-1];a=Math.min(a,this.contentLength-(b.range.end-e[0].range.start+1));0<a&&(a=ou(b.range.end+1,a),e.push(new tu(4,this,a,"tbdRange")));d.push(new Cu(e));return d};
g.k.It=function(a){if(1===a.info.type){if(this.i)return;this.i=av(a.i)}else if(2===a.info.type){if(this.D||0<=this.index.vb())return;if(g.iv(this.info)){var b=this.index,c=ev(a);a=a.info.range.start;var d=g.ut(c,0,1936286840);c=Et(d);b.u=c.dr;var e=c.zD;b.offsets[0]=c.iy+a+d.size;b.i[0]=e;b.l=!0;a=c.Zq.length;for(d=0;d<a;d++){e=b;var f=c.Uu[d],h=c.Zq[d];e.count++;qv(e);e.offsets[e.count]=e.offsets[e.count-1]+f;e.i[e.count]=e.i[e.count-1]+h}}else this.D=ev(a)}if(this.info.cd()&&this.i&&this.D){c=new DataView(this.i.buffer);
b=this.index;a=this.D;d=this.indexRange.end;e=new Jt(c);c=Wt(e);if(null!==c&&(b.u=c.Iv/c.Hv,e=new Jt(a),a=Yt(e,c.Ko,d),null!==a)){a=g.u(a);for(d=a.next();!d.done;d=a.next())f=d.value,d=b,e=f.Rj,f=f.Bp,qv(d),d.offsets[d.count]=e,d.i[d.count]=f,d.count++;b.cap(c.bv+c.Ko,c.duration)}this.D=null}};
g.k.lw=function(a){for(var b=this.Pq(a.info),c=a.info.range.start+a.info.Va,d=a.u,e=[],f=0;f<b.length;f++){var h=b[f].l;h=a.i.split(b[f].range.start+b[f].Va-c).Bk.split(h).Vp;e.push(new dv(b[f],h,d));d=!1}return e};
g.k.Pq=function(a){for(var b=a.range.start+a.Va,c=0;c<this.index.vb()&&b>=this.index.Bh(c+1);)c++;return tv(this,c,b,a.l).i};
g.k.Zh=function(a){return this.pd()?!0:isNaN(this.contentLength)?!1:a.range.end+1<this.contentLength};
g.k.Rk=function(a,b){this.Zh(a);if(!this.pd())return b=ou(a.range.end+1,b),b.end+1>this.contentLength&&(b=new mu(b.start,this.contentLength-1)),a=[new tu(4,a.i,b,"getNextRequestInfoByLength")],new Cu(a);4===a.type&&(a=this.Pq(a),a=a[a.length-1]);var c=0,d=a.range.start+a.Va+a.l;3===a.type&&(c=a.oa,d===a.range.end+1&&(c+=1));return tv(this,c,d,b)};
g.k.Lm=function(){return null};
g.k.Ii=function(a,b){b=void 0===b?!1:b;a=this.index.zf(a);b&&(a=Math.min(this.index.vb(),a+1));return tv(this,a,this.index.Bh(a),0)};
g.k.re=function(){return!0};
g.k.Yn=function(){return!1};
g.k.ut=function(){return this.indexRange.length+this.initRange.length};
g.k.Nu=function(){return this.indexRange&&this.initRange&&this.initRange.end+1===this.indexRange.start?!0:!1};
g.k.Fl=function(){var a=g.u(this.info.id.split(";")),b=a.next().value;a=a.next().value;return b+";"+this.lastModified+";"+(void 0===a?"":a)};var sQ={},vs=(sQ.WIDTH={name:"width",video:!0,valid:640,invalid:99999},sQ.HEIGHT={name:"height",video:!0,valid:360,invalid:99999},sQ.FRAMERATE={name:"framerate",video:!0,valid:30,invalid:9999},sQ.BITRATE={name:"bitrate",video:!0,valid:3E5,invalid:2E9},sQ.EOTF={name:"eotf",video:!0,valid:"bt709",invalid:"catavision"},sQ.CHANNELS={name:"channels",video:!1,valid:2,invalid:99},sQ.CRYPTOBLOCKFORMAT={name:"cryptoblockformat",video:!0,valid:"subsample",invalid:"invalidformat"},sQ.DECODETOTEXTURE={name:"decode-to-texture",
video:!0,valid:"false",invalid:"nope"},sQ.AV1_CODECS={name:"codecs",video:!0,valid:"av01.0.05M.08",invalid:"av99.0.05M.08"},sQ.EXPERIMENTAL={name:"experimental",video:!0,valid:"allowed",invalid:"invalid"},sQ);var W={},zv=(W["0"]="f",W["160"]="h",W["133"]="h",W["134"]="h",W["135"]="h",W["136"]="h",W["137"]="h",W["264"]="h",W["266"]="h",W["138"]="h",W["298"]="h",W["299"]="h",W["304"]="h",W["305"]="h",W["214"]="h",W["216"]="h",W["374"]="h",W["375"]="h",W["140"]="a",W["141"]="ah",W["327"]="sa",W["258"]="m",W["380"]="mac3",W["328"]="meac3",W["161"]="H",W["142"]="H",W["143"]="H",W["144"]="H",W["222"]="H",W["223"]="H",W["145"]="H",W["224"]="H",W["225"]="H",W["146"]="H",W["226"]="H",W["227"]="H",W["147"]="H",
W["384"]="H",W["376"]="H",W["385"]="H",W["377"]="H",W["149"]="A",W["261"]="M",W["381"]="MAC3",W["329"]="MEAC3",W["598"]="9",W["278"]="9",W["242"]="9",W["243"]="9",W["244"]="9",W["247"]="9",W["248"]="9",W["353"]="9",W["355"]="9",W["271"]="9",W["313"]="9",W["272"]="9",W["302"]="9",W["303"]="9",W["407"]="9",W["408"]="9",W["308"]="9",W["315"]="9",W["330"]="9h",W["331"]="9h",W["332"]="9h",W["333"]="9h",W["334"]="9h",W["335"]="9h",W["336"]="9h",W["337"]="9h",W["338"]="so",W["600"]="o",W["250"]="o",W["251"]=
"o",W["194"]="*",W["195"]="*",W["220"]="*",W["221"]="*",W["196"]="*",W["197"]="*",W["279"]="(",W["280"]="(",W["317"]="(",W["318"]="(",W["273"]="(",W["274"]="(",W["357"]="(",W["358"]="(",W["275"]="(",W["359"]="(",W["360"]="(",W["276"]="(",W["583"]="(",W["584"]="(",W["314"]="(",W["585"]="(",W["561"]="(",W["277"]="(",W["361"]="(h",W["362"]="(h",W["363"]="(h",W["364"]="(h",W["365"]="(h",W["366"]="(h",W["591"]="(h",W["592"]="(h",W["367"]="(h",W["586"]="(h",W["587"]="(h",W["368"]="(h",W["588"]="(h",W["562"]=
"(h",W["409"]="(",W["410"]="(",W["411"]="(",W["412"]="(",W["557"]="(",W["558"]="(",W["394"]="1",W["395"]="1",W["396"]="1",W["397"]="1",W["398"]="1",W["399"]="1",W["400"]="1",W["401"]="1",W["571"]="1",W["402"]="1",W["694"]="1h",W["695"]="1h",W["696"]="1h",W["697"]="1h",W["698"]="1h",W["699"]="1h",W["700"]="1h",W["701"]="1h",W["702"]="1h",W["703"]="1h",W["386"]="3",W["387"]="w",W["406"]="6",W);var xv="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");wv.prototype.isHdr=function(){return"smpte2084"===this.l||"arib-std-b67"===this.l};g.k=Av.prototype;g.k.Qa=function(){return this.video};
g.k.wb=function(){return this.id.split(";",1)[0]};
g.k.cd=function(){return 2===this.containerType};
g.k.isEncrypted=function(){return!!this.Qc};
g.k.isAudio=function(){return!!this.audio};
g.k.isVideo=function(){return!!this.video};Hv.prototype.getName=function(){return this.name};
Hv.prototype.getId=function(){return this.id};
Hv.prototype.getIsDefault=function(){return this.isDefault};
Hv.prototype.toString=function(){return this.name};
Hv.prototype.getName=Hv.prototype.getName;Hv.prototype.getId=Hv.prototype.getId;Hv.prototype.getIsDefault=Hv.prototype.getIsDefault;g.w(Xv,g.N);g.k=Xv.prototype;g.k.appendBuffer=function(a,b,c){if(this.Qb.Hp()!==this.appendWindowStart+this.start||this.Qb.nt()!==this.appendWindowEnd+this.start||this.Qb.Kb()!==this.timestampOffset+this.start)this.Qb.supports(1),this.Qb.qv(this.appendWindowStart+this.start,this.appendWindowEnd+this.start),this.Qb.wm(this.timestampOffset+this.start);this.Qb.appendBuffer(a,b,c)};
g.k.abort=function(){this.Qb.abort()};
g.k.remove=function(a,b){this.Qb.remove(a+this.start,b+this.start)};
g.k.qv=function(a,b){this.appendWindowStart=a;this.appendWindowEnd=b};
g.k.Dt=function(){return this.timestampOffset+this.start};
g.k.Hp=function(){return this.appendWindowStart};
g.k.nt=function(){return this.appendWindowEnd};
g.k.wm=function(a){this.timestampOffset=a};
g.k.Kb=function(){return this.timestampOffset};
g.k.yd=function(a){a=this.Qb.yd(void 0===a?!1:a);return Wv(a,this.start,this.end)};
g.k.Be=function(){return this.Qb.Be()};
g.k.Vj=function(){return this.Qb.Vj()};
g.k.Jp=function(){return this.Qb.Jp()};
g.k.Rv=function(a,b){this.Qb.Rv(a,b)};
g.k.supports=function(a){return this.Qb.supports(a)};
g.k.Kp=function(){return this.Qb.Kp()};
g.k.isView=function(){return!0};
g.k.Xo=function(a,b,c){return this.isActive?this.Qb.Xo(a,b,c):!1};
g.k.As=function(){return this.Qb.As()?this.isActive:!1};
g.k.isLocked=function(){return this.bp&&!this.isActive};
g.k.gb=function(a){return this.Qb.gb(a)+(";vw."+this.start+"-"+this.end)};
g.k.Mn=function(){return this.Qb.Mn()};
g.k.zt=function(){return this.Qb.zt()};
g.k.ra=function(){Vn(this.Qb,this.Ny);g.N.prototype.ra.call(this)};var wI=!1;g.w(Zv,g.N);g.k=Zv.prototype;g.k.appendBuffer=function(a,b,c){var d;this.qp=!1;c&&(this.eq=c);b&&(b.isEncrypted()&&(this.pz=this.eq),3===b.type&&(this.dd=b));this.Io&&(2<=this.Io.length||32768<a.length?delete this.Io:this.Io.push(a));(null===(d=this.eb)||void 0===d?0:d.appendBuffer)?this.eb.appendBuffer(a):this.eb?this.eb.append(a):this.Wc&&this.Wc.webkitSourceAppend(this.id,a)};
g.k.abort=function(){try{this.eb?this.eb.abort():this.Wc&&this.Wc.webkitSourceAbort(this.id)}catch(a){}this.eq=this.dd=null};
g.k.remove=function(a,b){var c;this.qp=!1;(null===(c=this.eb)||void 0===c?0:c.remove)&&this.eb.remove(a,b)};
g.k.Hp=function(){var a;return wI&&this.isVideo?this.appendWindowStart:(null===(a=this.eb)||void 0===a?void 0:a.appendWindowStart)||0};
g.k.nt=function(){var a;return(null===(a=this.eb)||void 0===a?void 0:a.appendWindowEnd)||0};
g.k.qv=function(a,b){this.eb&&(wI&&this.isVideo?(this.appendWindowStart=a,this.eb.appendWindowEnd=b):a>this.Hp()?(this.eb.appendWindowEnd=b,this.eb.appendWindowStart=a):(this.eb.appendWindowStart=a,this.eb.appendWindowEnd=b))};
g.k.Dt=function(){return this.timestampOffset};
g.k.wm=function(a){wI?this.timestampOffset=a:this.supports(1)&&(this.eb.timestampOffset=a)};
g.k.Kb=function(){return wI?this.timestampOffset:this.supports(1)?this.eb.timestampOffset:0};
g.k.yd=function(a){if(void 0===a?0:a)return this.qp||this.Be()||(this.Ax=this.yd(!1),this.qp=!0),this.Ax;try{return this.eb?this.eb.buffered:this.Wc?this.Wc.webkitSourceBuffered(this.id):Pv([0],[Infinity])}catch(b){return Pv([],[])}};
g.k.Be=function(){var a;return(null===(a=this.eb)||void 0===a?void 0:a.updating)||!1};
g.k.Vj=function(){return this.eq};
g.k.Jp=function(){return this.pz};
g.k.Rv=function(a,b){this.containerType!==a&&(this.supports(4),$v()&&this.eb.changeType(b));this.containerType=a};
g.k.Kp=function(){return this.dd};
g.k.isView=function(){return!1};
g.k.supports=function(a){var b,c,d,e,f;switch(a){case 1:return void 0!==(null===(b=this.eb)||void 0===b?void 0:b.timestampOffset);case 0:return!(null===(c=this.eb)||void 0===c||!c.appendBuffer);case 2:return!(null===(d=this.eb)||void 0===d||!d.remove);case 3:return!!((null===(e=this.eb)||void 0===e?0:e.addEventListener)&&(null===(f=this.eb)||void 0===f?0:f.removeEventListener));case 4:return!(!this.eb||!this.eb.changeType);default:return!1}};
g.k.As=function(){return!this.Be()};
g.k.isLocked=function(){return!1};
g.k.gb=function(a){var b,c;a.to=""+this.Kb();a.up=""+ +this.Be();var d=(null===(b=this.eb)||void 0===b?void 0:b.appendWindowStart)||0,e=(null===(c=this.eb)||void 0===c?void 0:c.appendWindowEnd)||Infinity;a.aw=d.toFixed(3)+"-"+e.toFixed(3);try{a.bu=Qv(this.yd())}catch(f){}return g.pq(a)};
g.k.ra=function(){this.supports(3)&&(this.eb.removeEventListener("updateend",this.Rc),this.eb.removeEventListener("error",this.Rc));g.N.prototype.ra.call(this)};
g.k.Xo=function(a,b,c){if(!this.supports(2)||this.Be())return!1;var d=this.yd(),e=Rv(d,a);if(0>e)return!1;try{if(b&&e+1<d.length){var f=d.start(e+1),h=d.end(d.length-1);this.K();this.remove(f,h);return!0}if(this.isView())return!1;var l=Math.max(0,a-c);if(0<c&&d.start(e)<l)return this.K(),this.remove(0,l),!0}catch(m){}return!1};
g.k.K=function(){};
g.k.Mn=function(){return this.containerType};
g.k.zt=function(){return this.Io};
var Yv=!1;aw.prototype.dispose=function(){if(!this.ya){if(this.l)try{URL.revokeObjectURL(this.i)}catch(a){}this.u=!0}};
aw.prototype.ya=function(){return this.u};
aw.prototype.toString=function(){return"MediaResource {"+this.i+"}"};g.w(bw,g.F);bw.prototype.getDuration=function(){var a;return(null===(a=this.mediaSource)||void 0===a?void 0:a.duration)||this.u};
bw.prototype.Be=function(){return!!(this.i&&this.i.Be()||this.l&&this.l.Be())};
bw.prototype.C=function(){!this.ya()&&cw(this)&&this.callback&&(this.callback(this),this.callback=null)};
bw.prototype.B=function(){this.dispose()};var Nda=/action_display_post/;g.w(lw,g.N);g.k=lw.prototype;g.k.isFailed=function(){return 3===this.state};
g.k.vG=function(a){var b,c=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.Lg=this.u=!0;this.timeline||(this.timeline=new Bda);Fda(this.timeline,a,this.Ba);this.U("refresh");for(a=0;a<c.length;a++){var d=yw(this,c[a]),e=this.isLive&&g.iv(d)&&this.Ka;if(!this.i[d.id]){var f=rw(Ju(c[a],"BaseURL").textContent),h=Ju(c[a],"Initialization"),l=Iu(h,"sourceURL");h=nu(Iu(h,"range"));e&&(l="",h=void 0);this.i[d.id]=
new Hu(f,d,l,null===h?void 0:h)}d=this.i[d.id];f=Iu(c[a],"id","AdaptationSet");f=""!==f?f:Iu(c[a],"mimetype","AdaptationSet");l=this.timeline;l=l.u[d.info.id]||l.l[f]||l.i||null;f=l.i;!this.l&&l.getStreamTimeOffset()&&(this.l=l.getStreamTimeOffset());if(l.C)for(e=[],f=g.u(f),h=f.next();!h.done;h=f.next()){h=h.value;var m=d.info.id,n=8*d.info.l,p=h.oa,q=h.startSecs;var r=l.G.split("$$");for(b=0;b<r.length;b++)r[b]=r[b].replace("$RepresentationID$",m),r[b]=r[b].replace("$Number$",p.toString()),r[b]=
r[b].replace("$Bandwidth$",n.toString()),r[b]=r[b].replace("$Time$",q.toString());e.push(new Zs(h.oa,h.startSecs,h.durationSecs,h.i,r.join("$"),null,h.l))}else{l=yb(Ju(c[a],"SegmentList").getElementsByTagName("SegmentURL"),l.D);h=[];for(m=0;m<l.length;m++){n=h;p=n.push;q=f[m];r=void 0;var t=l[m];b=t.getAttribute("media");if(!e&&(t=t.getAttribute("mediaRange"),null!==t)){var v=t.split("-");v[1]&&0<=Number(v[1])?r=nu(t):b=b+"?range="+t}p.call(n,new Zs(q.oa,q.startSecs,q.durationSecs,q.i,b,r,q.l))}e=
h}d.update(e,this.isLive,this.ma)}Gda(this.timeline);return!0}this.duration=Ku(Iu(a,"mediaPresentationDuration"));a:{for(a=0;a<c.length;a++){l=c[a];d=yw(this,l);f=Ju(l,"BaseURL");e=rw(f.textContent);h=Ju(l,"SegmentBase");l=nu(h.attributes.getNamedItem("indexRange").value);h=nu(h.getElementsByTagName("Initialization")[0].attributes.getNamedItem("range").value);f=Number(f.getAttribute(ww(this,"contentLength")));d=new rv(e,d,h,l,f,NaN);if(!d){c=!1;break a}pw(this,d)}c=!0}return c};
g.k.refresh=function(){if(1!==this.state&&!this.ya()){var a=g.ae(this.sourceUrl,{start_seq:Xda(this).toString()});g.xh(Aw(this,a),function(){})}};
g.k.resume=function(){zw(this)};
g.k.Nb=function(){if(this.isManifestless&&this.C&&this.l&&this.C-this.l)return this.C&&this.l?this.C-this.l:0;var a=this.i,b;for(b in a){var c=a[b].index;if(c.Vc())return c.Nb()}return 0};
g.k.getStreamTimeOffset=function(){return this.l};
g.k.Nd=function(a){for(var b in this.i){var c=this.i[b].index;if(c.Vc()){var d=c.zf(a),e=c.Nd(d);if(e)return e+a-c.Pd(d)}}return NaN};
var uw=null,vw=!1,xw={commentary:1,alternate:2,dub:3,main:4};cx.prototype.clone=function(a){return new cx(this.flavor,a,this.u,this.experiments)};
cx.prototype.gb=function(){return{flavor:this.flavor,keySystem:this.keySystem}};
cx.prototype.Md=function(){switch(this.keySystem){case "com.youtube.playready":return"PRY";case "com.microsoft.playready":return"PRM";case "com.widevine.alpha":return"WVA";case "com.youtube.widevine.l3":return"WVY";case "com.youtube.widevine.forcehdcp":return"WVYF";case "com.youtube.fairplay":return"FPY";case "com.apple.fps.1_0":return"FPA";default:return this.keySystem}};
var tQ={},mx=(tQ.playready=["com.youtube.playready","com.microsoft.playready"],tQ.widevine=["com.youtube.widevine.forcehdcp","com.youtube.widevine.l3","com.widevine.alpha"],tQ);g.w(nx,g.F);
nx.prototype.initialize=function(a,b){for(var c=this,d=g.u(Object.keys(a)),e=d.next();!e.done;e=d.next()){e=g.u(a[e.value]);for(var f=e.next();!f.done;f=e.next())if(f=f.value,f.Qc)for(var h=g.u(Object.keys(f.Qc)),l=h.next();!l.done;l=h.next())if(l=l.value,mx[l])for(var m=g.u(mx[l]),n=m.next();!n.done;n=m.next())n=n.value,this.l[n]=this.l[n]||new cx(l,n,f.Qc[l],this.experiments),this.B[l]=this.B[l]||{},this.B[l][f.mimeType]=!0}Gk()&&(this.l["com.youtube.fairplay"]=new cx("fairplay","com.youtube.fairplay","",
this.experiments),this.B.fairplay={'video/mp4; codecs="avc1.4d400b"':!0,'audio/mp4; codecs="mp4a.40.5"':!0});this.i=cea(b,this.useCobaltWidevine,g.P(this.experiments,"html5_enable_safari_fairplay"),g.bx(this.experiments,"html5_hdcp_probing_stream_url")).filter(function(p){return!!c.l[p]})};
nx.prototype.K=function(){};
nx.prototype.S=function(a){return g.P(this.experiments,a)};var wea={RED:"red",eT:"white"};qx.prototype.canPlayType=function(a,b){a=a.canPlayType?a.canPlayType(b):!1;Mk?a=a||Vka[b]:2.2===by?a=a||Wka[b]:Dk()&&(a=a||Xka[b]);return!!a};
qx.prototype.isTypeSupported=function(a){this.K();return this.D?window.cast.receiver.platform.canDisplayType(a):Kv(a)};
qx.prototype.disableAv1=function(){this.I=!0};
qx.prototype.K=function(){};
var Wka={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},Xka={"application/x-mpegURL":"maybe"},Vka={"application/x-mpegURL":"maybe"};g.w(ux,g.N);ux.prototype.add=function(a,b){!this.items[a]&&(b.Ex||b.kD||b.Ov)&&(this.items[a]=g.hc(b),this.U("vast_info_card_add",a))};
ux.prototype.remove=function(a){var b=this.get(a);delete this.items[a];return b};
ux.prototype.get=function(a){return this.items[a]||null};
ux.prototype.isEmpty=function(){return g.$b(this.items)};var hy={fN:1,gN:2,hN:3,1:"LOAD_POLICY_ALWAYS",2:"LOAD_POLICY_BY_PREFERENCE",3:"LOAD_POLICY_BY_REQUEST"};wx.prototype.wf=function(a,b){var c=Math.pow(this.alpha,a);this.i=b*(1-c)+c*this.i;this.l+=a};
wx.prototype.ze=function(){return this.i/(1-Math.pow(this.alpha,this.l))};yx.prototype.wf=function(a,b){a=Math.min(this.i,Math.max(1,Math.round(a*this.resolution)));a+this.valueIndex>=this.i&&(this.l=!0);for(;a--;)this.values[this.valueIndex]=b,this.valueIndex=(this.valueIndex+1)%this.i;this.B=!0};
yx.prototype.ze=function(){return this.C?(zx(this,this.u-this.C)+zx(this,this.u)+zx(this,this.u+this.C))/3:zx(this,this.u)};g.w(Lx,g.F);var qea=/^([0-9\.]+):([0-9\.]+)$/;var vea="area120-boutique blogger books docs duo google-live google-one play shopping chat hangouts-meet photos-edu picasaweb gmail jamboard".split(" "),ry={gI:"cbrand",hI:"cbr",iI:"cbrver",WL:"c",ZL:"cver",YL:"ctheme",XL:"cplayer",aP:"cmodel",DP:"cnetwork",RP:"cos",SP:"cosver",lQ:"cplatform"};g.w(qy,g.F);g.k=qy.prototype;g.k.S=function(a){return g.P(this.experiments,a)};
g.k.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);c=ty(this);d&&"www.youtube.com"===c?d="https://youtu.be/"+a:g.ny(this)?(d="https://"+c+"/fire",b.v=a):(d||"www.youtube.com"!==c||(c="m.youtube.com"),d=this.protocol+"://"+c+"/watch",b.v=a,Mk&&(a=Vi())&&(b.ebc=a));return g.ae(d,b)};
g.k.getVideoEmbedCode=function(a,b,c){a="https://"+ty(this)+"/embed/"+a;c&&(a=g.ae(a,{list:c}));c=b.width;b=b.height;a=g.Hd(a);return'<iframe width="'+c+'" height="'+b+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
g.k.supportsGaplessAudio=function(){return Lv&&!Mk&&74<=Ak()||kx&&g.Ge(68)?!0:!1};
g.k.getPlayerType=function(){return this.deviceParams.cplayer};g.k=Ey.prototype;g.k.Md=function(){return this.i};
g.k.Nm=function(){return null};
g.k.Ay=function(){var a=this.Nm();return a?(a=g.lj(a.i),Number(a.expire)):NaN};
g.k.ev=function(){};
g.k.wb=function(){return this.i.wb()};
g.k.getHeight=function(){return this.i.Qa().height};Gy.prototype.xf=function(){yea(this);var a=["#EXTM3U","#EXT-X-INDEPENDENT-SEGMENTS"],b={};a:if(this.i)var c=this.i;else{c="";for(var d=g.u(this.u),e=d.next();!e.done;e=d.next())if(e=e.value,e.i){if(e.i.getIsDefault()){c=e.i.getId();break a}c||(c=e.i.getId())}}d=g.u(this.u);for(e=d.next();!e.done;e=d.next())e=e.value,e.i&&e.i.getId()!==c||(b[e.itag]=e);c=g.u(this.l);for(d=c.next();!d.done;d=c.next())if(d=d.value,e=b[d.l]){var f=a,h=f.push,l="#EXT-X-MEDIA:TYPE=AUDIO,",m="YES",n="audio";if(e.i){n=e.i;
var p=n.getId().split(".")[0];p&&(l+='LANGUAGE="'+p+'",');this.i||n.getIsDefault()||(m="NO");n=n.getName()}p="";null!==d&&(p=d.itag.toString());p=Hy(this,e.url,p);l=l+('NAME="'+n+'",DEFAULT='+(m+',AUTOSELECT=YES,GROUP-ID="'))+(Iy(e,d)+'",URI="'+(p+'"'));h.call(f,l)}c=g.u(this.l);for(d=c.next();!d.done;d=c.next())if(d=d.value,e=b[d.l])e="#EXT-X-STREAM-INF:BANDWIDTH="+(d.bitrate+e.bitrate)+',CODECS="'+(d.codecs+","+e.codecs+'",RESOLUTION=')+(d.width+"x"+d.height+',AUDIO="')+(Iy(e,d)+'",CLOSED-CAPTIONS=NONE'),
1<d.fps&&(e+=",FRAME-RATE="+d.fps),d.u&&(e+=",VIDEO-RANGE="+d.u),a.push(e),a.push(Hy(this,d.url,""));return a.join("\n")};g.w(Ky,Ey);Ky.prototype.Ay=function(){return this.expiration};
Ky.prototype.Nm=function(){if(!this.l||this.l.ya()){var a=this.u.xf();a="data:application/x-mpegurl;charset=utf-8,"+encodeURIComponent(a);this.l=new aw(a)}return this.l};g.w(My,Ey);My.prototype.Nm=function(){return new aw(Qs(this.l))};
My.prototype.ev=function(){this.l=Vs(this.l)};g.w(Ny,Ey);Ny.prototype.Nm=function(){return new aw(this.l)};var uQ={},WA=(uQ.AD_MARKER="ytp-ad-progress",uQ.CHAPTER_MARKER="ytp-chapter-marker",uQ.TIME_MARKER="ytp-time-marker",uQ);g.k=g.Qy.prototype;g.k.getId=function(){return this.id};
g.k.getName=function(){return this.name};
g.k.isServable=function(){return this.i};
g.k.toString=function(){return this.languageCode+": "+g.Ry(this)+" - "+this.vssId};
g.k.isValid=function(){return!(!this.languageCode||this.translationLanguage&&!this.translationLanguage.languageCode)};var Sy={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},Ty={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},Uy=/^(\d*)_((\d*)_?(\d*))$/;var Wy={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},Zy={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};var vQ={},Wea=(vQ.ALWAYS=1,vQ.BY_REQUEST=3,vQ.UNKNOWN=void 0,vQ),wQ={},Sea=(wQ.COLOR_PRIMARIES_BT709="bt709",wQ.COLOR_PRIMARIES_BT2020="bt2020",wQ.COLOR_PRIMARIES_UNKNOWN=null,wQ.COLOR_PRIMARIES_UNSPECIFIED=null,wQ),xQ={},Kea=(xQ.COLOR_TRANSFER_CHARACTERISTICS_BT709="bt709",xQ.COLOR_TRANSFER_CHARACTERISTICS_BT2020_10="bt2020",xQ.COLOR_TRANSFER_CHARACTERISTICS_SMPTEST2084="smpte2084",xQ.COLOR_TRANSFER_CHARACTERISTICS_ARIB_STD_B67="arib-std-b67",xQ.COLOR_TRANSFER_CHARACTERISTICS_UNKNOWN=null,xQ.COLOR_TRANSFER_CHARACTERISTICS_UNSPECIFIED=
null,xQ),yQ={},hz=(yQ.FAIRPLAY="fairplay",yQ.PLAYREADY="playready",yQ.WIDEVINE="widevine",yQ.CLEARKEY=null,yQ.FLASHACCESS=null,yQ.UNKNOWN=null,yQ.WIDEVINE_CLASSIC=null,yQ),zQ={},Xea=(zQ.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_UNKNOWN="UNKNOWN",zQ.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_NORMAL="NORMAL",zQ.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_LOW="LOW",zQ.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_ULTRA_LOW="ULTRALOW",zQ),AQ={},Pea=(AQ.UNKNOWN=0,AQ.RECTANGULAR=1,AQ.EQUIRECTANGULAR=2,AQ.EQUIRECTANGULAR_THREED_TOP_BOTTOM=
3,AQ.MESH=4,AQ),BQ={},Rea=(BQ.SPATIAL_AUDIO_TYPE_NONE=0,BQ.SPATIAL_AUDIO_TYPE_AMBISONICS_5_1=1,BQ.SPATIAL_AUDIO_TYPE_AMBISONICS_QUAD=2,BQ.SPATIAL_AUDIO_TYPE_FOA_WITH_NON_DIEGETIC=3,BQ),CQ={},Qea=(CQ.STEREO_LAYOUT_UNKNOWN=0,CQ.STEREO_LAYOUT_LEFT_RIGHT=1,CQ.STEREO_LAYOUT_TOP_BOTTOM=2,CQ),DQ={},Oea=(DQ.FORMAT_STREAM_TYPE_UNKNOWN=0,DQ.FORMAT_STREAM_TYPE_OTF=3,DQ);g.w(jz,g.N);jz.prototype.ra=function(){this.i&&(this.i=this.i.onload=null);g.N.prototype.ra.call(this)};g.k=kz.prototype;g.k.getHeight=function(){return this.height};
g.k.Dy=function(){return this.l};
g.k.isDefault=function(){return-1!==this.B.indexOf("default")};
g.k.Vc=function(){return this.loaded.has(void 0)};
g.k.mw=function(a){var b=this.Dy()-1;return g.bf(0===this.u?Math.round(a*this.l/this.videoLength):Math.round(1E3*a/this.u),0,b)};
g.k.fp=function(){return this.l-1};
g.k.Dr=function(){return this.l?0:-1};
g.k.nw=function(){};g.w(lz,jz);lz.prototype.l=function(a,b){var c=[];a=a.split("|");for(var d=a[0],e=1;e<a.length;e++){var f=this.u(e-1,d,a[e],b);(this.B||180>f.getHeight())&&c.push(f)}return c};
lz.prototype.u=function(a,b,c,d){return new kz(a,b,c,d)};g.w(mz,kz);g.k=mz.prototype;g.k.Dy=function(){return this.i.Jl()};
g.k.mw=function(a){var b=this.rows*this.columns*this.D,c=this.i,d=c.vb();a=c.zf(a);return a>d-b?-1:a};
g.k.fp=function(){return this.i.vb()};
g.k.Dr=function(){return this.i.Qf()};
g.k.nw=function(a){this.i=a};g.w(nz,lz);nz.prototype.l=function(a,b){return lz.prototype.l.call(this,"$N|"+a,b)};
nz.prototype.u=function(a,b,c){return new mz(a,b,c,this.isLive)};g.w(g.rz,g.N);g.k=g.rz.prototype;g.k.V=function(){return this.B};
g.k.S=function(a){return g.P(this.B.experiments,a)};
g.k.cq=function(){return!this.isLivePlayback||this.allowLiveDvr};
g.k.Rz=function(){this.ya()||(this.i.u||this.i.unsubscribe("refresh",this.Rz,this),this.Jx(-1))};
g.k.Jx=function(a){if(!this.isLivePlayback||!this.C||"fairplay"!=this.C.flavor){var b=this.i;var c=this.Ur;b=b.timeline?yb(b.timeline.B,c):b.N.length?yb(b.N,c):[];if(0<b.length&&(this.U("cuepointupdated",b,a),this.Ur+=b.length,Rz(this)&&g.Mz(this)))for(b=g.u(b),c=b.next();!c.done;c=b.next())c=c.value,this.Ja("cuepoint","segNum."+a+";event."+c.event+";startSecs."+c.startSecs),"start"===c.event&&(c=c.startSecs,this.Hm.start=this.yl,this.Hm.end=c+3)}};
g.k.od=function(){var a={};this.u&&(a.fmt=this.u.wb(),this.G&&this.G.wb()!=this.u.wb()&&(a.afmt=this.G.wb()));a.ei=this.eventId;a.list=this.playlistId;a.cpn=this.clientPlaybackNonce;this.videoId&&(a.v=this.videoId);this.Xb&&(a.infringe=1);this.Mc&&(a.splay=1);var b=aA(this);b&&(a.live=b);this.Yf&&(a.autoplay=1);this.sB&&(a.sdetail=this.sB);this.qb&&(a.partnerid=this.qb);this.osid&&(a.osid=this.osid);return a};
g.k.Ji=function(){var a=g.By(this.B)||this.S("web_l3_storyboard");if(!this.Vd)if(this.playerResponse&&this.playerResponse.storyboards){var b=this.playerResponse.storyboards,c=b.playerStoryboardSpecRenderer;c&&c.spec?this.Vd=new lz(c.spec,this.lengthSeconds,void 0,!1,a):(b=b.playerLiveStoryboardSpecRenderer)&&b.spec&&this.i&&(c=Rb(this.i.i).index)&&(this.Vd=new nz(b.spec,this.i.isLive,c,a))}else this.wj?this.Vd=new lz(this.wj,this.lengthSeconds,void 0,!1,a):this.pj&&this.i&&(b=Rb(this.i.i).index)&&
(this.Vd=new nz(this.pj,this.i.isLive,b,a));return this.Vd};
g.k.getStoryboardFormat=function(){if(this.playerResponse&&this.playerResponse.storyboards){var a=this.playerResponse.storyboards;return(a=a.playerStoryboardSpecRenderer||a.playerLiveStoryboardSpecRenderer)&&a.spec||null}return this.wj||this.pj};
g.k.Nb=function(){return this.i&&!isNaN(this.i.Nb())?this.i.Nb():0};
g.k.getPlaylistSequenceForTime=function(a){if(this.i&&this.u){var b=this.i.i[this.u.id];if(!b)return null;var c=b.index.zf(a);b=b.index.Pd(c);return{sequence:c,elapsed:Math.floor(1E3*(a-b))}}return null};
g.k.isValid=function(){return!this.ya()&&!(!this.videoId&&!this.Kd)};
g.k.Vc=function(){return sz(this)&&!this.Wb&&!this.cg};
g.k.Af=function(a){if(30==this.qb)return(a=this.ub["default.jpg"])?a:this.videoId?g.ae("//docs.google.com/vt",{id:this.videoId,authuser:this.ZA,authkey:this.authKey}):"//docs.google.com/images/doclist/cleardot.gif";a||(a="hqdefault.jpg");var b=this.ub[a];return b||"pop1.jpg"==a||"pop2.jpg"==a||"sddefault.jpg"==a||"hq720.jpg"==a||"maxresdefault.jpg"==a?b:g.uy(this.B,this.videoId,a)};
g.k.Lg=function(){return this.isLivePlayback||this.qd||this.Vf||!(!this.liveUtcStartSeconds||!this.Oc)};
g.k.isOtf=function(){return!!this.i&&(this.i.isOtf||!this.qd&&!this.isLivePlayback&&this.i.u)};
g.k.getAvailableAudioTracks=function(){return this.l?0<this.l.getAvailableAudioTracks().length?this.l.getAvailableAudioTracks():this.dh||[]:[]};
g.k.getAudioTrack=function(){var a=this;if(this.G&&!Ev(this.G))return g.lb(this.getAvailableAudioTracks(),function(d){return d.id==a.G.id})||this.Ke;
if(this.dh){if(!this.Sg)for(var b=g.u(this.dh),c=b.next();!c.done;c=b.next())if(c=c.value,c.i.getIsDefault()){this.Sg=c;break}return this.Sg||this.Ke}return this.Ke};
g.k.getPlayerResponse=function(){return this.playerResponse};
g.k.getPlaylistId=function(){return null};
g.k.Qa=function(){return this};
g.k.Ft=function(){return this.B.getVideoUrl(this.videoId)};
g.k.isAd=function(){return!!this.adFormat};
g.k.uv=function(){return this.Wd||this.Vb};
g.k.Mo=function(){return this.Hc||this.Vb};
g.k.useInnertubeDrmService=function(){if(!(this.C&&this.playerResponse&&this.playerResponse.playerConfig&&this.playerResponse.playerConfig.webDrmConfig))return!1;var a="playready"===this.C.flavor&&this.playerResponse.playerConfig.webDrmConfig.useItdrmForPlayready,b="fairplay"===this.C.flavor&&this.playerResponse.playerConfig.webDrmConfig.useItdrmForFairplay;return!!("widevine"===this.C.flavor&&this.playerResponse.playerConfig.webDrmConfig.useItdrmForWidevine||a||b)};
g.k.Ja=function(a,b,c){this.U("ctmp",a,b,c)};pA.prototype.getLocalMediaInfoById=function(a){return D(this,function c(){return A(c,function(d){return d.return(gs(a))})})};
pA.prototype.getAllLocalMediaInfo=function(){return D(this,function b(){return A(b,function(c){return c.return(hs())})})};
pA.prototype.i=function(a){if(a.Do&&2===a.status&&!a.jm)Tr(a.videoId,2);else if(4===a.status){var b=a.videoId;Tr(b,4);$r(b,!1)}g.P(this.api.V().experiments,"hoffle_api")&&this.api.Ga("localmediachange",Py(a));sA(this)};
pA.prototype.K=function(){};g.w(AA,g.F);g.k=AA.prototype;
g.k.handleExternalCall=function(a,b,c){var d=this.C[a],e=this.G[a],f=d;if(e)if(c&&Gs(c,pQ,qQ))f=e;else if(!d)throw Error('API call from an untrusted origin: "'+c+'"');d=this.app.V();d.Oe&&!this.N.has(a)&&(this.N.add(a),g.Zl("webPlayerApiCalled",{callerUrl:d.loaderUrl,methodName:a,origin:c||void 0,playerStyle:d.playerStyle||void 0}));if(f){c=!1;d=g.u(b);for(e=d.next();!e.done;e=d.next())if(String(e.value).includes("javascript:")){c=!0;break}c&&g.to(Error('Dangerous call to "'+a+'" with ['+b+"]."));
return f.apply(this,b)}throw Error('Unknown API method: "'+a+'".');};
g.k.isExternalMethodAvailable=function(a,b){return this.C[a]?!0:!!(this.G[a]&&b&&Gs(b,pQ,qQ))};
g.k.getBandwidthEstimate=function(){return Fx(this.app.V().schedule)};
g.k.reportPlaybackIssue=function(a){a=void 0===a?"":a;var b=g.T(this.app);b&&(a={gpu:GL(),d:a},b.handleError(new oq("feedback",!1,a)))};
g.k.getApiInterface=function(){return this.I.slice()};
g.k.getInternalApiInterface=function(){return g.Tb(this.l)};
g.k.iD=function(a,b){if("string"===typeof b){var c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];g.Na(b).apply(window,e)};
this.D[b]=c}else c=b;this.app.uh.subscribe(a,c)};
g.k.DG=function(a,b){if("string"===typeof b){var c=this.D[b],d=this.D;b in d&&delete d[b];b=c}this.app.uh.unsubscribe(a,b)};
g.k.getPlayerState=function(){return $O(this.app)};
g.k.cueVideoByPlayerVars=function(a,b){this.app.cueVideoByPlayerVars(a,b||this.playerType)};
g.k.loadVideoByPlayerVars=function(a,b,c,d,e){this.app.loadVideoByPlayerVars(a,c||this.playerType,b,d,e)};
g.k.preloadVideoByPlayerVars=function(a,b,c,d,e){c=void 0===c?NaN:c;this.app.preloadVideoByPlayerVars(a,b||this.playerType,c,void 0===d?"":d,void 0===e?"":e)};
g.k.seekTo=function(a,b,c){this.i&&hP(this.app,!0,this.playerType);qP(this.app,a,b,c,this.playerType)};
g.k.seekToChapterWithAnimation=function(a){this.app.seekToChapterWithAnimation(a)};
g.k.seekToStreamTime=function(a,b,c){this.i&&hP(this.app,!0,this.playerType);var d=this.app,e=this.playerType;b=void 0===b?!0:b;var f=void 0===f?!1:f;var h=g.T(d,e),l=0;h&&h.getStreamTimeOffset()&&!h.Kb()&&(l=h.getStreamTimeOffset());qP(d,a-l,b,c,e,f)};
g.k.getStreamTimeOffset=function(){var a=g.T(this.app,1);return a?a.getStreamTimeOffset():0};
g.k.seekToLiveHead=function(a,b){var c=g.T(this.app,this.playerType);c&&(c=c.getVideoData())&&c.isLivePlayback&&qP(this.app,Infinity,a,b,this.playerType)};
g.k.getCurrentTime=function(){return this.app.getCurrentTime(this.playerType)};
g.k.getMediaReferenceTime=function(){var a=this.app.Nd(this.playerType);return isNaN(a)?this.getCurrentTime():a};
g.k.getDuration=function(){return this.app.getDuration(this.playerType)};
g.k.getVolume=function(){return this.app.cf.volume};
g.k.setVolume=function(a){DA(this,a)};
g.k.isMuted=function(){return this.app.cf.muted};
g.k.mute=function(){EA(this)};
g.k.unMute=function(){FA(this)};
g.k.playVideo=function(){this.i&&hP(this.app,!0,this.playerType);var a=this.app.getPresentingPlayerType();if(2===a&&!this.app.Cc()){var b=yB(this.app.Za());if(!b.cz()){b.Kh("control_play");return}}3===a?g.OA(this.app.Za()).Kh("control_play"):this.app.playVideo(a)};
g.k.pauseVideo=function(){var a=this.app.getPresentingPlayerType();if(2===a&&!this.app.Cc()){var b=yB(this.app.Za());if(!b.cz()){b.Kh("control_pause");return}}3===a?g.OA(this.app.Za()).Kh("control_pause"):this.app.pauseVideo(a)};
g.k.stopVideo=function(){var a=this.app;a.Fa.U("pageTransition");a.stopVideo()};
g.k.clearVideo=function(){};
g.k.getPlaybackRate=function(){return g.T(this.app,1).getPlaybackRate()};
g.k.setPlaybackRate=function(a){"number"===typeof a&&this.app.setPlaybackRate(a)};
g.k.getAvailablePlaybackRates=function(){var a=this.app.V();if(a.Vf){var b=a.B||a.S("web_player_admin_origin_killswitch")?a.qb[0]:window.location.origin;a=["https://admin.youtube.com","https://viacon.corp.google.com","https://yurt.corp.google.com"].includes(b)||a.nf?Pka:hQ}else a=[1];return a};
g.k.getPlaybackQuality=function(a){return(a=g.T(this.app,a))?a.getPlaybackQuality():"unknown"};
g.k.setPlaybackQuality=function(){};
g.k.getAvailableQualityLevels=function(){var a=g.T(this.app,this.playerType);return a?(a=g.Zc(a.Hn(),function(b){return b.quality}),a.length&&("auto"===a[0]&&a.shift(),a=a.concat(["auto"])),a):[]};
g.k.getVideoBytesLoaded=function(){return this.getVideoLoadedFraction()};
g.k.getVideoBytesTotal=function(){return 1};
g.k.getVideoLoadedFraction=function(){return this.app.getVideoLoadedFraction()};
g.k.getVideoStartBytes=function(){return 0};
g.k.setSize=function(){this.app.Db().resize()};
g.k.channelSubscribed=function(){this.Ga("SUBSCRIBE",MO(this.app).jj)};
g.k.channelUnsubscribed=function(){this.Ga("UNSUBSCRIBE",MO(this.app).jj)};
g.k.getStatsForNerds=function(){return this.app.getStatsForNerds()};
g.k.setScreenLayer=function(a){this.app.setScreenLayer(a)};
g.k.getCurrentPlaylistSequence=function(){return g.T(this.app).getPlaylistSequenceForTime(this.app.getCurrentTime())};
g.k.getPlaylistSequenceForTime=function(a){return g.T(this.app).getPlaylistSequenceForTime(a)};
g.k.shouldSendVisibilityState=function(){return!0};
g.k.updateFullerscreenEduButtonVisibility=function(){GA(this.app.Za())};
g.k.updateFullerscreenEduButtonSubtleModeState=function(){GA(this.app.Za())};
g.k.confirmYpcRental=function(){var a=g.T(this.app,this.playerType);a&&a.jd("ypc_clickwrap")};
g.k.setHomeGroupInfo=function(a){this.app.V().homeGroupInfo=a};
g.k.setConnectedRemoteApps=function(a){this.app.V().Re=a};
g.k.setLivingRoomAppMode=function(a){this.app.V().livingRoomAppMode=Px("LIVING_ROOM_APP_MODE_UNSPECIFIED",a,py)};
g.k.setEnablePrivacyFilter=function(a){this.app.V().enablePrivacyFilter=void 0===a?!1:a};
g.k.isPictureInPictureAllowed=function(){return MO(this.app).Jm};
g.k.togglePictureInPicture=function(){this.app.togglePictureInPicture()};
g.k.loadModule=function(a){"captions"===a&&(a=pB(this.app.Za()))&&!a.loaded&&a.load()};
g.k.unloadModule=function(a){"captions"===a&&(a=pB(this.app.Za()))&&a.loaded&&a.fH()};
g.k.loadVideoById=function(a,b,c){a&&(a=this.app.loadVideoByPlayerVars(zq(a,b,c),this.playerType),this.i&&hP(this.app,a,this.playerType))};
g.k.cueVideoById=function(a,b,c){this.app.cueVideoByPlayerVars(zq(a,b,c),this.playerType)};
g.k.loadVideoByUrl=function(a,b,c){a=Aq(a,b,c);a=this.app.loadVideoByPlayerVars(a,this.playerType);this.i&&hP(this.app,a,this.playerType)};
g.k.cueVideoByUrl=function(a,b,c){a=Aq(a,b,c);this.app.cueVideoByPlayerVars(a,this.playerType)};
g.k.getVideoUrl=function(){var a=this.app.V(),b=MO(this.app),c=void 0;b.isLivePlayback||(c=Math.floor(this.app.getCurrentTime(1)));return a.getVideoUrl(b.videoId,this.getPlaylistId()||void 0,c)};
g.k.getDebugText=function(){return this.app.getDebugText()};
g.k.getVideoEmbedCode=function(){return this.app.V().getVideoEmbedCode(MO(this.app).videoId,this.app.Db().getPlayerSize(),this.getPlaylistId()||void 0)};
g.k.addCueRange=function(a,b,c){return kP(this.app,a,b,c)};
g.k.removeCueRange=function(a){a:{for(var b=this.app,c=cK(b.l.T)||[],d=0;d<c.length;d++){var e=c[d];if(e.getId()===a){b.l.removeCueRange(e);g.DO(b,"cuerangesremoved",[e]);a=!0;break a}}a=!1}return a};
g.k.loadPlaylist=function(a,b,c,d){this.app.loadPlaylist(a,b,c,d);this.i&&hP(this.app,!0,this.playerType)};
g.k.cuePlaylist=function(a,b,c,d){this.app.cuePlaylist(a,b,c,d)};
g.k.nextVideo=function(){this.app.nextVideo();this.i&&hP(this.app,!0,this.playerType)};
g.k.previousVideo=function(){this.app.previousVideo();this.i&&hP(this.app,!0,this.playerType)};
g.k.playVideoAt=function(a){this.app.playVideoAt(a);this.i&&hP(this.app,!0,this.playerType)};
g.k.setShuffle=function(a){var b=this.app.getPlaylist();b&&b.setShuffle(a)};
g.k.setLoop=function(a){var b=this.app.getPlaylist();b&&(b.loop=a)};
g.k.ID=function(){var a=this.app.getPlaylist();if(!a)return null;for(var b=[],c=0;c<a.length;c++){var d=a.Qa(c);d&&b.push(d.videoId)}return b};
g.k.getPlaylistIndex=function(){var a=this.app.getPlaylist();return a?a.index:-1};
g.k.getPlaylistId=function(){var a=this.app.getPlaylist();return a&&a.listId?a.listId.toString():null};
g.k.setOption=function(a,b,c){if(!b)return null;var d=this.app.Za();return"captions"===a?(a=pB(d))&&a.jh(b,c):null};
g.k.getOption=function(a,b,c){var d=g.T(this.app,this.playerType);return d&&d.getVideoData().isPrivate&&this.app.V().B?{}:this.setOption(a,b,c)};
g.k.getOptions=function(a){var b=this.app.Za();if("captions"===a)return(b=pB(b))&&b.getOptions();if(!a)return a=[],pB(b)&&a.push("captions"),a};
g.k.Sp=function(a){a=void 0===a?this.playerType:a;var b={};if(a=g.T(this.app,a)){a=a.getVideoData();if(a.isPrivate)return{};b.video_id=a.videoId;b.author=a.author;b.title=a.title;if(a.u&&a.u.video){b.video_quality=a.u.video.quality;a=a.u.video;var c=[];32<a.fps&&c.push("hfr");a.isHdr()&&c.push("hdr");"bt2020"===a.primaries&&c.push("wcg");b.video_quality_features=c}}if(a=this.getPlaylistId())b.list=a;return b};
g.k.showVideoInfo=function(){BO(this.app,!0)};
g.k.hideVideoInfo=function(){BO(this.app,!1)};
g.k.isVideoInfoVisible=function(){return this.app.isVideoInfoVisible()};
g.k.getAdState=function(){return this.app.getAdState()};
g.k.isNotServable=function(a){if(a!==this.app.config.args.video_id)return!1;var b=(a=(a=g.T(this.app,1))?a.getPlayerState():null)?a.getData():null;return!!(a&&b&&g.S(a,128)&&5===kQ[b.errorCode])};
g.k.getSphericalProperties=function(){var a=tB(this.app.Za());return a?2===this.playerType?{}:a.getSphericalProperties():{}};
g.k.setSphericalProperties=function(a){if(a&&2!==this.playerType){var b=tB(this.app.Za());b&&b.setSphericalProperties(a,!0)}};
g.k.supportsGaplessAudio=function(){return this.app.V().supportsGaplessAudio()};
g.k.enqueueVideoByPlayerVars=function(a,b,c,d){c=void 0===c?Infinity:c;this.app.enqueueVideoByPlayerVars(a,b,c,void 0===d?"":d)};
g.k.clearQueue=function(){this.app.clearQueue()};
g.k.destroy=function(){this.app.dispose()};
g.k.sendAbandonmentPing=function(){var a=g.T(this.app);a&&a.sendAbandonmentPing()};
g.k.deleteLocalMediaById=function(a){return qA(a)};
g.k.deleteAllLocalMedia=function(){return lfa()};
g.k.cancelPendingLocalMediaById=function(a){return this.app.cancelPendingLocalMediaById(a)};
g.k.ED=function(){};
g.k.fetchLocalMediaById=function(a){return this.app.fetchLocalMediaById(a)};
g.k.getLocalPlayerResponse=function(a){return this.app.getLocalPlayerResponse(a)};
g.k.getLocalMediaInfoById=function(a){return this.app.getLocalMediaInfoById(a)};
g.k.getAllLocalMediaInfo=function(){return this.app.getAllLocalMediaInfo()};
g.k.downloadVideo=function(a){return this.app.downloadVideo(a)};
g.k.refreshAllVideos=function(){return this.app.refreshAllVideos()};
g.k.deleteAllVideos=function(){return this.app.deleteAllVideos()};
g.k.deleteVideos=function(a){return this.app.deleteVideos(a)};
g.k.startOrchestration=function(){return this.app.startOrchestration()};
g.k.stopOrchestration=function(){return this.app.stopOrchestration()};
g.k.setAutonavState=function(a){var b=this.app;MO(b).autonavState=a;Rka(a);b.Fa.U("autonavchange",a)};
g.k.setAutonav=function(a){this.setAutonavState(a?2:1)};
g.k.setLoopRange=function(a){this.app.setLoopRange(a)};
g.k.getLoopRange=function(){return this.app.getLoopRange()};
g.k.setImmersivePreview=function(a){this.app.setImmersivePreview(a)};
g.k.setIsExternalPlaylist=function(a){this.app.setIsExternalPlaylist(a)};
g.k.getAppState=function(){return this.app.getAppState()};
g.k.addInfoCardXml=function(a,b,c){this.app.V().I.add(a,{kD:b,Ov:c})};
g.k.updateLastActiveTime=function(){nk()};
g.k.setBlackout=function(a){this.app.setBlackout(a)};
g.k.setAccountLinkState=function(a){this.app.setAccountLinkState(a)};
g.k.updateAccountLinkingConfig=function(a){this.app.updateAccountLinkingConfig(a)};
g.k.setUserEngagement=function(a){this.app.V().Jd!==a&&(this.app.V().Jd=a,(a=g.T(this.app,this.playerType))&&RN(a))};
g.k.updateSubtitlesUserSettings=function(a){pB(this.app.Za()).mB(a,!0)};
g.k.getCaptionWindowContainerId=function(){var a=pB(this.app.Za());return a?a.getCaptionWindowContainerId():""};
g.k.setFauxFullscreen=function(a){g.Nn();this.app.Qh(a?2:0)};
g.k.setUseFastSizingOnWatch=function(a){this.app.Db().setUseFastSizingOnWatch(a)};
g.k.getPresentingPlayerType=function(){var a=this.app.getPresentingPlayerType(!0);2===a&&this.app.Cc()&&(a=1);return a};
g.k.getPlayerResponse=function(){var a=g.T(this.app,this.playerType);return a?a.getVideoData().getPlayerResponse():null};
g.k.getStoryboardFrame=function(a,b){var c=this.app.Ji();if(!c)return null;b=c.levels[b];if(!b)return null;a>=b.Dr()&&b.fp();c=Math.floor(a/(b.columns*b.rows));var d=b.columns*b.rows,e=a%d;a=e%b.columns;e=Math.floor(e/b.columns);var f=b.fp()+1-d*c;if(f<b.columns){var h=f;d=1}else h=b.columns,d=f<d?Math.ceil(f/b.columns):b.rows;f=b.C;f=f.replace("$N",b.B);f=f.replace("$L",b.level.toString());f=f.replace("$M",c.toString());b.signature&&(f=g.ae(f,{sigh:b.signature}));return b={url:Os(f),column:a,columns:h,
row:e,rows:d,lE:b.width*h,kE:b.height*d},{column:b.column,columns:b.columns,height:b.kE,row:b.row,rows:b.rows,url:b.url,width:b.lE}};
g.k.getStoryboardFrameIndex=function(a,b){var c=this.app.Ji();if(!c)return-1;b=c.levels[b];if(!b)return-1;a-=this.Kb();return b.mw(a)};
g.k.getStoryboardLevel=function(a){var b=this.app.Ji();return b?(b=b.levels[a])?{index:a,intervalMs:b.u,maxFrameIndex:b.fp(),minFrameIndex:b.Dr()}:null:null};
g.k.getNumberOfStoryboardLevels=function(){var a=this.app.Ji();return a?a.levels.length:0};
g.k.getAudioTrack=function(){var a=g.T(this.app,this.playerType);return a?a.getAudioTrack():this.app.getVideoData().Ke};
g.k.setAudioTrack=function(a){3===this.getPresentingPlayerType()&&g.OA(this.app.Za()).Kh("control_set_audio_track");var b=g.T(this.app,this.playerType);if(b){var c;if(!b.ya()&&!g.S(b.playerState,128))if(null===(c=b.videoData.l)||void 0===c?0:c.i)b.l.setAudioTrack(a);else{a:if(c=b.videoData,c.G&&!Ev(c.G)||a==c.Sg||!c.Xa||0>=c.Xa.length)c=!1;else{for(var d=g.u(c.Xa),e=d.next();!e.done;e=d.next()){e=e.value;if(!(e instanceof Ky)){c=!1;break a}var f=a.i.getId();e.u&&(e.u.i=f,e.l=null)}c.Sg=a;c=!0}c&&
(b.U("internalaudioformatchange",b.videoData,!0),wN(b)&&b.Ja("hlsaudio",a.id))}}};
g.k.getAvailableAudioTracks=function(){return g.T(this.app,this.playerType).getAvailableAudioTracks()};
g.k.getMaxPlaybackQuality=function(){var a=g.T(this.app,this.playerType);return a&&a.getVideoData().u?xq(a.I?iL(a.X,a.I,YN(a)):pz):"unknown"};
g.k.getUserPlaybackQualityPreference=function(){var a=g.T(this.app,this.playerType);return a?a.getUserPlaybackQualityPreference():"auto"};
g.k.getSubtitlesUserSettings=function(){var a=pB(this.app.Za());return a?a.KD():null};
g.k.resetSubtitlesUserSettings=function(){pB(this.app.Za()).IG()};
g.k.setMinimized=function(a){this.app.setMinimized(a)};
g.k.setInlinePreview=function(a){this.app.setInlinePreview(a)};
g.k.setGlobalCrop=function(a){this.app.Db().setGlobalCrop(a)};
g.k.getVisibilityState=function(){var a=this.app.V();a=this.Pe()&&!g.P(a.experiments,"kevlar_miniplayer_disable_vis");return this.app.getVisibilityState(this.ge(),this.isFullscreen()||g.gy(this.app.V()),a,this.isInline(),this.app.Rl(),this.app.Ql())};
g.k.isMutedByMutedAutoplay=function(){return this.app.qo};
g.k.isInline=function(){return this.app.isInline()};
g.k.setInternalSize=function(a,b){this.app.Db().setInternalSize(new g.ff(a,b))};
g.k.Kb=function(){var a=g.T(this.app,void 0);return a?a.Kb():0};
g.k.Pe=function(){return this.app.Pe()};
g.k.ge=function(){var a=g.T(this.app,this.playerType);return!!a&&a.ge()};
g.k.isFullscreen=function(){return this.app.isFullscreen()};
g.k.setSafetyMode=function(a){this.app.V().enableSafetyMode=a};
g.k.canPlayType=function(a){return this.app.canPlayType(a)};
g.k.updatePlaylist=function(a){if(a){var b=this.getPlaylistId(),c=!1;if(b&&b!==a.list)if(this.S("player_enable_playback_playlist_change"))c=!0;else return;void 0!==a.external_list&&this.app.setIsExternalPlaylist(a.external_list);var d=a.video;(b=this.app.getPlaylist())&&!c?this.isFullscreen()&&((c=d[b.index])&&c.encrypted_id!==b.Qa().videoId||(a.index=b.index)):OO(this.app,{list:a.list,index:a.index,playlist_length:d.length});eB(this.app.getPlaylist(),a);this.Ga("onPlaylistUpdate")}else this.app.updatePlaylist()};
g.k.updateVideoData=function(a,b){var c=g.T(this.app,this.playerType||1);c&&xz(c.getVideoData(),a,b)};
g.k.updateEnvironmentData=function(a){jy(this.app.V(),a,!1)};
g.k.sendVideoStatsEngageEvent=function(a){this.app.sendVideoStatsEngageEvent(a,this.playerType)};
g.k.setCardsVisible=function(){AB(this.app.Za())};
g.k.productsInVideoVisibilityUpdated=function(a){this.U("changeProductsInVideoVisibility",a)};
g.k.setInline=function(a){this.app.setInline(a)};
g.k.isAtLiveHead=function(a,b){return this.app.isAtLiveHead(a,void 0===b?!0:b)};
g.k.getVideoAspectRatio=function(){return this.app.Db().getVideoAspectRatio()};
g.k.getPreferredQuality=function(){var a=g.T(this.app);return a?a.getPreferredQuality():"unknown"};
g.k.setPlaybackQualityRange=function(a,b){var c=g.T(this.app,this.playerType);c&&(a=vq(a,b||a,!0,"m"),vA(c,a))};
g.k.onAdUxClicked=function(a,b){this.U("aduxclicked",a,b)};
g.k.getLoopVideo=function(){return this.app.getLoopVideo()};
g.k.setLoopVideo=function(a){this.app.setLoopVideo(a)};
g.k.U=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(this.app.V().l&&("videodatachange"===a||"resize"===a||"cardstatechange"===a))try{this.app.uh.U.apply(this.app.uh,[a].concat(g.oa(c)))}catch(e){IA(this,e,"Application - "+a)}try{this.app.ag.U.apply(this.app.ag,[a].concat(g.oa(c)))}catch(e){IA(this,e,"Application - "+a)}};
g.k.Ga=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{this.app.uh.U.apply(this.app.uh,[a].concat(g.oa(c))),this.app.ag.U.apply(this.app.ag,[a].concat(g.oa(c)))}catch(e){IA(this,e,"Application - "+a)}};
g.k.getFeedbackProductData=function(){return this.app.getFeedbackProductData()};
g.k.S=function(a){return g.P(this.app.V().experiments,a)};
g.k.K=function(){};
g.k.ra=function(){if(this.element){var a=this.element,b;for(b in this.l)this.l.hasOwnProperty(b)&&(a[b]=null);this.element=null}this.B={};this.D={};g.F.prototype.ra.call(this)};g.w(KA,AA);g.k=KA.prototype;g.k.addCueRange=function(a,b,c,d,e){return kP(this.app,a,b,c,d,e)};
g.k.getPlayerState=function(a){return $O(this.app,a)};
g.k.nextVideo=function(a,b){this.app.nextVideo(a,b)};
g.k.previousVideo=function(a){this.app.previousVideo(a)};
g.k.seekBy=function(a,b,c){qP(this.app,this.app.getCurrentTime()+a,b,c,this.playerType)};
g.k.seekTo=function(a,b,c,d){qP(this.app,a,b,c,d||this.playerType)};
g.k.getStoryboardFormat=function(){return this.app.getStoryboardFormat()};
g.k.Sp=function(a){a=void 0===a?this.playerType:a;var b=AA.prototype.Sp.call(this,a)||{};if(a=g.T(this.app,a))a=a.getVideoData(),b.backgroundable=a.backgroundable,b.eventId=a.eventId,b.cpn=a.clientPlaybackNonce,b.isLive=a.isLivePlayback,b.isWindowedLive=a.Vf,b.isManifestless=Rz(a),b.allowLiveDvr=a.allowLiveDvr,b.isListed=a.isListed,b.itct=a.Ka,b.ypcOriginalItct=a.UC,b.ypcPreview=a.ypcPreview,b.paidContentOverlayText=Zz(a),b.paidContentOverlayDurationMs=$z(a),null!=a.liveUtcStartSeconds&&(b.liveUtcStartSeconds=
a.liveUtcStartSeconds),a.i&&os(a.i)&&(b.usingLocalMedia="true");return b};
g.k.getCurrentTime=function(a,b){var c;return 2===this.app.getAppState()&&5===this.getPlayerState()?(null===(c=this.app.getVideoData())||void 0===c?void 0:c.startSeconds)||0:a?this.app.getCurrentTime(a,b):AA.prototype.getCurrentTime.call(this)};
g.k.getDuration=function(a,b){return 3===this.getPresentingPlayerType()?(a=g.OA(this.app.Za()).getProgressState(),(null===a||void 0===a?void 0:a.duration)||0):a?this.app.getDuration(a,b):AA.prototype.getDuration.call(this)};
g.k.getProgressState=function(a){if(3===this.getPresentingPlayerType())return g.OA(this.app.Za()).getProgressState();var b=this.app.getVideoData(),c=(g.T(this.app,a)||g.T(this.app)).getPlayerType(),d=this.getCurrentTime(a);a=this.getDuration(a);var e=this.app.Nd(c),f=this.app.isAtLiveHead(c),h=this.app.Il(),l=this.app.Nb(c);var m=this.app;(c=g.T(m,c))?(c=g.JO(m,c),m=ZO(m,ME(c),c)):m=0;return{allowSeeking:this.app.cq(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:d,displayedStart:-1,duration:a,
ingestionTime:e,isAtLiveHead:f,loaded:h,seekableStart:l,seekableEnd:m}};
g.k.getVideoLoadedFraction=function(a){return this.app.getVideoLoadedFraction(a)};
g.k.getCurrentBroadcastId=function(){return null};
g.k.handleGlobalKeyDown=function(a,b,c,d,e,f,h){b=void 0===b?!1:b;c=void 0===c?!1:c;d=void 0===d?!1:d;e=void 0===e?!1:e;var l=g.HA(this);l&&l.handleGlobalKeyDown(a,b,c,d,e,f,h)};
g.k.handleGlobalKeyUp=function(a,b,c,d,e,f,h){b=void 0===b?!1:b;c=void 0===c?!1:c;d=void 0===d?!1:d;e=void 0===e?!1:e;var l=g.HA(this);l&&l.handleGlobalKeyUp(a,b,c,d,e,f,h)};
g.k.setSizeStyle=function(a,b){this.app.setSizeStyle(a,b)};
g.k.showControls=function(){var a=g.HA(this);a&&a.showControls(!0)};
g.k.hideControls=function(){var a=g.HA(this);a&&a.showControls(!1)};
g.k.getVideoContentRect=function(a){a=this.app.Db().getVideoContentRect(a);return{left:a.left,top:a.top,width:a.width,height:a.height}};
g.k.toggleFullscreen=function(){var a=this.app.V();if(a.externalFullscreen)return this.isFullscreen()?Pn(window.document.documentElement):Mn(window.document.documentElement);if(g.Nn()||this.S("embeds_enable_mobile_custom_controls"))return this.isFullscreen()?Pn(g.On()):"3"!==a.controlsType&&g.Nn()?Mn(this.app.Db().element):(a=this.app.uc().wd())?Mn(a):Promise.reject(Error("Media element missing"));this.Ga("onFullscreenToggled",this.isFullscreen());return Promise.resolve(void 0)};
g.k.cancelPlayback=function(){var a=yB(this.app.Za());a&&a.created&&a.destroy();(a=g.T(this.app))&&a.stopVideo();(a=this.app.Za().lc.get("endscreen"))&&a.cE()&&g.NA(this.app.Fa,!0)};
g.k.stopVideo=function(){var a=this.app.V();!g.P(a.experiments,"disable_new_pause_state3")&&vy(a)&&"blazer"!==a.playerStyle?this.cancelPlayback():AA.prototype.stopVideo.call(this)};
g.k.getVideoStats=function(){return g.T(this.app,this.playerType).gb(!0)};
g.k.toggleSubtitles=function(){var a=pB(this.app.Za());a&&a.ZG()};
g.k.getDebugText=function(a){return this.app.getDebugText(a)};
g.k.setSphericalProperties=function(a){if(a){var b=tB(this.app.Za());b&&b.setSphericalProperties(a,!0)}};
g.k.getSphericalProperties=function(){var a=tB(this.app.Za());return a?a.getSphericalProperties():{}};
g.k.setVolume=function(a,b){DA(this,a,b)};
g.k.mute=function(a){EA(this,a)};
g.k.unMute=function(a){FA(this,a)};
g.k.mutedAutoplay=function(){this.S("embeds_enable_muted_autoplay")&&this.app.mutedAutoplay()};
g.k.loadModule=function(a){if("annotations_module"===a){var b=AB(this.app.Za());b&&!b.loaded&&b.load()}AA.prototype.loadModule.call(this,a)};
g.k.unloadModule=function(a){if("annotations_module"===a){var b=AB(this.app.Za());b&&b.loaded&&b.unload()}AA.prototype.unloadModule.call(this,a)};
g.k.setOption=function(a,b,c){if(!b)return null;var d=this.app.Za();switch(a){case "ad":return(a=yB(d))&&a.jh&&a.jh(b,c);case "kids":return;case "remote":return(a=g.OA(d))&&a.jh(b,c);case "unplugged":return(a=zB(d))&&a.jh(b,c);case "annotations_module":return(a=AB(d))&&a.jh(b,c);case "creatorendscreen":return(a=BB(d))&&a.jh(b,c)}return AA.prototype.setOption.call(this,a,b,c)};
g.k.getOptions=function(a){var b=this.app.Za();switch(a){case "ad":return(b=yB(b))&&b.getOptions&&b.getOptions();case "remote":return(b=g.OA(b))&&b.getOptions();case "annotations_module":return(b=AB(b))&&b.getOptions();case "creatorendscreen":return(b=BB(b))&&b.getOptions();case "unplugged":return(b=zB(b))&&b.getOptions();case "kids":return}if(!a){a=AA.prototype.getOptions.call(this);if(!a)return a;yB(b)&&a.push("ad");g.OA(b)&&a.push("remote");AB(b)&&a.push("annotations_module");BB(b)&&a.push("creatorendscreen");
zB(b)&&a.push("unplugged");return a}return AA.prototype.getOptions.call(this,a)};
g.k.getPlayerSize=function(){var a=this.app.Db().getPlayerSize();return{width:a.width,height:a.height}};
g.k.wakeUpControls=function(){var a=g.HA(this);a&&a.ir()};
g.k.setCenterCrop=function(a){this.app.Db().setCenterCrop(a)};
var sfa="adformat allow_embed authuser autohide autonav autoplay c cbr cbrver cc_load_policy controls cos cosver cr csi_page_type cver cyc dash dashmpd disablekb el enable_cardio enablecastapi enablecsi end external_fullscreen external_list fs hl host_language innertube_api_key innertube_api_version innertube_context_client_version iurl iurlhq iurlmq iv_load_policy jsapicallback length_seconds live_playback live_storyboard_spec loaderUrl osig override_hl pageid partnerid pipable player_params player_wide playsinline plid postid profile_picture ps rel show_miniplayer_button showinfo showwatchlater start startSeconds status storyboard_spec suggestedQuality timestamp title tkn token transparent_background ucid url_encoded_fmt_stream_map use_fast_sizing_on_watch_default use_miniplayer_ui use_native_controls videoId video_id vss_host watermark".split(" ");g.w(g.LA,KA);g.k=g.LA.prototype;g.k.ep=function(a,b,c,d,e,f){return this.app.ep(a,b,c,d,e,f)};
g.k.Gn=function(){return this.app.Gn()};
g.k.Bl=ba(4);g.k.Za=function(){return this.app.Za()};
g.k.Ae=function(){var a=this.Za().lc.get("endscreen");return!!a&&a.Ae()};
g.k.getRootNode=function(){return this.Db().element};
g.k.V=function(){return this.app.V()};
g.k.Ln=ba(6);g.k.hc=function(a){return this.app.hc(a)};
g.k.Db=function(){return this.app.Db()};
g.k.getPlaylist=function(){return this.app.getPlaylist()};
g.k.getVideoData=function(a){var b=g.T(this.app,a);if(!b)return null;b=b.getVideoData();var c;b.enableServerStitchedDai&&2===a?(a=this.app,null===(c=a.D)||void 0===c?c=void 0:(b=a.getCurrentTime(),c=dF(c,1E3*b),c=null===c||void 0===c?void 0:c.videoData),c=c||a.getVideoData()):c=b;return c};
g.k.Ji=function(a){return this.app.Ji(a)};
g.k.isWidescreen=function(){return this.app.isWidescreen()};
g.k.isHdr=function(){var a=g.T(this.app);return a?a.isHdr():!1};
g.k.qm=function(a){this.app.qm(a)};
g.k.me=function(a,b,c,d){this.app.Uc(a,b,c,d)};
g.k.playVideo=function(a){try{if(3===this.getPresentingPlayerType()){g.OA(this.app.Za()).Kh("control_play");return}if(2===this.getPresentingPlayerType()){var b=yB(this.app.Za());if(b&&b.Ri())return}}catch(c){g.so(c)}this.app.playVideo(a)};
g.k.stopVideo=function(a){g.T(this.app,a).stopVideo()};
g.k.dj=function(a){g.T(this.app,a).dj()};
g.k.addEventListener=function(a,b){this.app.ag.subscribe(a,b)};
g.k.removeEventListener=function(a,b){this.app.ag.unsubscribe(a,b)};
g.k.Ve=ba(8);g.k.setPlaybackQuality=function(a){this.setPlaybackQualityRange(a,a)};
g.k.Hn=function(){var a={},b=g.T(this.app).Hn();b=g.u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,a[c.quality]=c;return a};
g.k.getDebugText=function(a){return this.app.getDebugText(a)};
g.k.getVideoUrl=function(a,b,c,d){var e=this.getPresentingPlayerType(),f=2===e;if(d&&f||3===e)f=!1,e=1;d=this.getVideoData(e);if(!d)return"";var h;a||d.isLivePlayback||(h=Math.floor(this.getCurrentTime(e)));return this.app.getVideoUrl(d.videoId,f?void 0:this.getPlaylistId()||void 0,h,b,c)};
g.k.Ui=ba(10);g.k.setCardsVisible=function(a,b,c){var d=AB(this.Za());d&&d.setCardsVisible(a,b,c)};
g.k.productsInVideoVisibilityUpdated=function(a){this.U("changeProductsInVideoVisibility",a)};
g.k.Fk=function(){var a=g.T(this.app);a&&a.Fk()};
g.k.Lo=function(a){this.Ga("onVideoAreaChange");this.Ga(a?"onShowControls":"onHideControls")};
g.k.Pn=ba(12);g.k.bq=function(){var a=this.Za().lc.get("heartbeat");return!!a&&a.bq()};
g.k.cq=function(){if(this.V().Tb)return!1;var a=g.T(this.app);if(!a)return!1;var b=a.getVideoData();return!b.isValid()||g.fA(b)||2===this.getPresentingPlayerType()&&!this.app.Cc()||a.Hh()&&3!==this.getPresentingPlayerType()?!1:!0};
g.k.aq=function(){var a;return(null===(a=g.T(this.app))||void 0===a?void 0:a.aq)||!1};
g.k.sendVideoStatsEngageEvent=function(a,b,c){this.app.sendVideoStatsEngageEvent(a,c,b)};
g.k.Ge=function(a,b){this.app.Ym(a,b)};
g.k.le=function(a,b){this.app.Vu(a,b)};
g.k.eg=function(a,b){var c=this.app,d=g.T(c,b);d&&(a=d.T.eg(a),b&&c.getPresentingPlayerType()!==b||g.DO(c,"cuerangesremoved",a))};
g.k.jd=function(a,b){(b=g.T(this.app,b))&&b.jd(a)};
g.k.Hh=function(){var a=g.T(this.app,void 0);return a?a.Hh():!0};
g.k.setPlaybackRate=function(a,b){this.app.setPlaybackRate(a,b)};
g.k.setVolume=function(a){a=g.bf(a,0,100);CA(this.app,{volume:a,muted:this.isMuted()},!0)};
g.k.mute=function(){CA(this.app,{muted:!0,volume:this.getVolume()},!0)};
g.k.unMute=function(){CA(this.app,{muted:!1,volume:Math.max(5,this.getVolume())},!0)};
g.k.setLoopVideo=function(a){this.app.setLoopVideo(a)};
g.k.getLoopVideo=function(){return this.app.getLoopVideo()};
g.k.uc=function(){return this.app.uc()};
g.k.Cl=function(){return this.app.Cl()};
g.k.Od=ba(17);g.k.getBandwidthEstimate=function(){return Fx(this.V().schedule)};
g.k.ul=function(a,b,c,d){this.V().G&&this.app.Qi.ul(a,b,c,void 0===d?!1:d)};
g.k.nh=function(a,b,c){this.V().G&&this.app.Qi.nh(a,b,void 0===c?!1:c)};
g.k.Vq=function(a,b){this.V().G&&this.app.Qi.Vq(a,b)};
g.k.Ti=function(a,b){this.V().G&&this.app.Qi.click(a,b)};
g.k.ke=function(a,b,c){if(this.V().G){var d=this.app.Qi;d.elements.has(a);b?d.i.add(a):d.i.delete(a);var e=g.io(),f=a.visualElement;d.l.has(a)?e&&f&&(b?bca(e,[f]):cca(e,[f])):b&&!d.u.has(a)&&(e&&f&&Bo(e,f,c),d.u.add(a))}};
g.k.Ml=ba(19);g.k.Jb=function(){return g.T(this.app)};
g.k.getPresentingPlayerType=function(a){return this.app.getPresentingPlayerType(a)};
g.k.Rh=function(a){this.app.Rh(a)};
g.k.wp=function(a){this.app.wp(a)};
g.k.cj=function(a){this.app.getPresentingPlayerType()===a&&this.app.cj(a)};
g.k.wt=function(a){return this.app.wt(a)};
g.k.hj=function(a){this.app.hj(a)};
g.k.fu=function(){this.app.fu()};
g.k.Zm=ba(21);g.k.Zi=ba(24);g.k.Yo=ba(26);g.k.Ah=ba(29);g.k.Dp=function(a,b,c){this.app.Dp(a,b,void 0===c?0:c)};
g.k.Sl=function(){return this.app.Sl()};
g.k.clearQueue=function(){this.app.clearQueue()};
g.k.Cc=function(){return this.app.Cc()};
g.k.Si=function(a,b,c){return this.app.Si(a,b,c)};
g.k.Ja=function(a,b,c,d){c=void 0===c?!1:c;var e;null===(e=g.T(this.app,d))||void 0===e?void 0:e.Ja(a,b,c)};
g.k.vv=function(){return this.app.vv()};
g.k.requestStorageAccess=function(a,b){this.app.requestStorageAccess(a,b)};
g.k.Eq=ba(30);g.k.Dq=ba(31);g.k.Gq=ba(32);var Yka,EQ,tfa;
Yka={SH:"ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"AUTHENTICATION_EXPIRED",YH:"AUTHENTICATION_MALFORMED",ZH:"AUTHENTICATION_MISSING",eI:"BAD_REQUEST",lI:"CAST_SESSION_DEVICE_MISMATCHED",mI:"CAST_SESSION_VIDEO_MISMATCHED",nI:"CAST_TOKEN_EXPIRED",oI:"CAST_TOKEN_FAILED",pI:"CAST_TOKEN_MALFORMED",qI:"CGI_PARAMS_MALFORMED",rI:"CGI_PARAMS_MISSING",AK:"DEVICE_FALLBACK",WK:"GENERIC_WITH_LINK_AND_CPN",XK:"LICENSE",ZK:"VIDEO_UNAVAILABLE",kL:"FORMAT_UNAVAILABLE",yL:"GEO_FAILURE",OL:"HTML5_AUDIO_RENDERER_ERROR",PL:"GENERIC_WITHOUT_LINK",
QL:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK",RL:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK",SL:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK_SHORT",dM:"INVALID_DRM_MESSAGE",DQ:"PURCHASE_NOT_FOUND",EQ:"PURCHASE_REFUNDED",MQ:"RENTAL_EXPIRED",TQ:"RETRYABLE_ERROR",dR:"SERVER_ERROR",FR:"STOPPED_BY_ANOTHER_PLAYBACK",HR:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",IR:"STREAMING_NOT_ALLOWED",JR:"STREAM_LICENSE_NOT_FOUND",VR:"TOO_MANY_REQUESTS",WR:"TOO_MANY_REQUESTS_WITH_LINK",XR:"TOO_MANY_STREAMS_PER_ENTITLEMENT",
YR:"TOO_MANY_STREAMS_PER_USER",vS:"UNSUPPORTED_DEVICE",JS:"VIDEO_FORBIDDEN",MS:"VIDEO_NOT_FOUND"};EQ={};
g.dC=(EQ.ALREADY_PINNED_ON_A_DEVICE="This video has already been downloaded on the maximum number of devices allowed by the copyright holder. Before you can play the video here, it needs to be unpinned on another device.",EQ.DEVICE_FALLBACK="Sorry, this video is not available on this device.",EQ.GENERIC_WITH_LINK_AND_CPN="An error occurred. Please try again later. (Playback ID: $CPN) $BEGIN_LINKLearn More$END_LINK",EQ.LICENSE="Sorry, there was an error licensing this video.",EQ.VIDEO_UNAVAILABLE=
"Video unavailable",EQ.FORMAT_UNAVAILABLE="This video isn't available at the selected quality. Please try again later.",EQ.GEO_FAILURE="This video isn't available in your country.",EQ.HTML5_AUDIO_RENDERER_ERROR="Audio renderer error. Please restart your computer.",EQ.GENERIC_WITHOUT_LINK="An error occurred. Please try again later.",EQ.HTML5_NO_AVAILABLE_FORMATS_FALLBACK="This video format is not supported.",EQ.HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK="Your browser does not currently recognize any of the video formats available. $BEGIN_LINKClick here to visit our frequently asked questions about HTML5 video.$END_LINK",
EQ.HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK_SHORT="Your browser can't play this video. $BEGIN_LINKLearn more$END_LINK",EQ.INVALID_DRM_MESSAGE="The DRM system specific message is invalid.",EQ.PURCHASE_NOT_FOUND="This video requires payment.",EQ.PURCHASE_REFUNDED="This video's purchase has been refunded.",EQ.RENTAL_EXPIRED="This video's rental has expired.",EQ.CAST_SESSION_DEVICE_MISMATCHED="The device in the cast session doesn't match the requested one.",EQ.CAST_SESSION_VIDEO_MISMATCHED="The video in the cast session doesn't match the requested one.",
EQ.CAST_TOKEN_FAILED="Cast session not available. Please refresh or try again later.",EQ.CAST_TOKEN_EXPIRED="Cast session was expired. Please refresh.",EQ.CAST_TOKEN_MALFORMED="Invalid cast session. Please refresh or try again later.",EQ.SERVER_ERROR="There was an internal server error. Please try again later.",EQ.STOPPED_BY_ANOTHER_PLAYBACK="Your account is playing this video in another location. Please reload this page to resume watching.",EQ.STREAM_LICENSE_NOT_FOUND="Video playback interrupted. Please try again.",
EQ.STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED="Too many devices/IP addresses have been used over the 24 hour period.",EQ.STREAMING_NOT_ALLOWED="Playback not allowed because this video is pinned on another device.",EQ.RETRYABLE_ERROR="There was a temporary server error. Please try again later.",EQ.TOO_MANY_REQUESTS="Please log in to watch this video.",EQ.TOO_MANY_REQUESTS_WITH_LINK="Please $BEGIN_LINKclick here$END_LINK to watch this video on YouTube.",EQ.TOO_MANY_STREAMS_PER_USER="Playback stopped because too many videos belonging to the same account are playing.",
EQ.TOO_MANY_STREAMS_PER_ENTITLEMENT="Playback stopped because this video has been played on too many devices.",EQ.UNSUPPORTED_DEVICE="Playback isn't supported on this device.",EQ.VIDEO_FORBIDDEN="Access to this video is forbidden.",EQ.VIDEO_NOT_FOUND="This video can not be found.",EQ);
tfa={300:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"ALREADY_PINNED_ON_A_DEVICE",303:"STOPPED_BY_ANOTHER_PLAYBACK",304:"TOO_MANY_STREAMS_PER_USER",305:"TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"VIDEO_NOT_FOUND",401:"GEO_FAILURE",402:"STREAMING_NOT_ALLOWED",403:"UNSUPPORTED_DEVICE",405:"VIDEO_FORBIDDEN",500:"PURCHASE_NOT_FOUND",501:"RENTAL_EXPIRED",502:"PURCHASE_REFUNDED",5E3:"BAD_REQUEST",5001:"CGI_PARAMS_MISSING",5002:"CGI_PARAMS_MALFORMED",5100:"AUTHENTICATION_MISSING",5101:"AUTHENTICATION_MALFORMED",
5102:"AUTHENTICATION_EXPIRED",5200:"CAST_TOKEN_MALFORMED",5201:"CAST_TOKEN_EXPIRED",5202:"CAST_TOKEN_FAILED",5203:"CAST_SESSION_VIDEO_MISMATCHED",5204:"CAST_SESSION_DEVICE_MISMATCHED",6E3:"INVALID_DRM_MESSAGE",7E3:"SERVER_ERROR",8E3:"RETRYABLE_ERROR"};g.w(g.TA,g.Rn);g.TA.prototype.Y=function(a,b,c,d,e){return g.Rn.prototype.Y.call(this,a,b,c,d,e)};UA.prototype.reset=function(){g.Sp(this.timerName)};
UA.prototype.tick=function(a,b){g.Vp(a,b,this.timerName)};
UA.prototype.info=function(a,b){Up(a,b,this.timerName)};g.XA.prototype.getId=function(){return this.id};
g.XA.prototype.toString=function(){return"CueRange{"+this.namespace+":"+this.id+"}["+YA(this.start)+", "+YA(this.end)+"]"};
g.XA.prototype.contains=function(a,b){return a>=this.start&&(a<this.end||a===this.end&&this.start===this.end)&&(null==b||a<b&&b<=this.end)};
var vfa=1;g.XA.prototype.getId=g.XA.prototype.getId;g.aB.prototype.toString=function(){return this.type+this.id};g.w(g.bB,g.N);g.k=g.bB.prototype;g.k.hasNext=function(a){return this.loop||!!a||this.index+1<this.length};
g.k.Qa=function(a,b,c){a=void 0!==a?a:this.index;a=this.items&&a in this.items?this.items[this.order[a]]:null;var d=null;a&&(b&&(a.autoplay="1"),c&&(a.autonav="1"),d=new g.rz(this.l,a),g.G(this,d),d.startSeconds=this.startSeconds||d.clipStart||0,this.listId&&(d.playlistId=this.listId.toString()));return d};
g.k.setShuffle=function(a){this.shuffle=a;a=this.order&&null!=this.order[this.index]?this.order[this.index]:this.index;this.order=[];for(var b=0;b<this.items.length;b++)this.order.push(b);this.index=a;if(this.shuffle){a=this.order[this.index];for(b=1;b<this.order.length;b++){var c=Math.floor(Math.random()*(b+1)),d=this.order[b];this.order[b]=this.order[c];this.order[c]=d}for(b=0;b<this.order.length;b++)this.order[b]===a&&(this.index=b)}this.U("shuffle")};
g.k.Af=function(a){a=a||"hqdefault.jpg";var b=this.u[a];if(b||"sddefault.jpg"===a||"hq720.jpg"===a||"maxresdefault.jpg"===a)return b;if(this.B.length)return g.uy(this.l,this.B[0],a)};
g.k.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.k.Ft=function(){return this.l.getVideoUrl(this.Qa().videoId,this.getPlaylistId())};
g.k.ra=function(){this.i=null;g.ug(this.items);g.N.prototype.ra.call(this)};g.w(g.iB,g.N);g.k=g.iB.prototype;g.k.create=function(){};
g.k.load=function(){this.loaded=!0};
g.k.unload=function(){this.loaded=!1};
g.k.jh=function(){};
g.k.xm=function(){return!0};
g.k.ra=function(){this.loaded&&this.unload();g.N.prototype.ra.call(this)};
g.k.gb=function(){return{}};
g.k.getOptions=function(){return[]};g.FQ=new Map;g.vB={};g.w(g.oB,g.F);g.k=g.oB.prototype;g.k.Mo=function(){return this.L.getVideoData().Mo()};
g.k.uv=function(){return this.L.getVideoData().uv()};
g.k.Nx=function(){var a=this.lc.get("heartbeat");rB(this,"heartbeat",this.Nx,!1,!0);!a&&this.lc.has("heartbeat")&&this.L.U("offlineslatestatechange")};
g.k.Ls=function(){rB(this,"annotations_module",this.Ls,!0);var a=this.lc.get("annotations_module");if(a)for(var b in this.u)if(this.u.hasOwnProperty(b)){var c=b;a.subscribe(c,this.u[c])}};
g.k.Mx=function(){if(!this.lc.get("ad"))try{qB(this)?rB(this,"ad",this.Mx,!1,!0):this.L.jd("ad")}catch(a){this.L.jd("ad"),g.so(a)}};
g.k.Cl=function(){return this.i};
g.k.Et=function(){var a={},b=pB(this);b&&g.$a(a,b.Et());return a};
g.k.Ui=ba(9);g.k.ra=function(){g.F.prototype.ra.call(this);xB(this,1,!0)};g.w(CB,g.F);g.k=CB.prototype;g.k.ip=function(){return this.l};
g.k.jl=function(a){var b="";a&&(FB(this,a),b=a.i);if(!this.Me()||b)b&&this.Me()!==b&&this.Uq(b),sO||a&&a.l||this.load(),this.D||(this.addEventListener("volumechange",this.Kx),this.D=!0)};
g.k.hp=function(){var a=this.wd();a=window.MediaSource?new bw(new window.MediaSource,void 0,!1):window.WebKitMediaSource?new bw(new window.WebKitMediaSource,void 0,!1):new bw(void 0,a,!1);this.jl(a.po);return a};
g.k.playVideo=function(){var a=this;this.Jg()&&this.seekTo(0);!this.Me()&&this.l&&(g.dj(Error("playVideo without src")),this.Uq(this.l.i),this.l.l||this.load());var b=this.play();!b&&uO&&vC&&7<=(oA||0)&&$aa(this,function(){g.yj(function(){EB(a,a.getCurrentTime(),0)},500)});
return b};
g.k.seekTo=function(a){0<this.df()&&(vO&&vC&&4>oA&&(a=Math.max(.1,a)),this.Tq(a))};
g.k.stopVideo=function(){this.Me()&&(tO&&Mk&&0<this.getCurrentTime()&&this.seekTo(0),this.Lq(),this.load(),FB(this,null))};
g.k.Il=function(){var a=this.ye();return 0<Uv(a)&&this.getDuration()?Tv(a,this.getCurrentTime()):0};
g.k.gb=function(){try{var a=this.Tk();return{vct:this.getCurrentTime().toFixed(3),vd:this.getDuration().toFixed(3),vpl:Qv(this.Xj(),",",3),vbu:Qv(this.ye()),vpa:""+ +this.ci(),vsk:""+ +this.Om(),ven:""+ +this.Jg(),vpr:""+this.getPlaybackRate(),vrs:""+this.df(),vns:""+this.Mp(),vec:""+this.Kf(),vemsg:this.zd(),vvol:""+this.getVolume(),vdom:""+ +this.Rt(),vsrc:""+ +!!this.Me(),vw:""+a.width,vh:""+a.height}}catch(b){return{}}};
g.k.addEventListener=function(a,b){this.u.Cd(a,b,!1,this);this.Vs(a)};
g.k.removeEventListener=function(a,b){this.u.Fc(a,b,!1,this)};
g.k.dispatchEvent=function(a){return this.u.dispatchEvent(a)};
g.k.Rs=function(){this.C=!1};
g.k.Qs=function(){this.C=!0;this.nm(!0)};
g.k.Kx=function(){this.C&&!this.Lp()&&this.nm(!0)};
g.k.ra=function(){this.D&&this.removeEventListener("volumechange",this.Kx);g.F.prototype.ra.call(this)};
var sO=!1,tO=!0,uO=!0,vO=!0;g.w(KB,zg);KB.prototype.preventDefault=function(){zg.prototype.preventDefault.call(this);this.i&&this.i.preventDefault()};
KB.prototype.stopPropagation=function(){zg.prototype.stopPropagation.call(this);this.i&&this.i.stopPropagation()};g.w(g.LB,CB);g.k=g.LB.prototype;g.k.Uk=function(){return!0};
g.k.isView=function(){return!1};
g.k.Yu=function(){return!1};
g.k.wd=function(){return this.i};
g.k.Me=function(){return this.i.src};
g.k.Uq=function(a){this.K();var b=this.getPlaybackRate();this.i.src=a;this.setPlaybackRate(b)};
g.k.Lq=function(){this.K();this.i.removeAttribute("src")};
g.k.getPlaybackRate=function(){try{return 0<=this.i.playbackRate?this.i.playbackRate:1}catch(a){return 1}};
g.k.setPlaybackRate=function(a){this.K();this.getPlaybackRate()!==a&&(this.i.playbackRate=a);return a};
g.k.gp=function(){return this.i.loop};
g.k.setLoop=function(a){this.K();this.i.loop=a};
g.k.canPlayType=function(a,b){return this.i.canPlayType(a,b)};
g.k.ci=function(){return this.i.paused};
g.k.Om=function(){return this.i.seeking};
g.k.Jg=function(){return this.i.ended};
g.k.Lp=function(){return this.i.muted};
g.k.nm=function(a){Ov();this.K();this.i.muted=a};
g.k.Xj=function(){return this.i.played||Pv([],[])};
g.k.ye=function(){try{var a=this.i.buffered}catch(b){}return a||Pv([],[])};
g.k.Nn=function(){return this.i.seekable||Pv([],[])};
g.k.jp=function(){var a=this.i;return a.getStartDate?a.getStartDate():null};
g.k.getCurrentTime=function(){return this.i.currentTime};
g.k.Tq=function(a){this.K();this.i.currentTime=a};
g.k.getDuration=function(){return this.i.duration};
g.k.load=function(){this.K();var a=this.i.playbackRate;try{this.i.load()}catch(b){}this.i.playbackRate=a};
g.k.pause=function(){this.K();this.i.pause()};
g.k.play=function(){this.K();var a=this.i.play();if(!a||!a.then)return null;a.then(void 0,function(){});
return a};
g.k.df=function(){return this.i.readyState};
g.k.Mp=function(){return this.i.networkState};
g.k.Kf=function(){return this.i.error?this.i.error.code:null};
g.k.zd=function(){return this.i.error?this.i.error.message:""};
g.k.kp=function(){if(this.i instanceof HTMLVideoElement&&this.i.getVideoPlaybackQuality)return this.i.getVideoPlaybackQuality();if(this.i){var a=this.i,b=a.webkitDroppedFrameCount;if(a=a.webkitDecodedFrameCount)return{droppedVideoFrames:b||0,totalVideoFrames:a}}return{}};
g.k.ge=function(){return!!this.i.webkitCurrentPlaybackTargetIsWireless};
g.k.togglePictureInPicture=function(){var a=this.i,b=window.document;Mv()?this.i!==b.pictureInPictureElement?a.requestPictureInPicture():b.exitPictureInPicture():Nv()&&a.webkitSetPresentationMode("picture-in-picture"===a.webkitPresentationMode?"inline":"picture-in-picture")};
g.k.Hi=function(){var a=this.i;return new g.df(a.offsetLeft,a.offsetTop)};
g.k.Tk=function(){return g.dg(this.i)};
g.k.setSize=function(a){cg(this.i,a)};
g.k.getVolume=function(){return this.i.volume};
g.k.setVolume=function(a){Ov();this.K();this.i.volume=a};
g.k.Vs=function(a){this.B[a]||(this.i.addEventListener(a,this.listener),this.B[a]=this.listener)};
g.k.setAttribute=function(a,b){this.i.setAttribute(a,b)};
g.k.removeAttribute=function(a){this.i.removeAttribute(a)};
g.k.hasAttribute=function(a){return this.i.hasAttribute(a)};
g.k.cn=ba(34);g.k.Uo=ba(36);g.k.Vo=ba(38);g.k.jn=ba(40);g.k.An=function(){return Pn(this.i)};
g.k.Lj=function(a){g.Nh(this.i,a)};
g.k.On=function(a){return g.Wf(this.i,a)};
g.k.Rt=function(){return g.Cf(document.body,this.i)};
g.k.ra=function(){for(var a=g.u(Object.keys(this.B)),b=a.next();!b.done;b=a.next())b=b.value,this.i.removeEventListener(b,this.B[b]);CB.prototype.ra.call(this)};
g.k.K=function(){};g.w(PB,g.N);g.k=PB.prototype;g.k.oE=function(a){a=g.ck(a);if(!g.ef(a,this.B)){var b=2;this.D&&(b|=8);this.B=a;OB(this,b,!0)}};
g.k.pE=function(){this.D&&OB(this,8,!0);OB(this,2,!1)};
g.k.yq=function(a){var b=g.ck(a);g.ef(b,this.B)||(this.B=b,(a=g.Zj(a))&&this.vp(a)&&(OB(this,4,!0),this.i.Fc(this.u),this.u=this.i.Y(this.target,"mouseover",this.vu),this.G=this.i.Y(this.target,"mouseout",this.vu)))};
g.k.vu=function(a){a=g.bk(a);a&&this.vp(a)||(this.B=new g.df(NaN,NaN),QB(this))};
g.k.gE=function(){OB(this,1,!0)};
g.k.FD=function(a){a=g.Zj(a);a instanceof Element&&!(0<a.tabIndex)||OB(this,1,!0)};
g.k.Az=function(){this.D=!0;this.i.Fc(this.C);this.C=this.i.Y(document,"mouseup",this.qE)};
g.k.qE=function(){this.D=!1;OB(this,8,!1);this.i.Fc(this.C);this.C=this.i.Y(this.target,"mousedown",this.Az)};
g.k.dB=function(a){if(a=(a=a.changedTouches)&&a[0])this.ea=a.identifier,this.i.Fc(this.I),this.I=this.i.Y(this.target,"touchend",this.aH,void 0,!0),OB(this,1024,!0)};
g.k.aH=function(a){if(a=a.changedTouches)for(var b=0;b<a.length;b++){var c=a[b];if(c.identifier===this.ea){var d=c;break}}d&&(this.i.Fc(this.I),this.I=this.i.Y(this.target,"touchstart",this.dB,void 0,!0),OB(this,1024,!1))};
g.k.ir=function(){OB(this,2,!0)};
g.k.resize=function(){Lv&&QB(this)};
g.k.toString=function(){return g.N.prototype.toString.call(this)};g.w(g.RB,g.F);g.k=g.RB.prototype;g.k.show=function(a){1!==this.state&&2!==this.state&&(4===this.state&&this.qr(),5===this.state?(this.element.show(),this.state=null,this.delay.stop(),this.i&&this.i()):this.element.u||(SB(this,!0),this.state=1,a?this.delay.start(a):this.qr()))};
g.k.hide=function(){4!==this.state&&(1===this.state||2===this.state?(this.element.hide(),this.state=null,this.delay.stop()):this.element.u&&(SB(this,!0),this.state=4,this.delay.start(this.B)))};
g.k.qr=function(){switch(this.state){case 1:this.element.show();this.state=2;this.delay.start(10);break;case 2:SB(this,!1);this.state=3;this.delay.start(this.u);break;case 3:this.state=null;this.i&&this.i();break;case 4:this.element.hide();SB(this,!1);this.state=5;this.delay.start(0);break;case 5:this.state=null,this.l&&this.l()}};
g.k.stop=function(){for(;null!==this.state&&5!==this.state;)this.delay.stop(),this.qr()};
g.k.ra=function(){this.element.ya()||this.element.element.removeAttribute("aria-hidden");g.F.prototype.ra.call(this)};var GQ=1;g.w(g.TB,g.F);g.k=g.TB.prototype;
g.k.createElement=function(a,b){b=b||"svg"===a.J;var c=a.Z,d=a.xb;if(b){var e=document.createElementNS("http://www.w3.org/2000/svg",a.J);g.PG&&(a.Ea||(a.Ea={}),a.Ea.focusable="false")}else e=g.sf(a.J);if(c){if(c=UB(this,e,"class",c))VB(this,e,"class",c),this.Da[c]=e}else if(d){c=g.u(d);for(var f=c.next();!f.done;f=c.next())this.Da[f.value]=e;VB(this,e,"class",d.join(" "))}d=a.Oa;c=a.va;if(d)b=UB(this,e,"child",d),void 0!==b&&e.appendChild(g.tf(b));else if(c)for(d=0,c=g.u(c),f=c.next();!f.done;f=c.next())if(f=
f.value)if("string"===typeof f)f=UB(this,e,"child",f),null!=f&&e.appendChild(g.tf(f));else if(f.element)e.appendChild(f.element);else{var h=f;f=this.createElement(h,b);e.appendChild(f);h.zm&&(h="ytp-id-"+GQ.toString(),GQ++,f.id=h,f=document.createElementNS("http://www.w3.org/2000/svg","use"),f.setAttribute("class","ytp-svg-shadow"),f.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+h),g.vf(e,f,d++))}if(a=a.Ea)for(b=e,d=g.u(Object.keys(a)),c=d.next();!c.done;c=d.next())c=c.value,f=a[c],VB(this,
b,c,"string"===typeof f?UB(this,b,c,f):f);return e};
g.k.La=function(a){return this.Da[a]};
g.k.Na=function(a,b){"number"===typeof b?g.vf(a,this.element,b):a.appendChild(this.element)};
g.k.detach=function(){g.wf(this.element)};
g.k.update=function(a){for(var b=g.u(Object.keys(a)),c=b.next();!c.done;c=b.next())c=c.value,g.WB(this,c,a[c])};
g.k.ra=function(){this.Da={};this.Pa={};this.detach();g.F.prototype.ra.call(this)};g.w(g.XB,g.TB);g.k=g.XB.prototype;g.k.mm=function(a){g.WB(this,"content",a)};
g.k.show=function(){this.u||(g.Rf(this.element,"display",""),this.u=!0)};
g.k.hide=function(){this.u&&(g.Rf(this.element,"display","none"),this.u=!1)};
g.k.Cd=function(a,b,c){return this.Y(this.element,a,b,c)};
g.k.Y=function(a,b,c,d){c=(0,g.Ya)(c,d||this);d={target:a,type:b,listener:c};this.listeners.push(d);a.addEventListener(b,c);return d};
g.k.Fc=function(a){var b=this;this.listeners.forEach(function(c,d){c===a&&(c=b.listeners.splice(d,1)[0],c.target.removeEventListener(c.type,c.listener))})};
g.k.focus=function(){var a=this.element;g.Hf(a);a.focus()};
g.k.ra=function(){for(;this.listeners.length;){var a=this.listeners.pop();a&&a.target.removeEventListener(a.type,a.listener)}g.TB.prototype.ra.call(this)};g.w(YB,g.XB);
YB.prototype.oe=function(){var a=this.api.getVideoData(),b=this.api.V();g.WB(this,"largePlayButtonChildren",a.N&&(a.ma||b.pfpChazalUi)?b.pfpChazalUi?[{J:"svg",Ea:{height:"100%",version:"1.1",viewBox:"0 0 60 60",width:"100%"},va:[{J:"path",Z:"ytp-dni-large-play-button-bg",Ea:{d:"M30,0A30,30,0,1,0,60,30,30,30,0,0,0,30,0Z",fill:"#1f1f1f"}},{J:"path",Ea:{d:"M21,41.65V18L43.7,29.85Z",fill:"#fff"}}]}]:[{J:"svg",Ea:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},va:[{J:"path",Z:"ytp-dni-large-play-button-bg",
Ea:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#212121","fill-opacity":"0.8"}},{J:"path",Ea:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]:[{J:"svg",Ea:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},va:[{J:"path",
Z:"ytp-large-play-button-bg",Ea:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}},{J:"path",Ea:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]);a.N&&(a.ma||b.pfpChazalUi)&&(a=a.ma?a.ma:"#1f1f1f",this.La("ytp-dni-large-play-button-bg").setAttribute("fill",
a))};g.w(ZB,g.XB);g.k=ZB.prototype;g.k.show=function(){var a=this;this.u||(this.B.Y(this.api,"videodatachange",function(){g.Ih(a.i)}),this.B.Y(this.api,"videoplayerreset",function(){g.Ih(a.i)}));
g.XB.prototype.show.call(this)};
g.k.hide=function(){this.B&&g.Tn(this.B);g.XB.prototype.hide.call(this)};
g.k.em=function(){g.Ih(this.i)};
g.k.TB=function(a){var b=this.api.V();g.P(b.experiments,"disable_new_pause_state3")&&vy(b)&&(a=a.state.isCued()&&!a.Wi.isCued()||g.PA(this.api)&&g.S(a.state,2),g.Rf(this.element,"transition-delay",a?"2s":""));g.Ih(this.i)};
g.k.tG=function(){g.Ih(this.i)};
g.k.OF=function(){this.l.stop();this.hide();g.Ih(this.i)};
g.k.oe=function(){var a=this.api.hc();if(3===this.api.getPresentingPlayerType()&&(a.Zb()||g.S(a,4)))var b=!0;else(b=this.api.Za().lc.get("ypc"))&&b.Iq?b=!0:(b=this.api.V(),b=g.S(a,2)&&MA(this.api)||g.S(a,2)&&b.S("mweb_c3_endscreen")?!0:!1);b?(b=!0,this.C.hide()):(this.C.show(),a.isCued()&&2!==this.api.getPresentingPlayerType()?b=!0:(b=!g.P(this.api.V().experiments,"disable_new_pause_state3"),b=!(!g.S(a,2)||MA(this.api)||b&&this.api.Gn())||g.S(a,1024)?!0:!1));b?(this.l.show(),a=this.api.getVideoData(),
this.hH(this.api.getPlaylist(),a)):(this.l.hide(),g.S(a,1)||this.l.stop())};
g.k.hH=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=g.u(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,!(!c||c instanceof g.rz&&!c.videoId)){var d=this.api.Db().getPlayerSize();var e=yy(),f=d.width*e;e*=d.height;if(1280<f||720<e)if(d=c.Af("maxresdefault.jpg"))break;if(640<f||480<e)if(d=c.Af("maxresdefault.jpg"))break;if(320<f||180<e)if(d=c.Af("sddefault.jpg")||c.Af("hqdefault.jpg")||c.Af("mqdefault.jpg"))break;if(d=c.Af("default.jpg"))break}this.D.style.backgroundImage=
d?"url("+d+")":""};g.w(bC,g.XB);bC.prototype.resize=function(){};
var Kfa=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;g.w(fC,g.TA);fC.prototype.Rd=function(){var a=this;this.Ng();var b=this.L.getVideoData();if(b.isValid()){var c=[];c.push({src:b.Af("mqdefault.jpg")||"",sizes:"320x180"});this.mediaSession.metadata=new MediaMetadata({title:b.title,artist:b.author,artwork:c});c=b=null;g.PA(this.L)&&(this.i.delete("nexttrack"),this.i.delete("previoustrack"),b=function(){a.L.nextVideo()},c=function(){a.L.previousVideo()});
eC(this,"nexttrack",b);eC(this,"previoustrack",c)}};
fC.prototype.Ng=function(){var a=this.L.hc();a=a.isError()?"none":FE(a)?"playing":"paused";this.mediaSession.playbackState=a};
fC.prototype.ra=function(){this.mediaSession.playbackState="none";this.mediaSession.metadata=null;for(var a=g.u(this.i),b=a.next();!b.done;b=a.next())eC(this,b.value,null);g.TA.prototype.ra.call(this)};g.w(gC,g.XB);g.k=gC.prototype;g.k.onClick=function(a){g.aC(a,this.L,!0);this.L.Ti(this.element)};
g.k.Rd=function(a,b){hC(this,b);this.C&&iC(this,this.C)};
g.k.UB=function(a){var b=this.L.getVideoData();this.videoId!==b.videoId&&hC(this,b);this.i&&iC(this,a.state);this.C=a.state};
g.k.Ep=function(){this.B.show();this.L.U("paidcontentoverlayvisibilitychange",!0);this.L.ke(this.element,!0)};
g.k.wh=function(){this.B.hide();this.L.U("paidcontentoverlayvisibilitychange",!1);this.L.ke(this.element,!1)};g.w(kC,g.XB);kC.prototype.hide=function(){this.i.stop();this.message.style.display="none";g.XB.prototype.hide.call(this)};
kC.prototype.l=function(a){jC(a.state)?this.i.start():this.hide()};
kC.prototype.B=function(){this.message.style.display="block"};g.w(g.lC,g.XB);g.lC.prototype.subscribe=function(a,b,c){return this.I.subscribe(a,b,c)};
g.lC.prototype.unsubscribe=function(a,b,c){return this.I.unsubscribe(a,b,c)};
g.lC.prototype.Jf=function(a){return this.I.Jf(a)};
g.lC.prototype.U=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];return this.I.U.apply(this.I,[a].concat(g.oa(c)))};g.w(g.mC,g.lC);g.k=g.mC.prototype;g.k.show=function(){var a=oC(this);g.lC.prototype.show.call(this);this.N&&(this.C.Y(window,"blur",this.wh),this.C.Y(document,"click",this.ZE));a||this.U("show",!0)};
g.k.hide=function(){var a=oC(this);g.lC.prototype.hide.call(this);nC(this);a&&this.U("show",!1)};
g.k.Ep=function(a){this.i=a;this.D.show();this.G&&(this.C.Fc(this.G),this.G=void 0)};
g.k.wh=function(){var a=oC(this);nC(this);this.D.hide();a&&this.U("show",!1)};
g.k.ZE=function(a){var b=g.ak(a);b&&(g.Cf(this.element,b)||this.i&&g.Cf(this.i,b)||!NB(a))||this.wh()};g.w(qC,g.mC);qC.prototype.zo=function(a){this.B&&(a?(pC(this),this.Ep()):(this.seen&&this.Ti(),this.wh()))};
qC.prototype.Ng=function(a){this.api.isMutedByMutedAutoplay()&&g.wE(a,2)&&this.wh()};
qC.prototype.onClick=function(){this.api.unMute();this.Ti()};
qC.prototype.Ti=function(){this.l||(this.l=!0,this.api.Ti(this.element))};g.w(g.tC,g.TA);g.k=g.tC.prototype;g.k.init=function(){var a=this.api.hc();this.Eb(a);sC(this);this.em()};
g.k.Rd=function(a,b){this.Yt!==b.videoId&&(this.Yt=b.videoId,a=this.ih,a.W=b&&0<b.Ik.length?5E3:3E3,OB(a,512,!0),sC(this))};
g.k.FF=function(){this.Rd("newdata",this.api.getVideoData())};
g.k.vp=function(a){try{if(!g.Cf(this.api.getRootNode(),a))return!1}catch(b){return!1}for(;a&&!g.Hf(a);)a=a===this.api.getRootNode()?null:g.Bf(a);return!!a};
g.k.UE=function(a){var b=this.api.getRootNode();g.Rh(b,"ytp-autohide",a);g.Rh(b,"ytp-autohide-active",!0);this.tx.start(a?250:100);a&&(this.Lv=!1,g.Qh(b,"ytp-touch-mode"));this.Ks=!a;this.api.Lo(!a)};
g.k.VE=function(){var a=this.api.getRootNode();g.Rh(a,"ytp-autohide-active",!1)};
g.k.VF=function(a){!wC(this)||!xC(this,a)||Yx(this.api.V())&&this.api.V().S("embeds_enable_mobile_dtts")&&this.api.V().u||rC(this);var b=oC(this.lr);Vx&&zC(this,a)?b&&g.dk(a):(this.ih.l||uC(this,g.ak(a))||oC(this.lr)||(this.api.hc().isCued(),g.dk(a)),this.Lv=!0,g.Nh(this.api.getRootNode(),"ytp-touch-mode"),this.ih.ir())};
g.k.SF=function(a){zC(this,a)||(wC(this)||!xC(this,a)||this.Xx.isActive()||(rC(this),g.dk(a)),this.Wx&&(this.Wx=!1))};
g.k.requestStorageAccess=function(){var a=this;this.api.requestStorageAccess(function(){g.Zl("embedsRequestStorageAccessResult",{resolved:!0});TO(!0);il();window.location.reload()},function(){g.Zl("embedsRequestStorageAccessResult",{resolved:!1});
yC(a);a.er()})};
g.k.er=function(){var a=this.api.hc();g.S(a,2)&&MA(this.api)||(FE(a)?this.api.pauseVideo():(this.api.fu(),this.api.playVideo(),this.wl&&document.activeElement===this.wl.C.element&&this.api.getRootNode().focus()))};
g.k.TF=function(a){AC(this,.3,a.scale);g.dk(a)};
g.k.UF=function(a){AC(this,.1,a.scale)};
g.k.em=function(){var a=this.api.Db().getPlayerSize(),b=this.api.getRootNode(),c=650<=a.width;this.ih.resize();g.Rh(b,"ytp-fullscreen",this.api.isFullscreen());g.Rh(b,"ytp-large-width-mode",c);g.Rh(b,"ytp-small-mode",this.jz());g.Rh(b,"ytp-tiny-mode",this.fE());g.Rh(b,"ytp-big-mode",!1);this.Of&&this.Of.resize(a)};
g.k.Ng=function(a){this.Eb(a.state);sC(this)};
g.k.Eb=function(a){var b=a.isCued()||this.api.Hh()&&3!==this.api.getPresentingPlayerType();b!==this.isCued&&(this.isCued=b,this.Nv&&this.Fc(this.Nv),this.Nv=this.Y(this.api.Db(),"touchstart",this.VF,void 0,b));var c=a.Zb()&&!g.S(a,32)||this.api.bq();OB(this.ih,128,!c);c=3===this.api.getPresentingPlayerType();OB(this.ih,256,c);c=this.api.getRootNode();if(g.S(a,2))var d=[HQ.ENDED];else d=[],g.S(a,8)?d.push(HQ.PLAYING):g.S(a,4)&&d.push(HQ.PAUSED),g.S(a,1)&&!g.S(a,32)&&d.push(HQ.BUFFERING),g.S(a,32)&&
d.push(HQ.SEEKING),g.S(a,64)&&d.push(HQ.UNSTARTED);Ib(this.gs,d)||(taa(c,this.gs),this.gs=d,Oh(c,d));d=this.api.V();var e=g.S(a,2);g.Rh(c,"ytp-hide-controls",("3"===d.controlsType?!e:"1"!==d.controlsType)||b);g.Rh(c,"ytp-native-controls","3"===d.controlsType&&!b&&!e&&!this.Nt);g.S(a,128)&&!Yx(d)?(this.Of||(this.Of=new bC(this.api),g.G(this,this.Of),g.QA(this.api,this.Of.element,4)),Jfa(this.Of,a.getData()),this.Of.show()):this.Of&&(this.Of.dispose(),this.Of=null)};
g.k.zo=function(a){this.Nt=a;a=!(this.qD||this.Nt);g.Rh(this.api.getRootNode(),"ytp-menu-shown",!a)};
g.k.jz=function(){return!this.api.isFullscreen()||480>this.api.getPlayerSize().width||290>this.api.getPlayerSize().height};
g.k.fE=function(){return this.jz()&&(240>this.api.getPlayerSize().width||140>this.api.getPlayerSize().height)};
g.k.Pn=ba(11);g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.showControls=function(a){void 0!==a&&this.api.Db().Lo(a)};
g.k.ir=function(){};var Mfa=new Set("embed_config endscreen_ad_tracking home_group_info ic_track player_request watch_next_request".split(" "));var IQ={"default":0,monoSerif:1,propSerif:2,monoSans:3,propSans:4,casual:5,cursive:6,smallCaps:7};Object.keys(IQ).reduce(function(a,b){a[IQ[b]]=b;return a},{});
var JQ={none:0,raised:1,depressed:2,uniform:3,dropShadow:4};Object.keys(JQ).reduce(function(a,b){a[JQ[b]]=b;return a},{});
var KQ={normal:0,bold:1,italic:2,bold_italic:3};Object.keys(KQ).reduce(function(a,b){a[KQ[b]]=b;return a},{});new Ll("yt.autonav");g.w(g.DC,g.iB);g.DC.prototype.xm=function(){return!1};
g.DC.prototype.create=function(){this.chrome=new g.tC(this.player);g.G(this,this.chrome);this.chrome.init();this.player.jd("ux")};EC.prototype.getState=function(){return this.store.getState()};
EC.prototype.dispatch=function(a){return this.store.dispatch(a)};
EC.prototype.subscribe=function(a){return this.store.subscribe(a)};
EC.prototype.replaceReducer=function(a){return this.store.replaceReducer(a)};
EC.prototype[Symbol.observable]=function(){return this.store[Symbol.observable]()};var LQ={},Sfa=sn("PersistentEntityStoreDb",{xu:(LQ.EntityStore=!0,LQ),tv:!1,clearDataOnAuthChange:!0,upgrade:function(a,b){1>b&&Am(a,"EntityStore",{keyPath:"key"}).i.createIndex("entityType","entityType",{unique:!1})},
version:1});for(var VC={playbackData:119,transfer:120,offlineVideoPolicy:130,ytMainVideoEntity:151,ytMainChannelEntity:152,ytMainDownloadedVideoEntity:155,offlineOrchestrationActionWrapperEntity:169,offlineVideoStreams:198,captionTrack:225,orchestrationWebSamplingEntity:242},TC={},MQ=g.u(Object.entries(VC)),NQ=MQ.next();!NQ.done;NQ=MQ.next()){var OQ=g.u(NQ.value),Zka=OQ.next().value,PQ=OQ.next().value;PQ&&(TC[PQ]=Zka)};g.w(cD,g.F);cD.prototype.l=function(a){dD(this,a.data)};
cD.prototype.ra=function(){this.channel&&this.channel.close()};
var lD,kD=void 0;var Pfa=function(a){for(var b=Object.keys(a),c={},d=0;d<b.length;d++){var e=b[d];"function"===typeof a[e]&&(c[e]=a[e])}var f=Object.keys(c);try{Faa(c)}catch(l){var h=l}return function(l,m){l=void 0===l?{}:l;if(h)throw h;for(var n=!1,p={},q=0;q<f.length;q++){var r=f[q],t=l[r],v=(0,c[r])(t,m);if("undefined"===typeof v)throw l=m&&m.type,Error("Given "+(l&&'action "'+String(l)+'"'||"an action")+', reducer "'+r+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
p[r]=v;n=n||v!==t}return(n=n||f.length!==Object.keys(l).length)?p:l}}({entities:function(a,b){a=void 0===a?{}:a;
switch(b.type){case "ENTITY_LOADED":return b.payload.reduce(function(d,e){if(!e.payload)return g.so(Error("Entity "+e.entityKey+" missing EntityMutationPayload.")),d;if(!e.entityKey)return g.so(Error("Missing entity key.")),d;var f=Qb(e.payload);return"ENTITY_MUTATION_TYPE_REPLACE"===e.type?FC(d,f,e.entityKey,e.payload[f]):d},a);
case "REPLACE_ENTITY":var c=b.payload;return FC(a,c.entityType,c.key,c.BT);case "REPLACE_ENTITIES":return Object.keys(b.payload).reduce(function(d,e){var f=b.payload[e];return Object.keys(f).reduce(function(h,l){return FC(h,e,l,f[l])},d)},a);
default:return a}}}),Tfa=new EC;g.w(tD,rD);tD.prototype.l=function(a){return pD(a)?Xfa(this,a):qD(a)?Yfa(this,a):Promise.reject(Error("Unsupported action type: "+a.actionType))};g.w(xD,rD);xD.prototype.l=function(a){return pD(a)?$fa(this,a):qD(a)?aga(this,a):Promise.reject(Error("Unsupported action type: "+a.actionType))};g.w(zD,rD);zD.prototype.l=function(a){return pD(a)?cga(this,a):qD(a)?dga(this,a):"OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE"===a.actionType&&a.entityKey?fga(this,a):Promise.reject(Error("Unsupported action type: "+a.actionType))};
var hga=[10];var FD;MD.prototype.i=function(a,b){var c=a.action.actionMetadata.priority-b.action.actionMetadata.priority;0===c&&(a.i<b.i?c=-1:a.i>b.i&&(c=1));return c};g.w(OD,g.F);OD.prototype.ra=function(){this.B&&this.B();g.F.prototype.ra.call(this)};
OD.prototype.createAction=function(a,b){var c=UC(a.entityKey).entityType,d=g.Zn();return new DD(c,d,a,b.actionId,b.rootActionId)};
OD.prototype.C=function(a){var b;return D(this,function d(){var e=this,f,h,l,m,n,p,q,r;return A(d,function(t){if(1==t.i){if(e.ya())return t.return();f=null!==(b=a.offlineOrchestrationActionWrapperEntity)&&void 0!==b?b:new Set;h=[];l=g.u(f);for(m=l.next();!m.done;m=l.next()){n=m.value;p=UC(n);q=p.entityId;a:{var v=g.u(e.u.actions);for(var y=v.next();!y.done;y=v.next())if(y.value.actionId===q){v=!0;break a}v=!1}v||h.push(n)}return x(t,nga(e,h),2)}r=t.l;RD(e,r);v=e.l?Promise.resolve():PD(e);return x(t,
v,0)})})};SD.prototype.getLocalMediaInfoById=function(a){return D(this,function c(){return A(c,function(d){return d.return(gs(a))})})};
SD.prototype.getAllLocalMediaInfo=function(){return D(this,function b(){return A(b,function(c){return c.return(hs())})})};
SD.prototype.B=function(a){this.l=a.status;if(2===a.status)Tr(a.videoId,2),a.jm?Bga(this.i,a.jm):yga(this.i);else if(4===a.status){var b=a.videoId;Tr(b,4);$r(b,!1);Aga(this.i)}else 1===a.status&&zga(this.i);this.api.Ga("localmediachange",Py(a))};
SD.prototype.K=function(){};g.w(TD,g.F);TD.prototype.ra=function(){this.l&&this.l();g.F.prototype.ra.call(this)};
TD.prototype.u=function(a){var b;return D(this,function d(){var e,f,h,l,m,n,p,q=this;return A(d,function(r){e=null!==(b=a.transfer)&&void 0!==b?b:new Set;f=[];h=g.u(e);for(l=h.next();!l.done;l=h.next())m=l.value,n=UC(m),p=n.entityId,f.push(p);return 0===f.length?r.return():x(r,UD(q,f),0)})})};g.w(VD,g.F);VD.prototype.ra=function(){this.u&&this.u();this.B.dispose();g.F.prototype.ra.call(this)};
VD.prototype.C=function(){return D(this,function b(){var c=this;return A(b,function(d){return c.i?d.return():x(d,WD(c),0)})})};
var QQ={},ZD=(QQ.TRANSFER_STATE_TRANSFERRING=1,QQ.TRANSFER_STATE_TRANSFER_IN_QUEUE=2,QQ);g.k=$D.prototype;g.k.isReady=function(){return this.B};
g.k.init=function(){return D(this,function b(){var c=this;return A(b,function(d){if(1==d.i)return c.B?d.return(c.B):x(d,mD(),2);c.i=d.l;return c.i?x(d,c.startOrchestration(!0),0):d.return()})})};
g.k.startOrchestration=function(a){a=void 0===a?!1:a;return D(this,function c(){var d=this,e,f,h;return A(c,function(l){switch(l.i){case 1:e=d;if(a){l.fb(2);break}return x(l,d.isReady(),2);case 2:if(d.l&&d.u||!d.i)return l.return();d.l=new VD(d.i,d.api,d.player,d.G);return x(l,rga(d.l.B),4);case 4:return x(l,WD(d.l),5);case 5:return f={},h=(f.ytMainDownloadedVideoEntity=new zD(d.i),f.playbackData=new tD(d.i,d.D),f.transfer=new xD(d.i),f),x(l,kga(d.i,h),6);case 6:return d.u=l.l,x(l,bE(d,a),7);case 7:d.C=
zj(function(){bE(e)},9E5),l.i=0}})})};
g.k.stopOrchestration=function(){var a,b;return D(this,function d(){var e=this;return A(d,function(f){if(1==f.i)return x(f,e.isReady(),2);void 0!==e.C&&(window.clearInterval(e.C),e.C=void 0);null===(a=e.l)||void 0===a?void 0:a.dispose();e.l=void 0;null===(b=e.u)||void 0===b?void 0:b.dispose();e.u=void 0;f.i=0})})};
g.k.refreshAllVideos=function(){return D(this,function b(){var c=this,d;return A(b,function(e){return 1==e.i?(d=c.Eo,x(e,aE(c),2)):e.return(d.call(c,e.l,"OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH"))})})};
g.k.deleteVideos=function(a){return D(this,function c(){var d=this;return A(c,function(e){return e.return(d.Eo(a,"OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE"))})})};
g.k.deleteAllVideos=function(){return D(this,function b(){var c=this,d;return A(b,function(e){return 1==e.i?(d=c.Eo,x(e,aE(c),2)):e.return(d.call(c,e.l,"OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE"))})})};
g.k.getAllLocalMediaInfo=function(){return D(this,function b(){var c=this,d,e;return A(b,function(f){if(1==f.i)return d=c,x(f,aE(c),2);e=f.l;return f.return(Promise.all(e.map(function(h){return d.getLocalMediaInfoById(h)})))})})};
g.k.getLocalMediaInfoById=function(a){var b;return D(this,function d(){var e=this,f,h,l,m,n,p,q,r,t,v,y,C,z,E,O,L,ca,ha;return A(d,function(qa){switch(qa.i){case 1:if(!e.i)throw Error("PES is undefined");f=WC(a,"ytMainVideoEntity");return x(qa,iD(e.i,f,"ytMainVideoEntity"),2);case 2:return h=qa.l,l=WC(a,"ytMainChannelEntity"),x(qa,iD(e.i,l,"ytMainChannelEntity"),3);case 3:return m=qa.l,n=null,h&&m&&(n={videoId:a,title:h.title,thumbnail:h.thumbnail,shortViewCountText:null===(b=h.localizedStrings)||
void 0===b?void 0:b.viewCount,lengthSeconds:String(h.lengthSeconds),publishedTimestamp:String(Number(h.publishedTimestampMillis)/1E3),description:h.formattedDescription,channel:{offlineChannelData:{channelId:m.channelId,title:m.title,thumbnail:m.avatar}}}),p=0,q=WC(a,"transfer"),x(qa,iD(e.i,q,"transfer"),4);case 4:if(r=qa.l)switch(r.transferState){case "TRANSFER_STATE_TRANSFER_IN_QUEUE":case "TRANSFER_STATE_PRE_TRANSFER":p=3;break;case "TRANSFER_STATE_TRANSFERRING":p=2;break;case "TRANSFER_STATE_FAILED":p=
4;break;case "TRANSFER_STATE_COMPLETE":p=1}v=t=0;if(null===r||void 0===r||!r.offlineVideoStreams){qa.fb(5);break}y=g.u(r.offlineVideoStreams);C=y.next();case 6:if(C.done){qa.fb(5);break}z=C.value;return x(qa,iD(e.i,z,"offlineVideoStreams"),9);case 9:if((E=qa.l)&&E.streamsProgress)for(O=g.u(E.streamsProgress),L=O.next();!L.done;L=O.next())ca=L.value,t+=Number(ca.numTotalBytes),v+=Number(ca.numBytesDownloaded);C=y.next();qa.fb(6);break;case 5:return ha={videoId:a,totalSize:t,downloadedSize:v,status:p,
videoData:n},qa.return(ha)}})})};
g.k.Eo=function(a,b){return D(this,function d(){var e=this,f;return A(d,function(h){if(1==h.i)return x(h,e.isReady(),2);if(!e.u||!e.i)return h.return([]);f=a.map(function(l){var m=WC(l,"ytMainDownloadedVideoEntity");return ED(new DD("ytMainDownloadedVideoEntity",l,{actionType:b,entityKey:m,actionMetadata:{priority:0,retryScheduleIntervalsInSeconds:[10]}}))});
return h.return(hD(e.i,f))})})};var cE=!1,dE,eE,fE,gE,hE;
iE.prototype.encrypt=function(a){var b=qE.Oo("oap"),c=a.length;a=new Uint8Array(a.buffer.slice(a.byteOffset,a.byteOffset+c));for(var d=this.l,e=0;e<c&&16>this.i;)a[e++]^=d[this.i++];for(var f=c-(c-e)%16;e<f;)kE(this),a[e++]^=d[0],a[e++]^=d[1],a[e++]^=d[2],a[e++]^=d[3],a[e++]^=d[4],a[e++]^=d[5],a[e++]^=d[6],a[e++]^=d[7],a[e++]^=d[8],a[e++]^=d[9],a[e++]^=d[10],a[e++]^=d[11],a[e++]^=d[12],a[e++]^=d[13],a[e++]^=d[14],a[e++]^=d[15];if(e<c)for(kE(this),this.i=0;e<c;)a[e++]^=d[this.i++];qE.En(b,Math.ceil(c/
16));return a};lE.prototype.reset=function(){nE(this);this.update(this.u)};
lE.prototype.update=function(a){var b=0,c=a.length;this.B+=c;this.l&&64<=this.l+c&&(this.D.set(a.subarray(0,64-this.l),this.l),b=64-this.l,this.l=0,mE(this,this.D,0));for(;b+64<=c;b+=64)mE(this,a,b);b<c&&(a=a.subarray(b),this.D.set(a,this.l),this.l+=a.length)};
var Gga=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var eN=!1;var tE=[],wO=!1;var GL=g.ib(function(){var a="";try{var b=g.sf("CANVAS").getContext("webgl");b&&(b.getExtension("WEBGL_debug_renderer_info"),a=b.getParameter(37446),a=a.replace(/[ :]/g,"_"))}catch(c){}return a});g.w(g.xE,CB);g.k=g.xE.prototype;g.k.isView=function(){return!0};
g.k.Yu=function(){var a=this.i.getCurrentTime();if(a<this.start)try{var b=this.i.ye(),c=Tv(b,a);return!(this.start<c)}catch(d){}return!1};
g.k.Xj=function(){return Wv(this.i.Xj(),this.start,this.end)};
g.k.ye=function(){return Wv(this.i.ye(),this.start,this.end)};
g.k.Nn=function(){return Wv(this.i.Nn(),this.start,this.end)};
g.k.getCurrentTime=function(){return this.i.getCurrentTime()-this.start};
g.k.Tq=function(a){this.i.Tq(a+this.start)};
g.k.getDuration=function(){return isFinite(this.end)&&!this.B?this.end-this.start:this.i.getDuration()-this.start};
g.k.play=function(){if(this.Yu()){this.i.getCurrentTime();try{this.i.Tq(this.start)}catch(a){}}return this.i.play()};
g.k.gb=function(){var a=CB.prototype.gb.call(this);a.view=this.start+"-"+this.end;return a};
g.k.addEventListener=function(a,b){this.i.addEventListener(a,b)};
g.k.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
g.k.ip=function(){return this.i.ip()};
g.k.jl=function(a){this.i.jl(a)};
g.k.hp=function(){return this.i.hp()};
g.k.playVideo=function(){return this.i.playVideo()};
g.k.Rs=function(){this.i.Rs()};
g.k.Qs=function(){this.i.Qs()};
g.k.Uk=function(){return this.i.Uk()};
g.k.wd=function(){return this.i.wd()};
g.k.Me=function(){return this.i.Me()};
g.k.Uq=function(a){this.i.Uq(a)};
g.k.Lq=function(){this.i.Lq()};
g.k.getPlaybackRate=function(){return this.i.getPlaybackRate()};
g.k.setPlaybackRate=function(a){return this.i.setPlaybackRate(a)};
g.k.gp=function(){return this.i.gp()};
g.k.setLoop=function(a){this.i.setLoop(a)};
g.k.canPlayType=function(a,b){return this.i.canPlayType(a,b)};
g.k.ci=function(){return this.i.ci()};
g.k.Om=function(){return this.i.Om()};
g.k.Jg=function(){return this.i.Jg()};
g.k.Lp=function(){return this.i.Lp()};
g.k.nm=function(a){this.i.nm(a)};
g.k.jp=function(){return this.i.jp()};
g.k.load=function(){this.i.load()};
g.k.pause=function(){this.i.pause()};
g.k.df=function(){return this.i.df()};
g.k.Mp=function(){return this.i.Mp()};
g.k.Kf=function(){return this.i.Kf()};
g.k.zd=function(){return this.i.zd()};
g.k.kp=function(){return this.i.kp()};
g.k.ge=function(){return this.i.ge()};
g.k.togglePictureInPicture=function(){this.i.togglePictureInPicture()};
g.k.Hi=function(){return this.i.Hi()};
g.k.Tk=function(){return this.i.Tk()};
g.k.setSize=function(a){this.i.setSize(a)};
g.k.getVolume=function(){return this.i.getVolume()};
g.k.setVolume=function(a){this.i.setVolume(a)};
g.k.setAttribute=function(a,b){this.i.setAttribute(a,b)};
g.k.removeAttribute=function(a){this.i.removeAttribute(a)};
g.k.hasAttribute=function(a){return this.i.hasAttribute(a)};
g.k.cn=ba(33);g.k.Uo=ba(35);g.k.Vo=ba(37);g.k.jn=ba(39);g.k.An=function(){return this.i.An()};
g.k.Lj=function(a){this.i.Lj(a)};
g.k.On=function(a){return this.i.On(a)};
g.k.Rt=function(){return this.i.Rt()};
g.k.stopVideo=function(){this.i.stopVideo()};
g.k.Vs=function(a){this.i.Vs(a)};yE.prototype.then=function(a,b){return this.promise.then(a,b)};
yE.prototype.resolve=function(a){this.l(a)};
yE.prototype.reject=function(a){this.i(a)};g.w(zE,g.F);g.k=zE.prototype;g.k.isFinished=function(){return 6===this.status.status};
g.k.getStatus=function(){return this.status};
g.k.Nj=function(){var a=this.i.getVideoData(),b=this.l.getVideoData();if(a.l){var c;if(c=a.i){c=a.i;for(var d=!1,e=!1,f=g.u(Object.values(c.i)),h=f.next();!h.done;h=f.next())h=h.value,h.info.audio&&h.index.Vc()&&(d=!0),h.info.video&&h.index.Vc()&&(e=!0);c.i["0"]&&(e=!0);c=!(d&&e)}if(c)this.K();else if(this.i.uc()){h=Lga(this.policy,this.i,this.l,this.If);f=BE(this);c=f.uD;e=f.Gz;d=f.Tx;f=f.Fz;if(!this.G){var l=1E3*this.l.yh(),m=this.i.yh();m=1E3*(d-c-m);h&&"in-the-past"===h&&(m=0);a=a.isAd();var n=
this.l.C;n.qoe&&(n=n.qoe,n.D={JG:Number(n.Ja("glrem","nst."+l.toFixed()+";rem."+m.toFixed()+";ca."+ +a)),Hz:l,CG:m,isAd:a});this.G=!0}h?this.Uc("cannot_apply"+h+";transitionTimeMs."+this.If):2===this.status.status?LE(this):(a=this.i.mediaSource)?ew(a)?!cw(a)&&g.Fk()?this.Uc("mse_closed"):b.i&&ws(b.i)&&a.l&&!a.l.Jp()?this.Uc("encr_upgrade"):(b=this.i.uc(),b.Jg()?this.Uc("elem_ended"):0>e?this.Uc("next_player_future"):(this.D=d,this.u=iw(a,c,d,!0),this.B=iw(a,e,f,!1),a=this.l.getVideoData().clientPlaybackNonce,
this.i.Ja("gaplessPrep","cpn."+a),IE(this.i,this.u),DE(this.i,CE(b,c,d,!this.i.getVideoData().isAd())),HE(this,2),LE(this))):this.K():this.K()}else this.Uc("no-elem")}else this.K()};
g.k.Vk=function(a){var b=KE(this).UA,c=a===b;b=c?this.u.i:this.u.l;c=c?this.B.i:this.B.l;if(b.isActive&&!c.isActive){var d=this.D;Sv(a.yd(),d-.01)&&(HE(this,4),b.isActive=!1,b.bp=b.bp||b.isActive,this.l.Ja("sbh","1"),c.isActive=!0,c.bp=c.bp||c.isActive);a=this.B.l;this.B.i.isActive&&a.isActive&&HE(this,5)}};
g.k.Zz=function(){4<=this.status.status&&6>this.status.status&&this.Uc("player-reload-after-handoff")};
g.k.Uc=function(a){if(!this.ya()&&!this.isFinished()){this.K();var b=4<=this.status.status&&"player-reload-after-handoff"!==a;this.status={status:Infinity,error:a};if(this.i&&this.l){var c=this.l.getVideoData().clientPlaybackNonce;this.i.Ja("gaplessError","cpn."+c+";msg."+a);a=this.i;a.videoData.Da=!1;b&&GN(a);a.l&&(b=a.l,b.policy.Da=!1,b.mediaSource&&ZJ(b))}this.C.reject(void 0);this.dispose()}};
g.k.ra=function(){JE(this);this.i.unsubscribe("newelementrequired",this.Zz,this);if(this.u){var a=this.u.l;this.u.i.Qb.unsubscribe("updateend",this.Vk,this);a.Qb.unsubscribe("updateend",this.Vk,this)}g.F.prototype.ra.call(this)};
g.k.pw=function(a){g.wE(a,128)&&this.Uc("player-error-event")};
g.k.K=function(){};g.w(NE,g.F);NE.prototype.clearQueue=function(){this.K();this.B&&this.B.reject("Queue cleared");OE(this)};
NE.prototype.Sl=function(){return!this.l};
NE.prototype.ra=function(){OE(this);g.F.prototype.ra.call(this)};
NE.prototype.K=function(){};g.w(WE,g.N);g.k=WE.prototype;g.k.getVisibilityState=function(a,b,c,d,e,f){return a?4:RE()?3:b?2:c?1:d?5:e?7:f?8:0};
g.k.Qh=function(a){this.fullscreen!==a&&(this.fullscreen=a,VE(this))};
g.k.setMinimized=function(a){this.u!==a&&(this.u=a,VE(this))};
g.k.setInline=function(a){this.inline!==a&&(this.inline=a,VE(this))};
g.k.pm=function(a){this.pictureInPicture!==a&&(this.pictureInPicture=a,VE(this))};
g.k.setImmersivePreview=function(a){this.l!==a&&(this.l=a,VE(this))};
g.k.ge=function(){return this.i};
g.k.isFullscreen=function(){return 0!==this.fullscreen};
g.k.Pe=function(){return this.u};
g.k.isInline=function(){return this.inline};
g.k.isBackground=function(){return RE()};
g.k.Rl=function(){return this.pictureInPicture};
g.k.Ql=function(){return this.l};
g.k.ra=function(){UE(this.B);g.N.prototype.ra.call(this)};g.w(g.ZE,g.F);g.k=g.ZE.prototype;g.k.fd=function(a){var b=this.D.get(a),c=null==b;if(this.xa)this.xa=!1,c||(a=this.u.find(function(d){return d.cpn===b}))&&this.api.U("serverstitchedvideochange",a.Lb),this.N=!1;
else if(this.l){if(this.l.Wn)this.i.Ja("sdai","a_pair_of_same_transition_occurs_enter");else{if(this.l.Ic===a){this.l=void 0;return}if(this.l.adCpn===b){this.i.Ja("sdai","dchtsc");this.l=void 0;return}a={Ic:a,isAd:!c,Wn:!0,Th:this.i.getCurrentTime(),adCpn:b};bF(this,a,this.l)}this.l=void 0;this.N=!1}else this.l={Ic:a,isAd:!c,Wn:!0,Th:this.i.getCurrentTime(),adCpn:b}};
g.k.tf=function(a){this.xa&&(this.N=this.xa=!1,this.i.Ja("sdai","cref"));var b=this.D.get(a),c=null==b;if(this.l){if(this.l.Wn){if(this.l.Ic===a){this.l=void 0;return}if(this.l.adCpn===b){this.i.Ja("sdai","dchtsc");this.l=void 0;return}a={Ic:a,isAd:!c,Wn:!1,Th:this.i.getCurrentTime(),adCpn:b};bF(this,this.l,a)}else this.i.Ja("sdai","a_pair_of_same_transition_occurs_exit");this.l=void 0;this.N=!1}else this.l={Ic:a,isAd:!c,Wn:!1,Th:this.i.getCurrentTime(),adCpn:b};g.P(this.B.experiments,"web_player_halftime_dai")&&
(a=this.u.find(function(d){return d.cpn===b}),this.isLiveNow&&a&&this.i.getCurrentTime()<HF(this.i)&&XE(this,Infinity))};
g.k.isAdPlaying=function(a){return!!dF(this,1E3*a)};
g.k.seekTo=function(a,b,c){a=void 0===a?0:a;c=void 0===c?null:c;this.N=!0;if(void 0===b?0:b)XE(this,a);else{b=this.api.Jb();var d=b===this.W?this.ea:null;eF(this,!1);this.Aa=a;null!=c&&this.Da.start(c);b&&(this.ea=d||b.getPlayerState(),dO(b),this.W=b)}};
g.k.ra=function(){eF(this,!1);iF(this);g.F.prototype.ra.call(this)};
g.k.K=function(){};
g.k.qt=function(a,b,c){if(Tga(this,b))return null;a=jF(this,a,b);var d=Number(c.split(";")[0]);if(a&&a.playerResponse&&a.playerResponse.streamingData){var e=a.playerResponse.streamingData.adaptiveFormats;if(e){var f=e.find(function(l){return l.itag===d});
if(f&&f.url){e=this.i.getVideoData();var h=e.i.i[c].index.Ct(b-1);c=f.url;h&&h.i&&(c=c.concat("&daistate="+h.i));a.Cv&&b>=a.Cv&&(c=c.concat("&skipsq="+a.Cv));(e=e.clientPlaybackNonce)&&(c=c.concat("&cpn="+e));a.Jj&&(e=Uga(this,a.Jj),0<e.length&&(c=c.concat("&acpns="+e.join(","))));g.P(this.B.experiments,"html5_high_res_logging")&&this.i.Ja("sdai","ast."+a.Ab.toFixed(3)+".alen."+a.durationMs.toFixed(3)+".acpn."+a.cpn);this.Ba.set(b,a);return c}}}Sga(this,b);return null};
g.k.skipAd=function(a,b){if(a=jF(this,a,b)){a=a.Jj;this.i.Ja("sdai","skip_adbreakid_"+a);for(var c=g.u(this.u),d=c.next();!d.done;d=c.next())d=d.value,d.Jj===a&&(d.Cv=b)}};
g.k.Iu=function(a,b,c,d){if(c.length&&d.length)for(a*=1E3,c=g.u(c.entries()),b=c.next();!b.done;b=c.next()){b=g.u(b.value);var e=b.next().value;b=b.next().value;e=1E3*d[e];if(b===this.i.getVideoData().clientPlaybackNonce)lF(this,a,a+e,!1),a+=e;else{for(var f=void 0,h=g.u(this.D),l=h.next();!l.done;l=h.next()){l=g.u(l.value);var m=l.next().value;l.next().value===b&&(f=m)}f&&f.start<=a&&f.end>=a+e||(h=!1,f?a<f.start?f.start=a:f.end<a+e&&(f.end=a+e):(f=$E(a,a+e),this.D.set(f,b),h=!0),a=f.end,lF(this,
f.start,f.end,!0),h&&this.i.addCueRange(f))}}else 5!==b&&4!==b||lF(this,1E3*a,1E3*a+5E3,!1)};
g.k.kc=function(a){this.i.Ja("timelineerror",a)};
g.k.Ht=function(a){var b;g.Qj(this.X,function(c){return c.identifier===a.identifier})?(this.i.Ja("sdai","timedoutcp.1"),this.G.start(0)):this.G.isActive()?this.i.Ja("sdai","racingcp_"+(null===(b=this.T)||void 0===b?void 0:b.identifier)+"_"+a.identifier):(g.P(this.B.experiments,"html5_high_res_logging")&&this.i.Ja("sdai","adf.1"),this.I=!1,this.G.start(),this.T=a,this.Ba.clear(),this.ma=[])};
g.k.Zi=ba(23);var RQ={},HQ=(RQ.BUFFERING="buffering-mode",RQ.CUED="cued-mode",RQ.ENDED="ended-mode",RQ.PAUSED="paused-mode",RQ.PLAYING="playing-mode",RQ.SEEKING="seeking-mode",RQ.UNSTARTED="unstarted-mode",RQ);g.k=g.oF.prototype;g.k.getData=function(){return this.stateData};
g.k.Zb=function(){return g.S(this,8)&&!g.S(this,512)&&!g.S(this,64)&&!g.S(this,2)};
g.k.isCued=function(){return g.S(this,64)&&!g.S(this,8)&&!g.S(this,4)};
g.k.isError=function(){return g.S(this,128)};
g.k.isSuspended=function(){return g.S(this,512)};
g.k.toString=function(){return"PSt."+this.state.toString(16)};g.w(yF,g.F);g.k=yF.prototype;g.k.fd=function(a){if(this.l===this.api.Jb()){var b=this.D.get(a);if(b){var c=b.target;this.K();AF(this,c,b.If,a)}else this.kc("e.unexpectedCueRangeTriggered")}else if(b=this.i.find(function(e){return e.Di.Ic===a})){var d=b.Di;
this.K();c=d.target;d=d.If;c?AF(this,c,d,a):Wga(this,b.ac,d,a)}};
g.k.MF=function(){var a=this.I;CF(this);if(a){BF(this,a)||this.kc("e.unexpectedPresentingPlayer");var b=this.api.Jb();a=a.Di;this.K();b.addCueRange(a.Ic)}};
g.k.seekTo=function(a,b,c){a=void 0===a?0:a;c=void 0===c?null:c;if(void 0===b?0:b)xF(this,a);else{b=this.api.Jb();var d=b===this.B?this.G:null;GF(this,!1);this.T=a;null!=c&&this.N.start(c);b&&(this.G=d||b.getPlayerState(),dO(b),this.B=b)}};
g.k.Ng=function(a){g.wE(a,128)&&LF(this)};
g.k.isManifestless=function(){return Rz(this.l.getVideoData())};
g.k.ra=function(){GF(this,!1);NF(this);g.F.prototype.ra.call(this)};
g.k.K=function(){};
g.k.kc=function(a){this.l.Ja("timelineerror",a)};var Xga="MWEB TVHTML5 TVHTML5_AUDIO TVHTML5_CAST TVHTML5_KIDS TVHTML5_SIMPLY TVHTML5_SIMPLY_EMBEDDED_PLAYER TVHTML5_UNPLUGGED TVHTML5_VR TV_UNPLUGGED_CAST WEB WEB_CREATOR WEB_EMBEDDED_PLAYER WEB_EXPERIMENTS WEB_GAMING WEB_HEROES WEB_KIDS WEB_LIVE_STREAMING WEB_MUSIC WEB_MUSIC_ANALYTICS WEB_MUSIC_EMBEDDED_PLAYER WEB_REMIX WEB_UNPLUGGED WEB_UNPLUGGED_ONBOARDING WEB_UNPLUGGED_OPS WEB_UNPLUGGED_PUBLIC".split(" ");g.w(QF,g.F);QF.prototype.get=function(a){OF(this);var b=this.data.find(function(c){return c.key===a});
return b?b.value:null};
QF.prototype.set=function(a,b,c){this.remove(a,!0);OF(this);a={key:a,value:b,expire:Infinity};c&&isFinite(c)&&(c*=1E3,a.expire=(0,g.M)()+c);for(this.data.push(a);this.data.length>this.u;)(c=this.data.shift())&&RF(this,c,!0);PF(this)};
QF.prototype.remove=function(a,b){b=void 0===b?!1:b;var c=this.data.find(function(d){return d.key===a});
c&&(RF(this,c,b),ub(this.data,function(d){return d.key===a}),PF(this))};
QF.prototype.ra=function(){var a=this;g.F.prototype.ra.call(this);this.data.forEach(function(b){RF(a,b,!0)});
this.data=[]};SF.prototype.add=function(a){this.i=(this.i+1)%this.data.length;this.data[this.i]=a};
SF.prototype.forEach=function(a){for(var b=this.i+1;b<this.data.length;b++)a(this.data[b]||0);for(b=0;b<=this.i;b++)a(this.data[b]||0)};
SF.prototype.clear=function(){for(var a=this.data.length,b=0;b<a;b++)this.data[b]=0;this.l=this.i=this.data.length-1};g.w(pG,g.F);pG.prototype.start=function(){this.l.start()};
pG.prototype.stop=function(){this.l.stop()};
pG.prototype.clear=function(){for(var a=g.u(this.i.values()),b=a.next();!b.done;b=a.next())b.value.clear()};
pG.prototype.u=function(){for(var a=g.u(this.B),b=a.next();!b.done;b=a.next()){var c=g.u(b.value);b=c.next().value;c=c.next().value;this.i.has(b)||this.i.set(b,new CG($ka.has(b)));this.i.get(b).update(c())}this.l.start()};
var $ka=new Set(["networkactivity"]);CG.prototype.update=function(a){this.l?(this.buffer.add(a-this.i||0),this.i=a):this.buffer.add(a)};
CG.prototype.clear=function(){this.buffer.clear();this.i=0};g.w(EG,g.F);EG.prototype.ra=function(){g.F.prototype.ra.call(this);this.i=null;this.l&&this.l.disconnect()};var SQ={},FG=(SQ.STOP_EVENT_PROPAGATION="html5-stop-propagation",SQ.IV_DRAWER_ENABLED="ytp-iv-drawer-enabled",SQ.IV_DRAWER_OPEN="ytp-iv-drawer-open",SQ.MAIN_VIDEO="html5-main-video",SQ.VIDEO_CONTAINER="html5-video-container",SQ.HOUSE_BRAND="house-brand",SQ);g.w(HG,g.XB);g.k=HG.prototype;g.k.Lj=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];Oh(this.element,b)};
g.k.Xe=function(){this.yb&&(this.yb.removeEventListener("focus",this.Gu),g.wf(this.yb),this.yb=null)};
g.k.Os=function(){this.ya();var a=this.app.V();a.Wd||this.Lj("tag-pool-enabled");"gvn"===a.playerStyle&&(this.Lj("ytp-gvn"),this.element.style.backgroundColor="transparent");this.Hs=$k("yt-dom-content-change",this.resize,this);this.Y(window,"orientationchange",this.resize,this);this.Y(window,"resize",this.resize,this)};
g.k.Lo=function(a){g.gy(this.app.V());this.Wp=!a;IG(this)};
g.k.resize=function(){if(this.yb){var a=this.Ne();if(!a.isEmpty()){var b=this.im;b=!gf(a,new g.ff(b.width,b.height));QG(this);b&&(this.im.width=a.width,this.im.height=a.height);this.app.Fa.U("resize",this.getPlayerSize())}}};
g.k.updateVideoData=function(a){if(this.yb){var b=this.app.V();Mk&&(this.yb.setAttribute("x-webkit-airplay","allow"),a.title?this.yb.setAttribute("title",a.title):this.yb.removeAttribute("title"));this.yb.removeAttribute("disableremoteplayback");this.yb.setAttribute("controlslist","nodownload");b.dh&&a.videoId&&(this.yb.poster=a.Af("default.jpg"))}b=g.bA(a,"yt:bgcolor");this.Gs.style.backgroundColor=b?b:"";this.ou=Sx(g.bA(a,"yt:stretch"));this.pu=Sx(g.bA(a,"yt:crop"),!0);g.Rh(this.element,"ytp-dni",
a.N);this.resize()};
g.k.setGlobalCrop=function(a){this.Gt=Sx(a,!0);this.resize()};
g.k.setCenterCrop=function(a){this.Ix=a;this.resize()};
g.k.Qh=function(){};
g.k.getPlayerSize=function(){var a=this.app.V(),b=this.app.Fa.isFullscreen();if(b&&Dk())return new g.ff(window.outerWidth,window.outerHeight);if(b||a.cg){if(window.matchMedia){a="(width: "+window.innerWidth+"px) and (height: "+window.innerHeight+"px)";this.jo&&this.jo.media===a||(this.jo=window.matchMedia(a));var c=this.jo&&this.jo.matches}if(c)return new g.ff(window.innerWidth,window.innerHeight)}else{if(!isNaN(this.Fn.width)&&!isNaN(this.Fn.height))return this.Fn.clone();if(this.vr&&this.Uv&&!this.app.isWidescreen())for(a=
0;a<this.vr.length;a++)if(b=this.vr[a],b.query.matches)return new g.ff(b.size.width,b.size.height)}return new g.ff(this.element.clientWidth,this.element.clientHeight)};
g.k.Ne=function(){return this.getPlayerSize()};
g.k.getVideoAspectRatio=function(){return isNaN(this.ou)?LG(this):this.ou};
g.k.getVideoContentRect=function(a){var b=this.Ne();a=MG(this,b,this.getVideoAspectRatio(),a);return new g.Lf((b.width-a.width)/2,(b.height-a.height)/2,a.width,a.height)};
g.k.zo=function(){IG(this)};
g.k.setUseFastSizingOnWatch=function(a){this.Uv!==a&&(this.Uv=a,this.resize())};
g.k.setInternalSize=function(a){gf(this.Fn,a)||(this.Fn=a,this.resize())};
g.k.ra=function(){this.Hs&&al(this.Hs);this.Xe();g.XB.prototype.ra.call(this)};RG.prototype.clickCommand=function(a,b,c){c=g.io(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;Do(this.client,c,g.bo(a.clickTrackingParams),b);return!0};g.k=g.VG.prototype;g.k.click=function(a,b){this.elements.has(a);this.i.has(a);var c=g.io();c&&a.visualElement&&Do(g.J("use_default_events_client")?void 0:g.Hn,c,a.visualElement,b)};
g.k.ul=function(a,b,c,d){var e=this;d=void 0===d?!1:d;this.elements.has(a);this.elements.add(a);c=Rba(c);a.visualElement=c;var f=g.io(),h=go();f&&h&&Ho(f,h,c);g.vg(b,function(){WG(e,a)});
d&&this.l.add(a)};
g.k.nh=function(a,b,c){var d=this;c=void 0===c?!1:c;this.elements.has(a);this.elements.add(a);g.vg(b,function(){WG(d,a)});
c&&this.l.add(a)};
g.k.Vq=function(a,b){this.elements.has(a);b&&(a.visualElement=g.bo(b))};
g.k.Ml=ba(18);g.w(YG,g.XB);
YG.prototype.setValue=function(a,b){for(var c=0;c+2<this.C.length&&this.C[c+1]<b;)c++;b=Math.min(1,(b-this.C[c])/(this.C[c+1]-this.C[c]));if(this.l)this.l.fillStyle=this.D[c],this.l.fillRect(a*this.i,0,this.i,this.heightPx),this.l.fillStyle=this.D[c+1],this.l.fillRect(a*this.i,this.heightPx*(1-b),this.i,this.heightPx);else{a=this.element.children[a];var d=window.devicePixelRatio||1;b=Math.min(this.heightPx,Math.round(this.heightPx*b*d)/d)||0;a.style.height=b+"px";a.style.backgroundColor=this.D[c+
1];a.style.borderTop="solid "+(this.heightPx-b)+"px "+this.D[c]}};g.w($G,g.XB);g.k=$G.prototype;g.k.show=function(){g.XB.prototype.show.call(this);this.oe()};
g.k.hide=function(){g.XB.prototype.hide.call(this);this.delay.stop()};
g.k.stop=function(){this.delay.stop()};
g.k.start=function(){this.delay.isActive()||this.oe()};
g.k.oe=function(){var a=(0,g.M)(),b=this.D.getStatsForNerds();ZG(this.i,b.bandwidth_samples);ZG(this.C,b.network_activity_samples);ZG(this.B,b.live_latency_samples);ZG(this.l,b.buffer_health_samples);this.update(b);a=25<(0,g.M)()-a?5E3:500;this.delay.start(a)};bH.prototype.deactivate=function(){this.isActive&&(this.isActive=!1)};oH.prototype.setPlaybackRate=function(a){this.playbackRate=Math.max(1,a)};
oH.prototype.getPlaybackRate=function(){return this.playbackRate};g.w(tH,g.N);tH.prototype.seek=function(a){a!==this.l&&(this.seekCount=0);this.l=a;var b=this.videoTrack.l,c=this.audioTrack.l,d=this.audioTrack.eb,e=zH(this,this.videoTrack,a,this.videoTrack.eb);d=zH(this,this.audioTrack,this.policy.Ma?a:e,d);e=Math.max(a,e,d);this.i=!0;this.u.isManifestless&&(uH(this,this.videoTrack,b),uH(this,this.audioTrack,c));JH(this.D,a);return e};
tH.prototype.K=function(){};
var iha=2/24;DH.prototype.Qa=function(){this.tick("gv")};
DH.prototype.tick=function(a,b){this.ticks[a]=b?window.performance.timing.navigationStart+b:(0,g.M)()};g.w(FH,g.N);FH.prototype.W=function(a,b){var c=this.D.i.index.vb()<=b,d=this.I.isManifestless&&this.policy.ea;this.i={tc:a,oa:b};this.policy.ea&&this.N&&this.u&&(this.N=!1,"continue"!==a.event&&"stop"!==a.event||IH(this,this.u));this.u&&this.u.oa===b&&(this.u=null);(c||d)&&GH(this,a,b)};KH.prototype.push=function(a){this.buffer[this.index%this.length]=a;this.index=(this.index+1)%this.length;this.count!==this.length&&this.count++};MH.prototype.K=function(){};hI.prototype.skip=function(a){this.offset+=a};
hI.prototype.Bh=function(){return this.offset};g.w(kI,g.N);kI.prototype.Ff=function(){this.l.shift()};
kI.prototype.isAudio=function(){return!!this.u.info.audio};
kI.prototype.getDuration=function(){return this.u.index.Gi()};
kI.prototype.K=function(){};g.k=BI.prototype;g.k.ot=function(){return 0};
g.k.qw=function(){return null};
g.k.Ey=function(){return null};
g.k.isComplete=function(){return 4<=this.state};
g.k.isFailed=function(){return 6===this.state};
g.k.Bo=function(a){this.callback&&this.callback(this,a)};
g.k.ya=function(){return-1===this.state};
g.k.dispose=function(){this.info.yf()&&5!==this.state&&(this.info.i[0].i.u=!1);DI(this,-1)};g.w(HI,g.N);g.k=HI.prototype;g.k.hasDecryptedBytes=function(){return Object.values(this.i).some(function(a){return a.hasDecryptedBytes})};
g.k.isFailed=function(a){var b;return null===(b=this.i[a])||void 0===b?void 0:b.isFailed};
g.k.Qe=function(a){a=(a=this.i[a])&&a.slices;return!(!a||!a.totalLength)};
g.k.isComplete=function(a){return(a=this.i[a])&&a.isComplete};
g.k.Ff=function(a){var b=this.i[a].slices;this.i[a].bytesShifted+=b.totalLength;this.i[a].slices=new Tu;return b};
g.k.K=function(){};g.w(II,BI);g.k=II.prototype;g.k.Bo=function(a){JI(this);BI.prototype.Bo.call(this,a)};
g.k.Pm=function(){return{}};
g.k.yy=function(){return 0};
g.k.Mg=function(){return!0};
g.k.uw=function(){this.I=!0;return GI(this.i)};
g.k.hm=function(){return 1>this.state?!1:!!this.i.slices.length};
g.k.Er=function(){JI(this);return this.i.slices};KI.prototype.De=function(){return lI(this.B)};
KI.prototype.Ff=function(a){this.B.Ff(a);a=a.info;a.i.info.l>=this.T&&(this.T=a.i.info.l)};
KI.prototype.getDuration=function(){return this.i.index.Gi()};hJ.prototype.send=function(){g.Fj(this.target,{format:"RAW",responseType:"arraybuffer",timeout:1E4,onFinish:this.onComplete,onTimeout:this.onComplete,context:this});this.i=(0,g.M)()};
hJ.prototype.onComplete=function(a){var b,c={rc:a.status,lb:(null===(b=a.response)||void 0===b?void 0:b.byteLength)||0,rt:(((0,g.M)()-this.i)/1E3).toFixed(3),shost:g.Sd(this.target),trigger:this.trigger};204===a.status||a.response?this.l&&this.l(g.pq(c)):this.u(new oq("pathprobe.net",!1,c))};g.k=iJ.prototype;g.k.getResponseHeader=function(a){return"content-type"===a?this.l.get("type"):""};
g.k.abort=function(){};
g.k.Pi=function(){return!0};
g.k.In=function(){return this.range.length};
g.k.Uj=function(){return this.loaded};
g.k.Up=function(){return!!this.i.totalLength};
g.k.Qe=function(){return!!this.i.totalLength};
g.k.Ff=function(){var a=this.i;this.i=new Tu;return a};
g.k.De=function(){return this.i};
g.k.Fv=function(){return!0};
g.k.Su=function(){return!!this.error};
g.k.zd=function(){return this.error};var Jha=0;g.k=jJ.prototype;g.k.start=function(a){var b=this,c={method:this.method,credentials:this.credentials};this.headers&&(c.headers=new Headers(this.headers));this.body&&(c.body=this.body);this.B&&(c.signal=this.B.signal);a=new Request(a,c);fetch(a).then(function(d){Kha(b,d)},function(d){b.onError(d)}).then(void 0,g.dj)};
g.k.onDone=function(){if(!this.ya()){this.K();this.I=!0;if(lJ(this)&&!this.i.totalLength&&!this.C&&this.l){ms(this);var a=new Uint8Array(8),b=new DataView(a.buffer);b.setUint32(0,8);b.setUint32(4,1936419184);this.i.append(a);this.l+=a.length}this.X()}};
g.k.onError=function(a){this.K();this.errorMessage=String(a);this.C=!0;this.onDone()};
g.k.getResponseHeader=function(a){return this.G?this.G.get(a):null};
g.k.Pi=function(){return!!this.G};
g.k.Uj=function(){return this.l};
g.k.In=function(){return+this.getResponseHeader("content-length")};
g.k.Up=function(){return 200<=this.status&&300>this.status&&!!this.l};
g.k.K=function(){};
g.k.Qe=function(){if(this.I)return!!this.i.totalLength;if(!this.Pi())return!1;var a=this.policy.u;if(a&&this.N+a>Date.now())return!1;a=this.In()||0;a=Math.max(16384,this.policy.i*a);this.T||(a=Math.max(a,16384));this.policy.Ud&&ms(this)&&(a=1);return this.i.totalLength>=a};
g.k.Ff=function(){this.Qe();this.N=Date.now();this.T=!0;var a=this.i;this.i=new Tu;return a};
g.k.De=function(){this.Qe();return this.i};
g.k.ya=function(){return this.aborted};
g.k.abort=function(){this.K();this.u&&this.u.cancel().catch(function(){});
this.B&&this.B.abort();this.aborted=!0};
g.k.Fv=function(){return!0};
g.k.Su=function(){return this.C};
g.k.zd=function(){return this.errorMessage};g.k=mJ.prototype;g.k.onDone=function(){if(!this.ya){this.status=this.xhr.status;try{this.response=this.xhr.response,this.l=this.response.byteLength}catch(a){}this.i=!0;this.u()}};
g.k.Pi=function(){return 2<=this.xhr.readyState};
g.k.getResponseHeader=function(a){try{return this.xhr.getResponseHeader(a)}catch(b){return g.fj(Error("Could not read XHR header "+a)),""}};
g.k.In=function(){return+this.getResponseHeader("content-length")};
g.k.Uj=function(){return this.l};
g.k.Up=function(){return 200<=this.status&&300>this.status&&!!this.response&&!!this.response.byteLength};
g.k.Qe=function(){return this.i&&!!this.response&&!!this.response.byteLength};
g.k.Ff=function(){this.Qe();var a=this.response;this.response=void 0;return new Tu([new Uint8Array(a)])};
g.k.De=function(){this.Qe();return new Tu([new Uint8Array(this.response)])};
g.k.abort=function(){this.ya=!0;this.xhr.abort()};
g.k.Fv=function(){return!1};
g.k.Su=function(){return!1};
g.k.zd=function(){return""};g.w(pJ,BI);g.k=pJ.prototype;
g.k.Pm=function(){var a=cH(this.timing);a.shost=Ss(this.l.kf);a.rn=this.requestNumber.toString();this.u&&(a.rc=this.u.toString());a.itag=""+this.info.i[0].i.info.wb();a.ml=""+ +this.info.i[0].i.pd();a.sq=""+this.info.i[0].oa;if(this.l){var b=this.l.kf;Rs(b);var c=decodeURIComponent(b.get("mn")||"").split(",");a.ifi=""+ +("/videoplayback"===b.path&&1<c.length&&!!c[1])}410!==this.u&&500!==this.u&&503!==this.u||(a.fmt_unav="true");this.xhr&&this.xhr.zd()&&(a.msg=this.xhr.zd());this.Ro&&(a.smb="1");this.i&&
(b=this.i.slices,b.length&&fv(b[0],a));return a};
g.k.yy=function(){var a=this.timing;return(a.B-a.i)/1E3};
g.k.zd=function(){return this.xhr.zd()||""};
g.k.XB=function(a,b,c){if(!this.ya()&&this.xhr){this.u=this.xhr.status;var d=this.timing;a=a>d.i&&4E12>a?a:Date.now();lH(d,a,b);50>a-d.B&&mH(d)&&3!==fH(d)||jH(d,a,b,c);b=this.timing;b.l>b.Ma&&gH(b,b.l)&&3>this.state?(this.K(),DI(this,3)):this.Mg()&&this.hm()&&DI(this,Math.max(2,this.state))}};
g.k.sG=function(){if(!this.ya()&&this.xhr){if(!this.T&&this.xhr.Pi()&&this.xhr.getResponseHeader("X-Walltime-Ms")){var a=Number(this.xhr.getResponseHeader("X-Walltime-Ms"));this.T=(g.ab()-a)/1E3}this.xhr.Pi()&&this.xhr.getResponseHeader("X-Restrict-Formats-Hint")&&this.policy.Nk&&!rJ()&&Ska(!0);a=Number(this.xhr.getResponseHeader("X-Head-Seqnum"));var b=Number(this.xhr.getResponseHeader("X-Head-Time-Millis"));this.D=a||this.D;this.G=b||this.G}};
g.k.WB=function(){var a=this.xhr;!this.ya()&&a&&(this.N.stop(),this.u=a.status,a=Qha(this,a),6===a?oJ(this):DI(this,a))};
g.k.canRetry=function(){this.ya();var a=nJ(this);return 100>a.l&&a.i<this.policy.xj};
g.k.Bo=function(a){this.isComplete()&&(this.policy.Gc?vJ(this):this.timing.deactivate());BI.prototype.Bo.call(this,a)};
g.k.FG=function(){this.isComplete();if(!this.ya()){var a=g.ab(),b=!1;mH(this.timing)?(a=this.timing.N,eH(this.timing),this.timing.N-a>=.8*this.W?(this.B++,this.K(),b=5<=this.B):this.B=0):(b=this.timing,b.Se&&nH(b,Date.now()),a-=b.T,this.policy.qe&&0<a&&(this.B+=1),b=!this.policy.ma,b=fu(nJ(this),this.policy,b)*this.policy.Fj,(b=a>1E3*b)&&this.K());this.B&&this.callback&&this.callback(this,this.state);b?wJ(this,!1):this.N.start()}};
g.k.dispose=function(){BI.prototype.dispose.call(this);this.N.dispose();this.policy.Gc||vJ(this)};
g.k.Mg=function(){return this.xhr.Fv()};
g.k.uw=function(){if(!this.Er().length)return[];this.I=!0;return GI(this.i)};
g.k.hm=function(){return 1>this.state?!1:this.i&&this.i.slices.length||this.xhr.Qe()?!0:!1};
g.k.Er=function(){tJ(this,!1);return this.i?this.i.slices:[]};
g.k.Uj=function(){return this.xhr.Uj()};
g.k.ot=function(){return this.T};
g.k.K=function(){};
g.k.qw=function(){this.xhr&&(this.D=Number(this.xhr.getResponseHeader("X-Head-Seqnum")));return this.D};
g.k.Ey=function(){this.xhr&&(this.G=Number(this.xhr.getResponseHeader("X-Head-Time-Millis")));return this.G};
var Mha=0,uJ=-1;g.w(xJ,g.N);xJ.prototype.clear=function(){this.l=this.G=this.B=null;this.i=this.C=this.D=this.startTimeSecs=NaN;this.u=!1};
xJ.prototype.K=function(){};g.w(FJ,g.N);g.k=FJ.prototype;
g.k.initialize=function(a,b,c){this.K();a=a||0;this.U("videoformatchange",UH(this.l));if(this.i.isManifestless){if(this.policy.Ug){b=Ds(this.policy);for(var d in this.i.i)this.i.i.hasOwnProperty(d)&&(this.i.i[d].index.l=b)}Vha(this)}this.C&&yJ(this.C,this.videoTrack.i);this.policy.Ba&&ls()&&this.Hb("streaming","ac."+!!window.AbortController,!0);d=isNaN(this.currentTime)?0:this.currentTime;this.currentTime=this.i.isManifestless?d:a;Uha(this)?(IJ(this,this.videoTrack,this.videoTrack.i),IJ(this,this.audioTrack,
this.audioTrack.i)):c?(this.policy.pc?(this.Xa=c,LJ(this,c)):LJ(this,!1),g.Ih(this.Pa)):(a=0===this.currentTime,GJ(this,this.videoTrack,this.videoTrack.i,a),GJ(this,this.audioTrack,this.audioTrack.i,a),g.xh(this.seek(this.currentTime),function(){}),this.timing.Qa());
(this.i.Lc||this.i.Ce)&&this.Hb("minMaxSq","minSq."+this.i.Lc+";maxSq."+this.i.Ce+";minDvrTime."+this.i.C+";maxDvrTime."+this.i.G)};
g.k.resume=function(){if(this.isSuspended||this.W)this.K(),this.Ba=this.W=this.isSuspended=!1,this.gf()};
g.k.setAudioTrack=function(a){if(!this.ya()){var b=this.l;b.u=b.C.i[a.id];b.I=b.u;a=new LH(b.I,b.i,"m");this.K();this.U("audioformatchange",a);this.U("reattachrequired")}};
g.k.setPlaybackRate=function(a){a!==this.D.getPlaybackRate()&&this.D.setPlaybackRate(a)};
g.k.gf=function(){QJ(this);if(this.mediaSource&&cw(this.mediaSource)&&!this.mediaSource.Be()){var a=MI(this.videoTrack);a=this.policy.Bj&&a&&a.u;this.i.isManifestless&&this.i.D&&Cw(this.i)?(this.G=Cw(this.i),dw(this.mediaSource,this.G)):this.i.isLive&&!a?isNaN(this.G)?(this.G=this.currentTime+3600,dw(this.mediaSource,this.G)):this.G<=this.currentTime+1800&&(this.G=Math.max(this.G+1800,this.currentTime+3600),dw(this.mediaSource,this.G)):this.mediaSource.isView||(a=Math.max(this.audioTrack.getDuration(),
this.videoTrack.getDuration()),(!isFinite(this.G)||this.G!==a)&&0<a&&(dw(this.mediaSource,a),this.G=a))}if(!this.ya())if(Bw(this.i)&&this.i.isFailed())PJ(this,!0,"manifest.net.retryexhausted",{rc:this.i.T.toString()});else if(!this.i.u||!eJ(this.videoTrack)&&!eJ(this.audioTrack)||(this.videoTrack.C||this.audioTrack.C)&&this.policy.Pa?a=!1:(NJ(this),this.U("seekplayerrequired",Infinity),a=!0),!a&&(QJ(this),PI(this.videoTrack),!this.ya()&&(PI(this.audioTrack),!this.ya()))){this.i.isManifestless&&(fJ(this.videoTrack),
fJ(this.audioTrack),CH(this.B),(a=this.videoTrack.De())&&a.l&&(a=a.l.C&&!this.policy.qh,this.Hb(a===this.policy.B.Ud?"strm":"strmbug","strm."+(a?"1":"0")+";sfmp4."+(this.policy.B.Ud?"1":"0")+";dfs."+(this.policy.qh?"1":"0"),!0)));if(this.mediaSource)ZJ(this);else if(this.policy.i){(a=this.videoTrack.De())&&this.videoTrack.Ff(a);var b=this.audioTrack.De();b&&this.audioTrack.Ff(b);UI(this.videoTrack)&&UI(this.audioTrack)?this.K():(a||b)&&g.Ih(this.N)}KJ(this);GJ(this,this.videoTrack,this.videoTrack.i,
!1);GJ(this,this.audioTrack,this.audioTrack.i,!1);a=this.audioTrack.i.B;b=this.videoTrack.i.B;if(a||b){var c="net.retryexhausted";if("fmt.unparseable"===a||"fmt.unparseable"===b)c="fmt.unparseable";PJ(this,!0,c,{metadata:"1",video:this.videoTrack.i.B||"",audio:this.audioTrack.i.B||""})}else{a=this.videoTrack;var d=this.audioTrack;if((!this.mediaSource||cw(this.mediaSource)&&!this.policy.Ua)&&!this.B.i&&bJ(a)&&a.i.pd()&&this.l.N)a:{if(b=this.currentTime,c=this.D,d=qH(c,a.i.info.l,d.i.info.l,0),c=Cx(c.schedule)+
d/Fx(c.schedule),b+=Math.max(c,c+10-d/a.i.info.l),this.K(),a.u.length){if(a.u[0].info.i[0].startTime<=b)break a;vH(a)}c=a.B;for(d=c.l.length-1;0<=d;d--)c.l[d].info.startTime>b&&c.l.pop();a.u.length?a.l=g.jb(g.jb(a.u).info.i):a.B.l.length?a.l=mI(a.B).info:a.l=MI(a);a.l&&b<a.l.startTime&&(a.W=0,a.i.pd()?a.l=a.i.Ii(b,!0).i[0]:a.l=null)}VJ(this,this.videoTrack,this.audioTrack);VJ(this,this.audioTrack,this.videoTrack);this.policy.zl&&this.Da&&!this.isSuspended&&Jx(this.schedule)&&($ha(this,this.Da),this.Da=
"");this.C&&(a=this.C,a.B?(b=a.D+a.policy.cg,a.u||(b=Math.min(b,a.startTimeSecs+a.policy.Xb)),a=Math.max(0,1E3*b-g.ab())):a=NaN,isNaN(a)||g.Ih(this.ub,a));g.Ih(this.Ya)}}};
g.k.YB=function(a){if(this.policy.Mc&&this.mediaSource){var b=a===this.mediaSource.i,c=a.Kp();c&&(!c.Va||c.Dc)&&this.Hb("sbu",a.gb({a:""+ +b}))}this.gf()};
g.k.OE=function(a){if(this.mediaSource){var b=MI(a===this.mediaSource.i?this.audioTrack:this.videoTrack);if(a=a.zt())for(var c=0;c<a.length;c++)this.Hb("appendedbuffer",g.Je(a[c],3));a=void 0;b&&(a=zu(b));b=lha(this.qb,function(d){return zu(d)});
PJ(this,!0,"fmt.unplayable",Object.assign(b,a))}};
g.k.uF=function(a){PJ(this,!0,"fmt.unparseable",a)};
g.k.tE=function(a){this.U("needkeyinfo",a)};
g.k.tF=function(a){PJ(this,!1,"qoe.avsync",a)};
g.k.vF=function(a,b){b=Object.assign({isHeadless:this.policy.sj},b||{});this.U("localmediachange",new Oy(this.policy.i,a,b))};
g.k.seek=function(a){if(this.ya())return g.th();if(this.videoTrack.G||this.audioTrack.G)return this.policy.Am?sh():g.th("seeking to head");QJ(this);this.Ka=(0,g.M)();KJ(this,a);this.mediaSource&&this.mediaSource.i&&this.mediaSource.l&&(this.mediaSource.i.isLocked()||this.mediaSource.l.isLocked())&&this.U("reattachrequired");this.currentTime=this.B.seek(a);JH(this.u,a);g.Ih(this.N);return sh(this.currentTime)};
g.k.getCurrentTime=function(){return this.currentTime};
g.k.ra=function(){this.u.unsubscribe("ctmp",this.Hb,this);OJ(this);vH(this.audioTrack);vH(this.videoTrack);g.N.prototype.ra.call(this)};
g.k.K=function(){};
g.k.gb=function(){var a=MI(this.audioTrack),b=MI(this.videoTrack);a={lct:this.currentTime.toFixed(3),lsk:this.B.i,lmf:VH(this.l),lbw:Ex(this.schedule).toFixed(3),lhd:Cx(this.schedule).toFixed(3),lst:(1E9*(this.schedule.i.ze()||0)).toFixed(3),laa:a?ru(a):"",lva:b?ru(b):"",lar:this.audioTrack.l?ru(this.audioTrack.l):"",lvr:this.videoTrack.l?ru(this.videoTrack.l):"",laq:""+WI(this.audioTrack),lvq:""+WI(this.videoTrack)};this.mediaSource&&!gw(this.mediaSource)&&this.mediaSource.i&&this.mediaSource.l&&
(a.lab=Qv(this.mediaSource.i.yd()),a.lvb=Qv(this.mediaSource.l.yd()));return a};
g.k.Hb=function(a,b,c){this.U("ctmp",a,b,void 0===c?!1:c)};
var TJ=2/24;eK.prototype.qt=function(a,b,c){return this.i.qt(a,b,c)};
eK.prototype.Ht=function(a){this.i.Ht(a)};
eK.prototype.skipAd=function(a,b){this.i.skipAd(a,b)};
eK.prototype.Iu=function(a,b,c,d){this.i.Iu(a,b,c,d)};g.w(fK,g.N);g.w(gK,fK);gK.prototype.D=function(a,b){if(a&&b){var c=1*Number(ee(a,"cpi"))+1;isNaN(c)||0>=c||c<this.u?(this.B.stop(),this.l.stop(),this.u=-1,this.i={}):(c>this.u&&(this.u=c,g.$b(this.i)||(this.i={},this.B.stop(),this.l.stop())),this.i[b]=a,g.Ih(this.l))}};
gK.prototype.C=function(){for(var a=g.u(Object.keys(this.i)),b=a.next();!b.done;b=a.next()){var c=b.value;b=this.U;for(var d=this.u,e=this.i[c].match(g.Qd),f=[],h=g.u(e[6].split("&")),l=h.next();!l.done;l=h.next())l=l.value,0===l.indexOf("cpi=")?f.push("cpi="+d.toString()):0===l.indexOf("ek=")?f.push("ek="+Fd(c)):f.push(l);e[6]="?"+f.join("&");c="skd://"+e.slice(2).join("");e=2*c.length;d=new Uint8Array(e+4);d[0]=e%256;d[1]=(e-d[0])/256;for(e=0;e<c.length;++e)d[2*e+4]=c.charCodeAt(e);b.call(this,
"rotated_need_key_info_ready",new fI(d,"fairplay",!0))}this.i={}};var TQ={},gia=(TQ.DRM_TRACK_TYPE_AUDIO="AUDIO",TQ.DRM_TRACK_TYPE_SD="SD",TQ.DRM_TRACK_TYPE_HD="HD",TQ.DRM_TRACK_TYPE_UHD1="UHD1",TQ);g.w(lK,g.F);lK.prototype.K=function(){};g.w(oK,g.N);g.k=oK.prototype;g.k.error=function(a,b,c,d){this.ya()||(this.U("licenseerror",a,b,c,d),"drm.provision"===a&&(a=(Date.now()-this.G)/1E3,this.G=NaN,this.U("ctmp","provf",""+a.toFixed(3))));b&&this.dispose()};
g.k.shouldRetry=function(a,b){return this.ma&&this.I?!1:!a&&this.requestNumber===b.requestNumber};
g.k.ra=function(){g.N.prototype.ra.call(this)};
g.k.gb=function(){var a={requestedKeyIds:this.xa,cryptoPeriodIndex:this.cryptoPeriodIndex};this.B&&(a.keyStatuses=this.i);return a};
g.k.Md=function(){var a=this.D.join();if(uK(this)){var b=[],c;for(c in this.i)"usable"!==this.i[c].status&&b.push(this.i[c].type);a+="/UKS."+b}return a+="/"+this.cryptoPeriodIndex};
g.k.K=function(){};
var UQ={},ria=(UQ.widevine="DRM_SYSTEM_WIDEVINE",UQ.fairplay="DRM_SYSTEM_FAIRPLAY",UQ.playready="DRM_SYSTEM_PLAYREADY",UQ);g.w(BK,g.F);g.k=BK.prototype;g.k.ZB=function(a){if(this.C){var b=a.messageType||"license-request";this.C(new Uint8Array(a.message),b)}};
g.k.aC=function(){this.G&&this.G(this.i.keyStatuses)};
g.k.gA=function(a){this.C&&this.C(a.message,"license-request")};
g.k.fA=function(a){if(this.u){if(this.l){var b=this.l.error.code;a=this.l.error.systemCode}else b=a.errorCode,a=a.systemCode;this.u("t.prefixedKeyError;c."+b+";sc."+a)}};
g.k.eA=function(){this.D&&this.D()};
g.k.update=function(a){var b=this;if(this.i)return this.i.update(a).then(null,ej(function(c){CK(b,"t.update",c)}));
this.l?this.l.update(a):this.element.addKey?this.element.addKey(this.I.keySystem,a,this.initData,this.sessionId):this.element.webkitAddKey&&this.element.webkitAddKey(this.I.keySystem,a,this.initData,this.sessionId);return g.Nj()};
g.k.ra=function(){this.i&&this.i.close();this.element=null;g.F.prototype.ra.call(this)};g.w(DK,g.F);g.k=DK.prototype;g.k.setServerCertificate=function(){return"widevine"===this.i.flavor&&this.i.B&&this.l.setServerCertificate?this.l.setServerCertificate(this.i.B):null};
g.k.createSession=function(a,b){var c=a.initData;if(this.i.keySystemAccess){b&&b("createsession");var d=this.l.createSession();ix(this.i)&&(c=FK(c,this.i.l));b&&b("genreq");a=d.generateRequest(a.contentType,c);var e=new BK(null,null,null,d,null);a.then(function(){b&&b("genreqsuccess")},ej(function(f){CK(e,"t.generateRequest",f)}));
return e}if(ex(this.i))return via(this,c);if(hx(this.i))return uia(this,c);this.element.generateKeyRequest?this.element.generateKeyRequest(this.i.keySystem,c):this.element.webkitGenerateKeyRequest(this.i.keySystem,c);return this.B=new BK(this.element,this.i,c,null,null)};
g.k.dC=function(a){var b=GK(this,a);b&&b.gA(a)};
g.k.cC=function(a){var b=GK(this,a);b&&b.fA(a)};
g.k.bC=function(a){var b=GK(this,a);b&&b.eA(a)};
g.k.getMetrics=function(){if(this.l&&this.l.getMetrics)try{var a=this.l.getMetrics()}catch(b){}return a};
g.k.ra=function(){g.F.prototype.ra.call(this);delete this.element};g.w(HK,g.F);
HK.prototype.init=function(){return D(this,function b(){var c=this,d,e;return A(b,function(f){if(1==f.i)return g.Rf(c.i,{position:"absolute",width:"1px",height:"1px",display:"block"}),c.i.src=c.u.C,document.body.appendChild(c.i),c.B.Y(c.i,"encrypted",c.D),d=[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}],x(f,navigator.requestMediaKeySystemAccess("com.youtube.fairplay",d),2);e=f.l;c.u.keySystemAccess=
e;c.l=new DK(c.i,c.u);g.G(c,c.l);EK(c.l);f.i=0})})};
HK.prototype.D=function(a){var b=this;if(!this.ya()){var c=new Uint8Array(a.initData);a=new fI(c,a.initDataType);var d=hK(c).replace("skd://","https://"),e={},f=this.l.createSession(a,function(){b.K()});
f&&(g.G(this,f),this.C.push(f),pK(f,function(h){AK(h,f.i,d,e,"fairplay")},function(){b.K()},function(){},function(){}))}};
HK.prototype.K=function(){};
HK.prototype.ra=function(){this.C=[];this.i&&this.i.parentNode&&this.i.parentNode.removeChild(this.i);g.F.prototype.ra.call(this)};g.w(IK,fK);IK.prototype.C=function(a){var b=(0,g.M)(),c;if(!(c=this.B)){a:{c=a.cryptoPeriodIndex;if(!isNaN(c))for(var d=g.u(this.u.values),e=d.next();!e.done;e=d.next())if(1>=Math.abs(e.value.cryptoPeriodIndex-c)){c=!0;break a}c=!1}c=!c}c?c=0:(c=a.i,c=1E3*Math.max(0,Math.random()*((isNaN(c)?120:c)-30)));this.i.push({time:b+c,info:a});g.Ih(this.l,c)};JK.prototype.get=function(a){a=KK(this,a);return-1!==a?this.values[a]:null};
JK.prototype.remove=function(a){a=KK(this,a);-1!==a&&(this.keys.splice(a,1),this.values.splice(a,1))};
JK.prototype.set=function(a,b){var c=KK(this,a);-1!==c?this.values[c]=b:(this.keys.push(a),this.values.push(b))};g.w(NK,g.N);g.k=NK.prototype;g.k.eC=function(a){MK(this,"onecpt");a.initData&&QK(this,new Uint8Array(a.initData),a.initDataType)};
g.k.AF=function(a){MK(this,"onndky");QK(this,a.initData,a.contentType)};
g.k.qx=function(a){this.B.push(a);PK(this)};
g.k.createSession=function(a){this.l.get(a.initData);this.ea=!0;var b=new oK(this.videoData,this.u,a,this.drmSessionId);this.l.set(a.initData,b);b.subscribe("ctmp",this.Nz,this);b.subscribe("hdentitled",this.Uz,this);b.subscribe("keystatuseschange",this.ww,this);b.subscribe("licenseerror",this.xw,this);b.subscribe("newlicense",this.bA,this);b.subscribe("newsession",this.dA,this);b.subscribe("sessionready",this.iA,this);b.subscribe("fairplay_next_need_key_info",this.Sz,this);lia(b,this.C)};
g.k.bA=function(a){this.ya()||(this.K(),MK(this,"onnelcswhb"),a&&!this.heartbeatParams&&(this.heartbeatParams=a,this.U("heartbeatparams",a)))};
g.k.dA=function(){this.ya()||(this.K(),MK(this,"newlcssn"),this.B.shift(),this.ea=!1,PK(this))};
g.k.iA=function(){if(ex(this.i)&&(this.K(),MK(this,"onsnrdy"),this.Ha--,0===this.Ha)){var a=this.X;a.element.msSetMediaKeys(a.u)}};
g.k.ww=function(a){this.ya()||(!this.Aa&&this.videoData.S("html5_log_drm_metrics_on_key_statuses")&&(UK(this),this.Aa=!0),this.K(),MK(this,"onksch"),SK(this,wK(a,this.ma)),this.U("keystatuseschange",a))};
g.k.Uz=function(){this.ya()||this.xa||!gx(this.i)||(this.K(),MK(this,"onhdet"),this.Ba=ZN,this.U("hdproberequired"),this.U("qualitychange"))};
g.k.Nz=function(a,b){this.ya()||this.U("ctmp",a,b)};
g.k.Sz=function(a,b){this.ya()||this.U("fairplay_next_need_key_info",a,b)};
g.k.xw=function(a,b,c,d){this.ya()||(this.videoData.S("html5_log_drm_metrics_on_error")&&UK(this),this.U("licenseerror",a,b,c,d))};
g.k.ra=function(){this.i.keySystemAccess&&this.element.setMediaKeys(null);this.element=null;this.B=[];for(var a=g.u(this.l.values),b=a.next();!b.done;b=a.next())b=b.value,b.unsubscribe("ctmp",this.Nz,this),b.unsubscribe("hdentitled",this.Uz,this),b.unsubscribe("keystatuseschange",this.ww,this),b.unsubscribe("licenseerror",this.xw,this),b.unsubscribe("newlicense",this.bA,this),b.unsubscribe("newsession",this.dA,this),b.unsubscribe("sessionready",this.iA,this),b.unsubscribe("fairplay_next_need_key_info",
this.Sz,this),b.dispose();a=this.l;a.keys=[];a.values=[];g.N.prototype.ra.call(this)};
g.k.gb=function(){for(var a={systemInfo:this.i.gb(),sessions:[]},b=g.u(this.l.values),c=b.next();!c.done;c=b.next())a.sessions.push(c.value.gb());return a};
g.k.Md=function(){return 0>=this.l.values.length?"no session":this.l.values[0].Md()+(this.D?"/KR":"")};
g.k.K=function(){};g.w(VK,g.N);
VK.prototype.handleError=function(a,b){var c=this;Aia(this,a);if(("html5.invalidstate"!==a.errorCode&&"fmt.unplayable"!==a.errorCode&&"fmt.unparseable"!==a.errorCode||!aL(this,a.errorCode,a.details))&&!Bia(this,a,b))if(bL(a)&&this.videoData.l&&this.videoData.l.l)XK(this,a.errorCode,a.details),eL(this,"highrepfallback","1",{Bv:!0}),!this.videoData.S("html5_hr_logging_killswitch")&&/^hr/.test(this.videoData.clientPlaybackNonce)&&btoa&&eL(this,"afmts",btoa(this.videoData.adaptiveFormats),{Bv:!0}),ifa(this.videoData),
this.U("highrepfallback");else if(a.i){b=this.l?this.l.l.l:null;if(bL(a)&&b&&b.isLocked())var d="FORMAT_UNAVAILABLE";else if("auth"===a.errorCode&&"429"===a.details.rc){d="TOO_MANY_REQUESTS";var e="6"}this.U("playererror",a.errorCode,d,g.pq(a.details),e)}else d=/^pp/.test(this.videoData.clientPlaybackNonce),XK(this,a.errorCode,a.details),d&&"manifest.net.connect"===a.errorCode&&(a="https://www.youtube.com/generate_204?cpn="+this.videoData.clientPlaybackNonce+"&t="+(0,g.M)(),(new hJ(a,"manifest",function(f){c.N=
!0;eL(c,"pathprobe",f)},function(f){XK(c,f.errorCode,f.details)})).send())};
VK.prototype.ra=function(){this.u=this.l=null;g.N.prototype.ra.call(this)};
VK.prototype.K=function(){};gL.prototype.setPlaybackRate=function(a){this.playbackRate=a};
gL.prototype.S=function(a){return g.P(this.i.experiments,a)};g.w(rL,g.F);rL.prototype.onError=function(a){"player.fatalexception"!==a&&(a.match(ala)?this.networkErrorCount++:this.nonNetworkErrorCount++)};
rL.prototype.send=function(){if(!(this.u||0>this.i)){tL(this);var a=PE(this.provider)-this.i,b="PLAYER_PLAYBACK_STATE_UNKNOWN",c=this.playerState.getData();this.playerState.isError()?b=c&&"auth"===c.errorCode?"PLAYER_PLAYBACK_STATE_UNKNOWN":"PLAYER_PLAYBACK_STATE_ERROR":g.S(this.playerState,2)?b="PLAYER_PLAYBACK_STATE_ENDED":g.S(this.playerState,64)?b="PLAYER_PLAYBACK_STATE_UNSTARTED":g.S(this.playerState,16)||g.S(this.playerState,32)?b="PLAYER_PLAYBACK_STATE_SEEKING":g.S(this.playerState,1)&&g.S(this.playerState,
4)?b="PLAYER_PLAYBACK_STATE_PAUSED_BUFFERING":g.S(this.playerState,1)?b="PLAYER_PLAYBACK_STATE_BUFFERING":g.S(this.playerState,4)?b="PLAYER_PLAYBACK_STATE_PAUSED":g.S(this.playerState,8)&&(b="PLAYER_PLAYBACK_STATE_PLAYING");var d=aA(this.provider.videoData);c="LIVE_STREAM_MODE_UNKNOWN";"live"===d?c="LIVE_STREAM_MODE_LIVE":"dvr"===d&&(c="LIVE_STREAM_MODE_DVR");d=uL(this.provider);var e=0>this.l?a:this.l-this.i;a=this.provider.i.xa+36E5<(0,g.M)();b={started:0<=this.l,stateAtSend:b,joinLatencySecs:e,
playTimeSecs:this.playTimeSecs,rebufferTimeSecs:this.rebufferTimeSecs,seekCount:this.seekCount,networkErrorCount:this.networkErrorCount,nonNetworkErrorCount:this.nonNetworkErrorCount,playerCanaryType:d,isAd:this.provider.videoData.isAd(),liveMode:c,hasDrm:!!g.Yz(this.provider.videoData),isGapless:this.provider.videoData.Da};!a&&this.provider.S("html5_health_to_gel")&&g.Zl("html5PlayerHealthEvent",b);this.provider.S("html5_health_to_qoe")&&(b.muted=a,this.D(g.pq(b)));this.u=!0;this.dispose()}};
rL.prototype.ra=function(){this.u||this.send();g.F.prototype.ra.call(this)};
var ala=/\bnet\b/;g.w(yL,g.F);g.k=yL.prototype;g.k.ND=function(){var a=PE(this.provider);zL(this,a)};
g.k.reportStats=function(a){a=void 0===a?NaN:a;if(!this.ya()&&(a=0<=a?a:PE(this.provider),-1<["PL","B","S"].indexOf(this.l)&&(!g.$b(this.i)||a>=this.B+30)&&(xL(this,a,"vps",[this.l]),this.B=a),!g.$b(this.i)))if(7E3===this.sequenceNumber&&g.to(Error("Sent over 7000 pings")),7E3<=this.sequenceNumber)this.i={};else{DL(this,a);var b=a,c=this.provider.l.Qn(),d=c.droppedVideoFrames||0,e=c.totalVideoFrames||0,f=d-this.Ma,h=e&&!this.Ya;if(d>c.totalVideoFrames||5E3<f)this.onError("html5.badframedropcount",
"df."+d+";tf."+c.totalVideoFrames);else(0<f||h)&&xL(this,b,"df",[f]);this.Ma=d;this.Ya=e;!g.P(this.provider.i.experiments,"disable_webgl_reporting")&&0<this.xa&&(xL(this,a,"glf",[this.xa]),this.xa=0);a={event:"streamingstats"};this.provider.videoData.u&&(a.fmt=this.provider.videoData.u.wb(),(b=this.provider.videoData.G)&&b.wb()!==a.fmt&&(a.afmt=b.wb()));a.cpn=this.provider.videoData.clientPlaybackNonce;this.adCpn&&(a.adcpn=this.adCpn);this.G&&(a.addocid=this.G);a.ei=this.provider.videoData.eventId;
a.el=xr(this.provider.videoData);a.docid=this.provider.videoData.videoId;a.content_v=hA(this.provider.videoData);a.ns=this.provider.i.C;a.fexp=this.provider.i.experiments.experimentIds.toString();a.cl=(366719603).toString();(b=this.provider.videoData.adFormat||this.adFormat)&&(a.adformat=b);(b=aA(this.provider.videoData))&&(a.live=b);Kz(this.provider.videoData)&&(a.drm=1);g.qj()&&this.provider.videoData.Aa&&(a.ctt=this.provider.videoData.Aa,a.cttype=this.provider.videoData.uf,this.provider.videoData.mdxEnvironment&&
(a.mdx_environment=this.provider.videoData.mdxEnvironment));a.seq=this.sequenceNumber++;g.gc(a,this.provider.i.deviceParams);a=g.ae("//"+this.provider.i.qe+"/api/stats/qoe",a);b=c="";d=g.u(Object.keys(this.i));for(e=d.next();!e.done;e=d.next())e=e.value,null===this.i[e]?g.to(new g.hm("Stats report key has invalid value",e)):(e="&"+e+"="+this.i[e].join(","),100<e.length?b+=e:c+=e);a+=c;d=b.replace(/ /g,"%20");f=g.jA(this.provider.videoData);e=g.P(this.provider.i.experiments,"qoe_with_networkless");
b=g.P(this.provider.i.experiments,"qoe_send_then_write");c=g.P(this.provider.i.experiments,"qoe_send_and_write");h=this.provider.S("web_player_vss_pageid_header")?this.provider.i.pageId:void 0;(f=vL(a,h,this.provider.i.sendVisitorIdHeader?this.provider.videoData.visitorData:void 0,f))?(f.method="POST",f.postBody=d,wL(a,f,{token:this.provider.videoData.Aa,Jv:this.provider.videoData.uf,mdxEnvironment:this.provider.videoData.mdxEnvironment},void 0,e,b,c&&this.W)):e?(d={method:"POST",postBody:d},c&&this.W?
Gn(a,d):b?g.Fn(a,d):g.En(a,d)):Uk(a,void 0,d);this.i={}}};
g.k.TA=function(){if(this.provider.videoData.C){var a=this.provider.videoData.C;FL(this,"drm-"+a.flavor);FL(this,"eme-"+(a.keySystemAccess?"final":ex(a)?"ms":ix(a)?"ytfp":hx(a)?"safarifp":"nonfinal"))}};
g.k.onError=function(a,b){var c=PE(this.provider);HL(this,c,a,b);DL(this,c);EL(this)};
g.k.getPlayerState=function(a){if(g.S(a,128))return"ER";if(g.S(a,512))return"SU";if(g.S(a,16)||g.S(a,32))return"S";var b=bla[wF(a)];g.my(this.provider.i)&&"B"===b&&3===this.provider.l.getVisibilityState()&&(b="SU");"B"===b&&g.S(a,4)&&(b="PB");return b};
g.k.ra=function(){g.F.prototype.ra.call(this);window.clearInterval(this.Ka)};
g.k.Ja=function(a,b,c){var d=this.i.ctmp||[],e=-1!==this.Bb.indexOf(a);e||this.Bb.push(a);if(!c||!e){/[^a-zA-Z0-9;.!_-]/.test(b)&&(b=b.replace(/[+]/g,"-").replace(/[^a-zA-Z0-9;.!_-]/g,"_"));if(!c&&!/^t[.]/.test(b)){var f=1E3*PE(this.provider);b="t."+f.toFixed()+";"+b}dla(a,b);d.push(a+":"+b);this.i.ctmp=d;EL(this);return f}};
var dla=g.Oa,VQ={},bla=(VQ[5]="N",VQ[-1]="N",VQ[3]="B",VQ[0]="EN",VQ[2]="PA",VQ[1]="PL",VQ);LL.prototype.update=function(){if(this.G){var a=this.provider.l.getCurrentTime()||0,b=PE(this.provider);if(a!==this.i||PL(this,a,b)){var c;if(!(c=a<this.i||a-this.i>b-this.lastUpdateTime+2||PL(this,a,b))){var d=this.provider.od();c=d.volume;var e=c!==this.N;d=d.muted;d!==this.I?(this.I=d,c=!0):(!e||0<=this.B||(this.N=c,this.B=b),c=b-this.B,0<=this.B&&2<c?(this.B=-1,c=!0):c=!1)}c&&(ML(this),this.l=a);this.lastUpdateTime=b;this.i=a}}};QL.prototype.send=function(a){if(!this.ma){var b=g.TL(this);b=g.ae(this.uri,b);if(this.Xa)this.Ka&&(a=g.RL(this)||{},a.method="POST",a.postParams={atr:this.Ka},this.N?this.T?g.Fn(b,a):g.En(b,a):g.Fj(b,a));else{var c=g.RL(this,a);wL(b,c,{token:this.G,Jv:this.Ma,mdxEnvironment:this.mdxEnvironment},a,this.N,this.T,this.isFinal&&this.Hc)}this.ma=!0}};
QL.prototype.l=function(a){void 0===a&&(a=NaN);return Number(a.toFixed(3)).toString()};
var WQ={},Lia=(WQ.LIVING_ROOM_APP_MODE_UNSPECIFIED=0,WQ.LIVING_ROOM_APP_MODE_MAIN=1,WQ.LIVING_ROOM_APP_MODE_KIDS=2,WQ.LIVING_ROOM_APP_MODE_MUSIC=3,WQ.LIVING_ROOM_APP_MODE_UNPLUGGED=4,WQ.LIVING_ROOM_APP_MODE_GAMING=5,WQ);g.w(g.UL,g.F);g.UL.prototype.ra=function(){g.F.prototype.ra.call(this);Aj(this.l);this.l=NaN;OL(this.i)};
g.UL.prototype.gb=function(){return g.TL(g.VL(this,"playback"))};
g.UL.prototype.Od=ba(16);gM.prototype.isEmpty=function(){return this.endTime===this.startTime};hM.prototype.S=function(a){return g.P(this.i.experiments,a)};
var jM={other:1,none:2,wifi:3,cellular:7};g.w(g.kM,g.F);g.kM.prototype.onError=function(a,b){if(this.qoe)this.qoe.onError(a,b);if(this.l)this.l.onError(a)};
g.kM.prototype.Ja=function(a,b,c){this.qoe&&this.qoe.Ja(a,b,c)};
g.kM.prototype.gb=function(){var a;if(this.provider.videoData.enableServerStitchedDai&&this.Zd)null===(a=this.u.get(this.Zd))||void 0===a?void 0:a.gb();else if(this.i)return this.i.gb();return{}};
g.kM.prototype.Od=ba(15);g.w(qM,g.F);g.k=qM.prototype;g.k.Ge=function(a){this.fh();var b=this.i;if(1<a.length&&a.length>b.i.length)b.i=b.i.concat(a),b.i.sort(b.l);else{a=g.u(a);for(var c=a.next();!c.done;c=a.next())c=c.value,!b.i.length||0<b.l(c,b.i[b.i.length-1])?b.i.push(c):Jb(b.i,c,b.l)}this.u=NaN;this.fh()};
g.k.le=function(a){1E4<a.length&&g.to(new g.hm("Over 10k cueRanges removal occurs with a sample: ",a[0]));if(!this.ya()){var b=new Set(a);this.l=this.l.filter(function(c){return!b.has(c)});
Tia(this.i,b);this.fh()}};
g.k.reset=function(){this.started=!1;this.B.stop();this.i.i=[];this.l=[];this.fh()};
g.k.eg=function(a){var b=cK(this).filter(function(c){return c.namespace===a});
this.le(b);return b};
g.k.Xs=function(a){var b=[];if(!a.length)return b;for(var c=0;c<a.length;c++){var d=a[c];d.active&&-1===this.l.indexOf(d)&&(this.l.push(d),b.push([1,d]))}return b};
g.k.jt=function(a){var b=[];if(!a.length)return b;a.sort(g.ZA);a=g.u(a);for(var c=a.next();!c.done;c=a.next())c=c.value,this.l.splice(this.l.indexOf(c),1),b.push([2,c]);return b};
g.k.fh=function(){this.C=!0;if(!this.D){for(var a=3;this.C&&a;)this.C=!1,this.D=!0,this.Zy(),this.D=!1,a--;this.G().Zb()&&(a=pM(this.i,this.u),!isNaN(a)&&0x7ffffffffffff>a&&(a=(a-this.u)/this.X(),this.B.start(a)))}};
g.k.Zy=function(){if(this.started&&!this.ya()){this.B.stop();var a=this.G();g.S(a,32)&&this.N.start();for(var b=g.S(this.G(),2)?0x8000000000000:1E3*this.T(),c=g.S(a,2),d=[],e=[],f=g.u(this.l),h=f.next();!h.done;h=f.next())h=h.value,h.active&&(c?0x8000000000000>h.end:!h.contains(b))&&e.push(h);d=d.concat(this.jt(e));f=e=null;c?(a=oM(this.i,0x7ffffffffffff),e=a.filter(function(l){return 0x8000000000000>l.end}),f=Sia(this.i)):a=this.u<=b&&uF(a)?Ria(this.i,this.u,b):oM(this.i,b);
d=d.concat(this.Xs(a));e&&(d=d.concat(this.jt(e)));f&&(d=d.concat(this.Xs(f)));this.u=b;Uia(this,d)}};
g.k.ra=function(){this.l=[];this.i.i=[];g.F.prototype.ra.call(this)};
g.AE.Zp(qM,{Ge:"crmacr",Xs:"crmncr",jt:"crmxcr",Zy:"crmis",le:"crmrcr"});g.w(uM,g.N);uM.prototype.K=function(){};g.w(DM,g.F);DM.prototype.N=function(){var a=this;if(this.B&&!this.playerState.isError()){var b=this.B,c=b.getCurrentTime(),d=8===this.playerState.state&&c>this.i,e=Vga(this.playerState),f=this.visibility.isBackground()||this.playerState.isSuspended();EM(this,this.Da,e&&!f,d,"qoe.slowseek",function(){},"timeout");
e=e&&isFinite(this.i)&&0<this.i&&Efa(b,this.i);var h=!c||10<Math.abs(c-this.i);EM(this,this.Aa,e&&h&&!f,d,"qoe.slowseek",function(){b.seekTo(a.i)},"set_cmt");
e=e&&Sv(b.ye(),this.i);var l=!this.l||!this.l.policy.Da;h=function(){b.seekTo(a.i+.001)};
EM(this,this.xa,e&&l&&!f,d,"qoe.slowseek",h,"jiggle_cmt");l=function(){return a.U("newmediaelementrequired")};
EM(this,this.ma,e&&!f,d,"qoe.slowseek",l,"new_elem");d=uF(this.playerState);e=g.vF(this.playerState);var m=d&&e&&Sv(b.ye(),c+5);EM(this,this.X,m&&!f,d&&!e,"qoe.longrebuffer",h,"jiggle_cmt");EM(this,this.W,m&&!f,d&&!e,"qoe.longrebuffer",l,"new_elem_nnr");if(this.l){var n=this.l.getCurrentTime();h=b.Xj();h=Kda(h,n);h=!this.l.B.i&&c===h;EM(this,this.Ha,d&&e&&h&&!f,d&&!e&&!h,"qoe.longrebuffer",function(){b.seekTo(n)},"seek_to_loader")}EM(this,this.ea,d&&e&&!f,d&&!e,"qoe.longrebuffer",function(){},"timeout");
f=this.playerState.isSuspended();f=this.I()&&!f;EM(this,this.T,f,!f,"qoe.start15s",function(){return a.U("releaseadsprerolllock")},"ads_preroll_timeout");
f=.5>c-this.G;f=this.videoData.isAd()&&d&&!e&&f;EM(this,this.Ba,f,!f,"ad.rebuftimeout",function(){return a.U("skipslowad")},"skip_slow_ad");
this.G=c;this.C.start()}};
DM.prototype.kc=function(a,b,c){b=this.gb(b);b.wn=c;b.wdup=this.D[a]?"1":"0";this.U("qoeerror",a,b);this.D[a]=!0};
DM.prototype.gb=function(a){a=a.gb();this.i&&(a.stt=this.i.toFixed(3));this.l&&Object.assign(a,this.l.gb());this.B&&Object.assign(a,this.B.gb());return a};
BM.prototype.reset=function(){this.i=this.l=this.u=this.startTimestamp=0;this.B=!1};
BM.prototype.gb=function(){var a={},b=(0,g.M)();this.startTimestamp&&(a.wsd=(b-this.startTimestamp).toFixed());this.l&&(a.wtd=(b-this.l).toFixed());this.i&&(a.wssd=(b-this.i).toFixed());return a};g.w(IM,g.N);g.k=IM.prototype;g.k.getCurrentTime=function(){return!isNaN(this.l)&&isFinite(this.l)?this.l:this.i&&TM(this)?this.i.getCurrentTime()+this.timestampOffset:this.C||0};
g.k.yh=function(){return this.getCurrentTime()-this.Kb()};
g.k.isAtLiveHead=function(a){if(!this.u)return!1;void 0===a&&(a=this.getCurrentTime());return yM(this.u,a)};
g.k.seekTo=function(a,b){var c=void 0===b?{}:b;b=void 0===c.gB?!1:c.gB;var d=void 0===c.hB?0:c.hB,e=void 0===c.Tn?!1:c.Tn;c=void 0===c.Kv?0:c.Kv;var f=a,h=!isFinite(f)||(this.u?yM(this.u,f):f>=JM(this))||!g.fA(this.videoData);h||this.U("ctmp","seeknotallowed",f+";"+JM(this));if(!h)return this.D&&(this.D=null,QM(this)),sh(this.getCurrentTime());this.K();if(a===this.l&&this.W)return this.K(),this.G;this.W&&KM(this);this.G||(this.G=new yE);a&&!isFinite(a)&&MM(this,!1);f=a;(PM(this)&&!(this.i&&0<this.i.df()&&
0<DB(this.i))||Rz(this.videoData)&&this.Nb()===JM(this,!1)?0:isFinite(f)||!Rz(this.videoData))&&(a=SM(this,a,e));a&&!isFinite(a)&&MM(this,!1);this.C=a;this.Ha=c;this.l=a;this.u&&(e=this.u,c=a,zM(e,c,!1),AM(e,c));this.U("seekto",a,!b);this.G&&(b?d&&this.Pa.start(d):(this.K(),this.W=!0,HM(this)));return this.G};
g.k.Nb=function(){return this.videoData?this.videoData.Nb()+this.timestampOffset:this.timestampOffset};
g.k.ra=function(){NM(this,null);this.I.dispose();g.N.prototype.ra.call(this)};
g.k.MG=function(a,b){b=void 0===b?!1:b;this.seekTo(a+this.Kb(),{Tn:b})};
g.k.gb=function(){var a={};this.B&&Object.assign(a,this.B.gb());this.i&&Object.assign(a,this.i.gb());return a};
g.k.wm=function(a){this.timestampOffset=a};
g.k.gC=function(a){this.Ka=a};
g.k.getStreamTimeOffset=function(){return Rz(this.videoData)?this.Ka:this.videoData.i?this.videoData.i.getStreamTimeOffset():0};
g.k.Kb=function(){return this.timestampOffset};
g.k.Nd=function(a){return this.videoData.i.Nd(a-this.timestampOffset)};
g.k.fC=function(a){this.N&&(this.N.i=a.audio.index)};
g.k.S=function(a){return this.T&&g.P(this.T.experiments,a)};
g.k.K=function(){};WM.prototype.isFinished=function(){return this.i};
WM.prototype.start=function(){this.started=!0};
WM.prototype.reset=function(){this.i=this.started=!1};XM.prototype.fetch=function(a,b){var c=this,d;if(null===(d=this.l)||void 0===d?0:d.B(a,b))return sh(this.l.u(a,b).catch(function(f){g.to(f)}));
if(this.i){var e=Pd(Rd(5,ge(a,"key")))||"/UNKNOWN_PATH";this.i.start(e)}return new g.oh(function(f){var h,l,m=new XMLHttpRequest;m.onerror=function(){var r,t;if(null===(r=c.l)||void 0===r?0:r.i(a,b)){var v=c.l.l(a,b);null===(t=c.i)||void 0===t?void 0:t.success();f(v)}else f(c.Yj(a,m.status,m.response))};
m.onload=function(){f(c.Yj(a,m.status,m.response))};
m.open(null!==(h=b.method)&&void 0!==h?h:"GET",a,!0);m.responseType="text";m.withCredentials=!0;if(b.headers)for(var n=g.u(Object.entries(b.headers)),p=n.next();!p.done;p=n.next()){var q=g.u(p.value);p=q.next().value;q=q.next().value;m.setRequestHeader(p,q)}m.send(null!==(l=b.body)&&void 0!==l?l:null)})};
XM.prototype.Yj=function(a,b,c){c=c.replace(")]}'","");try{var d=JSON.parse(c)}catch(e){g.to(new g.hm("JSON parsing failed after XHR fetch",a,b,c)),d={}}200===b?this.i&&this.i.success():(this.i&&this.i.failure(),g.to(new g.hm("XHR API fetch failed",a,b,c)),d=Object.assign(Object.assign({},d),{errorMetadata:{status:b}}));return d};var ZM;g.w(YM,Vl);YM.prototype.Ip=function(a,b){a=Vl.prototype.Ip.call(this,a,b);return Object.assign(Object.assign({},a),this.i)};bN.prototype.encrypt=function(a){return D(this,function c(){var d=this,e;return A(c,function(f){if(1==f.i)return x(f,rE(d.i.i,a,d.iv),2);e=f.l;return f.return(e)})})};
bN.prototype.decrypt=function(a,b){return D(this,function d(){var e=this,f;return A(d,function(h){if(1==h.i)return x(h,rE(e.i.i,a,b),2);f=h.l;return h.return(f)})})};var XQ={},kja=(XQ.f="video",XQ["1"]="video",XQ["1h"]="video",XQ.h="video",XQ.H="video",XQ["9"]="video",XQ["("]="video",XQ["9h"]="video",XQ["(h"]="video",XQ.o="audio",XQ.O="audio",XQ.a="audio",XQ.ah="audio",XQ.A="audio",XQ.m="audio",XQ.M="audio",XQ.mac3="audio",XQ.MAC3="audio",XQ.meac3="audio",XQ.MEAC3="audio",XQ.so="audio",XQ.sa="audio",XQ["8"]="unknown",XQ["*"]="unknown",XQ.w="unknown",XQ["3"]="unknown",XQ["6"]="unknown",XQ[""]="unknown",XQ);cN.prototype.decrypt=function(a){return D(this,function c(){var d=this,e,f,h,l;return A(c,function(m){switch(m.i){case 1:if(d.i.length&&!d.i[0].isEncrypted)return m.return();d.l=!0;e=new Uint8Array(16);return x(m,pja(a),2);case 2:f=m.l;case 3:if(!d.i.length||!d.i[0].isEncrypted){m.fb(4);break}h=d.i.shift();return x(m,f(h.buffer,e),5);case 5:l=m.l;for(var n=0;n<e.length;n++)if(255===e[n])e[n]=0;else{e[n]+=1;break}d.u(h.streamId,l,!0);m.fb(3);break;case 4:dN(d),d.l=!1,m.i=0}})})};g.w(fN,g.N);
fN.prototype.feed=function(a,b){var c=b.totalLength;this.K();switch(a){case 10:a=JC(new GC(b),1);this.K();c=!1;switch(a){case 5:this.U("FIRST_BYTE_RECEIVED");break;case 0:this.iv=(new jja(b)).i.iv;break;case 16:var d=new oja(b),e=d.l,f=d.formatId;this.U("STREAM_METADATA",{formatId:f,startTimeMs:e.startTimeMs,endTimeMs:e.endTimeMs,numBytes:d.i,isAudio:this.i[f].isAudio});this.K();break;case 2:break;default:c=!0}this.Ja("ombup","id.10;pt."+a+";len."+b.totalLength+(c?";ignored.1":""),!1,!0);this.l=a;
break;case 11:a=b.totalLength;this.K();c=!1;switch(this.l){case 0:qja(this,b);break;case 2:this.C=!0;this.G.tick("ormk");b=$u(b);this.queue.decrypt(b);this.K();break;default:c=!0,this.K()}this.Ja("ombup","id.11;pt."+this.l+";len."+a+(c?";ignored.1":""),!1,!0);this.l=null;break;case 20:a=new lja(b);c=a.formatId;d=a.isAudio;e=void 0!==this.i[c];this.u[a.i]=c;this.i[c]={hasEnded:!1,isAudio:d,numSlicesProcessing:0};this.Ja("ombup","id.20;len."+b.totalLength,!1,!0);this.K();e||this.U("STREAM_STARTED",
{formatId:c});break;case 21:gN(this,b,!1);break;case 12:gN(this,b,!0);break;case 22:this.Ja("ombup","id.22;len."+b.totalLength,!1,!0);b=bv(b,0);b=this.u[b]||null;this.K();b&&(a=this.i[b],a.hasEnded=!0,0===a.numSlicesProcessing&&this.U("STREAM_ENDED",{formatId:b}));break;default:this.Ja("ombup","id."+a+";len."+c+";ignored.1",!1,!0),this.K()}};
fN.prototype.K=function(){};hN.prototype.Dk=function(){var a=new MC;RC(a,1,this.name);RC(a,2,this.value);return SC(a)};iN.prototype.Dk=function(){var a=new MC;RC(a,1,this.url);for(var b=g.u(this.httpHeaders),c=b.next();!c.done;c=b.next())PC(a,2,c.value.Dk());RC(a,3,this.postBody);return SC(a)};jN.prototype.Dk=function(){var a=new MC;PC(a,2,this.Ss);PC(a,5,this.encryptedClientKey);PC(a,6,this.iv);PC(a,7,this.hmac);var b=this.serializeResponseAsJson?1:0;OC(a,80);OC(a,b);return SC(a)};kN.prototype.Dk=function(){var a=new MC;PC(a,3,this.Ts.Dk());null!=this.onesieUstreamerConfig&&PC(a,4,this.onesieUstreamerConfig);return SC(a)};mN.prototype.feed=function(a){Vu(this.i,a);nN(this)};var YQ={init:"0-1",index:"2-3",clen:"",url:"",sp:"",s:"",lmt:""},vja=[Object.assign({itag:"137",bitrate:"4000000",size:"1920x1080",fps:"30",type:'video/mp4; codecs="avc1.4d401e"'},YQ),Object.assign({itag:"248",bitrate:"2000000",fps:"30",size:"1920x1080",type:'video/webm; codecs="vp9"'},YQ),Object.assign({itag:"399",bitrate:"1000000",size:"1920x1080",fps:"60",type:'video/mp4; codecs="av01.0.08M.08"'},YQ),Object.assign({itag:"299",bitrate:"5000000",size:"1920x1080",fps:"60",type:'video/mp4; codecs="avc1.64001e"'},
YQ),Object.assign({itag:"303",bitrate:"3000000",fps:"60",size:"1920x1080",type:'video/webm; codecs="vp9"'},YQ),Object.assign({itag:"140",type:'audio/mp4; codecs="mp4a.40.2"'},YQ),Object.assign({itag:"251",audio_sample_rate:"48000",type:'audio/webm; codecs="opus"'},YQ)],ZQ={},uja=(ZQ["137"]=["136","135","134","133"],ZQ["248"]=["247","244","243","242"],ZQ["399"]=["398","397","396","395"],ZQ["299"]="298 137 136 135 134 133".split(" "),ZQ["303"]="302 248 247 244 243 242".split(" "),ZQ["140"]=[],ZQ["251"]=
[],ZQ),$Q={},Dja=($Q["133"]=22639,$Q["134"]=45778,$Q["135"]=73749,$Q["136"]=153645,$Q["137"]=332697,$Q["242"]=22702,$Q["243"]=42954,$Q["244"]=73575,$Q["247"]=139201,$Q["248"]=259369,$Q["298"]=260272,$Q["299"]=589187,$Q["302"]=295858,$Q["303"]=528496,$Q["395"]=18457,$Q["396"]=37231,$Q["397"]=65872,$Q["398"]=133087,$Q["399"]=236318,$Q);pN.prototype.fetch=function(){return D(this,function b(){var c=this,d,e,f,h,l,m,n,p,q,r,t,v,y,C,z;return A(b,function(E){switch(E.i){case 1:return d=c,c.K(),c.C.start(),c.i.tick("ogpd"),f=rja(c.playerRequest,c.u,c.videoData),va(E,2),x(E,tja(f,c.T,c.D.onesieUstreamerConfig),4);case 4:e=E.l;wa(E,3);break;case 2:return h=xa(E),c.K(),h instanceof oq?qN(c,h):(l=new oq("onesie.request",!1),qN(c,l)),E.return(c.B);case 3:return c.i.tick("osor"),m=kB(c.u),n=e.Dk(),g.Fk()&&(n=new Uint8Array(n.buffer.slice(0,
n.length))),p={method:"POST",body:n,headers:{"Content-Type":"text/plain"}},q=function(){rN(d)},r=function(){d.K();
rN(d);var O=d.xhr;if(O.zd()){var L={msg:O.zd()};L=new oq("onesie.net",!1,L)}else 400<=O.status?L=new oq("onesie.net.badstatus",!1):O.Up()?d.G||(L=new oq("onesie.response.noplayerresponse",!1)):L=new oq(204===O.status?"onesie.net.nocontent":"onesie.net.connect",!1);L?qN(d,L):d.i.tick("orf");d.Ja("ombre","ok."+ +!!L,!0,!0);d.N.D=!0},t=g.Oa,x(E,Cja(c),5);
case 5:v=E.l;y=yja(c.videoData,v);if(!y)return c.K(),C={url:"0"},z=new oq("onesie.unavailable.hotconfig",!1,C),qN(c,z),E.return(c.B);c.i.tick("ocs");c.K();c.Ja("ombrs","1",!0,!0);c.xhr=new jJ(y,q,r,t,m,p);return E.return(c.B)}})})};
pN.prototype.X=function(){this.K();qN(this,new oq("onesie.request",!1,{timeout:"1"}))};
pN.prototype.K=function(){};g.w(g.zN,g.N);g.k=g.zN.prototype;g.k.ra=function(){this.K();this.OA();this.pc.stop();window.clearInterval(this.Tb);UE(this.Bb);this.visibility.unsubscribe("visibilitystatechange",this.Bb);BN(this);CN(this);lk(this.Aa);this.Xe();this.I=null;g.tg(this.videoData);g.tg(this.D);g.ug(this.nf);this.xa=null;this.Ka=!1;this.Ya=0;g.N.prototype.ra.call(this)};
g.k.getVideoData=function(){return this.videoData};
g.k.V=function(){return this.u};
g.k.uc=function(){return this.i};
g.k.Es=function(){if(this.videoData.Vc()){var a=this.D;0<g.Q(a.i.experiments,"html5_player_min_build_cl")&&366719603<g.Q(a.i.experiments,"html5_player_min_build_cl")&&cL(a,"oldplayer");Tja(this)}else this.videoData.Wb||this.videoData.cg?this.Ba&&g.my(this.u)&&this.videoData.isLivePlayback||(this.videoData.Wb?afa(this.videoData):(a=this.C,a.qoe&&(a=a.qoe,FL(a,"protected"),a.provider.videoData.C?a.TA():a.provider.videoData.subscribe("dataloaded",a.TA,a)),Zea(this.videoData))):!this.videoData.I&&this.Mc&&
Rja(this)};
g.k.isFullscreen=function(){return this.visibility.isFullscreen()};
g.k.isBackground=function(){return this.visibility.isBackground()};
g.k.sendAbandonmentPing=function(){g.S(this.getPlayerState(),128)||(this.U("internalAbandon"),this.fv(!0),BN(this),lk(this.Aa))};
g.k.Fk=function(){lM(this.C)};
g.k.me=function(a,b,c,d,e){this.K();var f,h;g.Vb(Yka,b)?f=b:b?h=b:f="GENERIC_WITHOUT_LINK";c=(c||"")+(";a6s."+vp());(b=h)||(b=g.dC[f]||"");a={errorCode:a,errorDetail:d,errorMessage:b,Ys:f,Bi:e||"",EA:c};EN(this,"dataloaderror");this.Eb(pF(this.playerState,128,a));lk(this.Aa);CN(this);this.dj()};
g.k.jd=function(a){this.W=this.W.filter(function(b){return a!==b});
this.K();this.ma.started&&MN(this)};
g.k.Hh=function(){var a;(a=!!this.W.length)||(a=this.T.i.i[0],a=!!a&&-0x8000000000000>=a.start);return a};
g.k.Zb=function(){return this.playerState.Zb()};
g.k.getPlayerState=function(){return this.playerState};
g.k.getPlayerType=function(){return this.playerType};
g.k.getPreferredQuality=function(){if(this.I){var a=this.I;a=a.videoData.zj.compose(a.videoData.Xv);a=xq(a)}else a="auto";return a};
g.k.isGapless=function(){return!!this.i&&this.i.isView()};
g.k.Xe=function(a,b){a=void 0===a?!1:a;b=void 0===b?!1:b;this.K();if(this.i){var c=this.getCurrentTime();0<c&&(this.B.C=c);LM(this.B,null);this.D.u=null;eO(this);this.l&&(g.Ih(this.l.N),cO(this,b));this.Ha.stop();if(this.i){!this.ma.started||this.playerState.isError()||g.S(this.playerState,2)||this.Eb(qF(this.playerState,512));g.Tn(this.Ua);if(a||!this.i.isView())this.i.stopVideo(),AN(this);this.i=null}}};
g.k.playVideo=function(){return D(this,function b(){var c=this,d,e,f,h;return A(b,function(l){if(1==l.i){c.K();var m;(m=g.S(c.playerState,128))||(m=c.D,m.C?(m.C=!1,ZK(m),m=!0):m=!1);if(m)return l.return();c.i&&(m=c.C,m.l&&sL(m.l),m.qoe&&IL(m.qoe));SN(c);g.S(c.playerState,64)&&c.Eb(qF(c.playerState,8));return c.ma.isFinished()&&c.i?c.I||!c.Pa?l.fb(2):x(l,c.Pa,2):l.return()}if(!c.videoData.l)return d=c.videoData.isLivePlayback&&!g.tx(c.u.i,!0)?"html5.unsupportedlive":Kz(c.videoData)?"fmt.unplayable":
"fmt.noneavailable",g.to(Error("selectableFormats")),c.me(d,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","selectableFormats.1"),l.return();if(c.ge()&&c.videoData.l.i)return c.K(),l.return(LN(c));if(c.videoData.isLivePlayback){e=c.getCurrentTime()<c.Nb()-15;f=g.fA(c.videoData)&&g.S(c.playerState,4);h=!c.S("html5_dompaused_unpause_killswitch")&&g.S(c.playerState,1024);h||!e&&!f||(f?(c.K(),c.seekTo(Infinity),PN(c,"unpauseLiveOnly")):(c.K(),c.seekTo(c.Nb()),PN(c,"outOfWindow")));!c.isAtLiveHead(void 0,!0)&&
g.OM(c.B)&&(c.K(),c.seekTo(Infinity),PN(c,"peggedToLive"));if(m=g.S(c.playerState,256)&&c.videoData.Ba)m=c.B,m=m.W&&!isFinite(m.l);if(m)return c.Eb(sF(c.playerState,8,4)),l.return()}g.S(c.playerState,4)&&g.S(c.playerState,16)&&c.Eb(sF(c.playerState,9,4));if(wN(c))return $ja(c),l.return();lO(c);l.i=0})})};
g.k.cD=function(){var a=this.videoData;a.i.dispose();a.i=void 0;Ez(a,a.adaptiveFormats);GN(this,!0);a=new Oy(this.videoData.videoId,4,{Do:!0});this.U("localmediachange",a)};
g.k.GG=function(){this.K();eO(this);var a=this.videoData.i&&ws(this.videoData.i),b=this.i&&this.i.isView();a||b?(this.l&&(a=this.l,a.policy.Da=!1,a.mediaSource&&ZJ(a)),GN(this)):(this.Eb(qF(this.playerState,16)),wN(this),FE(this.playerState)&&this.playVideo())};
g.k.gF=function(){this.K();AN(this);CN(this);fO(this);this.playVideo()};
g.k.Hn=function(){if(!this.I)return[];var a=iL(this.X,this.I,YN(this,!0));return this.I.i.Hn(a)};
g.k.getUserPlaybackQualityPreference=function(){return this.videoData.l&&!this.videoData.l.i?xq(this.videoData.zj):jL()};
g.k.getAvailableAudioTracks=function(){return this.videoData.getAvailableAudioTracks()};
g.k.getAudioTrack=function(){return this.videoData.getAudioTrack()};
g.k.BF=function(a,b){this.cA(new fI(b,a))};
g.k.cA=function(a){this.K();this.Ma.set(a.initData,a);this.G&&(RK(this.G,a),this.S("html5_eme_loader_sync")||this.Ma.remove(a.initData))};
g.k.Xz=function(){jn&&this.Da&&this.Da.i&&this.G&&(zia(this.G,this.Da.i),this.Da=null)};
g.k.kG=function(a){this.videoData.fB=vq("auto",a,!1,"u");vN(this)};
g.k.lC=function(a){var b=this;VN(this,a.reason,a.video.info,a.audio.info);this.S("html5_probe_media_capabilities")&&this.S("html5_dynamic_av1_hybrid_threshold")&&a.video.info&&Dv(a.video.info)&&Dia(this.X,this.I).then(function(c){c&&b.l&&ZH(b.l.l,b.u)})};
g.k.pF=function(a){TN(this,a.reason,a.audio.info)};
g.k.qF=function(a){this.U("localmediachange",a)};
g.k.handleError=function(a){this.D.handleError(a,g.S(this.playerState,4)||g.S(this.playerState,512))};
g.k.pauseVideo=function(a){a=void 0===a?!1:a;if((g.S(this.playerState,64)||g.S(this.playerState,2))&&!a)if(g.S(this.playerState,8))this.Eb(sF(this.playerState,4,8));else return;var b;if(b=this.S("html5_enable_server_stitched_ad_skip")&&this.videoData.enableServerStitchedDai){var c;b=this.getCurrentTime();if(null===(c=this.l)||void 0===c)c=0;else{var d;if(d=c.X){d=c.u;var e=c.X,f=d.D.i.index.zf(b);0<=f&&d.D.i.index.Ct(f)?(mF(d,"sdai","skipad_on"+f+"_t"+b.toFixed(3)),e.skipAd(b,f),nF(d,b,b,f),d=!0):
d=!1}d?(dK(c,c.timestampOffset-100),c=!0):c=!1}c?(gja(this.B,b+100+5),b=!0):b=!1}b||(g.S(this.playerState,128)||(a?this.Eb(qF(this.playerState,256)):this.Eb(sF(this.playerState,4,8))),this.i&&this.i.pause(),g.fA(this.videoData)&&this.l&&cO(this,!1))};
g.k.stopVideo=function(){this.pauseVideo();this.l&&(cO(this,!1),NJ(this.l))};
g.k.dj=function(a){a=void 0===a?!1:a;this.i&&(this.i.stopVideo(),AN(this),CN(this),g.S(this.playerState,128)||(a?this.Eb(rF(rF(qF(this.playerState,4),8),16)):this.Eb(pF(this.playerState))),this.videoData.videoId&&this.u.I.remove(this.videoData.videoId))};
g.k.seekTo=function(a,b){b=void 0===b?{}:b;this.K("SeekTo "+a+", "+JSON.stringify(b));g.S(this.playerState,2)&&wN(this);if(this.Xa){var c=this.Xa;isFinite(a)&&a<HF(c.i)?c.isLiveNow=!1:c.isLiveNow=!0}this.B.seekTo(a,b)};
g.k.getCurrentTime=function(){return this.B.getCurrentTime()};
g.k.yh=function(){return this.B.yh()};
g.k.getPlaylistSequenceForTime=function(a){return this.videoData.getPlaylistSequenceForTime(a-this.Kb())};
g.k.Il=function(){var a=NaN;this.i&&(a=this.i.Il());return 0<=a?a:this.getCurrentTime()};
g.k.Nd=function(){if(this.videoData.i)return this.videoData.i.Nd(this.getCurrentTime()-this.Kb());if((!this.S("html5_disable_limit_ingestion_tvos")||Gk())&&this.i){var a=this.i.jp();if(a&&(a=a.getTime(),!isNaN(a)))return a/1E3+this.getCurrentTime()}return NaN};
g.k.getDuration=function(){return this.videoData.lengthSeconds?this.videoData.lengthSeconds+this.Kb():g.ON(this)?g.ON(this):0};
g.k.Qp=function(){var a=new Pia;if(this.l){var b=this.u.schedule;a.l=b.I;a.B=b.X;a.bandwidthEstimate=Fx(b);a.i="d."+Cx(b).toFixed(2)+";st."+(1E9*(b.i.ze()||0)).toFixed(2)+";bw."+b.l.ze().toFixed(0)+";abw."+b.N.ze().toFixed(0)+";v50."+zx(b.u,.5).toFixed(2)+";v92."+zx(b.u,.92).toFixed(2)+";v96."+zx(b.u,.96).toFixed(2)+";v98."+zx(b.u,.98).toFixed(2);b=this.l;if(b.mediaSource&&!gw(b.mediaSource)&&(a.Pj=XI(b.videoTrack,b.currentTime),a.u=XI(b.audioTrack,b.currentTime),b.policy.Ya)){var c=WI(b.videoTrack),
d=WI(b.audioTrack),e=Qv(b.mediaSource.l.yd(),"_",5),f=Qv(b.mediaSource.i.yd(),"_",5);a.i=(a.i||"")+(";lvq."+c+";laq."+d+";lvb."+e+";lab."+f)}a.bandwidthEstimate=rH(b.D);b.K()}else this.i&&(a.Pj=GB(this.i));a.C=this.isAtLiveHead()&&this.Zb()?uN(this):NaN;return a};
g.k.gb=function(a){var b={};if(void 0===a?0:a){Object.assign(b,this.C.gb());this.i&&(Object.assign(b,this.i.gb()),Object.assign(b,this.Qn()));this.l&&Object.assign(b,this.l.gb());this.G&&(b.drm=this.G.gb());b.state=this.playerState.state.toString(16);g.S(this.playerState,128)&&(b.debug_error=this.playerState.getData());this.Hh()&&(b.prerolls=this.W.join(","));this.videoData.qe&&(b.ismb=this.videoData.qe);"UNKNOWN"!==this.videoData.latencyClass&&(b.latency_class=this.videoData.latencyClass);this.videoData.isLowLatencyLiveStream&&
(b.lowlatency="1");this.videoData.isLivePlayback&&(this.videoData.i&&Ew(this.videoData.i)&&(b.segduration=Ew(this.videoData.i)),a=this.B,b.lat=a.N?TF(a.N.B):0,b.liveutcstart=this.videoData.liveUtcStartSeconds);b.relative_loudness=this.videoData.hg.toFixed(3);if(a=UN(this))b.optimal_format=a.Qa().qualityLabel;b.user_qual=jL()}b.debug_videoId=this.videoData.videoId;return b};
g.k.addCueRange=function(a){this.Ym([a])};
g.k.removeCueRange=function(a){this.T.le([a])};
g.k.Ym=function(a){this.T.Ge(a)};
g.k.Vu=function(a){this.T.le(a)};
g.k.ge=function(){return this.visibility.ge()};
g.k.nG=function(){EN(this)};
g.k.togglePictureInPicture=function(){this.i&&this.i.togglePictureInPicture()};
g.k.mC=function(a){this.zc.stop();var b=a.target.Me();if(this.i&&this.i.Me()&&this.i.Me()===b){pO(this,a.type);switch(a.type){case "error":var c=JB(this.i)||"";if("capability.changed"===c){LN(this);return}if(0<this.i.Kf()&&aL(this.D,c,{msg:this.i.zd()}))return;if(this.isBackground()&&4===this.i.Kf()){this.dj();NN(this,"unplayable");return}break;case "durationchange":c=this.i.getDuration();(!this.mediaSource||isFinite(c)&&0<c)&&1!==c&&this.videoData.lengthSeconds!==c&&(this.videoData.lengthSeconds=
c,EN(this));break;case "ratechange":this.l&&this.l.setPlaybackRate(this.i.getPlaybackRate());c=this.T;c.started=!0;c.fh();var d=this.C;c=this.getPlaybackRate();if(d.qoe){d=d.qoe;var e=PE(d.provider);c&&c!==d.Xa&&(xL(d,e,"rate",[c]),d.Xa=c);d.reportStats(e)}break;case "loadedmetadata":rO(this);this.U("onLoadedMetadata");jO(this);break;case "loadstart":jO(this);break;case "progress":case "suspend":this.kd();c=this.U;this.i?g.fA(this.videoData)?d=1:gA(this.videoData)?this.isAtLiveHead()||g.OM(this.B)?
d=1:(e=this.B,e.i?gA(e.videoData)?(d=HB(e.i)+e.timestampOffset-e.Nb(),e=JM(e)-e.Nb(),d=Math.max(0,Math.min(1,d/e))):d=IB(e.i):d=0):d=IB(this.i):d=0;c.call(this,"onLoadProgress",this,d);break;case "playing":if(this.S("html5_force_manifestless_seeking_state")&&Rz(this.videoData)&&this.l&&this.l.B.i){this.Ja("mflForceSeek","reason.play");return}this.N.tick("plev");hO(this);eq("plev","video_to_ad");this.Jd&&(this.Jd=!1,this.isAtLiveHead()||(this.K(),this.seekTo(Infinity),PN(this,"onPlaying")));break;
case "timeupdate":hO(this);c=this.i&&!this.i.getCurrentTime();d=this.i&&0===this.i.df();if(c&&(!this.qb||d))return;this.qb=this.qb||!!this.i.getCurrentTime();iO(this);this.kd();if(!this.i||this.i.Me()!==b)return;this.U("onVideoProgress",this,this.getCurrentTime());break;case "waiting":if(0<this.i.Xj().length&&0===this.i.ye().length&&0<this.i.getCurrentTime()&&5>this.i.getCurrentTime()&&this.l)return;break;case "resize":rO(this);this.videoData.u&&"auto"===this.videoData.u.Qa().quality&&this.U("internalvideoformatchange",
this.videoData,!1);break;case "pause":if(this.Wd&&g.S(this.playerState,8)&&!g.S(this.playerState,1024)&&0===this.getCurrentTime()&&g.nm){NN(this,"safari_autoplay_disabled");return}}if(this.i&&this.i.Me()===b){this.U("videoelementevent",a);b=this.playerState;if(!g.S(b,128)){c=this.bb;e=this.i;var f=this.u.experiments;d=b.state;e=e?e:a.target;var h=e.getCurrentTime();if(!g.S(b,64)||"ended"!==a.type&&"pause"!==a.type){var l=e.Jg()||1<h&&1.1>Math.abs(h-e.getDuration());h="ended"===a.type||"waiting"===
a.type||"timeupdate"===a.type&&!g.S(b,4)&&!rM(c,h);if("pause"===a.type&&e.Jg()||l&&h)0<e.Mp()&&e.Me()&&(d=14);else switch(a.type){case "error":JB(e)&&(d|=128);break;case "pause":g.S(b,256)?(d^=256)||(d=64):g.S(b,32)||g.S(b,2)||g.S(b,4)||(d=4,g.S(b,1)&&g.S(b,8)&&(d|=1));break;case "playing":d=(d|8)&-3077;f&&g.P(f,"html5_playing_clears_unstarted_killswitch")||(d&=-65);rM(c,e.getCurrentTime())&&(d&=-2);g.S(b,1)&&sM(c,e.getCurrentTime(),(0,g.M)(),GB(e))&&(d|=1);break;case "seeking":d|=16;g.S(b,8)&&(d|=
1);d&=-3;break;case "seeked":d&=-17;break;case "waiting":g.S(b,2)||(d|=1);sM(c,e.getCurrentTime(),(0,g.M)(),GB(e));break;case "timeupdate":f=g.S(b,16),l=g.S(b,4),(g.S(b,8)||f)&&!l&&rM(c,e.getCurrentTime())&&(d=8),sM(c,e.getCurrentTime(),(0,g.M)(),GB(e))&&(d|=1)}}c=d;d=null;c&128&&(d=a.target,(e=JB(d))?(f="GENERIC_WITHOUT_LINK",l=d.gb(),l.mediaElem="1",/AUDIO_RENDERER/.test(d.zd())&&(f="HTML5_AUDIO_RENDERER_ERROR"),d={errorCode:e,errorMessage:g.dC[f]||"",Ys:f,EA:g.pq(l)}):d=null);b=pF(b,c,d)}!g.S(this.playerState,
1)&&g.S(b,1)&&nO(this,"evt"+a.type);this.Eb(b)}}};
g.k.hG=function(){this.Ja("misstimeupdate","");gO(this)&&!g.S(this.playerState,2)&&QE(this,!0,!1)};
g.k.JE=function(a){a="available"===a.i.availability;a!==this.aq&&(this.aq=a,this.U("airplayavailabilitychange"))};
g.k.KE=function(){var a=(0,g.M)(),b=this.i.ge();this.Ja("airplay",b?"on":"off");if(!this.S("html5_ignore_inactive_airplay_killswitch")&&b||isNaN(this.Sb)||!(2E3>a-this.Sb))this.Sb=a,b!==this.ge()&&(a=this.visibility,a.i!==b&&(a.i=b,VE(a)),this.Ja("airplay","rbld_"+b),HN(this)),this.U("airplayactivechange")};
g.k.kd=function(a){var b=this;a=void 0===a?!1:a;if(this.i&&this.videoData){eja(this.B,this.Zb());var c=this.getCurrentTime();this.l&&(g.S(this.playerState,4)&&g.fA(this.videoData)||aia(this.l,c));5<c&&(this.B.C=c);var d=kk();d?lk(this.Aa):Aj(this.Aa);if((g.vF(this.playerState)||!this.i.ci())&&!g.S(this.playerState,128)){var e=function(){if(b.i&&!g.S(b.playerState,128)){b.videoData.Ya&&g.Q(b.u.experiments,"html5_log_rebuffer_events")&&pO(b,"pfx");var f=b.getCurrentTime(),h=GB(b.i),l=g.S(b.playerState,
8),m=rM(b.bb,f),n=sM(b.bb,f,(0,g.M)(),h);l&&m?b.Eb(rF(b.playerState,1)):l&&n?(l=b.getDuration(),m=b.videoData.isLivePlayback,(b.S("html5_set_ended_in_pfx_live")||!m)&&l&&1.1>Math.abs(l-f)?(b.Ja("setended","ct."+f+";bh."+h+";dur."+l+";live."+ +m),m&&b.S("html5_set_ended_in_pfx_live_cfl")||(b.i.gp()?(b.K(),b.seekTo(0)):QE(b))):(g.vF(b.playerState)||nO(b,"progress_fix"),b.Eb(qF(b.playerState,1)))):(l&&!m&&!n&&0<f&&(l=(Date.now()-b.Vd)/1E3,m=b.getDuration(),f>m-1&&b.Ja("misspg","t:"+f.toFixed(2)+";d:"+
m.toFixed(2)+";r:"+l.toFixed(2)+";bh:"+h.toFixed(2))),g.S(b.playerState,4)&&g.vF(b.playerState)&&5<GB(b.i)&&b.Eb(rF(b.playerState,1)));b.kd()}};
0===this.i.Xj().length?this.Aa=d?ik(e,100):g.yj(e,100):this.Aa=d?ik(e,500):g.yj(e,500)}this.videoData.yl=c;!a&&this.Zb()&&Zja(this);Eia(this.X,this.I,this.uc(),this.isBackground())&&vN(this);Fia(this.X,this.videoData.u)&&(this.C.onError("qoe.restart","droprate."+this.X.I),this.u.i.G=!1,HN(this));this.U("progresssync",this,a)}};
g.k.LD=function(){this.me("ad.rebuftimeout","RETRYABLE_ERROR","vps."+this.playerState.state.toString(16))};
g.k.mD=function(){g.vF(this.playerState)&&nL(this.X,this.I)&&vN(this)};
g.k.Eb=function(a){if(!tF(this.playerState,a)){this.K();var b=new g.uE(a,this.playerState);this.playerState=a;qO(this);var c=!this.Wb.length;this.Wb.push(b);var d=this.i&&this.i.Om();g.wE(b,1)&&!g.S(b.Wi,16)&&!d&&g.S(this.playerState,8)&&!g.S(this.playerState,64)&&this.l&&(d=this.l,d.K(),d.W=!0,this.i&&5<=GB(this.i)&&((d=g.Q(this.u.experiments,"html5_non_network_rebuffer_duration_ms"))?this.Je.start(d):nL(this.X,this.I)&&vN(this)));(d=g.Q(this.u.experiments,"html5_ad_timeout_ms"))&&this.videoData.isAd()&&
g.S(a,1)&&(g.S(a,8)||g.S(a,16))?this.Gc.start(d):this.Gc.stop();(0>g.vE(b,8)||g.wE(b,1024))&&this.Ha.stop();!g.wE(b,8)||this.videoData.Ba||g.S(b.state,1024)||this.Ha.start();g.S(b.state,8)&&0>g.vE(b,16)&&!g.S(b.state,32)&&!g.S(b.state,2)&&this.playVideo();g.S(b.state,2)&&gA(this.videoData)&&(a=this.getCurrentTime(),this.videoData.lengthSeconds!==a&&(this.videoData.lengthSeconds=a,EN(this)),this.kd(!0));g.wE(b,2)&&this.fv(!0);g.wE(b,128)&&this.dj();this.videoData.i&&this.videoData.isLivePlayback&&
!this.Re&&(0>g.vE(b,8)?(a=this.videoData.i,a.B&&a.B.stop()):g.wE(b,8)&&this.videoData.i.resume());a=this.B;a.I.playerState=b.state;a.S("html5_exponential_memory_for_sticky")&&(b.state.Zb()?g.Ih(a.xa):a.xa.stop());if(a.i&&8===b.Wi.state&&uF(b.state)&&g.vF(b.state)&&a.policy.u){d=a.i.getCurrentTime();var e=a.i.ye();var f=a.S("manifestless_post_live_ufph")||a.S("manifestless_post_live")?Rv(e,Math.max(d-3.5,0)):Rv(e,d-3.5);0<=f&&d>e.end(f)-1.1&&f+1<e.length&&11>e.start(f+1)-e.end(f)&&(f=e.start(f+1)+
.2,.2>Math.abs(a.Xa-f)||(a.U("ctmp","seekover","b."+Qv(e,"_")+";cmt."+d),a.Xa=f,a.seekTo(f,{Tn:!0})))}a=this.C;var h;if(g.wE(b,1024)||g.wE(b,2048)||g.wE(b,512)||g.wE(b,4))a.l&&(d=a.l,0<=d.l||(d.i=-1,d.delay.stop())),a.qoe&&(d=a.qoe,d.C||(d.u=-1));a.provider.videoData.enableServerStitchedDai&&a.Zd?null===(h=a.u.get(a.Zd))||void 0===h?void 0:eM(h,b):a.i&&eM(a.i,b);if(a.qoe){h=a.qoe;d=b.state;e=PE(h.provider);f=h.getPlayerState(b.state);if(f!==h.l){if(!(e<h.B)){if("PL"===h.l)h.playTimeSecs+=e-h.B;else if("B"===
h.l&&h.X){h.X=!1;var l=g.Q(h.provider.i.experiments,"html5_disable_last_state_change")?h.B:h.Ha;h.rebufferTimeSecs+=e-l;!h.Aa&&10<=h.rebufferTimeSecs&&180>=h.playTimeSecs&&(h.provider.l.xo(),h.i.qoealert=["1"],h.Aa=!0)}"B"!==f||"PL"!==h.l&&"PB"!==h.l||(h.X=!0);h.B=e}"PL"===h.l&&("B"===f||"S"===f)||h.provider.videoData.Ya?DL(h,e):zL(h,e);"PL"===f&&g.Ih(h.ub);xL(h,e,"vps",[f]);h.l=f;h.Ha=e;h.B=e;h.N=!0}f=d.getData();g.S(d,128)&&f&&HL(h,e,f.errorCode,f.EA);(g.S(d,2)||g.S(d,128))&&h.reportStats(e);d.Zb()&&
!h.C&&(0<=h.u&&(h.i.user_intent=[h.u.toString()]),h.C=!0);EL(h)}a.l&&(h=a.l,tL(h),h.playerState=b.state,0<=h.l&&g.wE(b,16)&&h.seekCount++,b.state.isError()&&h.send());if(c&&!this.ya())try{for(var m=g.u(this.Wb),n=m.next();!n.done;n=m.next()){var p=n.value,q=this.T;if(q.started&&(q.fh(),g.S(p.Wi,16))){b=q;var r=pM(b.i,Math.max(b.u-2E3,0));!isNaN(r)&&0x7ffffffffffff>r&&b.B.start()}this.U("statechange",p)}}finally{this.Wb.length=0}}};
g.k.xo=function(){this.videoData.isLivePlayback||this.U("connectionissue")};
g.k.Hu=function(){this.N.tick("qoes")};
g.k.kC=function(a,b,c,d){a:{var e=this.D;d=void 0===d?"LICENSE":d;c=c.substr(0,256);if("drm.keyerror"===a&&this.G&&1<this.G.l.keys.length&&96>e.G)a="drm.sessionlimitexhausted",b=!1;else if(e.videoData.S("html5_drm_fallback_to_playready_on_retry")&&"drm.keyerror"===a&&2>e.I&&(e.I++,e.U("removedrmplaybackmanager"),1<e.videoData.ld.length&&(e.K(),e.videoData.C=e.videoData.ld[1]),aL(e,a,{detail:c})))break a;if(b)if(e.videoData.u&&e.videoData.u.Qa().isHdr())dL(e,a);else{if(e.U("playererror",a,d,c),e.videoData.S("html5_exile_on_drm_fatal")&&
WK(e,{detail:c}))break a}else XK(e,a,{detail:c});"drm.sessionlimitexhausted"===a&&(eL(e,"retrydrm","s"),e.G++,e.U("reattachvideosourcerequired"))}};
g.k.kF=function(){var a=this,b=g.Q(this.u.experiments,"html5_license_constraint_delay"),c=Qk();b&&c?(b=new g.H(function(){RN(a);EN(a)},b),g.G(this,b),b.start()):(RN(this),EN(this))};
g.k.jF=function(){var a=this;jn&&(this.Da=aea(this.videoData.i))&&(this.Da.i?g.jh(function(){a.Xz()}):cia(this.l,this.Da))};
g.k.iC=function(a){this.U("heartbeatparams",a)};
g.k.jC=function(a){this.Ja("keystatuses",xK(a));var b="auto";this.videoData.u&&(b=this.videoData.u.Qa().quality);!yK(a,b,!1)||zK(a,"AUDIO")&&zK(a,"SD")?this.videoData.u&&this.videoData.u.Qa().isHdr()&&(!a.W||yK(a,b,!0))&&dL(this.D):(this.K(),this.ld?(this.K(),this.U("drmoutputrestricted")):(this.ld=!0,this.Ja("retrydrm","o"),$N(this),IN(this)))};
g.k.nF=function(){var a,b;if(!this.videoData.Ba&&this.i&&!this.isBackground()){var c="0";0<this.i.df()&&5<=GB(this.i)&&this.videoData.l&&this.videoData.l.i&&(this.Eb(qF(this.playerState,1)),nO(this,"load_soft_timeout"),this.U("playbackstalledatstart"),c="1");qO(this);if(this.S("html5_new_video_qoe_restart_info_killswitch"))c={restartmsg:c},this.Hh()&&(c.prerolls=this.W.join(",")),this.l&&Object.assign(c,this.l.gb()),this.i&&Object.assign(c,this.i.gb());else{var d=this.videoData.l;c={restartmsg:c,
mfmt:Hz(this.videoData)?"0":"1",mdrm:d&&d.videoInfos&&d.videoInfos.length&&d.videoInfos[0].Qc&&!this.G?"1":"0",mfmtinfo:this.videoData.u?"0":"1",prerolls:this.Hh()?this.W.join(","):"0"};if(this.G){d=c;var e=this.G;if(0>=e.l.values.length){var f="ns;";e.T||(f+="nr;");e=f+="ql."+e.B.length}else e=xK(e.l.values[0]);d.drmp=e}Object.assign(c,(null===(a=this.l)||void 0===a?void 0:a.gb())||{});Object.assign(c,(null===(b=this.i)||void 0===b?void 0:b.gb())||{})}this.C.onError("qoe.start15s",g.pq(c));this.U("loadsofttimeout")}};
g.k.aG=function(){g.S(this.playerState,128)||this.mediaSource&&ew(this.mediaSource)||(this.C.onError("qoe.restart",g.pq({detail:"bufferattach"})),this.Oe++,GN(this))};
g.k.fv=function(a){var b=this;a=void 0===a?!1:a;if(!this.Ka){dq("att_s","player_att")||eq("att_s","player_att");var c=new zca(this.videoData,this.S("web_player_inline_botguard"));if("c1a"in c.i&&!nq(c)&&(eq("att_wb","player_att"),2===this.Ya&&.01>Math.random()&&g.to(Error("Botguard not available after 2 attempts")),!a&&5>this.Ya)){g.Ih(this.Hc);this.Ya++;return}if("c1b"in c.i){var d=Nia(this.C);d&&Cca(c).then(function(e){e&&!b.Ka&&d?(eq("att_f","player_att"),d(e),b.Ka=!0):eq("att_e","player_att")},
function(){eq("att_e","player_att")})}else(a=Aca(c))?(eq("att_f","player_att"),Mia(this.C,a),this.Ka=!0):eq("att_e","player_att")}};
g.k.Nb=function(){return this.B.Nb()};
g.k.Kb=function(){return this.B?this.B.Kb():0};
g.k.getStreamTimeOffset=function(){return this.B?this.B.getStreamTimeOffset():0};
g.k.setPlaybackRate=function(a){var b=this.videoData.l&&this.videoData.l.videoInfos&&32<this.videoData.l.videoInfos[0].Qa().fps&&g.my(this.u);this.playbackRate!==a&&b&&(this.X.setPlaybackRate(a),$N(this));this.playbackRate=a;this.i&&this.i.setPlaybackRate(a)};
g.k.getPlaybackRate=function(){return this.playbackRate};
g.k.getPlaybackQuality=function(){var a="unknown";if(this.videoData.u&&(a=this.videoData.u.Qa().quality,"auto"===a&&this.i)){var b=g.JN(this);b&&0<b.videoHeight&&(a=vv(b.videoWidth,b.videoHeight))}return a};
g.k.isHdr=function(){return!!(this.videoData.u&&this.videoData.u.video&&this.videoData.u.video.isHdr())};
g.k.sendVideoStatsEngageEvent=function(a,b){var c=this.C;c.i?(c=g.VL(c.i,"engage"),c.I=a,c.send(b)):b&&b()};
g.k.Od=ba(14);g.k.isAtLiveHead=function(a,b){return this.videoData.isLivePlayback&&(this.Nc||(void 0===b?0:b))?this.B.isAtLiveHead(a):!1};
g.k.Ah=ba(28);g.k.Qn=function(){return this.i?this.i.kp():{}};
g.k.setLoop=function(a){this.loop=a;this.i&&this.i.setLoop(a)};
g.k.hC=function(a){var b=this.S("html5_unrewrite_timestamps");this.Ja("timestamp","enabled."+b+";t."+a.toString())};
g.k.Ja=function(a,b,c){this.C.Ja(a,b,void 0===c?!1:c)};
g.k.Fr=function(a,b){this.C.onError(a,g.pq(b))};
g.k.getPlayerSize=function(){return this.Gb.getPlayerSize()};
g.k.Ne=function(){return this.Gb.Ne()};
g.k.K=function(){};
g.k.S=function(a){return g.P(this.u.experiments,a)};
g.k.OA=function(){if(FE(this.playerState)){var a=FN.ly();a&&this.C.Ja("profile",a)}this.pc.start()};g.w(g.yO,g.F);g.yO.create=function(a,b,c){try{var d="string"===typeof a?a:"player"+g.Va(a),e=aR[d];if(e){try{e.dispose()}catch(h){g.so(h)}aR[d]=null}var f=new g.yO(a,b,c);g.vg(f,function(){aR[d]=null;f.Oc&&f.Oc()});
return aR[d]=f}catch(h){throw g.so(h),h.stack;}};
g.k=g.yO.prototype;g.k.getVisibilityState=function(a,b,c,d,e,f){return this.visibility.getVisibilityState(a,b,c,d,e,f)};
g.k.Ln=ba(5);g.k.isVideoInfoVisible=function(){return!(!this.X||!this.X.u)};
g.k.Xe=function(){if(this.B){this.Ba&&(this.events.Fc(this.Ba),this.Ba=null);g.Tn(this.xa);this.u&&this.u.Xe(!0);this.template.Xe();if(!this.S("html5_unset_src_on_remove_killswitch"))try{this.B.Lq()}catch(a){}this.B=null}};
g.k.Rh=function(a){a=this.wt(a);HO(this,a)};
g.k.cj=function(a){if(a=g.T(this,a))this.K("release presenting player, type "+a.getPlayerType()+", vid "+a.getVideoData().videoId),a!==this.l?HO(this,this.l):EO(this)};
g.k.wt=function(a){var b=g.T(this,a);b||(b=xO(this,a),FO(this,b));return b};
g.k.setIsExternalPlaylist=function(a){this.xe=R(!1,a)};
g.k.PE=function(){AO(this)||(this.K(),this.hj(5))};
g.k.EF=function(a){AO(this)||(this.K(),mP(this),FE(a.getPlayerState())&&this.playVideo())};
g.k.canPlayType=function(a){return Jv(a)};
g.k.V=function(){return this.i};
g.k.getVideoData=function(){return this.u.getVideoData()};
g.k.getVideoLoadedFraction=function(a){a=g.T(this,a);return a?mA(a.getVideoData())?1:(a=a.uc())?IB(a):0:0};
g.k.Db=function(){return this.template};
g.k.Za=function(){return this.C};
g.k.Cl=function(){return this.G};
g.k.qm=function(a){var b=g.T(this,1);b&&QE(b,a)};
g.k.od=function(){var a=this.C.Et();a.fs=this.Fa.isFullscreen();a.volume=Math.round(this.Fa.getVolume());a.muted=this.Fa.isMuted()?1:0;a.mos=a.muted;if(g.P(this.i.experiments,"html5_enable_embedded_player_visibility_signals")&&Yx(this.i)){if(this.Xb){var b=this.Xb;b=null==b.i?null:Math.round(100*b.i)/100;null!=b&&(a.inview=b)}b=this.template.getPlayerSize();if(0<b.height&&0<b.width){b=[Math.round(b.width),Math.round(b.height)];var c=yy();1<c&&b.push(c);a.size=b.join(":")}}this.u===this.l&&this.I&&
(a.clipid=this.I.postId);return a};
g.k.Ve=ba(7);g.k.setLoopVideo=function(a){this.u===this.l&&mO(this.u)!==a&&(this.u.setLoop(a),this.Fa.U("loopchange",a))};
g.k.getLoopVideo=function(){return mO(this.u)};
g.k.setLoopRange=function(a){var b=!1;!!this.I!==!!a?b=!0:this.I&&a&&(b=this.I.startTimeMs!==a.startTimeMs||this.I.endTimeMs!==a.endTimeMs||this.I.postId!==a.postId);b&&(this.l.T.eg("applooprange"),a?(b=new g.XA(a.startTimeMs,a.endTimeMs,{id:"looprange",namespace:"applooprange"}),this.l.addCueRange(b)):MO(this).clipConfig=void 0,this.I=a,this.Fa.Ga("onLoopRangeChange",a),this.u===this.l&&(this.Sq(),this.u.Fk()))};
g.k.getLoopRange=function(){return this.I};
g.k.Sq=function(){this.I&&this.u===this.l&&(YO(this,this.l.getCurrentTime())||this.SA())};
g.k.SA=function(){!this.S("html5_live_clip_init_killswitch")&&g.S(this.l.getPlayerState(),64)&&MO(this).isLivePlayback&&5E3>this.I.startTimeMs||this.l.seekTo(.001*this.I.startTimeMs)};
g.k.setPlaybackRate=function(a,b){isNaN(a)||(a=zO(this,a),this.l.getPlaybackRate()!==a&&(this.l.setPlaybackRate(a),b&&!this.i.B&&Qka(a),this.Fa.Ga("onPlaybackRateChange",a)))};
g.k.getCurrentTime=function(a,b){b=void 0===b?!0:b;if(3===this.getPresentingPlayerType())return g.OA(this.C).getCurrentTime();var c=2===a&&this.getVideoData().enableServerStitchedDai;a=c?g.T(this):g.T(this,a);if(!a)return 0;if(b){if(c&&this.D&&(b=this.D.Ha/1E3,0!==b))return b;b=KO(this,a);return ZO(this,b.getCurrentTime(),b)}c&&this.D?(b=a.getCurrentTime(),b=(c=dF(this.D,1E3*b))?b-c.Ab/1E3:b):b=a.getCurrentTime();return b};
g.k.Il=function(){var a=g.T(this,void 0);if(!a)return 0;a=KO(this,a);return ZO(this,a.Il(),a)};
g.k.getDuration=function(a,b){b=void 0===b?!0:b;var c=2===a&&this.getVideoData().enableServerStitchedDai;a=c?g.T(this):g.T(this,a);if(!a)return 0;if(b)return b=g.JO(this,a),ZO(this,b.getDuration(),b);c&&this.D?(b=a.getCurrentTime(),b=(b=dF(this.D,1E3*b))?b.durationMs/1E3:0):b=a.getDuration();return b};
g.k.Nb=function(a){a=g.T(this,a);if(!a)return 0;a=g.JO(this,a);return ZO(this,a.Nb(),a)};
g.k.Nd=function(a){var b=g.T(this,a);return b?this.Cc(b)?(b=g.JO(this,b),b.Nd()-b.getCurrentTime()+this.getCurrentTime(a)):b.Nd():0};
g.k.Os=function(){this.template.Os();var a=this.L;a.element=this.template.element;var b=a.element,c;for(c in a.l)a.l.hasOwnProperty(c)&&(b[c]=a.l[c]);(a=g.Qn(this.template.element))&&this.events.Y(this.template,a,this.hF);this.events.Y(window,"resize",this.QF)};
g.k.getDebugText=function(a){var b=this.l.gb(a);if(this.u&&this.u!==this.l){for(var c=this.u.gb(a),d=g.u(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b["ad"+e]=c[e];if(a){c=b;d={};if(e=jf("movie_player"))d.bounds=e.getBoundingClientRect(),d["class"]=e.className;e={};var f=g.lf("video-ads");f?(tP(f,e),e.html=f.outerHTML):e.missing=1;f={};var h=g.lf("videoAdUiSkipContainer"),l=g.lf("ytp-ad-skip-button-container"),m=h||l;m?(tP(m,f),f.ima=h?1:0,f.bulleit=l?1:0):f.missing=1;d=JSON.stringify({player:d,
videoAds:e,skipButton:f});c.ad_skipBtnDbgInfo=d}}a&&this.B&&(b["0sz"]=0===hf(this.B.Tk()),b.op=this.B.On("opacity"),c=this.B.Hi().y+this.B.Tk().height,b.yof=0>=c,b.dis=this.B.On("display"));(a=a?GL():null)&&(b.gpu=a);b.cgr=!0;b.debug_playbackQuality=this.Fa.getPlaybackQuality(1);b.debug_date=(new Date).toString();delete b.uga;delete b.q;return JSON.stringify(b,null,2)};
g.k.getFeedbackProductData=function(){var a={player_debug_info:this.getDebugText(!0),player_experiment_ids:this.V().experiments.experimentIds.join(", ")},b=this.hc().getData();b&&(a.player_error_code=b.errorCode,a.player_error_details=JSON.stringify(b.errorDetail));return a};
g.k.getPresentingPlayerType=function(a){var b;return 1===this.W?1:AO(this)?3:a&&(null===(b=this.D)||void 0===b?0:b.isAdPlaying(this.getCurrentTime()))?2:g.T(this).getPlayerType()};
g.k.hc=function(a){return 3===this.getPresentingPlayerType()?g.OA(this.C).JD():g.T(this,a).getPlayerState()};
g.k.getAppState=function(){return this.W};
g.k.sC=function(a){switch(a.type){case "loadedmetadata":dq("fvb",this.G.timerName)||this.G.tick("fvb");eq("fvb","video_to_ad");this.Ya.start();break;case "loadstart":dq("gv",this.G.timerName)||this.G.tick("gv");eq("gv","video_to_ad");break;case "progress":case "timeupdate":!dq("l2s",this.G.timerName)&&2<=Uv(a.target.ye())&&this.G.tick("l2s");break;case "playing":g.PG&&this.Ya.start();if(g.my(this.i))a=!1;else{var b=tB(this.Za());a="none"===this.B.On("display")||0===hf(this.B.Tk());var c=JG(this.template),
d=this.u.getVideoData(),e=g.dy(this.i)||g.fy(this.i);d=Iz(d);b=!c||b||e||d||this.i.Da;a=a&&!b}a&&(this.u.Ja("hidden","1",!0),this.getVideoData().Pa||(this.S("html5_new_elem_on_hidden")?(this.getVideoData().Pa=1,this.aA(null),this.u.playVideo()):rP(this,"hidden",!0)))}};
g.k.mF=function(a,b){this.Fa.Ga("onLoadProgress",b)};
g.k.bG=function(){this.Fa.U("playbackstalledatstart")};
g.k.pG=function(a,b){a=KO(this,a);b=ZO(this,a.getCurrentTime(),a);this.Fa.Ga("onVideoProgress",b)};
g.k.aF=function(){this.Fa.Ga("onDompaused")};
g.k.KF=function(){this.Fa.U("progresssync")};
g.k.RE=function(a){if(1===this.getPresentingPlayerType()){g.wE(a,1)&&!g.S(a.state,64)&&MO(this).isLivePlayback&&this.l.isAtLiveHead()&&1<this.Fa.getPlaybackRate()&&this.setPlaybackRate(1,!0);g.wE(a,2)&&GO(this);if(g.S(a.state,128)){var b=a.state;this.cancelPlayback(5);b=b.getData();JSON.stringify({errorData:b,debugInfo:this.getDebugText(!0)});this.Fa.Ga("onError",kQ[b.errorCode]||5);this.Fa.Ga("onDetailedError",{errorCode:b.errorCode,errorDetail:b.errorDetail,message:b.errorMessage,messageKey:b.Ys});
6048E5<(0,g.M)()-this.i.xa&&this.Fa.Ga("onReloadRequired")}b={};if(a.state.Zb()&&!g.vF(a.state)&&!dq("pbresume","ad_to_video")&&dq("_start","ad_to_video")){var c=this.getVideoData();b.clientPlaybackNonce=c.clientPlaybackNonce;c.videoId&&(b.videoId=c.videoId);g.aq(b,"ad_to_video");g.Vp("pbresume",void 0,"ad_to_video")}this.Fa.U("applicationplayerstatechange",a)}};
g.k.jA=function(a){3!==this.getPresentingPlayerType()&&this.Fa.U("presentingplayerstatechange",a)};
g.k.Ng=function(a){IO(this,wF(a.state));g.S(a.state,1024)&&this.Fa.isMutedByMutedAutoplay()&&(CA(this,{muted:!1,volume:this.cf.volume},!1),WO(this,!1))};
g.k.HF=function(a){a.state.Zb()&&!g.vF(a.state)&&(sB(this.C),g.Tn(this.Tb))};
g.k.NE=function(a,b,c){"newdata"===a&&bP(this);b=c.clipConfig;"dataloaded"===a&&b&&null!=b.startTimeMs&&null!=b.endTimeMs&&this.setLoopRange({startTimeMs:Math.floor(Number(b.startTimeMs)),endTimeMs:Math.floor(Number(b.endTimeMs)),postId:b.postId})};
g.k.nC=function(){this.Fa.Ga("onPlaybackAudioChange",this.Fa.getAudioTrack().i.name)};
g.k.tC=function(a){var b=this.u.getVideoData();a===b&&this.Fa.Ga("onPlaybackQualityChange",a.u.Qa().quality)};
g.k.Rd=function(a,b,c){this.K("on video data change "+a+", player type "+b.getPlayerType()+", vid "+c.videoId);b===this.l&&(this.i.Sb=c.oauthToken);if(this.i.l&&this.T){if(c.qj&&lA(c)){var d=c.qj;c.qj=null}else d=null;d&&this.T.i(d)}this.getVideoData().enableServerStitchedDai&&!this.D&&(this.D=new g.ZE(this.Fa,this.i,this.l));if("newdata"===a)this.K(),xB(this.C,2),this.Fa.U("videoplayerreset",b);else{if(!this.B)return;if("dataloaded"===a)if(this.u===this.l)if(jy(c.B,c.Xw),this.K(),this.l.getPlayerState().isError())this.K();
else{d=AO(this);var e=MO(this);e.Mt?this.Uc("html5.nopurchaseflow","PURCHASE_NOT_FOUND"):(e.Vc(),d&&this.hj(6),LO(this),d||(d=yB(this.C))&&!d.created&&qB(this.C)&&d.create())}else LO(this);1===b.getPlayerType()&&(this.i.Ka&&sP(this),this.getVideoData().isLivePlayback&&!this.i.Wg&&this.Uc("html5.unsupportedlive","DEVICE_FALLBACK"),c.Vc()&&(c.Jd||c.Zr||c.tj||c.D.focEnabled||c.D.rmktEnabled||this.getVideoData().Gm)&&(d=this.getVideoData(),eP(this,"part2viewed",1,0x8000000000000),eP(this,"engagedview",
Math.max(1,1E3*d.bb),0x8000000000000),d.isLivePlayback||(d=1E3*d.lengthSeconds,eP(this,"videoplaytime25",.25*d,d),eP(this,"videoplaytime50",.5*d,d),eP(this,"videoplaytime75",.75*d,d),eP(this,"videoplaytime100",d,0x8000000000000),eP(this,"conversionview",d,0x8000000000000))));this.Fa.U("videodatachange",a,c,b.getPlayerType())}this.Fa.Ga("onVideoDataChange",{type:a,playertype:b.getPlayerType()});this.Sq();if(b=c.Jo){if(a=this.Qi,c=c.clientPlaybackNonce,a.clientPlaybackNonce!==c){a.clientPlaybackNonce=
c;c=b;b=g.SG();var f=void 0===f?{}:f;Object.values(Oka).includes(c)||(g.to(new g.hm("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||b.i.push({rootVe:c,key:f.key||""});b.B=[];b.C=[];f.Ux?bha(b,c,f):UG(b,c,f);XG(a)}}else XG(this.Qi)};
g.k.xp=function(){OO(this,null);this.Fa.Ga("onPlaylistUpdate")};
g.k.Mz=function(a){var b=a.getId(),c=MO(this);if("part2viewed"===b)c.fx&&g.Tk(c.fx),c.Zr&&uP(this,c.Zr),c.tj&&vP(this,c.tj);else if("conversionview"===b){var d=this.l.C;d.i&&bM(d.i)}else"engagedview"===b&&g.Tk(c.Jd);if(c.gx){d=c.gx;var e={label:a.getId()};if(g.P(this.i.experiments,"send_pyv_ad_mt_and_abandon_pings")){var f=1E3*this.getCurrentTime();e.ad_mt=Math.round(Math.max(0,f)).toString()}d=g.nj(d,e);g.Tk(d)}switch(b){case "videoplaytime25":c.ax&&uP(this,c.ax);c.xs&&vP(this,c.xs);c.ix&&g.Tk(c.ix);
break;case "videoplaytime50":c.dx&&uP(this,c.dx);c.Cs&&vP(this,c.Cs);c.jx&&g.Tk(c.jx);break;case "videoplaytime75":c.ex&&uP(this,c.ex);c.Ns&&vP(this,c.Ns);c.py&&g.Tk(c.py);break;case "videoplaytime100":c.Zw&&uP(this,c.Zw),c.ds&&vP(this,c.ds),c.hx&&g.Tk(c.hx)}(b=this.getVideoData().Gm)&&fP(b,a.getId())&&fP(b,a.getId()+"gaia");this.l.removeCueRange(a)};
g.k.hj=function(a){a!==this.W&&(this.K(),2===a&&1===this.getPresentingPlayerType()&&(IO(this,-1),IO(this,5)),this.W=a,this.Fa.U("appstatechange",a))};
g.k.Uc=function(a,b,c,d){this.l.me(a,b,c,d)};
g.k.isAtLiveHead=function(a,b){b=void 0===b?!1:b;var c=g.T(this,a);if(!c)return!1;a=g.JO(this,c);c=KO(this,c);return a!==c?a.isAtLiveHead(ZO(this,c.getCurrentTime(),c),!0):a.isAtLiveHead(void 0,b)};
g.k.Ah=ba(27);g.k.seekTo=function(a,b,c,d){b=!1!==b;if(d=g.T(this,d))2===this.W&&SO(this),this.Cc(d)?this.D?this.D.seekTo(a,b,c):this.ea.seekTo(a,b,c):d.seekTo(a,{gB:!b,hB:c})};
g.k.seekBy=function(a,b,c,d){this.seekTo(this.getCurrentTime()+a,b,c,d)};
g.k.rC=function(){this.Fa.Ga("SEEK_COMPLETE")};
g.k.XF=function(a,b){var c=a.getVideoData();if(1===this.W||2===this.W)c.startSeconds=b;2===this.W?this.S("embeds_enable_preloadvideobyplayervars_startseconds_fix")&&g.S(a.getPlayerState(),512)||SO(this):this.Fa.Ga("SEEK_TO",b)};
g.k.HE=function(){this.Fa.U("airplayactivechange")};
g.k.IE=function(){this.Fa.U("airplayavailabilitychange")};
g.k.WE=function(){this.Fa.U("beginseeking")};
g.k.fF=function(){this.Fa.U("endseeking")};
g.k.getStoryboardFormat=function(a){return(a=g.T(this,a))?g.JO(this,a).getVideoData().getStoryboardFormat():null};
g.k.Ji=function(a){return(a=g.T(this,a))?g.JO(this,a).getVideoData().Ji():null};
g.k.Cc=function(a){if(a=a||this.u){a=a.getVideoData();if(this.D)a=a===this.D.i.getVideoData();else a:{var b=this.ea;if(a===b.l.getVideoData()&&b.i.length)a=!0;else{b=g.u(b.i);for(var c=b.next();!c.done;c=b.next())if(a.Lb===c.value.Lb){a=!0;break a}a=!1}}if(a)return!0}return!1};
g.k.Zm=ba(20);g.k.Zi=ba(22);g.k.Yo=ba(25);g.k.enqueueVideoByPlayerVars=function(a,b,c,d){c=void 0===c?Infinity:c;d=void 0===d?"":d;this.Cc();a=new g.rz(this.i,a);d&&(a.Lb=d);!g.P(this.i.experiments,"html5_report_dai_ad_playback_killswitch")&&2===b&&this.l&&mM(this.l.C,a.clientPlaybackNonce,a.zc||"",a.breakType||0);qka(this,a,b,c)};
g.k.Dp=function(a,b,c){var d=this;c=void 0===c?0:c;var e=g.T(this);e&&(g.JO(this,e).Re=!0);Oga(this.Aa,a,b,c).then(function(){d.Fa.Ga("onQueuedVideoLoaded")},function(){})};
g.k.Sl=function(){return this.Aa.Sl()};
g.k.clearQueue=function(){this.K();this.Aa.clearQueue()};
g.k.loadVideoByPlayerVars=function(a,b,c,d,e){var f,h=!1,l=new g.rz(this.i,a);if(this.S("web_csi_client_defined_timer")){var m=null!==(f=l.Ha)&&void 0!==f?f:"";this.G.timerName=m}if(!this.S("web_player_load_video_context_killswitch")&&e){for(;l.Cf.length&&l.Cf[0].isExpired();)l.Cf.shift();h=l.Cf.length-1;h=0<h&&e.l(l.Cf[h])&&e.l(l.Cf[h-1]);l.Cf.push(e)}c||(a&&cB(a)?(vy(this.i)&&!this.xe&&(a.fetch=0),OO(this,a)):this.playlist&&OO(this,null),a&&this.setIsExternalPlaylist(a.external_list),vy(this.i)&&
!this.xe&&PO(this));a=this.Si(l,b,d);h&&this.Uc("player.fatalexception","GENERIC_WITH_LINK_AND_CPN",("loadvideo.1;emsg."+l.Cf.join()).replace(/[;:,]/g,"_"));return a};
g.k.preloadVideoByPlayerVars=function(a,b,c,d,e){b=void 0===b?1:b;c=void 0===c?NaN:c;e=void 0===e?"":e;d=Tx(a);d=gP(b,d,e);this.Ka.get(d)?this.K():this.u&&this.u.ea.started&&d===gP(this.u.getPlayerType(),this.u.getVideoData().videoId,this.u.getVideoData().Lb)?this.K():(a=new g.rz(this.i,a),e&&(a.Lb=e),rka(this,a,b,c))};
g.k.wp=function(a){var b=a.getPlayerType();a!==g.T(this,b)&&(1===a.getPlayerType()?(a.getVideoData().autonavState=this.l.getVideoData().autonavState,Vn(this.l,this.qb,this),b=this.l.getPlaybackRate(),this.l.dispose(),this.l=a,this.l.setPlaybackRate(b),Un(a,this.qb,this),bP(this)):(b=g.T(this,b))&&b.dispose(),this.u.getPlayerType()===a.getPlayerType()?HO(this,a):FO(this,a))};
g.k.setMinimized=function(a){this.visibility.setMinimized(a);a=this.C;a=a.L.V().showMiniplayerUiWhenMinimized?a.lc.get("miniplayer"):void 0;a&&(this.Pe()?a.load():a.unload());this.Fa.U("minimized")};
g.k.setInline=function(a){this.visibility.setInline(a)};
g.k.setInlinePreview=function(a){this.visibility.setInline(a);a=this.C;a=a.L.V().showInlinePreviewUi?a.lc.get("inline_preview"):void 0;a&&(this.isInline()?a.load():a.unload())};
g.k.pm=function(a){var b=this.i.Mc&&g.P(this.i.experiments,"html5_block_pip_with_events")||g.P(this.i.experiments,"html5_block_pip_non_mse")&&"undefined"===typeof MediaSource;a&&b&&this.getVideoData()&&!this.getVideoData().backgroundable?this.Bb?this.Bb.start():this.Dx():this.visibility.pm(a)};
g.k.Dx=function(){var a,b=null===(a=this.B)||void 0===a?void 0:a.wd();b&&Pn(b)};
g.k.setImmersivePreview=function(a){this.visibility.setImmersivePreview(a)};
g.k.WF=function(){"picture-in-picture"===this.B.wd().webkitPresentationMode?this.pm(!0):this.pm(!1)};
g.k.togglePictureInPicture=function(){var a=g.T(this);a&&a.togglePictureInPicture()};
g.k.Si=function(a,b,c){var d=this;this.K();dq("_start",this.G.timerName)||(ufa(this.G),this.G.info("srt",0));var e=XO(this,b||this.u.getPlayerType(),a,!1);if(!e){e=g.T(this,b);if(!e)return!1;this.Ya.stop();this.cancelPlayback(4,b);uA(e,a,function(){return d.od()},c)}e===this.l&&(this.i.Sb=a.oauthToken);
if(!KN(e))return!1;this.Xa&&(this.Xa=e.D.B=!1);if(e===this.l)return this.hj(1),SO(this);SN(e);return!0};
g.k.cueVideoByPlayerVars=function(a,b){var c=this;if(a&&cB(a))this.Da=!0,OO(this,a),(a=this.playlist.Qa())&&a.isValid()?iP(this,a,b):fB(this.playlist,function(){RO(c)});
else{b||(b=this.getPresentingPlayerType());1===b&&this.xp();var d=new g.rz(this.i,a);Yx(this.i)&&g.P(this.i.experiments,"embeds_enable_iframe_apis_through_oneplatform")?hB(d,a?a:{}).then(function(e){iP(c,e,b)}):iP(this,d,b)}};
g.k.ep=function(a,b,c,d,e,f){if(!a&&!c)throw Error("Playback source is invalid");if($x(this.i)||g.By(this.i))return b=b||{},b.lact=g.zk(),b.vis=this.Fa.getVisibilityState(),this.Fa.Ga("onPlayVideo",{videoId:a,watchEndpoint:f,sessionData:b,listId:c}),!1;b=this.G;b.i&&(e=b.i,e.i={},e.un={});b.l=!1;this.G.reset();a={video_id:a};d&&(a.autoplay="1");d&&(a.autonav="1");c?(a.list=c,this.loadPlaylist(a)):this.loadVideoByPlayerVars(a,1);return!0};
g.k.cuePlaylist=function(a,b,c,d){this.Da=!0;jP(this,a,b,c,d)};
g.k.loadPlaylist=function(a,b,c,d){this.Da=!1;jP(this,a,b,c,d)};
g.k.Gn=function(){if(this.Fa.isMutedByMutedAutoplay())return!1;if(3===this.getPresentingPlayerType())return!0;vy(this.i)&&!this.xe&&PO(this);return!(!this.playlist||!this.playlist.hasNext())};
g.k.Bl=ba(3);
g.k.nextVideo=function(a,b){var c=this,d=this.l.getVideoData().suggestions;g.RA(this.Fa)&&d?(a=d.map(function(e){return g.CC(c.i,e)})[0],d=b?a.Us:a.ov,this.ep(a.Qa().videoId,d,a.getPlaylistId(),b,void 0,a.wx||void 0)):this.xe?this.Fa.Ga("onPlaylistNext"):3===this.getPresentingPlayerType()?g.OA(this.C).nextVideo():this.playlist&&(vy(this.i)&&!this.Fa.isFullscreen()?dP(this,"yt.www.watch.lists.next"):(this.playlist.hasNext(a)&&dB(this.playlist,wfa(this.playlist)),this.playlist.loaded?(a=b&&g.P(this.i.experiments,
"html5_player_autonav_logging"),this.Si(this.playlist.Qa(void 0,b,a),1)):this.Da=!1))};
g.k.previousVideo=function(a){if(this.xe)this.Fa.Ga("onPlaylistPrevious");else if(3===this.getPresentingPlayerType())g.OA(this.C).gU();else if(this.playlist)if(vy(this.i)&&!this.Fa.isFullscreen())dP(this,"yt.www.watch.lists.prev");else{var b=this.playlist;if(b.loop||a||0<=b.index-1)a=this.playlist,b=a.index-1,dB(this.playlist,0>b?a.length-1:b);this.playlist.loaded?this.Si(this.playlist.Qa(),1):this.Da=!1}};
g.k.playVideoAt=function(a){this.xe?this.Fa.Ga("onPlaylistIndex",a):this.playlist&&(this.playlist.loaded?this.Si(this.playlist.Qa(a),1):this.Da=!1,dB(this.playlist,a))};
g.k.getPlaylist=function(){return this.playlist};
g.k.LE=function(a){this.Fa.Ga("onCueRangeEnter",a.getId())};
g.k.ME=function(a){this.Fa.Ga("onCueRangeExit",a.getId())};
g.k.Ym=function(a,b){var c=g.T(this,b);c&&(c.Ym(a),b&&this.getPresentingPlayerType()!==b||g.DO(this,"cuerangesadded",a))};
g.k.Vu=function(a,b){var c=g.T(this,b);c&&(c.Vu(a),b&&this.getPresentingPlayerType()!==b||g.DO(this,"cuerangesremoved",a))};
g.k.QE=function(){function a(){var d=g.io(b.Nc||(b.Pe()?3:0));if(d){var e={cpn:b.getVideoData().clientPlaybackNonce,csn:d};if(g.P(b.i.experiments,"web_playback_associated_ve")&&b.getVideoData().Ka){var f=g.bo(b.getVideoData().Ka);Bo(d,f,void 0);e.playbackVe=f.getAsJson()}g.P(b.i.experiments,"kevlar_playback_associated_queue")&&b.getVideoData().queueInfo&&(e.queueInfo=b.getVideoData().queueInfo);d={};b.S("web_playback_associated_log_ctt")&&b.getVideoData().Aa&&(d.md={token:b.getVideoData().Aa,videoId:b.getVideoData().videoId});
g.Zl("playbackAssociated",e,d)}}
var b=this;this.getPresentingPlayerType();this.ma||(this.ma=g.Ul(g.gq,this.Pz,this));g.VA(this.G,this.u.getVideoData(),g.lP(this));NO(this)&&this.i.B&&"embedded"===xr(MO(this))&&this.Hc&&.01>Math.random()&&g.Zl("autoplayTriggered",{intentional:this.qc});this.Hc=!1;this.Fa.Ga("onPlaybackStartExternal");g.P(this.i.experiments,"mweb_client_log_screen_associated")||a();g.Yp("player_att",["att_f","att_e"]);if(this.S("web_player_inline_botguard")){var c=this.getVideoData().botguardData;c&&(this.S("web_player_botguard_inline_skip_config_killswitch")&&
(Xi("BG_I",c.interpreterScript),Xi("BG_IU",c.interpreterUrl),Xi("BG_P",c.program)),g.Cr(this.i)?hk(function(){VO(b)}):VO(this))}this.Sq()};
g.k.pC=function(){this.Fa.U("internalAbandon");this.S("html5_ad_module_cleanup_killswitch")||aP(this)};
g.k.Pz=function(a){a=a.i;if(!isNaN(a)&&0<a&&this.l){var b=this.l.C;b.qoe&&0<a&&(b.qoe.i.aft=[a.toString()])}};
g.k.wF=function(){var a=this.B;a={volume:g.bf(Math.floor(100*a.getVolume()),0,100),muted:a.Lp()};a.muted||WO(this,!1);this.cf=g.dc(a);this.Fa.Ga("onVolumeChange",a)};
g.k.mutedAutoplay=function(){var a=this.getVideoData().videoId;a&&(this.loadVideoByPlayerVars({video_id:a,playmuted:!0}),this.Fa.Ga("onMutedAutoplayStarts"))};
g.k.hF=function(){var a=nP(this);this.Qh(a?1:0);pP(this,!!a)};
g.k.Qh=function(a){var b=!!a,c=!!this.visibility.fullscreen!==b;this.visibility.Qh(a);this.template.Qh(b);this.S("html5_media_fullscreen")&&!b&&this.B&&nP(this)===this.B.wd()&&this.B.An();this.template.resize();c&&this.G.tick("fsc");c&&(this.Fa.U("fullscreentoggled",b),a=MO(this),b={fullscreen:b,videoId:a.Mu||a.videoId,time:this.getCurrentTime()},this.Fa.getPlaylistId()&&(b.listId=this.Fa.getPlaylistId()),this.Fa.Ga("onFullscreenChange",b))};
g.k.isFullscreen=function(){return this.visibility.isFullscreen()};
g.k.QF=function(){this.u&&(0!==this.visibility.fullscreen&&1!==this.visibility.fullscreen||this.Qh(nP(this)?1:0),this.i.Mc&&this.getVideoData()&&!this.getVideoData().backgroundable&&this.B&&.33>window.outerHeight*window.outerWidth/(window.screen.width*window.screen.height)&&this.B.An())};
g.k.lF=function(a){3!==this.getPresentingPlayerType()&&this.Fa.U("liveviewshift",a)};
g.k.playVideo=function(a){this.K();if(a=g.T(this,a))2===this.W?SO(this):(null!=this.X&&this.X.u&&this.X.start(),g.S(a.getPlayerState(),2)?this.seekTo(0):a.playVideo())};
g.k.pauseVideo=function(a){(a=g.T(this,a))&&a.pauseVideo()};
g.k.stopVideo=function(){this.K();var a=this.l.getVideoData(),b=new g.rz(this.i,{video_id:a.Mu||a.videoId,oauth_token:a.oauthToken});b.ub=g.dc(a.ub);this.cancelPlayback(6);iP(this,b,1);null!=this.X&&this.X.stop()};
g.k.cancelPlayback=function(a,b){this.K();Tl(this.ma);this.ma=0;var c=g.T(this,b);if(c)if(1===this.W||2===this.W)this.K();else{c===this.u&&(this.K(),xB(this.C,a));var d=c.getVideoData();if(this.T&&lA(d)&&d.videoId&&this.S("hoffle_api")&&(a=this.T,d=d.videoId,2===Qr(d))){var e=rA(a,d);e&&e!==a.player&&lA(e.getVideoData())&&(oO(e),Vz(e.getVideoData(),!1),Tr(d,3),sA(a))}1===b&&(g.P(this.i.experiments,"html5_stop_video_in_cancel_playback")&&c.stopVideo(),aP(this));c.dj();g.DO(this,"cuerangesremoved",
cK(c.T)||[]);c.T.reset();this.Aa&&c.isGapless()&&(c.Xe(!0),DE(c,this.B))}else this.K()};
g.k.sendVideoStatsEngageEvent=function(a,b,c){(b=g.T(this,b))&&this.i.enabledEngageTypes.has(a.toString())?b.sendVideoStatsEngageEvent(a,c):c&&c()};
g.k.Od=ba(13);g.k.updatePlaylist=function(){vy(this.i)?PO(this):Yx(this.i)&&QO(this);this.Fa.Ga("onPlaylistUpdate")};
g.k.setSizeStyle=function(a,b){this.zc=b;this.Fa.U("sizestylechange",a,b);this.template.resize()};
g.k.isWidescreen=function(){return this.zc};
g.k.Pe=function(){return this.visibility.Pe()};
g.k.isInline=function(){return this.visibility.isInline()};
g.k.Rl=function(){return this.visibility.Rl()};
g.k.Ql=function(){return this.visibility.Ql()};
g.k.getAdState=function(){if(3===this.getPresentingPlayerType())return g.OA(this.C).getAdState();if(!this.Cc()){var a=yB(this.Za());if(a)return a.getAdState()}return-1};
g.k.PF=function(a){var b=this.template.getVideoContentRect();Mf(this.Gc,b)||(this.Gc=b,this.u&&RN(this.u),this.l&&this.l!==this.u&&RN(this.l),1===this.visibility.fullscreen&&this.Ha&&pP(this,!0));this.Sb&&gf(this.Sb,a)||(this.Fa.U("appresize",a),this.Sb=a)};
g.k.cq=function(){return this.Fa.cq()};
g.k.ZF=function(){2===this.getPresentingPlayerType()&&this.ea.isManifestless()&&!this.S("web_player_manifestless_ad_signature_expiration_killswitch")?LF(this.ea):(this.D&&iF(this.D),rP(this,"signature",void 0,!0))};
g.k.aA=function(){this.Xe();CO(this)};
g.k.NF=function(a){IE(a,this.B.hp())};
g.k.qC=function(a){this.T&&this.T.i(a)};
g.k.xo=function(){this.Fa.Ga("CONNECTION_ISSUE")};
g.k.oC=function(a){this.Fa.U("heartbeatparams",a)};
g.k.uc=function(){return this.B};
g.k.setBlackout=function(a){this.i.Da=a;this.u&&(this.u.Fk(),this.i.Ka&&sP(this))};
g.k.setAccountLinkState=function(a){var b=g.T(this);b&&(b.getVideoData().IA=a,b.Fk())};
g.k.updateAccountLinkingConfig=function(a){var b=g.T(this);if(b){var c=b.getVideoData();c.accountLinkingConfig&&(c.accountLinkingConfig.linked=a);this.Fa.U("videodatachange","dataupdated",c,b.getPlayerType())}};
g.k.DF=function(){var a=g.T(this);if(a){var b=!this.Fa.bq();(a.Nc=b)||a.Ha.stop();if(a.videoData.i)if(b)a.videoData.i.resume();else{var c=a.videoData.i;c.B&&c.B.stop()}g.P(a.u.experiments,"html5_suspend_loader")&&a.l&&(b?a.l.resume():cO(a,!0));g.P(a.u.experiments,"html5_fludd_suspend")&&(g.S(a.playerState,2)||b?g.S(a.playerState,512)&&b&&a.Eb(rF(a.playerState,512)):a.Eb(qF(a.playerState,512)));a=a.C;a.qoe&&(a=a.qoe,xL(a,PE(a.provider),"stream",[b?"A":"I"]))}};
g.k.oF=function(){this.Fa.Ga("onLoadedMetadata")};
g.k.eF=function(){this.Fa.Ga("onDrmOutputRestricted")};
g.k.fu=function(){this.qc=!0};
g.k.ra=function(){this.C.dispose();this.ea.dispose();this.D&&this.D.dispose();this.l.dispose();this.Xe();g.ug(Sb(this.Wb),this.playlist);Tl(this.ma);this.ma=0;g.F.prototype.ra.call(this)};
g.k.K=function(){};
g.k.S=function(a){return g.P(this.i.experiments,a)};
g.k.vv=function(){return this.Ma};
g.k.requestStorageAccess=function(a,b){document.requestStorageAccess().then(a,b)};
g.k.setScreenLayer=function(a){this.Nc=a};
g.k.seekToChapterWithAnimation=function(a){var b,c,d=null===(b=GA(this.Za()))||void 0===b?void 0:b.chrome,e=null===(c=this.getVideoData())||void 0===c?void 0:c.PC;this.S("web_player_seek_chapters_by_shortcut")&&e&&d instanceof g.tC&&a<e.length&&0<=a&&(this.getCurrentTime(),qP(this,e[a].startTime/1E3))};
g.k.cancelPendingLocalMediaById=function(a){if(this.T&&this.S("hoffle_api")){var b=this.T,c=Qr(a);1===c||0===c?a=Promise.resolve():(c=rA(b,a),c===b.player?(b.player.stopVideo(),oO(b.player)):c&&(oO(c),Vz(c.getVideoData(),!1)),a=qA(a))}else a=Promise.reject();return a};
g.k.fetchLocalMediaById=function(a){return this.T&&this.S("hoffle_api")?ofa(this.T,a):Promise.reject()};
g.k.getLocalPlayerResponse=function(a){return this.N&&this.S("woffle_orchestration")?Fga(this.N,a):this.T&&this.S("hoffle_api")?pfa(this.T,a):Promise.reject()};
g.k.getLocalMediaInfoById=function(a){return this.N&&this.S("woffle_orchestration")?this.N.getLocalMediaInfoById(a):this.T&&this.S("hoffle_api")?this.T.getLocalMediaInfoById(a):Promise.reject()};
g.k.getAllLocalMediaInfo=function(){return this.N&&this.S("woffle_orchestration")?this.N.getAllLocalMediaInfo():this.T&&this.S("hoffle_api")?this.T.getAllLocalMediaInfo():Promise.reject()};
g.k.downloadVideo=function(a){return D(this,function c(){var d=this,e;return A(c,function(f){if(1==f.i)return d.N&&d.S("woffle_orchestration")?x(f,Dga(d.N,[a]),2):f.return(Promise.reject());e=f.l;return f.return(e[0])})})};
g.k.refreshAllVideos=function(){return this.N&&this.S("woffle_orchestration")?this.N.refreshAllVideos():Promise.reject()};
g.k.deleteVideos=function(a){return this.N&&this.S("woffle_orchestration")?this.N.deleteVideos(a):Promise.reject()};
g.k.deleteAllVideos=function(){return this.N&&this.S("woffle_orchestration")?this.N.deleteAllVideos():Promise.reject()};
g.k.startOrchestration=function(){return this.N&&this.S("woffle_orchestration")?this.N.startOrchestration():Promise.reject()};
g.k.stopOrchestration=function(){return this.N&&this.S("woffle_orchestration")?this.N.stopOrchestration():Promise.reject()};
g.k.getStatsForNerds=function(){var a=this.Fa,b=g.T(this),c=a.getVideoData(),d=a.uc(),e=d.wd(),f=b.Qn(),h=b.qc,l=8*AG(h,"bandwidth")/1024,m=AG(h,"networkactivity")/1024,n=AG(h,"bufferhealth");if(b.G){var p=b.videoData.useInnertubeDrmService()?"IT/":"";p+=b.G.i.Md()+"/"+xq(YN(b));p+="/"+b.G.Md()}else p="";var q=b.getPlayerState().state.toString(16),r=d.getCurrentTime().toFixed(2),t=Qv(d.ye(),",",3),v="";c.playerResponse&&c.playerResponse.playerConfig&&c.playerResponse.playerConfig.daiConfig&&c.playerResponse.playerConfig.daiConfig.enableDai&&
(c.enableServerStitchedDai&&(v+="SS"),v+="DAI, ");if(c.fetchType){switch(c.fetchType){case "onesie":var y="o";break;case "gp":y="gp";break;default:y="gvi"}v+="vd:"+y+", "}if(y=c.Nl)v+="mb:",Object.keys(y.i).length?(y.hasDecryptedBytes()&&(v+="e"),v=Fha(y)?v+"c":Eha(y)?v+"p":v+"x",Gha(y)&&(v+="f")):v+="0",v+=", ";v+="s:"+q+" t:"+r+" b:"+t+" ";d.Om()&&(v+="S");d.ci()&&(v+="P");d.Jg()&&(v+="E");d=b.C;d=d.qoe?d.qoe.Ba:void 0;d&&(v+=" l:"+d.toFixed());d=b.getCurrentTime();q=c.Hm;d&&d>q.start&&d<q.end&&
(v+=" as");d=v;v=yy();q=tB(a.Za());q=(q?q.DT():{}).GT;r=c.l&&!c.l.i?"display:none":"";if((t=c.clientPlaybackNonce)&&16==t.length){y=0;for(var C="",z=0;10>z;z++)if(y=(y<<6)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(t.charAt(z)),4==z%5){for(var E="",O=0;6>O;O++)E="0123456789ABCDEFGHJKMNPQRSTVWXYZ".charAt(y&31)+E,y>>=5;C+=E}t=C.substr(0,4)+" "+C.substr(4,4)+" "+C.substr(8,4)}else t="";l={video_id_and_cpn:c.videoId+" / "+t,codecs:"",dims_and_frames:"",bandwidth_kbps:l.toFixed(0)+
" Kbps",buffer_health_seconds:n.toFixed(2)+" s",drm_style:p?"":"display:none",drm:p,debug_info:d,bandwidth_style:r,network_activity_style:r,network_activity_bytes:m.toFixed(0)+" KB",shader_info:q,shader_info_style:q?"":"display:none",playback_categories:""};m=e.clientWidth+"x"+e.clientHeight+(1<v?"*"+v.toFixed(2):"");n="-";f.totalVideoFrames&&(n=(f.droppedVideoFrames||0)+" dropped of "+f.totalVideoFrames);l.dims_and_frames=m+" / "+n;a=a.getVolume();f=kA(c);a=Math.round(a)+"% / "+Math.round(a*f)+"%";
f=c.hg.toFixed(1);isFinite(Number(f))&&(a+=" (content loudness "+f+"dB)");l.volume=a;l.resolution=e.videoWidth+"x"+e.videoHeight;if(a=c.u)if(e=a.video)f=e.fps,1<f&&(l.resolution+="@"+f),(f=UN(b))&&f.video&&(l.resolution+=" / "+f.video.width+"x"+f.video.height,1<f.video.fps&&(l.resolution+="@"+f.video.fps)),l.codecs=DG(a),!c.G||a.audio&&a.video?a.audio&&a.audio.itag&&(l.codecs+=" / "+a.audio.itag+"A"):l.codecs+=" / "+DG(c.G),e.l||e.primaries?(a=e.l||"unknown","smpte2084"===a?a+=" (PQ)":"arib-std-b67"===
a&&(a+=" (HLG)"),l.color=a+" / "+(e.primaries||"unknown"),l.color_style=""):l.color_style="display:none";e=c.isLivePlayback;a=c.qd;l.live_mode_style=e||a?"":"display:none";l.live_latency_style=e?"":"display:none";if(a)l.live_mode="Post-Live"+(Rz(c)?" Manifestless":"");else if(e){a=AG(h,"livelatency");l.live_latency_secs=a.toFixed(2)+"s";e=Rz(c)?"Manifestless, ":"";c.Vf&&(e+="Windowed, ");f="Uncertain";if(0<=a&&120>a)if(c.latencyClass&&"UNKNOWN"!==c.latencyClass)switch(c.latencyClass){case "NORMAL":f=
"Optimized for Normal Latency";break;case "LOW":f="Optimized for Low Latency";break;case "ULTRALOW":f="Optimized for Ultra Low Latency";break;default:f="Unknown Latency Setting"}else f=c.isLowLatencyLiveStream?"Optimized for Low Latency":"Optimized for Smooth Streaming";e+=f;(a=b.getPlaylistSequenceForTime(b.getCurrentTime()))&&(e+=", seq "+a.sequence);l.live_mode=e}b.isGapless()&&(l.playback_categories+="Gapless ");l.playback_categories_style=l.playback_categories?"":"display:none";l.bandwidth_samples=
zG(h,"bandwidth");l.network_activity_samples=zG(h,"networkactivity");l.live_latency_samples=zG(h,"livelatency");l.buffer_health_samples=zG(h,"bufferhealth");Jz(c,"web_player_release_debug")?(l.release_name="youtube.player.web_20210404_0_RC0",l.release_style=""):l.release_style="display:none";return l};
g.k.getVideoUrl=function(a,b,c,d,e){return this.I&&this.I.postId?(a=this.i.getVideoUrl(a),a=ge(a,"v"),a.replace("/watch","/clip/"+this.I.postId)):this.i.getVideoUrl(a,b,c,d,e)};
var aR={};g.Ia("yt.player.Application.create",g.yO.create,void 0);g.Ia("yt.player.Application.createAlternate",g.yO.create,void 0);var bR=no(),cR={gk:[{yz:/Unable to load player module/,weight:5},{yz:/Failed to fetch/,weight:500}]};cR.gk&&(bR.gk=bR.gk.concat(cR.gk));cR.rl&&(bR.rl=bR.rl.concat(cR.rl));var dR=g.Na("ytcsi.tick");dR&&dR("pe");})(_yt_player);
