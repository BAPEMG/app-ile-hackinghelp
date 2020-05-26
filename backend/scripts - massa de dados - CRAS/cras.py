import urllib.request as urllib
import json
import boto3
import uuid

# georef_location removido - app CRAS
# De: http://www.dados.gov.br/dataset/unidades-de-atendimento-da-assistencia-social

def aws_boto3_session_table():
  session = boto3.session.Session(profile_name='marilia',
                                  region_name='us-east-1')

  client = session.client('dynamodb')
  return client

def main():

  url = 'http://aplicacoes.mds.gov.br/sagi/servicos/equipamentos?q=tipo_equipamento:CRAS&wt=json&fl=id_equipamento,ibge,uf,cidade,nome,responsavel,telefone,endereco,numero,complemento,referencia,bairro,cep,data_atualizacao&rows=999999999'
  response = urllib.urlopen(url)
  data = json.loads(response.read())

  for cras_item in data['response']['docs']:
    print(cras_item['nome'])

    session_table = aws_boto3_session_table()

    response = session_table.update_item(
      TableName='cras',
      Key={
            'id': {'S': str(uuid.uuid4())}
          },
      UpdateExpression='''SET cidade = :cidade,
                          endereco = :endereco,
                          numero = :numero,
                          ibge = :ibge,
                          bairro = :bairro,
                          nome = :nome,
                          cep = :cep,
                          data_atualizacao = :data_atualizacao,
                          uf = :uf,
                          complemento = :complemento,
                          id_equipamento = :id_equipamento,
                          referencia = :referencia''',
      ExpressionAttributeValues={
        ':cidade': {'S': cras_item['cidade']},
        ':endereco': {'S': cras_item['endereco']},
        ':numero': {'S': cras_item['numero']},
        ':ibge': {'S': cras_item['ibge']},
        ':bairro': {'S': cras_item['bairro']},
        ':nome': {'S': cras_item['nome']},
        ':cep': {'S': cras_item['cep']},
        ':data_atualizacao': {'S': cras_item['data_atualizacao']},
        ':uf': {'S': cras_item['uf']},
        ':id_equipamento': {'S': cras_item['id_equipamento']},
        ':referencia': {'S': cras_item['referencia']},
        ':complemento': {'S': cras_item['complemento']}
      },
      ReturnValues='UPDATED_NEW'

  )

  print(response)


if __name__ == '__main__':
    main()

