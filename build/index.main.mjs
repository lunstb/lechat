// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 121));
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc2]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc2]);
  const ctc7 = stdlib.T_Object({
    blockers: ctc2,
    catIndex: ctc0
    });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc7, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc7]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc2, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc4, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.setWager, 'for Alice\'s interact field setWager');
  
  const v23 = stdlib.protect(ctc2, await interact.initRandomBoard(), {
    at: './index.rsh:126:63:application',
    fs: ['at ./index.rsh:124:13:application call to [unknown function] (defined at: ./index.rsh:124:17:function exp)'],
    msg: 'initRandomBoard',
    who: 'Alice'
    });
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v19, v18], [v18, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 0)]);
    const [v25] = txn1.data;
    const v28 = txn1.time;
    const v24 = txn1.from;
    
    sim_r.txns.push({
      amt: v25,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:130:15:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v25, v28]);
    sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:130:15:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v25]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:130:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v25] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 2), [ctc4, ctc0, ctc0, ctc2], [v24, v25, v28, v23], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 1), v24, v25, v28]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 1), v24, v25]);
    const [v30] = txn2.data;
    const v33 = txn2.time;
    const v29 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v32 = stdlib.addressEq(v24, v29);
    stdlib.assert(v32, {
      at: './index.rsh:132:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:133:15:after expr stmt semicolon', stdlib.UInt_max, 2), v24, v25, v30, v33]);
    sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:133:15:after expr stmt semicolon', stdlib.UInt_max, 2), v24, v25, v30]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:133:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v30] = txn2.data;
  const v33 = txn2.time;
  const v29 = txn2.from;
  ;
  const v32 = stdlib.addressEq(v24, v29);
  stdlib.assert(v32, {
    at: './index.rsh:132:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv(3, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:113:18:decimal', stdlib.UInt_max, 10)));
  if (txn3.didTimeout) {
    
    const txn4 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc2, ctc0], [v24, v25, v30, v33], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v24, v25, v30, v33]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v24, v25, v30]);
      const [] = txn4.data;
<<<<<<< HEAD
      const v370 = txn4.time;
      const v367 = txn4.from;
=======
      const v344 = txn4.time;
      const v341 = txn4.from;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
