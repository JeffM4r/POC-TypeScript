PGDMP     8                
    z         	   notations %   12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)    15.0     r           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            s           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            t           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            u           1262    25274 	   notations    DATABASE     q   CREATE DATABASE notations WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C.UTF-8';
    DROP DATABASE notations;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            v           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    7            ?            1259    25277    notes    TABLE     O   CREATE TABLE public.notes (
    id integer NOT NULL,
    text text NOT NULL
);
    DROP TABLE public.notes;
       public         heap    postgres    false    7            ?            1259    25275    notes_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.notes_id_seq;
       public          postgres    false    7    203            w           0    0    notes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.notes_id_seq OWNED BY public.notes.id;
          public          postgres    false    202            ?
           2604    25286    notes id    DEFAULT     d   ALTER TABLE ONLY public.notes ALTER COLUMN id SET DEFAULT nextval('public.notes_id_seq'::regclass);
 7   ALTER TABLE public.notes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            o          0    25277    notes 
   TABLE DATA           )   COPY public.notes (id, text) FROM stdin;
    public          postgres    false    203   ?       x           0    0    notes_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.notes_id_seq', 7, true);
          public          postgres    false    202            ?
           2606    25285    notes notes_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.notes
    ADD CONSTRAINT notes_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.notes DROP CONSTRAINT notes_pkey;
       public            postgres    false    203            o   C   x?3?,NLI,FF\&?ũ?
9?
??y?
paS???\朩?%??
???
E?饙??'r??qqq A4#}     