using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationAngularJS.Models
{
    public class Pessoa
    {
        public string Name { get; set; }

        public int Idade { get; set; }

        public Pessoa() { }

        public Pessoa(string nome, int idade)
        {
            this.Name = nome;
            this.Idade = idade;
        }
        public List<Pessoa> ListarPessoas()
        {
            return new List<Pessoa>
            {
                new Pessoa("Victor Jordao",10),
                new Pessoa("Celso", 20),
                new Pessoa("Cassio", 30)
        };
        }
    }
}