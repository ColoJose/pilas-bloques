import {moduloActividad, actividadTest} from '../../../helpers/actividadTest';

let nombre = "3.1.6a";

moduloActividad(nombre);

actividadTest(nombre, {
	solucion: `<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="MoverACasillaDerecha" id="BJ|W.@^]0)N!2fuSQ6AR">
        <next>
          <block type="MoverACasillaDerecha" id="kcHGhY1uoSxhst1DKBvQ">
            <next>
              <block type="MoverACasillaDerecha" id="=F5jGU,B}4mVwjTPr{#N">
                <next>
                  <block type="ComerChurrasco" id="~vuJkD5{o_7zGnfy]k%s"></block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`,
});