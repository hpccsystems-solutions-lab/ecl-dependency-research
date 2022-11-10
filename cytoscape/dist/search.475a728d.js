// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../2/temp2.js":[function(require,module,exports) {
exports.first = ["BaseXF", "IDtbl", "IDtbl", "PID", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "RECORD_4.field#id == RECORD_1.field#id", "SORT(ds_Doc_Similarity_Base),PARAMETERS : [negate, ]", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "Trans_Similarity", "assign", "assign", "denormalize1", "ds_Doc_Combination", "ds_Doc_Combination", "ds_Doc_Similarity_Base", "ds_doc_Base", "ds_words", "ds_words_frq", "ds_words_frq", "ds_words_frq", "field#cosinesimilarity -> div", "field#id -> 1", "field#id -> 2", "field#id -> 3", "field#id -> 4", "field#id -> 5", "field#id -> RECORD_2.field#id", "field#id -> RECORD_4.field#id", "field#source_id -> RECORD_2.field#id", "field#source_id -> RECORD_5.field#source_id", "field#target_id -> RECORD_2.field#id", "field#target_id -> RECORD_5.field#target_id", "field#word -> D\"Jakie\"", "field#word -> D\"Jane\"", "field#word -> D\"Jude\"", "field#word -> D\"Julie\"", "field#word -> D\"Linda\"", "field#word -> D\"less\"", "field#word -> D\"likes\"", "field#word -> D\"loves\"", "field#word -> D\"me\"", "field#word -> D\"more\"", "field#word -> D\"than\"", "join", "lay_words", "lt", "record_IDtbl", "record_SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record_lay_words", "sortlist", "sortlist", "word_child -> addfiles", "word_child -> null"];
exports.second = ["denormalize1", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "join", "denormalize1", "PID", "ds_Doc_Similarity_Base", "denormalize1", "output1", "ds_words_frq", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "IDtbl", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "ds_doc_Base", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "output2", "SORT(ds_Doc_Similarity_Base),PARAMETERS : [negate, ]", "output3", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "IDtbl", "denormalize1", "output4", "Trans_Similarity", "ds_words", "ds_words", "ds_words", "ds_words", "ds_words", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "BaseXF", "join", "Trans_Similarity", "join", "Trans_Similarity", "ds_words", "ds_words", "ds_words", "ds_words", "ds_words", "ds_words", "ds_words", "ds_words", "ds_words", "ds_words", "ds_words", "ds_Doc_Combination", "ds_words", "join", "IDtbl", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "lay_words", "IDtbl", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "BaseXF", "Project(DATASET : IDtbl , TRANSFORM : transform33)"];
exports.node = ["BaseXF", "IDtbl", "PID", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "RECORD_4.field#id == RECORD_1.field#id", "SORT(ds_Doc_Similarity_Base),PARAMETERS : [negate, ]", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "Trans_Similarity", "assign", "denormalize1", "ds_Doc_Combination", "ds_Doc_Similarity_Base", "ds_doc_Base", "ds_words_frq", "ds_words", "field#cosinesimilarity -> div", "field#id -> 1", "field#id -> 2", "field#id -> 3", "field#id -> 4", "field#id -> 5", "field#id -> RECORD_2.field#id", "field#id -> RECORD_4.field#id", "field#source_id -> RECORD_2.field#id", "field#source_id -> RECORD_5.field#source_id", "field#target_id -> RECORD_2.field#id", "field#target_id -> RECORD_5.field#target_id", "field#word -> D\"Jakie\"", "field#word -> D\"Jane\"", "field#word -> D\"Jude\"", "field#word -> D\"Julie\"", "field#word -> D\"Linda\"", "field#word -> D\"less\"", "field#word -> D\"likes\"", "field#word -> D\"loves\"", "field#word -> D\"me\"", "field#word -> D\"more\"", "field#word -> D\"than\"", "join", "lay_words", "lt", "output1", "output2", "output3", "output4", "record_IDtbl", "record_SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record_lay_words", "sortlist", "word_child -> addfiles", "word_child -> null"];
;
exports.fieldsToNodes_fields = {
  0: ["\"SELF.word_child\"", "\"RECORD_4.word_child\"", "\"SELF.field#word_hash\"", "\"RECORD_1.field#word_hash\"", "\"SELF.field#frequency\"", "\"RECORD_1.field#frequency\"", "\"SELF.field#id\"", "\"RECORD_4.field#id\""],
  1: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\""],
  2: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\"", "\"SELF.field#id\"", "\"RECORD_2.field#id\"", "\"SELF.word_child\"", "field#word_hash", "field#frequency"],
  3: ["\"RECORD_4.field#id\"", "\"RECORD_1.field#id\""],
  4: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\""],
  5: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\""],
  6: ["\"SELF.field#cosinesimilarity\"", "\"selectnth.word_child\"", "\"selectnth.word_child\"", "\"lay_word_child.field#word_hash\"", "\"lay_word_child.field#word_hash\"", "\"SELF.field#word_hash\"", "\"lay_word_child.field#word_hash\"", "\"SELF.field#product\"", "\"lay_word_child.field#frequency\"", "\"lay_word_child.field#frequency\"", "\"{\n\tDATASET1 : ds1\n\tDATASET2 : ds2\n\tCONDITION : lay_word_child.field#word_hash == lay_word_child.field#word_hash\n\tTRANSFORM : transform37\n}.field#product\"", "\"selectnth.word_child\"", "field#squares", "\"SELF.field#squares\"", "\"selectnth.word_child.field#frequency\"", "\"selectnth.word_child.field#frequency\"", "\"RECORD_8.field#squares\"", "\"selectnth.word_child\"", "field#squares", "\"SELF.field#squares\"", "\"selectnth.word_child.field#frequency\"", "\"selectnth.word_child.field#frequency\"", "\"RECORD_8.field#squares\"", "\"SELF.field#source_id\"", "\"RECORD_5.field#source_id\"", "\"SELF.field#target_id\"", "\"RECORD_5.field#target_id\""],
  7: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\""],
  8: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\""],
  9: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\"", "field#id", "\"SELF.field#id\"", "\"newaggregate.field#id\"", "\"newaggregate.field#id\"", "\"SELF.field#id\"", "\"RECORD_2.field#id\"", "\"SELF.word_child\"", "field#word_hash", "field#frequency"],
  10: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word", "field#id", "field#word_hash", "field#frequency", "\"SELF.field#id\"", "\"lay_words.field#id\"", "\"SELF.field#word_hash\"", "\"lay_words.field#word\"", "\"SELF.field#frequency\"", "\"lay_words.field#id\"", "\"lay_words.field#word\"", "\"newaggregate.field#id\""],
  11: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word"],
  12: ["\"SELF.field#cosinesimilarity\"", "\"selectnth.word_child\"", "\"selectnth.word_child\"", "\"lay_word_child.field#word_hash\"", "\"lay_word_child.field#word_hash\"", "\"SELF.field#word_hash\"", "\"lay_word_child.field#word_hash\"", "\"SELF.field#product\"", "\"lay_word_child.field#frequency\"", "\"lay_word_child.field#frequency\"", "\"{\n\tDATASET1 : ds1\n\tDATASET2 : ds2\n\tCONDITION : lay_word_child.field#word_hash == lay_word_child.field#word_hash\n\tTRANSFORM : transform37\n}.field#product\"", "\"selectnth.word_child\"", "field#squares", "\"SELF.field#squares\"", "\"selectnth.word_child.field#frequency\"", "\"selectnth.word_child.field#frequency\"", "\"RECORD_8.field#squares\"", "\"selectnth.word_child\"", "field#squares", "\"SELF.field#squares\"", "\"selectnth.word_child.field#frequency\"", "\"selectnth.word_child.field#frequency\"", "\"RECORD_8.field#squares\""],
  13: ["\"SELF.field#id\""],
  14: ["\"SELF.field#id\""],
  15: ["\"SELF.field#id\""],
  16: ["\"SELF.field#id\""],
  17: ["\"SELF.field#id\""],
  18: ["\"SELF.field#id\"", "\"RECORD_2.field#id\""],
  19: ["\"SELF.field#id\"", "\"RECORD_4.field#id\""],
  20: ["\"SELF.field#source_id\"", "\"RECORD_2.field#id\""],
  21: ["\"SELF.field#source_id\"", "\"RECORD_5.field#source_id\""],
  22: ["\"SELF.field#target_id\"", "\"RECORD_2.field#id\""],
  23: ["\"SELF.field#target_id\"", "\"RECORD_5.field#target_id\""],
  24: ["\"SELF.field#word\""],
  25: ["\"SELF.field#word\""],
  26: ["\"SELF.field#word\""],
  27: ["\"SELF.field#word\""],
  28: ["\"SELF.field#word\""],
  29: ["\"SELF.field#word\""],
  30: ["\"SELF.field#word\""],
  31: ["\"SELF.field#word\""],
  32: ["\"SELF.field#word\""],
  33: ["\"SELF.field#word\""],
  34: ["\"SELF.field#word\""],
  35: ["\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "\"SELF.field#id\"", "\"SELF.field#word\"", "field#id", "field#word"],
  36: ["\"SELF.word_child\"", "\"RECORD_4.word_child\"", "\"SELF.field#word_hash\"", "\"RECORD_1.field#word_hash\"", "\"SELF.field#frequency\"", "\"RECORD_1.field#frequency\""],
  37: ["\"SELF.word_child\"", "field#word_hash", "field#frequency"]
};
exports.immediate_fields = {
  0: ["transform35", ""],
  1: ["newaggregate", ""],
  2: ["hqlproject"],
  3: ["RECORD_4.field#id", "RECORD_1.field#id"],
  4: ["ds_Doc_Similarity_Base", "SORT(ds_Doc_Similarity_Base),PARAMETERS : [negate, ]"],
  5: ["newaggregate", "[newaggregate.field#id, ]", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", ""],
  6: ["transform38", ""],
  7: ["{\n\tDATASET1 : IDtbl\n\tDATASET2 : IDtbl\n\tCONDITION : RECORD_2.field#id < RECORD_2.field#id\n\tTRANSFORM : transform36\n}"],
  8: ["hqlproject"],
  9: ["denormalize"],
  10: ["SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", ""],
  11: ["lay_words", ""],
  12: ["field#cosinesimilarity", "div", "field#cosinesimilarity -> div", ""],
  13: ["field#id", "1"],
  14: ["field#id", "2"],
  15: ["field#id", "3"],
  16: ["field#id", "4"],
  17: ["field#id", "5"],
  18: ["field#id", "RECORD_2.field#id", "field#id -> RECORD_2.field#id", ""],
  19: ["field#id", "RECORD_4.field#id", "field#id -> RECORD_4.field#id", ""],
  20: ["field#source_id", "RECORD_2.field#id", "field#source_id -> RECORD_2.field#id", ""],
  21: ["field#source_id", "RECORD_5.field#source_id", "field#source_id -> RECORD_5.field#source_id", ""],
  22: ["field#target_id", "RECORD_2.field#id", "field#target_id -> RECORD_2.field#id", ""],
  23: ["field#target_id", "RECORD_5.field#target_id", "field#target_id -> RECORD_5.field#target_id", ""],
  24: ["field#word", "D\"Jakie\""],
  25: ["field#word", "D\"Jane\""],
  26: ["field#word", "D\"Jude\""],
  27: ["field#word", "D\"Julie\""],
  28: ["field#word", "D\"Linda\""],
  29: ["field#word", "D\"less\""],
  30: ["field#word", "D\"likes\""],
  31: ["field#word", "D\"loves\""],
  32: ["field#word", "D\"me\""],
  33: ["field#word", "D\"more\""],
  34: ["field#word", "D\"than\""],
  35: ["field#id", "field#word", "lay_words", "", "transformlist", "lay_words", "lay_words", ""],
  36: ["word_child", "addfiles", "word_child -> addfiles", ""],
  37: ["word_child", "null", "word_child -> null", ""]
};
exports.fieldsToNodes_nodeName = ["BaseXF", "IDtbl", "PID", "RECORD_4.field#id == RECORD_1.field#id", "SORT(ds_Doc_Similarity_Base),PARAMETERS : [negate, ]", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "Trans_Similarity", "ds_Doc_Combination", "ds_Doc_Similarity_Base", "ds_doc_Base", "ds_words_frq", "ds_words", "field#cosinesimilarity -> div", "field#id -> 1", "field#id -> 2", "field#id -> 3", "field#id -> 4", "field#id -> 5", "field#id -> RECORD_2.field#id", "field#id -> RECORD_4.field#id", "field#source_id -> RECORD_2.field#id", "field#source_id -> RECORD_5.field#source_id", "field#target_id -> RECORD_2.field#id", "field#target_id -> RECORD_5.field#target_id", "field#word -> D\"Jakie\"", "field#word -> D\"Jane\"", "field#word -> D\"Jude\"", "field#word -> D\"Julie\"", "field#word -> D\"Linda\"", "field#word -> D\"less\"", "field#word -> D\"likes\"", "field#word -> D\"loves\"", "field#word -> D\"me\"", "field#word -> D\"more\"", "field#word -> D\"than\"", "lay_words", "word_child -> addfiles", "word_child -> null"];
exports.compound_child = ["field#id -> RECORD_2.field#id", "field#target_id -> RECORD_5.field#target_id", "field#source_id -> RECORD_5.field#source_id", "field#word -> D\"Jakie\"", "field#word -> D\"less\"", "field#word -> D\"Jude\"", "field#word -> D\"Julie\"", "field#id -> 1", "field#word -> D\"Linda\"", "field#id -> 2", "field#id -> 4", "field#cosinesimilarity -> div", "field#word -> D\"me\"", "field#id -> RECORD_4.field#id", "field#target_id -> RECORD_2.field#id", "field#word -> D\"more\"", "field#word -> D\"than\"", "word_child -> addfiles", "field#word -> D\"Jane\"", "transform38", "field#source_id -> RECORD_2.field#id", "field#word -> D\"loves\"", "field#word -> D\"likes\"", "transform35", "word_child -> null", "field#id -> 5", "field#id -> 3"];
exports.compound_parent = ["", "Trans_Similarity", "Trans_Similarity", "", "", "", "", "", "", "", "", "Trans_Similarity", "", "BaseXF", "", "", "", "BaseXF", "", "Trans_Similarity", "", "", "", "BaseXF", "", "", ""];
exports.labels = ["output1", "SORT(ds_Doc_Similarity_Base),PARAMETERS : [negate, ]", "sorted dataset", "SORT(ds_Doc_Similarity_Base),PARAMETERS : [negate, ]", "ds_Doc_Similarity_Base", "dataset", "ds_Doc_Similarity_Base", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "hqlproject", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "ds_Doc_Combination", "dataset", "join", "IDtbl", "dataset", "join", "IDtbl", "dataset", "IDtbl", "ds_words_frq", "dataset", "ds_words_frq", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sorted dataset", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "ds_words", "dataset", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Linda\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jude\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"less\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jakie\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "lay_words", "dataset", "lay_words", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sortlist", "sort_parameters", "IDtbl", "record", "record", "IDtbl", "assign", "- assigned dirty", "IDtbl", "sortlist", "sort_parameters", "join", "IDtbl", "dataset", "join", "IDtbl", "dataset", "IDtbl", "ds_words_frq", "dataset", "ds_words_frq", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sorted dataset", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "ds_words", "dataset", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Linda\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jude\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"less\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jakie\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "lay_words", "dataset", "lay_words", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sortlist", "sort_parameters", "IDtbl", "record", "record", "IDtbl", "assign", "- assigned dirty", "IDtbl", "sortlist", "sort_parameters", "join", "RECORD_2.field#id < RECORD_2.field#id", "join CONDITION", "join", "lt", "conditional", "join", "transform36", "transform", "join", "field#source_id -> RECORD_2.field#id", "assign", "join", "field#target_id -> RECORD_2.field#id", "assign", "ds_Doc_Combination", "join", "join", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "Trans_Similarity", "transform", "Trans_Similarity", "field#cosinesimilarity -> div", "assign", "Trans_Similarity", "field#source_id -> RECORD_5.field#source_id", "assign", "Trans_Similarity", "field#target_id -> RECORD_5.field#target_id", "assign", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "", "", "ds_Doc_Similarity_Base", "Project(DATASET : ds_Doc_Combination , TRANSFORM : Trans_Similarity)", "hqlproject", "output1", "", "", "output1", "", "", "output2", "ds_Doc_Combination", "dataset", "join", "IDtbl", "dataset", "join", "IDtbl", "dataset", "IDtbl", "ds_words_frq", "dataset", "ds_words_frq", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sorted dataset", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "ds_words", "dataset", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Linda\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jude\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"less\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jakie\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "lay_words", "dataset", "lay_words", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sortlist", "sort_parameters", "IDtbl", "record", "record", "IDtbl", "assign", "- assigned dirty", "IDtbl", "sortlist", "sort_parameters", "join", "IDtbl", "dataset", "join", "IDtbl", "dataset", "IDtbl", "ds_words_frq", "dataset", "ds_words_frq", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sorted dataset", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "ds_words", "dataset", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Linda\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jude\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"less\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jakie\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "lay_words", "dataset", "lay_words", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sortlist", "sort_parameters", "IDtbl", "record", "record", "IDtbl", "assign", "- assigned dirty", "IDtbl", "sortlist", "sort_parameters", "join", "RECORD_2.field#id < RECORD_2.field#id", "join CONDITION", "join", "lt", "conditional", "join", "transform36", "transform", "join", "field#source_id -> RECORD_2.field#id", "assign", "join", "field#target_id -> RECORD_2.field#id", "assign", "ds_Doc_Combination", "join", "join", "output2", "", "", "output2", "", "", "output3", "ds_doc_Base", "dataset", "denormalize1", "PID", "dataset", "denormalize1", "PID", "dataset", "PID", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "hqlproject", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "IDtbl", "dataset", "IDtbl", "ds_words_frq", "dataset", "ds_words_frq", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sorted dataset", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "ds_words", "dataset", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Linda\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jude\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"less\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jakie\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "lay_words", "dataset", "lay_words", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sortlist", "sort_parameters", "IDtbl", "record", "record", "IDtbl", "assign", "- assigned dirty", "IDtbl", "sortlist", "sort_parameters", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "field#id -> RECORD_2.field#id", "assign", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "word_child -> null", "assign", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "", "", "PID", "Project(DATASET : IDtbl , TRANSFORM : transform33)", "hqlproject", "denormalize1", "ds_words_frq", "dataset", "denormalize1", "ds_words_frq", "dataset", "ds_words_frq", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sorted dataset", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "ds_words", "dataset", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Linda\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jude\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"less\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jakie\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "lay_words", "dataset", "lay_words", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sortlist", "sort_parameters", "denormalize1", "RECORD_4.field#id == RECORD_1.field#id", "denormalize1 CONDITION", "denormalize1", "BaseXF", "transform", "denormalize1", "BaseXF", "transform", "BaseXF", "word_child -> addfiles", "assign", "BaseXF", "field#id -> RECORD_4.field#id", "assign", "ds_doc_Base", "denormalize1", "others", "output3", "", "", "output3", "", "", "output4", "ds_words_frq", "dataset", "ds_words_frq", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sorted dataset", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "ds_words", "dataset", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"Linda\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 1", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 2", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 4", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Jane\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"more\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"Julie\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"likes\"", "assign", "ds_words", "field#id -> 5", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jude\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"less\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"than\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"Jakie\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"loves\"", "assign", "ds_words", "field#id -> 3", "assign", "ds_words", "field#word -> D\"me\"", "assign", "ds_words", "lay_words", "dataset", "lay_words", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "record", "record", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "assign", "- assigned dirty", "SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "sortlist", "sort_parameters", "output4", "", "", "output4", "", ""];
exports.records = ["record_IDtbl", "(field#id)", "record_SORT(newaggregate),PARAMETERS : [newaggregate.field#id, ]", "(field#id,field#word_hash,field#frequency)", "record_lay_words", "(field#id,field#word)"];
exports.transformStruct = [];
},{}],"search.js":[function(require,module,exports) {
var data = require("../2/temp2.js");

var nodes = data.node;
document.addEventListener("input", function (e) {
  searching(e);
}, false);

function searching(e) {
  console.log("in seacrh");
  var input = document.getElementById("search").value;
  document.getElementById("nodes-list").replaceChildren();

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].startsWith(input) || input.length == 0) {
      (function () {
        var nodeLabel = getLabel(nodes[i]);
        var nodeButton = getButton('nodes-list', nodes[i]);

        nodeButton.onclick = function (e) {
          console.log('node button clicked');
          var val = nodeButton.value.replace(".", ".field#"); // val.replaceAll(".field#field#",".field#");

          submitFunc(null, null, -1, val);
        };

        injectElements(nodeButton, nodeLabel, "nodes-list");
      })();
    }
  }
}

;
},{"../2/temp2.js":"../2/temp2.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51148" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","search.js"], null)
//# sourceMappingURL=/search.475a728d.js.map