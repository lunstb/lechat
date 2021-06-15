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
    at: './index.rsh:122:63:application',
    fs: ['at ./index.rsh:120:13:application call to [unknown function] (defined at: ./index.rsh:120:17:function exp)'],
    msg: 'initRandomBoard',
    who: 'Alice'
    });
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v19, v18], [v18, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 0)]);
    const [v25] = txn1.data;
    const v28 = txn1.time;
    const v24 = txn1.from;
    
    sim_r.txns.push({
      amt: v25,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:126:15:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v25, v28]);
    sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:126:15:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v25]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:126:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v25] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 2), [ctc4, ctc0, ctc0, ctc2], [v24, v25, v28, v23], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 1), v24, v25, v28]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 1), v24, v25]);
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
      at: './index.rsh:128:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:129:15:after expr stmt semicolon', stdlib.UInt_max, 2), v24, v25, v30, v33]);
    sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:129:15:after expr stmt semicolon', stdlib.UInt_max, 2), v24, v25, v30]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:129:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v30] = txn2.data;
  const v33 = txn2.time;
  const v29 = txn2.from;
  ;
  const v32 = stdlib.addressEq(v24, v29);
  stdlib.assert(v32, {
    at: './index.rsh:128:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv(3, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:109:18:decimal', stdlib.UInt_max, 10)));
  if (txn3.didTimeout) {
    
    const txn4 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc2, ctc0], [v24, v25, v30, v33], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v24, v25, v30, v33]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v24, v25, v30]);
      const [] = txn4.data;
      const v344 = txn4.time;
      const v341 = txn4.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v343 = stdlib.addressEq(v24, v341);
      stdlib.assert(v343, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:135:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    const v344 = txn4.time;
    const v341 = txn4.from;
    ;
    const v343 = stdlib.addressEq(v24, v341);
    stdlib.assert(v343, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:135:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc10, await interact.informTimeout(), {
      at: './index.rsh:118:33:application',
      fs: ['at ./index.rsh:117:13:application call to [unknown function] (defined at: ./index.rsh:117:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:135:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
        }
      else {
        const v78 = v62 ? false : true;
        stdlib.assert(v78, {
          at: './index.rsh:32:10:application',
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
        msg: 'getMove',
        who: 'Alice'
        });
      
      
      const txn4 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:146:12:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc4, ctc7, ctc0, ctc0], [v24, v25, v37, v43, v359, v128], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:146:12:dot', stdlib.UInt_max, 5), v24, v25, v37, v43, v359]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:146:12:dot', stdlib.UInt_max, 5), v24, v25, v37, v43]);
        const [v131] = txn4.data;
        const v134 = txn4.time;
        const v130 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v133 = stdlib.addressEq(v24, v130);
        stdlib.assert(v133, {
          at: './index.rsh:146:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
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
          at: './index.rsh:32:10:application',
          fs: ['at ./index.rsh:65:22:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:148:37:application call to "applyCatMove" (defined at: ./index.rsh:64:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
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
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      const [v131] = txn4.data;
      const v134 = txn4.time;
      const v130 = txn4.from;
      ;
      const v133 = stdlib.addressEq(v24, v130);
      stdlib.assert(v133, {
        at: './index.rsh:146:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
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
        at: './index.rsh:32:10:application',
        fs: ['at ./index.rsh:65:22:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:148:37:application call to "applyCatMove" (defined at: ./index.rsh:64:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
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
      const txn5 = await (ctc.recv(8, 1, [ctc0], false, false));
      const [v204] = txn5.data;
      const v207 = txn5.time;
      const v203 = txn5.from;
      ;
      const v206 = stdlib.addressEq(v37, v203);
      stdlib.assert(v206, {
        at: './index.rsh:153:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
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
      
      continue;
      
      }
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
        at: './index.rsh:32:10:application',
        fs: ['at ./index.rsh:159:47:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)'],
        msg: null,
        who: 'Alice'
        });
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
    at: './index.rsh:128:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.acceptWager(v25), {
    at: './index.rsh:132:29:application',
    fs: ['at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  
  const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('./index.rsh:134:9:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc2, ctc0], [v24, v25, v30, v33], [v25, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:109:18:decimal', stdlib.UInt_max, 10), (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:134:9:dot', stdlib.UInt_max, 2), v24, v25, v30, v33]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:134:9:dot', stdlib.UInt_max, 2), v24, v25, v30]);
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
        }
      else {
        const v78 = v62 ? false : true;
        stdlib.assert(v78, {
          at: './index.rsh:32:10:application',
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
          at: './index.rsh:32:10:application',
          fs: ['at ./index.rsh:159:47:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)'],
          msg: null,
          who: 'Bob'
          });
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
        kind: 'from',
        to: v24,
        tok: undefined
        });
      const v303 = stdlib.mul(v297, v25);
      sim_r.txns.push({
        amt: v303,
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
      sim_r.view = [ctc9, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.recv(4, 0, [], false, false));
    const [] = txn4.data;
    const v344 = txn4.time;
    const v341 = txn4.from;
    ;
    const v343 = stdlib.addressEq(v24, v341);
    stdlib.assert(v343, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:135:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:118:33:application',
      fs: ['at ./index.rsh:117:13:application call to [unknown function] (defined at: ./index.rsh:117:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:116:32:function exp)', 'at ./index.rsh:135:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
        }
      else {
        const v78 = v62 ? false : true;
        stdlib.assert(v78, {
          at: './index.rsh:32:10:application',
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
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
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
        at: './index.rsh:32:10:application',
        fs: ['at ./index.rsh:65:22:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)', 'at ./index.rsh:148:37:application call to "applyCatMove" (defined at: ./index.rsh:64:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
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
        msg: null,
        who: 'Bob'
        });
      
      
      const txn5 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:153:11:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc0, ctc0, ctc2, ctc0], [v24, v25, v37, v131, v134, v152, v200], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn5) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:153:11:dot', stdlib.UInt_max, 7), v24, v25, v37, v131, v134, v152]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:153:11:dot', stdlib.UInt_max, 7), v24, v25, v37, v131, v152]);
        const [v204] = txn5.data;
        const v207 = txn5.time;
        const v203 = txn5.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v206 = stdlib.addressEq(v37, v203);
        stdlib.assert(v206, {
          at: './index.rsh:153:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
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
              }
            else {
              const v78 = v62 ? false : true;
              stdlib.assert(v78, {
                at: './index.rsh:32:10:application',
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
                at: './index.rsh:32:10:application',
                fs: ['at ./index.rsh:159:47:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)'],
                msg: null,
                who: 'Bob'
                });
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
              kind: 'from',
              to: v24,
              tok: undefined
              });
            const v303 = stdlib.mul(v297, v25);
            sim_r.txns.push({
              amt: v303,
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
            sim_r.view = [ctc9, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [v204] = txn5.data;
      const v207 = txn5.time;
      const v203 = txn5.from;
      ;
      const v206 = stdlib.addressEq(v37, v203);
      stdlib.assert(v206, {
        at: './index.rsh:153:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
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
      
      continue;
      
      }
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
        at: './index.rsh:32:10:application',
        fs: ['at ./index.rsh:159:47:application call to "catBlocked" (defined at: ./index.rsh:31:25:function exp)'],
        msg: null,
        who: 'Bob'
        });
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
// "./index.rsh:124:9:dot"
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
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:128:9:dot"
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
// "./index.rsh:134:9:dot"
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
// "[at ./index.rsh:86:38:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp),at ./index.rsh:142:24:application call to \"gameOver\" (defined at: ./index.rsh:85:1:function exp),at ./index.rsh:142:14:application call to [unknown function] (defined at: ./index.rsh:142:14:function exp)]"
load 249
!
assert
load 252
substring 0 121
store 247
load 251
int 11
-
store 246
load 251
int 11
+
store 245
load 247
load 251
int 1
-
getbyte
load 247
load 251
int 1
+
getbyte
&&
load 247
load 246
getbyte
&&
load 247
load 245
getbyte
&&
load 247
load 246
int 1
+
getbyte
&&
load 247
load 245
int 1
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
// "[at ./index.rsh:159:47:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp)]"
load 249
!
assert
load 252
substring 0 121
store 246
load 251
int 11
-
store 245
load 251
int 11
+
store 244
load 246
load 251
int 1
-
getbyte
load 246
load 251
int 1
+
getbyte
&&
load 246
load 245
getbyte
&&
load 246
load 244
getbyte
&&
load 246
load 245
int 1
+
getbyte
&&
load 246
load 244
int 1
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
// "[at ./index.rsh:135:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:135:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:146:12:dot"
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
// "./index.rsh:146:12:dot"
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
// "[at ./index.rsh:65:22:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp),at ./index.rsh:148:37:application call to \"applyCatMove\" (defined at: ./index.rsh:64:1:function exp)]"
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
load 252
substring 0 121
store 248
load 250
int 11
-
store 247
load 250
int 11
+
store 246
// Nothing
// "./index.rsh:65:10:application"
// "[at ./index.rsh:148:37:application call to \"applyCatMove\" (defined at: ./index.rsh:64:1:function exp)]"
load 248
load 250
int 1
-
getbyte
load 248
load 250
int 1
+
getbyte
&&
load 248
load 247
getbyte
&&
load 248
load 246
getbyte
&&
load 248
load 247
int 1
+
getbyte
&&
load 248
load 246
int 1
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
load 248
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
// "./index.rsh:153:11:dot"
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
// "./index.rsh:153:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "./index.rsh:75:10:application"
// "[at ./index.rsh:155:33:application call to \"applyBlockerMove\" (defined at: ./index.rsh:73:1:function exp)]"
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
// "[at ./index.rsh:86:38:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp),at ./index.rsh:142:24:application call to \"gameOver\" (defined at: ./index.rsh:85:1:function exp),at ./index.rsh:142:14:application call to [unknown function] (defined at: ./index.rsh:142:14:function exp)]"
load 246
!
assert
load 249
substring 0 121
store 244
load 248
int 11
-
store 243
load 248
int 11
+
store 242
load 244
load 248
int 1
-
getbyte
load 244
load 248
int 1
+
getbyte
&&
load 244
load 243
getbyte
&&
load 244
load 242
getbyte
&&
load 244
load 243
int 1
+
getbyte
&&
load 244
load 242
int 1
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
// "[at ./index.rsh:159:47:application call to \"catBlocked\" (defined at: ./index.rsh:31:25:function exp)]"
load 246
!
assert
load 249
substring 0 121
store 243
load 248
int 11
-
store 242
load 248
int 11
+
store 241
load 243
load 248
int 1
-
getbyte
load 243
load 248
int 1
+
getbyte
&&
load 243
load 242
getbyte
&&
load 243
load 241
getbyte
&&
load 243
load 242
int 1
+
getbyte
&&
load 243
load 241
int 1
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
                "name": "v359",
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
                "name": "v131",
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
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v134",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v152",
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
                "name": "v204",
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
                "name": "v359",
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
                "name": "v131",
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
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v134",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v152",
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
                "name": "v204",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611914806100826000396000f3fe6080604052600436106100595760003560e01c806318d84c0514610065578063354d7a4a1461007a57806376dcaa631461008d5780639532ef01146100a0578063cb057a12146100b3578063e6c71bac146100c657610060565b3661006057005b600080fd5b6100786100733660046114b7565b6100d9565b005b6100786100883660046114a5565b6104c4565b61007861009b3660046114e4565b6105d1565b6100786100ae3660046114d3565b610705565b6100786100c13660046114b7565b610807565b6100786100d43660046114a5565b610982565b6040516100ed9060059083906020016116de565b6040516020818303038152906040528051906020012060001c6000541461011357600080fd5b6000808055604080516060810182528281526020810183905290810191909152341561013e57600080fd5b3361014c602084018461146a565b6001600160a01b03161461015f57600080fd5b61016f600b610f808401356118a8565b8152600b610f808301351061018d57606e610f808301351015610190565b60015b6101ad578051156101a5578051600a146101a8565b60015b6101b0565b60015b6101bb5760016101be565b60005b6101c757600080fd5b6101d7600b610f80840135611876565b60208201526101ec600b610f8084013561183f565b6040820152606082016102056001610f80850135611876565b6079811061022357634e487b7160e01b600052603260045260246000fd5b602002016020810190610236919061148b565b610241576000610286565b606082016102556001610f8085013561183f565b6079811061027357634e487b7160e01b600052603260045260246000fd5b602002016020810190610286919061148b565b6102915760006102cc565b60208101516060830190607981106102b957634e487b7160e01b600052603260045260246000fd5b6020020160208101906102cc919061148b565b6102d7576000610312565b60408101516060830190607981106102ff57634e487b7160e01b600052603260045260246000fd5b602002016020810190610312919061148b565b61031d576000610364565b602081015160608301906103339060019061183f565b6079811061035157634e487b7160e01b600052603260045260246000fd5b602002016020810190610364919061148b565b61036f5760006103b6565b604081015160608301906103859060019061183f565b607981106103a357634e487b7160e01b600052603260045260246000fd5b6020020160208101906103b6919061148b565b6103c15760016103c4565b60005b6103cd57600080fd5b7f5f47d8d9300994ff50d6045985719591e70e95ff216e6f3d81bd8da8216b2db7826040516103fc919061168c565b60405180910390a161040c6111fd565b610419602084018461146a565b6001600160a01b031681526020808401359082015261043e606084016040850161146a565b6001600160a01b0316604080830191909152610fc08401356060808401919091524360808401528151610f2081810190935291908501906079908390839080828437600092019190915250505060a08201526040516104a490600790839060200161176b565b60408051601f198184030181529190528051602090910120600055505050565b6040516104d89060029083906020016117e0565b6040516020818303038152906040528051906020012060001c600054146104fe57600080fd5b60008055610512600a610f6083013561183f565b43101561051e57600080fd5b341561052957600080fd5b33610537602083018361146a565b6001600160a01b03161461054a57600080fd5b610557602082018261146a565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610592573d6000803e3d6000fd5b507f2347b1e60a1e2e84c800b9cdc2fac525fdea4087790f9a17c9f5a15319ebd07c816040516105c29190611662565b60405180910390a16000805533ff5b6040516105e59060019083906020016117cc565b6040516020818303038152906040528051906020012060001c6000541461060b57600080fd5b60008055341561061a57600080fd5b33610628602083018361146a565b6001600160a01b03161461063b57600080fd5b7f0be81c333ca19821dafae1ca0217dd931ab0c3e5eb95414942172319659e354f8160405161066a91906116b9565b60405180910390a161067a61124a565b610687602083018361146a565b6001600160a01b031681526020808301359082015260408051610f2081810190925290606084019060799083908390808284376000920191909152505050604080830191909152436060830152516106e69060029083906020016117f5565b60408051601f1981840301815291905280516020909101206000555050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461074257600080fd5b600080553460208201351461075657600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16107c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a0016106e6565b60405161081b906007908390602001611756565b6040516020818303038152906040528051906020012060001c6000541461084157600080fd5b6000805561084d611276565b341561085857600080fd5b33610869606084016040850161146a565b6001600160a01b03161461087c57600080fd5b6079610fc08301351061088e57600080fd5b60408051610f208181019092526108c79160a085019060799083908390808284376000920191909152505050610fc08401356001610ab7565b815152805160608301356020909101526040517f523f51ce9831d1631726424cb241cf9b7eed624ac418b223348d5aae6bfc087a906109079084906116aa565b60405180910390a1610917611289565b610924602084018461146a565b81516001600160a01b039091169052805160208085013591015261094e606084016040850161146a565b81516001600160a01b039091166040909101528151602080830180519290925290514391015261097d81610b5f565b505050565b6040516109969060029083906020016117e0565b6040516020818303038152906040528051906020012060001c600054146109bc57600080fd5b600080556109c8611276565b6109d8600a610f6084013561183f565b43106109e357600080fd5b346020830135146109f357600080fd5b60408051610f2081810183529091840190607990839083908082843760009201919091525050825191909152508051603c6020909101526040517fc74d837ba5913c0af81412efaa0ff448edab3cddf3c2dc60abd6d26f1c36f51990610a5a908490611662565b60405180910390a1610a6a611289565b610a77602084018461146a565b81516001600160a01b0390911690528051602080850135918101919091528151336040909101528251818301805191909152514391015261097d81610b5f565b610abf6112b9565b60005b6079811015610b2c57848160798110610aeb57634e487b7160e01b600052603260045260246000fd5b6020020151828260798110610b1057634e487b7160e01b600052603260045260246000fd5b9115156020909202015280610b248161188d565b915050610ac2565b5081818460798110610b4e57634e487b7160e01b600052603260045260246000fd5b911515602090920201529392505050565b610b956040518060a001604052806000815260200160001515815260200160008152602001600081526020016000151581525090565b602080830151510151610baa90600b906118a8565b8152602080830151510151600b11610bce57602080830151510151606e1115610bd1565b60015b610bee57805115610be6578051600a14610be9565b60015b610bf1565b60015b1580156020830152610c095760016080820152610de7565b8060200151610c19576001610c1c565b60005b610c2557600080fd5b602080830151510151610c3a90600b90611876565b6040820152602080830151510151610c5490600b9061183f565b6060820152602080830151518051910151610c7190600190611876565b60798110610c8f57634e487b7160e01b600052603260045260246000fd5b6020020151610c9f576000610cdb565b602080830151518051910151610cb79060019061183f565b60798110610cd557634e487b7160e01b600052603260045260246000fd5b60200201515b610ce6576000610d16565b60208201515151604082015160798110610d1057634e487b7160e01b600052603260045260246000fd5b60200201515b610d21576000610d51565b60208201515151606082015160798110610d4b57634e487b7160e01b600052603260045260246000fd5b60200201515b610d5c576000610d98565b602082015151516040820151610d749060019061183f565b60798110610d9257634e487b7160e01b600052603260045260246000fd5b60200201515b610da3576000610ddf565b602082015151516060820151610dbb9060019061183f565b60798110610dd957634e487b7160e01b600052603260045260246000fd5b60200201515b151560808201525b806080015115610e4357610df96112d8565b82515181516001600160a01b0391821690528351602090810151835182015284516040908101518451931692019190915283015151815160600152610e3d81610e9f565b50610e9b565b610e4b6112f8565b8251516001600160a01b039081168252835160209081015181840152845160409081015190921682840152808501805151606085015251810151608084015290516104a4916005918491016116f3565b5050565b610ea7611332565b81516060015160200151610ebd90600b906118a8565b815281516060015160200151600b11610ee35781516060015160200151606e1115610ee6565b60015b610f0357805115610efb578051600a14610efe565b60015b610f06565b60015b1580156020830152610f1e5760016080820152611106565b8060200151610f2e576001610f31565b60005b610f3a57600080fd5b81516060015160200151610f5090600b90611876565b604082015281516060015160200151610f6b90600b9061183f565b606080830191909152825101518051602090910151610f8c90600190611876565b60798110610faa57634e487b7160e01b600052603260045260246000fd5b6020020151610fba576000610ff8565b8151606001518051602090910151610fd49060019061183f565b60798110610ff257634e487b7160e01b600052603260045260246000fd5b60200201515b611003576000611033565b8151606001515160408201516079811061102d57634e487b7160e01b600052603260045260246000fd5b60200201515b61103e57600061106f565b815160609081015151908201516079811061106957634e487b7160e01b600052603260045260246000fd5b60200201515b61107a5760006110b6565b8151606001515160408201516110929060019061183f565b607981106110b057634e487b7160e01b600052603260045260246000fd5b60200201515b6110c15760006110fe565b815160609081015151908201516110da9060019061183f565b607981106110f857634e487b7160e01b600052603260045260246000fd5b60200201515b151560808201525b60a08101805160029081905290516000602091820181905260c0840180519190915251810191909152810151611140578060c00151611146565b8060a001515b60e082018190528251805160209091015191516001600160a01b03909116916108fc916111739190611857565b6040518115909202916000818181858888f1935050505015801561119b573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc8360000151602001518360e00151602001516111cd9190611857565b6040518115909202916000818181858888f193505050501580156111f5573d6000803e3d6000fd5b506000805533ff5b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016112456112b9565b905290565b60408051608081018252600080825260208201529081016112696112b9565b8152602001600081525090565b60405180602001604052806112456113c6565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016112456113d9565b60405180610f2001604052806079906020820280368337509192915050565b60405180604001604052806112eb6113ec565b8152600060209091015290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016112696113c6565b604051806101000160405280600081526020016000151581526020016000815260200160008152602001600015158152602001611382604051806040016040528060008152602001600081525090565b81526020016113a4604051806040016040528060008152602001600081525090565b8152602001611245604051806040016040528060008152602001600081525090565b60405180604001604052806112696112b9565b60405180604001604052806112696113c6565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016112456113c6565b80356001600160a01b038116811461143d57600080fd5b919050565b8035801515811461143d57600080fd5b6000610fe08284031215611464578081fd5b50919050565b60006020828403121561147b578081fd5b61148482611426565b9392505050565b60006020828403121561149c578081fd5b61148482611442565b6000610fa08284031215611464578081fd5b6000610fe082840312156114c9578081fd5b6114848383611452565b600060408284031215611464578081fd5b6000610f808284031215611464578081fd5b8060005b60798110156115235761150c82611442565b1515845260209384019391909101906001016114fa565b50505050565b8060005b6079811015611523578151151584526020938401939091019060010161152d565b6001600160a01b038061156083611426565b168352602082013560208401528061157a60408401611426565b1660408401525061159160608301606083016114f6565b610f808181013590830152610fa090810135910152565b6001600160a01b03806115ba83611426565b16835260208201356020840152806115d460408401611426565b166040840152506060810135606083015260808101356080830152610e9b60a0830160a083016114f6565b6001600160a01b0361161082611426565b16825260208181013590830152604090810135910152565b6001600160a01b0361163982611426565b1682526020810135602083015261165660408301604083016114f6565b610f6090810135910152565b610fa081016116718284611628565b610f8061167f818501611442565b1515818401525092915050565b610fe0810161169b828461154e565b610fc092830135919092015290565b610fe0810161169b82846115a8565b610f8081016116c882846115ff565b6116d860608301606085016114f6565b92915050565b828152610fe08101611484602083018461154e565b6000610fe08201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152506060830151611739608084018251611529565b60200151610fa083015260809290920151610fc090910152919050565b828152610fe0810161148460208301846115a8565b6000610fe08201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a08301516117c460c0840182611529565b509392505050565b8281526080810161148460208301846115ff565b828152610fa081016114846020830184611628565b6000610fa08201905083825260018060a01b03835116602083015260208301516040830152604083015161182c6060840182611529565b506060830151610f808301529392505050565b60008219821115611852576118526118c8565b500190565b6000816000190483118215151615611871576118716118c8565b500290565b600082821015611888576118886118c8565b500390565b60006000198214156118a1576118a16118c8565b5060010190565b6000826118c357634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea26469706673582212200a7fc80a397a36e3108dd10e918f9fdf40f997fee5a1b72c553c9598c77435c664736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