<<<<<<< HEAD
      const v369 = stdlib.addressEq(v24, v367);
      stdlib.assert(v369, {
=======
      const v343 = stdlib.addressEq(v24, v341);
      stdlib.assert(v343, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:139:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v25,
        kind: 'from',
        to: v24,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc11, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
      sim_r.view = [ctc11, []];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn4.data;
<<<<<<< HEAD
    const v370 = txn4.time;
    const v367 = txn4.from;
    ;
    const v369 = stdlib.addressEq(v24, v367);
    stdlib.assert(v369, {
=======
    const v344 = txn4.time;
    const v341 = txn4.from;
    ;
    const v343 = stdlib.addressEq(v24, v341);
    stdlib.assert(v343, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:139:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc10, await interact.informTimeout(), {
      at: './index.rsh:122:33:application',
      fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:120:32:function exp)', 'at ./index.rsh:139:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [] = txn3.data;
    const v40 = txn3.time;
    const v37 = txn3.from;
    ;
    const v44 = {
      blockers: v30,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 60)
      };
    let v43 = v44;
<<<<<<< HEAD
    let v385 = v40;
    
    while ((() => {
      const v50 = v43.catIndex;
      const v51 = stdlib.lt(v50, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v52 = stdlib.ge(v50, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v53 = v51 ? true : v52;
      const v54 = stdlib.mod(v50, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v55 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v57 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v58 = v55 ? true : v57;
      const v59 = v53 ? true : v58;
      let v125;
      if (v59) {
        v125 = true;
=======
    let v359 = v40;
    
    while ((() => {
      const v53 = v43.catIndex;
      const v54 = stdlib.lt(v53, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v55 = stdlib.ge(v53, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v56 = v54 ? true : v55;
      const v57 = stdlib.mod(v53, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v58 = stdlib.eq(v57, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v60 = stdlib.eq(v57, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v61 = v58 ? true : v60;
      const v62 = v56 ? true : v61;
      let v118;
      if (v62) {
        v118 = true;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        }
      else {
        const v78 = v62 ? false : true;
        stdlib.assert(v78, {
          at: './index.rsh:32:10:application',
<<<<<<< HEAD
          fs: ['at ./index.rsh:90:38:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:146:24:application call to "gameOver" (defined at: ./index.rsh:89:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v80 = stdlib.sub(v50, v54);
        const v81 = stdlib.div(v80, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
        const v82 = stdlib.mod(v81, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
        const v83 = stdlib.add(v82, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
        const v84 = stdlib.mod(v83, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
        const v85 = v43.blockers;
        const v87 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
        const v89 = v85[v87];
        const v92 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
        const v94 = v85[v92];
        const v95 = v89 ? v94 : false;
        const v98 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v99 = stdlib.sub(v98, v84);
        const v101 = v85[v99];
        const v102 = v95 ? v101 : false;
        const v105 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
        const v106 = stdlib.add(v105, v82);
        const v108 = v85[v106];
        const v109 = v102 ? v108 : false;
        const v112 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
        const v113 = stdlib.sub(v112, v84);
        const v115 = v85[v113];
        const v116 = v109 ? v115 : false;
        const v119 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v120 = stdlib.add(v119, v82);
        const v122 = v85[v120];
        const v123 = v116 ? v122 : false;
        v125 = v123;
        }
      const v128 = v125 ? false : true;
      
      return v128;})()) {
      const v134 = stdlib.protect(ctc0, await interact.getMove(v43), {
        at: './index.rsh:48:36:application',
        fs: ['at ./index.rsh:149:43:application call to "getValidCatMove" (defined at: ./index.rsh:45:1:function exp)', 'at ./index.rsh:148:16:application call to [unknown function] (defined at: ./index.rsh:148:20:function exp)'],
=======
          fs: ['at ./index.rsh:86:38:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:142:24:application call to "gameOver" (defined at: ./index.rsh:85:1:function exp)', 'at ./index.rsh:142:14:application call to [unknown function] (defined at: ./index.rsh:142:14:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v80 = v43.blockers;
        const v82 = stdlib.sub(v53, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
        const v84 = v80[v82];
        const v87 = stdlib.add(v53, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
        const v89 = v80[v87];
        const v90 = v84 ? v89 : false;
        const v93 = stdlib.sub(v53, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v95 = v80[v93];
        const v96 = v90 ? v95 : false;
        const v99 = stdlib.add(v53, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v101 = v80[v99];
        const v102 = v96 ? v101 : false;
        const v106 = stdlib.add(v93, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
        const v108 = v80[v106];
        const v109 = v102 ? v108 : false;
        const v113 = stdlib.add(v99, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
        const v115 = v80[v113];
        const v116 = v109 ? v115 : false;
        v118 = v116;
        }
      const v121 = v118 ? false : true;
      
      return v121;})()) {
      const v128 = stdlib.protect(ctc0, await interact.getMove(v43), {
        at: './index.rsh:44:36:application',
        fs: ['at ./index.rsh:145:43:application call to "getValidCatMove" (defined at: ./index.rsh:41:1:function exp)', 'at ./index.rsh:144:16:application call to [unknown function] (defined at: ./index.rsh:144:20:function exp)'],
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        msg: 'getMove',
        who: 'Alice'
        });
      
      
<<<<<<< HEAD
      const txn4 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:150:12:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc4, ctc7, ctc0, ctc0], [v24, v25, v37, v43, v385, v134], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:150:12:dot', stdlib.UInt_max, 5), v24, v25, v37, v43, v385]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:150:12:dot', stdlib.UInt_max, 5), v24, v25, v37, v43]);
        const [v137] = txn4.data;
        const v140 = txn4.time;
        const v136 = txn4.from;
=======
      const txn4 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:146:12:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc4, ctc7, ctc0, ctc0], [v24, v25, v37, v43, v359, v128], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:146:12:dot', stdlib.UInt_max, 5), v24, v25, v37, v43, v359]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:146:12:dot', stdlib.UInt_max, 5), v24, v25, v37, v43]);
        const [v131] = txn4.data;
        const v134 = txn4.time;
        const v130 = txn4.from;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
<<<<<<< HEAD
        const v139 = stdlib.addressEq(v24, v136);
        stdlib.assert(v139, {
          at: './index.rsh:150:12:dot',
=======
        const v133 = stdlib.addressEq(v24, v130);
        stdlib.assert(v133, {
          at: './index.rsh:146:12:dot',
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
<<<<<<< HEAD
        const v144 = v43.catIndex;
        const v145 = stdlib.lt(v144, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v146 = stdlib.ge(v144, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
        const v147 = v145 ? true : v146;
        const v148 = stdlib.mod(v144, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v149 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
        const v151 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
        const v152 = v149 ? true : v151;
        const v153 = v147 ? true : v152;
        const v156 = v153 ? false : true;
        stdlib.assert(v156, {
=======
        const v138 = v43.catIndex;
        const v139 = stdlib.lt(v138, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v140 = stdlib.ge(v138, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
        const v141 = v139 ? true : v140;
        const v142 = stdlib.mod(v138, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v143 = stdlib.eq(v142, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
        const v145 = stdlib.eq(v142, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
        const v146 = v143 ? true : v145;
        const v147 = v141 ? true : v146;
        const v150 = v147 ? false : true;
        stdlib.assert(v150, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
          at: './index.rsh:32:10:application',
          fs: ['at ./index.rsh:69:22:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:152:37:application call to "applyCatMove" (defined at: ./index.rsh:68:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
<<<<<<< HEAD
        const v161 = stdlib.sub(v144, v148);
        const v162 = stdlib.div(v161, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
        const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
        const v164 = stdlib.add(v163, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
        const v165 = stdlib.mod(v164, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
        const v166 = v43.blockers;
        const v168 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
        const v170 = v166[v168];
        const v173 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
        const v175 = v166[v173];
        const v176 = v170 ? v175 : false;
        const v179 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v180 = stdlib.sub(v179, v165);
        const v182 = v166[v180];
        const v183 = v176 ? v182 : false;
        const v186 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
        const v187 = stdlib.add(v186, v163);
        const v189 = v166[v187];
        const v190 = v183 ? v189 : false;
        const v193 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
        const v194 = stdlib.sub(v193, v165);
        const v196 = v166[v194];
        const v197 = v190 ? v196 : false;
        const v200 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v201 = stdlib.add(v200, v163);
        const v203 = v166[v201];
        const v204 = v197 ? v203 : false;
        const v207 = v204 ? false : true;
        stdlib.assert(v207, {
          at: './index.rsh:69:10:application',
          fs: ['at ./index.rsh:152:37:application call to "applyCatMove" (defined at: ./index.rsh:68:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:153:18:after expr stmt semicolon', stdlib.UInt_max, 7), v24, v25, v37, v137, v140, v166]);
        sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:153:18:after expr stmt semicolon', stdlib.UInt_max, 7), v24, v25, v37, v137, v166]);
        sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:153:18:after expr stmt semicolon', stdlib.UInt_max, 0)]];
=======
        const v152 = v43.blockers;
        const v154 = stdlib.sub(v138, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
        const v156 = v152[v154];
        const v159 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
        const v161 = v152[v159];
        const v162 = v156 ? v161 : false;
        const v165 = stdlib.sub(v138, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v167 = v152[v165];
        const v168 = v162 ? v167 : false;
        const v171 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v173 = v152[v171];
        const v174 = v168 ? v173 : false;
        const v178 = stdlib.add(v165, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
        const v180 = v152[v178];
        const v181 = v174 ? v180 : false;
        const v185 = stdlib.add(v171, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
        const v187 = v152[v185];
        const v188 = v181 ? v187 : false;
        const v191 = v188 ? false : true;
        stdlib.assert(v191, {
          at: './index.rsh:65:10:application',
          fs: ['at ./index.rsh:148:37:application call to "applyCatMove" (defined at: ./index.rsh:64:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:149:18:after expr stmt semicolon', stdlib.UInt_max, 7), v24, v25, v37, v131, v134, v152]);
        sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:149:18:after expr stmt semicolon', stdlib.UInt_max, 7), v24, v25, v37, v131, v152]);
        sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:149:18:after expr stmt semicolon', stdlib.UInt_max, 0)]];
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        sim_r.isHalt = false;
        
        return sim_r;
        })));
<<<<<<< HEAD
      const [v137] = txn4.data;
      const v140 = txn4.time;
      const v136 = txn4.from;
      ;
      const v139 = stdlib.addressEq(v24, v136);
      stdlib.assert(v139, {
        at: './index.rsh:150:12:dot',
=======
      const [v131] = txn4.data;
      const v134 = txn4.time;
      const v130 = txn4.from;
      ;
      const v133 = stdlib.addressEq(v24, v130);
      stdlib.assert(v133, {
        at: './index.rsh:146:12:dot',
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
<<<<<<< HEAD
      const v144 = v43.catIndex;
      const v145 = stdlib.lt(v144, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v146 = stdlib.ge(v144, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v147 = v145 ? true : v146;
      const v148 = stdlib.mod(v144, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v149 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v151 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v152 = v149 ? true : v151;
      const v153 = v147 ? true : v152;
      const v156 = v153 ? false : true;
      stdlib.assert(v156, {
=======
      const v138 = v43.catIndex;
      const v139 = stdlib.lt(v138, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v140 = stdlib.ge(v138, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v141 = v139 ? true : v140;
      const v142 = stdlib.mod(v138, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v143 = stdlib.eq(v142, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v145 = stdlib.eq(v142, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v146 = v143 ? true : v145;
      const v147 = v141 ? true : v146;
      const v150 = v147 ? false : true;
      stdlib.assert(v150, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        at: './index.rsh:32:10:application',
        fs: ['at ./index.rsh:69:22:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:152:37:application call to "applyCatMove" (defined at: ./index.rsh:68:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
<<<<<<< HEAD
      const v161 = stdlib.sub(v144, v148);
      const v162 = stdlib.div(v161, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
      const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
      const v164 = stdlib.add(v163, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
      const v165 = stdlib.mod(v164, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
      const v166 = v43.blockers;
      const v168 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
      const v170 = v166[v168];
      const v173 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
      const v175 = v166[v173];
      const v176 = v170 ? v175 : false;
      const v179 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v180 = stdlib.sub(v179, v165);
      const v182 = v166[v180];
      const v183 = v176 ? v182 : false;
      const v186 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
      const v187 = stdlib.add(v186, v163);
      const v189 = v166[v187];
      const v190 = v183 ? v189 : false;
      const v193 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
      const v194 = stdlib.sub(v193, v165);
      const v196 = v166[v194];
      const v197 = v190 ? v196 : false;
      const v200 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v201 = stdlib.add(v200, v163);
      const v203 = v166[v201];
      const v204 = v197 ? v203 : false;
      const v207 = v204 ? false : true;
      stdlib.assert(v207, {
        at: './index.rsh:69:10:application',
        fs: ['at ./index.rsh:152:37:application call to "applyCatMove" (defined at: ./index.rsh:68:1:function exp)'],
=======
      const v152 = v43.blockers;
      const v154 = stdlib.sub(v138, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
      const v156 = v152[v154];
      const v159 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
      const v161 = v152[v159];
      const v162 = v156 ? v161 : false;
      const v165 = stdlib.sub(v138, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v167 = v152[v165];
      const v168 = v162 ? v167 : false;
      const v171 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v173 = v152[v171];
      const v174 = v168 ? v173 : false;
      const v178 = stdlib.add(v165, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
      const v180 = v152[v178];
      const v181 = v174 ? v180 : false;
      const v185 = stdlib.add(v171, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
      const v187 = v152[v185];
      const v188 = v181 ? v187 : false;
      const v191 = v188 ? false : true;
      stdlib.assert(v191, {
        at: './index.rsh:65:10:application',
        fs: ['at ./index.rsh:148:37:application call to "applyCatMove" (defined at: ./index.rsh:64:1:function exp)'],
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        msg: null,
        who: 'Alice'
        });
      const txn5 = await (ctc.recv(8, 1, [ctc0], false, false));
<<<<<<< HEAD
      const [v220] = txn5.data;
      const v223 = txn5.time;
      const v219 = txn5.from;
      ;
      const v222 = stdlib.addressEq(v37, v219);
      stdlib.assert(v222, {
        at: './index.rsh:157:11:dot',
=======
      const [v204] = txn5.data;
      const v207 = txn5.time;
      const v203 = txn5.from;
      ;
      const v206 = stdlib.addressEq(v37, v203);
      stdlib.assert(v206, {
        at: './index.rsh:153:11:dot',
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
<<<<<<< HEAD
      const v225 = stdlib.lt(v220, stdlib.checkedBigNumberify('./index.rsh:79:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v225, {
        at: './index.rsh:79:10:application',
        fs: ['at ./index.rsh:159:33:application call to "applyBlockerMove" (defined at: ./index.rsh:77:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v227 = stdlib.Array_set(v166, v220, true);
      const v229 = {
        blockers: v227,
        catIndex: v137
        };
      const cv43 = v229;
      const cv385 = v223;
      
      v43 = cv43;
      v385 = cv385;
=======
      const v209 = stdlib.lt(v204, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v209, {
        at: './index.rsh:75:10:application',
        fs: ['at ./index.rsh:155:33:application call to "applyBlockerMove" (defined at: ./index.rsh:73:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v211 = stdlib.Array_set(v152, v204, true);
      const v213 = {
        blockers: v211,
        catIndex: v131
        };
      const cv43 = v213;
      const cv359 = v207;
      
      v43 = cv43;
      v359 = cv359;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
      
      continue;
      
      }
<<<<<<< HEAD
    const v231 = v43.catIndex;
    const v232 = stdlib.lt(v231, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v233 = stdlib.ge(v231, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
    const v234 = v232 ? true : v233;
    const v235 = stdlib.mod(v231, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v236 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
    const v238 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
    const v239 = v236 ? true : v238;
    const v240 = v234 ? true : v239;
    let v306;
    if (v240) {
      v306 = true;
      }
    else {
      const v256 = v240 ? false : true;
      stdlib.assert(v256, {
=======
    const v215 = v43.catIndex;
    const v216 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v217 = stdlib.ge(v215, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
    const v218 = v216 ? true : v217;
    const v219 = stdlib.mod(v215, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v220 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
    const v222 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
    const v223 = v220 ? true : v222;
    const v224 = v218 ? true : v223;
    let v280;
    if (v224) {
      v280 = true;
      }
    else {
      const v240 = v224 ? false : true;
      stdlib.assert(v240, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        at: './index.rsh:32:10:application',
        fs: ['at ./index.rsh:163:47:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)'],
        msg: null,
        who: 'Alice'
        });
<<<<<<< HEAD
      const v261 = stdlib.sub(v231, v235);
      const v262 = stdlib.div(v261, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
      const v263 = stdlib.mod(v262, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
      const v264 = stdlib.add(v263, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
      const v265 = stdlib.mod(v264, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
      const v266 = v43.blockers;
      const v268 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
      const v270 = v266[v268];
      const v273 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
      const v275 = v266[v273];
      const v276 = v270 ? v275 : false;
      const v279 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v280 = stdlib.sub(v279, v265);
      const v282 = v266[v280];
      const v283 = v276 ? v282 : false;
      const v286 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
      const v287 = stdlib.add(v286, v263);
      const v289 = v266[v287];
      const v290 = v283 ? v289 : false;
      const v293 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
      const v294 = stdlib.sub(v293, v265);
      const v296 = v266[v294];
      const v297 = v290 ? v296 : false;
      const v300 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v301 = stdlib.add(v300, v263);
      const v303 = v266[v301];
      const v304 = v297 ? v303 : false;
      v306 = v304;
      }
    const v319 = [stdlib.checkedBigNumberify('./index.rsh:164:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:164:53:decimal', stdlib.UInt_max, 0)];
    const v320 = [stdlib.checkedBigNumberify('./index.rsh:164:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:164:62:decimal', stdlib.UInt_max, 2)];
    const v321 = v240 ? v319 : v320;
    const v322 = v321[stdlib.checkedBigNumberify('./index.rsh:164:15:array', stdlib.UInt_max, 0)];
    const v323 = v321[stdlib.checkedBigNumberify('./index.rsh:164:15:array', stdlib.UInt_max, 1)];
    const v324 = stdlib.mul(v322, v25);
    ;
    const v329 = stdlib.mul(v323, v25);
    ;
    stdlib.protect(ctc10, await interact.outcome(v240), {
      at: './index.rsh:170:25:application',
      fs: ['at ./index.rsh:169:11:application call to [unknown function] (defined at: ./index.rsh:169:23:function exp)'],
=======
      const v242 = v43.blockers;
      const v244 = stdlib.sub(v215, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
      const v246 = v242[v244];
      const v249 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
      const v251 = v242[v249];
      const v252 = v246 ? v251 : false;
      const v255 = stdlib.sub(v215, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v257 = v242[v255];
      const v258 = v252 ? v257 : false;
      const v261 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v263 = v242[v261];
      const v264 = v258 ? v263 : false;
      const v268 = stdlib.add(v255, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
      const v270 = v242[v268];
      const v271 = v264 ? v270 : false;
      const v275 = stdlib.add(v261, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
      const v277 = v242[v275];
      const v278 = v271 ? v277 : false;
      v280 = v278;
      }
    const v293 = [stdlib.checkedBigNumberify('./index.rsh:160:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, 0)];
    const v294 = [stdlib.checkedBigNumberify('./index.rsh:160:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:160:62:decimal', stdlib.UInt_max, 2)];
    const v295 = v224 ? v293 : v294;
    const v296 = v295[stdlib.checkedBigNumberify('./index.rsh:160:15:array', stdlib.UInt_max, 0)];
    const v297 = v295[stdlib.checkedBigNumberify('./index.rsh:160:15:array', stdlib.UInt_max, 1)];
    const v298 = stdlib.mul(v296, v25);
    ;
    const v303 = stdlib.mul(v297, v25);
    ;
    stdlib.protect(ctc10, await interact.outcome(v224), {
      at: './index.rsh:166:25:application',
      fs: ['at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:23:function exp)'],
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
      msg: 'outcome',
      who: 'Alice'
      });
    
    return;}
  
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 121));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Object({
    blockers: ctc2,
    catIndex: ctc0
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc6, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc6]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc2, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc2]);
  
  
  const v19 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v25] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 1, [ctc2], false, false));
  const [v30] = txn2.data;
  const v33 = txn2.time;
  const v29 = txn2.from;
  ;
  const v32 = stdlib.addressEq(v24, v29);
  stdlib.assert(v32, {
    at: './index.rsh:132:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.acceptWager(v25), {
    at: './index.rsh:136:29:application',
    fs: ['at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  
  const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('./index.rsh:138:9:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc2, ctc0], [v24, v25, v30, v33], [v25, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:113:18:decimal', stdlib.UInt_max, 10), (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:138:9:dot', stdlib.UInt_max, 2), v24, v25, v30, v33]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:138:9:dot', stdlib.UInt_max, 2), v24, v25, v30]);
    const [] = txn3.data;
    const v40 = txn3.time;
    const v37 = txn3.from;
    
    sim_r.txns.push({
      amt: v25,
      kind: 'to',
      tok: undefined
      });
    const v44 = {
      blockers: v30,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 60)
      };
    const v43 = v44;
<<<<<<< HEAD
    const v385 = v40;
    
    if ((() => {
      const v50 = v43.catIndex;
      const v51 = stdlib.lt(v50, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v52 = stdlib.ge(v50, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v53 = v51 ? true : v52;
      const v54 = stdlib.mod(v50, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v55 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v57 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v58 = v55 ? true : v57;
      const v59 = v53 ? true : v58;
      let v125;
      if (v59) {
        v125 = true;
=======
    const v359 = v40;
    
    if ((() => {
      const v53 = v43.catIndex;
      const v54 = stdlib.lt(v53, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v55 = stdlib.ge(v53, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v56 = v54 ? true : v55;
      const v57 = stdlib.mod(v53, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v58 = stdlib.eq(v57, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v60 = stdlib.eq(v57, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v61 = v58 ? true : v60;
      const v62 = v56 ? true : v61;
      let v118;
      if (v62) {
        v118 = true;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        }
      else {
        const v78 = v62 ? false : true;
        stdlib.assert(v78, {
          at: './index.rsh:32:10:application',
<<<<<<< HEAD
          fs: ['at ./index.rsh:90:38:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:146:24:application call to "gameOver" (defined at: ./index.rsh:89:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v80 = stdlib.sub(v50, v54);
        const v81 = stdlib.div(v80, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
        const v82 = stdlib.mod(v81, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
        const v83 = stdlib.add(v82, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
        const v84 = stdlib.mod(v83, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
        const v85 = v43.blockers;
        const v87 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
        const v89 = v85[v87];
        const v92 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
        const v94 = v85[v92];
        const v95 = v89 ? v94 : false;
        const v98 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v99 = stdlib.sub(v98, v84);
        const v101 = v85[v99];
        const v102 = v95 ? v101 : false;
        const v105 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
        const v106 = stdlib.add(v105, v82);
        const v108 = v85[v106];
        const v109 = v102 ? v108 : false;
        const v112 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
        const v113 = stdlib.sub(v112, v84);
        const v115 = v85[v113];
        const v116 = v109 ? v115 : false;
        const v119 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v120 = stdlib.add(v119, v82);
        const v122 = v85[v120];
        const v123 = v116 ? v122 : false;
        v125 = v123;
        }
      const v128 = v125 ? false : true;
      
      return v128;})()) {
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:147:19:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v25, v37, v43, v385]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:147:19:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v25, v37, v43]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:147:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v231 = v43.catIndex;
      const v232 = stdlib.lt(v231, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v233 = stdlib.ge(v231, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v234 = v232 ? true : v233;
      const v235 = stdlib.mod(v231, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v236 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v238 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v239 = v236 ? true : v238;
      const v240 = v234 ? true : v239;
      let v306;
      if (v240) {
        v306 = true;
        }
      else {
        const v256 = v240 ? false : true;
        stdlib.assert(v256, {
=======
          fs: ['at ./index.rsh:86:38:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:142:24:application call to "gameOver" (defined at: ./index.rsh:85:1:function exp)', 'at ./index.rsh:142:14:application call to [unknown function] (defined at: ./index.rsh:142:14:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v80 = v43.blockers;
        const v82 = stdlib.sub(v53, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
        const v84 = v80[v82];
        const v87 = stdlib.add(v53, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
        const v89 = v80[v87];
        const v90 = v84 ? v89 : false;
        const v93 = stdlib.sub(v53, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v95 = v80[v93];
        const v96 = v90 ? v95 : false;
        const v99 = stdlib.add(v53, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v101 = v80[v99];
        const v102 = v96 ? v101 : false;
        const v106 = stdlib.add(v93, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
        const v108 = v80[v106];
        const v109 = v102 ? v108 : false;
        const v113 = stdlib.add(v99, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
        const v115 = v80[v113];
        const v116 = v109 ? v115 : false;
        v118 = v116;
        }
      const v121 = v118 ? false : true;
      
      return v121;})()) {
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:143:19:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v25, v37, v43, v359]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:143:19:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v25, v37, v43]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:143:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v215 = v43.catIndex;
      const v216 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v217 = stdlib.ge(v215, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v218 = v216 ? true : v217;
      const v219 = stdlib.mod(v215, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v220 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v222 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v223 = v220 ? true : v222;
      const v224 = v218 ? true : v223;
      let v280;
      if (v224) {
        v280 = true;
        }
      else {
        const v240 = v224 ? false : true;
        stdlib.assert(v240, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
          at: './index.rsh:32:10:application',
          fs: ['at ./index.rsh:163:47:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)'],
          msg: null,
          who: 'Bob'
          });
<<<<<<< HEAD
        const v261 = stdlib.sub(v231, v235);
        const v262 = stdlib.div(v261, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
        const v263 = stdlib.mod(v262, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
        const v264 = stdlib.add(v263, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
        const v265 = stdlib.mod(v264, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
        const v266 = v43.blockers;
        const v268 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
        const v270 = v266[v268];
        const v273 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
        const v275 = v266[v273];
        const v276 = v270 ? v275 : false;
        const v279 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v280 = stdlib.sub(v279, v265);
        const v282 = v266[v280];
        const v283 = v276 ? v282 : false;
        const v286 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
        const v287 = stdlib.add(v286, v263);
        const v289 = v266[v287];
        const v290 = v283 ? v289 : false;
        const v293 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
        const v294 = stdlib.sub(v293, v265);
        const v296 = v266[v294];
        const v297 = v290 ? v296 : false;
        const v300 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v301 = stdlib.add(v300, v263);
        const v303 = v266[v301];
        const v304 = v297 ? v303 : false;
        v306 = v304;
        }
      const v319 = [stdlib.checkedBigNumberify('./index.rsh:164:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:164:53:decimal', stdlib.UInt_max, 0)];
      const v320 = [stdlib.checkedBigNumberify('./index.rsh:164:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:164:62:decimal', stdlib.UInt_max, 2)];
      const v321 = v240 ? v319 : v320;
      const v322 = v321[stdlib.checkedBigNumberify('./index.rsh:164:15:array', stdlib.UInt_max, 0)];
      const v323 = v321[stdlib.checkedBigNumberify('./index.rsh:164:15:array', stdlib.UInt_max, 1)];
      const v324 = stdlib.mul(v322, v25);
      sim_r.txns.push({
        amt: v324,
=======
        const v242 = v43.blockers;
        const v244 = stdlib.sub(v215, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
        const v246 = v242[v244];
        const v249 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
        const v251 = v242[v249];
        const v252 = v246 ? v251 : false;
        const v255 = stdlib.sub(v215, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v257 = v242[v255];
        const v258 = v252 ? v257 : false;
        const v261 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v263 = v242[v261];
        const v264 = v258 ? v263 : false;
        const v268 = stdlib.add(v255, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
        const v270 = v242[v268];
        const v271 = v264 ? v270 : false;
        const v275 = stdlib.add(v261, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
        const v277 = v242[v275];
        const v278 = v271 ? v277 : false;
        v280 = v278;
        }
      const v293 = [stdlib.checkedBigNumberify('./index.rsh:160:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, 0)];
      const v294 = [stdlib.checkedBigNumberify('./index.rsh:160:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:160:62:decimal', stdlib.UInt_max, 2)];
      const v295 = v224 ? v293 : v294;
      const v296 = v295[stdlib.checkedBigNumberify('./index.rsh:160:15:array', stdlib.UInt_max, 0)];
      const v297 = v295[stdlib.checkedBigNumberify('./index.rsh:160:15:array', stdlib.UInt_max, 1)];
      const v298 = stdlib.mul(v296, v25);
      sim_r.txns.push({
        amt: v298,
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        kind: 'from',
        to: v24,
        tok: undefined
        });
<<<<<<< HEAD
      const v329 = stdlib.mul(v323, v25);
      sim_r.txns.push({
        amt: v329,
=======
      const v303 = stdlib.mul(v297, v25);
      sim_r.txns.push({
        amt: v303,
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        kind: 'from',
        to: v37,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
<<<<<<< HEAD
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:167:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
=======
      sim_r.view = [ctc9, []];
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.recv(4, 0, [], false, false));
    const [] = txn4.data;
<<<<<<< HEAD
    const v370 = txn4.time;
    const v367 = txn4.from;
    ;
    const v369 = stdlib.addressEq(v24, v367);
    stdlib.assert(v369, {
=======
    const v344 = txn4.time;
    const v341 = txn4.from;
    ;
    const v343 = stdlib.addressEq(v24, v341);
    stdlib.assert(v343, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:139:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:122:33:application',
      fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:120:32:function exp)', 'at ./index.rsh:139:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [] = txn3.data;
    const v40 = txn3.time;
    const v37 = txn3.from;
    ;
    const v44 = {
      blockers: v30,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 60)
      };
    let v43 = v44;
<<<<<<< HEAD
    let v385 = v40;
    
    while ((() => {
      const v50 = v43.catIndex;
      const v51 = stdlib.lt(v50, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v52 = stdlib.ge(v50, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v53 = v51 ? true : v52;
      const v54 = stdlib.mod(v50, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v55 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v57 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v58 = v55 ? true : v57;
      const v59 = v53 ? true : v58;
      let v125;
      if (v59) {
        v125 = true;
=======
    let v359 = v40;
    
    while ((() => {
      const v53 = v43.catIndex;
      const v54 = stdlib.lt(v53, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v55 = stdlib.ge(v53, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v56 = v54 ? true : v55;
      const v57 = stdlib.mod(v53, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v58 = stdlib.eq(v57, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v60 = stdlib.eq(v57, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v61 = v58 ? true : v60;
      const v62 = v56 ? true : v61;
      let v118;
      if (v62) {
        v118 = true;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        }
      else {
        const v78 = v62 ? false : true;
        stdlib.assert(v78, {
          at: './index.rsh:32:10:application',
<<<<<<< HEAD
          fs: ['at ./index.rsh:90:38:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:146:24:application call to "gameOver" (defined at: ./index.rsh:89:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v80 = stdlib.sub(v50, v54);
        const v81 = stdlib.div(v80, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
        const v82 = stdlib.mod(v81, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
        const v83 = stdlib.add(v82, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
        const v84 = stdlib.mod(v83, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
        const v85 = v43.blockers;
        const v87 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
        const v89 = v85[v87];
        const v92 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
        const v94 = v85[v92];
        const v95 = v89 ? v94 : false;
        const v98 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v99 = stdlib.sub(v98, v84);
        const v101 = v85[v99];
        const v102 = v95 ? v101 : false;
        const v105 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
        const v106 = stdlib.add(v105, v82);
        const v108 = v85[v106];
        const v109 = v102 ? v108 : false;
        const v112 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
        const v113 = stdlib.sub(v112, v84);
        const v115 = v85[v113];
        const v116 = v109 ? v115 : false;
        const v119 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v120 = stdlib.add(v119, v82);
        const v122 = v85[v120];
        const v123 = v116 ? v122 : false;
        v125 = v123;
        }
      const v128 = v125 ? false : true;
      
      return v128;})()) {
      const txn4 = await (ctc.recv(7, 1, [ctc0], false, false));
      const [v137] = txn4.data;
      const v140 = txn4.time;
      const v136 = txn4.from;
      ;
      const v139 = stdlib.addressEq(v24, v136);
      stdlib.assert(v139, {
        at: './index.rsh:150:12:dot',
=======
          fs: ['at ./index.rsh:86:38:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:142:24:application call to "gameOver" (defined at: ./index.rsh:85:1:function exp)', 'at ./index.rsh:142:14:application call to [unknown function] (defined at: ./index.rsh:142:14:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v80 = v43.blockers;
        const v82 = stdlib.sub(v53, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
        const v84 = v80[v82];
        const v87 = stdlib.add(v53, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
        const v89 = v80[v87];
        const v90 = v84 ? v89 : false;
        const v93 = stdlib.sub(v53, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v95 = v80[v93];
        const v96 = v90 ? v95 : false;
        const v99 = stdlib.add(v53, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v101 = v80[v99];
        const v102 = v96 ? v101 : false;
        const v106 = stdlib.add(v93, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
        const v108 = v80[v106];
        const v109 = v102 ? v108 : false;
        const v113 = stdlib.add(v99, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
        const v115 = v80[v113];
        const v116 = v109 ? v115 : false;
        v118 = v116;
        }
      const v121 = v118 ? false : true;
      
      return v121;})()) {
      const txn4 = await (ctc.recv(7, 1, [ctc0], false, false));
      const [v131] = txn4.data;
      const v134 = txn4.time;
      const v130 = txn4.from;
      ;
      const v133 = stdlib.addressEq(v24, v130);
      stdlib.assert(v133, {
        at: './index.rsh:146:12:dot',
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
<<<<<<< HEAD
      const v144 = v43.catIndex;
      const v145 = stdlib.lt(v144, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v146 = stdlib.ge(v144, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v147 = v145 ? true : v146;
      const v148 = stdlib.mod(v144, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v149 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v151 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v152 = v149 ? true : v151;
      const v153 = v147 ? true : v152;
      const v156 = v153 ? false : true;
      stdlib.assert(v156, {
=======
      const v138 = v43.catIndex;
      const v139 = stdlib.lt(v138, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v140 = stdlib.ge(v138, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
      const v141 = v139 ? true : v140;
      const v142 = stdlib.mod(v138, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v143 = stdlib.eq(v142, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
      const v145 = stdlib.eq(v142, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
      const v146 = v143 ? true : v145;
      const v147 = v141 ? true : v146;
      const v150 = v147 ? false : true;
      stdlib.assert(v150, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        at: './index.rsh:32:10:application',
        fs: ['at ./index.rsh:69:22:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:152:37:application call to "applyCatMove" (defined at: ./index.rsh:68:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
<<<<<<< HEAD
      const v161 = stdlib.sub(v144, v148);
      const v162 = stdlib.div(v161, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
      const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
      const v164 = stdlib.add(v163, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
      const v165 = stdlib.mod(v164, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
      const v166 = v43.blockers;
      const v168 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
      const v170 = v166[v168];
      const v173 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
      const v175 = v166[v173];
      const v176 = v170 ? v175 : false;
      const v179 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v180 = stdlib.sub(v179, v165);
      const v182 = v166[v180];
      const v183 = v176 ? v182 : false;
      const v186 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
      const v187 = stdlib.add(v186, v163);
      const v189 = v166[v187];
      const v190 = v183 ? v189 : false;
      const v193 = stdlib.sub(v144, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
      const v194 = stdlib.sub(v193, v165);
      const v196 = v166[v194];
      const v197 = v190 ? v196 : false;
      const v200 = stdlib.add(v144, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v201 = stdlib.add(v200, v163);
      const v203 = v166[v201];
      const v204 = v197 ? v203 : false;
      const v207 = v204 ? false : true;
      stdlib.assert(v207, {
        at: './index.rsh:69:10:application',
        fs: ['at ./index.rsh:152:37:application call to "applyCatMove" (defined at: ./index.rsh:68:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v215 = {
        blockers: v166,
        catIndex: v137
        };
      const v216 = stdlib.protect(ctc0, await interact.getHex(v215), {
        at: './index.rsh:55:37:application',
        fs: ['at ./index.rsh:156:46:application call to "getValidBlockMove" (defined at: ./index.rsh:54:1:function exp)', 'at ./index.rsh:155:16:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)'],
        msg: 'getHex',
        who: 'Bob'
        });
      const v217 = stdlib.lt(v216, stdlib.checkedBigNumberify('./index.rsh:56:23:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v217, {
        at: './index.rsh:56:9:application',
        fs: ['at ./index.rsh:156:46:application call to "getValidBlockMove" (defined at: ./index.rsh:54:1:function exp)', 'at ./index.rsh:155:16:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)'],
=======
      const v152 = v43.blockers;
      const v154 = stdlib.sub(v138, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
      const v156 = v152[v154];
      const v159 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
      const v161 = v152[v159];
      const v162 = v156 ? v161 : false;
      const v165 = stdlib.sub(v138, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v167 = v152[v165];
      const v168 = v162 ? v167 : false;
      const v171 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v173 = v152[v171];
      const v174 = v168 ? v173 : false;
      const v178 = stdlib.add(v165, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
      const v180 = v152[v178];
      const v181 = v174 ? v180 : false;
      const v185 = stdlib.add(v171, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
      const v187 = v152[v185];
      const v188 = v181 ? v187 : false;
      const v191 = v188 ? false : true;
      stdlib.assert(v191, {
        at: './index.rsh:65:10:application',
        fs: ['at ./index.rsh:148:37:application call to "applyCatMove" (defined at: ./index.rsh:64:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v199 = {
        blockers: v152,
        catIndex: v131
        };
      const v200 = stdlib.protect(ctc0, await interact.getHex(v199), {
        at: './index.rsh:51:37:application',
        fs: ['at ./index.rsh:152:46:application call to "getValidBlockMove" (defined at: ./index.rsh:50:1:function exp)', 'at ./index.rsh:151:16:application call to [unknown function] (defined at: ./index.rsh:151:20:function exp)'],
        msg: 'getHex',
        who: 'Bob'
        });
      const v201 = stdlib.lt(v200, stdlib.checkedBigNumberify('./index.rsh:52:23:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v201, {
        at: './index.rsh:52:9:application',
        fs: ['at ./index.rsh:152:46:application call to "getValidBlockMove" (defined at: ./index.rsh:50:1:function exp)', 'at ./index.rsh:151:16:application call to [unknown function] (defined at: ./index.rsh:151:20:function exp)'],
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        msg: null,
        who: 'Bob'
        });
      
      
<<<<<<< HEAD
      const txn5 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:157:11:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc0, ctc0, ctc2, ctc0], [v24, v25, v37, v137, v140, v166, v216], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn5) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:157:11:dot', stdlib.UInt_max, 7), v24, v25, v37, v137, v140, v166]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:157:11:dot', stdlib.UInt_max, 7), v24, v25, v37, v137, v166]);
        const [v220] = txn5.data;
        const v223 = txn5.time;
        const v219 = txn5.from;
=======
      const txn5 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:153:11:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc0, ctc0, ctc2, ctc0], [v24, v25, v37, v131, v134, v152, v200], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn5) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:153:11:dot', stdlib.UInt_max, 7), v24, v25, v37, v131, v134, v152]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:153:11:dot', stdlib.UInt_max, 7), v24, v25, v37, v131, v152]);
        const [v204] = txn5.data;
        const v207 = txn5.time;
        const v203 = txn5.from;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
<<<<<<< HEAD
        const v222 = stdlib.addressEq(v37, v219);
        stdlib.assert(v222, {
          at: './index.rsh:157:11:dot',
=======
        const v206 = stdlib.addressEq(v37, v203);
        stdlib.assert(v206, {
          at: './index.rsh:153:11:dot',
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
<<<<<<< HEAD
        const v225 = stdlib.lt(v220, stdlib.checkedBigNumberify('./index.rsh:79:15:decimal', stdlib.UInt_max, 121));
        stdlib.assert(v225, {
          at: './index.rsh:79:10:application',
          fs: ['at ./index.rsh:159:33:application call to "applyBlockerMove" (defined at: ./index.rsh:77:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v227 = stdlib.Array_set(v166, v220, true);
        const v229 = {
          blockers: v227,
          catIndex: v137
          };
        const cv43 = v229;
        const cv385 = v223;
        
        (() => {
          const v43 = cv43;
          const v385 = cv385;
          
          if ((() => {
            const v50 = v43.catIndex;
            const v51 = stdlib.lt(v50, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v52 = stdlib.ge(v50, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
            const v53 = v51 ? true : v52;
            const v54 = stdlib.mod(v50, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v55 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
            const v57 = stdlib.eq(v54, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
            const v58 = v55 ? true : v57;
            const v59 = v53 ? true : v58;
            let v125;
            if (v59) {
              v125 = true;
=======
        const v209 = stdlib.lt(v204, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, 121));
        stdlib.assert(v209, {
          at: './index.rsh:75:10:application',
          fs: ['at ./index.rsh:155:33:application call to "applyBlockerMove" (defined at: ./index.rsh:73:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v211 = stdlib.Array_set(v152, v204, true);
        const v213 = {
          blockers: v211,
          catIndex: v131
          };
        const cv43 = v213;
        const cv359 = v207;
        
        (() => {
          const v43 = cv43;
          const v359 = cv359;
          
          if ((() => {
            const v53 = v43.catIndex;
            const v54 = stdlib.lt(v53, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v55 = stdlib.ge(v53, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
            const v56 = v54 ? true : v55;
            const v57 = stdlib.mod(v53, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v58 = stdlib.eq(v57, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
            const v60 = stdlib.eq(v57, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
            const v61 = v58 ? true : v60;
            const v62 = v56 ? true : v61;
            let v118;
            if (v62) {
              v118 = true;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
              }
            else {
              const v78 = v62 ? false : true;
              stdlib.assert(v78, {
                at: './index.rsh:32:10:application',
<<<<<<< HEAD
                fs: ['at ./index.rsh:90:38:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:146:24:application call to "gameOver" (defined at: ./index.rsh:89:1:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v80 = stdlib.sub(v50, v54);
              const v81 = stdlib.div(v80, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
              const v82 = stdlib.mod(v81, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
              const v83 = stdlib.add(v82, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
              const v84 = stdlib.mod(v83, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
              const v85 = v43.blockers;
              const v87 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
              const v89 = v85[v87];
              const v92 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
              const v94 = v85[v92];
              const v95 = v89 ? v94 : false;
              const v98 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v99 = stdlib.sub(v98, v84);
              const v101 = v85[v99];
              const v102 = v95 ? v101 : false;
              const v105 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
              const v106 = stdlib.add(v105, v82);
              const v108 = v85[v106];
              const v109 = v102 ? v108 : false;
              const v112 = stdlib.sub(v50, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
              const v113 = stdlib.sub(v112, v84);
              const v115 = v85[v113];
              const v116 = v109 ? v115 : false;
              const v119 = stdlib.add(v50, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v120 = stdlib.add(v119, v82);
              const v122 = v85[v120];
              const v123 = v116 ? v122 : false;
              v125 = v123;
              }
            const v128 = v125 ? false : true;
            
            return v128;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:147:19:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v25, v37, v43, v385]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:147:19:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v25, v37, v43]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:147:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v231 = v43.catIndex;
            const v232 = stdlib.lt(v231, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v233 = stdlib.ge(v231, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
            const v234 = v232 ? true : v233;
            const v235 = stdlib.mod(v231, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v236 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
            const v238 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
            const v239 = v236 ? true : v238;
            const v240 = v234 ? true : v239;
            let v306;
            if (v240) {
              v306 = true;
              }
            else {
              const v256 = v240 ? false : true;
              stdlib.assert(v256, {
=======
                fs: ['at ./index.rsh:86:38:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:142:24:application call to "gameOver" (defined at: ./index.rsh:85:1:function exp)', 'at ./index.rsh:142:14:application call to [unknown function] (defined at: ./index.rsh:142:14:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v80 = v43.blockers;
              const v82 = stdlib.sub(v53, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
              const v84 = v80[v82];
              const v87 = stdlib.add(v53, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
              const v89 = v80[v87];
              const v90 = v84 ? v89 : false;
              const v93 = stdlib.sub(v53, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v95 = v80[v93];
              const v96 = v90 ? v95 : false;
              const v99 = stdlib.add(v53, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v101 = v80[v99];
              const v102 = v96 ? v101 : false;
              const v106 = stdlib.add(v93, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
              const v108 = v80[v106];
              const v109 = v102 ? v108 : false;
              const v113 = stdlib.add(v99, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
              const v115 = v80[v113];
              const v116 = v109 ? v115 : false;
              v118 = v116;
              }
            const v121 = v118 ? false : true;
            
            return v121;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:143:19:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v25, v37, v43, v359]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:143:19:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v25, v37, v43]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:143:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v215 = v43.catIndex;
            const v216 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v217 = stdlib.ge(v215, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
            const v218 = v216 ? true : v217;
            const v219 = stdlib.mod(v215, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v220 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
            const v222 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
            const v223 = v220 ? true : v222;
            const v224 = v218 ? true : v223;
            let v280;
            if (v224) {
              v280 = true;
              }
            else {
              const v240 = v224 ? false : true;
              stdlib.assert(v240, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                at: './index.rsh:32:10:application',
                fs: ['at ./index.rsh:163:47:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)'],
                msg: null,
                who: 'Bob'
                });
<<<<<<< HEAD
              const v261 = stdlib.sub(v231, v235);
              const v262 = stdlib.div(v261, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
              const v263 = stdlib.mod(v262, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
              const v264 = stdlib.add(v263, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
              const v265 = stdlib.mod(v264, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
              const v266 = v43.blockers;
              const v268 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
              const v270 = v266[v268];
              const v273 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
              const v275 = v266[v273];
              const v276 = v270 ? v275 : false;
              const v279 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v280 = stdlib.sub(v279, v265);
              const v282 = v266[v280];
              const v283 = v276 ? v282 : false;
              const v286 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
              const v287 = stdlib.add(v286, v263);
              const v289 = v266[v287];
              const v290 = v283 ? v289 : false;
              const v293 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
              const v294 = stdlib.sub(v293, v265);
              const v296 = v266[v294];
              const v297 = v290 ? v296 : false;
              const v300 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v301 = stdlib.add(v300, v263);
              const v303 = v266[v301];
              const v304 = v297 ? v303 : false;
              v306 = v304;
              }
            const v319 = [stdlib.checkedBigNumberify('./index.rsh:164:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:164:53:decimal', stdlib.UInt_max, 0)];
            const v320 = [stdlib.checkedBigNumberify('./index.rsh:164:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:164:62:decimal', stdlib.UInt_max, 2)];
            const v321 = v240 ? v319 : v320;
            const v322 = v321[stdlib.checkedBigNumberify('./index.rsh:164:15:array', stdlib.UInt_max, 0)];
            const v323 = v321[stdlib.checkedBigNumberify('./index.rsh:164:15:array', stdlib.UInt_max, 1)];
            const v324 = stdlib.mul(v322, v25);
            sim_r.txns.push({
              amt: v324,
=======
              const v242 = v43.blockers;
              const v244 = stdlib.sub(v215, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
              const v246 = v242[v244];
              const v249 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
              const v251 = v242[v249];
              const v252 = v246 ? v251 : false;
              const v255 = stdlib.sub(v215, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v257 = v242[v255];
              const v258 = v252 ? v257 : false;
              const v261 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v263 = v242[v261];
              const v264 = v258 ? v263 : false;
              const v268 = stdlib.add(v255, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
              const v270 = v242[v268];
              const v271 = v264 ? v270 : false;
              const v275 = stdlib.add(v261, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
              const v277 = v242[v275];
              const v278 = v271 ? v277 : false;
              v280 = v278;
              }
            const v293 = [stdlib.checkedBigNumberify('./index.rsh:160:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, 0)];
            const v294 = [stdlib.checkedBigNumberify('./index.rsh:160:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:160:62:decimal', stdlib.UInt_max, 2)];
            const v295 = v224 ? v293 : v294;
            const v296 = v295[stdlib.checkedBigNumberify('./index.rsh:160:15:array', stdlib.UInt_max, 0)];
            const v297 = v295[stdlib.checkedBigNumberify('./index.rsh:160:15:array', stdlib.UInt_max, 1)];
            const v298 = stdlib.mul(v296, v25);
            sim_r.txns.push({
              amt: v298,
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
              kind: 'from',
              to: v24,
              tok: undefined
              });
<<<<<<< HEAD
            const v329 = stdlib.mul(v323, v25);
            sim_r.txns.push({
              amt: v329,
=======
            const v303 = stdlib.mul(v297, v25);
            sim_r.txns.push({
              amt: v303,
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
              kind: 'from',
              to: v37,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
<<<<<<< HEAD
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:167:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
=======
            sim_r.view = [ctc9, []];
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
<<<<<<< HEAD
      const [v220] = txn5.data;
      const v223 = txn5.time;
      const v219 = txn5.from;
      ;
      const v222 = stdlib.addressEq(v37, v219);
      stdlib.assert(v222, {
        at: './index.rsh:157:11:dot',
=======
      const [v204] = txn5.data;
      const v207 = txn5.time;
      const v203 = txn5.from;
      ;
      const v206 = stdlib.addressEq(v37, v203);
      stdlib.assert(v206, {
        at: './index.rsh:153:11:dot',
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
<<<<<<< HEAD
      const v225 = stdlib.lt(v220, stdlib.checkedBigNumberify('./index.rsh:79:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v225, {
        at: './index.rsh:79:10:application',
        fs: ['at ./index.rsh:159:33:application call to "applyBlockerMove" (defined at: ./index.rsh:77:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v227 = stdlib.Array_set(v166, v220, true);
      const v229 = {
        blockers: v227,
        catIndex: v137
        };
      const cv43 = v229;
      const cv385 = v223;
      
      v43 = cv43;
      v385 = cv385;
=======
      const v209 = stdlib.lt(v204, stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v209, {
        at: './index.rsh:75:10:application',
        fs: ['at ./index.rsh:155:33:application call to "applyBlockerMove" (defined at: ./index.rsh:73:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v211 = stdlib.Array_set(v152, v204, true);
      const v213 = {
        blockers: v211,
        catIndex: v131
        };
      const cv43 = v213;
      const cv359 = v207;
      
      v43 = cv43;
      v359 = cv359;
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
      
      continue;
      
      }
<<<<<<< HEAD
    const v231 = v43.catIndex;
    const v232 = stdlib.lt(v231, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v233 = stdlib.ge(v231, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
    const v234 = v232 ? true : v233;
    const v235 = stdlib.mod(v231, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v236 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
    const v238 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
    const v239 = v236 ? true : v238;
    const v240 = v234 ? true : v239;
    let v306;
    if (v240) {
      v306 = true;
      }
    else {
      const v256 = v240 ? false : true;
      stdlib.assert(v256, {
=======
    const v215 = v43.catIndex;
    const v216 = stdlib.lt(v215, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v217 = stdlib.ge(v215, stdlib.checkedBigNumberify('./index.rsh:25:33:application', stdlib.UInt_max, 110));
    const v218 = v216 ? true : v217;
    const v219 = stdlib.mod(v215, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v220 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:26:16:decimal', stdlib.UInt_max, 0));
    const v222 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:26:38:application', stdlib.UInt_max, 10));
    const v223 = v220 ? true : v222;
    const v224 = v218 ? true : v223;
    let v280;
    if (v224) {
      v280 = true;
      }
    else {
      const v240 = v224 ? false : true;
      stdlib.assert(v240, {
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
        at: './index.rsh:32:10:application',
        fs: ['at ./index.rsh:163:47:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)'],
        msg: null,
        who: 'Bob'
        });
<<<<<<< HEAD
      const v261 = stdlib.sub(v231, v235);
      const v262 = stdlib.div(v261, stdlib.checkedBigNumberify('./index.rsh:34:52:decimal', stdlib.UInt_max, 11));
      const v263 = stdlib.mod(v262, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, 2));
      const v264 = stdlib.add(v263, stdlib.checkedBigNumberify('./index.rsh:36:30:decimal', stdlib.UInt_max, 1));
      const v265 = stdlib.mod(v264, stdlib.checkedBigNumberify('./index.rsh:36:35:decimal', stdlib.UInt_max, 2));
      const v266 = v43.blockers;
      const v268 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:39:36:decimal', stdlib.UInt_max, 1));
      const v270 = v266[v268];
      const v273 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:39:68:decimal', stdlib.UInt_max, 1));
      const v275 = v266[v273];
      const v276 = v270 ? v275 : false;
      const v279 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v280 = stdlib.sub(v279, v265);
      const v282 = v266[v280];
      const v283 = v276 ? v282 : false;
      const v286 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:40:74:decimal', stdlib.UInt_max, 10));
      const v287 = stdlib.add(v286, v263);
      const v289 = v266[v287];
      const v290 = v283 ? v289 : false;
      const v293 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:41:29:decimal', stdlib.UInt_max, 10));
      const v294 = stdlib.sub(v293, v265);
      const v296 = v266[v294];
      const v297 = v290 ? v296 : false;
      const v300 = stdlib.add(v231, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v301 = stdlib.add(v300, v263);
      const v303 = v266[v301];
      const v304 = v297 ? v303 : false;
      v306 = v304;
      }
    const v319 = [stdlib.checkedBigNumberify('./index.rsh:164:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:164:53:decimal', stdlib.UInt_max, 0)];
    const v320 = [stdlib.checkedBigNumberify('./index.rsh:164:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:164:62:decimal', stdlib.UInt_max, 2)];
    const v321 = v240 ? v319 : v320;
    const v322 = v321[stdlib.checkedBigNumberify('./index.rsh:164:15:array', stdlib.UInt_max, 0)];
    const v323 = v321[stdlib.checkedBigNumberify('./index.rsh:164:15:array', stdlib.UInt_max, 1)];
    const v324 = stdlib.mul(v322, v25);
    ;
    const v329 = stdlib.mul(v323, v25);
    ;
    stdlib.protect(ctc3, await interact.outcome(v240), {
      at: './index.rsh:170:25:application',
      fs: ['at ./index.rsh:169:11:application call to [unknown function] (defined at: ./index.rsh:169:23:function exp)'],
=======
      const v242 = v43.blockers;
      const v244 = stdlib.sub(v215, stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 1));
      const v246 = v242[v244];
      const v249 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:35:68:decimal', stdlib.UInt_max, 1));
      const v251 = v242[v249];
      const v252 = v246 ? v251 : false;
      const v255 = stdlib.sub(v215, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v257 = v242[v255];
      const v258 = v252 ? v257 : false;
      const v261 = stdlib.add(v215, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v263 = v242[v261];
      const v264 = v258 ? v263 : false;
      const v268 = stdlib.add(v255, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, 1));
      const v270 = v242[v268];
      const v271 = v264 ? v270 : false;
      const v275 = stdlib.add(v261, stdlib.checkedBigNumberify('./index.rsh:37:75:decimal', stdlib.UInt_max, 1));
      const v277 = v242[v275];
      const v278 = v271 ? v277 : false;
      v280 = v278;
      }
    const v293 = [stdlib.checkedBigNumberify('./index.rsh:160:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, 0)];
    const v294 = [stdlib.checkedBigNumberify('./index.rsh:160:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:160:62:decimal', stdlib.UInt_max, 2)];
    const v295 = v224 ? v293 : v294;
    const v296 = v295[stdlib.checkedBigNumberify('./index.rsh:160:15:array', stdlib.UInt_max, 0)];
    const v297 = v295[stdlib.checkedBigNumberify('./index.rsh:160:15:array', stdlib.UInt_max, 1)];
    const v298 = stdlib.mul(v296, v25);
    ;
    const v303 = stdlib.mul(v297, v25);
    ;
    stdlib.protect(ctc3, await interact.outcome(v224), {
      at: './index.rsh:166:25:application',
      fs: ['at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:23:function exp)'],
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
      msg: 'outcome',
      who: 'Bob'
      });
    
    return;}
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 7,
    size: 89
    }, {
    count: 9,
    size: 242
    }, {
    count: 9,
    size: 242
    }, {
    count: 9,
    size: 242
    }, null, null, {
    count: 11,
    size: 290
    }, {
    count: 12,
    size: 290
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:128:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:132:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:132:9:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:138:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 253
int 60
itob
concat
dup
store 252
substring 121 129
btoi
dup
store 251
int 11
%
store 250
load 251
int 11
<
load 251
int 110
>=
||
load 250
int 0
==
load 250
int 10
==
||
||
dup
store 249
bz l0
int 1
store 248
b l1
l0:
// Nothing
// "./index.rsh:32:10:application"
<<<<<<< HEAD
// "[at ./index.rsh:90:38:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp),at ./index.rsh:146:24:application call to \"gameOver\" (defined at: ./index.rsh:89:1:function exp)]"
=======
// "[at ./index.rsh:86:38:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp),at ./index.rsh:142:24:application call to \"gameOver\" (defined at: ./index.rsh:85:1:function exp),at ./index.rsh:142:14:application call to [unknown function] (defined at: ./index.rsh:142:14:function exp)]"
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
load 249
!
assert
load 251
load 250
-
int 11
/
int 2
%
dup
store 247
int 1
+
int 2
%
store 246
load 252
substring 0 121
dup
store 245
load 251
int 1
-
getbyte
load 245
load 251
int 1
+
getbyte
&&
load 245
load 251
int 11
-
load 246
-
getbyte
&&
load 245
load 251
int 10
+
load 247
+
getbyte
&&
load 245
load 251
int 10
-
load 246
-
getbyte
&&
load 245
load 251
int 11
+
load 247
+
getbyte
&&
store 248
l1:
load 248
bz l2
load 249
bz l3
int 1
store 247
b l4
l3:
// Nothing
// "./index.rsh:32:10:application"
// "[at ./index.rsh:163:47:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp)]"
load 249
!
assert
load 251
load 250
-
int 11
/
int 2
%
dup
store 246
int 1
+
int 2
%
store 245
load 252
substring 0 121
dup
store 244
load 251
int 1
-
getbyte
load 244
load 251
int 1
+
getbyte
&&
load 244
load 251
int 11
-
load 245
-
getbyte
&&
load 244
load 251
int 10
+
load 246
+
getbyte
&&
load 244
load 251
int 10
-
load 245
-
getbyte
&&
load 244
load 251
int 11
+
load 246
+
getbyte
&&
store 247
l4:
int 0
itob
int 2
itob
concat
int 2
itob
int 0
itob
concat
load 249
select
store 246
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 246
substring 0 8
btoi
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
gtxn 0 Sender
==
assert
gtxn 5 Amount
load 246
substring 8 16
btoi
load 254
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 7
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
dup
gtxn 6 LastValid
==
assert
pop
l2:
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:139:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:139:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:150:12:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:150:12:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 252
substring 121 129
btoi
dup
store 250
int 11
%
store 249
// Nothing
// "./index.rsh:32:10:application"
// "[at ./index.rsh:69:22:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp),at ./index.rsh:152:37:application call to \"applyCatMove\" (defined at: ./index.rsh:68:1:function exp)]"
load 250
int 11
<
load 250
int 110
>=
||
load 249
int 0
==
load 249
int 10
==
||
||
!
assert
load 250
load 249
-
int 11
/
int 2
%
dup
store 248
int 1
+
int 2
%
store 247
load 252
substring 0 121
store 246
// Nothing
// "./index.rsh:69:10:application"
// "[at ./index.rsh:152:37:application call to \"applyCatMove\" (defined at: ./index.rsh:68:1:function exp)]"
load 246
load 250
int 1
-
getbyte
load 246
load 250
int 1
+
getbyte
&&
load 246
load 250
int 11
-
load 247
-
getbyte
&&
load 246
load 250
int 10
+
load 248
+
getbyte
&&
load 246
load 250
int 10
-
load 247
-
getbyte
&&
load 246
load 250
int 11
+
load 248
+
getbyte
&&
!
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 7
int 7
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 251
itob
concat
load 246
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 7
int 7
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:157:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:157:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "./index.rsh:79:10:application"
// "[at ./index.rsh:159:33:application call to \"applyBlockerMove\" (defined at: ./index.rsh:77:1:function exp)]"
load 250
int 121
<
assert
load 251
load 250
int 1
setbyte
load 252
itob
concat
dup
store 249
substring 121 129
btoi
dup
store 248
int 11
%
store 247
load 248
int 11
<
load 248
int 110
>=
||
load 247
int 0
==
load 247
int 10
==
||
||
dup
store 246
bz l0
int 1
store 245
b l1
l0:
// Nothing
// "./index.rsh:32:10:application"
<<<<<<< HEAD
// "[at ./index.rsh:90:38:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp),at ./index.rsh:146:24:application call to \"gameOver\" (defined at: ./index.rsh:89:1:function exp)]"
=======
// "[at ./index.rsh:86:38:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp),at ./index.rsh:142:24:application call to \"gameOver\" (defined at: ./index.rsh:85:1:function exp),at ./index.rsh:142:14:application call to [unknown function] (defined at: ./index.rsh:142:14:function exp)]"
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
load 246
!
assert
load 248
load 247
-
int 11
/
int 2
%
dup
store 244
int 1
+
int 2
%
store 243
load 249
substring 0 121
dup
store 242
load 248
int 1
-
getbyte
load 242
load 248
int 1
+
getbyte
&&
load 242
load 248
int 11
-
load 243
-
getbyte
&&
load 242
load 248
int 10
+
load 244
+
getbyte
&&
load 242
load 248
int 10
-
load 243
-
getbyte
&&
load 242
load 248
int 11
+
load 244
+
getbyte
&&
store 245
l1:
load 245
bz l2
load 246
bz l3
int 1
store 244
b l4
l3:
// Nothing
// "./index.rsh:32:10:application"
// "[at ./index.rsh:163:47:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp)]"
load 246
!
assert
load 248
load 247
-
int 11
/
int 2
%
dup
store 243
int 1
+
int 2
%
store 242
load 249
substring 0 121
dup
store 241
load 248
int 1
-
getbyte
load 241
load 248
int 1
+
getbyte
&&
load 241
load 248
int 11
-
load 242
-
getbyte
&&
load 241
load 248
int 10
+
load 243
+
getbyte
&&
load 241
load 248
int 10
-
load 242
-
getbyte
&&
load 241
load 248
int 11
+
load 243
+
getbyte
&&
store 244
l4:
int 0
itob
int 2
itob
concat
int 2
itob
int 0
itob
concat
load 246
select
store 243
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 243
substring 0 8
btoi
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 253
==
assert
gtxn 5 Amount
load 243
substring 8 16
btoi
load 254
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 7
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
l2:
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 249
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool[121]",
                "name": "v30",
                "type": "bool[121]"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v30",
                "type": "bool[121]"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v30",
                "type": "bool[121]"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bool[121]",
                    "name": "blockers",
                    "type": "bool[121]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "catIndex",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T9",
                "name": "v43",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v385",
=======
                "name": "v359",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v137",
=======
                "name": "v131",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v137",
=======
                "name": "v131",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              },
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v140",
=======
                "name": "v134",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
<<<<<<< HEAD
                "name": "v166",
=======
                "name": "v152",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "bool[121]"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v220",
=======
                "name": "v204",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool[121]",
                "name": "v30",
                "type": "bool[121]"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v30",
                "type": "bool[121]"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v30",
                "type": "bool[121]"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bool[121]",
                    "name": "blockers",
                    "type": "bool[121]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "catIndex",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T9",
                "name": "v43",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v385",
=======
                "name": "v359",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v137",
=======
                "name": "v131",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v137",
=======
                "name": "v131",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              },
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v140",
=======
                "name": "v134",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
<<<<<<< HEAD
                "name": "v166",
=======
                "name": "v152",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "bool[121]"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
<<<<<<< HEAD
                "name": "v220",
=======
                "name": "v204",
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
<<<<<<< HEAD
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611aa5806100826000396000f3fe6080604052600436106100595760003560e01c806318d84c0514610065578063354d7a4a1461007a57806376dcaa631461008d5780639532ef01146100a0578063cb057a12146100b3578063e6c71bac146100c657610060565b3661006057005b600080fd5b61007861007336600461162a565b6100d9565b005b610078610088366004611618565b61053a565b61007861009b366004611657565b610647565b6100786100ae366004611646565b61077b565b6100786100c136600461162a565b61087d565b6100786100d4366004611618565b6109f8565b6040516100ed906005908390602001611851565b6040516020818303038152906040528051906020012060001c6000541461011357600080fd5b6000808055604080516060810182528281526020810183905290810191909152341561013e57600080fd5b3361014c60208401846115dd565b6001600160a01b03161461015f57600080fd5b61016f600b610f80840135611a2f565b8152600b610f808301351061018d57606e610f808301351015610190565b60015b6101ad578051156101a5578051600a146101a8565b60015b6101b0565b60015b6101bb5760016101be565b60005b6101c757600080fd5b8051600290600b906101de90610f808601356119fd565b6101e891906119ca565b6101f29190611a2f565b60208201819052600290610208906001906119b2565b6102129190611a2f565b60408201526060820161022b6001610f808501356119fd565b6079811061024957634e487b7160e01b600052603260045260246000fd5b60200201602081019061025c91906115fe565b6102675760006102ac565b6060820161027b6001610f808501356119b2565b6079811061029957634e487b7160e01b600052603260045260246000fd5b6020020160208101906102ac91906115fe565b6102b757600061030c565b604081015160608301906102d1600b610f808601356119fd565b6102db91906119fd565b607981106102f957634e487b7160e01b600052603260045260246000fd5b60200201602081019061030c91906115fe565b61031757600061036c565b60208101516060830190610331600a610f808601356119b2565b61033b91906119b2565b6079811061035957634e487b7160e01b600052603260045260246000fd5b60200201602081019061036c91906115fe565b6103775760006103cc565b60408101516060830190610391600a610f808601356119fd565b61039b91906119fd565b607981106103b957634e487b7160e01b600052603260045260246000fd5b6020020160208101906103cc91906115fe565b6103d757600061042c565b602081015160608301906103f1600b610f808601356119b2565b6103fb91906119b2565b6079811061041957634e487b7160e01b600052603260045260246000fd5b60200201602081019061042c91906115fe565b61043757600161043a565b60005b61044357600080fd5b7f5f47d8d9300994ff50d6045985719591e70e95ff216e6f3d81bd8da8216b2db78260405161047291906117ff565b60405180910390a1610482611370565b61048f60208401846115dd565b6001600160a01b03168152602080840135908201526104b460608401604085016115dd565b6001600160a01b0316604080830191909152610fc08401356060808401919091524360808401528151610f2081810190935291908501906079908390839080828437600092019190915250505060a082015260405161051a9060079083906020016118de565b60408051601f198184030181529190528051602090910120600055505050565b60405161054e906002908390602001611953565b6040516020818303038152906040528051906020012060001c6000541461057457600080fd5b60008055610588600a610f608301356119b2565b43101561059457600080fd5b341561059f57600080fd5b336105ad60208301836115dd565b6001600160a01b0316146105c057600080fd5b6105cd60208201826115dd565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610608573d6000803e3d6000fd5b507f2347b1e60a1e2e84c800b9cdc2fac525fdea4087790f9a17c9f5a15319ebd07c8160405161063891906117d5565b60405180910390a16000805533ff5b60405161065b90600190839060200161193f565b6040516020818303038152906040528051906020012060001c6000541461068157600080fd5b60008055341561069057600080fd5b3361069e60208301836115dd565b6001600160a01b0316146106b157600080fd5b7f0be81c333ca19821dafae1ca0217dd931ab0c3e5eb95414942172319659e354f816040516106e0919061182c565b60405180910390a16106f06113bd565b6106fd60208301836115dd565b6001600160a01b031681526020808301359082015260408051610f20818101909252906060840190607990839083908082843760009201919091525050506040808301919091524360608301525161075c906002908390602001611968565b60408051601f1981840301815291905280516020909101206000555050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146107b857600080fd5b60008055346020820135146107cc57600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610836604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a00161075c565b6040516108919060079083906020016118c9565b6040516020818303038152906040528051906020012060001c600054146108b757600080fd5b600080556108c36113e9565b34156108ce57600080fd5b336108df60608401604085016115dd565b6001600160a01b0316146108f257600080fd5b6079610fc08301351061090457600080fd5b60408051610f2081810190925261093d9160a085019060799083908390808284376000920191909152505050610fc08401356001610b2d565b815152805160608301356020909101526040517f523f51ce9831d1631726424cb241cf9b7eed624ac418b223348d5aae6bfc087a9061097d90849061181d565b60405180910390a161098d6113fc565b61099a60208401846115dd565b81516001600160a01b03909116905280516020808501359101526109c460608401604085016115dd565b81516001600160a01b03909116604090910152815160208083018051929092529051439101526109f381610bd5565b505050565b604051610a0c906002908390602001611953565b6040516020818303038152906040528051906020012060001c60005414610a3257600080fd5b60008055610a3e6113e9565b610a4e600a610f608401356119b2565b4310610a5957600080fd5b34602083013514610a6957600080fd5b60408051610f2081810183529091840190607990839083908082843760009201919091525050825191909152508051603c6020909101526040517fc74d837ba5913c0af81412efaa0ff448edab3cddf3c2dc60abd6d26f1c36f51990610ad09084906117d5565b60405180910390a1610ae06113fc565b610aed60208401846115dd565b81516001600160a01b039091169052805160208085013591810191909152815133604090910152825181830180519190915251439101526109f381610bd5565b610b3561142c565b60005b6079811015610ba257848160798110610b6157634e487b7160e01b600052603260045260246000fd5b6020020151828260798110610b8657634e487b7160e01b600052603260045260246000fd5b9115156020909202015280610b9a81611a14565b915050610b38565b5081818460798110610bc457634e487b7160e01b600052603260045260246000fd5b911515602090920201529392505050565b610c0b6040518060a001604052806000815260200160001515815260200160008152602001600081526020016000151581525090565b602080830151510151610c2090600b90611a2f565b8152602080830151510151600b11610c4457602080830151510151606e1115610c47565b60015b610c6457805115610c5c578051600a14610c5f565b60015b610c67565b60015b1580156020830152610c7f5760016080820152610ed9565b8060200151610c8f576001610c92565b60005b610c9b57600080fd5b8051602080840151510151600291600b91610cb691906119fd565b610cc091906119ca565b610cca9190611a2f565b60408201819052600290610ce0906001906119b2565b610cea9190611a2f565b6060820152602080830151518051910151610d07906001906119fd565b60798110610d2557634e487b7160e01b600052603260045260246000fd5b6020020151610d35576000610d71565b602080830151518051910151610d4d906001906119b2565b60798110610d6b57634e487b7160e01b600052603260045260246000fd5b60200201515b610d7c576000610dc9565b60208083015151805160608401519190920151610d9b90600b906119fd565b610da591906119fd565b60798110610dc357634e487b7160e01b600052603260045260246000fd5b60200201515b610dd4576000610e21565b60208083015151805160408401519190920151610df390600a906119b2565b610dfd91906119b2565b60798110610e1b57634e487b7160e01b600052603260045260246000fd5b60200201515b610e2c576000610e79565b60208083015151805160608401519190920151610e4b90600a906119fd565b610e5591906119fd565b60798110610e7357634e487b7160e01b600052603260045260246000fd5b60200201515b610e84576000610ed1565b60208083015151805160408401519190920151610ea390600b906119b2565b610ead91906119b2565b60798110610ecb57634e487b7160e01b600052603260045260246000fd5b60200201515b151560808201525b806080015115610f3557610eeb61144b565b82515181516001600160a01b0391821690528351602090810151835182015284516040908101518451931692019190915283015151815160600152610f2f81610f91565b50610f8d565b610f3d61146b565b8251516001600160a01b0390811682528351602090810151818401528451604090810151909216828401528085018051516060850152518101516080840152905161051a91600591849101611866565b5050565b610f996114a5565b81516060015160200151610faf90600b90611a2f565b815281516060015160200151600b11610fd55781516060015160200151606e1115610fd8565b60015b610ff557805115610fed578051600a14610ff0565b60015b610ff8565b60015b15801560208301526110105760016080820152611279565b8060200151611020576001611023565b60005b61102c57600080fd5b805182516060015160200151600291600b9161104891906119fd565b61105291906119ca565b61105c9190611a2f565b60408201819052600290611072906001906119b2565b61107c9190611a2f565b60608083019190915282510151805160209091015161109d906001906119fd565b607981106110bb57634e487b7160e01b600052603260045260246000fd5b60200201516110cb576000611109565b81516060015180516020909101516110e5906001906119b2565b6079811061110357634e487b7160e01b600052603260045260246000fd5b60200201515b611114576000611162565b815160609081015180519183015160209091015161113490600b906119fd565b61113e91906119fd565b6079811061115c57634e487b7160e01b600052603260045260246000fd5b60200201515b61116d5760006111bd565b8151606001518051604083015160209092015190919061118f90600a906119b2565b61119991906119b2565b607981106111b757634e487b7160e01b600052603260045260246000fd5b60200201515b6111c8576000611216565b81516060908101518051918301516020909101516111e890600a906119fd565b6111f291906119fd565b6079811061121057634e487b7160e01b600052603260045260246000fd5b60200201515b611221576000611271565b8151606001518051604083015160209092015190919061124390600b906119b2565b61124d91906119b2565b6079811061126b57634e487b7160e01b600052603260045260246000fd5b60200201515b151560808201525b60a08101805160029081905290516000602091820181905260c08401805191909152518101919091528101516112b3578060c001516112b9565b8060a001515b60e082018190528251805160209091015191516001600160a01b03909116916108fc916112e691906119de565b6040518115909202916000818181858888f1935050505015801561130e573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc8360000151602001518360e001516020015161134091906119de565b6040518115909202916000818181858888f19350505050158015611368573d6000803e3d6000fd5b506000805533ff5b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016113b861142c565b905290565b60408051608081018252600080825260208201529081016113dc61142c565b8152602001600081525090565b60405180602001604052806113b8611539565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016113b861154c565b60405180610f2001604052806079906020820280368337509192915050565b604051806040016040528061145e61155f565b8152600060209091015290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016113dc611539565b6040518061010001604052806000815260200160001515815260200160008152602001600081526020016000151581526020016114f5604051806040016040528060008152602001600081525090565b8152602001611517604051806040016040528060008152602001600081525090565b81526020016113b8604051806040016040528060008152602001600081525090565b60405180604001604052806113dc61142c565b60405180604001604052806113dc611539565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016113b8611539565b80356001600160a01b03811681146115b057600080fd5b919050565b803580151581146115b057600080fd5b6000610fe082840312156115d7578081fd5b50919050565b6000602082840312156115ee578081fd5b6115f782611599565b9392505050565b60006020828403121561160f578081fd5b6115f7826115b5565b6000610fa082840312156115d7578081fd5b6000610fe0828403121561163c578081fd5b6115f783836115c5565b6000604082840312156115d7578081fd5b6000610f8082840312156115d7578081fd5b8060005b60798110156116965761167f826115b5565b15158452602093840193919091019060010161166d565b50505050565b8060005b607981101561169657815115158452602093840193909101906001016116a0565b6001600160a01b03806116d383611599565b16835260208201356020840152806116ed60408401611599565b166040840152506117046060830160608301611669565b610f808181013590830152610fa090810135910152565b6001600160a01b038061172d83611599565b168352602082013560208401528061174760408401611599565b166040840152506060810135606083015260808101356080830152610f8d60a0830160a08301611669565b6001600160a01b0361178382611599565b16825260208181013590830152604090810135910152565b6001600160a01b036117ac82611599565b168252602081013560208301526117c96040830160408301611669565b610f6090810135910152565b610fa081016117e4828461179b565b610f806117f28185016115b5565b1515818401525092915050565b610fe0810161180e82846116c1565b610fc092830135919092015290565b610fe0810161180e828461171b565b610f80810161183b8284611772565b61184b6060830160608501611669565b92915050565b828152610fe081016115f760208301846116c1565b6000610fe08201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516118ac60808401825161169c565b60200151610fa083015260809290920151610fc090910152919050565b828152610fe081016115f7602083018461171b565b6000610fe08201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015161193760c084018261169c565b509392505050565b828152608081016115f76020830184611772565b828152610fa081016115f7602083018461179b565b6000610fa08201905083825260018060a01b03835116602083015260208301516040830152604083015161199f606084018261169c565b506060830151610f808301529392505050565b600082198211156119c5576119c5611a43565b500190565b6000826119d9576119d9611a59565b500490565b60008160001904831182151516156119f8576119f8611a43565b500290565b600082821015611a0f57611a0f611a43565b500390565b6000600019821415611a2857611a28611a43565b5060010190565b600082611a3e57611a3e611a59565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220f9f2999b0735538449b242f648fbc9d23599111cfb89fd5bafbe163f6dfb967064736f6c63430008020033`,
=======
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611914806100826000396000f3fe6080604052600436106100595760003560e01c806318d84c0514610065578063354d7a4a1461007a57806376dcaa631461008d5780639532ef01146100a0578063cb057a12146100b3578063e6c71bac146100c657610060565b3661006057005b600080fd5b6100786100733660046114b7565b6100d9565b005b6100786100883660046114a5565b6104c4565b61007861009b3660046114e4565b6105d1565b6100786100ae3660046114d3565b610705565b6100786100c13660046114b7565b610807565b6100786100d43660046114a5565b610982565b6040516100ed9060059083906020016116de565b6040516020818303038152906040528051906020012060001c6000541461011357600080fd5b6000808055604080516060810182528281526020810183905290810191909152341561013e57600080fd5b3361014c602084018461146a565b6001600160a01b03161461015f57600080fd5b61016f600b610f808401356118a8565b8152600b610f808301351061018d57606e610f808301351015610190565b60015b6101ad578051156101a5578051600a146101a8565b60015b6101b0565b60015b6101bb5760016101be565b60005b6101c757600080fd5b6101d7600b610f80840135611876565b60208201526101ec600b610f8084013561183f565b6040820152606082016102056001610f80850135611876565b6079811061022357634e487b7160e01b600052603260045260246000fd5b602002016020810190610236919061148b565b610241576000610286565b606082016102556001610f8085013561183f565b6079811061027357634e487b7160e01b600052603260045260246000fd5b602002016020810190610286919061148b565b6102915760006102cc565b60208101516060830190607981106102b957634e487b7160e01b600052603260045260246000fd5b6020020160208101906102cc919061148b565b6102d7576000610312565b60408101516060830190607981106102ff57634e487b7160e01b600052603260045260246000fd5b602002016020810190610312919061148b565b61031d576000610364565b602081015160608301906103339060019061183f565b6079811061035157634e487b7160e01b600052603260045260246000fd5b602002016020810190610364919061148b565b61036f5760006103b6565b604081015160608301906103859060019061183f565b607981106103a357634e487b7160e01b600052603260045260246000fd5b6020020160208101906103b6919061148b565b6103c15760016103c4565b60005b6103cd57600080fd5b7f5f47d8d9300994ff50d6045985719591e70e95ff216e6f3d81bd8da8216b2db7826040516103fc919061168c565b60405180910390a161040c6111fd565b610419602084018461146a565b6001600160a01b031681526020808401359082015261043e606084016040850161146a565b6001600160a01b0316604080830191909152610fc08401356060808401919091524360808401528151610f2081810190935291908501906079908390839080828437600092019190915250505060a08201526040516104a490600790839060200161176b565b60408051601f198184030181529190528051602090910120600055505050565b6040516104d89060029083906020016117e0565b6040516020818303038152906040528051906020012060001c600054146104fe57600080fd5b60008055610512600a610f6083013561183f565b43101561051e57600080fd5b341561052957600080fd5b33610537602083018361146a565b6001600160a01b03161461054a57600080fd5b610557602082018261146a565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610592573d6000803e3d6000fd5b507f2347b1e60a1e2e84c800b9cdc2fac525fdea4087790f9a17c9f5a15319ebd07c816040516105c29190611662565b60405180910390a16000805533ff5b6040516105e59060019083906020016117cc565b6040516020818303038152906040528051906020012060001c6000541461060b57600080fd5b60008055341561061a57600080fd5b33610628602083018361146a565b6001600160a01b03161461063b57600080fd5b7f0be81c333ca19821dafae1ca0217dd931ab0c3e5eb95414942172319659e354f8160405161066a91906116b9565b60405180910390a161067a61124a565b610687602083018361146a565b6001600160a01b031681526020808301359082015260408051610f2081810190925290606084019060799083908390808284376000920191909152505050604080830191909152436060830152516106e69060029083906020016117f5565b60408051601f1981840301815291905280516020909101206000555050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461074257600080fd5b600080553460208201351461075657600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16107c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a0016106e6565b60405161081b906007908390602001611756565b6040516020818303038152906040528051906020012060001c6000541461084157600080fd5b6000805561084d611276565b341561085857600080fd5b33610869606084016040850161146a565b6001600160a01b03161461087c57600080fd5b6079610fc08301351061088e57600080fd5b60408051610f208181019092526108c79160a085019060799083908390808284376000920191909152505050610fc08401356001610ab7565b815152805160608301356020909101526040517f523f51ce9831d1631726424cb241cf9b7eed624ac418b223348d5aae6bfc087a906109079084906116aa565b60405180910390a1610917611289565b610924602084018461146a565b81516001600160a01b039091169052805160208085013591015261094e606084016040850161146a565b81516001600160a01b039091166040909101528151602080830180519290925290514391015261097d81610b5f565b505050565b6040516109969060029083906020016117e0565b6040516020818303038152906040528051906020012060001c600054146109bc57600080fd5b600080556109c8611276565b6109d8600a610f6084013561183f565b43106109e357600080fd5b346020830135146109f357600080fd5b60408051610f2081810183529091840190607990839083908082843760009201919091525050825191909152508051603c6020909101526040517fc74d837ba5913c0af81412efaa0ff448edab3cddf3c2dc60abd6d26f1c36f51990610a5a908490611662565b60405180910390a1610a6a611289565b610a77602084018461146a565b81516001600160a01b0390911690528051602080850135918101919091528151336040909101528251818301805191909152514391015261097d81610b5f565b610abf6112b9565b60005b6079811015610b2c57848160798110610aeb57634e487b7160e01b600052603260045260246000fd5b6020020151828260798110610b1057634e487b7160e01b600052603260045260246000fd5b9115156020909202015280610b248161188d565b915050610ac2565b5081818460798110610b4e57634e487b7160e01b600052603260045260246000fd5b911515602090920201529392505050565b610b956040518060a001604052806000815260200160001515815260200160008152602001600081526020016000151581525090565b602080830151510151610baa90600b906118a8565b8152602080830151510151600b11610bce57602080830151510151606e1115610bd1565b60015b610bee57805115610be6578051600a14610be9565b60015b610bf1565b60015b1580156020830152610c095760016080820152610de7565b8060200151610c19576001610c1c565b60005b610c2557600080fd5b602080830151510151610c3a90600b90611876565b6040820152602080830151510151610c5490600b9061183f565b6060820152602080830151518051910151610c7190600190611876565b60798110610c8f57634e487b7160e01b600052603260045260246000fd5b6020020151610c9f576000610cdb565b602080830151518051910151610cb79060019061183f565b60798110610cd557634e487b7160e01b600052603260045260246000fd5b60200201515b610ce6576000610d16565b60208201515151604082015160798110610d1057634e487b7160e01b600052603260045260246000fd5b60200201515b610d21576000610d51565b60208201515151606082015160798110610d4b57634e487b7160e01b600052603260045260246000fd5b60200201515b610d5c576000610d98565b602082015151516040820151610d749060019061183f565b60798110610d9257634e487b7160e01b600052603260045260246000fd5b60200201515b610da3576000610ddf565b602082015151516060820151610dbb9060019061183f565b60798110610dd957634e487b7160e01b600052603260045260246000fd5b60200201515b151560808201525b806080015115610e4357610df96112d8565b82515181516001600160a01b0391821690528351602090810151835182015284516040908101518451931692019190915283015151815160600152610e3d81610e9f565b50610e9b565b610e4b6112f8565b8251516001600160a01b039081168252835160209081015181840152845160409081015190921682840152808501805151606085015251810151608084015290516104a4916005918491016116f3565b5050565b610ea7611332565b81516060015160200151610ebd90600b906118a8565b815281516060015160200151600b11610ee35781516060015160200151606e1115610ee6565b60015b610f0357805115610efb578051600a14610efe565b60015b610f06565b60015b1580156020830152610f1e5760016080820152611106565b8060200151610f2e576001610f31565b60005b610f3a57600080fd5b81516060015160200151610f5090600b90611876565b604082015281516060015160200151610f6b90600b9061183f565b606080830191909152825101518051602090910151610f8c90600190611876565b60798110610faa57634e487b7160e01b600052603260045260246000fd5b6020020151610fba576000610ff8565b8151606001518051602090910151610fd49060019061183f565b60798110610ff257634e487b7160e01b600052603260045260246000fd5b60200201515b611003576000611033565b8151606001515160408201516079811061102d57634e487b7160e01b600052603260045260246000fd5b60200201515b61103e57600061106f565b815160609081015151908201516079811061106957634e487b7160e01b600052603260045260246000fd5b60200201515b61107a5760006110b6565b8151606001515160408201516110929060019061183f565b607981106110b057634e487b7160e01b600052603260045260246000fd5b60200201515b6110c15760006110fe565b815160609081015151908201516110da9060019061183f565b607981106110f857634e487b7160e01b600052603260045260246000fd5b60200201515b151560808201525b60a08101805160029081905290516000602091820181905260c0840180519190915251810191909152810151611140578060c00151611146565b8060a001515b60e082018190528251805160209091015191516001600160a01b03909116916108fc916111739190611857565b6040518115909202916000818181858888f1935050505015801561119b573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc8360000151602001518360e00151602001516111cd9190611857565b6040518115909202916000818181858888f193505050501580156111f5573d6000803e3d6000fd5b506000805533ff5b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016112456112b9565b905290565b60408051608081018252600080825260208201529081016112696112b9565b8152602001600081525090565b60405180602001604052806112456113c6565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016112456113d9565b60405180610f2001604052806079906020820280368337509192915050565b60405180604001604052806112eb6113ec565b8152600060209091015290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016112696113c6565b604051806101000160405280600081526020016000151581526020016000815260200160008152602001600015158152602001611382604051806040016040528060008152602001600081525090565b81526020016113a4604051806040016040528060008152602001600081525090565b8152602001611245604051806040016040528060008152602001600081525090565b60405180604001604052806112696112b9565b60405180604001604052806112696113c6565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016112456113c6565b80356001600160a01b038116811461143d57600080fd5b919050565b8035801515811461143d57600080fd5b6000610fe08284031215611464578081fd5b50919050565b60006020828403121561147b578081fd5b61148482611426565b9392505050565b60006020828403121561149c578081fd5b61148482611442565b6000610fa08284031215611464578081fd5b6000610fe082840312156114c9578081fd5b6114848383611452565b600060408284031215611464578081fd5b6000610f808284031215611464578081fd5b8060005b60798110156115235761150c82611442565b1515845260209384019391909101906001016114fa565b50505050565b8060005b6079811015611523578151151584526020938401939091019060010161152d565b6001600160a01b038061156083611426565b168352602082013560208401528061157a60408401611426565b1660408401525061159160608301606083016114f6565b610f808181013590830152610fa090810135910152565b6001600160a01b03806115ba83611426565b16835260208201356020840152806115d460408401611426565b166040840152506060810135606083015260808101356080830152610e9b60a0830160a083016114f6565b6001600160a01b0361161082611426565b16825260208181013590830152604090810135910152565b6001600160a01b0361163982611426565b1682526020810135602083015261165660408301604083016114f6565b610f6090810135910152565b610fa081016116718284611628565b610f8061167f818501611442565b1515818401525092915050565b610fe0810161169b828461154e565b610fc092830135919092015290565b610fe0810161169b82846115a8565b610f8081016116c882846115ff565b6116d860608301606085016114f6565b92915050565b828152610fe08101611484602083018461154e565b6000610fe08201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152506060830151611739608084018251611529565b60200151610fa083015260809290920151610fc090910152919050565b828152610fe0810161148460208301846115a8565b6000610fe08201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a08301516117c460c0840182611529565b509392505050565b8281526080810161148460208301846115ff565b828152610fa081016114846020830184611628565b6000610fa08201905083825260018060a01b03835116602083015260208301516040830152604083015161182c6060840182611529565b506060830151610f808301529392505050565b60008219821115611852576118526118c8565b500190565b6000816000190483118215151615611871576118716118c8565b500290565b600082821015611888576118886118c8565b500390565b60006000198214156118a1576118a16118c8565b5060010190565b6000826118c357634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea26469706673582212200a7fc80a397a36e3108dd10e918f9fdf40f997fee5a1b72c553c9598c77435c664736f6c63430008020033`,
>>>>>>> 00a83560bda20615ebd79aa869ee63f58c974a7b
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

