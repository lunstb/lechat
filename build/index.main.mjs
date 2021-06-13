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
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 121));
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc0, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc4]);
  const ctc7 = stdlib.T_Object({
    blockers: ctc4,
    catIndex: ctc0
    });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc7, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc7]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc2, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.setWager, null);
  
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:138:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v19, v18], [v18, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:138:9:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:138:9:dot', stdlib.UInt_max, 0)]);
    const [v24] = txn1.data;
    const v27 = txn1.time;
    const v23 = txn1.from;
    
    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:140:15:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24, v27]);
    sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:140:15:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24]);
    sim_r.view = [ctc1, [stdlib.checkedBigNumberify('./index.rsh:140:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:125:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc2, ctc0, ctc0], [v23, v24, v27], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v23, v24, v27]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v23, v24]);
      const [] = txn3.data;
      const v335 = txn3.time;
      const v332 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v334 = stdlib.addressEq(v23, v332);
      stdlib.assert(v334, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:146:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v24,
        kind: 'from',
        to: v23,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc11, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
      sim_r.view = [ctc1, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v335 = txn3.time;
    const v332 = txn3.from;
    ;
    const v334 = stdlib.addressEq(v23, v332);
    stdlib.assert(v334, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:146:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc10, await interact.informTimeout(), {
      at: './index.rsh:134:33:application',
      fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:132:32:function exp)', 'at ./index.rsh:146:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v34 = txn2.time;
    const v31 = txn2.from;
    ;
    const v38 = [false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false];
    const v39 = {
      blockers: v38,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:29:18:decimal', stdlib.UInt_max, 60)
      };
    let v37 = v39;
    let v350 = v34;
    
    while ((() => {
      const v45 = v37.catIndex;
      const v46 = stdlib.lt(v45, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v47 = stdlib.ge(v45, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
      const v48 = v46 ? true : v47;
      const v49 = stdlib.mod(v45, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v50 = stdlib.eq(v49, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
      const v52 = stdlib.eq(v49, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
      const v53 = v50 ? true : v52;
      const v54 = v48 ? true : v53;
      let v110;
      if (v54) {
        v110 = true;
        }
      else {
        const v70 = v54 ? false : true;
        stdlib.assert(v70, {
          at: './index.rsh:49:10:application',
          fs: ['at ./index.rsh:103:38:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)', 'at ./index.rsh:153:24:application call to "gameOver" (defined at: ./index.rsh:102:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v72 = v37.blockers;
        const v74 = stdlib.sub(v45, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
        const v76 = v72[v74];
        const v79 = stdlib.add(v45, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
        const v81 = v72[v79];
        const v82 = v76 ? v81 : false;
        const v85 = stdlib.sub(v45, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v87 = v72[v85];
        const v88 = v82 ? v87 : false;
        const v91 = stdlib.add(v45, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v93 = v72[v91];
        const v94 = v88 ? v93 : false;
        const v98 = stdlib.add(v85, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
        const v100 = v72[v98];
        const v101 = v94 ? v100 : false;
        const v105 = stdlib.add(v91, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
        const v107 = v72[v105];
        const v108 = v101 ? v107 : false;
        v110 = v108;
        }
      const v113 = v110 ? false : true;
      
      return v113;})()) {
      const v119 = stdlib.protect(ctc0, await interact.getMove(v37), {
        at: './index.rsh:61:36:application',
        fs: ['at ./index.rsh:156:43:application call to "getValidCatMove" (defined at: ./index.rsh:58:1:function exp)', 'at ./index.rsh:155:16:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)'],
        msg: 'getMove',
        who: 'Alice'
        });
      
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:157:12:dot', stdlib.UInt_max, 4), [ctc2, ctc0, ctc2, ctc7, ctc0, ctc0], [v23, v24, v31, v37, v350, v119], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:157:12:dot', stdlib.UInt_max, 4), v23, v24, v31, v37, v350]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:157:12:dot', stdlib.UInt_max, 4), v23, v24, v31, v37]);
        const [v122] = txn3.data;
        const v125 = txn3.time;
        const v121 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v124 = stdlib.addressEq(v23, v121);
        stdlib.assert(v124, {
          at: './index.rsh:157:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v129 = v37.catIndex;
        const v130 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v131 = stdlib.ge(v129, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
        const v132 = v130 ? true : v131;
        const v133 = stdlib.mod(v129, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
        const v134 = stdlib.eq(v133, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
        const v136 = stdlib.eq(v133, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
        const v137 = v134 ? true : v136;
        const v138 = v132 ? true : v137;
        const v141 = v138 ? false : true;
        stdlib.assert(v141, {
          at: './index.rsh:49:10:application',
          fs: ['at ./index.rsh:82:22:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)', 'at ./index.rsh:159:37:application call to "applyCatMove" (defined at: ./index.rsh:81:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v143 = v37.blockers;
        const v145 = stdlib.sub(v129, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
        const v147 = v143[v145];
        const v150 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
        const v152 = v143[v150];
        const v153 = v147 ? v152 : false;
        const v156 = stdlib.sub(v129, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v158 = v143[v156];
        const v159 = v153 ? v158 : false;
        const v162 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v164 = v143[v162];
        const v165 = v159 ? v164 : false;
        const v169 = stdlib.add(v156, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
        const v171 = v143[v169];
        const v172 = v165 ? v171 : false;
        const v176 = stdlib.add(v162, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
        const v178 = v143[v176];
        const v179 = v172 ? v178 : false;
        const v182 = v179 ? false : true;
        stdlib.assert(v182, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:159:37:application call to "applyCatMove" (defined at: ./index.rsh:81:1:function exp)'],
          msg: null,
          who: 'Alice'
          });
        sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:160:18:after expr stmt semicolon', stdlib.UInt_max, 6), v23, v24, v31, v122, v125, v143]);
        sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:160:18:after expr stmt semicolon', stdlib.UInt_max, 6), v23, v24, v31, v122, v143]);
        sim_r.view = [ctc1, [stdlib.checkedBigNumberify('./index.rsh:160:18:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      const [v122] = txn3.data;
      const v125 = txn3.time;
      const v121 = txn3.from;
      ;
      const v124 = stdlib.addressEq(v23, v121);
      stdlib.assert(v124, {
        at: './index.rsh:157:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v129 = v37.catIndex;
      const v130 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v131 = stdlib.ge(v129, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
      const v132 = v130 ? true : v131;
      const v133 = stdlib.mod(v129, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v134 = stdlib.eq(v133, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
      const v136 = stdlib.eq(v133, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
      const v137 = v134 ? true : v136;
      const v138 = v132 ? true : v137;
      const v141 = v138 ? false : true;
      stdlib.assert(v141, {
        at: './index.rsh:49:10:application',
        fs: ['at ./index.rsh:82:22:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)', 'at ./index.rsh:159:37:application call to "applyCatMove" (defined at: ./index.rsh:81:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v143 = v37.blockers;
      const v145 = stdlib.sub(v129, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
      const v147 = v143[v145];
      const v150 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
      const v152 = v143[v150];
      const v153 = v147 ? v152 : false;
      const v156 = stdlib.sub(v129, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v158 = v143[v156];
      const v159 = v153 ? v158 : false;
      const v162 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v164 = v143[v162];
      const v165 = v159 ? v164 : false;
      const v169 = stdlib.add(v156, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
      const v171 = v143[v169];
      const v172 = v165 ? v171 : false;
      const v176 = stdlib.add(v162, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
      const v178 = v143[v176];
      const v179 = v172 ? v178 : false;
      const v182 = v179 ? false : true;
      stdlib.assert(v182, {
        at: './index.rsh:82:10:application',
        fs: ['at ./index.rsh:159:37:application call to "applyCatMove" (defined at: ./index.rsh:81:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const txn4 = await (ctc.recv(7, 1, [ctc0], false, false));
      const [v195] = txn4.data;
      const v198 = txn4.time;
      const v194 = txn4.from;
      ;
      const v197 = stdlib.addressEq(v31, v194);
      stdlib.assert(v197, {
        at: './index.rsh:164:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v200 = stdlib.lt(v195, stdlib.checkedBigNumberify('./index.rsh:92:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v200, {
        at: './index.rsh:92:10:application',
        fs: ['at ./index.rsh:166:33:application call to "applyBlockerMove" (defined at: ./index.rsh:90:1:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v202 = stdlib.Array_set(v143, v195, true);
      const v204 = {
        blockers: v202,
        catIndex: v122
        };
      const cv37 = v204;
      const cv350 = v198;
      
      v37 = cv37;
      v350 = cv350;
      
      continue;
      
      }
    const v206 = v37.catIndex;
    const v207 = stdlib.lt(v206, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v208 = stdlib.ge(v206, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
    const v209 = v207 ? true : v208;
    const v210 = stdlib.mod(v206, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v211 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
    const v213 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
    const v214 = v211 ? true : v213;
    const v215 = v209 ? true : v214;
    let v271;
    if (v215) {
      v271 = true;
      }
    else {
      const v231 = v215 ? false : true;
      stdlib.assert(v231, {
        at: './index.rsh:49:10:application',
        fs: ['at ./index.rsh:170:47:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v233 = v37.blockers;
      const v235 = stdlib.sub(v206, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
      const v237 = v233[v235];
      const v240 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
      const v242 = v233[v240];
      const v243 = v237 ? v242 : false;
      const v246 = stdlib.sub(v206, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v248 = v233[v246];
      const v249 = v243 ? v248 : false;
      const v252 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v254 = v233[v252];
      const v255 = v249 ? v254 : false;
      const v259 = stdlib.add(v246, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
      const v261 = v233[v259];
      const v262 = v255 ? v261 : false;
      const v266 = stdlib.add(v252, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
      const v268 = v233[v266];
      const v269 = v262 ? v268 : false;
      v271 = v269;
      }
    const v284 = [stdlib.checkedBigNumberify('./index.rsh:171:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:171:53:decimal', stdlib.UInt_max, 0)];
    const v285 = [stdlib.checkedBigNumberify('./index.rsh:171:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:171:62:decimal', stdlib.UInt_max, 2)];
    const v286 = v215 ? v284 : v285;
    const v287 = v286[stdlib.checkedBigNumberify('./index.rsh:171:15:array', stdlib.UInt_max, 0)];
    const v288 = v286[stdlib.checkedBigNumberify('./index.rsh:171:15:array', stdlib.UInt_max, 1)];
    const v289 = stdlib.mul(v287, v24);
    ;
    const v294 = stdlib.mul(v288, v24);
    ;
    stdlib.protect(ctc10, await interact.outcome(v215), {
      at: './index.rsh:177:25:application',
      fs: ['at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:23:function exp)'],
      msg: 'outcome',
      who: 'Alice'
      });
    
    return;}
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 121));
  const ctc6 = stdlib.T_Object({
    blockers: ctc5,
    catIndex: ctc0
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc3, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v24), {
    at: './index.rsh:143:29:application',
    fs: ['at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:145:9:dot', stdlib.UInt_max, 2), [ctc3, ctc0, ctc0], [v23, v24, v27], [v24, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:125:18:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:145:9:dot', stdlib.UInt_max, 1), v23, v24, v27]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:145:9:dot', stdlib.UInt_max, 1), v23, v24]);
    const [] = txn2.data;
    const v34 = txn2.time;
    const v31 = txn2.from;
    
    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
      });
    const v38 = [false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false];
    const v39 = {
      blockers: v38,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:29:18:decimal', stdlib.UInt_max, 60)
      };
    const v37 = v39;
    const v350 = v34;
    
    if ((() => {
      const v45 = v37.catIndex;
      const v46 = stdlib.lt(v45, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v47 = stdlib.ge(v45, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
      const v48 = v46 ? true : v47;
      const v49 = stdlib.mod(v45, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v50 = stdlib.eq(v49, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
      const v52 = stdlib.eq(v49, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
      const v53 = v50 ? true : v52;
      const v54 = v48 ? true : v53;
      let v110;
      if (v54) {
        v110 = true;
        }
      else {
        const v70 = v54 ? false : true;
        stdlib.assert(v70, {
          at: './index.rsh:49:10:application',
          fs: ['at ./index.rsh:103:38:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)', 'at ./index.rsh:153:24:application call to "gameOver" (defined at: ./index.rsh:102:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v72 = v37.blockers;
        const v74 = stdlib.sub(v45, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
        const v76 = v72[v74];
        const v79 = stdlib.add(v45, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
        const v81 = v72[v79];
        const v82 = v76 ? v81 : false;
        const v85 = stdlib.sub(v45, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v87 = v72[v85];
        const v88 = v82 ? v87 : false;
        const v91 = stdlib.add(v45, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v93 = v72[v91];
        const v94 = v88 ? v93 : false;
        const v98 = stdlib.add(v85, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
        const v100 = v72[v98];
        const v101 = v94 ? v100 : false;
        const v105 = stdlib.add(v91, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
        const v107 = v72[v105];
        const v108 = v101 ? v107 : false;
        v110 = v108;
        }
      const v113 = v110 ? false : true;
      
      return v113;})()) {
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:154:19:after expr stmt semicolon', stdlib.UInt_max, 4), v23, v24, v31, v37, v350]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:154:19:after expr stmt semicolon', stdlib.UInt_max, 4), v23, v24, v31, v37]);
      sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:154:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v206 = v37.catIndex;
      const v207 = stdlib.lt(v206, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v208 = stdlib.ge(v206, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
      const v209 = v207 ? true : v208;
      const v210 = stdlib.mod(v206, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v211 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
      const v213 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
      const v214 = v211 ? true : v213;
      const v215 = v209 ? true : v214;
      let v271;
      if (v215) {
        v271 = true;
        }
      else {
        const v231 = v215 ? false : true;
        stdlib.assert(v231, {
          at: './index.rsh:49:10:application',
          fs: ['at ./index.rsh:170:47:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v233 = v37.blockers;
        const v235 = stdlib.sub(v206, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
        const v237 = v233[v235];
        const v240 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
        const v242 = v233[v240];
        const v243 = v237 ? v242 : false;
        const v246 = stdlib.sub(v206, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v248 = v233[v246];
        const v249 = v243 ? v248 : false;
        const v252 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v254 = v233[v252];
        const v255 = v249 ? v254 : false;
        const v259 = stdlib.add(v246, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
        const v261 = v233[v259];
        const v262 = v255 ? v261 : false;
        const v266 = stdlib.add(v252, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
        const v268 = v233[v266];
        const v269 = v262 ? v268 : false;
        v271 = v269;
        }
      const v284 = [stdlib.checkedBigNumberify('./index.rsh:171:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:171:53:decimal', stdlib.UInt_max, 0)];
      const v285 = [stdlib.checkedBigNumberify('./index.rsh:171:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:171:62:decimal', stdlib.UInt_max, 2)];
      const v286 = v215 ? v284 : v285;
      const v287 = v286[stdlib.checkedBigNumberify('./index.rsh:171:15:array', stdlib.UInt_max, 0)];
      const v288 = v286[stdlib.checkedBigNumberify('./index.rsh:171:15:array', stdlib.UInt_max, 1)];
      const v289 = stdlib.mul(v287, v24);
      sim_r.txns.push({
        amt: v289,
        kind: 'from',
        to: v23,
        tok: undefined
        });
      const v294 = stdlib.mul(v288, v24);
      sim_r.txns.push({
        amt: v294,
        kind: 'from',
        to: v31,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:174:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v335 = txn3.time;
    const v332 = txn3.from;
    ;
    const v334 = stdlib.addressEq(v23, v332);
    stdlib.assert(v334, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:146:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:134:33:application',
      fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:132:32:function exp)', 'at ./index.rsh:146:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v34 = txn2.time;
    const v31 = txn2.from;
    ;
    const v38 = [false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false];
    const v39 = {
      blockers: v38,
      catIndex: stdlib.checkedBigNumberify('./index.rsh:29:18:decimal', stdlib.UInt_max, 60)
      };
    let v37 = v39;
    let v350 = v34;
    
    while ((() => {
      const v45 = v37.catIndex;
      const v46 = stdlib.lt(v45, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v47 = stdlib.ge(v45, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
      const v48 = v46 ? true : v47;
      const v49 = stdlib.mod(v45, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v50 = stdlib.eq(v49, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
      const v52 = stdlib.eq(v49, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
      const v53 = v50 ? true : v52;
      const v54 = v48 ? true : v53;
      let v110;
      if (v54) {
        v110 = true;
        }
      else {
        const v70 = v54 ? false : true;
        stdlib.assert(v70, {
          at: './index.rsh:49:10:application',
          fs: ['at ./index.rsh:103:38:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)', 'at ./index.rsh:153:24:application call to "gameOver" (defined at: ./index.rsh:102:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v72 = v37.blockers;
        const v74 = stdlib.sub(v45, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
        const v76 = v72[v74];
        const v79 = stdlib.add(v45, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
        const v81 = v72[v79];
        const v82 = v76 ? v81 : false;
        const v85 = stdlib.sub(v45, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v87 = v72[v85];
        const v88 = v82 ? v87 : false;
        const v91 = stdlib.add(v45, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
        const v93 = v72[v91];
        const v94 = v88 ? v93 : false;
        const v98 = stdlib.add(v85, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
        const v100 = v72[v98];
        const v101 = v94 ? v100 : false;
        const v105 = stdlib.add(v91, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
        const v107 = v72[v105];
        const v108 = v101 ? v107 : false;
        v110 = v108;
        }
      const v113 = v110 ? false : true;
      
      return v113;})()) {
      const txn3 = await (ctc.recv(6, 1, [ctc0], false, false));
      const [v122] = txn3.data;
      const v125 = txn3.time;
      const v121 = txn3.from;
      ;
      const v124 = stdlib.addressEq(v23, v121);
      stdlib.assert(v124, {
        at: './index.rsh:157:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v129 = v37.catIndex;
      const v130 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v131 = stdlib.ge(v129, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
      const v132 = v130 ? true : v131;
      const v133 = stdlib.mod(v129, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
      const v134 = stdlib.eq(v133, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
      const v136 = stdlib.eq(v133, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
      const v137 = v134 ? true : v136;
      const v138 = v132 ? true : v137;
      const v141 = v138 ? false : true;
      stdlib.assert(v141, {
        at: './index.rsh:49:10:application',
        fs: ['at ./index.rsh:82:22:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)', 'at ./index.rsh:159:37:application call to "applyCatMove" (defined at: ./index.rsh:81:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v143 = v37.blockers;
      const v145 = stdlib.sub(v129, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
      const v147 = v143[v145];
      const v150 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
      const v152 = v143[v150];
      const v153 = v147 ? v152 : false;
      const v156 = stdlib.sub(v129, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v158 = v143[v156];
      const v159 = v153 ? v158 : false;
      const v162 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v164 = v143[v162];
      const v165 = v159 ? v164 : false;
      const v169 = stdlib.add(v156, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
      const v171 = v143[v169];
      const v172 = v165 ? v171 : false;
      const v176 = stdlib.add(v162, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
      const v178 = v143[v176];
      const v179 = v172 ? v178 : false;
      const v182 = v179 ? false : true;
      stdlib.assert(v182, {
        at: './index.rsh:82:10:application',
        fs: ['at ./index.rsh:159:37:application call to "applyCatMove" (defined at: ./index.rsh:81:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v190 = {
        blockers: v143,
        catIndex: v122
        };
      const v191 = stdlib.protect(ctc0, await interact.getHex(v190), {
        at: './index.rsh:68:37:application',
        fs: ['at ./index.rsh:163:46:application call to "getValidBlockMove" (defined at: ./index.rsh:67:1:function exp)', 'at ./index.rsh:162:16:application call to [unknown function] (defined at: ./index.rsh:162:20:function exp)'],
        msg: 'getHex',
        who: 'Bob'
        });
      const v192 = stdlib.lt(v191, stdlib.checkedBigNumberify('./index.rsh:69:23:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v192, {
        at: './index.rsh:69:9:application',
        fs: ['at ./index.rsh:163:46:application call to "getValidBlockMove" (defined at: ./index.rsh:67:1:function exp)', 'at ./index.rsh:162:16:application call to [unknown function] (defined at: ./index.rsh:162:20:function exp)'],
        msg: null,
        who: 'Bob'
        });
      
      
      const txn4 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:164:11:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc5, ctc0], [v23, v24, v31, v122, v125, v143, v191], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:164:11:dot', stdlib.UInt_max, 6), v23, v24, v31, v122, v125, v143]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:164:11:dot', stdlib.UInt_max, 6), v23, v24, v31, v122, v143]);
        const [v195] = txn4.data;
        const v198 = txn4.time;
        const v194 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v197 = stdlib.addressEq(v31, v194);
        stdlib.assert(v197, {
          at: './index.rsh:164:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v200 = stdlib.lt(v195, stdlib.checkedBigNumberify('./index.rsh:92:15:decimal', stdlib.UInt_max, 121));
        stdlib.assert(v200, {
          at: './index.rsh:92:10:application',
          fs: ['at ./index.rsh:166:33:application call to "applyBlockerMove" (defined at: ./index.rsh:90:1:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v202 = stdlib.Array_set(v143, v195, true);
        const v204 = {
          blockers: v202,
          catIndex: v122
          };
        const cv37 = v204;
        const cv350 = v198;
        
        (() => {
          const v37 = cv37;
          const v350 = cv350;
          
          if ((() => {
            const v45 = v37.catIndex;
            const v46 = stdlib.lt(v45, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v47 = stdlib.ge(v45, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
            const v48 = v46 ? true : v47;
            const v49 = stdlib.mod(v45, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v50 = stdlib.eq(v49, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
            const v52 = stdlib.eq(v49, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
            const v53 = v50 ? true : v52;
            const v54 = v48 ? true : v53;
            let v110;
            if (v54) {
              v110 = true;
              }
            else {
              const v70 = v54 ? false : true;
              stdlib.assert(v70, {
                at: './index.rsh:49:10:application',
                fs: ['at ./index.rsh:103:38:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)', 'at ./index.rsh:153:24:application call to "gameOver" (defined at: ./index.rsh:102:1:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v72 = v37.blockers;
              const v74 = stdlib.sub(v45, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
              const v76 = v72[v74];
              const v79 = stdlib.add(v45, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
              const v81 = v72[v79];
              const v82 = v76 ? v81 : false;
              const v85 = stdlib.sub(v45, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v87 = v72[v85];
              const v88 = v82 ? v87 : false;
              const v91 = stdlib.add(v45, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v93 = v72[v91];
              const v94 = v88 ? v93 : false;
              const v98 = stdlib.add(v85, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
              const v100 = v72[v98];
              const v101 = v94 ? v100 : false;
              const v105 = stdlib.add(v91, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
              const v107 = v72[v105];
              const v108 = v101 ? v107 : false;
              v110 = v108;
              }
            const v113 = v110 ? false : true;
            
            return v113;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:154:19:after expr stmt semicolon', stdlib.UInt_max, 4), v23, v24, v31, v37, v350]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:154:19:after expr stmt semicolon', stdlib.UInt_max, 4), v23, v24, v31, v37]);
            sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:154:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v206 = v37.catIndex;
            const v207 = stdlib.lt(v206, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v208 = stdlib.ge(v206, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
            const v209 = v207 ? true : v208;
            const v210 = stdlib.mod(v206, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
            const v211 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
            const v213 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
            const v214 = v211 ? true : v213;
            const v215 = v209 ? true : v214;
            let v271;
            if (v215) {
              v271 = true;
              }
            else {
              const v231 = v215 ? false : true;
              stdlib.assert(v231, {
                at: './index.rsh:49:10:application',
                fs: ['at ./index.rsh:170:47:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v233 = v37.blockers;
              const v235 = stdlib.sub(v206, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
              const v237 = v233[v235];
              const v240 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
              const v242 = v233[v240];
              const v243 = v237 ? v242 : false;
              const v246 = stdlib.sub(v206, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v248 = v233[v246];
              const v249 = v243 ? v248 : false;
              const v252 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
              const v254 = v233[v252];
              const v255 = v249 ? v254 : false;
              const v259 = stdlib.add(v246, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
              const v261 = v233[v259];
              const v262 = v255 ? v261 : false;
              const v266 = stdlib.add(v252, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
              const v268 = v233[v266];
              const v269 = v262 ? v268 : false;
              v271 = v269;
              }
            const v284 = [stdlib.checkedBigNumberify('./index.rsh:171:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:171:53:decimal', stdlib.UInt_max, 0)];
            const v285 = [stdlib.checkedBigNumberify('./index.rsh:171:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:171:62:decimal', stdlib.UInt_max, 2)];
            const v286 = v215 ? v284 : v285;
            const v287 = v286[stdlib.checkedBigNumberify('./index.rsh:171:15:array', stdlib.UInt_max, 0)];
            const v288 = v286[stdlib.checkedBigNumberify('./index.rsh:171:15:array', stdlib.UInt_max, 1)];
            const v289 = stdlib.mul(v287, v24);
            sim_r.txns.push({
              amt: v289,
              kind: 'from',
              to: v23,
              tok: undefined
              });
            const v294 = stdlib.mul(v288, v24);
            sim_r.txns.push({
              amt: v294,
              kind: 'from',
              to: v31,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:174:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [v195] = txn4.data;
      const v198 = txn4.time;
      const v194 = txn4.from;
      ;
      const v197 = stdlib.addressEq(v31, v194);
      stdlib.assert(v197, {
        at: './index.rsh:164:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v200 = stdlib.lt(v195, stdlib.checkedBigNumberify('./index.rsh:92:15:decimal', stdlib.UInt_max, 121));
      stdlib.assert(v200, {
        at: './index.rsh:92:10:application',
        fs: ['at ./index.rsh:166:33:application call to "applyBlockerMove" (defined at: ./index.rsh:90:1:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v202 = stdlib.Array_set(v143, v195, true);
      const v204 = {
        blockers: v202,
        catIndex: v122
        };
      const cv37 = v204;
      const cv350 = v198;
      
      v37 = cv37;
      v350 = cv350;
      
      continue;
      
      }
    const v206 = v37.catIndex;
    const v207 = stdlib.lt(v206, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v208 = stdlib.ge(v206, stdlib.checkedBigNumberify('./index.rsh:42:33:application', stdlib.UInt_max, 110));
    const v209 = v207 ? true : v208;
    const v210 = stdlib.mod(v206, stdlib.checkedBigNumberify('./index.rsh:4:14:decimal', stdlib.UInt_max, 11));
    const v211 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, 0));
    const v213 = stdlib.eq(v210, stdlib.checkedBigNumberify('./index.rsh:43:38:application', stdlib.UInt_max, 10));
    const v214 = v211 ? true : v213;
    const v215 = v209 ? true : v214;
    let v271;
    if (v215) {
      v271 = true;
      }
    else {
      const v231 = v215 ? false : true;
      stdlib.assert(v231, {
        at: './index.rsh:49:10:application',
        fs: ['at ./index.rsh:170:47:application call to "catBlocked" (defined at: ./index.rsh:48:25:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v233 = v37.blockers;
      const v235 = stdlib.sub(v206, stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 1));
      const v237 = v233[v235];
      const v240 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:52:68:decimal', stdlib.UInt_max, 1));
      const v242 = v233[v240];
      const v243 = v237 ? v242 : false;
      const v246 = stdlib.sub(v206, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v248 = v233[v246];
      const v249 = v243 ? v248 : false;
      const v252 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:3:14:decimal', stdlib.UInt_max, 11));
      const v254 = v233[v252];
      const v255 = v249 ? v254 : false;
      const v259 = stdlib.add(v246, stdlib.checkedBigNumberify('./index.rsh:54:36:decimal', stdlib.UInt_max, 1));
      const v261 = v233[v259];
      const v262 = v255 ? v261 : false;
      const v266 = stdlib.add(v252, stdlib.checkedBigNumberify('./index.rsh:54:75:decimal', stdlib.UInt_max, 1));
      const v268 = v233[v266];
      const v269 = v262 ? v268 : false;
      v271 = v269;
      }
    const v284 = [stdlib.checkedBigNumberify('./index.rsh:171:50:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:171:53:decimal', stdlib.UInt_max, 0)];
    const v285 = [stdlib.checkedBigNumberify('./index.rsh:171:59:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:171:62:decimal', stdlib.UInt_max, 2)];
    const v286 = v215 ? v284 : v285;
    const v287 = v286[stdlib.checkedBigNumberify('./index.rsh:171:15:array', stdlib.UInt_max, 0)];
    const v288 = v286[stdlib.checkedBigNumberify('./index.rsh:171:15:array', stdlib.UInt_max, 1)];
    const v289 = stdlib.mul(v287, v24);
    ;
    const v294 = stdlib.mul(v288, v24);
    ;
    stdlib.protect(ctc1, await interact.outcome(v215), {
      at: './index.rsh:177:25:application',
      fs: ['at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:23:function exp)'],
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
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
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
byte base64(dg==)
gtxna 0 ApplicationArgs 2
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
byte base64(dg==)
byte base64()
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
    size: 97
    }, {
    count: 8,
    size: 129
    }, {
    count: 8,
    size: 129
    }, null, null, {
    count: 11,
    size: 298
    }, {
    count: 12,
    size: 298
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
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
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
int 8
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
// "./index.rsh:145:9:dot"
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
byte base64(AAABAAAAAAABAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAA==)
int 60
itob
concat
dup
store 253
substring 121 129
btoi
dup
store 252
int 11
%
store 251
load 252
int 11
<
load 252
int 110
>=
||
load 251
int 0
==
load 251
int 10
==
||
||
dup
store 250
bz l0
int 1
store 249
b l1
l0:
// Nothing
// "./index.rsh:49:10:application"
// "[at ./index.rsh:103:38:application call to \"catBlocked\" (defined at: ./index.rsh:48:25:function exp),at ./index.rsh:153:24:application call to \"gameOver\" (defined at: ./index.rsh:102:1:function exp)]"
load 250
!
assert
load 253
substring 0 121
store 248
load 252
int 11
-
store 247
load 252
int 11
+
store 246
load 248
load 252
int 1
-
getbyte
load 248
load 252
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
store 249
l1:
load 249
bz l2
load 250
bz l3
int 1
store 248
b l4
l3:
// Nothing
// "./index.rsh:49:10:application"
// "[at ./index.rsh:170:47:application call to \"catBlocked\" (defined at: ./index.rsh:48:25:function exp)]"
load 250
!
assert
load 253
substring 0 121
store 247
load 252
int 11
-
store 246
load 252
int 11
+
store 245
load 247
load 252
int 1
-
getbyte
load 247
load 252
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
load 250
select
store 247
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 247
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
load 247
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
// check view bs
int 0
itob
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
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
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
int 8
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
// "reach standard library:209:7:dot"
// "[at ./index.rsh:146:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:146:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// check view bs
int 0
itob
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
// Handler 6
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
// compute state in HM_Check 4
int 4
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
// "./index.rsh:157:12:dot"
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
// "./index.rsh:157:12:dot"
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
// "./index.rsh:49:10:application"
// "[at ./index.rsh:82:22:application call to \"catBlocked\" (defined at: ./index.rsh:48:25:function exp),at ./index.rsh:159:37:application call to \"applyCatMove\" (defined at: ./index.rsh:81:1:function exp)]"
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
// "./index.rsh:82:10:application"
// "[at ./index.rsh:159:37:application call to \"applyCatMove\" (defined at: ./index.rsh:81:1:function exp)]"
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
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
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
// compute state in HM_Check 6
int 6
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
// "./index.rsh:164:11:dot"
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
// "./index.rsh:164:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "./index.rsh:92:10:application"
// "[at ./index.rsh:166:33:application call to \"applyBlockerMove\" (defined at: ./index.rsh:90:1:function exp)]"
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
// "./index.rsh:49:10:application"
// "[at ./index.rsh:103:38:application call to \"catBlocked\" (defined at: ./index.rsh:48:25:function exp),at ./index.rsh:153:24:application call to \"gameOver\" (defined at: ./index.rsh:102:1:function exp)]"
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
// "./index.rsh:49:10:application"
// "[at ./index.rsh:170:47:application call to \"catBlocked\" (defined at: ./index.rsh:48:25:function exp)]"
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
// check view bs
int 0
itob
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
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
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
  unsupported: false
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
                "name": "v24",
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
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
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
        "internalType": "struct T10",
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
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
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
        "internalType": "struct T10",
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
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
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
                "internalType": "struct T6",
                "name": "v37",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v350",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
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
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v143",
                "type": "bool[121]"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v195",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
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
                "name": "v24",
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
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
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
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
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
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
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
                "internalType": "struct T6",
                "name": "v37",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v350",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
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
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              },
              {
                "internalType": "bool[121]",
                "name": "v143",
                "type": "bool[121]"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v195",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611b19806100826000396000f3fe60806040526004361061004e5760003560e01c80632438df701461005a578063356e93d01461006f5780633ede7321146100825780639532ef0114610095578063e163d7c4146100a857610055565b3661005557005b600080fd5b61006d61006836600461177e565b6100bb565b005b61006d61007d36600461178f565b61060c565b61006d61009036600461178f565b610782565b61006d6100a33660046117ab565b610b6d565b61006d6100b636600461177e565b610c83565b6040516100cf906001908390602001611a30565b6040516020818303038152906040528051906020012060001c600054146100f557600080fd5b600080556101016114d5565b610110600a6040840135611a44565b431061011b57600080fd5b3460208301351461012b57600080fd5b80516000908190528151602090810182905282516001604091820181905284516060018490528451608001849052845160a001849052845160c001849052845160e00184905284516101000181905284516101200184905284516101400184905284516101600184905284516101800184905284516101a00184905284516101c00184905284516101e00184905284516102000184905284516102200184905284516102400184905284516102600184905284516102800184905284516102a00181905284516102c00184905284516102e00184905284516103000181905284516103200184905284516103400184905284516103600184905284516103800184905284516103a00184905284516103c00184905284516103e00184905284516104000184905284516104200184905284516104400184905284516104600184905284516104800184905284516104a00184905284516104c00184905284516104e00184905284516105000184905284516105200184905284516105400184905284516105600184905284516105800184905284516105a00184905284516105c00184905284516105e00184905284516106000184905284516106200184905284516106400184905284516106600184905284516106800184905284516106a00184905284516106c00184905284516106e00184905284516107000181905284516107200184905284516107400184905284516107600184905284516107800184905284516107a00184905284516107c00184905284516107e00181905284516108000184905284516108200184905284516108400184905284516108600184905284516108800184905284516108a00184905284516108c00184905284516108e00184905284516109000184905284516109200184905284516109400184905284516109600184905284516109800184905284516109a00184905284516109c00184905284516109e0018490528451610a00018190528451610a20018490528451610a40018490528451610a60018490528451610a80018490528451610aa0018490528451610ac0018490528451610ae0018490528451610b00018490528451610b20018490528451610b40018490528451610b60018490528451610b80018490528451610ba0018490528451610bc0018490528451610be0018490528451610c00018490528451610c20018490528451610c40018490528451610c60018490528451610c80018490528451610ca0018490528451610cc0018490528451610ce0018490528451610d00018490528451610d20018190528451610d40018490528451610d60018490528451610d80018490528451610da0018490528451610dc001528351610de0018390528351610e00018390528351610e20018390528351610e40018390528351610e60018390528351610e80018390528351610ea0018390528351610ec0018390528351610ee0018390528351610f000192909252825181840180519190915251603c910152517f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd906105a89084906118ee565b60405180910390a16105b86114fa565b6105c56020840184611743565b81516001600160a01b03909116905280516020808501359181019190915281513360409091015282810151818301805191909152514391015261060781610d8f565b505050565b6040516106209060069083906020016119ba565b6040516020818303038152906040528051906020012060001c6000541461064657600080fd5b6000805561065261152a565b341561065d57600080fd5b3361066e6060840160408501611743565b6001600160a01b03161461068157600080fd5b6079610fc08301351061069357600080fd5b60408051610f208181019092526106cc9160a085019060799083908390808284376000920191909152505050610fc084013560016110cf565b815152805160608301356020909101526040517f0c2104d4cf94bde911e41b0719860e26b95d6508135355c6b962504b7b5fbc3f9061070c908490611933565b60405180910390a161071c6114fa565b6107296020840184611743565b81516001600160a01b03909116905280516020808501359101526107536060840160408501611743565b81516001600160a01b039091166040909101528151602080830180519290925290514391015261060781610d8f565b604051610796906004908390602001611942565b6040516020818303038152906040528051906020012060001c600054146107bc57600080fd5b600080805560408051606081018252828152602081018390529081019190915234156107e757600080fd5b336107f56020840184611743565b6001600160a01b03161461080857600080fd5b610818600b610f80840135611aad565b8152600b610f808301351061083657606e610f808301351015610839565b60015b6108565780511561084e578051600a14610851565b60015b610859565b60015b610864576001610867565b60005b61087057600080fd5b610880600b610f80840135611a7b565b6020820152610895600b610f80840135611a44565b6040820152606082016108ae6001610f80850135611a7b565b607981106108cc57634e487b7160e01b600052603260045260246000fd5b6020020160208101906108df9190611764565b6108ea57600061092f565b606082016108fe6001610f80850135611a44565b6079811061091c57634e487b7160e01b600052603260045260246000fd5b60200201602081019061092f9190611764565b61093a576000610975565b602081015160608301906079811061096257634e487b7160e01b600052603260045260246000fd5b6020020160208101906109759190611764565b6109805760006109bb565b60408101516060830190607981106109a857634e487b7160e01b600052603260045260246000fd5b6020020160208101906109bb9190611764565b6109c6576000610a0d565b602081015160608301906109dc90600190611a44565b607981106109fa57634e487b7160e01b600052603260045260246000fd5b602002016020810190610a0d9190611764565b610a18576000610a5f565b60408101516060830190610a2e90600190611a44565b60798110610a4c57634e487b7160e01b600052603260045260246000fd5b602002016020810190610a5f9190611764565b610a6a576001610a6d565b60005b610a7657600080fd5b7ff8446e74f0cc93e43ff36ab2064171b588128fe0e3f9d4872ce239fcdba4e1da82604051610aa59190611915565b60405180910390a1610ab561153d565b610ac26020840184611743565b6001600160a01b0316815260208084013590820152610ae76060840160408501611743565b6001600160a01b0316604080830191909152610fc08401356060808401919091524360808401528151610f2081810190935291908501906079908390839080828437600092019190915250505060a0820152604051610b4d9060069083906020016119cf565b60408051601f198184030181529190528051602090910120600055505050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c60005414610baa57600080fd5b6000805534602082013514610bbe57600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610c28604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602091820135828201908152436040808401918252805160018187015293516001600160a01b03168482015291516060840152516080808401919091528151808403909101815260a090920190528051910120600055565b604051610c97906001908390602001611a30565b6040516020818303038152906040528051906020012060001c60005414610cbd57600080fd5b60008055610cd0600a6040830135611a44565b431015610cdc57600080fd5b3415610ce757600080fd5b33610cf56020830183611743565b6001600160a01b031614610d0857600080fd5b610d156020820182611743565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610d50573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d8562301381604051610d8091906118ee565b60405180910390a16000805533ff5b610dc56040518060a001604052806000815260200160001515815260200160008152602001600081526020016000151581525090565b602080830151510151610dda90600b90611aad565b8152602080830151510151600b11610dfe57602080830151510151606e1115610e01565b60015b610e1e57805115610e16578051600a14610e19565b60015b610e21565b60015b1580156020830152610e395760016080820152611017565b8060200151610e49576001610e4c565b60005b610e5557600080fd5b602080830151510151610e6a90600b90611a7b565b6040820152602080830151510151610e8490600b90611a44565b6060820152602080830151518051910151610ea190600190611a7b565b60798110610ebf57634e487b7160e01b600052603260045260246000fd5b6020020151610ecf576000610f0b565b602080830151518051910151610ee790600190611a44565b60798110610f0557634e487b7160e01b600052603260045260246000fd5b60200201515b610f16576000610f46565b60208201515151604082015160798110610f4057634e487b7160e01b600052603260045260246000fd5b60200201515b610f51576000610f81565b60208201515151606082015160798110610f7b57634e487b7160e01b600052603260045260246000fd5b60200201515b610f8c576000610fc8565b602082015151516040820151610fa490600190611a44565b60798110610fc257634e487b7160e01b600052603260045260246000fd5b60200201515b610fd357600061100f565b602082015151516060820151610feb90600190611a44565b6079811061100957634e487b7160e01b600052603260045260246000fd5b60200201515b151560808201525b80608001511561107357611029611585565b82515181516001600160a01b039182169052835160209081015183518201528451604090810151845193169201919091528301515181516060015261106d81611177565b506110cb565b61107b6115a5565b8251516001600160a01b03908116825283516020908101518184015284516040908101519092168284015280850180515160608501525181015160808401529051610b4d91600491849101611957565b5050565b6110d76115ec565b60005b60798110156111445784816079811061110357634e487b7160e01b600052603260045260246000fd5b602002015182826079811061112857634e487b7160e01b600052603260045260246000fd5b911515602090920201528061113c81611a92565b9150506110da565b508181846079811061116657634e487b7160e01b600052603260045260246000fd5b911515602090920201529392505050565b61117f61160b565b8151606001516020015161119590600b90611aad565b815281516060015160200151600b116111bb5781516060015160200151606e11156111be565b60015b6111db578051156111d3578051600a146111d6565b60015b6111de565b60015b15801560208301526111f657600160808201526113de565b8060200151611206576001611209565b60005b61121257600080fd5b8151606001516020015161122890600b90611a7b565b60408201528151606001516020015161124390600b90611a44565b60608083019190915282510151805160209091015161126490600190611a7b565b6079811061128257634e487b7160e01b600052603260045260246000fd5b60200201516112925760006112d0565b81516060015180516020909101516112ac90600190611a44565b607981106112ca57634e487b7160e01b600052603260045260246000fd5b60200201515b6112db57600061130b565b8151606001515160408201516079811061130557634e487b7160e01b600052603260045260246000fd5b60200201515b611316576000611347565b815160609081015151908201516079811061134157634e487b7160e01b600052603260045260246000fd5b60200201515b61135257600061138e565b81516060015151604082015161136a90600190611a44565b6079811061138857634e487b7160e01b600052603260045260246000fd5b60200201515b6113995760006113d6565b815160609081015151908201516113b290600190611a44565b607981106113d057634e487b7160e01b600052603260045260246000fd5b60200201515b151560808201525b60a08101805160029081905290516000602091820181905260c0840180519190915251810191909152810151611418578060c0015161141e565b8060a001515b60e082018190528251805160209091015191516001600160a01b03909116916108fc9161144b9190611a5c565b6040518115909202916000818181858888f19350505050158015611473573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc8360000151602001518360e00151602001516114a59190611a5c565b6040518115909202916000818181858888f193505050501580156114cd573d6000803e3d6000fd5b506000805533ff5b60405180604001604052806114e86115ec565b81526020016114f561169f565b905290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016114f56116b2565b60405180602001604052806114f561169f565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016114f56115ec565b60405180604001604052806115986116c5565b8152600060209091015290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016115df61169f565b8152602001600081525090565b60405180610f2001604052806079906020820280368337509192915050565b60405180610100016040528060008152602001600015158152602001600081526020016000815260200160001515815260200161165b604051806040016040528060008152602001600081525090565b815260200161167d604051806040016040528060008152602001600081525090565b81526020016114f5604051806040016040528060008152602001600081525090565b60405180604001604052806115df6115ec565b60405180604001604052806115df61169f565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016114f561169f565b80356001600160a01b038116811461171657600080fd5b919050565b8035801515811461171657600080fd5b6000610fe0828403121561173d578081fd5b50919050565b600060208284031215611754578081fd5b61175d826116ff565b9392505050565b600060208284031215611775578081fd5b61175d8261171b565b60006080828403121561173d578081fd5b6000610fe082840312156117a1578081fd5b61175d838361172b565b60006040828403121561173d578081fd5b8060005b60798110156117e9576117d28261171b565b1515845260209384019391909101906001016117c0565b50505050565b8060005b60798110156117e957815115158452602093840193909101906001016117f3565b6001600160a01b0380611826836116ff565b1683526020820135602084015280611840604084016116ff565b1660408401525061185760608301606083016117bc565b610f808181013590830152610fa090810135910152565b6001600160a01b0380611880836116ff565b168352602082013560208401528061189a604084016116ff565b1660408401525060608101356060830152608081013560808301526110cb60a0830160a083016117bc565b6001600160a01b036118d6826116ff565b16825260208181013590830152604090810135910152565b608081016118fc82846118c5565b6119086060840161171b565b1515606083015292915050565b610fe081016119248284611814565b610fc092830135919092015290565b610fe08101611924828461186e565b828152610fe0810161175d6020830184611814565b6000610fe08201905083825260018060a01b038084511660208401526020840151604084015280604085015116606084015250606083015161199d6080840182516117ef565b60200151610fa083015260809290920151610fc090910152919050565b828152610fe0810161175d602083018461186e565b6000610fe08201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a0830151611a2860c08401826117ef565b509392505050565b8281526080810161175d60208301846118c5565b60008219821115611a5757611a57611acd565b500190565b6000816000190483118215151615611a7657611a76611acd565b500290565b600082821015611a8d57611a8d611acd565b500390565b6000600019821415611aa657611aa6611acd565b5060010190565b600082611ac857634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea264697066735822122058a5d2862f3038809f4213a335ace5792841c62aa51b5b63e6fdf8a3c440c5a564736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

