/* global describe, it, expect */
(function() {
    // 'use strict';

    describe('JS Test', function() {

        it('1. ¿Qué devuelve la siguiente función?', function() {

            var result = (function() {
                return typeof arguments;
            })();

            // expect(result).to.be.equal('array');
            // expect(result).to.be.equal('arguments');
            // expect(result).to.be.equal(undefined);
            expect(result).to.be.equal('object');

        });

        it('2. ¿Qué tipo de datos devuelve este código?', function() {

            var f = function g() {
                return 23;
            };

            // var result = typeof g();

            // expect(result).to.be.equal('number');
            expect(function() {
            	typeof g()
            }).to.throw(Error);
            // expect(result).to.be.equal(undefined);
            // expect(result).to.be.equal('function');

        });

        it('3. ¿Qué obtenemos al ejecutar este código?', function() {

            var result = (function(x) {
                delete x;
                return x;
            })(1);

            // expect(result).to.be.equal(null);
            // expect(result).to.be.equal(undefined);
            expect(result).to.be.equal(1);
            // expect(result).to.throw(Error);

        });

        it('4. ¿Cuál es el valor de X tras esta expresión?', function() {

            var y = 1, x = y = typeof x;

            var result = x;

            // expect(result).to.be.equal(1);
            // expect(result).to.be.equal('number');
            expect(result).to.be.equal('undefined');
            // expect(result).to.be.equal(undefined);

        });

        it('5. ¿Qué obtendríamos con...?', function() {

            var result = (function(f) {
                return typeof f();
            })(function() { return 1; });

            // expect(result).to.be.equal(undefined);
            // expect(result).to.be.equal('function');
            expect(result).to.be.equal('number');
            // expect(result).to.throw(Error);

        });

        it('6. Objetos y funciones anónimas ¿Qué obtenemos aquí?', function() {

            var foo = {
                bar: function() {
                    return this.baz;
                },
                baz: 1
            };
            var result = (function() {
                return typeof arguments[0]();
            })(foo.bar);

            // expect(result).to.be.equal('object');
            // expect(result).to.be.equal('number');
            expect(result).to.be.equal('undefined');
            // expect(result).to.be.equal('function');

        });

        it('7. Más tipos', function() {

            var foo = {
                bar: function() {
                    return this.baz;
                },
                baz: 1
            };
            var result = typeof (f = foo.bar)();

            // expect(result).to.be.equal('object');
            // expect(result).to.be.equal('number');
            expect(result).to.be.equal('undefined');
            // expect(result).to.be.equal('function');

        });

        it('8. Estructuras anidadas ¿Qué tipo de objeto es f?', function() {

            var f = (function f() { return '1'; }, function g() { return 2; })(); 
            var result = typeof f;

            // expect(result).to.be.equal('string');
            // expect(result).to.be.equal('function');
            expect(result).to.be.equal('number');
            // expect(result).to.be.equal('undefined');

        });

        it('9. Arrays y coerción', function() {

        	var x = [typeof x, typeof y][1];
            var result = typeof typeof x;

            // expect(result).to.be.equal('number');
            // expect(result).to.be.equal('undefined');
            // expect(result).to.be.equal('object');
            expect(result).to.be.equal('string');

        });

        it('10. Funciones autoejecutables con objetos como parámetros', function() {

            var result = (function(foo){
            	return typeof foo.bar;
            })({foo: { bar: 1 }});

            // expect(result).to.be.equal('object');
            // expect(result).to.be.equal('number');
            expect(result).to.be.equal('undefined');
            // expect(result).to.throw(Error);

        });

        it('11. Funciones anidadas autorreferentes', function() {

            var result = (function f() {
            	function f() { return 1; }
            	return f();
            	function f() { return 2; }

            })();

            // expect(result).to.be.equal(1);
            // expect(result).to.throw(Error);
            expect(result).to.be.equal(2);
            // expect(result).to.be.equal(undefined);

        });

        it('12. Constructores ampliados', function() {

        	function f() { return f; }

            var result = new f() instanceof f;

            expect(result).to.be.equal(false);
            // expect(result).to.be.equal(true);

        });

        it('13. Bucles radicales', function() {

            // var result = with (function(x, undefined) {}) length;

            // expect(result).to.be.equal(1);
            // expect(result).to.be.equal(undefined);
            // expect(result).to.throw(Error);
            // expect(result).to.be.equal(2);

        });

    });


}).call(this);