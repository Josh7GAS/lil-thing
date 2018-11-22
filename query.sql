create table usuario(idUsuario int identity primary key,
                     nmUsuario varchar (50),
                     telefone varchar (15),
                     senhaUsuario varchar (10),
                     emailUsuario varchar (50));

create table arduino (idArduino int identity primary key ,
                      dadoUmidade varchar (10),
                      dadoTemperatura varchar (10));

create table dados (idDados int primary key identity,
                    hora time,
                    diaData date,
                    fkUsuario int,
                    fkArduino int,
                    foreign key (fkUsuario) references usuario (idUsuario),
                    foreign key (fkArduino) references arduino (idArduino));

create table enderecoUsuario (idEndereco int identity primary key,
                              bairro varchar (10),
                              CEP varchar (10),
                              cidade varchar (30),
                              rua varchar (40),
                              nrResidencia varchar (10),
                              fkUsuario int,
                              foreign key (fkUsuario) references usuario (idUsuario));

select * from usuario, arduino, dados, enderecoUsuario;
