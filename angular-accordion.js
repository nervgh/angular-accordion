/*
 angular-accordion v0.1.0
 https://github.com/nervgh/angular-accordion
*/
angular


    .module('angularAccordion', [])


    .factory('Accordion', [
        function() {
            'use strict';

            /**
             * Creates object
             * @param {Array} [folds]
             * @constructor
             */
            function Accordion(folds) {
                this._cache = {};
                this.addFolds(folds || []);
            }

            /**
             * Adds folds
             * @param {Array} array
             */
            Accordion.prototype.addFolds = function(array) {
                Object.keys(array).forEach(function(key) {
                    this.addFold(key);
                }, this);
            };
            /**
             * Adds folds
             * @param {String} key
             */
            Accordion.prototype.addFold = function(key) {
                this.collapseFold(key);
            };
            /**
             * Returns "true" if fold already exists
             * @param {String} key
             * @returns {Boolean}
             */
            Accordion.prototype.hasFold = function(key) {
                return key in this._cache;
            };
            /**
             * Removes fold
             * @param {String} key
             */
            Accordion.prototype.removeFold = function(key) {
                delete this._cache[key];
            };
            /**
             * Removes all folds
             */
            Accordion.prototype.removeAllFolds = function() {
                this._cache = {};
            };
            /**
             * Expands fold
             * @param {String} key
             */
            Accordion.prototype.expandFold = function(key) {
                this.collapseAllFolds();
                this._cache[key] = true;
            };
            /**
             * Collapses fold
             * @param {String} key
             */
            Accordion.prototype.collapseFold = function(key) {
                this._cache[key] = false;
            };
            /**
             * Toggles fold
             * @param {String} key
             */
            Accordion.prototype.toggleFold = function(key) {
                if (this.isExpandedFold(key)) {
                    this.collapseFold(key);
                } else {
                    this.expandFold(key);
                }
            };
            /**
             * Returns "true" if fold is expanded
             * @param {String} key
             * @returns {Boolean}
             */
            Accordion.prototype.isExpandedFold = function(key) {
                return !!this._cache[key];
            };
            /**
             * Returns "true" if fold is collapsed
             * @param {String} key
             * @returns {Boolean}
             */
            Accordion.prototype.isCollapsedFold = function(key) {
                return !this._cache[key];
            };
            /**
             * Collapses all folds
             */
            Accordion.prototype.collapseAllFolds = function() {
                Object.keys(this._cache).forEach(this.collapseFold, this);
            };

            return Accordion;
        }
    ]);
