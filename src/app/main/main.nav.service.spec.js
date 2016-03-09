(function () {
    'use strict';

    describe('service mainNavService', function () {
        var mainNavService;

        beforeEach(module('gkcSampleApp'));
        beforeEach(inject(function (_mainNavService_) {
            mainNavService = _mainNavService_;
        }));

        it('should be registered', function () {
            expect(mainNavService).not.toEqual(null);
        });

        describe('getAllItems function', function () {
            it('should exist', function () {
                expect(mainNavService.getAllItems).not.toEqual(null);
            });

            it('should return array of object', function () {
                var data = mainNavService.getAllItems();
                expect(data).toEqual(jasmine.any(Array));
                expect(data[0]).toEqual(jasmine.any(Object));
                expect(data.length === 2).toBeTruthy();
            });
        });
    });
})();
