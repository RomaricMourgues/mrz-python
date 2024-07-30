from dist.mrz import mrz

res = mrz.parse(['I<UTOD23145890<1233<<<<<<<<<<<','7408122F1204159UTO<<<<<<<<<<<6','ERIKSSON<<ANNA<MARIA<<<<<<<<<<'])
print(res)
