import { Injectable } from '@angular/core';
import { DatabaseService } from '../shared/database.service'
import { Ponto } from './ponto'

@Injectable()
export class pontoService {

    constructor(public dbService: DatabaseService) { }

    /**
     * Busca  no banco de dados
     */
   public getAll() {
        return this.dbService.executeSQL('select * from ponto', {})
            .then((data) => {
                var pontos: Ponto[] = [];

                for (var i = 0; i < data.rows.length; i++) {
                    var row = data.rows.item(i);
                    var ponto = new Ponto();
                    ponto.id = row.id
                    ponto.entrada = row.entrada;
                    ponto.intervalo = row.intervalo;
                    ponto.retorno = row.retorno;
                    ponto.saida = row.saida;
                    ponto.extra = row.extra;
                    pontos.push(ponto);
                }

                return pontos;
            })
            .catch(e => console.log(e));
    }

    /**
     * Salva uma no banco de dados
     * @param ponto
     */
    public save(ponto: Ponto) {
        if (ponto.id) {
            return this.update(ponto);
        } else {
            return this.insert(ponto);
        }
    }

    /**
     * Insere  no banco de dados
     * @param ponto
     */
    private insert(ponto: Ponto) {
        return this.dbService.executeSQL('insert into ponto (date) values(?)', [ponto.data])
            .then((data) => {
                return true;
            })
            .catch(e => {
                console.log(e);
                return false;
            });
    }

    /**
     * Atualiza no banco de dados
     * @param ponto
     */
    private update(ponto: Ponto) {
        return this.dbService.executeSQL('update ponto set name = ? where id = ?',
            [ponto.data, ponto.id])
            .then((data) => {
                return true;
            })
            .catch(e => {
                console.log(e);
                return false;
            });
    }

    /**
     * Verifica se pode remover do banco de dados
     * @param id
     */
    public canRemove(id: number) {
        return this.dbService.executeSQL('select id from ponto where id = ?', [id])
            .then((data) => {
                if (data.rows.length > 0) {
                    return false
                } else {
                    return true;
                }
            })
            .catch(e => {
                console.log(e);
                return false;
            });
    }

    /**
     * Remove  do banco de dados
     * @param id
     */
    public remove(id: number) {
        return this.dbService.executeSQL('delete from ponto where id = ?', [id])
            .then((data) => {
                return true;
            })
            .catch(e => {
                console.log(e);
                return false;
            });
    }


}
