# Ludopolis: Bobinette
<https://ludopolis.ca>

Il s'agit d'un site statique basé sur Gridsome (Vue/Javascript), hébergé chez Netlify.

Le repo présent constitue le site et son contenu.

## Cartogramme
```
+------------------------------+                                                                                                        
|     Domaine (Registrar)      |                                                                                                        
|------------------------------|     (Établit la propriété et le                                                                        
|                              |      contrôle du nom de domaine)                                                                       
|       Gandi | David          |                                                                                                        
|                              |     Expiration: 2023-12-05                                                                             
|       ludopolis.ca           |                                                                                                        
|                              |     Coût: ~15$/an                                                                                      
+------------------------------+                                                                                                        
                |                                                                                                                      
                |                                                                                                                      
                v                                                                                                                      
+------------------------------+                                                                                                        
|             DNS              |     (C'est ce qui dit aux requêtes                                                                     
--------------------------------      où trouver chaque service)                                                                        
|                              |                                                                                                        
|   Netlify DNS | Jonathan     |-----------------------------+                                                                          
|                              |      MX                     |                                                                          
|     dns*.p06.nsone.net       |                             v                                                                          
|                              |              +-----------------------------+                                                           
+------------------------------+              |          Courriels          |                                                           
                |  A/AAAA                     -------------------------------                                                           
                |                             |                             |                                                           
                |                             |   Google Worksp. | David    |                                                           
                |                             |                             |                                                           
                |                             |        @ludopolis.ca        |                                                           
                v                             |                             |                                                           
+------------------------------+              +-----------------------------+                                                           
|     Hébergement du site      |               (Entrepose et transmet les courriels)                                                    
--------------------------------                                                                                                        
|                              |                                                                                                        
|   Netlify Sites | Jonathan   |  (Serveur qui répond chaque                                                                            
|                              |   fois qu'on visite le site)                                                                           
|     ludopolis-bobinette      |                                                                                                        
|                              |  (Netlify compile le code en un site web)                                                              
+------------------------------+                                                                                                        
                ^                                                                                                                       
                |                                                                                                                       
                ^  (à chaque changement, le code est envoyé                                                                             
                |   pour re-générer la nouvelle version du site)                                                                        
                ^                                                                                                                       
                |                                                                                                                       
+-------------------------------+                                                                                                       
|     Hébergement du code       |                                                                                                       
---------------------------------                                                                                                       
|                               |  (Contient le code qui constitue                                                                      
|      Github | Jonathan        |   le site)                                                                                            
|                               |                                                                                                       
| joallard/ludopolis-bobinette  |                                                                                                       
|                               |                                                                                                       
+-------------------------------+                                                                                                                                                                                                                                            
```
