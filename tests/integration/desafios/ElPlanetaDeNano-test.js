import {moduloActividad, actividadTest} from '../../helpers/actividadTest';

const nombre = "ElPlanetaDeNano";

moduloActividad(nombre);

actividadTest(nombre, {
	solucion: `<?xml version="1.0" encoding="UTF-8"?>
	<xml xmlns="http://www.w3.org/1999/xhtml">
	   <block type="al_empezar_a_ejecutar" id="2" deletable="false" movable="false" editable="false" x="0" y="0">
		  <statement name="program">
			 <block type="procedures_callnoreturn" id="3" inline="true">
				<mutation name="comer">
				   <arg name="cant" />
				</mutation>
				<value name="ARG0">
				   <block type="math_number" id="4">
					  <field name="NUM">3</field>
				   </block>
				</value>
				<next>
				   <block type="MoverACasillaArriba" id="5">
					  <next>
						 <block type="procedures_callnoreturn" id="6" inline="true">
							<mutation name="comer">
							   <arg name="cant" />
							</mutation>
							<value name="ARG0">
							   <block type="math_number" id="7">
								  <field name="NUM">1</field>
							   </block>
							</value>
							<next>
							   <block type="MoverACasillaArriba" id="8">
								  <next>
									 <block type="procedures_callnoreturn" id="9" inline="true">
										<mutation name="comer">
										   <arg name="cant" />
										</mutation>
										<value name="ARG0">
										   <block type="math_number" id="10">
											  <field name="NUM">4</field>
										   </block>
										</value>
										<next>
										   <block type="MoverACasillaArriba" id="11">
											  <next>
												 <block type="procedures_callnoreturn" id="12" inline="true">
													<mutation name="comer">
													   <arg name="cant" />
													</mutation>
													<value name="ARG0">
													   <block type="math_number" id="13">
														  <field name="NUM">2</field>
													   </block>
													</value>
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
	   <block type="procedures_defnoreturn" id="14" x="282" y="33">
		  <mutation>
			 <arg name="cant" />
		  </mutation>
		  <field name="NAME">comer</field>
		  <statement name="STACK">
			 <block type="Repetir" id="15" inline="true">
				<value name="count">
				   <block type="param_get" id="16">
					  <field name="VAR">cant</field>
				   </block>
				</value>
				<statement name="block">
				   <block type="MoverACasillaDerecha" id="17">
					  <next>
						 <block type="ComerBanana" id="18" />
					  </next>
				   </block>
				</statement>
				<next>
				   <block type="VolverAlBordeIzquierdo" id="19" />
				</next>
			 </block>
		  </statement>
	   </block>
	</xml>`,
});
