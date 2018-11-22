use bandtec;
create table Fabricante(
codigo int primary key auto_increment, 
nome varchar (30),
endereço varchar (30),
codProd int,
descricaoProd varchar (30), 
quantProd int
);

insert into Fabricante values
(1, "Cusco", "rua machu pichu", 1, "llamas", 4), 
(2,"Aurora", "rua chile", 2, "vinho",7),
(null, "Montevideo", "rua uruguay", 3, "marijuana",15),
(null, "Asuncion", "rua paraguay", 4, "Itaipu", 29),
(null, "Bogotá", "rua colombia", 5, "Folha de Coca", 30),
(null, "La Paz", "rua Bolivia", 6, "Titicaca", 50), 
(null, "Aconcagua", "rua Argentina", 7,"Bombonera", 27),
(null, "Guayaquil", "rua Ecuador", 8, "Amazon", 43),
(null, "Caracas", "rua venezuela", 9, "oil", 88); 


select*from Fabricante;
drop table Fabricante;