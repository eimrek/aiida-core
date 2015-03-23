# -*- coding: utf-8 -*-

__copyright__ = u"Copyright (c), 2014, École Polytechnique Fédérale de Lausanne (EPFL), Switzerland, Laboratory of Theory and Simulation of Materials (THEOS). All rights reserved."
__license__ = "Non-Commercial, End-User Software License Agreement, see LICENSE.txt file"
__version__ = "0.2.1"

class BaseTcodtranslator(object):
    _plugin_type_string = None

    @classmethod
    def get_total_energy(cls,parameters,**kwargs):
        """
        Returns the total energy in eV.
        """
        raise NotImplementedError("not implemented in base class")

    @classmethod
    def get_one_electron_energy(cls,parameters,**kwargs):
        """
        Returns one electron energy in eV.
        """
        raise NotImplementedError("not implemented in base class")

    @classmethod
    def get_exchange_correlation_energy(cls,parameters,**kwargs):
        """
        Returns one exchange correlation (XC) energy in eV.
        """
        raise NotImplementedError("not implemented in base class")

    @classmethod
    def get_ewald_energy(cls,parameters,**kwargs):
        """
        Returns Ewald energy in eV.
        """
        raise NotImplementedError("not implemented in base class")

    @classmethod
    def get_hartree_energy(cls,parameters,**kwargs):
        """
        Returns Hartree energy in eV.
        """
        raise NotImplementedError("not implemented in base class")

    @classmethod
    def get_fermi_energy(cls,parameters,**kwargs):
        """
        Returns Fermi energy in eV.
        """
        raise NotImplementedError("not implemented in base class")

    @classmethod
    def get_number_of_electrons(cls,parameters,**kwargs):
        """
        Returns the number of electrons.
        """
        raise NotImplementedError("not implemented in base class")

    @classmethod
    def get_computation_wallclock_time(cls,parameters,**kwargs):
        """
        Returns the computation wallclock time in seconds.
        """
        raise NotImplementedError("not implemented in base class")
