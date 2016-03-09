(function () {
    'use strict';

    describe('controllers', function () {
        var vm;

        beforeEach(module('gkcSampleApp'));
        beforeEach(inject(function (_$controller_, _mainNavService_) {
            spyOn(_mainNavService_, 'getAllItems').and.returnValue([{}, {}]);
            vm = _$controller_('MainController');
        }));

        it('should define 2 menu items', function() {
            expect(angular.isArray(vm.menuItems)).toBeTruthy();
            expect(vm.menuItems.length === 2).toBeTruthy();
        });

        describe('toggleSidenav function', function () {
            it('should exist', function () {
                expect(vm.toggleSidenav).not.toEqual(null);
            });
        });

        describe('closeSidenav function', function () {
            it('should exist', function () {
                expect(vm.closeSidenav).not.toEqual(null);
            });
        });

    });
})();
