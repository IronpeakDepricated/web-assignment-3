"use strict";

describe("SellerDlgController", function() {

    beforeEach(module("project3App"));

    beforeEach(module('translateNoop'));

    var controller, scope, modal;

    describe("With modalParam", function() {

        beforeEach(inject(function($controller, $rootScope, $injector) {

            scope = $rootScope.$new();
            modal = {
                var1: 10,
                var2: 'abc',
                var3: 1000,
                var4: "string"
            };

            controller = $controller("SellerDlgController", {
                $scope: scope,
                modalParam: modal
            });

        }));

        it("constructor should set scope seller to modal", function() {
            expect(scope.seller).toBe(modal);
        });

        it("onOk should call close with scope seller", function() {

            scope.seller = {
                id: 3,
                name: "Hrafn Orri",
                category: "Cloths",
                imagePath: "www.image.com/abc.jpg"
            };
            scope.$close = jasmine.createSpy('$close');

            scope.onOk();

            expect(scope.$close).toHaveBeenCalledWith(scope.seller);
        });

        it("onCancel should call dismiss", function() {

            scope.$dismiss = jasmine.createSpy('$dismiss');

            scope.onCancel();

            expect(scope.$dismiss).toHaveBeenCalled();
        });

    });

    describe("Without modalParam", function() {

        beforeEach(inject(function($controller, $rootScope, $injector) {

            scope = $rootScope.$new();
            modal = undefined;

            controller = $controller("SellerDlgController", {
                $scope: scope,
                modalParam: modal
            });

        }));

        it("onOk should call close with scope seller", function() {

            scope.seller = {
                id: 3,
                name: "Hrafn Orri",
                category: "Cloths",
                imagePath: "www.image.com/abc.jpg"
            };
            scope.$close = jasmine.createSpy('$close');

            scope.onOk();

            expect(scope.$close).toHaveBeenCalledWith(scope.seller);
        });

        it("onCancel should call dismiss", function() {

            scope.$dismiss = jasmine.createSpy('$dismiss');

            scope.onCancel();

            expect(scope.$dismiss).toHaveBeenCalled();
        });

    });

});