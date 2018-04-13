import {moduloActividad, actividadTest} from '../../../helpers/actividadTest';

let nombre = "3.1.3c";

moduloActividad(nombre);

actividadTest(nombre, {
  descripcionAdicional: "La solución sin repetición resuelve el problema",
  solucion: `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="MoverACasillaAbajo">
      <next>
      <block type="MoverACasillaAbajo">
      <next>
      <block type="MoverACasillaAbajo">
      <next>
      <block type="MoverACasillaDerecha">
      <next>
      <block type="MoverACasillaDerecha">
      <next>
      <block type="MoverACasillaDerecha">
      <next>
      <block type="MoverACasillaDerecha">
      <next>
      <block type="MoverACasillaDerecha">
      <next>
      <block type="MoverACasillaDerecha">
      <next>
      <block type="ComerChurrasco">
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
      </next>
      </block>
    </statement>
    </block>
  </xml>`
});

actividadTest(nombre, {
  descripcionAdicional: "La solución con repetición resuelve el problema",
  solucion: `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="15" y="15">
    <statement name="program">
      <block type="repetir">
        <value name="count">
          <block type="math_number">
            <field name="NUM">3</field>
          </block>
        </value>
        <statement name="block">
          <block type="MoverACasillaAbajo">
          </block>
        </statement>
      <next>
      <block type="repetir">
        <value name="count">
          <block type="math_number">
            <field name="NUM">6</field>
          </block>
        </value>
        <statement name="block">
          <block type="MoverACasillaDerecha">
          </block>
        </statement>
      <next>
      <block type="ComerChurrasco">
      </block>
      </next>
      </block>
      </next>
      </block>
    </statement>
    </block>
  </xml>`,
});
